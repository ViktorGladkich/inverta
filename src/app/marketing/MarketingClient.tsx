"use client";

import { motion } from "framer-motion";
import { LineChart } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceBentoGrid } from "@/components/sections/ServiceBentoGrid";
import { ServiceMethodology } from "@/components/sections/ServiceMethodology";

const MARQUEE_MARKETING = [
  "MARKETING",
  "SEO STRATEGIE",
  "LEAD GENERIERUNG",
  "CONVERSION RATE",
  "SOCIAL MEDIA",
  "PERFORMANCE",
];

const SERVICES = [
  {
    title: "Leads & Neukunden",
    description:
      "Wir entwickeln psychologisch fundierte Google und Meta Ads-Kampagnen. Von der Click-Logik über extrem präzises Targeting bis hin zum profitablen Close für Ihr Team.",
    tag: "01 / Ads",
    href: "/marketing/neukundengewinnung",
  },
  {
    title: "SEO Strategie",
    description:
      "Sie wollen gefunden werden, ohne pro Klick zu bezahlen? Wir bringen Sie mit ehrlicher, datengetriebener und extremer Optimierung an die Spitze von Google.",
    tag: "02 / SEO",
    href: "/marketing/seo",
  },
  {
    title: "Social Branding",
    description:
      "Keine langweiligen Postings. Wir bauen loyale Communities auf und positionieren Ihre Marke unangefochten auf Social Media.",
    tag: "03 / Social",
    href: "/marketing/social-media",
  },
  {
    title: "CRO & Page Speed",
    description:
      "Selbst wenn der Traffic stimmt, wenn die Conversion hakt, verbrennen Sie Geld. Wir senken Absprungraten und skalieren Käufe.",
    tag: "04 / CRO",
    href: "/marketing/ladezeitoptimierung",
  },
];

const METHODOLOGY_STEPS = [
  {
    num: "01",
    title: "Audit & Strategie",
    desc: "Als erfahrene Performance Marketing und SEO Agentur analysieren wir Ihren Status Quo bis ins Detail. Wir zerlegen Wettbewerb und Marktanteile, um eine Roadmap für nachhaltige Suchmaschinenoptimierung (SEO) und sofortige Lead Generierung B2B & B2C zu entwerfen.",
  },
  {
    num: "02",
    title: "Execution & Testing",
    desc: "Start der Umsetzung durch datengetriebene Google Ads Kampagnen und aggressives Social Media Marketing. Mit gnadenloser Conversion Rate Optimierung (CRO) testen wir Creatives und Trigger gegeneinander, bis die KPIs absolut überzeugen.",
  },
  {
    num: "03",
    title: "Profit & Scale",
    desc: "Sobald das System performt, skaliert unsere Online Marketing Agentur Ihre Budgets und Shop-Verkäufe gezielt hoch. Das Setup wird hochprofitabel, automatisiert und erobert stetig neue Marktanteile für Ihre absolute digitale Dominanz.",
  },
  {
    num: "04",
    title: "Insight & Vision",
    desc: "Durch kontinuierliche Datenanalyse und KI-gestützte Forecasts antizipieren wir Markttrends, bevor sie entstehen. Wir entwickeln Ihre Marke strategisch weiter, um langfristig die unangefochtene Marktführerschaft in Ihrer Nische zu sichern.",
  },
];

export function MarketingClient() {
  return (
    <div className="relative bg-[#f5f5f5]">
      <h1 className="sr-only">Performance Marketing & SEO Agentur | INVERTA</h1>

      <PageHero
        titleTop="DATENGETRIEBENE"
        titleMain="PERFORMANCE"
        marqueeItems={MARQUEE_MARKETING}
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
                <LineChart className="w-4 h-4 text-black/40" />
                <span className="text-xs font-bold tracking-widest text-black uppercase mt-px">
                  Performance Marketing
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
                Sichtbarkeit, die <br />
                <span className="relative inline-block">
                  <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-4 bg-[#daff02] z-0" />
                  <span className="relative z-10">Umsatz generiert.</span>
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
                Kein Raten. Keine Vermutungen. Wir konzentrieren uns auf{" "}
                <strong>messbare Ergebnisse</strong> durch Tiefe Expertise und
                datengetriebene Methodik für Ihre digitale Dominanz.
              </motion.h3>
            </div>
          </div>
        </section>

        {/* Asymmetric Bento Grid Section */}
        <ServiceBentoGrid services={SERVICES} />

        {/* Methodik / KPI Section - Brutalist Awwwards Style */}
        <ServiceMethodology
          subtitle="Methodik"
          titleTop="Unser"
          titleBottom="Standard."
          description="Wir überlassen nichts dem Zufall. Jede Kampagne folgt einem strikten Framework für maximale Effizienz und fortlaufende Skalierbarkeit."
          steps={METHODOLOGY_STEPS}
        />

        <CTASection />
      </main>
    </div>
  );
}
