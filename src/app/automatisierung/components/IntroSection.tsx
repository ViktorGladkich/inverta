"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { BlurTextEffect } from "@/components/ui/blur-text-effect";
import { CountUp } from "@/app/agentur/mission/CountUp";
import {
  QuantumPathCard,
  CoreEngineCard,
  ContinuousOptimizationCard,
} from "../intro/AnimatedCards";
import { statsData, quoteWords, bodyParagraphs } from "../intro/constants";

export function IntroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-[#f5f5f5] rounded-t-[40px] overflow-hidden py-24 md:py-32"
    >
      <div className="px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        <div className="flex justify-center mb-16 md:mb-24">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-black/40" />
              <span className="text-[11px] font-semibold text-black tracking-widest uppercase mt-px">
                Unsere Philosophie
              </span>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-start">
          {/* Left Column — Sticky visual block */}
          <div className="lg:sticky lg:top-32 flex flex-col gap-12">
            <div className="flex flex-col gap-10">
              <FadeIn delay={0.1}>
                <h2 className="text-5xl md:text-7xl lg:text-7xl font-medium tracking-tight text-black leading-[1.05]">
                  Zeit ist das einzige{" "}
                  <span className="relative inline-block">
                    <span className="absolute bottom-1 left-0 w-full h-4 bg-[#daff02] z-0" />
                    <span className="relative z-10">Luxusgut.</span>
                  </span>
                </h2>
              </FadeIn>
            </div>

            <FadeIn delay={0.4}>
              <div className="bg-white/50 backdrop-blur-md border border-white p-4 md:p-6 rounded-[32px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-4">
                    <motion.div
                      whileHover={{ y: -2 }}
                      className="bg-white rounded-[24px] p-2 shadow-sm border border-black/3"
                    >
                      <QuantumPathCard />
                    </motion.div>

                    <div className="bg-black text-white rounded-[24px] p-6 flex flex-col justify-center items-center text-center shadow-lg min-h-[160px]">
                      <CountUp
                        to={statsData[0].to}
                        suffix={statsData[0].suffix}
                        className="text-white"
                      />
                      <span className="text-[10px] font-medium tracking-widest uppercase text-white mt-2">
                        {statsData[0].label}
                      </span>
                    </div>

                    <motion.div
                      whileHover={{ y: -2 }}
                      className="bg-white rounded-[24px] p-2 shadow-sm border border-black/3"
                    >
                      <CoreEngineCard />
                    </motion.div>
                  </div>

                  <div className="flex flex-col gap-4 pt-8">
                    <div className="bg-[#daff02] rounded-[24px] p-6 flex flex-col justify-center items-center text-center shadow-sm min-h-[160px]">
                      <div className="text-black">
                        <CountUp
                          to={statsData[1].to}
                          suffix={statsData[1].suffix}
                        />
                      </div>
                      <span className="text-[10px] font-medium tracking-widest uppercase text-black mt-2">
                        {statsData[1].label}
                      </span>
                    </div>

                    <motion.div
                      whileHover={{ y: -2 }}
                      className="bg-white rounded-[24px] p-2 shadow-sm border border-black/3"
                    >
                      <ContinuousOptimizationCard />
                    </motion.div>

                    <div className="bg-white rounded-[24px] p-6 flex flex-col justify-center items-center text-center shadow-sm border border-black/3 min-h-[160px]">
                      <CountUp
                        to={statsData[2].to}
                        suffix={statsData[2].suffix}
                      />
                      <span className="text-[10px] font-medium tracking-widest uppercase text-black mt-2">
                        {statsData[2].label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column — Content */}
          <div className="flex flex-col">
            <div className="mb-20">
              <p className="text-2xl md:text-3xl lg:text-4xl text-black font-medium leading-[1.3] tracking-tight">
                <BlurTextEffect delay={0.3}>
                  {quoteWords.map((word, i) => (
                    <span
                      key={i}
                      className={word.muted ? "text-black/30" : "text-black"}
                    >
                      {word.text}
                      {i < quoteWords.length - 1 ? " " : ""}
                    </span>
                  ))}
                </BlurTextEffect>
              </p>
            </div>

            <div className="w-full h-px bg-black mb-20" />

            <div className="flex flex-col gap-12">
              {bodyParagraphs.map((text, i) => (
                <FadeIn key={i} delay={0.2 + i * 0.1}>
                  <div className="flex gap-6 items-start">
                    <span className="text-[10px] font-bold tracking-widest text-black/20 uppercase mt-1 shrink-0 pt-[3px]">
                      0{i + 1}
                    </span>
                    <p className="text-lg md:text-xl text-black/80 font-normal leading-relaxed">
                      {text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
