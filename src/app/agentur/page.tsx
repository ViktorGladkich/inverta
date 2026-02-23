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
import { PageSchema } from "@/components/seo/PageSchema";

export const metadata: Metadata = {
  title: "Ihre Digitalagentur für Webentwicklung, Webdesign & SEO | INVERTA",
  description:
    "Lernen Sie INVERTA kennen – Ihre Premium Performance-Agentur for professionelle Webentwicklung, kreatives Webdesign, SEO & KI-Automatisierung. Wir skalieren Ihren Umsatz.",
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
      <PageSchema
        type="AboutPage"
        name="Über uns | INVERTA Digitalagentur"
        description="Erfahren Sie mehr über INVERTA, unsere Vision und unser Team in Dresden. Wir sind Ihre Experten für digitale Exzellenz."
        url="https://invertadigital.de/agentur"
        crumbs={[
          { name: "Agentur", item: "https://invertadigital.de/agentur" },
        ]}
      />
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
