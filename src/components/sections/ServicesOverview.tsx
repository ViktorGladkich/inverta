"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { StrategyCard } from "./services/StrategyCard";
import { WebDevCard } from "./services/WebDevCard";
import { AICard } from "./services/AICard";
import { MarketingCard } from "./services/MarketingCard";

export function ServicesOverview() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const slideLeft: Variants = {
    hidden: { opacity: 0, x: -100, y: 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideRight: Variants = {
    hidden: { opacity: 0, x: 100, y: 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideUp: Variants = {
    hidden: { opacity: 0, x: 0, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="services"
      className="relative z-10 bg-[#f5f5f5] py-24 px-4 md:px-8 overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        key={isMobile ? "mobile-header" : "desktop-header"}
        variants={isMobile ? slideUp : slideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center text-center gap-6 mb-16 md:mb-24"
      >
        {/* Badge */}
        <div className="flex items-center justify-center px-[12px] py-[6px] gap-2 rounded-[60px] bg-[#f5f5f5] shadow-[0px_0.706592px_0.706592px_-0.541667px_rgba(0,0,0,0.1),0px_1.80656px_1.80656px_-1.08333px_rgba(0,0,0,0.09),0px_3.62176px_3.62176px_-1.625px_rgba(0,0,0,0.09),0px_6.8656px_6.8656px_-2.16667px_rgba(0,0,0,0.09),0px_13.6468px_13.6468px_-2.70833px_rgba(0,0,0,0.08),0px_30px_30px_-3.25px_rgba(0,0,0,0.05),inset_0px_3px_1px_0px_white]">
          <div className="w-[14px] h-[14px] text-black/40">
            <Sparkles className="w-full h-full" />
          </div>
          <span className="text-[12px] font-medium text-black tracking-wider uppercase">
            Leistungen
          </span>
        </div>

        {/* Title & Description */}
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black mb-6">
            Digitale Exzellenz
          </h2>
          <p className="text-lg md:text-xl text-[#16101e]/80 font-normal leading-relaxed max-w-2xl mx-auto">
            Wir verbinden Strategie, Design und Technologie zu digitalen
            Erlebnissen, die Marken transformieren und Wachstum beschleunigen.
          </p>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <motion.div
          key={isMobile ? "mobile-1" : "desktop-1"}
          variants={isMobile ? slideUp : slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="md:col-span-1"
        >
          <StrategyCard className="h-full" />
        </motion.div>

        <motion.div
          key={isMobile ? "mobile-2" : "desktop-2"}
          variants={isMobile ? slideUp : slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="md:col-span-2"
        >
          <WebDevCard className="h-full" />
        </motion.div>

        <motion.div
          key={isMobile ? "mobile-3" : "desktop-3"}
          variants={isMobile ? slideUp : slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="md:col-span-2"
        >
          <AICard className="h-full" />
        </motion.div>

        <motion.div
          key={isMobile ? "mobile-4" : "desktop-4"}
          variants={isMobile ? slideUp : slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="md:col-span-1"
        >
          <MarketingCard className="h-full" />
        </motion.div>
      </div>
    </section>
  );
}
