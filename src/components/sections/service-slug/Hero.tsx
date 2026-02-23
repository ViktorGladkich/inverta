"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";
import { ServiceContent } from "@/data/services";

interface HeroProps {
  service: ServiceContent;
  categoryLabel: string;
}

export const Hero = ({ service, categoryLabel }: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const titleWords = service.title.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[800px] flex items-center justify-center px-6 overflow-hidden bg-white"
      style={{ minHeight: "calc(var(--vh, 1vh) * 100)" }}
    >
      <div className="absolute inset-0 z-0 bg-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/slug-loop.mp4" type="video/mp4" />
        </video>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col items-center text-center mt-12 md:mt-20 text-white"
      >
        <div className="overflow-hidden mb-12 md:mb-16">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="w-fit flex items-center justify-center px-[16px] py-[8px] gap-2.5 rounded-[60px] bg-white shadow-[0px_0.706592px_0.706592px_-0.541667px_rgba(0,0,0,0.1),0px_1.80656px_1.80656px_-1.08333px_rgba(0,0,0,0.09),0px_3.62176px_3.62176px_-1.625px_rgba(0,0,0,0.09),0px_6.8656px_6.8656px_-2.16667px_rgba(0,0,0,0.09),0px_13.6468px_13.6468px_-2.70833px_rgba(0,0,0,0.08),0px_30px_30px_-3.25px_rgba(0,0,0,0.05),inset_0px_3px_1px_0px_white]"
          >
            <div className="w-[16px] h-[16px] text-black/40">
              <Sparkles className="w-full h-full" />
            </div>
            <span className="text-[12px] font-bold text-black tracking-widest uppercase">
              {categoryLabel}
            </span>
          </motion.div>
        </div>

        <h1 className="text-[10vw] sm:text-[8vw] md:text-[5rem] lg:text-[6rem] xl:text-[7.5rem] text-black font-medium tracking-tighter leading-[0.85] uppercase flex flex-wrap justify-center gap-x-2 md:gap-x-6 gap-y-2 mb-16 md:mb-24 px-4 w-full drop-shadow-sm">
          {titleWords.map((word, i) => (
            <div key={i} className="overflow-hidden pb-4 max-w-full">
              <motion.span
                initial={{ y: "110%", rotateZ: 5 }}
                animate={{ y: "0%", rotateZ: 0 }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="block"
              >
                {word}
              </motion.span>
            </div>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-24 h-1 bg-[#daff02] mb-12"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl text-black max-w-2xl font-medium leading-relaxed px-6"
        >
          {service.heroText}
        </motion.p>
      </motion.div>
    </section>
  );
};
