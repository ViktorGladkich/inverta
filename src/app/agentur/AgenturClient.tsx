"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Zap,
  Eye,
  Users,
  Code2,
  Palette,
  BarChart3,
  Rocket,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Ergebnisorientiert",
    description:
      "Schönes Design allein reicht nicht. Wir optimieren für messbare KPIs: Conversion, Umsatz, Wachstum.",
    number: "01",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Technische Exzellenz",
    description:
      "Modernste Technologien, blitzschnelle Ladezeiten und suchmaschinenoptimierte Architekturen sind unser Standard.",
    number: "02",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Transparenz",
    description:
      "Keine versteckten Kosten, kein Fachchinesisch. Wir kommunizieren auf Augenhöhe mit klaren Meilensteinen.",
    number: "03",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Partnerschaft",
    description:
      "Wir sind nicht nur Dienstleister – wir verstehen Ihr Business und werden Teil Ihres Wachstums.",
    number: "04",
  },
];

const capabilities = [
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Design & Branding",
    items: [
      "UI/UX Design",
      "Brand Identity",
      "Motion Design",
      "Design Systems",
    ],
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Webentwicklung",
    items: [
      "Next.js / React",
      "Headless CMS",
      "E-Commerce",
      "Web Applications",
    ],
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Performance Marketing",
    items: ["Google Ads", "Meta Ads", "SEO / SEA", "Analytics & Tracking"],
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "Strategie & Beratung",
    items: [
      "Digitale Strategie",
      "Conversion Optimierung",
      "Growth Consulting",
      "Marktanalyse",
    ],
  },
];

