"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fake progress counter for an organic loading feel
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 99) {
          clearInterval(interval);
          return 99;
        }
        // Organic easing: slows down as it reaches 99%
        const increment = Math.random() * (100 - prev) * 0.15;
        return Math.min(prev + increment, 99);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-10000 bg-[#050505] flex items-center justify-center overflow-hidden">
      <span className="sr-only">INVERTA DIGITAL - Seite lädt...</span>

      {/* Decorative ambient glowing gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] min-w-[300px] min-h-[300px] bg-[#daff02]/0.03 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full px-6">
        {/* Main Loading Counter */}
        <div className="flex items-end justify-center mb-10 md:mb-14">
          <div className="font-mono text-7xl md:text-9xl font-light tracking-tighter text-white tabular-nums leading-none">
            {Math.round(progress)}
          </div>
          <span className="text-xl md:text-3xl text-[#daff02] font-light mb-2 md:mb-4 ml-1">
            %
          </span>
        </div>

        {/* Animated Brand Reveal */}
        <div className="overflow-hidden mb-8 md:mb-12">
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-lg md:text-2xl font-bold tracking-[0.4em] text-white uppercase text-center ml-[0.4em]">
              INVERTA
            </h1>
          </motion.div>
        </div>

        {/* Sleek Progress Line */}
        <div className="w-full max-w-sm h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#daff02]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>

        {/* Minimal Footer Info */}
        <div className="mt-8 md:mt-10 flex items-center justify-between w-full max-w-sm text-white/30 font-semibold tracking-[0.2em] uppercase text-[9px] md:text-[10px]">
          <span className="animate-pulse">Loading Experience</span>
          <span>Please Wait</span>
        </div>
      </div>

      {/* Abstract Animated Elements */}
      <motion.div
        className="absolute bottom-10 left-10 hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white/20"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>
    </div>
  );
}
