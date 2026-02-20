"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { BlurTextEffect } from "@/components/ui/blur-text-effect";

import { CountUp } from "./mission/CountUp";
import { StrategyCard, DesignCard, GrowthCard } from "./mission/AnimatedCards";
import {
  neumorphicShadow,
  innerCardShadow,
  statsData,
  quoteWords,
  bodyParagraphs,
} from "./mission/constants";

export function MissionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineScaleX = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const numberY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-white rounded-t-[32px] shadow-[0_-20px_60px_rgba(0,0,0,0.15)] overflow-hidden"
      aria-labelledby="mission-heading"
    >
      {/* Background number */}
      <motion.div
        style={{ y: numberY }}
        className="absolute right-[-40px] top-[-20px] text-[clamp(200px,30vw,400px)] font-black text-black/[0.03] leading-none select-none pointer-events-none tracking-tighter"
        aria-hidden="true"
      >
        01
      </motion.div>

      {/* Top bar */}
      <div className="border-b border-black/8 px-8 md:px-16 py-5 flex items-center justify-between">
        <span className="text-[10px] font-bold tracking-[0.25em] text-black uppercase">
          Unsere Mission
        </span>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#daff02]" />
          <span className="text-[10px] font-semibold text-black tracking-widest uppercase">
            Since 2019
          </span>
        </div>
      </div>

      <div className="px-8 md:px-16 pt-20 md:pt-28 pb-0">
        {/* Animated line */}
        <div className="mb-16 md:mb-20 overflow-hidden">
          <motion.div
            style={{ scaleX: lineScaleX, originX: 0 }}
            className="h-[1px] bg-black/10 w-full"
          />
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">
          {/* Left column — sticky */}
          <div className="lg:sticky lg:top-32 flex flex-col gap-10">
            <FadeIn>
              <h2
                id="mission-heading"
                className="text-4xl md:text-6xl font-medium tracking-tight text-black"
              >
                In einer Welt voller Lärm setzen wir auf{" "}
                <span className="relative inline-block">
                  <span className="absolute bottom-1 left-0 w-full h-4 bg-[#daff02] z-0" />
                  <span className="relative z-10">Klarheit.</span>
                </span>
              </h2>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.2}>
              <div
                className="grid grid-cols-3 rounded-[20px] p-2 gap-2 bg-[#f5f5f5]"
                style={{ boxShadow: neumorphicShadow }}
              >
                {statsData.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center justify-center py-6 px-4 text-center bg-[#f5f5f5] rounded-[14px]"
                    style={{ boxShadow: innerCardShadow }}
                  >
                    <CountUp to={stat.to} suffix={stat.suffix} />
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-black/40 mt-1.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Animated cards */}
            <FadeIn delay={0.3}>
              <div
                className="grid grid-cols-3 rounded-[20px] p-2 gap-2 bg-[#f5f5f5]"
                style={{ boxShadow: neumorphicShadow }}
              >
                <StrategyCard />
                <DesignCard />
                <GrowthCard />
              </div>
            </FadeIn>
          </div>

          {/* Right column — content */}
          <div className="flex flex-col gap-0">
            {/* Animated quote */}
            <div className="mb-14 md:mb-16">
              <p className="text-2xl md:text-3xl font-medium leading-[1.4] tracking-tight text-black">
                <BlurTextEffect delay={0.2}>
                  {quoteWords.map((word, i) => (
                    <span
                      key={i}
                      className={word.muted ? "text-black/25" : "text-black"}
                    >
                      {word.text}
                      {i < quoteWords.length - 1 ? " " : ""}
                    </span>
                  ))}
                </BlurTextEffect>
              </p>
            </div>

            <div className="w-full h-[1px] bg-black/8 mb-14 md:mb-16" />

            {/* Body paragraphs */}
            <div className="flex flex-col gap-10">
              {bodyParagraphs.map((text, i) => (
                <FadeIn key={i} delay={0.15 + i * 0.05}>
                  <div className="flex gap-6 items-start">
                    <span className="text-[10px] font-bold tracking-widest text-black/20 uppercase mt-1 shrink-0 pt-[3px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-lg md:text-xl text-black font-normal leading-relaxed">
                      {text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-20 md:mt-28 border-t border-black/8 px-8 md:px-16 py-5 flex items-center justify-between">
        <span className="text-[10px] font-bold tracking-[0.25em] text-black/20 uppercase">
          Inverta Digital — Agentur
        </span>
        <span className="text-[10px] font-bold tracking-[0.25em] text-black/20 uppercase">
          Deutschland
        </span>
      </div>
    </section>
  );
}
