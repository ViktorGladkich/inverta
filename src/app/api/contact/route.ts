import { NextResponse } from "next/server";
import { Resend } from "resend";
import AutoReplyEmail from "@/emails/CustomerAutoReply";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Fehlende Pflichtfelder" },
        { status: 400 },
      );
    }

    const data = await resend.emails.send({
      from: "INVERTA DIGITAL <hello@invertadigital.de>", // The domain must be verified in Resend for this to work
      to: ["info@invertadigital.de"], // Replace with your desired inward email
      subject: `Neue Projektanfrage von ${name} - ${company || "Ohne Unternehmen"}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #000;">
          <h2 style="font-size: 24px; margin-bottom: 20px; border-bottom: 2px solid #000; padding-bottom: 10px;">
            Neue Lead-Anfrage
          </h2>
          <table style="width: 100%; max-width: 600px; border-collapse: collapse;">
            <tbody>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; width: 30%;">Name:</td>
                <td style="padding: 10px 0;">${name}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold;">E-Mail:</td>
                <td style="padding: 10px 0;">
                  <a href="mailto:${email}" style="color: #000; text-decoration: underline;">
                    ${email}
                  </a>
                </td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold;">Unternehmen:</td>
                <td style="padding: 10px 0;">${company || "-"}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold;">Bereich:</td>
                <td style="padding: 10px 0;">${service || "-"}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Nachricht:</td>
                <td style="padding: 10px 0; white-space: pre-wrap;">${message}</td>
              </tr>
            </tbody>
          </table>
          <p style="margin-top: 40px; font-size: 12px; color: #888;">
            Diese E-Mail wurde automatisiert von der INVERTA DIGITAL Website generiert.
          </p>
        </div>
      `,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    // --- 2. Auto-Reply to the Customer ---
    const customerFirstName = name.split(" ")[0] || "Interessent";
    const mappedService =
      service === "marketing"
        ? "Marketing & SEO"
        : service === "webdev"
          ? "Webentwicklung"
          : service === "automation"
            ? "KI & Automatisierung"
            : "Digitale Lösungen";

    await resend.emails.send({
      from: "INVERTA DIGITAL <hello@invertadigital.de>",
      to: [email],
      subject: "Wir haben Ihre Anfrage erhalten | INVERTA DIGITAL",
      react: AutoReplyEmail({
        name: customerFirstName,
        service: mappedService,
      }),
    });

    try {
      await fetch(process.env.N8N_LEAD_WEBHOOK_URL!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...body,
          source: "invertadigital.de/kontakt",
        }),
      });
    } catch (e) {
      console.error("n8n error", e);
    }

    return NextResponse.json(
      { success: true, message: "E-Mail erfolgreich versendet!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json(
      { error: "Interner Serverfehler" },
      { status: 500 },
    );
  }
}
