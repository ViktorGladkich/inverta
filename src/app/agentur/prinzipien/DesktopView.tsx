"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Shield } from "lucide-react";
import { PRINCIPLES } from "./constants";
import { DesktopPrincipleLine } from "./components/DesktopPrincipleLine";
import { ProgressDot } from "./components/ProgressDot";

export function DesktopView() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const contentY = useTransform(smoothProgress, [0.4, 0.85], [0, -105]);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-[#f5f5f5]"
      aria-labelledby="values-heading"
      style={{ minHeight: "500vh" }}
    >
      <div
        className="sticky top-0 flex flex-col overflow-hidden pt-24 pb-32 md:pb-12"
        style={{ height: "calc(var(--vh, 1vh) * 100)" }}
      >
        <motion.div
          style={{ y: contentY }}
          className="flex-1 flex flex-col px-6 md:px-16 max-w-[1400px] mx-auto w-full"
        >
          <div className="flex flex-col items-center text-center gap-4 mb-6 md:mb-8 shrink-0">
            <div className="flex items-center justify-center px-[12px] py-[6px] gap-2 rounded-[60px] bg-[#f5f5f5] shadow-[0px_0.706592px_0.706592px_-0.541667px_rgba(0,0,0,0.1),0px_1.80656px_1.80656px_-1.08333px_rgba(0,0,0,0.09),0px_3.62176px_3.62176px_-1.625px_rgba(0,0,0,0.09),0px_6.8656px_6.8656px_-2.16667px_rgba(0,0,0,0.09),0px_13.6468px_13.6468px_-2.70833px_rgba(0,0,0,0.08),0px_30px_30px_-3.25px_rgba(0,0,0,0.05),inset_0px_3px_1px_0px_white]">
              <div className="w-[14px] h-[14px] text-black/40">
                <Shield className="w-full h-full" />
              </div>
              <span className="text-[12px] font-medium text-black tracking-wider uppercase">
                Unsere Prinzipien
              </span>
            </div>
            <h2
              id="values-heading"
              className="text-2xl md:text-4xl font-medium tracking-tight text-black"
            >
              <span className="bg-linear-to-t from-black/80 to-black bg-clip-text text-transparent">
                Woran wir glauben.
              </span>
            </h2>

            <div className="hidden md:flex items-center gap-2 mt-2">
              {PRINCIPLES.map((_, i) => (
                <ProgressDot
                  key={i}
                  index={i}
                  progress={smoothProgress}
                  totalItems={PRINCIPLES.length}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col flex-1 justify-between">
            {PRINCIPLES.map((principle, index) => (
              <DesktopPrincipleLine
                key={principle.number}
                principle={principle}
                index={index}
                progress={smoothProgress}
                totalItems={PRINCIPLES.length}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
