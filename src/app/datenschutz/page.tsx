import { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | INVERTA DIGITAL",
  description:
    "Datenschutzerklärung von INVERTA DIGITAL - Ihrer Premium Agentur für Webdesign und KI.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function DatenschutzPage() {
  return (
    <>
      <main className="min-h-screen pt-32 pb-24 bg-[#fafafa] text-black overflow-x-hidden w-full">
        <div className="container mx-auto px-6 md:px-10 max-w-4xl">
          <div className="mb-16">
            <h1 className="text-[clamp(3rem,5vw,5rem)] tracking-tighter leading-none font-medium uppercase mb-6">
              Datenschutz&shy;erklärung
            </h1>
            <p className="text-lg text-black/60 font-medium">
              Stand: März 2026
            </p>
          </div>

          <div className="prose prose-neutral max-w-none space-y-12">
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">
                1. Datenschutz auf einen Blick
              </h2>
              <h3 className="text-xl font-semibold uppercase tracking-wider text-black/80 mt-6 mb-2">
                Allgemeine Hinweise
              </h3>
              <p className="text-black/80 leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können. Ausführliche
                Informationen zum Thema Datenschutz entnehmen Sie unserer unter
                diesem Text aufgeführten Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold uppercase tracking-wider text-black/80 mt-6 mb-2">
                Datenerfassung auf dieser Website
              </h3>
              <p className="text-black/80 leading-relaxed font-semibold">
                Wer ist verantwortlich für die Datenerfassung auf dieser
                Website?
              </p>
              <p className="text-black/80 leading-relaxed">
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
                &bdquo;Hinweis zur verantwortlichen Stelle&ldquo; in dieser
                Datenschutzerklärung entnehmen.
              </p>
              <p className="text-black/80 leading-relaxed font-semibold">
                Wie erfassen wir Ihre Daten?
              </p>
              <p className="text-black/80 leading-relaxed">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die
                Sie in ein Kontaktformular eingeben. Andere Daten werden
                automatisch oder nach Ihrer Einwilligung beim Besuch der Website
                durch unsere IT-Systeme erfasst. Das sind vor allem technische
                Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit
                des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
                automatisch, sobald Sie diese Website betreten.
              </p>
              <p className="text-black/80 leading-relaxed font-semibold">
                Wofür nutzen wir Ihre Daten?
              </p>
              <p className="text-black/80 leading-relaxed">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie
                Bereitstellung der Website zu gewährleisten. Andere Daten können
                zur Analyse Ihres Nutzerverhaltens sowie zur Bearbeitung Ihrer
                Kontaktanfragen verwendet werden.
              </p>
              <p className="text-black/80 leading-relaxed font-semibold">
                Welche Rechte haben Sie bezüglich Ihrer Daten?
              </p>
              <p className="text-black/80 leading-relaxed">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                Herkunft, Empfänger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
                können Sie diese Einwilligung jederzeit für die Zukunft
                widerrufen. Außerdem haben Sie das Recht, unter bestimmten
                Umständen die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen
                ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase border-t border-black/10 pt-10">
                2. Hosting und Infrastruktur
              </h2>

              <h3 className="text-xl font-semibold uppercase tracking-wider text-black/80 mt-6 mb-2">
                Website-Hosting (Vercel)
              </h3>
              <p className="text-black/80 leading-relaxed">
                Diese Website wird über die Plattform Vercel gehostet. Die
                personenbezogenen Daten, die auf dieser Website erfasst werden,
                werden auf den Servern von Vercel gespeichert. Hierbei kann es
                sich v.&nbsp;a. um IP-Adressen, Kontaktanfragen, Meta- und
                Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen sowie
                Websitezugriffe handeln.
              </p>
              <p className="text-black/80 leading-relaxed">
                Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung
                gegenüber unseren potenziellen und bestehenden Kunden (Art. 6
                Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen
                und effizienten Bereitstellung unseres Online-Angebots (Art. 6
                Abs. 1 lit. f DSGVO). Soweit eine entsprechende Einwilligung
                abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
                Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.
              </p>
              <div className="bg-black/5 p-6 rounded-2xl text-black/90 font-medium">
                <strong>Vercel Inc.</strong>
                <br />
                440 N Barranca Ave #4133
                <br />
                Covina, CA 91723, USA
                <br />
                Datenschutz:{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  vercel.com/legal/privacy-policy
                </a>
              </div>

              <h3 className="text-xl font-semibold uppercase tracking-wider text-black/80 mt-6 mb-2">
                Automatisierungs- und Datenbankserver (Hetzner)
              </h3>
              <p className="text-black/80 leading-relaxed">
                Für die Verarbeitung von Kontaktanfragen, die interne
                Prozessautomatisierung sowie die Speicherung von Kundendaten
                betreiben wir einen eigenen dedizierten Server bei der Hetzner
                Online GmbH. Auf diesem Server laufen ausschließlich
                selbstgehostete Open-Source-Anwendungen:
              </p>
              <ul className="space-y-2 text-black/80">
                <li className="flex gap-2">
                  <span className="font-bold shrink-0">—</span>
                  <span>
                    <strong>n8n</strong> (Workflow-Automatisierung) — zur
                    automatisierten Verarbeitung eingehender Kontaktanfragen
                    sowie zur Erzeugung und Versendung individueller
                    Antwort-E-Mails mittels KI-gestützter Textgenerierung.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold shrink-0">—</span>
                  <span>
                    <strong>Baserow</strong> (Datenbankverwaltung) — zur
                    strukturierten Speicherung und Verwaltung von Kontakt- und
                    Projektdaten. Baserow wird als Open-Source-Lösung
                    vollständig auf unserem eigenen Server betrieben; es erfolgt
                    keine Datenweitergabe an Dritte.
                  </span>
                </li>
              </ul>
              <p className="text-black/80 leading-relaxed">
                Der Server befindet sich in einem deutschen Rechenzentrum
                (Nürnberg, Deutschland) und unterliegt damit vollständig den
                Bestimmungen der DSGVO. Sämtliche personenbezogenen Daten
                verbleiben auf diesem Server innerhalb der Bundesrepublik
                Deutschland. Eine Übermittlung in Drittstaaten findet über
                diesen Verarbeitungsweg nicht statt.
              </p>
              <p className="text-black/80 leading-relaxed">
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
                DSGVO (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse an einer effizienten und strukturierten
                Anfragenbearbeitung).
              </p>
              <div className="bg-black/5 p-6 rounded-2xl text-black/90 font-medium">
                <strong>Hetzner Online GmbH</strong>
                <br />
                Industriestr. 25
                <br />
                91710 Gunzenhausen, Deutschland
                <br />
                Serverstandort: Nürnberg, Deutschland
                <br />
                Datenschutz:{" "}
                <a
                  href="https://www.hetzner.com/de/rechtliches/datenschutz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  hetzner.com/de/rechtliches/datenschutz
                </a>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase border-t border-black/10 pt-10">
                3. Allgemeine Hinweise und Pflicht&shy;informationen
              </h2>

              <h3 className="text-xl font-semibold uppercase tracking-wider text-black/80 mt-6 mb-2">
                Datenschutz
              </h3>
              <p className="text-black/80 leading-relaxed">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
                Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                vertraulich und entsprechend den gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn
                Sie diese Website benutzen, werden verschiedene personenbezogene
                Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
                persönlich identifiziert werden können. Die vorliegende
                Datenschutzerklärung erläutert, welche Daten wir erheben und
                wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem
                Zweck das geschieht.
              </p>
              <p className="text-black/80 leading-relaxed">
                Wir weisen darauf hin, dass die Datenübertragung im Internet
                (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitslücken
                aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
                durch Dritte ist nicht möglich.
              </p>

              <h3 className="text-xl font-semibold uppercase tracking-wider text-black/80 mt-6 mb-2">
                Hinweis zur verantwortlichen Stelle
              </h3>
              <p className="text-black/80 leading-relaxed">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
              </p>
              <div className="bg-black/5 p-6 rounded-2xl text-black/90 font-medium">
                INVERTA DIGITAL
                <br />
                Rubensweg 1<br />
                01217 Dresden
                <br />
                Deutschland
                <br />
                <br />
                E-Mail: info@invertadigital.de
              </div>
              <p className="text-black/80 leading-relaxed">
                Verantwortliche Stelle ist die natürliche oder juristische
                Person, die allein oder gemeinsam mit anderen über die Zwecke
                und Mittel der Verarbeitung von personenbezogenen Daten
                (z.&nbsp;B. Namen, E-Mail-Adressen o.&nbsp;Ä.) entscheidet.
              </p>

              <h3 className="text-xl font-semibold uppercase tracking-wider text-black/80 mt-6 mb-2">
                Speicherdauer
              </h3>
              <p className="text-black/80 leading-relaxed">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere
                Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
                Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
                Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
                Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
                gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe
                für die Speicherung Ihrer personenbezogenen Daten haben
                (z.&nbsp;B. steuer- oder handelsrechtliche
                Aufbewahrungsfristen); im letztgenannten Fall erfolgt die
                Löschung nach Fortfall dieser Gründe.
              </p>

              <h3 className="text-xl font-semibold uppercase tracking-wider text-black/80 mt-6 mb-2">
                Hinweis zur Datenweitergabe in Drittstaaten
              </h3>
              <p className="text-black/80 leading-relaxed">
                Wir legen besonderen Wert darauf, personenbezogene Daten
                überwiegend innerhalb der Europäischen Union bzw. des
                Europäischen Wirtschaftsraums zu verarbeiten. Soweit wir
                Dienstleister einsetzen, die ihren Sitz in den USA haben
                (Vercel, Resend), stellen wir sicher, dass diese nach dem
                EU-US-Datenschutzrahmen (Data Privacy Framework) zertifiziert
                sind oder gleichwertige Garantien gemäß Art. 46 DSGVO bieten.
                Unsere Kerndatenverarbeitung (Automatisierung, Datenbank)
                erfolgt ausschließlich auf unserem eigenen Server in
                Deutschland.
              </p>

              <h3 className="text-xl font-semibold uppercase tracking-wider text-black/80 mt-6 mb-2">
                SSL- bzw. TLS-Verschlüsselung
              </h3>
              <p className="text-black/80 leading-relaxed">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte eine SSL- bzw.
                TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
                daran, dass die Adresszeile des Browsers von
                &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an
                dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw.
                TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an
                uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase border-t border-black/10 pt-10">
                4. Datenerfassung auf dieser Website
              </h2>

              <h3 className="text-xl font-semibold uppercase tracking-wider text-black/80 mt-6 mb-2">
                Kontaktformular
              </h3>
              <p className="text-black/80 leading-relaxed">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Anfrageformular inklusive der von
                Ihnen dort angegebenen Kontaktdaten (Name, E-Mail-Adresse,
                Telefonnummer, Unternehmen, gewünschte Leistung, Nachricht)
                zwecks Bearbeitung der Anfrage und für den Fall von
                Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht
                ohne Ihre Einwilligung weiter.
              </p>
              <p className="text-black/80 leading-relaxed">
                Bei der Übermittlung Ihrer Kontaktanfrage werden folgende Daten
                verarbeitet und an nachstehende Dienste weitergegeben:
              </p>
              <ul className="list-none space-y-3 mt-4">
                <li className="bg-black/5 p-4 rounded-xl text-black/80">
                  <strong>Resend (E-Mail-Versand):</strong> Ihre Anfrage wird
                  per E-Mail an unser internes Postfach weitergeleitet.
                  Anbieter: Resend Inc., 2261 Market Street #5039, San
                  Francisco, CA 94114, USA. Die Verarbeitung erfolgt auf Basis
                  eines Auftragsverarbeitungsvertrags. Resend ist nach dem
                  EU-US-Datenschutzrahmen (Data Privacy Framework) zertifiziert.
                  Resend erhält ausschließlich die zur E-Mail-Zustellung
                  erforderlichen Daten und verarbeitet diese nicht für eigene
                  Zwecke.
                </li>
                <li className="bg-black/5 p-4 rounded-xl text-black/80">
                  <strong>n8n (Prozessautomatisierung, Self-hosted):</strong>{" "}
                  Ihre Anfrage wird auf unserem eigenen Hetzner-Server in
                  Deutschland automatisiert verarbeitet. Dies umfasst die
                  interne Benachrichtigung, die KI-gestützte Generierung einer
                  individualisierten Antwort-E-Mail sowie die strukturierte
                  Speicherung Ihrer Anfragedaten in unserer Datenbank. Es
                  erfolgt keine Weitergabe personenbezogener Daten an Dritte
                  über diesen Verarbeitungsweg.
                </li>
                <li className="bg-black/5 p-4 rounded-xl text-black/80">
                  <strong>Baserow (Datenbankverwaltung, Self-hosted):</strong>{" "}
                  Ihre Kontaktdaten (Name, E-Mail, Telefonnummer, Unternehmen,
                  gewünschte Leistung, Nachricht) werden in unserer
                  selbstgehosteten Baserow-Instanz auf unserem Hetzner-Server in
                  Deutschland gespeichert. Baserow ist eine
                  Open-Source-Datenbankverwaltungslösung, die vollständig unter
                  unserer Kontrolle betrieben wird. Eine Übermittlung
                  personenbezogener Daten an den Hersteller oder sonstige Dritte
                  findet nicht statt. Sämtliche Daten verbleiben auf unserem
                  Server in Deutschland.
                </li>
                <li className="bg-black/5 p-4 rounded-xl text-black/80">
                  <strong>OpenAI (KI-gestützte Textgenerierung):</strong> Im
                  Rahmen der automatisierten Bearbeitung Ihrer Anfrage wird der
                  Inhalt Ihrer Nachricht an die API von OpenAI übermittelt, um
                  eine individualisierte Antwort-E-Mail zu generieren. Anbieter:
                  OpenAI, L.L.C., 3180 18th St, San Francisco, CA 94110, USA.
                  Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit.
                  f DSGVO (berechtigtes Interesse an effizienter
                  Kundenbetreuung). OpenAI ist vertraglich verpflichtet,
                  API-Daten nicht für eigene Trainingszwecke zu verwenden.
                </li>
              </ul>

              <h3 className="text-xl font-semibold uppercase tracking-wider text-black/80 mt-6 mb-2">
                Interne Benachrichtigungen (Telegram)
              </h3>
              <p className="text-black/80 leading-relaxed">
                Für interne Sofort-Benachrichtigungen bei eingehenden
                Kontaktanfragen nutzen wir den Messenger-Dienst Telegram. Über
                diesen Kanal werden ausschließlich anonymisierte
                Benachrichtigungen versendet, die keine personenbezogenen Daten
                enthalten. Übermittelt werden lediglich eine interne Anfrage-ID
                sowie die Art der gewünschten Leistung. Rückschlüsse auf
                einzelne Personen sind über die Telegram-Nachricht allein nicht
                möglich.
              </p>
              <p className="text-black/80 leading-relaxed">
                Da keine personenbezogenen Daten an Telegram übermittelt werden,
                ist für diesen Verarbeitungsschritt keine gesonderte
                datenschutzrechtliche Rechtsgrundlage für eine
                Drittlandsübermittlung erforderlich.
              </p>

              <p className="text-black/80 leading-relaxed mt-4">
                Die Verarbeitung der im Kontaktformular erhobenen Daten erfolgt
                auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)
                sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
                einer effizienten Anfragenbearbeitung). Die im Kontaktformular
                eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
                auffordern, Ihre Einwilligung zur Speicherung widerrufen oder
                der Zweck für die Datenspeicherung entfällt. Zwingende
                gesetzliche Bestimmungen — insbesondere Aufbewahrungsfristen —
                bleiben unberührt.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase border-t border-black/10 pt-10">
                5. E-Mail-Versand (Resend)
              </h2>
              <p className="text-black/80 leading-relaxed">
                Für den transaktionalen E-Mail-Versand (interne
                Benachrichtigungen bei eingehenden Anfragen sowie KI-generierte
                Antwort-E-Mails an Anfragende) nutzen wir den Dienst Resend.
                Wenn Sie das Kontaktformular absenden, wird Ihre E-Mail-Adresse
                an Resend übermittelt, um die entsprechenden E-Mails
                zuzustellen.
              </p>
              <p className="text-black/80 leading-relaxed">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
                (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse an einer zeitnahen Kommunikation mit
                Interessenten). Wir haben mit Resend einen
                Auftragsverarbeitungsvertrag (Data Processing Agreement)
                geschlossen. Resend verarbeitet Daten ausschließlich zur
                Zustellung der E-Mails und nicht für eigene Zwecke. Resend ist
                nach dem EU-US-Datenschutzrahmen (Data Privacy Framework)
                zertifiziert.
              </p>
              <div className="bg-black/5 p-6 rounded-2xl text-black/90 font-medium">
                <strong>Resend Inc.</strong>
                <br />
                2261 Market Street #5039
                <br />
                San Francisco, CA 94114, USA
                <br />
                Datenschutz:{" "}
                <a
                  href="https://resend.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  resend.com/legal/privacy-policy
                </a>
              </div>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase border-t border-black/10 pt-10">
                6. Online-Terminbuchung (Cal.com)
              </h2>
              <p className="text-black/80 leading-relaxed">
                Auf unserer Website bieten wir Ihnen die Möglichkeit,
                unkompliziert Online-Termine mit uns zu vereinbaren. Für die
                Terminbuchung nutzen wir den Dienst Cal.com. Anbieter ist die
                Cal.com, Inc., 548 Market St, Suite 50130, San Francisco, CA
                94104, USA (nachfolgend „Cal.com“).
              </p>
              <p className="text-black/80 leading-relaxed">
                Wenn Sie einen Termin über unsere Website buchen, werden die von
                Ihnen eingegebenen Daten (wie z.&nbsp;B. Name, E-Mail-Adresse,
                Telefonnummer, Datum und Uhrzeit des Termins sowie ggf. weitere
                Informationen zum Anliegen) an die Server von Cal.com übertragen
                und dort gespeichert. Diese Daten werden ausschließlich zur
                Organisation und Durchführung des jeweiligen Termins
                verarbeitet.
              </p>
              <p className="text-black/80 leading-relaxed">
                Die Verarbeitung Ihrer Daten im Rahmen der Terminbuchung erfolgt
                auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung
                bzw. Vertragserfüllung) sowie aufgrund unseres berechtigten
                Interesses an einer komfortablen und effizienten
                Terminverwaltung nach Art. 6 Abs. 1 lit. f DSGVO. Soweit eine
                Einwilligung abgefragt wird (z.&nbsp;B. bei der Abfrage nicht
                zwingend erforderlicher Daten), erfolgt die Verarbeitung auf
                Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist
                jederzeit widerrufbar.
              </p>
              <p className="text-black/80 leading-relaxed">
                Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag
                (AVV) abgeschlossen. Dies gewährleistet, dass Cal.com die
                personenbezogenen Daten unserer Websitebesucher nur nach unseren
                Weisungen und unter Einhaltung der DSGVO verarbeitet. Cal.com
                ist zudem nach dem EU-US-Datenschutzrahmen (Data Privacy
                Framework) zertifiziert, sodass bei einer Datenübermittlung in
                die USA ein angemessenes Datenschutzniveau gewährleistet ist.
              </p>
              <div className="bg-black/5 p-6 rounded-2xl text-black/90 font-medium">
                <strong>Cal.com, Inc.</strong>
                <br />
                548 Market St, Suite 50130
                <br />
                San Francisco, CA 94104, USA
                <br />
                Datenschutz:{" "}
                <a
                  href="https://cal.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  cal.com/privacy
                </a>
              </div>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase border-t border-black/10 pt-10">
                7. Analyse-Tools
              </h2>

              <h3 className="text-xl font-semibold uppercase tracking-wider text-black/80 mt-6 mb-2">
                Google Analytics
              </h3>
              <p className="text-black/80 leading-relaxed">
                Diese Website nutzt Funktionen des Webanalysedienstes Google
                Analytics. Anbieter ist die Google Ireland Limited, Gordon
                House, Barrow Street, Dublin 4, Irland.
              </p>
              <p className="text-black/80 leading-relaxed">
                Google Analytics ermöglicht es dem Websitebetreiber, das
                Verhalten der Websitebesucher zu analysieren. Hierbei erhält der
                Websitebetreiber verschiedene Nutzungsdaten, wie z.&nbsp;B.
                Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und
                Herkunft des Nutzers. Diese Daten werden von Google ggf. in
                einem Profil zusammengefasst, das dem jeweiligen Nutzer bzw.
                dessen Endgerät zugeordnet ist.
              </p>
              <p className="text-black/80 leading-relaxed">
                Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer
                Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
                TDDDG. Die Einwilligung ist jederzeit widerrufbar.
              </p>
              <p className="text-black/80 leading-relaxed">
                <strong>
                  Google Analytics wird auf dieser Website erst nach Ihrer
                  ausdrücklichen Einwilligung über unseren Cookie-Banner
                  aktiviert.
                </strong>{" "}
                Ohne Ihre Zustimmung werden keine Analyse-Cookies gesetzt und
                keine Daten an Google übermittelt.
              </p>
              <p className="text-black/80 leading-relaxed">
                Die Datenübertragung in die USA wird auf den
                Angemessenheitsbeschluss der EU-Kommission gestützt. Google ist
                unter dem EU-US-Datenschutzrahmen (Data Privacy Framework)
                zertifiziert.
              </p>
              <p className="text-black/80 leading-relaxed">
                Sie können die Erfassung durch Google Analytics verhindern,
                indem Sie das Browser-Plugin unter folgendem Link installieren:{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout?hl=de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-[#daff02] transition-colors"
                >
                  https://tools.google.com/dlpage/gaoptout
                </a>
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase border-t border-black/10 pt-10">
                8. Ihre Rechte als betroffene Person
              </h2>
              <p className="text-black/80 leading-relaxed">
                Die DSGVO gewährt Ihnen als betroffene Person umfassende Rechte
                hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten. Im
                Folgenden finden Sie eine Übersicht:
              </p>
              <ul className="space-y-2 text-black/80">
                <li className="flex gap-2">
                  <span className="font-bold shrink-0">—</span>
                  <span>
                    <strong>Auskunftsrecht</strong> (Art. 15 DSGVO): Sie haben
                    das Recht, eine Bestätigung darüber zu verlangen, ob Sie
                    betreffende personenbezogene Daten verarbeitet werden, und
                    ggf. Auskunft über diese Daten sowie weitere Informationen
                    und eine Kopie der Daten zu erhalten.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold shrink-0">—</span>
                  <span>
                    <strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO): Sie
                    haben das Recht, die Vervollständigung oder Berichtigung
                    unrichtiger Sie betreffender personenbezogener Daten zu
                    verlangen.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold shrink-0">—</span>
                  <span>
                    <strong>Recht auf Löschung</strong> (Art. 17 DSGVO): Sie
                    haben das Recht, zu verlangen, dass Sie betreffende
                    personenbezogene Daten unverzüglich gelöscht werden, sofern
                    einer der gesetzlich vorgesehenen Gründe zutrifft.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold shrink-0">—</span>
                  <span>
                    <strong>Recht auf Einschränkung der Verarbeitung</strong>{" "}
                    (Art. 18 DSGVO): Sie haben das Recht, die Einschränkung der
                    Verarbeitung zu verlangen, wenn eine der gesetzlich
                    vorgesehenen Voraussetzungen gegeben ist.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold shrink-0">—</span>
                  <span>
                    <strong>Recht auf Datenübertragbarkeit</strong> (Art. 20
                    DSGVO): Sie haben das Recht, die Sie betreffenden
                    personenbezogenen Daten in einem strukturierten, gängigen
                    und maschinenlesbaren Format zu erhalten und diese Daten
                    einem anderen Verantwortlichen zu übermitteln.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold shrink-0">—</span>
                  <span>
                    <strong>Widerspruchsrecht</strong> (Art. 21 DSGVO): Sie
                    haben das Recht, aus Gründen, die sich aus Ihrer besonderen
                    Situation ergeben, jederzeit gegen die Verarbeitung Sie
                    betreffender personenbezogener Daten Widerspruch einzulegen.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold shrink-0">—</span>
                  <span>
                    <strong>Widerrufsrecht</strong> (Art. 7 Abs. 3 DSGVO): Sie
                    haben das Recht, eine erteilte Einwilligung jederzeit mit
                    Wirkung für die Zukunft zu widerrufen.
                  </span>
                </li>
              </ul>
              <p className="text-black/80 leading-relaxed mt-4">
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
                <a
                  href="mailto:info@invertadigital.de"
                  className="underline underline-offset-4 hover:text-[#daff02] transition-colors"
                >
                  info@invertadigital.de
                </a>
              </p>
              <p className="text-black/80 leading-relaxed">
                Darüber hinaus haben Sie das Recht, sich bei der zuständigen
                Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
                personenbezogenen Daten durch uns zu beschweren. Die für uns
                zuständige Aufsichtsbehörde ist:
              </p>
              <div className="bg-black/5 p-6 rounded-2xl text-black/90 font-medium">
                <strong>
                  Sächsischer Datenschutz- und Transparenzbeauftragter
                </strong>
                <br />
                Devrientstraße 5<br />
                01067 Dresden
                <br />
                Tel.: +49 351 85471 101
                <br />
                E-Mail: saechsdsb@slt.sachsen.de
              </div>
            </section>

            {/* Section 9 */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase border-t border-black/10 pt-10">
                9. Übersicht der Datenverarbeitungen
              </h2>
              <p className="text-black/80 leading-relaxed">
                Die nachfolgende Übersicht fasst die Kategorien der
                verarbeiteten Daten, die Zwecke der Verarbeitung und die
                betroffenen Personen zusammen.
              </p>

              <h3 className="text-xl font-semibold uppercase tracking-wider text-black/80 mt-6 mb-2">
                Kategorien verarbeiteter Daten
              </h3>
              <ul className="space-y-1 text-black/80">
                <li className="flex gap-2">
                  <span className="font-bold shrink-0">—</span> Bestandsdaten
                  (Name, Unternehmen)
                </li>
                <li className="flex gap-2">
                  <span className="font-bold shrink-0">—</span> Kontaktdaten
                  (E-Mail-Adresse, Telefonnummer)
                </li>
                <li className="flex gap-2">
                  <span className="font-bold shrink-0">—</span> Inhaltsdaten
                  (Freitextnachrichten, gewünschte Leistung)
                </li>
                <li className="flex gap-2">
                  <span className="font-bold shrink-0">—</span> Nutzungsdaten
                  (IP-Adressen, Zugriffszeiten, Browsertyp)
                </li>
                <li className="flex gap-2">
                  <span className="font-bold shrink-0">—</span> Meta- und
                  Kommunikationsdaten (Geräte-Informationen, IP-Adressen)
                </li>
              </ul>

              <h3 className="text-xl font-semibold uppercase tracking-wider text-black/80 mt-6 mb-2">
                Empfänger und Auftragsverarbeiter
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-black/80 border-collapse mt-2">
                  <thead>
                    <tr className="border-b-2 border-black/10">
                      <th className="text-left py-3 pr-4 font-bold uppercase tracking-wider text-xs">
                        Dienst
                      </th>
                      <th className="text-left py-3 pr-4 font-bold uppercase tracking-wider text-xs">
                        Standort
                      </th>
                      <th className="text-left py-3 font-bold uppercase tracking-wider text-xs">
                        Zweck
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-black/5">
                      <td className="py-3 pr-4 font-medium">Vercel</td>
                      <td className="py-3 pr-4">USA (DPF)</td>
                      <td className="py-3">Website-Hosting</td>
                    </tr>
                    <tr className="border-b border-black/5">
                      <td className="py-3 pr-4 font-medium">Resend</td>
                      <td className="py-3 pr-4">USA (DPF)</td>
                      <td className="py-3">E-Mail-Versand</td>
                    </tr>
                    <tr className="border-b border-black/5">
                      <td className="py-3 pr-4 font-medium">OpenAI</td>
                      <td className="py-3 pr-4">USA (DPF)</td>
                      <td className="py-3">KI-Textgenerierung</td>
                    </tr>
                    <tr className="border-b border-black/5">
                      <td className="py-3 pr-4 font-medium">Cal.com</td>
                      <td className="py-3 pr-4">USA (DPF)</td>
                      <td className="py-3">Online-Terminbuchung</td>
                    </tr>
                    <tr className="border-b border-black/5">
                      <td className="py-3 pr-4 font-medium">Hetzner</td>
                      <td className="py-3 pr-4">Deutschland 🇩🇪</td>
                      <td className="py-3">Serverbetrieb</td>
                    </tr>
                    <tr className="border-b border-black/5">
                      <td className="py-3 pr-4 font-medium">
                        n8n (Self-hosted)
                      </td>
                      <td className="py-3 pr-4">Deutschland 🇩🇪</td>
                      <td className="py-3">Workflow-Automatisierung</td>
                    </tr>
                    <tr className="border-b border-black/5">
                      <td className="py-3 pr-4 font-medium">
                        Baserow (Self-hosted)
                      </td>
                      <td className="py-3 pr-4">Deutschland 🇩🇪</td>
                      <td className="py-3">Datenbankverwaltung</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium">
                        Google Analytics
                      </td>
                      <td className="py-3 pr-4">Irland / USA (DPF)</td>
                      <td className="py-3">Webanalyse (mit Einwilligung)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-black/80 leading-relaxed text-sm mt-2">
                <strong>DPF</strong> = Zertifiziert nach dem EU-US Data Privacy
                Framework. Alle Self-hosted-Dienste (n8n, Baserow) laufen auf
                unserem eigenen Server in Deutschland — es erfolgt keine
                Datenweitergabe an Dritte.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
