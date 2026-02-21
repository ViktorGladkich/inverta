"use client";

import { Zap } from "lucide-react";
import { FEATURES } from "../constants";
import { CardsParallax } from "@/components/ui/CardsParallax";

export function FeaturesSection() {
  // Map FEATURES to the format expected by CardsParallax
  const parallaxItems = FEATURES.map((f) => ({
    title: f.title,
    description: f.desc,
    tag: f.tag,
    icon: f.icon,
    src: f.src,
  }));

  return (
    <section className="bg-[#f5f5f5] pt-32 pb-0 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center text-center gap-6 mb-16 md:mb-24">
          {/* Badge */}
          <div className="flex items-center justify-center px-[12px] py-[6px] gap-2 rounded-[60px] bg-[#f5f5f5] shadow-[0px_0.706592px_0.706592px_-0.541667px_rgba(0,0,0,0.1),0px_1.80656px_1.80656px_-1.08333px_rgba(0,0,0,0.09),0px_3.62176px_3.62176px_-1.625px_rgba(0,0,0,0.09),0px_6.8656px_6.8656px_-2.16667px_rgba(0,0,0,0.09),0px_13.6468px_13.6468px_-2.70833px_rgba(0,0,0,0.08),0px_30px_30px_-3.25px_rgba(0,0,0,0.05),inset_0px_3px_1px_0px_white]">
            <div className="w-[14px] h-[14px] text-black/40">
              <Zap className="w-full h-full" />
            </div>
            <span className="text-[12px] font-medium text-black tracking-wider uppercase">
              Core Capabilities
            </span>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black mb-6">
              Was wir automatisieren.
            </h2>
            <p className="text-lg md:text-xl text-black font-normal leading-relaxed">
              Wir transformieren Ihre manuellen Prozesse in hochperformante
              digitale Workflows. Von der Lead-Generierung bis zur KI-basierten
              Datenanalyse — wir schaffen Systeme, die für Sie arbeiten.
            </p>
          </div>
        </div>

        {/* Parallax Cards */}
        <CardsParallax items={parallaxItems} />
      </div>
    </section>
  );
}
