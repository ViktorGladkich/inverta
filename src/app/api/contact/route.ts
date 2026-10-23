import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);

// Fail-closed: without an explicit env list we still only accept our own
// domains (plus the current Vercel deployment URL for previews).
const DEFAULT_ORIGINS = [
  "https://invertadigital.de",
  "https://www.invertadigital.de",
];

const ALLOWED_ORIGINS = new Set(
  [
    ...(process.env.CONTACT_ALLOWED_ORIGINS
      ? process.env.CONTACT_ALLOWED_ORIGINS.split(",")
      : DEFAULT_ORIGINS),
    process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`,
    process.env.VERCEL_BRANCH_URL && `https://${process.env.VERCEL_BRANCH_URL}`,
    process.env.NODE_ENV !== "production" && "http://localhost:3000",
  ]
    .filter((s): s is string => typeof s === "string")
    .map((s) => s.trim())
    .filter(Boolean),
);

const MAX_BODY_BYTES = 16 * 1024;

const ContactSchema = z.object({
  anrede: z.enum(["Herr", "Frau", "Divers / Keine Angabe"]),
  name: z
    .string()
    .min(2)
    .max(120)
    .regex(/^[^\r\n]+$/, "Ungültige Zeichen"),
  email: z.string().email().max(254),
  telefon: z
    .string()
    .min(5)
    .max(40)
    .regex(/^[0-9+()\/.\-\s]+$/, "Ungültige Telefonnummer"),
  company: z.string().max(120).optional().or(z.literal("")),
  service: z.enum([
    "Marketing & SEO",
    "Webentwicklung",
    "KI-Automatisierung",
    "Etwas anderes",
  ]),
  message: z.string().min(10).max(4000),
  privacy: z.literal(true),
  turnstileToken: z.string().max(2048).optional(),
  // Honeypot — checked after validation so bots get a fake success
  website: z.string().max(500).optional(),
});

type ContactInput = z.infer<typeof ContactSchema>;

const escapeHtml = (s: unknown): string =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c] as string,
  );

const stripCRLF = (s: unknown): string =>
  String(s ?? "").replace(/[\r\n]+/g, " ").trim();

