"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mouse } from "lucide-react";

function MobileBenefits({ benefits }: { benefits: string[] }) {
  return (
    <section
      aria-label="Advantages and Benefits"
      className="md:hidden relative bg-[#f5f5f5] text-black py-20 px-6"
    >
      <h2 className="font-mono text-black text-xs font-bold tracking-widest uppercase mb-12 flex justify-center">
        [ ADVANTAGES ]
      </h2>

      <div className="flex flex-col gap-12">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="relative w-full flex items-center justify-center min-h-[30vh]"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] sm:text-[200px] font-black text-[#daff02] leading-none select-none tracking-tighter opacity-70 pointer-events-none">
              0{index + 1}
            </div>
            <div className="relative z-10 flex flex-col items-center text-center gap-6">
              <div className="w-12 h-[2px] bg-black" />
              <h3 className="text-4xl text-black font-medium tracking-tight uppercase leading-tight max-w-xs">
                {benefit}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DesktopBenefits({ benefits }: { benefits: string[] }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${((benefits.length - 1) / benefits.length) * 100}%`],
  );

  return (
    <div
      ref={targetRef}
      className="hidden md:block relative bg-[#f5f5f5] text-black"
      style={{ height: `calc(var(--vh, 1vh) * 100 * ${benefits.length})` }}
    >
      <div
        className="sticky top-0 flex items-center overflow-hidden"
        style={{ height: "calc(var(--vh, 1vh) * 100)" }}
      >
        <h2 className="absolute top-10 left-10 font-mono text-black text-sm font-bold tracking-widest uppercase">
          [ Advantages ]
        </h2>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-black text-sm font-bold tracking-widest uppercase flex flex-col items-center gap-2">
          <Mouse className="w-6 h-6 animate-bounce" aria-hidden="true" />
          <span>Scroll</span>
        </div>

        <motion.div style={{ x }} className="flex h-full">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="w-screen shrink-0 flex items-center justify-center relative px-20"
              style={{ height: "calc(var(--vh, 1vh) * 100)" }}
            >
              <div className="relative w-full max-w-5xl flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[600px] font-black text-[#daff02] leading-none select-none tracking-tighter pointer-events-none">
                  0{index + 1}
                </div>
                <div className="relative z-10 flex items-center gap-16 w-full">
                  <div className="w-32 h-2 bg-black shrink-0" />
                  <h3 className="text-7xl lg:text-[7.5rem] font-medium tracking-tighter leading-[1.05] text-black uppercase drop-shadow-2xl">
                    {benefit}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export const BenefitsSection = ({ benefits }: { benefits: string[] }) => {
  return (
    <>
      <MobileBenefits benefits={benefits} />
      <DesktopBenefits benefits={benefits} />
    </>
  );
};
