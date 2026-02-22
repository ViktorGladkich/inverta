import { Zap, Cpu, Settings2, BarChart3 } from "lucide-react";
import { Feature, ProcessStep } from "./types";

export const NEUMORPHIC_SHADOW =
  "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset";

export const MARQUEE_ITEMS: string[] = [
  "PROCESS OPTIMIZATION",
  "AI INTEGRATION",
  "CRM AUTOMATION",
  "MARKETING FLOWS",
  "DATA SYNC",
  "NO-CODE SOLUTIONS",
  "EFFICIENCY",
  "SCALABILITY",
];

export const FEATURES: Feature[] = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Marketing Automatisierung",
    desc: "Wir entwickeln smarte Lead-Generation-Systeme, die Ihre potenziellen Kunden vollautomatisch qualifizieren und durch den Funnel führen. So gewinnt Ihr Sales-Team signifikant mehr hochwertige Anfragen bei weniger manuellem Aufwand.",
    tag: "GROWTH",
    src: "/images/automatisierung/marketing-flow.png",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "KI-Automatisierung",
    desc: "Integrieren Sie maßgeschneiderte KI-Agenten und fortschrittliche Machine-Learning-Algorithmen in Ihren Unternehmensalltag. Unsere Systeme übernehmen den 24/7-Support und komplexe, datengetriebene Auswertungen komplett autonom.",
    tag: "AI",
    src: "/images/automatisierung/ai-agents.png",
  },
  {
    icon: <Settings2 className="w-6 h-6" />,
    title: "API & Workflows",
    desc: "Schluss mit isolierten Datensilos. Durch komplexe Webentwicklung und API-Schnittstellen vernetzen wir all Ihre Tools (ERP, CRM, Slack, Google) zu einer nahtlosen, fehlerfreien Pipeline – für Echtzeitdaten auf Enterprise-Niveau.",
    tag: "TECH",
    src: "/images/automatisierung/workflows.png",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Business Dashboards",
    desc: "Ersetzen Sie das Bauchgefühl durch harte Fakten. Wir aggregieren Ihre gesamten Prozessdaten in interaktiven Management-Dashboards. Volle Transparenz über Performance-Metrics, Kosten und brachliegende ROI-Potenziale ab Day 1.",
    tag: "DATA",
    src: "/images/automatisierung/dashboarding.png",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "System-Audit & Analyse",
    desc: "Das Fundament erfolgreicher Prozessoptimierung. Wir analysieren tiefgreifend Ihre bisherigen Arbeitsabläufe, identifizieren ineffiziente Engpässe und bewerten das digitale Skalierungspotenzial Ihres Unternehmens.",
  },
  {
    step: "02",
    title: "Architektur & Strategy",
    desc: "Basierend auf realen Daten entwerfen wir Ihr zukünftiges Setup. Dabei definieren wir logische Datenflüsse und CRM-Integrationen, die exakt auf Ihre Geschäftsziele abgestimmt sind und extrem leistungsstark skalieren.",
  },
  {
    step: "03",
    title: "Design & Implementation",
    desc: "Vom professionellen Webdesign der Interfaces bis zur hochsicheren Backend-Infrastruktur. Unsere Senior-Entwickler bauen robuste Automatisierungslösungen, die sofort anwendbar sind und Ihre operativen Kosten minimal halten.",
  },
  {
    step: "04",
    title: "Scaling & Maintenance",
    desc: "Echte KI-Automatisierung ist ein fortlaufender Zyklus. Wir monitoren die Performance in Echtzeit und trainieren Systeme kontinuierlich weiter, damit Ihre digitale Transformation zukunftssicher bleibt.",
  },
];
