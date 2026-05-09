import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);

const ALLOWED_ORIGINS = (process.env.CONTACT_ALLOWED_ORIGINS ?? "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const ContactSchema = z.object({
  anrede: z.enum(["Herr", "Frau", "Divers / Keine Angabe"]),
  name: z
    .string()
    .min(2)
    .max(120)
    .regex(/^[^\r\n]+$/, "Ungültige Zeichen"),
  email: z.string().email().max(254),
  telefon: z.string().min(5).max(40),
  company: z.string().max(120).optional().or(z.literal("")),
  service: z.enum([
    "Marketing & SEO",
    "Webentwicklung",
    "KI-Automatisierung",
    "Etwas anderes",
  ]),
  message: z.string().min(10).max(4000),
  // Honeypot — must be empty
  website: z.string().max(0).optional().or(z.literal("")),
});

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

function renderEmailHtml(input: z.infer<typeof ContactSchema>): string {
  const e = {
    anrede: escapeHtml(input.anrede),
    name: escapeHtml(input.name),
    email: escapeHtml(input.email),
    telefon: escapeHtml(input.telefon),
    company: escapeHtml(input.company || "-"),
    service: escapeHtml(input.service),
    message: escapeHtml(input.message),
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
        </tbody>
      </table>
      <p style="margin-top: 40px; font-size: 12px; color: #888;">
        Diese E-Mail wurde automatisiert von der INVERTA DIGITAL Website generiert.
      </p>
    </div>
  `;
}

// In-memory rate limiter (per server instance). Not production-grade for
// multi-instance deploys — use Upstash Redis when ready. Mitigates trivial spam.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const buckets = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const arr = (buckets.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (arr.length >= RATE_MAX) {
    buckets.set(ip, arr);
    return true;
  }
  arr.push(now);
  buckets.set(ip, arr);
  return false;
}

function getClientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(req: Request) {
  try {
    // 1. Origin check (CSRF defense)
    const origin = req.headers.get("origin");
    if (ALLOWED_ORIGINS.length > 0 && (!origin || !ALLOWED_ORIGINS.includes(origin))) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // 2. Rate limit
    const ip = getClientIp(req);
    if (rateLimited(ip)) {
      return NextResponse.json(
        { error: "Zu viele Anfragen. Bitte versuchen Sie es später." },
        { status: 429 },
      );
    }

    // 3. Body parse + size guard
    let raw: unknown;
    try {
      raw = await req.json();
    } catch {
      return NextResponse.json({ error: "Ungültiger Request" }, { status: 400 });
    }

    // 4. Validation
    const parsed = ContactSchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Bitte überprüfen Sie Ihre Eingaben." },
        { status: 400 },
      );
    }
    const data = parsed.data;

    // 5. Honeypot fast-fail (returns success to bots, but does nothing)
    if (data.website && data.website.length > 0) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 6. Send email (subject CRLF-stripped, HTML escaped)
    const subjectName = stripCRLF(data.name);
    const subjectCompany = stripCRLF(data.company || "Ohne Unternehmen");
    const sendResult = await resend.emails.send({
      from: "INVERTA DIGITAL <hello@invertadigital.de>",
      to: ["info@invertadigital.de"],
      replyTo: data.email,
      subject: `Neue Projektanfrage von ${subjectName} - ${subjectCompany}`,
      html: renderEmailHtml(data),
    });

    if (sendResult.error) {
      console.error("[contact] resend error:", sendResult.error.message);
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden." },
        { status: 502 },
      );
    }

    // 7. Forward to n8n with timeout (auto-reply handled there)
    const webhookUrl = process.env.N8N_LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 5000);
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, source: "invertadigital.de/kontakt" }),
          signal: ctrl.signal,
        });
      } catch (e) {
        const msg = e instanceof Error ? e.message : "unknown";
        console.error("[contact] n8n webhook failed:", msg);
        // Do not fail the request — email already sent.
      } finally {
        clearTimeout(timer);
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
