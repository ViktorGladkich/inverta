import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Datenschutz() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">
            Datenschutz&shy;erkl&auml;rung
          </h1>

          <div className="prose prose-neutral max-w-none space-y-8">
            <h2 className="text-2xl font-bold">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="text-xl font-semibold">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen &Uuml;berblick
              dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn
              Sie diese Website besuchen. Personenbezogene Daten sind alle
              Daten, mit denen Sie pers&ouml;nlich identifiziert werden
              k&ouml;nnen.
            </p>

            <h3 className="text-xl font-semibold">
              Datenerfassung auf dieser Website
            </h3>
            <p>
              <strong>
                Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser
                Website?
              </strong>
            </p>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem
              Impressum dieser Website entnehmen.
            </p>

            <p>
              <strong>Wie erfassen wir Ihre Daten?</strong>
            </p>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die
              Sie in ein Kontaktformular eingeben.
            </p>
            <p>
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
              Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
              allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem
              oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten
              erfolgt automatisch, sobald Sie diese Website betreten.
            </p>

            <h2 className="text-2xl font-bold">
              2. Hosting und Content Delivery Networks (CDN)
            </h2>
            <p>
              Wir hosten die Inhalte unserer Website bei folgenden Anbietern:
            </p>
            <h3 className="text-xl font-semibold">Vercel</h3>
            <p>
              Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA
              91789, USA (nachfolgend &bdquo;Vercel&ldquo;). Wenn Sie unsere
              Website besuchen, erfasst Vercel verschiedene Logfiles inklusive
              Ihrer IP-Adressen.
            </p>
            <p>
              Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer
              m&ouml;glichst zuverl&auml;ssigen Darstellung unserer Website.
              Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt
              die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6
              Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.
            </p>

            <h2 className="text-2xl font-bold">
              3. Allgemeine Hinweise und Pflicht&shy;informationen
            </h2>
            <h3 className="text-xl font-semibold">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer
              pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend der
              gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerkl&auml;rung.
            </p>
            <p>
              Wenn Sie diese Website benutzen, werden verschiedene
              personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
              mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
              Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche
              Daten wir erheben und wof&uuml;r wir sie nutzen. Sie
              erl&auml;utert auch, wie und zu welchem Zweck das geschieht.
            </p>
            <p>
              Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet
              (z.&nbsp;B. bei der Kommunikation per E-Mail)
              Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz
              der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.
            </p>

            <h3 className="text-xl font-semibold">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p>
              Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf
              dieser Website ist:
            </p>
            <p>
              INVERTA
              <br />
              [Musterstraße 1]
              <br />
              [12345 Musterstadt]
            </p>
            <p>E-Mail: info@inverta.de</p>

            {/* More sections can be added as needed */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
