"use client";

import { motion } from "framer-motion";

const marqueeItems = [
  "STRATEGIE",
  "WEBENTWICKLUNG",
  "PERFORMANCE MARKETING",
  "SEO",
  "UI/UX DESIGN",
  "BRANDING",
  "E-COMMERCE",
  "KI & AUTOMATISIERUNG",
];

export function AgenturClient() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden bg-white text-black"
      style={{ height: "calc(var(--vh, 1vh) * 100)" }}
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0 select-none">
        <video
          src="/hero-loop.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover invert grayscale brightness-[0.69]"
        />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="container mx-auto px-6 md:px-10 max-w-[1400px] relative z-10 text-center flex flex-col items-center"
      >
        <h1 className="text-[clamp(5rem,10vw,11rem)] font-black tracking-tighter leading-[0.85]">
          <span className="block text-black/20 mb-4">WIR SIND</span>
          <span className="relative inline-flex items-center">
            <span className="absolute left-[-15px] md:left-[-20px] top-[-10%] md:top-[-8%] w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] bg-[#daff02] rounded-full z-0" />
            <span className="relative z-10 text-black">INVERTA</span>
            <span className="relative z-10 text-[#daff02]">.</span>
          </span>
        </h1>
      </motion.div>

      {/* Marquee ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-[40px] left-0 right-0 z-50 border-t border-black/5 overflow-hidden bg-white/40 backdrop-blur-sm"
      >
        <div className="flex py-4">
          <div className="flex shrink-0 items-center gap-8 px-4 animate-marquee">
            {marqueeItems.map((item) => (
              <span
                key={item}
                className="flex shrink-0 items-center gap-8 text-xs font-semibold tracking-[0.2em] text-black uppercase"
              >
                {item}
                <span className="w-1.5 h-1.5 rounded-full bg-[#daff02]" />
              </span>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="flex shrink-0 items-center gap-8 px-4 animate-marquee"
          >
            {marqueeItems.map((item) => (
              <span
                key={item}
                className="flex shrink-0 items-center gap-8 text-xs font-semibold tracking-[0.2em] text-black uppercase"
              >
                {item}
                <span className="w-1.5 h-1.5 rounded-full bg-[#daff02]" />
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}