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
const MIN_FILL_MS = 2500;

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
  // Time from form mount to submit; humans need far longer than bots
  elapsedMs: z.number().int().nonnegative().optional(),
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

const EMAIL_FONT =
  "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

// Same compact light/dark layout as the n8n client emails.
function renderEmailHtml(
  input: ContactInput,
  consentAt: string,
  suspectedSpam: boolean,
): string {
  const e = {
    anrede: escapeHtml(input.anrede),
    name: escapeHtml(input.name),
    email: escapeHtml(input.email),
    telefon: escapeHtml(input.telefon),
    telHref: escapeHtml(input.telefon.replace(/[^\d+]/g, "")),
    company: escapeHtml(input.company || "–"),
    service: escapeHtml(input.service),
    message: escapeHtml(input.message),
    consentAt: escapeHtml(
      new Date(consentAt).toLocaleString("de-DE", {
        timeZone: "Europe/Berlin",
        dateStyle: "medium",
        timeStyle: "short",
      }),
    ),
  };

  const row = (label: string, value: string) => `
        <tr>
          <td class="muted line" style="padding:10px 0;width:120px;vertical-align:top;font-family:${EMAIL_FONT};font-size:12px;color:#71717a;border-top:1px solid #ececef;">${label}</td>
          <td class="text line" style="padding:10px 0;vertical-align:top;font-family:${EMAIL_FONT};font-size:14px;color:#1f1f23;border-top:1px solid #ececef;">${value}</td>
        </tr>`;

  const spamBanner = suspectedSpam
    ? `
    <tr><td class="pad" style="padding:16px 32px 0;">
      <div class="warn" style="padding:10px 14px;border-radius:8px;background-color:#fff4e5;border:1px solid #f5c58a;font-family:${EMAIL_FONT};font-size:13px;color:#8a4b00;">
        Spamverdacht: sehr schnell abgeschickt. Kein Auto-Reply versendet.
      </div>
    </td></tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<title>Neue Anfrage</title>
<style>
  :root { color-scheme: light dark; supported-color-schemes: light dark; }
  a { text-decoration: none; }
  @media only screen and (max-width: 600px) {
    .outer { padding: 12px 8px !important; }
    .pad { padding-left: 20px !important; padding-right: 20px !important; }
  }
  @media (prefers-color-scheme: dark) {
    .bg { background-color: #0b0b0c !important; }
    .card { background-color: #161618 !important; border-color: #2a2a2e !important; border-top-color: #daff02 !important; }
    .line { border-color: #2a2a2e !important; }
    .box { background-color: #1f1f22 !important; }
    .text { color: #e8e8ea !important; }
    .muted { color: #9b9ba3 !important; }
    .mark { color: #daff02 !important; }
    .ghost { color: #e8e8ea !important; border-color: #3a3a3f !important; }
    .warn { background-color: #2a1f0f !important; border-color: #6b4a1a !important; color: #f5c58a !important; }
  }
  [data-ogsb] .bg { background-color: #0b0b0c !important; }
  [data-ogsb] .card { background-color: #161618 !important; }
  [data-ogsc] .text { color: #e8e8ea !important; }
  [data-ogsc] .muted { color: #9b9ba3 !important; }
</style>
</head>
<body class="bg" style="margin:0;padding:0;background-color:#f4f4f5;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="bg" bgcolor="#f4f4f5" style="background-color:#f4f4f5;">
<tr><td align="center" class="outer" style="padding:32px 16px;">
  <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" class="card" bgcolor="#ffffff" style="width:100%;max-width:560px;background-color:#ffffff;border:1px solid #e4e4e7;border-top:3px solid #daff02;border-radius:12px;">
    <tr><td class="pad line" style="padding:18px 32px;border-bottom:1px solid #ececef;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
        <td style="font-family:${EMAIL_FONT};font-size:13px;font-weight:800;letter-spacing:2px;">
          <span class="text" style="color:#111113;">INVERTA</span><span class="mark" style="color:#8a9a00;"> DIGITAL</span>
        </td>
        <td align="right" class="muted" style="font-family:${EMAIL_FONT};font-size:12px;color:#71717a;">Neue Anfrage</td>
      </tr></table>
    </td></tr>
    ${spamBanner}
    <tr><td class="pad" style="padding:24px 32px 4px;">
      <p class="text" style="margin:0;font-family:${EMAIL_FONT};font-size:20px;font-weight:700;color:#111113;">${e.anrede} ${e.name}</p>
      <p class="muted" style="margin:4px 0 0;font-family:${EMAIL_FONT};font-size:13px;color:#71717a;">${e.service} &middot; ${e.company}</p>
    </td></tr>
    <tr><td class="pad" style="padding:16px 32px 8px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
        <td bgcolor="#daff02" style="border-radius:8px;background-color:#daff02;">
          <a href="mailto:${e.email}" style="display:inline-block;padding:10px 18px;font-family:${EMAIL_FONT};font-size:13px;font-weight:700;color:#0b0b0c;border-radius:8px;">Antworten</a>
        </td>
        <td style="width:8px;"></td>
        <td style="border-radius:8px;">
          <a href="tel:${e.telHref}" class="ghost" style="display:inline-block;padding:9px 17px;font-family:${EMAIL_FONT};font-size:13px;font-weight:700;color:#1f1f23;border:1px solid #d4d4d8;border-radius:8px;">Anrufen</a>
        </td>
      </tr></table>
    </td></tr>
    <tr><td class="pad" style="padding:16px 32px 0;">
      <div class="box text" style="padding:14px 16px;border-radius:8px;background-color:#f6f6f7;font-family:${EMAIL_FONT};font-size:14px;line-height:1.6;color:#1f1f23;white-space:pre-wrap;">${e.message}</div>
    </td></tr>
    <tr><td class="pad" style="padding:16px 32px 24px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        ${row("E-Mail", `<a href="mailto:${e.email}" class="text" style="color:#1f1f23;text-decoration:underline;">${e.email}</a>`)}
        ${row("Telefon", `<a href="tel:${e.telHref}" class="text" style="color:#1f1f23;text-decoration:underline;">${e.telefon}</a>`)}
        ${row("Unternehmen", e.company)}
        ${row("Bereich", e.service)}
        ${row("Datenschutz", `Einwilligung erteilt am ${e.consentAt}`)}
      </table>
    </td></tr>
  </table>
  <p class="muted" style="margin:16px 0 0;font-family:${EMAIL_FONT};font-size:12px;color:#71717a;text-align:center;">Automatisch erzeugt über invertadigital.de/kontakt</p>
</td></tr>
</table>
</body>
</html>`;
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

    // 6. Bot signal — never drop silently. A suspiciously fast submit is
    // flagged and skips the n8n auto-reply, but still reaches the inbox.
    const suspectedSpam =
      data.elapsedMs !== undefined && data.elapsedMs < MIN_FILL_MS;
    if (suspectedSpam) {
      console.warn(
        "[contact] submitted too fast — flagged as spam, ms:",
        data.elapsedMs,
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
      html: renderEmailHtml(data, consentAt, suspectedSpam),
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
