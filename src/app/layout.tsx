import type { Metadata, Viewport } from "next";
import { ViewportFix } from "@/components/Viewport/ViewportFix";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "INVERTA | Marketing & Webentwicklung für Ihren Erfolg",
  description:
    "INVERTA - Ihre Agentur für effektives Marketing, professionelle Webentwicklung, SEO und Social Media. Wir steigern Ihre Sichtbarkeit und Ihren Umsatz.",
  keywords: [
    "Marketing",
    "Webentwicklung",
    "SEO",
    "Social Media",
    "Neukundengewinnung",
    "Webdesign",
    "Onlineshop",
    "Ladezeitoptimierung",
  ],
  openGraph: {
    title: "INVERTA | Marketing & Webentwicklung",
    description:
      "Professionelle Lösungen für Ihr digitales Wachstum. Marketing, SEO & Webdesign aus einer Hand.",
    type: "website",
    locale: "de_DE",
    url: "https://invertadigital.de",
    siteName: "INVERTA",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

import { CookieConsent } from "@/components/ui/CookieConsent";
import { Navbar } from "@/components/layout/Navbar";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

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
        <ViewportFix />
        <Navbar />
        {children}
        {/* Steamy Glass Bottom Effect */}
        <ProgressiveBlur
          className="fixed bottom-0 left-0 z-40 pointer-events-none"
          position="bottom"
          backgroundColor="rgba(255, 255, 255, 0.4)"
          blurAmount="4px"
          height="60px"
        />
        <CookieConsent />
      </body>
    </html>
  );
}
