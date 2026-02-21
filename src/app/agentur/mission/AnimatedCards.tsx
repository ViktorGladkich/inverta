"use client";

import { motion } from "framer-motion";
import { Target, Palette, TrendingUp } from "lucide-react";

const innerCardShadow =
  "0px 0.706592px 0.706592px -0.666667px rgba(0,0,0,0.08),0px 1.80656px 1.80656px -1.33333px rgba(0,0,0,0.08),0px 3.62176px 3.62176px -2px rgba(0,0,0,0.07),inset 0px 3px 1px 0px rgba(255,255,255,1)";

/* Strategy — concentric rings + rotating dots */
export function StrategyCard() {
  return (
    <div className="bg-[#daff02] rounded-[14px] h-28 md:h-36 flex flex-col items-center justify-between py-3 px-2 relative overflow-hidden">
      <div className="relative flex items-center justify-center mt-5">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.6,
            }}
            className="absolute rounded-full border border-black"
            style={{ width: `${i * 16}px`, height: `${i * 16}px` }}
          />
        ))}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute w-8 h-8"
        >
          <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black" />
          <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-black" />
          <motion.div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-black" />
        </motion.div>
        <Target className="w-5 h-5 text-black/70 relative z-10" />
      </div>

      <div className="flex gap-1.5 items-center">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.6, 1], opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
            className="w-1 h-1 rounded-full bg-black"
          />
        ))}
      </div>

      <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-black">
        Strategy
      </span>
    </div>
  );
}

/* Design — scanning line + orbiting dots + glitch icon */
export function DesignCard() {
  const cornerPositions = [
    { top: "8px", left: "8px" },
    { top: "8px", right: "8px" },
    { bottom: "24px", left: "8px" },
    { bottom: "24px", right: "8px" },
  ];

  return (
    <div className="bg-black rounded-[14px] h-28 md:h-36 flex flex-col items-center justify-between py-3 px-2 relative overflow-hidden">
      <motion.div
        animate={{ y: [0, 60, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-[#daff02]/60 to-transparent"
        style={{ top: "20px" }}
      />

      <div className="relative flex items-center justify-center mt-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute w-10 h-10"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#daff02]" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute w-6 h-6"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/40" />
        </motion.div>
        <motion.div
          animate={{ x: [0, -2, 2, 0], opacity: [1, 0.5, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Palette className="w-6 h-6 text-white/80 relative z-10" />
        </motion.div>
      </div>

      {cornerPositions.map((pos, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
          className="absolute w-1 h-1 bg-[#daff02]/60"
          style={pos}
        />
      ))}

      <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-white">
        Design
      </span>
    </div>
  );
}

/* Growth — bouncing icon + animated bars */
export function GrowthCard() {
  return (
    <div
      className="bg-[#f5f5f5] rounded-[14px] h-28 md:h-36 flex flex-col items-center justify-between py-3 px-2 relative overflow-hidden"
      style={{ boxShadow: innerCardShadow }}
    >
      <div className="relative flex items-center justify-center mt-3">
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <TrendingUp className="w-6 h-6 text-black/60" />
        </motion.div>
        <motion.div
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.5,
          }}
          className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#daff02]"
        />
      </div>

      <div className="flex justify-center items-end gap-[3px]">
        {[6, 10, 8, 14, 10].map((h, i) => (
          <motion.div
            key={i}
            animate={{ scaleY: [0.4, 1, 0.4] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
            className="w-1 bg-black rounded-full origin-bottom"
            style={{ height: `${h}px` }}
          />
        ))}
      </div>

      <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-black">
        Growth
      </span>
    </div>
  );
}
