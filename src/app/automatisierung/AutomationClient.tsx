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
      {/* Hero Section with Parallax and Marquee */}
      <PageHero
        titleTop="AUTOMATISIERUNG"
        titleMain="NEU GEDACHT"
        marqueeItems={MARQUEE_ITEMS}
      />

      {/* Main Content Area */}
      <main className="relative z-10">
        <IntroSection />
        <FeaturesSection />
        <ProcessSection />
        <CTASection />
      </main>
    </div>
  );
}
