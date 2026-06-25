export const GlobalSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": "https://invertadigital.de/#organization",
        name: "INVERTA DIGITAL",
        description:
          "INVERTA DIGITAL ist Ihre professionelle Agentur für Webentwicklung, Performance Marketing und KI-Automatisierung aus Dresden. Wir helfen Unternehmen im B2B- und B2C-Bereich, digital zu wachsen. Unser Fokus liegt auf der Entwicklung hochkonvertierender Websites und Onlineshops, maßgeschneiderten Softwarelösungen sowie effektiver Neukundengewinnung durch Google & Meta Ads. Mit datengetriebener Suchmaschinenoptimierung (SEO), innovativen Sales Funnels und intelligenter Prozessautomatisierung verwandeln wir Besucher in loyale Kunden. Egal ob Website-Relaunch, Lead-Generierung oder IT-Beratung – wir bieten ganzheitliche digitale Lösungen, die Ihren Umsatz messbar steigern.",
        url: "https://invertadigital.de",
        logo: {
          "@type": "ImageObject",
          url: "https://invertadigital.de/logo-inverta.png",
          width: 512,
          height: 512,
        },
        image: "https://invertadigital.de/logo-inverta.png",
        email: "info@invertadigital.de",
        telephone: "+49 176 70428834",
        priceRange: "€€",
        sameAs: [
          "https://www.instagram.com/invertadigital/",
          "https://www.facebook.com/profile.php?id=61588210421433",
          "https://www.linkedin.com/company/inverta-digital-de/",
          "https://x.com/invertadigital", // TODO: Update after X profile creation
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
          latitude: "51.0204",
          longitude: "13.7676",
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
            opens: "08:00",
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
