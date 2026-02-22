import { Footer } from "@/components/layout/Footer";
import ContactClient from "./ContactClient";
import { Metadata } from "next";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Kontaktieren Sie Ihre Agentur für Webdesign, SEO & KI | INVERTA",
  description:
    "Lassen Sie uns über Ihr nächstes digitales Projekt sprechen. Senden Sie uns eine Anfrage für Premium Webentwicklung, SEO-Strategien, Performance Marketing oder KI-Automatisierung.",
  keywords: [
    "Kontakt Webdesign Agentur",
    "Anfrage Webentwicklung",
    "SEO Agentur kontaktieren",
    "Performance Marketing Beratung",
    "Webdesign Dresden Kontakt",
    "INVERTA Digital",
  ],
  alternates: {
    canonical: "https://invertadigital.de/kontakt",
  },
  openGraph: {
    title: "Starten Sie Ihr Projekt mit INVERTA | Webdesign & SEO Agentur",
    description:
      "Sie haben eine Vision, wir haben die digitale Expertise. Kontaktieren Sie uns für maßgeschneiderte Webentwicklung und messbares Performance Marketing.",
    url: "https://invertadigital.de/kontakt",
    type: "website",
  },
};

export default function KontaktPage() {
  return (
    <>
      <main>
        <ContactClient />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
