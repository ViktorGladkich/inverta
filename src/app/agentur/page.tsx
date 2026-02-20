import { Footer } from "@/components/layout/Footer";
import { AgenturClient } from "./AgenturClient";
import { Metadata } from "next";

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
      <Footer />
    </>
  );
}
