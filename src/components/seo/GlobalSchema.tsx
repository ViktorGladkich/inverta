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
          width: 512,
          height: 512,
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

        knowsAbout: [
          "Webentwicklung",
          "Performance Marketing",
          "SEO",
          "Google Ads",
          "Social Media Marketing",
          "KI Automatisierung",
          "UI/UX Design",
          "Next.js Entwicklung",
        ],
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://invertadigital.de/#localbusiness",
        name: "INVERTA DIGITAL",
        image: "https://invertadigital.de/logo.png",
        url: "https://invertadigital.de",
        email: "info@invertadigital.de",
        telephone: "+49-176-70428834",
        priceRange: "€€",
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
        areaServed: [
          {
            "@type": "City",
            name: "Dresden",
          },
          {
            "@type": "Country",
            name: "Deutschland",
          },
        ],

        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digitale Dienstleistungen",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Webentwicklung",
                description:
                  "Professionelle Webentwicklung mit Next.js und React",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Performance Marketing",
                description:
                  "Google Ads, SEO und Social Media Marketing für messbare Ergebnisse",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "KI & Automatisierung",
                description:
                  "Intelligente Automatisierungslösungen für Ihr Unternehmen",
              },
            },
          ],
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://invertadigital.de/#website",
        url: "https://invertadigital.de",
        name: "INVERTA DIGITAL",
        description:
          "Digitalagentur für Webentwicklung, Performance Marketing und KI-Automatisierung aus Dresden",
        publisher: { "@id": "https://invertadigital.de/#organization" },
        inLanguage: "de-DE",

        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://invertadigital.de/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
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
