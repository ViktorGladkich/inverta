"use client";

import { ServiceContent } from "@/data/services";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceSchema } from "./service-slug/ServiceSchema";
import { Hero } from "./service-slug/Hero";
import { BenefitsSection } from "./service-slug/BenefitsSection";
import { FeaturesAccordion } from "./service-slug/FeaturesAccordion";

/**
 * ServiceSlugClient - The main container for individual service pages.
 * Optimized for SEO and mobile performance.
 */
export function ServiceSlugClient({
  service,
  categoryLabel,
}: {
  service: ServiceContent;
  categoryLabel: string;
}) {
  return (
    <article className="bg-white">
      {/* JSON-LD Schema for Google Service Listings */}
      <ServiceSchema service={service} />

      {/* 1. Hero: Title and Visual Intro */}
      <Hero service={service} categoryLabel={categoryLabel} />

      {/* 2. Benefits: Horizontal Scroll (Desktop) / Vertical Stack (Mobile) */}
      <BenefitsSection benefits={service.benefits} />

      {/* 3. Methodology: Detailed features accordion */}
      <FeaturesAccordion features={service.features} />

      {/* 4. Conversion Area: Call to Action */}
      <aside className="bg-[#f5f5f5] pt-20">
        <CTASection />
      </aside>
    </article>
  );
}