function renderEmailHtml(input: ContactInput, consentAt: string): string {
  const e = {
    anrede: escapeHtml(input.anrede),
    name: escapeHtml(input.name),
    email: escapeHtml(input.email),
    telefon: escapeHtml(input.telefon),
    company: escapeHtml(input.company || "-"),
    service: escapeHtml(input.service),
    message: escapeHtml(input.message),
    consentAt: escapeHtml(consentAt),
  };
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #000;">
      <h2 style="font-size: 24px; margin-bottom: 20px; border-bottom: 2px solid #000; padding-bottom: 10px;">
        Neue Lead-Anfrage
      </h2>
      <table style="width: 100%; max-width: 600px; border-collapse: collapse;">
        <tbody>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; width: 30%;">Name:</td>
            <td style="padding: 10px 0;">${e.anrede} ${e.name}</td>
          </tr>
          <tr style="border-top: 1px solid #eee;">
            <td style="padding: 10px 0; font-weight: bold;">E-Mail:</td>
            <td style="padding: 10px 0;">
              <a href="mailto:${e.email}" style="color: #000; text-decoration: underline;">${e.email}</a>
            </td>
          </tr>
          <tr style="border-top: 1px solid #eee;">
            <td style="padding: 10px 0; font-weight: bold;">Telefon:</td>
            <td style="padding: 10px 0;">
              <a href="tel:${e.telefon}" style="color: #000; text-decoration: underline;">${e.telefon}</a>
            </td>
          </tr>
          <tr style="border-top: 1px solid #eee;">
            <td style="padding: 10px 0; font-weight: bold;">Unternehmen:</td>
            <td style="padding: 10px 0;">${e.company}</td>
          </tr>
          <tr style="border-top: 1px solid #eee;">
            <td style="padding: 10px 0; font-weight: bold;">Bereich:</td>
            <td style="padding: 10px 0;">${e.service}</td>
          </tr>
          <tr style="border-top: 1px solid #eee;">
            <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Nachricht:</td>
            <td style="padding: 10px 0; white-space: pre-wrap;">${e.message}</td>
          </tr>
          <tr style="border-top: 1px solid #eee;">
            <td style="padding: 10px 0; font-weight: bold;">Datenschutz:</td>
            <td style="padding: 10px 0;">Einwilligung erteilt am ${e.consentAt}</td>
          </tr>
        </tbody>
      </table>
      <p style="margin-top: 40px; font-size: 12px; color: #888;">
        Diese E-Mail wurde automatisiert von der INVERTA DIGITAL Website generiert.
      </p>
    </div>
  `;
}

// Rate limiting: Upstash Redis (shared across serverless instances) when
// configured, otherwise a per-instance in-memory fallback.
const REDIS_URL =
  process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
const REDIS_TOKEN =
  process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;

const IP_LIMIT = { max: 5, windowSec: 10 * 60 };
// Caps how often one address can be targeted (n8n sends an auto-reply).
const EMAIL_LIMIT = { max: 3, windowSec: 24 * 60 * 60 };

const buckets = new Map<string, number[]>();

function memoryLimited(key: string, max: number, windowSec: number): boolean {
  const now = Date.now();
  const windowMs = windowSec * 1000;
  if (buckets.size > 5000) {
    for (const [k, ts] of buckets) {
      if (ts.every((t) => now - t >= windowMs)) buckets.delete(k);
    }
  }
  const arr = (buckets.get(key) ?? []).filter((t) => now - t < windowMs);
  const limited = arr.length >= max;
  if (!limited) arr.push(now);
  buckets.set(key, arr);
  return limited;
}

async function rateLimited(
  key: string,
  { max, windowSec }: { max: number; windowSec: number },
): Promise<boolean> {
  if (REDIS_URL && REDIS_TOKEN) {
    try {
      const redisKey = `contact:rl:${key}`;
      const res = await fetch(`${REDIS_URL}/pipeline`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${REDIS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          ["INCR", redisKey],
          ["EXPIRE", redisKey, String(windowSec), "NX"],
        ]),
        signal: AbortSignal.timeout(3000),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const [incr] = (await res.json()) as [{ result?: number }];
      if (typeof incr?.result !== "number") throw new Error("bad response");
      return incr.result > max;
    } catch (e) {
      const msg = e instanceof Error ? e.message : "unknown";
      console.error("[contact] rate limit store failed:", msg);
    }
  }
  return memoryLimited(key, max, windowSec);
}

function getClientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

// Cloudflare Turnstile — enforced only when both keys are set, so the form
// never requires a token the client cannot render a widget for.
async function verifyTurnstile(
  token: string | undefined,
  ip: string,
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret || !process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) return true;
  if (!token) return false;
  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip !== "unknown") body.set("remoteip", ip);
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body, signal: AbortSignal.timeout(5000) },
    );
    const json = (await res.json()) as { success?: boolean };
    return json.success === true;
  } catch (e) {
    const msg = e instanceof Error ? e.message : "unknown";
    console.error("[contact] turnstile verify failed:", msg);
    return false;
  }
}

const tooMany = () =>
  NextResponse.json(
    { error: "Zu viele Anfragen. Bitte versuchen Sie es später." },
    { status: 429 },
  );

export async function POST(req: Request) {
  try {
    // 1. Origin check (CSRF defense)
    const origin = req.headers.get("origin");
    if (!origin || !ALLOWED_ORIGINS.has(origin)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // 2. Only JSON — blocks cross-site "simple" text/plain form posts
    const contentType = req.headers.get("content-type") ?? "";
    if (!contentType.toLowerCase().startsWith("application/json")) {
      return NextResponse.json(
        { error: "Ungültiger Request" },
        { status: 415 },
      );
    }

    // 3. Rate limit per IP
    const ip = getClientIp(req);
    if (await rateLimited(`ip:${ip}`, IP_LIMIT)) return tooMany();

    // 4. Body parse + size guard
    const declaredLength = Number(req.headers.get("content-length") ?? 0);
    if (declaredLength > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Request zu groß" }, { status: 413 });
    }
    const text = await req.text();
    if (Buffer.byteLength(text) > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Request zu groß" }, { status: 413 });
    }
    let raw: unknown;
    try {
      raw = JSON.parse(text);
    } catch {
      return NextResponse.json({ error: "Ungültiger Request" }, { status: 400 });
    }

    // 5. Validation
    const parsed = ContactSchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Bitte überprüfen Sie Ihre Eingaben." },
        { status: 400 },
      );
    }
    const data = parsed.data;

    // 6. Honeypot — never drop silently: browser extensions and password
    // managers can fill hidden fields for real visitors. Flag the lead
    // instead and skip the n8n auto-reply for it.
    const suspectedSpam = Boolean(data.website && data.website.length > 0);
    if (suspectedSpam) {
      console.warn(
        "[contact] honeypot filled — flagged as spam, length:",
        data.website?.length,
      );
    }

    // 7. Bot check
    if (!(await verifyTurnstile(data.turnstileToken, ip))) {
      return NextResponse.json(
        { error: "Sicherheitsprüfung fehlgeschlagen. Bitte erneut versuchen." },
        { status: 403 },
      );
    }

    // 8. Rate limit per recipient address (prevents auto-reply bombing)
    const emailKey = data.email.trim().toLowerCase();
    if (await rateLimited(`email:${emailKey}`, EMAIL_LIMIT)) return tooMany();

    const consentAt = new Date().toISOString();

    // 9. Send email (subject CRLF-stripped, HTML escaped)
    const subjectName = stripCRLF(data.name);
    const subjectCompany = stripCRLF(data.company || "Ohne Unternehmen");
    const sendResult = await resend.emails.send({
      from: "INVERTA DIGITAL <hello@invertadigital.de>",
      to: ["info@invertadigital.de"],
      replyTo: data.email,
      subject: `${suspectedSpam ? "[Spamverdacht] " : ""}Neue Projektanfrage von ${subjectName} - ${subjectCompany}`,
      html: renderEmailHtml(data, consentAt),
    });

    if (sendResult.error) {
      console.error("[contact] resend error:", sendResult.error.message);
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden." },
        { status: 502 },
      );
    }
    console.info("[contact] lead email sent:", sendResult.data?.id);

    // 10. Forward to n8n with timeout (auto-reply handled there)
    const webhookUrl = process.env.N8N_LEAD_WEBHOOK_URL;
    if (webhookUrl && !suspectedSpam) {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (process.env.N8N_WEBHOOK_SECRET) {
        headers["X-Webhook-Secret"] = process.env.N8N_WEBHOOK_SECRET;
      }
      try {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers,
          body: JSON.stringify({
            anrede: data.anrede,
            name: data.name,
            email: data.email,
            telefon: data.telefon,
            company: data.company,
            service: data.service,
            message: data.message,
            privacyConsent: true,
            privacyConsentAt: consentAt,
            source: "invertadigital.de/kontakt",
          }),
          signal: AbortSignal.timeout(5000),
        });
        if (!res.ok) {
          console.error("[contact] n8n webhook responded:", res.status);
        } else {
          console.info("[contact] n8n webhook ok");
        }
      } catch (e) {
        const msg = e instanceof Error ? e.message : "unknown";
        console.error("[contact] n8n webhook failed:", msg);
        // Do not fail the request — email already sent.
      }
    }

    return NextResponse.json(
      { success: true, message: "E-Mail erfolgreich versendet!" },
      { status: 200 },
    );
  } catch (error) {
    const msg = error instanceof Error ? error.message : "unknown";
    console.error("[contact] internal error:", msg);
    return NextResponse.json(
      { error: "Interner Serverfehler" },
      { status: 500 },
    );
  }
}
