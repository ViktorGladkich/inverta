"use client";

import { ServiceContent } from "@/data/services";

export const ServiceSchema = ({ service }: { service: ServiceContent }) => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: service.seoDescription,
        provider: {
          "@type": "LocalBusiness",
          name: "INVERTA DIGITAL",
          url: "https://invertadigital.de",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dresden",
            addressRegion: "Sachsen",
            postalCode: "01217",
            streetAddress: "Rubensweg 1",
            addressCountry: "DE",
          },
        },
        areaServed: "DE",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital Services",
          itemListElement: service.features.map((f) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: f.title,
              description: f.description,
            },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://invertadigital.de",
          },
          {
            "@type": "ListItem",
            position: 2,
            name:
              service.category.charAt(0).toUpperCase() +
              service.category.slice(1),
            item: `https://invertadigital.de/${service.category}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `https://invertadigital.de/${service.category}/${service.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
