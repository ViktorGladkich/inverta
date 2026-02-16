import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

const devServices = [
  {
    title: "Website | Onlineshop",
    desc: "Individuelle Designs und Shop-Systeme für maximale Conversion.",
    action: "Designs ansehen",
    href: "/webentwicklung/website",
  },
  {
    title: "Funnelsysteme",
    desc: "Automatisierte Verkaufsprozesse, die Ihren Umsatz skalieren.",
    action: "Mehr Leads",
    href: "/webentwicklung/funnels",
  },
  {
    title: "Relaunch",
    desc: "Verleihen Sie Ihrer bestehenden Seite neuen Glanz und moderne Technik.",
    action: "Upgrade",
    href: "/webentwicklung/relaunch",
  },
  {
    title: "Individuelle Programmierung",
    desc: "Spezielle Anforderungen? Wir entwickeln maßgeschneiderte Softwarelösungen.",
    action: "Consulting",
    href: "/webentwicklung/programmierung",
  },
];

export default function WebentwicklungPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-white">
        {/* Intro */}
        <section className="container mx-auto px-4 md:px-6 mb-24">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[1.1]">
              Webentwicklung <br />
              <span className="text-neutral-400">auf höchstem Niveau.</span>
            </h1>
          </FadeIn>

          <div className="max-w-3xl text-lg md:text-xl leading-relaxed text-neutral-600 font-light">
            <FadeIn delay={0.1}>
              <p className="mb-8">
                Performant, skalierbar und ästhetisch anspruchsvoll. Wir nutzen
                modernste Technologien wie Next.js und React, um digitale
                Erlebnisse zu schaffen, die begeistern.
              </p>
              <Button href="/kontakt" variant="primary">
                Tech-Stack besprechen
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-neutral-50 py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devServices.map((s, index) => (
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
