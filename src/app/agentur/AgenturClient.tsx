"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { MissionSection } from "./MissionSection";
import { PrinzipienSection } from "./mission/PrinzipienSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";

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
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="min-h-screen bg-white">
      <section
        ref={heroRef}
        className="sticky top-0 flex flex-col items-center justify-center overflow-hidden bg-gray-50/10 text-black"
        style={{ minHeight: "calc(var(--vh, 1vh) * 100)" }}
      >
        {/* Background video */}
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

        {/* Scroll-driven content */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto px-6 md:px-10 max-w-[1400px] relative z-10 text-center flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 md:mb-14"
          />

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
              <h1 className="text-[clamp(5rem,10vw,11rem)] font-black tracking-tighter leading-[0.85]">
                <span className="block text-black/20 mb-4 md:mb-4">
                  WIR SIND
                </span>
                <span className="relative inline-flex items-center">
                  <span className="absolute left-[-15px] md:left-[-20px] top-[-10%] md:top-[-8%] w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] bg-[#daff02] rounded-full z-0" />
                  <span className="relative z-10 text-black">INVERTA</span>
                  <span className="relative z-10 text-[#daff02]">.</span>
                </span>
              </h1>
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
            {/* Первая копия */}
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
            {/* Вторая копия — для бесшовного эффекта */}
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

      <MissionSection />

      <PrinzipienSection />

      <ServicesOverview />

      <section
        className="relative z-10 py-24 md:py-32 bg-[#f5f5f5]"
        aria-labelledby="process-heading"
      >
        <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
          <FadeIn>
            <div className="text-center mb-20">
              <span className="text-[11px] font-semibold text-black/30 tracking-widest uppercase block mb-4">
                Unser Ansatz
              </span>
              <h2
                id="process-heading"
                className="text-3xl md:text-5xl font-black tracking-tighter leading-tight mx-auto max-w-2xl"
              >
                Von der Idee zum Ergebnis.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {[
              {
                step: "01",
                title: "Analyse & Strategie",
                desc: "Wir tauchen tief in Ihr Business ein. Marktanalyse, Wettbewerbsrecherche und klare Zielsetzung bilden das Fundament für jedes erfolgreiche Projekt.",
              },
              {
                step: "02",
                title: "Design & Entwicklung",
                desc: "Vom ersten Wireframe bis zum fertigen Produkt: Wir gestalten und entwickeln mit Präzision. Jedes Detail wird durchdacht, jede Zeile Code optimiert.",
              },
              {
                step: "03",
                title: "Launch & Wachstum",
                desc: "Nach dem Go-Live beginnt die eigentliche Arbeit. Wir optimieren kontinuierlich, messen Ergebnisse und skalieren, was funktioniert.",
              },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.15}>
                <div className="relative bg-white rounded-[20px] p-8 md:p-10 h-full group hover:shadow-lg transition-shadow duration-500">
                  <span className="text-7xl md:text-8xl font-black text-black/3 tracking-tighter absolute top-6 right-8">
                    {item.step}
                  </span>
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold mb-8">
                      {item.step}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4">
                      {item.title}
                    </h3>
                    <p className="text-base text-black/45 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-28 md:py-40 bg-black text-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-10 max-w-[1400px] relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[11px] font-semibold text-white/30 tracking-widest uppercase block mb-6">
                Bereit für den nächsten Schritt?
              </span>
              <h2 className="text-3xl md:text-6xl font-black tracking-tighter leading-tight mb-6">
                Lassen Sie uns gemeinsam
                <br />
                <span className="text-white/30">Großes schaffen.</span>
              </h2>
              <p className="text-lg text-white/40 font-medium mb-10 max-w-xl mx-auto leading-relaxed">
                Jedes erfolgreiche Projekt beginnt mit einem Gespräch. Erzählen
                Sie uns von Ihrer Vision – wir machen den Rest.
              </p>
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-base hover:bg-white/90 shadow-[0_10px_40px_rgba(255,255,255,0.1)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.15)] transition-all duration-300"
              >
                Kostenloses Erstgespräch vereinbaren
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/2 rounded-full blur-[120px] pointer-events-none" />
      </section>
    </main>
  );
}
