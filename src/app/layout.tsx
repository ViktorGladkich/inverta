import type { Metadata, Viewport } from "next";
import { ViewportFix } from "@/components/Viewport/ViewportFix";
import { Geist, Geist_Mono } from "next/font/google";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { Navbar } from "@/components/layout/Navbar";
import { ProgressiveBlur } from "@/components/ui/ProgressiveBlur";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

import { GlobalSchema } from "@/components/seo/GlobalSchema";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://invertadigital.de"),
  title: "Webentwicklung, SEO & KI-Automatisierung Agentur | INVERTA",
  description:
    "Ihre Full-Service Agentur für messbaren Erfolg. Wir kombinieren professionelle Webentwicklung, erstklassiges Webdesign, datengetriebenes Performance Marketing, SEO und KI-Automatisierung für maximales Wachstum.",
  keywords: [
    "Webentwicklung Agentur",
    "Webdesign Agentur",
    "Performance Marketing Agentur",
    "Professionelles Webdesign",
    "SEO Optimierung",
    "Suchmaschinenoptimierung",
    "KI-Automatisierung",
    "Website Relaunch",
    "Conversion Rate Optimierung",
    "Online Marketing für Unternehmen",
    "INVERTA",
  ],
  openGraph: {
    title: "Webentwicklung & Performance Marketing Agentur | INVERTA",
    description:
      "Von komplexer Webentwicklung bis zur KI-gestützten Prozessautomatisierung. Wir skalieren Ihr Business durch datengetriebene Strategien.",
    type: "website",
    locale: "de_DE",
    url: "https://invertadigital.de",
    siteName: "INVERTA Digital Agency",
    // OG image — показывается при отправке ссылки в WhatsApp, Telegram, соцсети
    images: [
      {
        url: "https://invertadigital.de/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "INVERTA DIGITAL — Digitalagentur der nächsten Generation aus Dresden",
      },
    ],
  },
  // Twitter / X превью
  twitter: {
    card: "summary_large_image",
    title: "Webentwicklung & Performance Marketing Agentur | INVERTA",
    description:
      "Von komplexer Webentwicklung bis zur KI-gestützten Prozessautomatisierung. Wir skalieren Ihr Business durch datengetriebene Strategien.",
    images: ["https://invertadigital.de/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://invertadigital.de",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900 selection:bg-black selection:text-white`}
      >
        <GlobalSchema />
        
        <ViewportFix />
        <Navbar />
        {children}

        <ProgressiveBlur
          className="fixed bottom-0 left-0 z-40 pointer-events-none"
          position="bottom"
          backgroundColor="rgba(255, 255, 255, 0.4)"
          blurAmount="4px"
          height="60px"
        />
        <GoogleAnalytics />
        <CookieConsent />
      </body>
    </html>
  );
}
