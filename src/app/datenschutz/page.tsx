import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Datenschutz | INVERTA",
  description: "Datenschutzerklärung von INVERTA DIGITAL.",
};

export default function DatenschutzPage() {
  return (
    <>
      <main className="min-h-screen pt-32 pb-24 bg-[#fafafa] text-black">
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
                unsere IT-Systeme erfasst. Das sind vor allem technische Daten
                (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des
                Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch,
                sobald Sie diese Website betreten.
              </p>

              <p className="text-black/80 leading-relaxed font-semibold">
                Wofür nutzen wir Ihre Daten?
              </p>
              <p className="text-black/80 leading-relaxed">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie
                Bereitstellung der Website zu gewährleisten. Andere Daten können
                zur Analyse Ihres Nutzerverhaltens verwendet werden.
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
                Externes Hosting
              </h3>
              <p className="text-black/80 leading-relaxed">
                Diese Website wird extern gehostet (Vercel). Die
                personenbezogenen Daten, die auf dieser Website erfasst werden,
                werden auf den Servern des Hosters gespeichert. Hierbei kann es
                sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und
                Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
                Websitezugriffe und sonstige Daten, die über eine Website
                generiert werden, handeln.
              </p>
              <p className="text-black/80 leading-relaxed">
                Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung
                gegenüber unseren potenziellen und bestehenden Kunden (Art. 6
                Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen
                und effizienten Bereitstellung unseres Online-Angebots durch
                einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
              <p className="text-black/80 leading-relaxed">
                Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies
                zur Erfüllung seiner Leistungspflichten erforderlich ist und
                unsere Weisungen in Bezug auf diese Daten befolgen. Wir nutzen
                folgenden Hoster: <br />
                <strong>Vercel Inc.</strong>
                <br />
                440 N Barranca Ave #4133
                <br />
                Covina, CA 91731
                <br />
                USA
              </p>
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
              <p className="text-black/80 leading-relaxed mt-4">
                Verantwortliche Stelle ist die natürliche oder juristische
                Person, die allein oder gemeinsam mit anderen über die Zwecke
                und Mittel der Verarbeitung von personenbezogenen Daten (z. B.
                Namen, E-Mail-Adressen o. Ä.) entscheidet.
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
                für die Speicherung Ihrer personenbezogenen Daten haben (z. B.
                steuer- oder handelsrechtliche Aufbewahrungsfristen); im
                letztgenannten Fall erfolgt die Löschung nach Fortfall dieser
                Gründe.
              </p>

              <h3 className="text-xl font-semibold uppercase tracking-wider text-black/80 mt-6 mb-2">
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
              </h3>
              <p className="text-black/80 leading-relaxed">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                ausdrücklichen Einwilligung möglich. Sie können eine bereits
                erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
                der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
                Widerruf unberührt.
              </p>

              <h3 className="text-xl font-semibold uppercase tracking-wider text-black/80 mt-6 mb-2">
                SSL- bzw. TLS-Verschlüsselung
              </h3>
              <p className="text-black/80 leading-relaxed">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
                oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
                SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
                erkennen Sie daran, dass die Adresszeile des Browsers von
                „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in
                Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung
                aktiviert ist, können die Daten, die Sie an uns übermitteln,
                nicht von Dritten mitgelesen werden.
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
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
                Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
                Verarbeitung auf unserem berechtigten Interesse an der
                effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6
                Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1
                lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist
                jederzeit widerrufbar.
              </p>

              <h3 className="text-xl font-semibold uppercase tracking-wider text-black/80 mt-6 mb-2">
                Anfrage per E-Mail, Telefon oder Telefax
              </h3>
              <p className="text-black/80 leading-relaxed">
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird
                Ihre Anfrage inklusive aller daraus hervorgehenden
                personenbezogenen Daten (Name, Anfrage) zum Zwecke der
                Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase border-t border-black/10 pt-10">
                5. Analyse-Tools
              </h2>

              <h3 className="text-xl font-semibold uppercase tracking-wider text-black/80 mt-6 mb-2">
                Google Analytics
              </h3>
              <p className="text-black/80 leading-relaxed">
                Diese Website nutzt Funktionen des Webanalysedienstes Google
                Analytics. Anbieter ist die Google Ireland Limited
                (&bdquo;Google&ldquo;), Gordon House, Barrow Street, Dublin 4,
                Irland.
              </p>
              <p className="text-black/80 leading-relaxed">
                Google Analytics ermöglicht es dem Websitebetreiber, das
                Verhalten der Websitebesucher zu analysieren. Hierbei erhält der
                Websitebetreiber verschiedene Nutzungsdaten, wie z. B.
                Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und
                Herkunft des Nutzers. Diese Daten werden dem jeweiligen Endgerät
                des Nutzers zugeordnet. Eine Zuordnung zu einer User-ID erfolgt
                nicht.
              </p>
              <p className="text-black/80 leading-relaxed">
                Des Weiteren können wir mit Google Analytics u. a. Ihre Maus-
                und Scrollbewegungen und Klicks aufzeichnen. Ferner verwendet
                Google Analytics verschiedene Modellierungsansätze, um die
                erfassten Datensätze zu ergänzen und setzt
                Machine-Learning-Technologien bei der Datenanalyse ein.
              </p>
              <p className="text-black/80 leading-relaxed">
                Google Analytics verwendet Technologien, die die Wiedererkennung
                des Nutzers zum Zwecke der Analyse des Nutzerverhaltens
                ermöglichen (z. B. Cookies oder Device-Fingerprinting). Die von
                Google erfassten Informationen über die Benutzung dieser Website
                werden in der Regel an einen Server von Google in den USA
                übertragen und dort gespeichert.
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

              <h3 className="text-xl font-semibold uppercase tracking-wider text-black/80 mt-6 mb-2">
                Browser-Plugin
              </h3>
              <p className="text-black/80 leading-relaxed">
                Sie können die Erfassung und Verarbeitung Ihrer Daten durch
                Google verhindern, indem Sie das unter dem folgenden Link
                verfügbare Browser-Plugin herunterladen und installieren:{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout?hl=de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-[#daff02] transition-colors"
                >
                  https://tools.google.com/dlpage/gaoptout
                </a>
                .
              </p>
              <p className="text-black/80 leading-relaxed">
                Mehr Informationen zum Umgang mit Nutzerdaten bei Google
                Analytics finden Sie in der Datenschutzerklärung von Google:{" "}
                <a
                  href="https://support.google.com/analytics/answer/6004245?hl=de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-[#daff02] transition-colors"
                >
                  https://support.google.com/analytics/answer/6004245
                </a>
                .
              </p>

              <h3 className="text-xl font-semibold uppercase tracking-wider text-black/80 mt-6 mb-2">
                Auftragsverarbeitung
              </h3>
              <p className="text-black/80 leading-relaxed">
                Wir haben mit Google einen Vertrag zur Auftragsverarbeitung
                abgeschlossen und setzen die strengen Vorgaben der deutschen
                Datenschutzbehörden bei der Nutzung von Google Analytics
                vollständig um.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
