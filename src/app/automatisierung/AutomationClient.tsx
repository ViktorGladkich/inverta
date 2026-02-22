"use client";

import { PageHero } from "@/components/ui/PageHero";
import { MARQUEE_ITEMS } from "./constants";
import { IntroSection } from "./components/IntroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { ProcessSection } from "./components/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";

export function AutomationClient() {
  return (
    <div className="relative bg-[#f5f5f5]">
      <h1 className="sr-only">
        Agentur für KI-Automatisierung, intelligente Workflows & Performance
        Marketing | INVERTA
      </h1>
      {/* Header-Bereich mit animierter Laufschrift */}
      <PageHero
        titleTop="AUTOMATISIERUNG"
        titleMain="NEU GEDACHT"
        marqueeItems={MARQUEE_ITEMS}
        as="h2"
      />

      {/* Kernbereiche der Automatisierung */}
      <div className="relative z-10 bg-[#f5f5f5]">
        <IntroSection />
        <FeaturesSection />
        <ProcessSection />
        <CTASection />
      </div>
    </div>
  );
}
