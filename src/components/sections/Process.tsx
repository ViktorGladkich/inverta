"use client";

import { motion } from "framer-motion";
import { Workflow, Rocket, Search, Map as MapIcon, Code } from "lucide-react";
import { CardsParallax } from "@/components/ui/CardsParallax";

// Shadow styles matching Framer
const shadowPill =
  "0px 0.706592px 0.706592px -0.541667px rgba(0, 0, 0, 0.1), 0px 1.80656px 1.80656px -1.08333px rgba(0, 0, 0, 0.09), 0px 3.62176px 3.62176px -1.625px rgba(0, 0, 0, 0.09), 0px 6.8656px 6.8656px -2.16667px rgba(0, 0, 0, 0.09), 0px 13.6468px 13.6468px -2.70833px rgba(0, 0, 0, 0.08), 0px 30px 30px -3.25px rgba(0, 0, 0, 0.05), inset 0px 3px 1px 0px rgba(255, 255, 255, 1)";

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
        {/* Header - Sticky? Or just normal flow */}
        <div className="flex flex-col items-center gap-4 max-w-[700px] mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-[#f5f5f5] rounded-[60px] border border-white/50"
            style={{ boxShadow: shadowPill }}
          >
            <div className="w-4 h-4 text-black/40">
              <Workflow className="w-full h-full" />
            </div>
            <span className="text-xs font-bold tracking-widest text-black/60 uppercase font-sans">
              PROZESS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <span className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
              Einfach & Skalierbar
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-neutral-500 max-w-lg"
          >
            Wir begleiten Sie von der ersten Vision bis zur Skalierung – mit
            klaren Prozessen und modernster Technologie.
          </motion.p>
        </div>

        {/* Parallax Cards */}
        <CardsParallax items={processSteps} />
      </div>
    </section>
  );
}
