import { Footer } from "@/components/layout/Footer";
import { AgenturClient } from "./AgenturClient";
import { Metadata } from "next";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { TeamSection } from "./TeamSection";
import { MissionSection } from "./MissionSection";

import { CTASection } from "@/components/sections/CTASection";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyUs } from "@/components/sections/WhyUs";
import { PrinzipienSection } from "./PrinzipienSection";

export const metadata: Metadata = {
  title: "Ihre Digitalagentur für Webentwicklung, Webdesign & SEO | INVERTA",
  description:
    "Lernen Sie INVERTA kennen – Ihre Premium Performance-Agentur für professionelle Webentwicklung, kreatives Webdesign, SEO & KI-Automatisierung. Wir skalieren Ihren Umsatz.",
  keywords: [
    "Digitalagentur",
    "Agentur für Webentwicklung",
    "Webdesign Agentur",
    "SEO-Strategie Agentur",
    "Performance Marketing",
    "KI-Automatisierung",
    "Marketing Agentur",
    "INVERTA Digital",
    "Webdesign",
  ],
  alternates: {
    canonical: "https://invertadigital.de/agentur",
  },
  openGraph: {
    title: "Ihre Agentur für Webentwicklung & Performance Marketing | INVERTA",
    description:
      "Lernen Sie unser Expertenteam für Premium Webdesign, komplexe Webentwicklung und datengetriebene SEO-Prozesse kennen. Gemeinsam zum digitalen Erfolg.",
    url: "https://invertadigital.de/agentur",
    type: "website",
  },
};

export default function AgenturPage() {
  return (
    <>
      <main>
        <AgenturClient />
        <MissionSection />
        <WhyUs />
        <PrinzipienSection />
        <ServicesOverview />
        <TeamSection />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
