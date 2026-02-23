import { Footer } from "@/components/layout/Footer";
import { getServiceBySlug, SERVICES } from "@/data/services";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ServiceSlugClient } from "@/components/sections/ServiceSlugClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service || service.category !== "automatisierung") {
    return {
      title: "Automatisierung | INVERTA",
    };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

export async function generateStaticParams() {
  return SERVICES.filter((s) => s.category === "automatisierung").map(
    (service) => ({
      slug: service.slug,
    }),
  );
}

export default async function AutomatisierungServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service || service.category !== "automatisierung") {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen z-10 relative">
        <ServiceSlugClient
          service={service}
          categoryLabel="KI Automatisierung"
        />
      </main>
      <Footer />
    </>
  );
}
