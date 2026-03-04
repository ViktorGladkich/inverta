import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, message } = body;

    if (!name || !email || !message || !phone || !service) {
      return NextResponse.json(
        { error: "Fehlende Pflichtfelder" },
        { status: 400 },
      );
    }

    const data = await resend.emails.send({
      from: "INVERTA DIGITAL <hello@invertadigital.de>",
      to: ["info@invertadigital.de"],
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
                <td style="padding: 10px 0; font-weight: bold;">Telefon:</td>
                <td style="padding: 10px 0;">
                  ${phone ? `<a href="tel:${phone}" style="color: #000; text-decoration: underline;">${phone}</a>` : "-"}
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

    // Send lead data to n8n webhook (auto-reply is handled by n8n)
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
