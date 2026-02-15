import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Impressum() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Impressum</h1>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="mb-4">
              INVERTA
              <br />
              [Ihre Straße & Hausnummer]
              <br />
              [PLZ & Ort]
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Kontakt</h2>
            <p className="mb-4">
              Telefon: [Ihre Telefonnummer]
              <br />
              E-Mail: info@inverta.de
            </p>

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
              [Name des Verantwortlichen]
              <br />
              [Anschrift des Verantwortlichen]
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
