"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = "G-NT29FD0TKE";

function checkConsent(): boolean {
  if (typeof window === "undefined") return false;
  const consent = localStorage.getItem("cookie-consent");
  if (!consent) return false;
  if (consent === "all") return true;
  try {
    return JSON.parse(consent).analytics === true;
  } catch {
    return false;
  }
}

export function GoogleAnalytics() {
  const [consentGiven, setConsentGiven] = useState(() => checkConsent());

  useEffect(() => {
    if (consentGiven) return;

    // Poll for consent changes (same-tab, set by CookieConsent)
    const interval = setInterval(() => {
      if (checkConsent()) {
        setConsentGiven(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [consentGiven]);

  if (!consentGiven) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
