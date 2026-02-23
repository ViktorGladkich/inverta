"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface PageHeroProps {
  titleTop: string;
  titleMain: string;
  marqueeItems: string[];
  as?: "h1" | "h2" | "div";
}

export function PageHero({
  titleTop,
  titleMain,
  marqueeItems,
  as: Tag = "h1",
}: PageHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <section
        ref={heroRef}
        className={`${
          isMobile ? "relative" : "fixed inset-0"
        } z-0 flex flex-col items-center justify-center overflow-hidden bg-white text-black`}
        style={{
          minHeight: isMobile ? "calc(var(--vh, 1vh) * 100)" : undefined,
        }}
      >
        <div className="absolute inset-0 z-0 select-none border-b border-black/5">
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

        {/* Scroll-driven content */}
        <motion.div
          style={{
            y: isMobile ? 0 : heroY,
            opacity: isMobile ? 1 : heroOpacity,
          }}
          className="container mx-auto px-6 md:px-10 max-w-[1400px] relative z-10 text-center flex flex-col items-center pt-24 md:pt-0"
        >
          {/* Giant Typography */}
          <div className="mb-12 md:mb-40">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3,
              }}
            >
              <Tag className="text-[clamp(2.2rem,9vw,11rem)] font-black tracking-tighter leading-[0.85] px-4">
                <span className="block text-black/20 mb-2 md:mb-4 uppercase">
                  {titleTop}
                </span>
                <span className="relative inline-flex items-center">
                  <span
                    className="absolute bg-[#daff02] rounded-full z-0"
                    style={{
                      width: "1.3em",
                      height: "1.3em",
                      left: "-0.15em",
                      top: "-0.15em",
                    }}
                  />
                  <span className="relative z-10 text-black uppercase">
                    {titleMain}
                  </span>
                  <span className="relative z-10 text-[#daff02]">.</span>
                </span>
              </Tag>
            </motion.div>
          </div>
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
              {marqueeItems.map((item, idx) => (
                <span
                  key={`${item}-${idx}`}
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
              {marqueeItems.map((item, idx) => (
                <span
                  key={`${item}-clone-${idx}`}
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

      {/* Scroll Spacer */}
      {!isMobile && (
        <div
          className="relative z-0 pointer-events-none"
          style={{ height: "calc(var(--vh, 1vh) * 100)" }}
        />
      )}
    </>
  );
}
