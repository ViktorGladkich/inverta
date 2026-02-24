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
        <style>{`
          @media (max-width: 450px) {
            .layout-0, .layout-1, .layout-2, .layout-3 {
              display: none !important;
            }
            .layout-0-under-450, .layout-1-under-450, .layout-2-under-450, .layout-3-under-450 {
              display: table !important;
            }
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
                  style={{
                    maxWidth: "600px",
                    margin: "0 auto",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <tbody>
                    {/* Header Image */}
                    <tr>
                      <td style={{ verticalAlign: "top" }}>
                        <table
                          cellPadding={0}
                          cellSpacing={0}
                          border={0}
                          style={{ width: "100%" }}
                        >
                          <tbody>
                            <tr>
                              <td align="center">
                                <Img
                                  src={`${baseUrl}/emails/831fd729228e337614e345eff3e22954.png`}
                                  width="600"
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
                                style={{
                                  fontSize: "57px",
                                  letterSpacing: "-0.09em",
                                  lineHeight: "1.1",
                                  fontWeight: "bold",
                                  padding: "0 20px",
                                }}
                              >
                                BESTÄTIGUNG <br />
                                IHRER <br />
                                ANFRAGE
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

                            {/* Text Columns */}
                            <tr>
                              <td style={{ padding: "20px" }}>
                                <table
                                  width="100%"
                                  border={0}
                                  cellPadding={0}
                                  cellSpacing={0}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        width="50%"
                                        style={{
                                          verticalAlign: "top",
                                          paddingRight: "10px",
                                        }}
                                      >
                                        <Text
                                          style={{
                                            fontSize: "28px",
                                            fontWeight: "bold",
                                            lineHeight: "1.1",
                                            margin: 0,
                                          }}
                                        >
                                          Digitale Exzellenz ist unser Standard
                                        </Text>
                                      </td>
                                      <td
                                        width="50%"
                                        style={{ verticalAlign: "top" }}
                                      >
                                        <Text
                                          style={{
                                            fontSize: "14px",
                                            lineHeight: "1.4",
                                            margin: 0,
                                          }}
                                        >
                                          Hallo {name},<br />
                                          <br />
                                          vielen Dank für Ihr Vertrauen in{" "}
                                          <strong>INVERTA DIGITAL</strong>. Wir
                                          haben Ihre Projektanfrage im Bereich{" "}
                                          <strong>{service}</strong> erhalten.
                                          Unser Expertenteam analysiert bereits
                                          Ihre Anforderungen, um Ihnen eine
                                          maßgeschneiderte Strategie für Ihren
                                          digitalen Erfolg zu präsentieren.
                                        </Text>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>

                            {/* Dark Grid */}
                            <tr>
                              <td style={{ padding: "0 20px" }}>
                                <table
                                  width="100%"
                                  border={0}
                                  cellPadding={20}
                                  cellSpacing={0}
                                  style={{
                                    backgroundColor: "#050505",
                                    borderRadius: "8px",
                                    color: "#ffffff",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        width="33%"
                                        align="center"
                                        style={{ verticalAlign: "top" }}
                                      >
                                        <Text
                                          style={{
                                            fontSize: "18px",
                                            fontWeight: "bold",
                                            margin: "0 0 10px 0",
                                            color: "#ffffff",
                                          }}
                                        >
                                          High-End Tech
                                        </Text>
                                        <Text
                                          style={{
                                            fontSize: "13px",
                                            margin: 0,
                                            color: "#ffffff",
                                          }}
                                        >
                                          Wir setzen auf modernste Frameworks
                                          wie Next.js & React.
                                        </Text>
                                      </td>
                                      <td
                                        width="33%"
                                        align="center"
                                        style={{ verticalAlign: "top" }}
                                      >
                                        <Text
                                          style={{
                                            fontSize: "18px",
                                            fontWeight: "bold",
                                            margin: "0 0 10px 0",
                                            color: "#ffffff",
                                          }}
                                        >
                                          Performance
                                        </Text>
                                        <Text
                                          style={{
                                            fontSize: "13px",
                                            margin: 0,
                                            color: "#ffffff",
                                          }}
                                        >
                                          Maximale Ladegeschwindigkeit & Core
                                          Web Vitals Optimierung.
                                        </Text>
                                      </td>
                                      <td
                                        width="33%"
                                        align="center"
                                        style={{ verticalAlign: "top" }}
                                      >
                                        <Text
                                          style={{
                                            fontSize: "18px",
                                            fontWeight: "bold",
                                            margin: "0 0 10px 0",
                                            color: "#ffffff",
                                          }}
                                        >
                                          Strategie
                                        </Text>
                                        <Text
                                          style={{
                                            fontSize: "13px",
                                            margin: 0,
                                            color: "#ffffff",
                                          }}
                                        >
                                          Kein Standard. Wir entwickeln
                                          individuelle Lösungen.
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

                            {/* Bottom Text */}
                            <tr>
                              <td style={{ padding: "20px" }}>
                                <table
                                  width="100%"
                                  border={0}
                                  cellPadding={0}
                                  cellSpacing={0}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        width="50%"
                                        style={{
                                          verticalAlign: "top",
                                          color: "#daff02",
                                        }}
                                      >
                                        <Text
                                          style={{
                                            fontSize: "28px",
                                            fontWeight: "bold",
                                            lineHeight: "1.1",
                                            margin: 0,
                                            color: "#9eb3f4",
                                          }}
                                        >
                                          Immer einen Schritt voraus.
                                        </Text>
                                      </td>
                                      <td
                                        width="50%"
                                        style={{ verticalAlign: "top" }}
                                      >
                                        <Text
                                          style={{
                                            fontSize: "14px",
                                            lineHeight: "1.4",
                                            margin: 0,
                                          }}
                                        >
                                          Gemeinsam definieren wir neue
                                          Standards in Design & Technologie für
                                          Ihre unangefochtene digitale Dominanz.
                                        </Text>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
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
