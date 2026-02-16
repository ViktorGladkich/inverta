"use client";

import React from "react";
import { motion } from "motion/react";
import {
  InnovationIcon,
  VirtualIcon,
  ScalableIcon,
  CostIcon,
  InsightsIcon,
  AutomationIcon,
  DataIcon,
} from "./benefit-icons";

// Marquee items data
const marqueeItems = [
  { icon: InnovationIcon, label: "Schnellere Innovation" },
  { icon: VirtualIcon, label: "Virtuelle Assistenz" },
  { icon: ScalableIcon, label: "Skalierbare Lösungen" },
  { icon: CostIcon, label: "Kosteneffizient" },
  { icon: InsightsIcon, label: "Echtzeit-Einblicke" },
  { icon: AutomationIcon, label: "Automatisierung" },
  { icon: DataIcon, label: "Datengetriebene Entscheidungen" },
];

export function BenefitsMarquee() {
  return (
    <div
      className="w-full mt-10 overflow-hidden pb-4"
      style={{
        maskImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
      }}
    >
      <motion.div
        className="flex gap-6 w-max px-4 will-change-transform"
        animate={{ x: "-50%" }}
        transition={{
          duration: 70,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Duplicate items 4 times to ensure seamless infinite scrolling on large screens */}
        {[...Array(4)]
          .flatMap(() => marqueeItems)
          .map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 pl-3 pr-6 h-[48px] bg-[#f5f5f5] rounded-[228px] shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(0,0,0,0.08),0px_1.80656px_1.80656px_-1.33333px_rgba(0,0,0,0.08),0px_3.62176px_3.62176px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.66667px_rgba(0,0,0,0.07),0px_13.6468px_13.6468px_-3.33333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),inset_0px_3px_1px_0px_white]"
            >
              <div className="w-8 h-8 flex items-center justify-center text-[#141c29]">
                <item.icon className="w-6 h-6" />
              </div>
              <span className="font-medium text-black/80 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
      </motion.div>
    </div>
  );
}
