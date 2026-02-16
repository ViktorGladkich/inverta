"use client";

import React from "react";
import { motion } from "motion/react";
import { BenefitCard, AnimatedPill } from "./benefit-ui";

const barShadow =
  "0px 0.706592px 0.706592px -0.666667px rgba(0,0,0,0.08), 0px 1.80656px 1.80656px -1.33333px rgba(0,0,0,0.08), 0px 3.62176px 3.62176px -2px rgba(0,0,0,0.07), 0px 6.8656px 6.8656px -2.66667px rgba(0,0,0,0.07), 0px 13.6468px 13.6468px -3.33333px rgba(0,0,0,0.05), 0px 30px 30px -4px rgba(0,0,0,0.02), inset 0px 3px 1px 0px white";

export function EfficiencyCard() {
  return (
    <BenefitCard className="flex flex-col p-8 h-[360px]">
      {/* Visual Container */}
      <div className="relative flex-1 w-full flex items-center justify-center mb-6 min-h-[180px]">
        {/* Chart Bars Container - Scaled & Centered */}
        <div className="relative w-[220px] h-[232px] flex items-end justify-between scale-[0.75] origin-center">
          {/* Static Bar 1 */}
          <div
            className="w-[43px] h-[60px] bg-[#f5f5f5] rounded-[8px]"
            style={{ boxShadow: barShadow }}
          />

          {/* Animated Bar 2 (Automation) */}
          <motion.div
            className="relative w-[43px] bg-[#f5f5f5] rounded-[8px]"
            style={{ boxShadow: barShadow }}
            animate={{ height: [80, 155, 155, 80, 80] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              times: [0, 0.125, 0.5, 0.625, 1],
              ease: "easeInOut",
            }}
          >
            <AnimatedPill
              label="Automatisierung"
              values={[30, 90, 90, 30, 30]}
              times={[0, 0.125, 0.5, 0.625, 1]}
              duration={8}
            />
          </motion.div>

          {/* Static Bar 3 */}
          <div
            className="w-[43px] h-[85px] bg-[#f5f5f5] rounded-[8px]"
            style={{ boxShadow: barShadow }}
          />

          {/* Animated Bar 4 (Cost) */}
          <motion.div
            className="relative w-[43px] bg-[#f5f5f5] rounded-[8px]"
            style={{ boxShadow: barShadow }}
            animate={{ height: [120, 75, 75, 120, 120] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              times: [0, 0.125, 0.5, 0.625, 1],
              ease: "easeInOut",
            }}
          >
            <AnimatedPill
              label="Kosten"
              values={[70, 20, 20, 70, 70]}
              times={[0, 0.125, 0.5, 0.625, 1]}
              duration={8}
            />
          </motion.div>
        </div>
      </div>
      {/* Title & Description */}
      <h3 className="text-2xl font-semibold mb-2 text-black">
        Automatisierte Effizienz
      </h3>
      <p className="text-black/60">
        Senken Sie Betriebskosten und skalieren Sie den Output mit autonomen
        Workflows.
      </p>
    </BenefitCard>
  );
}
