"use client";

import { motion } from "framer-motion";

import React from "react";
import { cn } from "@/lib/utils";
import { PenTool, TrendingUp, Sparkles, BarChart2, Layers } from "lucide-react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Typewriter } from "@/components/ui/typewriter-text";

const neumorphicShadow =
  "shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(0,0,0,0.08),0px_1.80656px_1.80656px_-1.33333px_rgba(0,0,0,0.08),0px_3.62176px_3.62176px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.66667px_rgba(0,0,0,0.07),0px_13.6468px_13.6468px_-3.33333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),inset_0px_3px_1px_0px_white]";

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      "bg-[#f5f5f5] rounded-[20px] p-8 md:p-10 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.01]",
      neumorphicShadow,
      className,
    )}
  >
    {children}
  </div>
);

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    className={cn(
      "w-16 h-16 rounded-full flex items-center justify-center bg-[#f5f5f5] mb-8 text-black/60",
      neumorphicShadow,
    )}
  >
    {children}
  </div>
);

export function ServicesOverview() {
  return (
    <section
      id="services"
      className="bg-[#f5f5f5] py-24 px-4 md:px-8 overflow-hidden"
    >
      {/* Header Container */}
      <div className="flex flex-col items-center text-center gap-6 mb-16 md:mb-24">
        {/* Pill Badge */}
        <div className="flex items-center justify-center px-[12px] py-[6px] gap-2 rounded-[60px] bg-[#f5f5f5] shadow-[0px_0.706592px_0.706592px_-0.541667px_rgba(0,0,0,0.1),0px_1.80656px_1.80656px_-1.08333px_rgba(0,0,0,0.09),0px_3.62176px_3.62176px_-1.625px_rgba(0,0,0,0.09),0px_6.8656px_6.8656px_-2.16667px_rgba(0,0,0,0.09),0px_13.6468px_13.6468px_-2.70833px_rgba(0,0,0,0.08),0px_30px_30px_-3.25px_rgba(0,0,0,0.05),inset_0px_3px_1px_0px_white]">
          <div className="w-[14px] h-[14px] text-black/40">
            <Sparkles className="w-full h-full" />
          </div>
          <span className="text-[12px] font-medium text-black tracking-wider uppercase">
            Leistungen
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black mb-6">
            Digitale Exzellenz
          </h2>
          <p className="text-lg md:text-xl text-[#16101e]/80 font-normal leading-relaxed max-w-2xl mx-auto">
            Wir verbinden Strategie, Design und Technologie zu digitalen
            Erlebnissen, die Marken transformieren und Wachstum beschleunigen.
          </p>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="flex flex-col gap-6 md:col-span-1">
          {/* Card 1: Digitale Strategie */}
          <Card className="min-h-[400px] relative overflow-hidden flex flex-col justify-end p-[30px] text-left items-start">
            {/* Visual Header (Mocking the exact layout from snippet) */}
            <div className="absolute top-0 left-0 w-full h-[300px] pointer-events-none">
              {/* Connecting Line */}
              {/* Connecting Line with Animated Bubbles */}
              <div
                className="absolute h-[6px] w-[52%] left-[21.5%] top-[122px] bg-[#f5f5f5] rotate-30deg"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
                }}
              >
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#f5f5f5] shadow-sm z-0"
                  initial={{ left: "0%", scale: 1 }}
                  animate={{
                    left: ["0%", "50%", "0%"],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    ease: ["easeIn", "easeOut"],
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#f5f5f5] shadow-sm z-0"
                  initial={{ right: "0%", scale: 1 }}
                  animate={{
                    right: ["0%", "50%", "0%"],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    ease: ["easeIn", "easeOut"],
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
              </div>

              {/* Icon 1 (Small Top Left) */}
              <div
                className="absolute top-[30px] left-[22%] -translate-x-1/2 w-[80px] h-[81px] rounded-full bg-[#f5f5f5] flex items-center justify-center text-black"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
                }}
              >
                <BarChart2 className="w-8 h-8" />
              </div>

              {/* Icon 2 (Large Bottom Right) */}
              <div
                className="absolute top-[120px] left-[69%] -translate-x-1/2 w-[107px] h-[108px] rounded-full bg-[#f5f5f5] flex items-center justify-center text-black"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
                }}
              >
                <Layers className="w-12 h-12" />
              </div>

              {/* Decorative Bubble 1 */}
              <div
                className="absolute top-[50px] right-[40px] w-8 h-8 rounded-full bg-[#f5f5f5]"
                style={{
                  boxShadow:
                    "rgba(0,0,0,0.05) 0px 10px 20px, inset 0px 3px 1px 0px white",
                }}
              />

              {/* Decorative Bubble 2 */}
              <div
                className="absolute top-[162px] left-[70px] w-[31px] h-[32px] rounded-full bg-[#f5f5f5]"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full mt-auto flex flex-col gap-[12px]">
              <h3 className="text-[20px] font-medium text-black leading-[1.2] tracking-[-0.01em]">
                Digitale Strategie
              </h3>
              <p className="text-[16px] font-normal text-[#16101e]/80 leading-[1.5] max-w-xs">
                Maßgeschneiderte Roadmaps für digitale Transformation und
                skalierbares Wachstum.
              </p>
              <Link
                href="/marketing/neukundengewinnung"
                className="inline-flex items-center gap-2 text-sm font-bold text-black hover:opacity-70 transition-opacity pt-2"
              >
                Mehr erfahren <MoveRight className="w-4 h-4" />
              </Link>
            </div>
          </Card>

          {/* Card 2: Content & Design */}
          <Card>
            <div>
              <IconWrapper>
                <PenTool className="w-8 h-8" />
              </IconWrapper>
              <h3 className="text-[20px] font-medium text-black mb-3 leading-[1.2] tracking-[-0.01em]">
                Content & Design
              </h3>
              <p className="text-[16px] font-normal text-[#16101e]/80 leading-[1.5]">
                Kreative Assets und Storytelling, die resonieren. Von Social
                Media bis zu High-End Webdesign.
              </p>
            </div>
          </Card>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 md:col-span-2">
          {/* Card 3: Webentwicklung */}
          {/* Card 3: Content Generation */}
          <Card className="min-h-[400px] relative overflow-visible flex flex-col justify-end p-[30px] items-start">
            {/* Visual Header (Mock UI) */}
            {/* Visual Header (Mock UI) */}
            <div className="absolute top-0 left-0 right-0 md:top-0 md:left-[154px] md:right-[50px] pointer-events-none z-0 flex flex-col md:flex-row items-start gap-5">
              {/* Search Box */}
              <div
                className={cn(
                  "bg-[#f5f5f5] rounded-[8px] p-4 md:p-6 flex flex-col gap-4 w-full md:w-[450px]",
                  neumorphicShadow,
                )}
              >
                {/* Search Strip */}
                <div
                  className={cn(
                    "w-full bg-[#f5f5f5] rounded-[8px] p-[8px_0_8px_6px] flex items-center mb-1 h-10 pl-3",
                    neumorphicShadow,
                  )}
                >
                  <Typewriter
                    text={[
                      "npx create-next-app@latest",
                      "npm run build",
                      "git push origin main",
                    ]}
                    speed={50}
                    loop={true}
                    className="text-xs md:text-sm font-mono text-black/70"
                  />
                </div>

                {/* Item 1 */}
                <div className="flex items-center gap-3 opacity-50">
                  <div className="w-4 h-4 rounded-full border border-black/20 shrink-0" />
                  <span className="text-[14px] md:text-[16px] font-normal text-[#16101e]">
                    Code Qualität
                  </span>
                </div>
                {/* Item 2 */}
                <div className="flex items-center gap-3 opacity-50">
                  <div className="w-4 h-4 rounded-full border border-black/20 shrink-0" />
                  <span className="text-[14px] md:text-[16px] font-normal text-[#16101e]">
                    SEO & Performance
                  </span>
                </div>
                {/* Item 3 */}
                <div className="flex items-center gap-3 opacity-50">
                  <div className="w-4 h-4 rounded-full border border-black/20 shrink-0" />
                  <span className="text-[14px] md:text-[16px] font-normal text-[#16101e]">
                    Responsive Design
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full mt-auto flex flex-col gap-[12px]">
              <h3 className="text-[20px] font-medium text-black leading-[1.2] tracking-[-0.01em]">
                Webentwicklung
              </h3>
              <p className="text-[16px] font-normal text-[#16101e]/80 leading-[1.5]">
                Maßgeschneiderte Webseiten und leistungsstarke Web-Apps. Wir
                setzen auf modernen Code, Sicherheit und Skalierbarkeit für Ihr
                Business.
              </p>
              <div className="pt-2">
                <Link
                  href="/webentwicklung"
                  className="inline-flex items-center gap-2 text-sm font-bold text-black hover:opacity-70 transition-opacity"
                >
                  Mehr erfahren <MoveRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Card>

          {/* Card 4: Performance & SEO */}
          <Card className="min-h-[400px]">
            <div>
              <IconWrapper>
                <TrendingUp className="w-8 h-8" />
              </IconWrapper>
              <h3 className="text-[20px] font-medium text-black mb-3 leading-[1.2] tracking-[-0.01em]">
                Performance & SEO
              </h3>
              <p className="text-[16px] font-normal text-[#16101e]/80 leading-[1.5]">
                Datengetriebene Optimierung für maximale Sichtbarkeit und
                Conversion-Rates. Wir bringen Sie ans Ziel.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
