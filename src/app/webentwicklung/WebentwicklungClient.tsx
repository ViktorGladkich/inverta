"use client";

import { motion } from "framer-motion";
import { Monitor } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceBentoGrid } from "@/components/sections/ServiceBentoGrid";
import { ServiceMethodology } from "@/components/sections/ServiceMethodology";

const MARQUEE_WEBDEV = [
  "WEBENTWICKLUNG",
  "UI/UX DESIGN",
  "E-COMMERCE",
  "NEXT.JS",
  "REACT",
  "PERFORMANCE",
];

const SERVICES = [
  {
    title: "Corporate Websites",
    description:
      "Ihre digitale Visitenkarte auf höchstem Niveau. Wir kreieren atemberaubende Websites, die Ihre Marke perfekt in Szene setzen und Vertrauen bei Ihren Kunden aufbauen. Technologisch makellos mit Next.js.",
    tag: "01 / Web",
    href: "/webentwicklung/website",
  },
  {
    title: "Onlineshops",
    description:
      "Verkaufsstarke Shops mit perfektionierter User Experience und messbarer, extremer Conversion. Skalierbar für jedes Absatzvolumen.",
    tag: "02 / Shop",
    href: "/webentwicklung/relaunch", // Changed to match your routes if needed
  },
  {
    title: "Premium Funnels",
    description:
      "Psychologisch optimierte Prozesse und Automatisierungen, die Traffic in zahlende Kunden verwandeln, wie am Fließband.",
    tag: "03 / Funnel",
    href: "/webentwicklung/funnels",
  },
  {
    title: "Custom Web-Apps",
    description:
      "Sie haben komplexe Anforderungen? Wir entwickeln maßgeschneiderte High-End Softwarelösungen, Portale und Dashboards, die sich exakt Ihren internen Firmenprozessen anpassen.",
    tag: "04 / Custom",
    href: "/webentwicklung/programmierung",
  },
];

const METHODOLOGY_STEPS = [
  {
    num: "01",
    title: "Discovery & UX",
    desc: "Egal ob Sie komplexe Corporate Websites oder performante E-Commerce Onlineshops planen: Als spezialisierte Webdesign Agentur definieren wir zuerst eine klare Architektur und liefern High-Fidelity Prototypen mit exzellentem UI/UX Design.",
  },
  {
    num: "02",
    title: "UI Design & Code",
    desc: "Wenn Sie bei uns eine Website erstellen lassen, entwickeln wir kompromisslos mit modernen Frameworks wie React und Next.js. Wir optimieren jede Animation und binden automatisierte Premium Funnel ein, immer auf maximale Ladezeit getrimmt.",
  },
  {
    num: "03",
    title: "Launch & Scale",
    desc: "Intensive Pre-Launch Tests und ein makelloses Deployment zeichnen unsere Arbeit als Premium Webentwicklung Agentur aus. Auch nach dem Launch betreuen wir Ihre Codebase kontinuierlich weiter und skalieren Ihre Plattform in neuen Iterationen.",
  },
  {
    num: "04",
    title: "Product Evolution",
    desc: "Wir sehen Software als lebendigen Organismus. Durch datenbasiertes User-Feedback und technologische Roadmaps entwickeln wir Ihr Produkt kontinuierlich weiter, um es technologisch immer an der Weltspitze zu halten.",
  },
];

export function WebentwicklungClient() {
  return (
    <div className="relative bg-[#f5f5f5]">
      <h1 className="sr-only">Webentwicklung & Webdesign Agentur | INVERTA</h1>

      <PageHero
        titleTop="DIGITALE"
        titleMain="ARCHITEKTUR"
        marqueeItems={MARQUEE_WEBDEV}
        as="h2"
      />

      <main className="relative z-10 bg-[#f5f5f5] rounded-t-[40px] md:rounded-t-[64px] selection:bg-[#daff02] selection:text-black">
        {/* Intro Section */}
        <section className="pt-20 md:pt-32 pb-12 md:pb-20 px-6">
          <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white shadow-sm mb-8">
                <Monitor className="w-4 h-4 text-black/40" />
                <span className="text-xs font-bold tracking-widest text-black uppercase mt-px">
                  Webentwicklung
                </span>
              </div>
            </motion.div>

            <div className="max-w-4xl flex flex-col items-center uppercase">
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
                Code, der <br />
                <span className="relative inline-block">
                  <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-4 bg-[#daff02] z-0" />
                  <span className="relative z-10">Maßstäbe setzt.</span>
                </span>
              </motion.h2>

              <motion.h3
                className="text-lg md:text-xl text-black/80 font-normal leading-relaxed max-w-2xl lowercase first-letter:uppercase"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                Wir programmieren nicht einfach nur Websites. Wir erschaffen{" "}
                <strong>interaktive Premium-Erlebnisse</strong>, die sowohl
                durch Design als auch durch Performance überzeugen.
              </motion.h3>
            </div>
          </div>
        </section>

        {/* Asymmetric Bento Grid Section */}
        <ServiceBentoGrid services={SERVICES} />

        {/* Process / Methodik Section - Brutalist Awwwards Style */}
        <ServiceMethodology
          subtitle="Engineering"
          titleTop="Die"
          titleBottom="Architektur."
          description="Wir folgen einem extrem fokussierten Prozess, um digitale Produkte zu entwickeln, die auf Jahre hinaus Bestand haben."
          steps={METHODOLOGY_STEPS}
        />

        <CTASection />
      </main>
    </div>
  );
}
