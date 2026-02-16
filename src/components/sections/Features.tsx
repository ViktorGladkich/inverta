"use client";

import React from "react";
import { FeatureCard } from "./features/feature-card";
import {
  FeaturesIcon,
  CuttingEdgeIcon,
  AutomatedIcon,
  AnalyticsIcon,
  SupportIcon,
  ButtonArrow,
} from "./features/feature-icons";
import { Button } from "@/components/ui/shadcn-button";

export function Features() {
  return (
    <section
      id="features"
      className="relative z-20 flex flex-col items-center justify-center w-full py-[100px] px-5 md:px-10 gap-10 bg-[#f5f5f5] overflow-hidden"
    >
      {/* Heading Block */}
      <div className="flex flex-col items-center gap-6 text-center max-w-2xl">
        {/* Features Pill */}
        <div className="flex items-center justify-center px-[12px] py-[6px] gap-2 rounded-[60px] bg-[#f5f5f5] shadow-[0px_0.706592px_0.706592px_-0.541667px_rgba(0,0,0,0.1),0px_1.80656px_1.80656px_-1.08333px_rgba(0,0,0,0.09),0px_3.62176px_3.62176px_-1.625px_rgba(0,0,0,0.09),0px_6.8656px_6.8656px_-2.16667px_rgba(0,0,0,0.09),0px_13.6468px_13.6468px_-2.70833px_rgba(0,0,0,0.08),0px_30px_30px_-3.25px_rgba(0,0,0,0.05),inset_0px_3px_1px_0px_white]">
          <div className="w-[14px] h-[14px] text-black/40">
            <FeaturesIcon className="w-full h-full" />
          </div>
          <span className="text-[12px] font-medium text-black tracking-wider uppercase">
            Expertise
          </span>
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight pb-1 bg-gradient-to-t from-[rgb(14,28,41)] via-[rgb(14,28,41)] to-[rgb(255,255,255)] bg-clip-text text-transparent">
          Maßgeschneiderte KI-Lösungen
        </h2>
        <p className="text-lg text-black/80">
          Wir transformieren Ihr Unternehmen mit modernster Technologie.
          Skalierbare Lösungen für maximalen Wettbewerbsvorteil.
        </p>
      </div>

      {/* Feature Grid Container */}
      <div className="flex flex-col gap-5 md:gap-[25px] w-full max-w-[1200px]">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-[25px] w-full">
          {/* Card 1: Cutting-Edge AI (Image) */}
          <FeatureCard
            className="flex-1 md:flex-[1.5]"
            title="Individuelle KI-Entwicklung"
            description="Wir entwickeln und implementieren maßgeschneiderte KI-Systeme, die exakt auf Ihre spezifischen Geschäftsprozesse zugeschnitten sind."
            icon={CuttingEdgeIcon}
            imageSrc="/images/features/ai-chip.png"
            hasImage={true}
          />

          {/* Card 2: Automated Workflows (Text) */}
          <FeatureCard
            className="flex-1"
            title="Prozessautomatisierung"
            description="Reduzieren Sie manuelle Aufwände drastisch. Unsere intelligenten Workflows steigern die Effizienz und senken Betriebskosten nachhaltig."
            icon={AutomatedIcon}
            hasImage={false}
          />
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-[25px] w-full">
          {/* Card 3: Insightful Analytics (Text) */}
          <FeatureCard
            className="flex-1"
            title="Data Science & Analytics"
            description="Verwandeln Sie Daten in profitables Wissen. Wir implementieren Advanced Analytics für fundierte, strategische Entscheidungen."
            icon={AnalyticsIcon}
            hasImage={false}
          />

          {/* Card 4: AI-Powered Support (Image) */}
          <FeatureCard
            className="flex-1 md:flex-[1.5]"
            title="Smart Customer Experience"
            description="Revolutionieren Sie Ihren Kundenservice mit KI-gestützten Assistenten, die 24/7 präzise und persönlich interagieren."
            icon={SupportIcon}
            imageSrc="/images/features/support-dashboard.png"
            hasImage={true}
          />
        </div>
      </div>

      {/* Call to Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <Button className="rounded-full bg-black text-white hover:bg-black/80 px-8 py-6 text-base font-medium">
          Jetzt starten
        </Button>
        <Button
          variant="outline"
          className="rounded-full border-black/10 hover:bg-black/5 px-8 py-6 text-base font-medium text-black gap-2"
        >
          Unsere Leistungen
          <ButtonArrow className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </section>
  );
}
