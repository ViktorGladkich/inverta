import { Footer } from "@/components/layout/Footer";
import { AgenturClient } from "./AgenturClient";
import { Metadata } from "next";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { TeamSection } from "./TeamSection";
import { MissionSection } from "./MissionSection";
import { PrinzipienSection } from "./PrinzipienSection";
import { CTASection } from "./CTASection";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyUs } from "@/components/sections/WhyUs";

export const metadata: Metadata = {
  title: "Über uns | INVERTA DIGITAL – Ihre Digitalagentur aus Dresden",
  description:
    "Lernen Sie INVERTA DIGITAL kennen – Ihre Performance-Agentur für Marketing & Webentwicklung aus Dresden. Strategie, Design und Entwicklung aus einer Hand.",
  keywords: [
    "Digitalagentur Dresden",
    "Marketing Agentur",
    "Webentwicklung",
    "INVERTA DIGITAL",
    "Über uns",
    "Performance Marketing",
  ],
  alternates: {
    canonical: "https://invertadigital.de/agentur",
  },
  openGraph: {
    title: "Über uns | INVERTA DIGITAL",
    description:
      "Strategie, Design und Entwicklung aus einer Hand. Lernen Sie unser Team und unsere Arbeitsweise kennen.",
    url: "https://invertadigital.de/agentur",
    type: "website",
  },
};

export default function AgenturPage() {
  return (
    <>
      <AgenturClient />
      <MissionSection />
      <WhyUs />
      <PrinzipienSection />
      <ServicesOverview />
      <TeamSection />
      <Testimonials/>
      <CTASection />
      <Footer />
    </>
  );
}
