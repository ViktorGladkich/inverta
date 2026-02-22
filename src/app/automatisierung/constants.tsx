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
    title: "Marketing Flow",
    desc: "Wir entwickeln intelligente Lead-Gen-Systeme, die potenzielle Kunden automatisiert qualifizieren und durch den Sales-Funnel leiten. So gewinnen Sie wertvolle Anfragen, während sich Ihr Team auf den Abschluss konzentriert.",
    tag: "GROWTH",
    src: "/images/automatisierung/marketing-flow.png",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "KI-Agenten",
    desc: "Nutzen Sie die Power moderner Sprachmodelle für Ihren Kundensupport oder interne Prozesse. Unsere KI-Agenten verstehen Kontext, beantworten komplexe Anfragen und erledigen Aufgaben autonom — 24/7 und in jeder Sprache.",
    tag: "AI",
    src: "/images/automatisierung/ai-agents.png",
  },
  {
    icon: <Settings2 className="w-6 h-6" />,
    title: "Workflows",
    desc: "Schluss mit manuellem Copy-Paste zwischen verschiedenen Tools. Wir vernetzen Ihre Software-Landschaft (ERP, CRM, Slack, Google) zu einer nahtlosen Pipeline, die Daten in Echtzeit synchronisiert und Fehlerquellen eliminiert.",
    tag: "TECH",
    src: "/images/automatisierung/workflows.png",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Dashboarding",
    desc: "Treffen Sie Entscheidungen auf Basis von Fakten, nicht auf Bauchgefühl. Wir bündeln Ihre Prozessdaten in interaktiven Dashboards, die Ihnen jederzeit volle Transparenz über Performance, Kosten und Optimierungspotenziale geben.",
    tag: "DATA",
    src: "/images/automatisierung/dashboarding.png",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Audit & Analyse",
    desc: "Wir tauchen tief in Ihre bestehenden Arbeitsabläufe ein. Durch datengestützte Analysen identifizieren wir präzise Engpässe und Ineffizienzen in Ihrer aktuellen Infrastruktur, um das volle Potenzial für automatisierte Optimierungen aufzudecken.",
  },
  {
    step: "02",
    title: "Logic Design",
    desc: "Auf Basis der Analyse entwerfen wir eine maßgeschneiderte Automatisierungs-Architektur. Wir definieren klare Logiken, Datenflüsse und Schnittstellen, die exakt auf Ihre Geschäftsziele zugeschnitten sind und eine nahtlose Integration garantieren.",
  },
  {
    step: "03",
    title: "Implementation",
    desc: "Unsere Experten setzen die geplante Lösung mit modernsten Technologien um. Von der Cloud-Infrastruktur bis hin zu KI-gestützten Agenten — wir bauen robuste Systeme, die sofortigen Mehrwert liefern und Ihre operativen Kosten signifikant senken.",
  },
  {
    step: "04",
    title: "Scalability",
    desc: "Automatisierung ist ein fortlaufender Prozess. Wir überwachen die Performance Ihrer neuen Systeme in Echtzeit und optimieren sie kontinuierlich. So stellen wir sicher, dass Ihre digitale Infrastruktur mit Ihrem Unternehmen gesund mitwächst.",
  },
];
