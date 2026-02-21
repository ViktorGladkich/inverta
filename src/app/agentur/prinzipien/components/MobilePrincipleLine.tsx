"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Principle } from "../types";
import { NEUMORPHIC_SHADOW } from "../constants";

interface MobilePrincipleLineProps {
  principle: Principle;
  index: number;
}

export function MobilePrincipleLine({
  principle,
  index,
}: MobilePrincipleLineProps) {
  const lineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 90%", "end 60%"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const dotLeft = useTransform(lineScale, [0, 1], ["0%", "100%"]);
  const dotOpacity = useTransform(lineScale, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex flex-col gap-4"
    >
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-black tracking-widest text-black/20 shrink-0 w-5">
          {principle.number}
        </span>
        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
            principle.isEven ? "bg-black text-white" : "bg-[#daff02] text-black"
          }`}
        >
          {principle.icon}
        </div>
        <h3 className="text-2xl font-medium tracking-tight text-black leading-none">
          {principle.title}
        </h3>
      </div>

      <div className="pl-[92px] flex flex-col gap-4">
        <p className="text-xs text-black font-normal leading-relaxed max-w-md">
          {principle.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {principle.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-[8px] font-bold tracking-widest uppercase bg-[#f5f5f5] text-black whitespace-nowrap"
              style={{ boxShadow: NEUMORPHIC_SHADOW }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        ref={lineRef}
        className="relative h-[1.5px] w-full bg-black/6 mt-4 overflow-visible"
      >
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
