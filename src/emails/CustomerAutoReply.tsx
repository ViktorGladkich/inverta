import {
  Body,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface AutoReplyEmailProps {
  name: string;
  service: string;
}

export const AutoReplyEmail = ({
  name = "Interessent",
  service = "eines Projekts",
}: AutoReplyEmailProps) => {
  const previewText = `Vielen Dank für Ihre Anfrage bei INVERTA DIGITAL.`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={{ margin: 0, padding: 0 }}>
        {/* Outer table forces black background in all email clients */}
        <table
          width="100%"
          cellPadding="0"
          cellSpacing="0"
          role="presentation"
          style={{ backgroundColor: "#000000" }}
          // @ts-expect-error — bgcolor is an HTML attribute needed for email clients
          bgcolor="#000000"
        >
          <tr>
            <td align="center" style={{ padding: "40px 16px" }}>
              {/* Inner content table */}
              <table
                width="600"
                cellPadding="0"
                cellSpacing="0"
                role="presentation"
                style={{
                  maxWidth: "600px",
                  width: "100%",
                  backgroundColor: "#000000",
                  borderRadius: "16px",
                }}
                // @ts-expect-error
                bgcolor="#000000"
              >
                <tr>
                  <td style={{ padding: "40px" }}>
                    {/* Logo */}
                    <Img
                      src="https://invertadigital.de/logo-inverta-white.png"
                      width="120"
                      height="40"
                      alt="INVERTA DIGITAL Logo"
                      style={{
                        display: "block",
                        height: "auto",
                        marginBottom: "32px",
                      }}
                    />

                    <Heading style={heading}>Guten Tag {name},</Heading>

                    <Text style={paragraph}>
                      vielen Dank für Ihre Nachricht und Ihr Interesse an einer
                      Zusammenarbeit mit INVERTA DIGITAL im Bereich{" "}
                      <strong>{service}</strong>.
                    </Text>

                    <Text style={paragraph}>
                      Wir haben Ihre Projektanfrage erfolgreich erhalten. Unser
                      Team wird Ihre Angaben intern prüfen. Wir werden uns
                      innerhalb der nächsten 24 Stunden bei Ihnen melden, um die
                      weiteren Schritte für Ihr Projekt zu besprechen.
                    </Text>

                    <Text style={paragraph}>
                      In der Zwischenzeit laden wir Sie ein, sich unsere
                      aktuellen Arbeiten auf unserer Website anzusehen:
                    </Text>

                    {/* Button */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      role="presentation"
                    >
                      <tr>
                        <td align="center" style={{ padding: "32px 0" }}>
                          <Link
                            href="https://invertadigital.de/projekte"
                            style={button}
                          >
                            Unsere Projekte entdecken
                          </Link>
                        </td>
                      </tr>
                    </table>

                    <Text style={paragraph}>
                      Wir freuen uns darauf, mit Ihnen gemeinsam etwas
                      Außergewöhnliches zu erschaffen!
                    </Text>

                    <Text style={signoff}>
                      Beste Grüße,
                      <br />
                      Das Team von INVERTA DIGITAL
                    </Text>

                    {/* Footer */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      role="presentation"
                      style={{
                        borderTop: "1px solid rgba(255,255,255,0.1)",
                        paddingTop: "32px",
                      }}
                    >
                      <tr>
                        <td>
                          <Text style={footerText}>
                            INVERTA DIGITAL
                            <br />
                            Rubensweg 1, 01217 Dresden, Deutschland
                          </Text>
                          <Text style={footerLinks}>
                            <Link
                              href="https://invertadigital.de/impressum"
                              style={footerLink}
                            >
                              Impressum
                            </Link>{" "}
                            •{" "}
                            <Link
                              href="https://invertadigital.de/datenschutz"
                              style={footerLink}
                            >
                              Datenschutz
                            </Link>
                          </Text>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </Body>
    </Html>
  );
};

export default AutoReplyEmail;

// Styles
const heading: React.CSSProperties = {
  fontSize: "24px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "600",
  color: "#ffffff",
  marginBottom: "24px",
};

const paragraph: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#ffffff",
  marginBottom: "24px",
};

const button: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  color: "#000000",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center",
  display: "inline-block",
  padding: "16px 32px",
  letterSpacing: "1px",
  textTransform: "uppercase",
};

const signoff: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#ffffff",
  marginTop: "40px",
  marginBottom: "40px",
};

const footerText: React.CSSProperties = {
  fontSize: "12px",
  lineHeight: "20px",
  color: "#888888",
  margin: "0 0 8px 0",
};

const footerLinks: React.CSSProperties = {
  fontSize: "12px",
  color: "#888888",
  margin: "0",
};

const footerLink: React.CSSProperties = {
  color: "#888888",
  textDecoration: "underline",
};
