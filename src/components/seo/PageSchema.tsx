"use client";

/**
 * PageSchema - Dynamic JSON-LD for generic pages like About, Contact, etc.
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
        name: name,
        description: description,
        url: url,
        publisher: { "@id": "https://invertadigital.de/#organization" },
      },
      crumbs && {
        "@type": "BreadcrumbList",
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
