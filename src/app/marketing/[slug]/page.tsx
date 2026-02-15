import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { SERVICES, getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service || service.category !== "marketing") {
    return {
      title: "Marketing | INVERTA",
    };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

export async function generateStaticParams() {
  return SERVICES.filter((s) => s.category === "marketing").map((service) => ({
    slug: service.slug,
  }));
}

export default async function MarketingServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service || service.category !== "marketing") {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-white">
        {/* Detail Hero */}
        <section className="container mx-auto px-4 md:px-6 mb-24">
          <FadeIn>
            <div className="inline-block rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm text-neutral-500 mb-6">
              Marketing
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[1.1]">
              {service.title}
            </h1>
          </FadeIn>

          <div className="max-w-3xl text-lg md:text-xl leading-relaxed text-neutral-600 font-light">
            <FadeIn delay={0.1}>
              <p className="mb-8">{service.heroText}</p>
              <Button href="/kontakt" variant="primary">
                Jetzt anfragen
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-neutral-900 text-white py-24 mb-24 rounded-3xl mx-4 md:mx-6">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-12">Ihre Vorteile</h2>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.benefits.map((benefit, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="h-1 bg-white mb-6 w-12" />
                  <p className="text-xl font-medium">{benefit}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Deep Dive Features */}
        <section className="container mx-auto px-4 md:px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <FadeIn>
                <h2 className="text-3xl font-bold sticky top-32">
                  Unser Ansatz
                </h2>
              </FadeIn>
            </div>
            <div className="md:col-span-2 space-y-16">
              {service.features.map((feature, index) => (
                <FadeIn key={index} delay={0.1 * index}>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-neutral-500 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Starten Sie jetzt durch.
            </h2>
            <p className="text-lg text-neutral-500 mb-8 max-w-xl mx-auto">
              Lassen Sie keine Zeit verstreichen. Optimieren Sie Ihr Marketing
              mit INVERTA.
            </p>
            <Button size="lg" variant="primary" asChild href="/kontakt">
              Kostenloses Erstgespräch
            </Button>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
