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
              Stand: Februar 2026
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
                „Hinweis zur verantwortlichen Stelle“ in dieser
                Datenschutzerklärung entnehmen.
              </p>
              <p className="text-black/80 leading-relaxed font-semibold">
                Wie erfassen wir Ihre Daten?
              </p>
              <p className="text-black/80 leading-relaxed">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie
                in ein Kontaktformular eingeben. Andere Daten werden automatisch
                oder nach Ihrer Einwilligung beim Besuch der Website durch
                unsere IT-Systeme erfasst.
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
                2. Hosting
              </h2>

              <h3 className="text-xl font-semibold uppercase tracking-wider text-black/80 mt-6 mb-2">
                Website-Hosting (Vercel)
              </h3>
              <p className="text-black/80 leading-relaxed">
                Diese Website wird über Vercel gehostet. Die personenbezogenen
                Daten, die auf dieser Website erfasst werden, werden auf den
                Servern von Vercel gespeichert. Hierbei kann es sich v. a. um
                IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
                Vertragsdaten, Kontaktdaten, Namen sowie Websitezugriffe
                handeln.
              </p>
              <p className="text-black/80 leading-relaxed">
                Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung
                gegenüber unseren potenziellen und bestehenden Kunden (Art. 6
                Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen
                und effizienten Bereitstellung unseres Online-Angebots (Art. 6
                Abs. 1 lit. f DSGVO).
              </p>
              <div className="bg-black/5 p-6 rounded-2xl text-black/90 font-medium">
                <strong>Vercel Inc.</strong>
                <br />
                440 N Barranca Ave #4133
                <br />
                Covina, CA 91731, USA
              </div>

              <h3 className="text-xl font-semibold uppercase tracking-wider text-black/80 mt-6 mb-2">
                Automatisierungs-Server (Hetzner)
              </h3>
              <p className="text-black/80 leading-relaxed">
                Für die Verarbeitung von Kontaktanfragen und die interne
                Prozessautomatisierung betreiben wir einen eigenen Server bei
                Hetzner Online GmbH. Auf diesem Server läuft unsere
                Automatisierungslösung (n8n), die eingehende Anfragen
                verarbeitet, intern weiterleitet und in unserem
                Projektmanagementsystem (Notion) speichert. Der Server befindet
                sich in einem deutschen Rechenzentrum (Nürnberg, Deutschland)
                und unterliegt damit vollständig der DSGVO.
              </p>
              <p className="text-black/80 leading-relaxed">
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
                DSGVO (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse an effizienter Anfragenbearbeitung).
              </p>
              <div className="bg-black/5 p-6 rounded-2xl text-black/90 font-medium">
                <strong>Hetzner Online GmbH</strong>
                <br />
                Industriestr. 25
                <br />
                91710 Gunzenhausen, Deutschland
                <br />
                Serverstandort: Nürnberg, Deutschland
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
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
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
                für die Speicherung haben.
              </p>

              <h3 className="text-xl font-semibold uppercase tracking-wider text-black/80 mt-6 mb-2">
                SSL- bzw. TLS-Verschlüsselung
              </h3>
              <p className="text-black/80 leading-relaxed">
                Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw.
                TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
                daran, dass die Adresszeile des Browsers von „http://“ auf
                „https://“ wechselt und an dem Schloss-Symbol in Ihrer
                Browserzeile.
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
                Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
                weiter.
              </p>
              <p className="text-black/80 leading-relaxed">
                Bei der Übermittlung Ihrer Kontaktanfrage werden folgende Daten
                verarbeitet und an nachstehende Dienste weitergegeben:
              </p>
              <ul className="list-none space-y-3 mt-4">
                <li className="bg-black/5 p-4 rounded-xl text-black/80">
                  <strong>Resend (E-Mail-Versand):</strong> Ihre Anfrage wird
                  per E-Mail an uns weitergeleitet und Sie erhalten eine
                  automatische Bestätigungs-E-Mail. Anbieter: Resend Inc., 2261
                  Market Street #5039, San Francisco, CA 94114, USA. Die
                  Verarbeitung erfolgt auf Basis eines
                  Auftragsverarbeitungsvertrags. Resend ist nach dem
                  EU-US-Datenschutzrahmen (Data Privacy Framework) zertifiziert.
                </li>
                <li className="bg-black/5 p-4 rounded-xl text-black/80">
                  <strong>n8n (Prozessautomatisierung):</strong> Ihre Anfrage
                  wird auf unserem Hetzner-Server (Deutschland) automatisiert
                  verarbeitet — zur internen Benachrichtigung und Speicherung im
                  Projektmanagementsystem. Keine Weitergabe an Dritte.
                </li>
                <li className="bg-black/5 p-4 rounded-xl text-black/80">
                  <strong>Notion (Projektmanagement):</strong> Ihre Kontaktdaten
                  (Name, E-Mail, Unternehmen, Anfrageninhalt) werden in unserem
                  internen Notion-Arbeitsbereich gespeichert, um Ihre Anfrage
                  bearbeiten zu können. Anbieter: Notion Labs, Inc., 2300
                  Harrison St., San Francisco, CA 94110, USA. Notion ist nach
                  dem EU-US-Datenschutzrahmen zertifiziert.
                </li>
                <li className="bg-black/5 p-4 rounded-xl text-black/80">
                  <strong>Google Sheets (interne Protokollierung):</strong>{" "}
                  Eingehende Anfragen werden in einem internen Google Sheet
                  protokolliert (Name, E-Mail, Service, Datum). Anbieter: Google
                  Ireland Limited, Gordon House, Barrow Street, Dublin 4,
                  Irland.
                </li>
              </ul>
              <p className="text-black/80 leading-relaxed mt-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit.
                f DSGVO (berechtigtes Interesse an effizienter
                Anfragenbearbeitung).
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase border-t border-black/10 pt-10">
                5. E-Mail-Versand (Resend)
              </h2>
              <p className="text-black/80 leading-relaxed">
                Für den transaktionalen E-Mail-Versand (Bestätigungsmails,
                Benachrichtigungen) nutzen wir den Dienst Resend. Wenn Sie das
                Kontaktformular absenden, wird Ihre E-Mail-Adresse an Resend
                übermittelt, um Ihnen eine Bestätigungsnachricht zuzusenden.
              </p>
              <p className="text-black/80 leading-relaxed">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Wir haben mit
                Resend einen Auftragsverarbeitungsvertrag geschlossen. Resend
                verarbeitet Daten ausschließlich zur Zustellung der E-Mails und
                nicht für eigene Zwecke.
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
                6. Analyse-Tools
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
                Websitebetreiber verschiedene Nutzungsdaten, wie z. B.
                Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und
                Herkunft des Nutzers.
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

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase border-t border-black/10 pt-10">
                7. Interne Benachrichtigungen (Telegram)
              </h2>
              <p className="text-black/80 leading-relaxed">
                Für interne Benachrichtigungen bei eingehenden Kontaktanfragen
                nutzen wir den Messenger-Dienst Telegram. Wenn Sie das
                Kontaktformular absenden, werden Ihre Angaben (Name, E-Mail,
                Unternehmen, Servicewunsch) automatisiert als interne
                Nachricht an unseren geschäftlichen Telegram-Account
                weitergeleitet. Diese Nachricht ist ausschließlich für interne
                Bearbeitungszwecke bestimmt und wird nicht an Dritte
                weitergegeben.
              </p>
              <p className="text-black/80 leading-relaxed">
                Telegram wird von der Telegram FZ-LLC mit Sitz in Dubai, VAE
                betrieben. Da Dubai kein Land mit einem von der EU-Kommission
                anerkannten angemessenen Datenschutzniveau ist, erfolgt die
                Übermittlung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse an effizienter interner
                Kommunikation) sowie Art. 49 Abs. 1 lit. b DSGVO
                (Übermittlung zur Vertragserfüllung). Wir haben mit Telegram
                keinen Auftragsverarbeitungsvertrag geschlossen, da Telegram
                ausschließlich als internes Kommunikationsmittel genutzt wird
                und keine dauerhaften Daten auf Telegram-Servern gespeichert
                werden.
              </p>
              <div className="bg-black/5 p-6 rounded-2xl text-black/90 font-medium">
                <strong>Telegram FZ-LLC</strong><br />
                Dubai, Vereinigte Arabische Emirate<br />
                Datenschutz:{" "}
                <a
                  href="https://telegram.org/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  telegram.org/privacy
                </a>
              </div>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase border-t border-black/10 pt-10">
                8. Ihre Rechte
              </h2>
              <p className="text-black/80 leading-relaxed">
                Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer
                personenbezogenen Daten:
              </p>
              <ul className="space-y-2 text-black/80">
                <li className="flex gap-2">
                  <span className="font-bold shrink-0">—</span> Recht auf
                  Auskunft (Art. 15 DSGVO)
                </li>
                <li className="flex gap-2">
                  <span className="font-bold shrink-0">—</span> Recht auf
                  Berichtigung (Art. 16 DSGVO)
                </li>
                <li className="flex gap-2">
                  <span className="font-bold shrink-0">—</span> Recht auf
                  Löschung (Art. 17 DSGVO)
                </li>
                <li className="flex gap-2">
                  <span className="font-bold shrink-0">—</span> Recht auf
                  Einschränkung der Verarbeitung (Art. 18 DSGVO)
                </li>
                <li className="flex gap-2">
                  <span className="font-bold shrink-0">—</span> Recht auf
                  Datenübertragbarkeit (Art. 20 DSGVO)
                </li>
                <li className="flex gap-2">
                  <span className="font-bold shrink-0">—</span> Recht auf
                  Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)
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
                Sie haben zudem das Recht, sich bei der zuständigen
                Datenschutz-Aufsichtsbehörde zu beschweren. Die zuständige
                Behörde für Sachsen ist:
              </p>
              <div className="bg-black/5 p-6 rounded-2xl text-black/90 font-medium">
                <strong>Sächsischer Datenschutzbeauftragter</strong>
                <br />
                Devrientstraße 5<br />
                01067 Dresden
                <br />
                Tel.: +49 351 85471 101
                <br />
                E-Mail: saechsdsb@slt.sachsen.de
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
