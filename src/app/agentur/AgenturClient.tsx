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
    <PageHero
      titleTop="WIR SIND"
      titleMain="INVERTA"
      marqueeItems={marqueeItems}
    />
  );
}
