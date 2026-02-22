import { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { WebentwicklungClient } from "./WebentwicklungClient";

export const metadata: Metadata = {
  title: "Premium Webentwicklung & Webdesign Agentur | INVERTA",
  description:
    "Maßgeschneiderte Webentwicklung, High-End Webdesign, Onlineshops und Web-Apps. Performant, modern und skalierbar – für Ihr digitales Wachstum.",
  keywords: [
    "Webentwicklung",
    "Webdesign Agentur",
    "Next.js Entwicklung",
    "React Agentur",
    "Onlineshop erstellen lassen",
    "E-Commerce Agentur",
    "Corporate Website",
    "Web-App Entwicklung",
    "Funnelsysteme",
  ],
  alternates: {
    canonical: "https://invertadigital.de/webentwicklung",
  },
  openGraph: {
    title: "Premium Webentwicklung & Webdesign | INVERTA",
    description:
      "Modernste Webtechnologien treffen auf Awwwards-Design. Skalieren Sie Ihr Business mit performanten Websites und Shops von INVERTA.",
    url: "https://invertadigital.de/webentwicklung",
    type: "website",
  },
};

export default function WebentwicklungPage() {
  return (
    <>
      <WebentwicklungClient />
      <Footer />
    </>
  );
}
