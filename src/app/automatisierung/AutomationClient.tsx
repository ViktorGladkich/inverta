"use client";

import { useRef } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { MARQUEE_ITEMS } from "./constants";
import { IntroSection } from "./components/IntroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { ProcessSection } from "./components/ProcessSection";
import { CTASection } from "./components/CTASection";

export function AutomationClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative bg-[#f5f5f5]">
      <PageHero
        titleTop="AUTOMATISIERUNG"
        titleMain="NEU GEDACHT"
        marqueeItems={MARQUEE_ITEMS}
      />

      <main className="relative z-10">
        <IntroSection />
        <FeaturesSection />
        <ProcessSection />
        <CTASection />
      </main>
    </div>
  );
}
