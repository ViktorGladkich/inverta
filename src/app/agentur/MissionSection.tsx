"use client";

import { useRef, useState, useEffect } from "react";
import { Compass } from "lucide-react";
import { motion } from "framer-motion";
import { BlurTextEffect } from "@/components/ui/BlurTextEffect";

import { CountUp } from "./mission/CountUp";
import { StrategyCard, DesignCard, GrowthCard } from "./mission/AnimatedCards";
import {
  innerCardShadow,
  statsData,
  quoteWords,
  bodyParagraphs,
  neumorphicShadow,
} from "./mission/constants";

export function MissionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-[#f5f5f5] rounded-t-[32px] shadow-[0_-20px_60px_rgba(0,0,0,0.15)] overflow-hidden"
      aria-labelledby="mission-heading"
    >
      <div className="px-8 md:px-16 pt-20 md:pt-28 pb-32">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center gap-6 mb-16 md:mb-24"
          >
            <div className="w-fit flex items-center justify-center px-[12px] py-[6px] gap-2 rounded-[60px] bg-[#f5f5f5] shadow-[0px_0.706592px_0.706592px_-0.541667px_rgba(0,0,0,0.1),0px_1.80656px_1.80656px_-1.08333px_rgba(0,0,0,0.09),0px_3.62176px_3.62176px_-1.625px_rgba(0,0,0,0.09),0px_6.8656px_6.8656px_-2.16667px_rgba(0,0,0,0.09),0px_13.6468px_13.6468px_-2.70833px_rgba(0,0,0,0.08),0px_30px_30px_-3.25px_rgba(0,0,0,0.05),inset_0px_3px_1px_0px_white]">
              <div className="w-[14px] h-[14px] text-black/40">
                <Compass className="w-full h-full" />
              </div>
              <span className="text-[12px] font-medium text-black tracking-wider uppercase">
                Unsere Mission
              </span>
            </div>{" "}
          </motion.div>
        </div>

        {/* Zwei-Spalten-Layout: Links Sticky Content, Rechts Scrolling Text */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">
          {/* Linke Sticky-Spalte: Überschrift und Statistiken */}
          <div className="lg:sticky lg:top-32 flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <h2
                id="mission-heading"
                className="text-4xl md:text-6xl font-medium tracking-tight text-black text-center md:text-left"
              >
                In einer Welt voller Lärm setzen wir auf{" "}
                <span className="relative inline-block">
                  <span className="absolute bottom-1 left-0 w-full h-4 bg-[#daff02] z-0" />
                  <span className="relative z-10">Klarheit.</span>
                </span>
              </h2>
            </motion.div>

            {/* Unternehmensstatistiken (Zähler) */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
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
            </motion.div>

            {/* Animierte Methodik-Karten */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                className="grid grid-cols-3 rounded-[20px] p-2 gap-2 bg-[#f5f5f5]"
                style={{ boxShadow: neumorphicShadow }}
              >
                <StrategyCard />
                <DesignCard />
                <GrowthCard />
              </div>
            </motion.div>
          </div>

          {/* Rechte Scroll-Spalte: Lauftext und Leitbild */}
          <div className="flex flex-col gap-0">
            {/* Animiertes Zitat mit Unschärfe-Effekt */}
            <div className="mb-14 md:mb-16">
              <p className="text-2xl md:text-3xl font-medium leading-[1.4] tracking-tight text-black">
                <BlurTextEffect delay={0.2} animate={!isMobile}>
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

            <div className="w-full h-px bg-black mb-14 md:mb-16" />

            {/* Ausführliches Mission-Statement */}
            <div className="flex flex-col gap-10">
              {bodyParagraphs.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15 + i * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="flex gap-6 items-start">
                    <span className="text-[10px] font-bold tracking-widest text-black/20 uppercase mt-1 shrink-0 pt-[3px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-lg md:text-xl text-black font-normal leading-relaxed">
                      {text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Abschlussleiste mit Geo-Referenz (Gut für lokales SEO) */}
      <div className=" border-t border-black px-8 md:px-16 py-5 flex items-center justify-between">
        <span className="text-[10px] font-bold tracking-[0.25em] text-black uppercase">
          Inverta Digital — Agentur
        </span>
        <span className="text-[10px] font-bold tracking-[0.25em] text-black uppercase">
          Deutschland
        </span>
      </div>
    </section>
  );
}
