"use client";

import { motion } from "framer-motion";
import { Workflow, Rocket, Search, Map as MapIcon, Code } from "lucide-react";
import { CardsParallax } from "@/components/ui/CardsParallax";

// Data-Struktur für die Prozessschritte (CardsParallax)

const processSteps = [
  {
    title: "Analyse & Vision",
    description:
      "Wir starten mit einem tiefen Verständnis Ihres Geschäftsmodells und identifizieren Potenziale für digitale Transformation.",
    tag: "Discovery",
    icon: <Search className="w-5 h-5" />,
    src: "/images/process/workflow-audit.png",
  },
  {
    title: "Strategie & Konzept",
    description:
      "Entwicklung einer klaren Roadmap und technologischen Architektur, die exakt auf Ihre Unternehmensziele einzahlt.",
    tag: "Planung",
    icon: <MapIcon className="w-5 h-5" />,
    src: "/images/process/strategy-concept.png",
  },
  {
    title: "Design & Entwicklung",
    description:
      "Agile Umsetzung modernster Web-Anwendungen und Software-Lösungen mit Fokus auf exzellente User Experience.",
    tag: "Umsetzung",
    icon: <Code className="w-5 h-5" />,
    src: "/images/process/design-development.png",
  },
  {
    title: "Integration & KI",
    description:
      "Nahtlose Einbindung intelligenter Automatisierungen und KI-Agenten zur Optimierung Ihrer betrieblichen Abläufe.",
    tag: "Automation",
    icon: <Workflow className="w-5 h-5" />,
    src: "/images/process/integration-ai.png",
  },
  {
    title: "Wachstum & Skalierung",
    description:
      "Datengetriebenes Marketing und kontinuierliche Optimierung sorgen für nachhaltigen Erfolg nach dem Launch.",
    tag: "Growth",
    icon: <Rocket className="w-5 h-5" />,
    src: "/images/process/growth-scaling.png",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-[#f5f5f5]">
      <div className="w-full px-[40px]">
        {/* Sektions-Header - Zentriert */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-6 mb-16 md:mb-24"
        >
          {/* Label-Badge (Prozess) */}
          <div className="flex items-center justify-center px-[12px] py-[6px] gap-2 rounded-[60px] bg-[#f5f5f5] shadow-[0px_0.706592px_0.706592px_-0.541667px_rgba(0,0,0,0.1),0px_1.80656px_1.80656px_-1.08333px_rgba(0,0,0,0.09),0px_3.62176px_3.62176px_-1.625px_rgba(0,0,0,0.09),0px_6.8656px_6.8656px_-2.16667px_rgba(0,0,0,0.09),0px_13.6468px_13.6468px_-2.70833px_rgba(0,0,0,0.08),0px_30px_30px_-3.25px_rgba(0,0,0,0.05),inset_0px_3px_1px_0px_white]">
            <div className="w-[14px] h-[14px] text-black/40">
              <Workflow className="w-full h-full" />
            </div>
            <span className="text-[12px] font-medium text-black tracking-wider uppercase">
              PROZESS
            </span>
          </div>

          {/* Haupttitel & SEO Text */}
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black mb-6">
              Einfach & Skalierbar
            </h2>
            <p className="text-lg md:text-xl text-[#16101e]/80 font-normal leading-relaxed max-w-3xl mx-auto">
              Wir begleiten Sie von der ersten Vision bis zur Skalierung – mit
              agilen <strong>Webentwicklungs</strong>-Prozessen, präzisem Design
              und intelligenter <strong>KI-Automatisierung</strong>.
            </p>
          </div>
        </motion.div>

        {/* Interaktiver Karten-Parallax-Effekt */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <CardsParallax items={processSteps} />
        </motion.div>
      </div>
    </section>
  );
}
