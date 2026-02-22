import { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Impressum | INVERTA Agency",
  description:
    "Impressum und rechtliche Hinweise von INVERTA - Ihrer Premium Agentur für Webdesign und KI.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Impressum() {
  return (
    <>
      <main className="min-h-screen pt-32 pb-20 bg-white overflow-x-hidden w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Impressum</h1>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="mb-4">
              INVERTA DIGITAL
              <br />
              Rubensweg 1
              <br />
              01217 Dresden
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">Kontakt</h2>
            <p className="mb-4">E-Mail: info@invertadigital.de</p>
            <h2 className="text-2xl font-bold mt-8 mb-4">Umsatzsteuer-ID</h2>
            <p className="mb-4">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz:
              <br />
              [Ihre USt-IdNr.]
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Redaktionell verantwortlich
            </h2>
            <p className="mb-4">
              INVERTA DIGITAL
              <br />
              Rubensweg 1, 01217 Dresden
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">
              EU-Streitschlichtung
            </h2>
            <p className="mb-4">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:
              https://ec.europa.eu/consumers/odr/.
              <br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Verbraucherstreitbeilegung/Universalschlichtungsstelle
            </h2>
            <p className="mb-4">
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
