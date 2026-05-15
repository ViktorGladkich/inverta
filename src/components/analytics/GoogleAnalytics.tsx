"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";

const GA_ID = "G-NT29FD0TKE";

function readConsent(): boolean {
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

function subscribe(onChange: () => void) {
  window.addEventListener("inverta:consent-changed", onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener("inverta:consent-changed", onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function GoogleAnalytics() {
  const consentGiven = useSyncExternalStore(
    subscribe,
    readConsent,
    () => false, // SSR / first render: no consent yet
  );

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
