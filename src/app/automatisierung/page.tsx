import { AutomationClient } from "./AutomationClient";
import { Footer } from "@/components/layout/Footer";
import { PageSchema } from "@/components/seo/PageSchema";
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
    images: [
      {
        url: "https://invertadigital.de/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "INVERTA DIGITAL — Automatisierung",
      },
    ],
  },
};

export default function AutomationPage() {
  return (
    <>
      <PageSchema
        type="WebPage"
        name="KI-Automatisierung & Prozessoptimierung | INVERTA"
        description="Effizienzsteigerung durch intelligente KI-Automatisierung und Workflows."
        url="https://invertadigital.de/automatisierung"
        crumbs={[
          {
            name: "Automatisierung",
            item: "https://invertadigital.de/automatisierung",
          },
        ]}
      />
      <main>
        <AutomationClient />
      </main>
      <Footer />
    </>
  );
}
