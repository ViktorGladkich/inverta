import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BarChart2, MoveRight } from "lucide-react";
import { ServicesOverviewCard } from "./ServicesOverviewCard";

export const StrategyCard = ({ className }: { className?: string }) => {
  return (
    <ServicesOverviewCard className={className}>
      <div className="flex flex-col justify-between h-full relative">
        <div className="relative flex-1 w-full min-h-[160px] mb-6">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {/* Connecting Line */}
            <div
              className="absolute h-[6px] w-[52%] left-[19.5%] top-[89px] bg-[#f5f5f5]"
              style={{
                transform: "rotate(32.3deg)",
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

            {/* Icon 1 - Top Left */}
            <div
              className="absolute top-0 left-[22%] -translate-x-1/2 w-[80px] h-[81px] rounded-full bg-[#f5f5f5] flex items-center justify-center text-black"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
              }}
            >
              <BarChart2 className="w-8 h-8" />
            </div>

            {/* Icon 2 - Bottom Right */}
            <div
              className="absolute top-[90px] left-[69%] -translate-x-1/2 w-[107px] h-[108px] rounded-full bg-[#f5f5f5] flex items-center justify-center text-black"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
              }}
            >
              <Image
                src="/cube-black.png"
                alt="Cube"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
            </div>

            {/* Decorative Bubbles */}
            <div
              className="absolute top-[20px] right-[40px] w-8 h-8 rounded-full bg-[#f5f5f5]"
              style={{
                boxShadow:
                  "rgba(0,0,0,0.05) 0px 10px 20px, inset 0px 3px 1px 0px white",
              }}
            />
            <div
              className="absolute top-[132px] left-[70px] w-[31px] h-[32px] rounded-full bg-[#f5f5f5]"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full mt-auto flex flex-col gap-3">
          <h3 className="text-[20px] font-medium text-black leading-[1.2] tracking-[-0.01em]">
            Digitale Strategie
          </h3>
          <p className="text-[16px] font-normal text-[#16101e]/80 leading-normal max-w-xs min-h-[90px]">
            Maßgeschneiderte Roadmaps für digitale Transformation und
            skalierbares Wachstum.
          </p>
          <Link
            href="/marketing/neukundengewinnung"
            className="inline-flex items-center gap-2 text-sm font-bold text-black hover:opacity-70 transition-opacity"
          >
            Mehr erfahren <MoveRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </ServicesOverviewCard>
  );
};
