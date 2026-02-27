import { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { MarketingClient } from "./MarketingClient";
import { PageSchema } from "@/components/seo/PageSchema";

export const metadata: Metadata = {
  title: "Performance Marketing & SEO Agentur | INVERTA",
  description:
    "Skalieren Sie Ihren Umsatz mit datengetriebenem Performance Marketing, perfekter Suchmaschinenoptimierung (SEO) und verkaufsstarken Funnels von INVERTA.",
  keywords: [
    "Performance Marketing Agentur",
    "Online Marketing",
    "SEO Optimierung",
    "Google Ads Agentur",
    "Neukundengewinnung",
    "Lead Generierung",
    "Social Media Marketing",
    "Conversion Optimierung",
  ],
  alternates: {
    canonical: "https://invertadigital.de/marketing",
  },
  openGraph: {
    title: "Datengetriebenes Marketing & SEO | INVERTA",
    description:
      "Kein Hokuspokus. Wir bringen Ihr Unternehmen durch exzellentes Marketing und kluge SEO-Strategien an die Spitze Ihrer Branche.",
    url: "https://invertadigital.de/marketing",
    type: "website",
    images: [
      {
        url: "https://invertadigital.de/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "INVERTA DIGITAL — Marketing & SEO",
      },
    ],
  },
};

export default function MarketingPage() {
  return (
    <>
      <PageSchema
        type="WebPage"
        name="Performance Marketing & SEO | INVERTA"
        description="Skalieren Sie Ihren Umsatz mit datengetriebenem Performance Marketing und SEO."
        url="https://invertadigital.de/marketing"
        crumbs={[
          { name: "Marketing", item: "https://invertadigital.de/marketing" },
        ]}
      />
      <MarketingClient />
      <Footer />
    </>
  );
}
