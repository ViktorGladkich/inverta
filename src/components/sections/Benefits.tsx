"use client";

import React from "react";
import { CrownIcon } from "./benefits/benefit-icons";
import { AnalyticsCard } from "./benefits/card-analytics";
import { EfficiencyCard } from "./benefits/card-efficiency";
import { IntegrationCard } from "./benefits/card-integration";
import { BenefitsMarquee } from "./benefits/benefits-marquee";

export function Benefits() {
  return (
    <section
      id="benefits"
      className="relative z-10 flex w-full flex-col items-center justify-center gap-10 bg-[#f5f5f5] px-5 py-[100px] md:px-10"
    >
      {/* Header Section */}
      <div className="flex flex-col items-center gap-6 text-center">
        {/* Benefits Badge */}
        <div className="flex items-center justify-center px-[12px] py-[6px] gap-2 rounded-[60px] bg-[#f5f5f5] shadow-[0px_0.706592px_0.706592px_-0.541667px_rgba(0,0,0,0.1),0px_1.80656px_1.80656px_-1.08333px_rgba(0,0,0,0.09),0px_3.62176px_3.62176px_-1.625px_rgba(0,0,0,0.09),0px_6.8656px_6.8656px_-2.16667px_rgba(0,0,0,0.09),0px_13.6468px_13.6468px_-2.70833px_rgba(0,0,0,0.08),0px_30px_30px_-3.25px_rgba(0,0,0,0.05),inset_0px_3px_1px_0px_white]">
          <div className="w-[14px] h-[14px] text-black/40">
            <CrownIcon className="w-full h-full" />
          </div>
          <span className="text-[12px] font-medium text-black tracking-wider">
            VORTEILE
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black pb-1 flex flex-wrap justify-center items-center gap-2">
          Warum
          <span className="relative inline-flex items-center ml-1">
            {/* Brand Circle Element */}
            <span className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-[#daff02] rounded-full z-0" />

            {/* Text Overlay */}
            <span className="relative z-10">Inverta</span>
            <span className="relative z-10 text-[#daff02]">?</span>
          </span>
        </h2>

        {/* Subtitle Description */}
        <p className="text-lg text-black/80 max-w-lg">
          Stärken Sie Ihr Unternehmen mit intelligenten, skalierbaren Lösungen.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid w-full max-w-6xl grid-cols-1 md:grid-cols-3 gap-6">
        <AnalyticsCard />
        <EfficiencyCard />
        <IntegrationCard />
      </div>

      {/* Scrolling Feature Marquee */}
      <BenefitsMarquee />
    </section>
  );
}
