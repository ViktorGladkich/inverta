"use client";

import React from "react";
import { motion } from "motion/react";
import { BenefitCard } from "./benefit-ui";

export function AnalyticsCard() {
  return (
    <BenefitCard className="flex flex-col p-8 h-[360px]">
      {/* Visual Container */}
      <div className="relative flex-1 w-full flex items-center justify-center mb-6 overflow-hidden min-h-[180px]">
        {/* Clock Face Container - Centered */}
        <div className="relative w-[176px] h-[176px] bg-[#f5f5f5] rounded-full shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(0,0,0,0.08),0px_1.80656px_1.80656px_-1.33333px_rgba(0,0,0,0.08),0px_3.62176px_3.62176px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.66667px_rgba(0,0,0,0.07),0px_13.6468px_13.6468px_-3.33333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),inset_0px_3px_1px_0px_rgb(255,255,255)] z-10">
          {/* Hour Markers (Neumorphic Dots) */}
          <div
            className="absolute w-[20px] h-[20px] rounded-full bg-[#f5f5f5] shadow-[rgba(0,0,0,0.08)_0px_0.7px_0.7px_-0.66px,rgba(0,0,0,0.08)_0px_1.8px_1.8px_-1.33px,rgba(0,0,0,0.07)_0px_3.6px_3.6px_-2px,rgba(0,0,0,0.07)_0px_6.8px_6.8px_-2.66px,rgba(0,0,0,0.05)_0px_13.6px_13.6px_-3.33px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset] z-5"
            style={{ top: "25px", right: "50px" }}
          />
          <div
            className="absolute w-[20px] h-[20px] rounded-full bg-[#f5f5f5] shadow-[rgba(0,0,0,0.08)_0px_0.7px_0.7px_-0.66px,rgba(0,0,0,0.08)_0px_1.8px_1.8px_-1.33px,rgba(0,0,0,0.07)_0px_3.6px_3.6px_-2px,rgba(0,0,0,0.07)_0px_6.8px_6.8px_-2.66px,rgba(0,0,0,0.05)_0px_13.6px_13.6px_-3.33px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset] z-5"
            style={{ top: "78px", right: "20px" }}
          />
          <div
            className="absolute w-[20px] h-[20px] rounded-full bg-[#f5f5f5] shadow-[rgba(0,0,0,0.08)_0px_0.7px_0.7px_-0.66px,rgba(0,0,0,0.08)_0px_1.8px_1.8px_-1.33px,rgba(0,0,0,0.07)_0px_3.6px_3.6px_-2px,rgba(0,0,0,0.07)_0px_6.8px_6.8px_-2.66px,rgba(0,0,0,0.05)_0px_13.6px_13.6px_-3.33px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset] z-5"
            style={{ bottom: "25px", right: "50px" }}
          />

          {/* Animated Hand */}
          <motion.div
            className="absolute w-[16px] h-[87px] bg-[#f5f5f5] rounded-[100px] origin-[61%_80%] z-20"
            style={{
              top: "18px",
              left: "78px",
              boxShadow:
                "rgba(0, 0, 0, 0.2) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.19) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.18) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.17) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.13) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.05) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
            }}
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 150, 150, 0, 0] }}
            transition={{
              duration: 8,
              times: [0, 0.125, 0.5, 0.625, 1], // Move, Pause, Move back
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Pivot Assembly */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] bg-black/5 rounded-full flex items-center justify-center backdrop-blur-sm shadow-[inset_0px_3px_1px_0px_white] z-30">
            <div className="w-[12px] h-[12px] bg-black rounded-full" />
          </div>

          {/* Side Decorative Bars (Animated) */}
          <div className="absolute inset-0 pointer-events-none z-20">
            {/* Top Left */}
            <motion.div
              className="absolute top-[14%] -translate-y-1/2 left-[75px] w-[22px] h-[22px] bg-[#f5f5f5] rounded-full"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.2) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.19) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.18) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.17) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.13) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.05) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
              }}
              animate={{ opacity: [0, 0, 1, 1, 0, 0, 1, 1, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                times: [0, 0.14, 0.15, 0.48, 0.5, 0.64, 0.65, 0.975, 1],
                ease: "linear",
              }}
            />
            {/* Right Middle */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 right-[10px] w-[22px] h-[22px] bg-[#f5f5f5] rounded-full"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.2) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.19) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.18) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.17) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.13) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.05) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
              }}
              animate={{ opacity: [0, 0, 1, 1, 0, 0, 1, 1, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                times: [0, 0.19, 0.2, 0.475, 0.485, 0.69, 0.7, 0.975, 1],
                ease: "linear",
              }}
            />
            {/* Bottom Right */}
            <motion.div
              className="absolute bottom-[5%] translate-y-[-20%] right-[75px] w-[22px] h-[22px] bg-[#f5f5f5] rounded-full"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.2) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.19) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.18) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.17) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.13) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.05) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
              }}
              animate={{ opacity: [0, 0, 1, 1, 0, 0, 1, 1, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                times: [0, 0.24, 0.25, 0.475, 0.485, 0.74, 0.75, 0.975, 1],
                ease: "linear",
              }}
            />
          </div>
        </div>
      </div>
      {/* Title & Description */}
      <h3 className="text-2xl font-semibold mb-2 text-black">
        Präzise Analytik
      </h3>
      <p className="text-black/60">
        Verwandeln Sie Rohdaten in umsetzbare Erkenntnisse für intelligenteres
        Tracking.
      </p>
    </BenefitCard>
  );
}
