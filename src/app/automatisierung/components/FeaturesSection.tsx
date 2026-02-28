"use client";

import { Zap } from "lucide-react";
import { FEATURES, NEUMORPHIC_SHADOW } from "../constants";
import { CardsParallax } from "@/components/ui/CardsParallax";
import { motion } from "framer-motion";

export function FeaturesSection() {
  // Map FEATURES to the format expected by CardsParallax
  const parallaxItems = FEATURES.map((f) => ({
    title: f.title,
    description: f.desc,
    tag: f.tag,
    icon: f.icon,
    src: f.src,
  }));

  return (
    <section className="bg-[#f5f5f5] pt-32 pb-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center text-center gap-6 mb-16 md:mb-24">
          {/* Label-Badge: Kernkompetenzen */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center px-[12px] py-[6px] gap-2 rounded-[60px] bg-[#f5f5f5]"
            style={{ boxShadow: NEUMORPHIC_SHADOW }}
          >
            <div className="w-[14px] h-[14px] text-black/40">
              <Zap className="w-full h-full" />
            </div>
            <span className="text-[12px] font-medium text-black tracking-wider uppercase">
              Kernkompetenzen
            </span>
          </motion.div>

          <div className="max-w-3xl">
            <motion.h2
              className="text-4xl md:text-6xl font-medium tracking-tight text-black mb-6"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Was wir automatisieren.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-lg md:text-xl text-black font-normal leading-relaxed"
            >
              Wir transformieren Ihre manuellen Prozesse in hochperformante
              digitale Workflows. Von der KI-basierten Datenanalyse bis hin zur
              skalierbaren <strong>Webentwicklung</strong> — wir erschaffen
              Systeme, die wie ein Uhrwerk für Sie arbeiten.
            </motion.p>
          </div>
        </div>

        {/* Interaktives Parallax-Grid für KI und Automatisierung */}
        <CardsParallax items={parallaxItems} />
      </div>
    </section>
  );
}
