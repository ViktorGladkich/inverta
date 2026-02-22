"use client";

import { PageHero } from "@/components/ui/PageHero";

const marqueeItems = [
  "STRATEGIE",
  "WEBENTWICKLUNG",
  "PERFORMANCE MARKETING",
  "SEO",
  "UI/UX DESIGN",
  "BRANDING",
  "E-COMMERCE",
  "KI & AUTOMATISIERUNG",
];

export function AgenturClient() {
  return (
    <>
      <h1 className="sr-only">
        Ihre Premium Digitalagentur für Webentwicklung, Webdesign, SEO &
        KI-Automatisierung | INVERTA
      </h1>
      <PageHero
        titleTop="WIR SIND"
        titleMain="INVERTA"
        marqueeItems={marqueeItems}
        as="h2"
      />
    </>
  );
}
