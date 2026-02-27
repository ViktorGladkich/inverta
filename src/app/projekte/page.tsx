import { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { ProjekteClient } from "./ProjekteClient";

export const metadata: Metadata = {
  title:
    "Unsere Referenzen: Webentwicklung, SEO & KI-Automatisierung | INVERTA",
  description:
    "Entdecken Sie unsere erfolgreich umgesetzten Projekte in den Bereichen professionelle Webentwicklung, Premium Webdesign, Suchmaschinenoptimierung (SEO), Performance Marketing und KI-Automatisierung.",
  keywords: [
    "Webdesign Agentur",
    "SEO Optimierung",
    "Webentwicklung",
    "KI-Automatisierung für Unternehmen",
    "Performance Marketing",
    "Website Relaunch",
    "Corporate Design",
  ],
  openGraph: {
    title: "Erfolgreiche Projekte | INVERTA Digital",
    description:
      "Digitale Meisterwerke und Case Studies: Von der Webentwicklung bis hin zu smarten KI-Workflows.",
    images: [
      {
        url: "https://invertadigital.de/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "INVERTA DIGITAL — Projekte",
      },
    ],
  },
};

export default function ProjektePage() {
  return (
    <>
      <ProjekteClient />
      <Footer />
    </>
  );
}
