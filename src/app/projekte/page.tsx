import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Projekte | INVERTA",
  description: "Erfolgreiche Projekte und Referenzen unserer Agentur.",
};

export default function ProjektePage() {
  return (
    <>
      <main className="min-h-screen pt-32 pb-20 bg-[#fafafa]">
        <section className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="inline-block rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-500 mb-6 shadow-sm">
              Portfolio
            </div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 leading-[1.1] text-black">
              Unsere Projekte
            </h1>
          </FadeIn>

          <div className="max-w-3xl text-lg md:text-xl leading-relaxed text-[#16101e]/80 font-normal mb-16">
            <FadeIn delay={0.1}>
              <p>
                Hier entsteht unsere Projektübersicht. Wir arbeiten gerade
                daran, Ihnen unsere besten und aktuellsten Referenzen aus den
                Bereichen Webentwicklung, Marketing und KI-Automatisierung zu
                präsentieren.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="bg-white rounded-3xl p-12 text-center border border-black/5 shadow-sm max-w-4xl mx-auto mt-12 mb-24">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-black">
                Lassen Sie uns Ihr nächstes Projekt besprechen
              </h2>
              <p className="text-[#16101e]/80 mb-8 max-w-xl mx-auto">
                Sie haben bereits eine konkrete Idee oder benötigen
                unverbindliche Beratung zu den Möglichkeiten? Wir freuen uns auf
                den Austausch.
              </p>
              <Button href="/kontakt" variant="primary">
                Kontakt aufnehmen
              </Button>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
