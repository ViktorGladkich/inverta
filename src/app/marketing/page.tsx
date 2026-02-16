
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

const services = [
  {
    title: "Neukundengewinnung",
    desc: "Strategien, die aus Besuchern loyale Kunden machen.",
    action: "Mehr erfahren",
    href: "/marketing/neukundengewinnung",
  },
  {
    title: "Suchmaschinenoptimierung (SEO)",
    desc: "Dominieren Sie die Suchergebnisse und werden Sie gefunden.",
    action: "SEO Guide",
    href: "/marketing/seo",
  },
  {
    title: "Social Media",
    desc: "Bauen Sie eine Marke, die in den sozialen Medien geliebt wird.",
    action: "Kanäle ansehen",
    href: "/marketing/social-media",
  },
  {
    title: "Ladezeitoptimierung",
    desc: "Geschwindigkeit konvertiert. Wir machen Ihre Seite blitzschnell.",
    action: "Speed Check",
    href: "/marketing/ladezeitoptimierung",
  },
  {
    title: "Support & Wartung",
    desc: "Keine Downtime, immer aktuell. Wir kümmern uns um Ihre Technik.",
    action: "Pläne",
    href: "/marketing/support",
  },
];

export default function MarketingPage() {
  return (
    <>
      
      <main className="min-h-screen pt-32 pb-20 bg-white">
        {/* Intro */}
        <section className="container mx-auto px-4 md:px-6 mb-24">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[1.1]">
              Marketing, das <br />
              <span className="text-neutral-400">wirklich funktioniert.</span>
            </h1>
          </FadeIn>

          <div className="max-w-3xl text-lg md:text-xl leading-relaxed text-neutral-600 font-light">
            <FadeIn delay={0.1}>
              <p className="mb-8">
                Kein Hokuspokus, nur harte Fakten und messbare Resultate. Wir
                verstehen, wie Aufmerksamkeit funktioniert und wie man sie
                monetarisiert.
              </p>
              <Button href="/kontakt" variant="primary">
                Kostenlose Analyse anfordern
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-neutral-50 py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s, index) => (
                <FadeIn
                  key={s.title}
                  delay={index * 0.1}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                  <p className="text-neutral-500 mb-6 grow">{s.desc}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    href={s.href}
                    fullWidth
                    className="justify-between group"
                  >
                    {s.action}
                  </Button>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
