import { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { WebentwicklungClient } from "./WebentwicklungClient";
import { PageSchema } from "@/components/seo/PageSchema";

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
    images: [
      {
        url: "https://invertadigital.de/og-image.png",
        width: 1200,
        height: 630,
        alt: "INVERTA DIGITAL — Webentwicklung",
      },
    ],
  },
};

export default function WebentwicklungPage() {
  return (
    <>
      <PageSchema
        type="WebPage"
        name="Webentwicklung & Webdesign | INVERTA"
        description="Maßgeschneiderte Webentwicklung, High-End Webdesign und Onlineshops."
        url="https://invertadigital.de/webentwicklung"
        crumbs={[
          {
            name: "Webentwicklung",
            item: "https://invertadigital.de/webentwicklung",
          },
        ]}
      />
      <WebentwicklungClient />
      <Footer />
    </>
  );
}
