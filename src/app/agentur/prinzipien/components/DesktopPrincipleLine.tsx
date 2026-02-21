"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { Principle } from "../types";
import { NEUMORPHIC_SHADOW } from "../constants";

interface DesktopPrincipleLineProps {
  principle: Principle;
  index: number;
  progress: MotionValue<number>;
  totalItems: number;
}

export function DesktopPrincipleLine({
  principle,
  index,
  progress,
  totalItems,
}: DesktopPrincipleLineProps) {
  const start = index / totalItems;
  const end = (index + 1) / totalItems;

  const lineScale = useTransform(progress, [start, end], [0, 1]);
  const rowOpacity = useTransform(
    progress,
    [Math.max(0, start - 0.06), start],
    [0.25, 1],
  );
  const titleX = useTransform(progress, [start, start + 0.1], [-24, 0]);
  const contentOpacity = useTransform(progress, [start, start + 0.1], [0, 1]);
  const dotLeft = useTransform(lineScale, [0, 1], ["0%", "100%"]);
  const dotOpacity = useTransform(lineScale, [0, 0.04, 0.96, 1], [0, 1, 1, 0]);

  return (
    <motion.div style={{ opacity: rowOpacity }} className="flex flex-col">
      <div className="flex items-center gap-4 md:gap-8 py-2 md:py-3">
        <span className="text-[10px] font-black tracking-widest text-black/20 shrink-0 w-5">
          {principle.number}
        </span>
        <div
          className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 ${
            principle.isEven ? "bg-black text-white" : "bg-[#daff02] text-black"
          }`}
        >
          {principle.icon}
        </div>
        <motion.h3
          style={{ x: titleX, opacity: contentOpacity }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-black leading-none flex-1 min-w-0"
        >
          {principle.title}
        </motion.h3>

        <motion.div
          style={{ opacity: contentOpacity }}
          className="hidden md:flex items-center gap-2 shrink-0"
        >
          {principle.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#f5f5f5] text-black whitespace-nowrap"
              style={{ boxShadow: NEUMORPHIC_SHADOW }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="flex flex-col sm:flex-row gap-2 sm:gap-6 pb-1 pl-[88px] md:pl-[124px]"
      >
        <p className="text-xs text-black font-normal leading-relaxed max-w-md flex-1">
          {principle.description}
        </p>
      </motion.div>

      <div className="relative h-[1.5px] w-full bg-black/6 mt-3 md:mt-2 overflow-visible">
        <motion.div
          style={{ scaleX: lineScale, originX: 0 }}
          className="absolute inset-0 bg-black"
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full pointer-events-none bg-black"
          style={{
            left: dotLeft,
            opacity: dotOpacity,
            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          }}
        />
      </div>
    </motion.div>
  );
}
