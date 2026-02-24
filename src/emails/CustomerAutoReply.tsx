import {
  Body,
  Head,
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
  service = "Digitale Lösungen",
}: AutoReplyEmailProps) => {
  const previewText = `Bestätigung Ihrer Anfrage bei INVERTA DIGITAL.`;
  const baseUrl = "https://invertadigital.de";

  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <style>{`
          @media (max-width: 450px) {
            .layout-0, .layout-1, .layout-2, .layout-3 {
              display: none !important;
            }
            .layout-0-under-450, .layout-1-under-450, .layout-2-under-450, .layout-3-under-450 {
              display: table !important;
            }
          }
          @media (prefers-color-scheme: dark) {
            .email-container { background-color: #ffffff !important; }
            .header-cell { background-color: #ffffff !important; }
            .content-text { color: #000000 !important; }
          }
        `}</style>
      </Head>
      <Preview>{previewText}</Preview>
      <Body
        style={{
          width: "100%",
          backgroundColor: "#f0f1f5",
          margin: 0,
          padding: 0,
        }}
      >
        <table
          width="100%"
          border={0}
          cellPadding={0}
          cellSpacing={0}
          style={{ backgroundColor: "#f0f1f5" }}
        >
          <tbody>
            <tr>
              <td>
                <table
                  align="center"
                  width="100%"
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  className="email-container"
                  style={{
                    maxWidth: "600px",
                    margin: "0 auto",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <tbody>
                    {/* Header: Logo & Dynamic Date */}
                    <tr>
                      <td
                        className="header-cell"
                        style={{
                          padding: "30px 20px",
                          borderBottom: "1px solid #f0f1f5",
                          backgroundColor: "#ffffff",
                        }}
                      >
                        <table
                          width="100%"
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                        >
                          <tbody>
                            <tr>
                              <td align="left">
                                <Img
                                  src={`${baseUrl}/logo-inverta.png`}
                                  width="100"
                                  alt="INVERTA"
                                  style={{ display: "block" }}
                                />
                              </td>
                              <td
                                align="right"
                                style={{
                                  color: "#888",
                                  fontSize: "12px",
                                  fontWeight: "bold",
                                  letterSpacing: "1px",
                                }}
                              >
                                {new Date()
                                  .toLocaleString("de-DE", {
                                    month: "long",
                                    year: "numeric",
                                  })
                                  .toUpperCase()}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* Main Content */}
                    <tr>
                      <td style={{ verticalAlign: "top", padding: "10px 0" }}>
                        <table
                          align="center"
                          width="100%"
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          style={{ fontFamily: "Arial, sans-serif" }}
                        >
                          <tbody>
                            <tr>
                              <td
                                align="center"
                                style={{
                                  fontSize: "52px",
                                  letterSpacing: "-0.09em",
                                  lineHeight: "1.0",
                                  fontWeight: "bold",
                                  padding: "0 20px",
                                }}
                              >
                                KONTAKT- <br />
                                BESTÄTIGUNG
                              </td>
                            </tr>
                            <tr>
                              <td height={20}>&nbsp;</td>
                            </tr>

                            {/* Hero Image */}
                            <tr>
                              <td style={{ padding: "0 20px" }}>
                                <Img
                                  src={`${baseUrl}/emails/5269794b53128cc7a4c86fc1809fcd0e.png`}
                                  width="560"
                                  style={{
                                    display: "block",
                                    width: "100%",
                                    height: "auto",
                                  }}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td height={20}>&nbsp;</td>
                            </tr>

                            {/* Centered Intro Text */}
                            <tr>
                              <td
                                style={{
                                  padding: "0 40px",
                                  textAlign: "center",
                                }}
                              >
                                <Text
                                  style={{
                                    fontSize: "32px",
                                    fontWeight: "bold",
                                    lineHeight: "1.1",
                                    margin: "0 0 20px 0",
                                    textAlign: "center",
                                  }}
                                >
                                  EXZELLENZ ALS FUNDAMENT.
                                </Text>
                                <Text
                                  style={{
                                    fontSize: "16px",
                                    lineHeight: "1.6",
                                    color: "#444",
                                    margin: 0,
                                    textAlign: "center",
                                  }}
                                >
                                  Sehr geehrte(r) {name},<br />
                                  <br />
                                  vielen Dank für Ihr Interesse an einer
                                  Zusammenarbeit mit{" "}
                                  <strong>INVERTA DIGITAL</strong>. Wir haben
                                  Ihre Projektanfrage im Bereich{" "}
                                  <strong>{service}</strong> erfolgreich
                                  erfasst. Unsere Strategie-Abteilung evaluiert
                                  derzeit Ihre Anforderungen, um ein Konzept zu
                                  entwerfen, welches Ihre digitale Marktposition
                                  nachhaltig transformiert.
                                </Text>
                              </td>
                            </tr>

                            {/* Dark Grid: Improved for Readability */}
                            <tr>
                              <td style={{ padding: "0 20px" }}>
                                <table
                                  width="100%"
                                  border={0}
                                  cellPadding={0}
                                  cellSpacing={0}
                                  style={{
                                    backgroundColor: "#050505",
                                    borderRadius: "16px",
                                    color: "#ffffff",
                                    overflow: "hidden",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style={{
                                          padding: "30px 20px",
                                          textAlign: "center",
                                          borderBottom: "1px solid #222",
                                        }}
                                      >
                                        <Text
                                          style={{
                                            fontSize: "20px",
                                            fontWeight: "bold",
                                            margin: "0 0 10px 0",
                                            color: "#ffffff",
                                          }}
                                        >
                                          ENGINEERING
                                        </Text>
                                        <Text
                                          style={{
                                            fontSize: "14px",
                                            lineHeight: "1.4",
                                            margin: 0,
                                            color: "#aaa",
                                          }}
                                        >
                                          Entwicklung auf Enterprise-Niveau mit
                                          modernsten Tech-Stacks. Kompromisslos
                                          in Skalierbarkeit und Stabilität.
                                        </Text>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={{
                                          padding: "30px 20px",
                                          textAlign: "center",
                                          borderBottom: "1px solid #222",
                                        }}
                                      >
                                        <Text
                                          style={{
                                            fontSize: "20px",
                                            fontWeight: "bold",
                                            margin: "0 0 10px 0",
                                            color: "#ffffff",
                                          }}
                                        >
                                          PERFORMANCE
                                        </Text>
                                        <Text
                                          style={{
                                            fontSize: "14px",
                                            lineHeight: "1.4",
                                            margin: 0,
                                            color: "#aaa",
                                          }}
                                        >
                                          Maximale Effizienz durch tiefgreifende
                                          Code-Optimierung. Wir sichern
                                          Bestwerte in allen Core Web Vitals.
                                        </Text>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={{
                                          padding: "30px 20px",
                                          textAlign: "center",
                                        }}
                                      >
                                        <Text
                                          style={{
                                            fontSize: "20px",
                                            fontWeight: "bold",
                                            margin: "0 0 10px 0",
                                            color: "#ffffff",
                                          }}
                                        >
                                          VISION
                                        </Text>
                                        <Text
                                          style={{
                                            fontSize: "14px",
                                            lineHeight: "1.4",
                                            margin: 0,
                                            color: "#aaa",
                                          }}
                                        >
                                          Keine Templates, keine Kompromisse.
                                          Wir kreieren digitale Masterpieces für
                                          Ihre unternehmerische DNA.
                                        </Text>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td height={20}>&nbsp;</td>
                            </tr>

                            {/* Centered Bottom Section */}
                            <tr>
                              <td
                                style={{
                                  padding: "0 40px",
                                  textAlign: "center",
                                }}
                              >
                                <Text
                                  style={{
                                    fontSize: "32px",
                                    fontWeight: "bold",
                                    lineHeight: "1.1",
                                    margin: "0 0 15px 0",
                                    color: "#000000",
                                    textAlign: "center",
                                  }}
                                >
                                  DIE ZUKUNFT DER DIGITALEN DOMINANZ.
                                </Text>
                                <Text
                                  style={{
                                    fontSize: "16px",
                                    lineHeight: "1.6",
                                    color: "#444",
                                    margin: 0,
                                    textAlign: "center",
                                  }}
                                >
                                  Wir setzen dort an, wo Standards enden.
                                  Gemeinsam definieren wir neue Maßstäbe für
                                  Ihren unangefochtenen Markterfolg.
                                </Text>
                              </td>
                            </tr>

                            <tr>
                              <td height={40}>&nbsp;</td>
                            </tr>
                            {/* Footer Image */}
                            <tr>
                              <td style={{ padding: "0 20px" }}>
                                <Img
                                  src={`${baseUrl}/emails/75c5178a7f54f0a89dd189fd11c43d79.png`}
                                  width="560"
                                  style={{
                                    display: "block",
                                    width: "100%",
                                    height: "auto",
                                  }}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* Footer */}
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#000000",
                          padding: "40px 20px",
                          textAlign: "center",
                          color: "#ffffff",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: "12px",
                            margin: "0 0 10px 0",
                            color: "#ffffff",
                          }}
                        >
                          © 2024 INVERTA DIGITAL. Alle Rechte vorbehalten.
                        </Text>
                        <Text
                          style={{
                            fontSize: "12px",
                            margin: 0,
                            color: "#ffffff",
                          }}
                        >
                          Rubensweg 1, 01159 Dresden, Deutschland
                        </Text>
                        <div style={{ marginTop: "20px" }}>
                          <Link
                            href={`${baseUrl}/impressum`}
                            style={{
                              color: "#ffffff",
                              fontSize: "12px",
                              textDecoration: "underline",
                              marginRight: "10px",
                            }}
                          >
                            Impressum
                          </Link>
                          <Link
                            href={`${baseUrl}/datenschutz`}
                            style={{
                              color: "#ffffff",
                              fontSize: "12px",
                              textDecoration: "underline",
                            }}
                          >
                            Datenschutz
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </Body>
    </Html>
  );
};

export default AutoReplyEmail;
