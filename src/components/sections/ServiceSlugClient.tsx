"use client";

import { ServiceContent } from "@/data/services";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceSchema } from "./service-slug/ServiceSchema";
import { Hero } from "./service-slug/Hero";
import { BenefitsSection } from "./service-slug/BenefitsSection";
import { FeaturesAccordion } from "./service-slug/FeaturesAccordion";

export function ServiceSlugClient({
  service,
  categoryLabel,
}: {
  service: ServiceContent;
  categoryLabel: string;
}) {
  return (
    <article className="relative bg-white">
      <ServiceSchema service={service} />

      <Hero service={service} categoryLabel={categoryLabel} />

      <BenefitsSection benefits={service.benefits} />

      <FeaturesAccordion features={service.features} />
      

      {/* 4. Conversion Area: Call to Action */}
      <aside className="bg-[#f5f5f5] pt-20">
        <CTASection />
      </aside>
    </article>
  );
}
