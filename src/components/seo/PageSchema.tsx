/**
 * PageSchema - Dynamic JSON-LD for generic pages like About, Contact, etc.
 * Server component — no "use client" needed for static data.
 */
export const PageSchema = ({
  type,
  name,
  description,
  url,
  crumbs,
}: {
  type: "AboutPage" | "ContactPage" | "WebPage";
  name: string;
  description: string;
  url: string;
  crumbs?: { name: string; item: string }[];
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": `${url}#webpage`,
        name,
        description,
        url,
        inLanguage: "de-DE",
        // Связывает страницу с сайтом
        isPartOf: {
          "@id": "https://invertadigital.de/#website",
        },
        // Связывает с организацией
        publisher: {
          "@id": "https://invertadigital.de/#organization",
        },
      },
      crumbs && {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://invertadigital.de",
          },
          ...crumbs.map((crumb, i) => ({
            "@type": "ListItem",
            position: i + 2,
            name: crumb.name,
            item: crumb.item,
          })),
        ],
      },
    ].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
