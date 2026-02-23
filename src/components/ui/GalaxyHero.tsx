"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BlurTextEffect } from "@/components/ui/BlurTextEffect";

export function GalaxyHero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1.0, ease: "easeOut" },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "circOut" },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }, // Fallback
    },
  };

  return (
    <>
      <section
        className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-gray-50/10"
        style={{ minHeight: "calc(var(--vh, 1vh) * 100)" }}
      >
        <h1 className="sr-only">
          Premium Agentur für Webdesign, Webentwicklung, Performance Marketing &
          KI-Automatisierung | INVERTA
        </h1>
        {/* Hintergrund-Video für immersives Design */}
        <div className="absolute inset-0 z-0 select-none">
          <video
            src="/hero-loop.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover invert grayscale brightness-[0.69] "
          />
          {/* Optional Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
        </div>

        {/* Hauptinhalts-Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center gap-4 px-4 text-center max-w-5xl mx-auto"
        >
          {/* Visuelles Tag-Badge (Premium Agentur) */}
          <motion.div variants={badgeVariants}>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F5F5F5] border border-white shadow-[0_30px_30px_-3.25px_rgba(0,0,0,0.05),0_13px_13px_-2.7px_rgba(0,0,0,0.08),0_6px_6px_-2.1px_rgba(0,0,0,0.09)] backdrop-blur-sm">
              <span className="text-xs font-semibold tracking-wide text-black uppercase">
                Digitalagentur der nächsten Generation
              </span>
            </div>
          </motion.div>

          {/* Logo-Container und Hauptüberschrift */}
          <motion.div
            className="flex flex-col items-center gap-6"
            variants={titleVariants}
          >
            <div className="flex items-center gap-4 md:gap-10">
              {/* Logo Box (Neumorphism-Stil) */}
              <div
                className="p-[6px] md:p-[10px] rounded-[100px] shadow-[0px_0.706592px_0.989229px_-0.541667px_rgba(122,122,122,0.58),0px_1.80656px_2.52919px_-1.08333px_rgba(122,122,122,0.57),0px_3.62176px_5.07046px_-1.625px_rgba(122,122,122,0.55),0px_6.8656px_9.61184px_-2.16667px_rgba(122,122,122,0.52),0px_13.6468px_19.1055px_-2.70833px_rgba(122,122,122,0.46),0px_30px_42px_-3.25px_rgba(122,122,122,0.32)]"
                style={{
                  background:
                    "linear-gradient(180deg, rgb(0, 0, 0) -278%, rgb(255, 255, 255) 136%)",
                }}
              >
                <div
                  className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] p-[5px] md:p-[5px] rounded-full flex items-center justify-center shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(16,49,77,0.24),0px_1.80656px_1.80656px_-1.33333px_rgba(16,49,77,0.23),0px_3.62176px_3.62176px_-2px_rgba(16,49,77,0.22),0px_6.8656px_6.8656px_-2.66667px_rgba(16,49,77,0.2),0px_13.6468px_13.6468px_-3.33333px_rgba(16,49,77,0.16),0px_30px_30px_-4px_rgba(16,49,77,0.06)]"
                  style={{
                    background:
                      "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(40, 40, 40) 213%)",
                  }}
                >
                  {/* Logo Icon */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/cube.png"
                      alt="INVERTA Logo - Digitalagentur"
                      fill
                      sizes="100px"
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Markenname (visuell H1-Größe, semantisch H2 für SEO Hierarchie) */}
              <div className="relative flex items-center h-[100px] md:h-[120px]">
                {/* Dynamischer Akzentkreis im Hintergrund */}
                <div className="absolute left-[-11px] md:left-[-20px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] md:w-[110px] md:h-[110px] bg-[#daff02] rounded-full z-0" />
                {/* Text Logo */}
                <h2 className="relative font-sans font-bold text-[40px] sm:text-[60px] md:text-[100px] leading-none tracking-tighter text-black z-10">
                  INVERTA
                  <span className="text-[#daff02]">.</span>
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Untertitel & Leistungsübersicht */}
          <div className="sr-only">
            Marketing & Webentwicklung in Perfektion
          </div>
          <motion.p
            variants={itemVariants}
            className="text-base md:text-xl text-neutral-700 max-w-2xl leading-relaxed font-medium"
          >
            Wir transformieren Marken durch präzise Entwicklung und ästhetische
            Exzellenz. Marketing, Webentwicklung und Wachstumsstrategien, die
            die Zukunft definieren.
          </motion.p>

          {/* Handlungsaufrufe (Call-to-Action) */}
          <motion.div
            variants={buttonVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mt-4"
          >
            {/* Primärer Button (Kontakt) */}
            <Link
              href="/kontakt"
              className="group relative inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-[10px] shadow-[0_30px_30px_-3.5px_rgba(0,0,0,0.15),0_13px_13px_-2.9px_rgba(0,0,0,0.26),0_6px_6px_-2.3px_rgba(0,0,0,0.3)] hover:shadow-[0_40px_40px_-5px_rgba(0,0,0,0.4)] hover:scale-[1.02] transition-all duration-300"
            >
              <span className="font-semibold text-lg">Projekt starten</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                className="w-5 h-5 fill-current"
              >
                <g>
                  <path d="M200,64V168a8,8,0,0,1-13.66,5.66L140,127.31,69.66,197.66a8,8,0,0,1-11.32-11.32L128.69,116,82.34,69.66A8,8,0,0,1,88,56H192A8,8,0,0,1,200,64Z"></path>
                </g>
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Sektion: Kurzes Statement des Gründers */}
      <section
        id="founder-note"
        className="relative z-10 flex flex-col items-center justify-center gap-11 py-[100px] px-10 bg-[#ffffff4d] shadow-[inset_0_3px_1px_rgba(255,255,255,0.4),inset_0_-3px_1px_rgba(255,255,255,0.4)] backdrop-blur-sm"
      >
        <div className="max-w-4xl text-center">
          <h3 className="text-2xl md:text-3xl font-medium leading-snug text-neutral-800">
            <BlurTextEffect className="inline-block" delay={0.1}>
              <span className="text-black/60">
                &quot;Wir erschaffen nicht nur Präsenzen, wir{" "}
              </span>
              <span className="text-black">definieren Standards. </span>
              <span className="text-black/60">Mit purer Ästhetik und </span>
              <span className="text-black">kompromissloser Performance </span>
              <span className="text-black/60">führen wir Ihre Marke in </span>
              <span className="text-black">eine neue Ära.&quot;</span>
            </BlurTextEffect>
          </h3>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/viktor.jpg"
              alt="Founder"
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1.5 text-neutral-900 font-semibold text-lg">
              <span>Gründer von</span>
              <span className="relative inline-flex items-center">
                <span className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-6 h-6 bg-[#daff02] rounded-full" />
                <span className="relative z-10 font-bold text-black tracking-tight leading-none">
                  INVERTA
                </span>
                <span className="relative z-10 text-[#daff02] font-bold leading-none">
                  .
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
