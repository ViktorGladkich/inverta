import { Footer } from "@/components/layout/Footer";
import { SERVICES, getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ServiceSlugClient } from "@/components/sections/ServiceSlugClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service || service.category !== "webentwicklung") {
    return {
      title: "Webentwicklung | INVERTA",
    };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

export async function generateStaticParams() {
  return SERVICES.filter((s) => s.category === "webentwicklung").map(
    (service) => ({
      slug: service.slug,
    }),
  );
}

export default async function WebentwicklungServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service || service.category !== "webentwicklung") {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen z-10 relative">
        <ServiceSlugClient service={service} categoryLabel="Webentwicklung" />
      </main>
      <Footer />
    </>
  );
}
