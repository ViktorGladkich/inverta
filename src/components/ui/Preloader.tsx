"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const htmlStyle = document.documentElement.style;
    const bodyStyle = document.body.style;

    const originalStyles = {
      htmlOverflow: htmlStyle.overflow,
      htmlHeight: htmlStyle.height,
      bodyOverflow: bodyStyle.overflow,
      bodyHeight: bodyStyle.height,
      touchAction: bodyStyle.touchAction,
    };

    htmlStyle.overflow = "hidden";
    htmlStyle.height = "100vh";
    bodyStyle.overflow = "hidden";
    bodyStyle.height = "100vh";
    bodyStyle.touchAction = "none";
    window.scrollTo(0, 0);

    // Absolute JS Event Blockers
    const preventScroll = (e: Event) => e.preventDefault();
    const preventKeyScroll = (e: KeyboardEvent) => {
      if (
        [
          "ArrowUp",
          "ArrowDown",
          "Space",
          "PageUp",
          "PageDown",
          "Home",
          "End",
        ].includes(e.code)
      ) {
        e.preventDefault();
      }
    };
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", preventKeyScroll, { passive: false });

    const duration = 2000;
    const intervalTime = 50;
    let currentProgress = 0;

    const interval = setInterval(() => {
      currentProgress += 100 / (duration / intervalTime);

      const jitter = Math.random() * 5;
      const nextProgress = Math.min(currentProgress + jitter, 100);

      setProgress(nextProgress);

      if (nextProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          htmlStyle.overflow = originalStyles.htmlOverflow;
          htmlStyle.height = originalStyles.htmlHeight;
          bodyStyle.overflow = originalStyles.bodyOverflow;
          bodyStyle.height = originalStyles.bodyHeight;
          bodyStyle.touchAction = originalStyles.touchAction;
          window.removeEventListener("wheel", preventScroll);
          window.removeEventListener("touchmove", preventScroll);
          window.removeEventListener("keydown", preventKeyScroll);
        }, 400);
      }
    }, intervalTime);

    return () => {
      clearInterval(interval);
      htmlStyle.overflow = originalStyles.htmlOverflow;
      htmlStyle.height = originalStyles.htmlHeight;
      bodyStyle.overflow = originalStyles.bodyOverflow;
      bodyStyle.height = originalStyles.bodyHeight;
      bodyStyle.touchAction = originalStyles.touchAction;
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventKeyScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-10000 bg-[#050505] flex items-center justify-center overflow-hidden"
        >
          <span className="sr-only">INVERTA DIGITAL - Seite lädt...</span>

          <div className="relative z-10 flex flex-col items-center justify-center w-full px-6">
            {/* Main Loading Counter */}
            <div className="flex items-end justify-center mb-10 md:mb-14 overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-mono text-7xl md:text-9xl font-light tracking-tighter text-white tabular-nums leading-none"
              >
                {Math.round(progress)}
              </motion.div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-xl md:text-3xl text-[#daff02] font-light mb-2 md:mb-4 ml-1"
              >
                %
              </motion.span>
            </div>

            {/* Animated Brand Reveal */}
            <div className="mb-8 md:mb-12">
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2,
                }}
              >
                <div className="relative flex justify-center items-center w-[160px] md:w-[220px] h-32">
                  <Image
                    src="/logo-inverta-white.png"
                    alt="INVERTA"
                    fill
                    sizes="(max-width: 768px) 160px, 220px"
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </div>

            {/* Sleek Progress Line */}
            <div className="w-full max-w-sm h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#daff02]"
                style={{ width: `${progress}%` }}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>

            {/* Minimal Footer Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-8 md:mt-10 flex items-center justify-between w-full max-w-sm text-white/30 font-semibold tracking-[0.2em] uppercase text-[9px] md:text-[10px]"
            >
              <span className="animate-pulse">Loading Experience</span>
              <span>Please Wait</span>
            </motion.div>
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
              className="text-[#daff02]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
                fill="currentColor"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
