import { Footer } from "@/components/layout/Footer";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Hero } from "@/components/sections/Hero";
import { WhyUs } from "@/components/sections/WhyUs";
import { Technology } from "@/components/sections/Technology";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Agentur für Webdesign, Webentwicklung & KI | INVERTA",
  description:
    "INVERTA ist Ihre digitale Growth-Agentur. Wir verbinden High-End Webdesign, skalierbare Webentwicklung, Performance Marketing und intelligente KI-Automatisierung für messbares Wachstum.",
  keywords: [
    "Webdesign Agentur",
    "Webentwicklung",
    "Digitalagentur",
    "SEO Agentur",
    "KI Automatisierung",
    "Performance Marketing",
    "Lead Generierung",
    "Webdesign Dresden",
  ],
  alternates: {
    canonical: "https://invertadigital.de",
  },
  openGraph: {
    title: "Webentwicklung & KI-Automatisierung | INVERTA",
    description:
      "Skalieren Sie Ihr Unternehmen durch Premium Webdesign, maßgeschneiderte Entwicklungsprozesse und automatisierte KI-Lösungen.",
    url: "https://invertadigital.de",
    type: "website",
    images: [
      {
        url: "https://invertadigital.de/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "INVERTA DIGITAL — Digitalagentur",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <main className="min-h-svh">
        <Hero />
        <WhyUs />
        <Technology />
        <ServicesOverview />
        <Process />
        <Projects />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
