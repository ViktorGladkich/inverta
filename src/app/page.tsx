import dynamic from "next/dynamic";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Metadata } from "next";

// Below-the-fold sections — defer their JS off the initial bundle.
const WhyUs = dynamic(() =>
  import("@/components/sections/WhyUs").then((m) => m.WhyUs),
);
const Technology = dynamic(() =>
  import("@/components/sections/Technology").then((m) => m.Technology),
);
const ServicesOverview = dynamic(() =>
  import("@/components/sections/ServicesOverview").then(
    (m) => m.ServicesOverview,
  ),
);
const Process = dynamic(() =>
  import("@/components/sections/Process").then((m) => m.Process),
);
const Projects = dynamic(() =>
  import("@/components/sections/Projects").then((m) => m.Projects),
);
const Testimonials = dynamic(() =>
  import("@/components/sections/Testimonials").then((m) => m.Testimonials),
);
const FAQ = dynamic(() =>
  import("@/components/sections/FAQ").then((m) => m.FAQ),
);
const CTASection = dynamic(() =>
  import("@/components/sections/CTASection").then((m) => m.CTASection),
);

export const metadata: Metadata = {
  title: "Premium Agentur für Webdesign, Webentwicklung & KI | INVERTA",
  description:
    "INVERTA DIGITAL: Growth-Agentur aus Dresden für Webdesign, Webentwicklung, Performance Marketing & KI-Automatisierung. Messbares Wachstum.",
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
