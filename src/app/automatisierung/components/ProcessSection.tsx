"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Settings, Search, PenTool, Terminal, Rocket } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { PROCESS_STEPS } from "../constants";
import { ProcessStep } from "../types";

const neumorphicShadow =
  "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset";

const stepIcons = [
  <Search key="audit" className="w-5 h-5 text-black" />,
  <PenTool key="logic" className="w-5 h-5 text-black" />,
  <Terminal key="impl" className="w-5 h-5 text-black" />,
  <Rocket key="scale" className="w-5 h-5 text-black" />,
];

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll logic for progress line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      className="bg-[#f5f5f5] py-0 md:py-32 lg:py-48 px-6 md:px-20 lg:px-32 relative overflow-hidden selection:bg-[#daff02] selection:text-black"
    >
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col items-center text-center gap-6 mb-16 md:mb-32">
          {/* Badge */}
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm">
              <Settings className="w-3.5 h-3.5 text-black/40" />
              <span className="text-[11px] font-semibold text-black tracking-widest uppercase mt-px">
                Unser Prozess
              </span>
            </div>
          </FadeIn>

          {/* Centered Headline */}
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black mb-6">
              Vom Chaos zur{" "}
              <span className="relative inline-block">
                <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-4 md:h-4 bg-[#daff02] z-0" />
                <span className="relative z-10">Präzision.</span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-black font-normal leading-relaxed max-w-2xl mx-auto">
              Ein strukturierter Weg zu Ihrer digitalen Exzellenz — transparent,
              effizient und ergebnisorientiert.
            </p>
          </div>
        </div>

        {/* === CONTENT — ALTERNATING LIST WITH CENTERED PROGRESS LINE === */}
        <div className="relative">
          {/* Centered Progress Line (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-black/5 -translate-x-1/2" />
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-black origin-top will-change-transform -translate-x-1/2"
            style={{ scaleY }}
          />

          <div className="flex flex-col gap-12 md:gap-4 flex-nowrap">
            {PROCESS_STEPS.map((item, index) => (
              <StepItem
                key={item.step}
                item={item}
                index={index}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({
  item,
  index,
  isEven,
}: {
  item: ProcessStep;
  index: number;
  isEven: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col md:flex-row items-center w-full min-h-[150px] md:min-h-[300px] ${
        isEven ? "md:justify-start" : "md:justify-end"
      }`}
    >
      {/* Premium Neumorphic Timeline Icon */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 items-center justify-center">
        <div
          className="flex items-center justify-center p-[6px] bg-[#f5f5f5] rounded-full"
          style={{ boxShadow: neumorphicShadow }}
        >
          <div
            className="w-12 h-12 rounded-full bg-[#f5f5f5] flex items-center justify-center p-2 shadow-inner"
            style={{ boxShadow: neumorphicShadow }}
          >
            {stepIcons[index]}
          </div>
        </div>
      </div>

      {/* Card Wrapper */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full md:w-[45%] flex ${
          isEven ? "justify-end" : "justify-start"
        }`}
      >
        <div
          style={{ boxShadow: neumorphicShadow }}
          className="bg-white p-8 md:p-10 rounded-[32px] md:rounded-[40px] w-full group transition-all duration-500 hover:-translate-y-2"
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-black/5 shadow-sm">
                <span className="text-[10px] md:text-[11px] font-bold text-black tracking-[0.2em] uppercase mt-px">
                  STUFE 0{index + 1}
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-[#daff02] text-xs font-bold">
                {item.step}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-black leading-tight transition-colors duration-500">
                {item.title}
              </h3>
              <p className="text-base md:text-lg text-black leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
