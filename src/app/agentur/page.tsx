import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

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
      <main className="min-h-screen pt-32 pb-20 bg-white">
        {/* Intro */}
        <section className="container mx-auto px-4 md:px-6 mb-24">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[1.1]">
              Wir sind INVERTA. <br />
              <span className="text-neutral-400">
                Architekten des digitalen Raums.
              </span>
            </h1>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg md:text-xl leading-relaxed text-neutral-600 font-light">
            <FadeIn delay={0.1}>
              <p>
                In einer Welt voller Lärm setzen wir auf Klarheit. INVERTA ist
                Ihre Agentur für messbaren Erfolg. Wir verbinden präzise
                Strategie mit exzellentem Handwerk.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p>
                Unser Fokus liegt auf dem, was wirklich zählt: Ihre Ziele. Ob
                Umsatzsteigerung durch effektives Marketing oder eine Website,
                die Ihre Konkurrenz in den Schatten stellt – wir liefern
                Ergebnisse.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Values */}
        <section className="bg-neutral-50 py-24 mb-24">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-12">Unsere Prinzipien</h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn
                delay={0.1}
                className="bg-white p-8 rounded-2xl shadow-sm"
              >
                <h3 className="text-xl font-bold mb-4">Exzellenz</h3>
                <p className="text-neutral-500">
                  Mittelmaß ist keine Option. Wir streben in jedem Pixel und
                  jedem Satz nach Perfektion.
                </p>
              </FadeIn>
              <FadeIn
                delay={0.2}
                className="bg-white p-8 rounded-2xl shadow-sm"
              >
                <h3 className="text-xl font-bold mb-4">Performance</h3>
                <p className="text-neutral-500">
                  Schönes Design ist wichtig, aber Geschwindigkeit und
                  Conversion sind entscheidend. Wir optimieren für beides.
                </p>
              </FadeIn>
              <FadeIn
                delay={0.3}
                className="bg-white p-8 rounded-2xl shadow-sm"
              >
                <h3 className="text-xl font-bold mb-4">Transparenz</h3>
                <p className="text-neutral-500">
                  Keine versteckten Kosten, kein Fachchinesisch. Wir
                  kommunizieren auf Augenhöhe und mit klaren Zielen.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-lg text-neutral-500 mb-8 max-w-xl mx-auto">
              Lassen Sie uns gemeinsam herausfinden, wie wir Ihr Unternehmen
              voranbringen können.
            </p>
            <Button size="lg" variant="primary" asChild href="/kontakt">
              Kostenloses Erstgespräch vereinbaren
            </Button>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
