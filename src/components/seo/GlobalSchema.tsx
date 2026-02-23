"use client";

/**
 * GlobalSchema - Dynamic JSON-LD for Organization and LocalBusiness.
 * Helps Google link the brand identity to specific services.
 */
export const GlobalSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://invertadigital.de/#organization",
        name: "INVERTA DIGITAL",
        url: "https://invertadigital.de",
        logo: {
          "@type": "ImageObject",
          url: "https://invertadigital.de/logo.png",
        },
        sameAs: [
          "https://www.instagram.com/invertadigital/",
          "https://www.facebook.com/invertadigitall",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "info@invertadigital.de",
          contactType: "customer support",
          areaServed: "DE",
          availableLanguage: ["German", "English"],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://invertadigital.de/#localbusiness",
        name: "INVERTA DIGITAL",
        image: "https://invertadigital.de/logo.png",
        url: "https://invertadigital.de",
        email: "info@invertadigital.de",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rubensweg 1",
          addressLocality: "Dresden",
          addressRegion: "Sachsen",
          postalCode: "01217",
          addressCountry: "DE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "51.0268",
          longitude: "13.7333",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://invertadigital.de/#website",
        url: "https://invertadigital.de",
        name: "INVERTA DIGITAL",
        publisher: { "@id": "https://invertadigital.de/#organization" },
        inLanguage: "de-DE",
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
