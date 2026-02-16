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
import Link from "next/link";

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
            Leistungen
          </span>
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight pb-1 text-black">
          Digitale Exzellenz für Ihr Wachstum
        </h2>
        <p className="text-lg text-black/80">
          Wir bieten ganzheitliche Lösungen, die Design, Technologie und
          Marketing nahtlos verbinden.
        </p>
      </div>

      {/* Feature Grid Container */}
      <div className="flex flex-col gap-5 md:gap-[25px] w-full max-w-[1200px]">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-[25px] w-full">
          {/* Card 1: Web Development (Image) */}
          <FeatureCard
            className="flex-1 md:flex-[1.5]"
            title="Webentwicklung & Performance"
            description="Hochperformante Websites und skalierbare Systeme, die begeistern und konvertieren. Technologisch führend."
            icon={CuttingEdgeIcon}
            imageSrc="/images/features/web-performance.jpg"
            hasImage={true}
          />

          {/* Card 2: SEO (Text) */}
          <FeatureCard
            className="flex-1"
            title="SEO & Sichtbarkeit"
            description="Maximale Sichtbarkeit und messbares Umsatzwachstum durch datengetriebene SEO-Strategien."
            icon={AnalyticsIcon}
            hasImage={false}
          />
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-[25px] w-full">
          {/* Card 3: Social Media (Text) */}
          <FeatureCard
            className="flex-1"
            title="Social Media Marketing"
            description="Bauen Sie eine starke Markenpräsenz auf und erreichen Sie Ihre Zielgruppe dort, wo sie ist."
            icon={AutomatedIcon}
            hasImage={false}
          />

          {/* Card 4: Lead Gen / Funnels (Image) */}
          <FeatureCard
            className="flex-1 md:flex-[1.5]"
            title="Neukundengewinnung"
            description="Systematische Lead-Generierung und Funnelsysteme für nachhaltiges und planbares Wachstum."
            icon={SupportIcon}
            imageSrc="/images/features/funnel-growth.jpg"
            hasImage={true}
          />
        </div>
      </div>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
        <Link
          href="/kontakt"
          className="group relative inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-[10px] shadow-[0_30px_30px_-3.5px_rgba(0,0,0,0.15),0_13px_13px_-2.9px_rgba(0,0,0,0.26),0_6px_6px_-2.3px_rgba(0,0,0,0.3)] hover:shadow-[0_40px_40px_-5px_rgba(0,0,0,0.4)] hover:scale-[1.02] transition-all duration-300"
        >
          <span className="font-semibold text-lg">Jetzt starten</span>
          <ButtonArrow className="w-4 h-4 ml-1" />
        </Link>
        <Link
          href="/#services"
          className="group relative inline-flex items-center justify-center gap-2 bg-[#F5F5F5] text-black px-8 py-4 rounded-[10px] shadow-[0px_0.706592px_0.706592px_-0.583333px_rgba(158,158,158,0.69),0px_1.80656px_1.80656px_-1.16667px_rgba(158,158,158,0.68),0px_3.62176px_3.62176px_-1.75px_rgba(158,158,158,0.65),0px_6.8656px_6.8656px_-2.33333px_rgba(158,158,158,0.61),0px_13.6468px_13.6468px_-2.91667px_rgba(158,158,158,0.52),0px_30px_30px_-3.5px_rgba(158,158,158,0.3),inset_0px_3px_1px_0px_rgb(255,255,255)] hover:shadow-[0px_10px_20px_rgba(0,0,0,0.1),inset_0px_3px_1px_0px_rgb(255,255,255)] hover:scale-[1.02] transition-all duration-300"
        >
          <span className="font-semibold text-lg">Unsere Leistungen</span>
        </Link>
      </div>
    </section>
  );
}
