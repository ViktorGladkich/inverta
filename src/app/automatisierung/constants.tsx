import { Zap, Cpu, Settings2, BarChart3 } from "lucide-react";
import { Feature, ProcessStep } from "./types";

export const MARQUEE_ITEMS = [
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
    desc: "Wir identifizieren Flaschenhälse und manuelle Aufgaben, die Ihr Team ausbremsen.",
  },
  {
    step: "02",
    title: "Logic Design",
    desc: "Wir entwerfen die Architektur Ihrer neuen Workflows — logisch, skalierbar und robust.",
  },
  {
    step: "03",
    title: "Implementation",
    desc: "Verbindung Ihrer Systeme (API, No-Code, KI) zu einem harmonischen Ganzen.",
  },
  {
    step: "04",
    title: "Scalability",
    desc: "Kontinuierliche Optimierung und Skalierung Ihrer Prozesse für dauerhaften Erfolg.",
  },
];
