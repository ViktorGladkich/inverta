import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

const automationServices = [
  {
    title: "Marketing Automation",
    desc: "Lead Nurturing und personalisierte Kampagnen, die Interessenten automatisch zu Kunden machen.",
    action: "Mehr Leads",
    href: "/marketing/lead-nurturing",
  },
  {
    title: "Sales Automation",
    desc: "Intelligente CRM-Workflows und Deal-Pipelines, die Ihren Vertrieb entlasten und Abschlüsse beschleunigen.",
    action: "Sales steigern",
    href: "/webentwicklung/crm",
  },
  {
    title: "Service Automation",
    desc: "KI-gestützte Chatbots und Support-Systeme für 24/7 Erreichbarkeit und zufriedene Kunden.",
    action: "Service skalieren",
    href: "/kontakt",
  },
  {
    title: "KI Automatisierung",
    desc: "Sparen Sie Zeit und Kosten durch intelligente Automatisierung von manuellen Aufgaben.",
    action: "Mehr erfahren",
    href: "/automatisierung/ki-automatisierung",
  },
];

export default function AutomationPage() {
  return (
    <>
      <main className="min-h-screen pt-32 pb-20 bg-white">
        {/* Intro */}
        <section className="container mx-auto px-4 md:px-6 mb-24">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[1.1]">
              Prozessautomatisierung <br />
              <span className="text-neutral-400">
                für skalierbares Wachstum.
              </span>
            </h1>
          </FadeIn>

          <div className="max-w-3xl text-lg md:text-xl leading-relaxed text-neutral-600 font-light">
            <FadeIn delay={0.1}>
              <p className="mb-8">
                Verbinden Sie Marketing, Vertrieb und Service durch intelligente
                Systeme. Wir automatisieren wiederkehrende Aufgaben, damit sich
                Ihr Team auf das Wesentliche konzentrieren kann: Ihre Kunden.
              </p>
              <Button href="/kontakt" variant="primary">
                Potenzialanalyse anfordern
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-neutral-50 py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationServices.map((s, index) => (
                <FadeIn
                  key={s.title}
                  delay={index * 0.1}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-start"
                >
                  <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                  <p className="text-neutral-500 mb-6 grow">{s.desc}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    href={s.href}
                    fullWidth
                    className="justify-between group mt-auto"
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
