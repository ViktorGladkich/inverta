"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[global-error]", error.message, error.digest ?? "");
  }, [error]);

  return (
    <html lang="de">
      <body>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#fff",
            color: "#111",
            fontFamily: "system-ui, sans-serif",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "4rem", margin: 0, color: "#e5e5e5" }}>500</h2>
          <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Anwendungsfehler
          </h1>
          <p style={{ color: "#666", marginBottom: "1.5rem", maxWidth: 480 }}>
            Es ist ein kritischer Fehler aufgetreten.
          </p>
          <button
            onClick={() => reset()}
            style={{
              padding: "0.75rem 2rem",
              borderRadius: "9999px",
              background: "#111",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Erneut laden
          </button>
        </div>
      </body>
    </html>
  );
}
