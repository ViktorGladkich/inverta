export type ServiceContent = {
  slug: string;
  category: "marketing" | "webentwicklung";
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  heroText: string;
  benefits: string[];
  features: {
    title: string;
    description: string;
  }[];
};

export const SERVICES: ServiceContent[] = [
  // MARKETING
  {
    slug: "neukundengewinnung",
    category: "marketing",
    title: "Neukundengewinnung",
    description: "Strategien, die aus Besuchern loyale Kunden machen.",
    seoTitle:
      "Neukundengewinnung & Lead Generierung | INVERTA Marketing Agentur",
    seoDescription:
      "Steigern Sie Ihre Umsätze mit gezielten Kampagnen zur Neukundengewinnung. Wir optimieren Ihren Sales-Funnel für maximale Conversion.",
    heroText:
      "Verwandeln Sie Interesse in Umsatz. Wir entwickeln Kampagnen, die Ihre Zielgruppe nicht nur erreichen, sondern überzeugen.",
    benefits: [
      "Höhere Conversion-Raten",
      "Qualifizierte Leads",
      "Skalierbare Prozesse",
      "Messbarer ROI",
    ],
    features: [
      {
        title: "Zielgruppenanalyse",
        description:
          "Wir identifizieren Ihre idealen Kunden und sprechen sie dort an, wo sie sich aufhalten.",
      },
      {
        title: "Funnel-Optimierung",
        description:
          "Vom ersten Klick bis zum Kauf: Wir optimieren jeden Schritt der Customer Journey.",
      },
      {
        title: "Performance Ads",
        description:
          "Google Ads, Meta Ads & LinkedIn: Wir schalten Kampagnen, die Ergebnisse liefern.",
      },
    ],
  },
  {
    slug: "seo",
    category: "marketing",
    title: "Suchmaschinenoptimierung (SEO)",
    description: "Dominieren Sie die Suchergebnisse und werden Sie gefunden.",
    seoTitle: "Professionelle SEO Agentur | Top Rankings bei Google | INVERTA",
    seoDescription:
      "Nachhaltige Suchmaschinenoptimierung für mehr organischen Traffic. OnPage, OffPage und technisches SEO aus einer Hand.",
    heroText:
      "Wer nicht gefunden wird, existiert nicht. Wir bringen Ihre Website auf die vorderen Plätze bei Google & Co.",
    benefits: [
      "Nachhaltige Sichtbarkeit",
      "Kostenloser Traffic",
      "Expertenstatus",
      "Langfristiger Wettbewerbsvorteil",
    ],
    features: [
      {
        title: "Technisches SEO",
        description:
          "Wir sorgen dafür, dass Ihre Seite von Suchmaschinen perfekt crawlbare und indizierbare ist.",
      },
      {
        title: "Content Marketing",
        description:
          "Hochwertige Inhalte, die Ihre Nutzer informieren und Suchmaschinen überzeugen.",
      },
      {
        title: "Local SEO",
        description:
          "Werden Sie in Ihrer Region zur Nummer 1 für Ihre Dienstleistung.",
      },
    ],
  },
  {
    slug: "social-media",
    category: "marketing",
    title: "Social Media Marketing",
    description:
      "Bauen Sie eine Marke, die in den sozialen Medien geliebt wird.",
    seoTitle: "Social Media Agentur | Strategie & Content | INVERTA",
    seoDescription:
      "Professionelles Social Media Marketing für Facebook, Instagram & LinkedIn. Wir steigern Ihre Reichweite und Interaktion.",
    heroText:
      "Mehr als nur Likes. Wir nutzen Social Media als kraftvollen Kanal für Markenaufbau und Kundenbindung.",
    benefits: [
      "Starke Markenbindung",
      "Direkter Kundenkontakt",
      "Virales Potenzial",
      "Employer Branding",
    ],
    features: [
      {
        title: "Content Creation",
        description:
          "Hochwertige Posts, Reels und Stories, die Ihre Community begeistern.",
      },
      {
        title: "Community Management",
        description:
          "Wir interagieren mit Ihren Followern und stärken das Vertrauen in Ihre Marke.",
      },
      {
        title: "Influencer Marketing",
        description:
          "Nutzen Sie die Reichweite etablierter Persönlichkeiten für Ihre Marke.",
      },
    ],
  },
  {
    slug: "ladezeitoptimierung",
    category: "marketing",
    title: "Ladezeitoptimierung",
    description:
      "Geschwindigkeit konvertiert. Wir machen Ihre Seite blitzschnell.",
    seoTitle: "Ladezeitoptimierung & Page Speed | Schnelle Websites | INVERTA",
    seoDescription:
      "Optimieren Sie Ihre Ladezeiten für bessere Google-Rankings und höhere Conversion-Raten. Professioneller Page Speed Service.",
    heroText:
      "Jede Millisekunde zählt. Schnelle Websites ranken besser und verkaufen mehr.",
    benefits: [
      "Besseres Google-Ranking",
      "Geringere Absprungrate",
      "Höhere Kundenzufriedenheit",
      "Mehr Conversions",
    ],
    features: [
      {
        title: "Code-Minifizierung",
        description: "Wir entschlacken Ihren Code für maximale Performance.",
      },
      {
        title: "Bildoptimierung",
        description:
          "Verlustfreie Komprimierung und moderne Formate wie WebP/AVIF.",
      },
      {
        title: "Server-Optimierung",
        description:
          "Caching-Strategien und CDN-Anbindung für weltweite Geschwindigkeit.",
      },
    ],
  },
  {
    slug: "support",
    category: "marketing", // Keeping under marketing/general or move to separate if needed, but overview has it under marketing/general list
    title: "Support & Wartung",
    description:
      "Keine Downtime, immer aktuell. Wir kümmern uns um Ihre Technik.",
    seoTitle: "WordPress Wartung & Website Support | INVERTA",
    seoDescription:
      "Zuverlässiger Support und Wartung für Ihre Website. Updates, Backups und schnelle Hilfe bei Problemen.",
    heroText:
      "Konzentrieren Sie sich auf Ihr Geschäft. Wir kümmern uns darum, dass Ihre Website läuft – sicher, schnell und immer aktuell.",
    benefits: [
      "Tägliche Backups",
      "Uptime-Monitoring",
      "Schnelle Reaktionszeit",
      "Keine Sicherheitslücken",
    ],
    features: [
      {
        title: "Update-Service",
        description:
          "Wir halten CMS, Plugins und Themes immer auf dem neuesten Stand.",
      },
      {
        title: "Sicherheitsscans",
        description: "Regelmäßige Prüfung auf Malware und Schwachstellen.",
      },
      {
        title: "Inhaltspflege",
        description:
          "Auf Wunsch übernehmen wir auch kleine Änderungen an Texten und Bildern.",
      },
    ],
  },

  // WEBENTWICKLUNG
  {
    slug: "website",
    category: "webentwicklung",
    title: "Website | Onlineshop",
    description:
      "Individuelle Designs und Shop-Systeme für maximale Conversion.",
    seoTitle: "Professionelle Website & Onlineshop Erstellung | INVERTA",
    seoDescription:
      "Wir entwickeln moderne Websites und leistungsstarke Onlineshops. Responsiv, schnell und conversion-optimiert.",
    heroText:
      "Ihr digitales Aushängeschild. Wir entwickeln Websites und Shops, die nicht nur gut aussehen, sondern verkaufen.",
    benefits: [
      "Einzigartiges Design",
      "Mobile First",
      "Einfache Pflege",
      "Conversion-Fokus",
    ],
    features: [
      {
        title: "Modernes UI/UX Design",
        description:
          "Benutzerfreundliche Oberflächen, die intuitiv zu bedienen sind.",
      },
      {
        title: "E-Commerce Lösungen",
        description:
          "Skalierbare Shopsysteme (Shopify, WooCommerce, Custom) für Ihren Erfolg.",
      },
      {
        title: "CMS Integration",
        description:
          "Verwalten Sie Ihre Inhalte einfach selbst mit modernen Headless CMS.",
      },
    ],
  },
  {
    slug: "relaunch",
    category: "webentwicklung",
    title: "Website Relaunch",
    description:
      "Verleihen Sie Ihrer bestehenden Seite neuen Glanz und moderne Technik.",
    seoTitle: "Website Relaunch Agentur | Modernisierung & Redesign | INVERTA",
    seoDescription:
      "Professioneller Relaunch Ihrer Website. Modernes Design, bessere Technik und SEO-Erhalt garantiert.",
    heroText:
      "Zeit für etwas Neues? Wir bringen Ihre veraltete Website technologisch und optisch in die Zukunft.",
    benefits: [
      "Modernster Tech-Stack",
      "Frisches Design",
      "SEO-Migration",
      "Zukunftssicherheit",
    ],
    features: [
      {
        title: "Bestandsanalyse",
        description:
          "Wir prüfen Ihre aktuelle Seite auf Schwachstellen und Potenziale.",
      },
      {
        title: "Sichere Migration",
        description:
          "Kein Ranking-Verlust: Wir leiten alle alten URLs sauber auf die neuen Strukturen um.",
      },
      {
        title: "Neuester Standard",
        description:
          "Wir nutzen aktuelle Frameworks wie Next.js für maximale Performance.",
      },
    ],
  },
  {
    slug: "funnels",
    category: "webentwicklung",
    title: "Funnelsysteme",
    description: "Automatisierte Verkaufsprozesse, die Ihren Umsatz skalieren.",
    seoTitle: "Sales Funnel & Marketing Automation | INVERTA",
    seoDescription:
      "Automatisierte Funnelsysteme zur Leadgenerierung und Verkaufsförderung. Skalieren Sie Ihren Vertrieb digital.",
    heroText:
      "Automatisieren Sie Ihren Vertrieb. Unsere Funnels führen Besucher gezielt zum Abschluss.",
    benefits: [
      "Automatisierte Leads",
      "24/7 Vertrieb",
      "Qualifizierte Anfragen",
      "Skalierbarkeit",
    ],
    features: [
      {
        title: "Landingpage Design",
        description:
          "Hochkonvertierende Landingpages, die genau auf Ihre Zielgruppe zugeschnitten sind.",
      },
      {
        title: "E-Mail Automation",
        description:
          "Nurturing-Kampagnen, die Interessenten automatisch zu Kunden entwickeln.",
      },
      {
        title: "CRM Integration",
        description:
          "Nahtlose Anbindung an Ihr bestehendes Customer Relationship Management.",
      },
    ],
  },
  {
    slug: "programmierung",
    category: "webentwicklung",
    title: "Individuelle Programmierung",
    description:
      "Spezielle Anforderungen? Wir entwickeln maßgeschneiderte Softwarelösungen.",
    seoTitle: "Individuelle Webentwicklung & Softwarelösungen | INVERTA",
    seoDescription:
      "Maßgeschneiderte Webanwendungen und Softwarelösungen für komplexe Anforderungen. Full-Stack Development.",
    heroText:
      "Standardlösungen reichen oft nicht. Wir entwickeln Software, die exakt auf Ihre Prozesse zugeschnitten ist.",
    benefits: [
      "Passgenaue Lösung",
      "Volle Kontrolle",
      "Hohe Sicherheit",
      "Erweiterbarkeit",
    ],
    features: [
      {
        title: "Web Applikationen",
        description:
          "Komplexe Anwendungen, die im Browser laufen wie native Software.",
      },
      {
        title: "API Entwicklung",
        description:
          "Schnittstellen zur Verbindung verschiedener Systeme und Dienste.",
      },
      {
        title: "Datenbank Design",
        description:
          "Performante und sichere Datenstrukturen für Ihr Business.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
