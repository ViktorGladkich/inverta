import { AutomationClient } from "./AutomationClient";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KI-Automatisierung & Prozessoptimierung Agentur | INVERTA",
  description:
    "Steigern Sie Ihre Effizienz durch intelligente KI-Automatisierung, nahtlose API-Schnittstellen und automatisierte Marketing-Workflows. Mehr Umsatz, weniger Fehler.",
  keywords: [
    "KI-Automatisierung Agentur",
    "Prozessautomatisierung",
    "Marketing Automatisierung",
    "Workflow Optimierung",
    "API Schnittstellen",
    "Digitalisierung für Unternehmen",
    "CRM Automatisierung",
    "Performance Steigerung",
  ],
  alternates: {
    canonical: "https://invertadigital.de/automatisierung",
  },
  openGraph: {
    title: "Agentur für KI- & Prozessautomatisierung | INVERTA",
    description:
      "Lassen Sie repetitive Aufgaben von unseren KI-Systemen und automatisierten Workflows erledigen. Skalieren Sie Ihr Unternehmen mit INVERTA.",
    url: "https://invertadigital.de/automatisierung",
    type: "website",
  },
};

export default function AutomationPage() {
  return (
    <>
      <main>
        <AutomationClient />
      </main>
      <Footer />
    </>
  );
}
