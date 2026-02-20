import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
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
      <Body style={main}>
        <Container style={container}>
          <Section style={logoBox}>
            <Img
              src="https://invertadigital.de/logo-inverta-white.png"
              width="120"
              height="40"
              alt="INVERTA DIGITAL Logo"
              style={logoImage}
            />
          </Section>

          <Heading style={heading}>Guten Tag {name},</Heading>

          <Text style={paragraph}>
            vielen Dank für Ihre Nachricht und Ihr Interesse an einer
            Zusammenarbeit mit INVERTA DIGITAL im Bereich{" "}
            <strong>{service}</strong>.
          </Text>

          <Text style={paragraph}>
            Wir haben Ihre Projektanfrage erfolgreich erhalten. Unser Team wird
            Ihre Angaben intern prüfen. Wir werden uns innerhalb der nächsten 24
            Stunden bei Ihnen melden, um die weiteren Schritte für Ihr Projekt
            zu besprechen.
          </Text>

          <Text style={paragraph}>
            In der Zwischenzeit laden wir Sie ein, sich unsere aktuellen
            Arbeiten auf unserer Website anzusehen:
          </Text>

          <Section style={buttonContainer}>
            <Link href="https://invertadigital.de/projekte" style={button}>
              Unsere Projekte entdecken
            </Link>
          </Section>

          <Text style={paragraph}>
            Wir freuen uns darauf, mit Ihnen gemeinsam etwas Außergewöhnliches
            zu erschaffen!
          </Text>

          <Text style={signoff}>
            Beste Grüße,
            <br />
            Das Team von INVERTA DIGITAL
          </Text>

          <Section style={footer}>
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
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default AutoReplyEmail;

// --- CSS im JS Format --- //
const main = {
  backgroundColor: "#000000",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  padding: "40px 0",
};

const container = {
  margin: "0 auto",
  padding: "40px",
  backgroundColor: "#000000",
  borderRadius: "16px",
  maxWidth: "600px",
  border: "1px solid #222222",
  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
};

const logoBox = {
  marginBottom: "32px",
};

const logoImage = {
  display: "block",
  height: "auto",
};

const heading = {
  fontSize: "24px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "600",
  color: "#ffffff",
  marginBottom: "24px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#ffffff",
  marginBottom: "24px",
};

const buttonContainer = {
  textAlign: "center" as const,
  marginTop: "32px",
  marginBottom: "32px",
};

const button = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  color: "#000000",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "16px 32px",
  letterSpacing: "1px",
  textTransform: "uppercase" as const,
};

const signoff = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#ffffff",
  marginTop: "40px",
  marginBottom: "40px",
};

const footer = {
  borderTop: "1px solid #222222",
  paddingTop: "32px",
};

const footerText = {
  fontSize: "12px",
  lineHeight: "20px",
  color: "#888888",
  margin: "0 0 8px 0",
};

const footerLinks = {
  fontSize: "12px",
  color: "#888888",
  margin: "0",
};

const footerLink = {
  color: "#888888",
  textDecoration: "underline",
};