const stats = [
  { value: "97+", label: "Projekte" },
  { value: "5+", label: "Jahre Erfahrung" },
  { value: "95%", label: "Kundenzufriedenheit" },
  { value: "24h", label: "Response-Zeit" },
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
      {/* ═══════════════════════════════════════════ */}
      {/* HERO SECTION */}
      {/* ═══════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-end pb-20 md:pb-28 overflow-hidden bg-[#f5f5f5]"
      >
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto px-6 md:px-10 max-w-[1400px] relative z-10"
        >
          {/* Small Tag */}
          <FadeIn>
            <div className="w-fit flex items-center px-3 py-1.5 gap-2 rounded-full bg-white/80 shadow-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
              <span className="text-[11px] font-semibold text-black/60 tracking-widest uppercase">
                Über INVERTA DIGITAL
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black tracking-tighter leading-[0.9] mb-8 max-w-5xl">
              Wir gestalten digitale
              <br />
              <span className="text-black/25">Erlebnisse, die wirken.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <p className="text-lg md:text-xl text-black/50 font-medium leading-relaxed max-w-xl">
                INVERTA DIGITAL ist Ihre Performance-Agentur aus Dresden. Wir
                verbinden Strategie, Design und Technologie zu digitalen
                Lösungen, die messbare Ergebnisse liefern.
              </p>
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-black/85 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition-all duration-300 shrink-0"
              >
                Projekt starten
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </motion.div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] border border-black/3 rounded-full" />
          <div className="absolute top-[30%] right-[10%] w-[200px] h-[200px] border border-black/5 rounded-full" />
          <div className="absolute bottom-[10%] left-[5%] w-[100px] h-[100px] border border-black/4 rounded-full" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* STATS BAR */}
      {/* ═══════════════════════════════════════════ */}
      <section
        className="bg-black text-white py-12 md:py-16"
        aria-label="Kennzahlen"
      >
        <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center md:text-left">
                  <div className="text-3xl md:text-5xl font-black tracking-tighter mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm font-medium text-white/40 tracking-widest uppercase">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* VISION / MISSION */}
      {/* ═══════════════════════════════════════════ */}
      <section
        className="py-24 md:py-36 bg-white"
        aria-labelledby="mission-heading"
      >
        <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-12 lg:gap-20 items-start">
            <FadeIn>
              <div className="sticky top-32">
                <span className="text-[11px] font-semibold text-black/30 tracking-widest uppercase block mb-4">
                  Unsere Mission
                </span>
                <h2
                  id="mission-heading"
                  className="text-3xl md:text-5xl font-black tracking-tighter leading-tight"
                >
                  In einer Welt voller Lärm setzen wir auf Klarheit.
                </h2>
              </div>
            </FadeIn>

            <div className="flex flex-col gap-8">
              <FadeIn delay={0.1}>
                <p className="text-lg md:text-xl text-black/50 font-medium leading-[1.8]">
                  INVERTA DIGITAL wurde mit einer einfachen Überzeugung
                  gegründet: Digitale Lösungen müssen nicht nur gut aussehen –
                  sie müssen funktionieren. Wir glauben an die Kraft von
                  datengetriebenem Design und strategischem Marketing.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl text-black/50 font-medium leading-[1.8]">
                  Unser Fokus liegt auf dem, was wirklich zählt: Ihre Ziele. Ob
                  Umsatzsteigerung durch Performance Marketing, eine Website,
                  die Ihre Konkurrenz in den Schatten stellt, oder eine digitale
                  Strategie, die nachhaltiges Wachstum sichert – wir liefern
                  Ergebnisse, keine leeren Versprechen.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-lg md:text-xl text-black/50 font-medium leading-[1.8]">
                  Als Partner auf Augenhöhe begleiten wir Unternehmen von der
                  ersten Idee bis zum messbaren Erfolg. Jedes Projekt ist für
                  uns einzigartig – und genau so behandeln wir es.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* VALUES */}
      {/* ═══════════════════════════════════════════ */}
      <section
        className="py-24 md:py-32 bg-[#f5f5f5]"
        aria-labelledby="values-heading"
      >
        <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="text-[11px] font-semibold text-black/30 tracking-widest uppercase block mb-4">
                  Unsere Prinzipien
                </span>
                <h2
                  id="values-heading"
                  className="text-3xl md:text-5xl font-black tracking-tighter leading-tight max-w-lg"
                >
                  Woran wir glauben.
                </h2>
              </div>
              <p className="text-base md:text-lg text-black/40 font-medium max-w-md leading-relaxed">
                Vier Grundsätze, die jede Entscheidung und jedes Pixel
                bestimmen, das wir setzen.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div
                  className="group bg-white rounded-[20px] p-8 md:p-10 h-full flex flex-col justify-between gap-8 hover:shadow-lg transition-shadow duration-500"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.04) 0px 1px 2px, rgba(0, 0, 0, 0.02) 0px 4px 8px, rgb(255, 255, 255) 0px 2px 0px 0px inset",
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-black/4 flex items-center justify-center text-black/60 group-hover:bg-black group-hover:text-white transition-all duration-300">
                        {value.icon}
                      </div>
                      <span className="text-5xl md:text-6xl font-black text-black/4 tracking-tighter">
                        {value.number}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3">
                      {value.title}
                    </h3>
                    <p className="text-base text-black/45 font-medium leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* CAPABILITIES */}
      {/* ═══════════════════════════════════════════ */}
      <section
        className="py-24 md:py-32 bg-white"
        aria-labelledby="capabilities-heading"
      >
        <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-[11px] font-semibold text-black/30 tracking-widest uppercase block mb-4">
                Was wir können
              </span>
              <h2
                id="capabilities-heading"
                className="text-3xl md:text-5xl font-black tracking-tighter leading-tight mx-auto max-w-2xl"
              >
                Unsere Kompetenzen.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => (
              <FadeIn key={cap.title} delay={i * 0.08}>
                <div className="group rounded-[20px] bg-[#f5f5f5] p-7 h-full hover:bg-black hover:text-white transition-all duration-500">
                  <div className="w-10 h-10 rounded-xl bg-black/6 group-hover:bg-white/10 flex items-center justify-center mb-6 text-black/50 group-hover:text-white transition-all duration-300">
                    {cap.icon}
                  </div>
                  <h3 className="text-lg font-bold tracking-tight mb-5">
                    {cap.title}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {cap.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-black/40 group-hover:text-white/50 font-medium flex items-center gap-2 transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-black/20 group-hover:bg-white/30 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* APPROACH / PROCESS */}
      {/* ═══════════════════════════════════════════ */}
      <section
        className="py-24 md:py-32 bg-[#f5f5f5]"
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

      {/* ═══════════════════════════════════════════ */}
      {/* CTA */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-28 md:py-40 bg-black text-white relative overflow-hidden">
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

        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/2 rounded-full blur-[120px] pointer-events-none" />
      </section>
    </main>
  );
}
