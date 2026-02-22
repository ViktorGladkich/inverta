"use client";

import React from "react";
import { motion } from "motion/react";
import { WhyUsCard } from "./WhyUsUi";
import { SyncIcon, ChartBarIcon, DataIcon, InsightsIcon } from "./WhyUsIcons";

export function IntegrationCard() {
  return (
    <WhyUsCard className="flex flex-col p-8 h-[360px]">
      {/* Visual Container */}
      <div className="relative flex-1 w-full flex items-center justify-center mb-6 min-h-[180px]">
        {/* Pulse Ring (Scanner Effect) */}
        <motion.div
          className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-[154px] h-[154px] rounded-full bg-[#f5f5f5] z-0 pointer-events-none"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 0.636953px 0.636953px -1px, rgba(0, 0, 0, 0.15) 0px 1.9316px 1.9316px -2px, rgba(0, 0, 0, 0.13) 0px 5.10612px 5.10612px -3px, rgba(0, 0, 0, 0.04) 0px 16px 16px -4px, rgba(227, 227, 227, 0.46) 0px -3px 1px 0px inset",
          }}
          animate={{ scale: [1, 2.1], opacity: [0.3, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        {/* Central Icon Complex */}
        <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 z-10">
          <div
            className="flex items-center justify-center p-[9px] bg-[#f5f5f5] rounded-full"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
            }}
          >
            {/* Inner White Shape with Logo */}
            <div
              className="w-[100px] h-[100px] rounded-full bg-[#f5f5f5] flex items-center justify-center p-4 relative overflow-hidden"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
              }}
            >
              <SyncIcon />
            </div>
          </div>
        </div>

        {/* Satellites */}
        {/* Sat 1 - Bottom Left */}
        <motion.div
          className="absolute bottom-[20px] left-[20px] w-[36px] h-[36px] bg-[#f5f5f5] rounded-xl flex items-center justify-center shadow-[0px_0.7px_0.7px_-0.66px_rgba(0,0,0,0.08),inset_0px_3px_1px_0px_white] z-20"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.5] }}
          transition={{
            duration: 12,
            times: [0, 0.1, 0.9, 1],
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-5 h-5 text-black/80">
            <ChartBarIcon className="w-full h-full" />
          </div>
        </motion.div>

        {/* Sat 2 - Bottom Center */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[36px] h-[36px] bg-[#f5f5f5] rounded-xl flex items-center justify-center shadow-[0px_0.7px_0.7px_-0.66px_rgba(0,0,0,0.08),inset_0px_3px_1px_0px_white] z-20"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.5, 0.5, 1, 1, 0.5] }}
          transition={{
            duration: 12,
            times: [0, 0.25, 0.35, 0.9, 1],
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-5 h-5 text-black/80">
            <DataIcon className="w-full h-full" />
          </div>
        </motion.div>

        {/* Sat 3 - Bottom Right */}
        <motion.div
          className="absolute bottom-[20px] right-[20px] w-[36px] h-[36px] bg-[#f5f5f5] rounded-xl flex items-center justify-center shadow-[0px_0.7px_0.7px_-0.66px_rgba(0,0,0,0.08),inset_0px_3px_1px_0px_white] z-20"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.5, 0.5, 1, 1, 0.5] }}
          transition={{
            duration: 12,
            times: [0, 0.5, 0.6, 0.9, 1],
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-5 h-5 text-black/80">
            <InsightsIcon className="w-full h-full" />
          </div>
        </motion.div>
      </div>
      {/* Title & Description */}
      <h3 className="text-2xl font-semibold mb-2 text-black">
        Nahtlose Integration
      </h3>
      <p className="text-black/60">
        Integrieren Sie leistungsstarke Tools direkt in Ihr bestehendes
        Ökosystem.
      </p>
    </WhyUsCard>
  );
}
