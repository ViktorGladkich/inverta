export type ServiceContent = {
  slug: string;
  category: "marketing" | "webentwicklung" | "automatisierung";
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
    seoTitle: "Neukundengewinnung & B2B Lead Generierung Agentur | INVERTA",
    seoDescription:
      "Automatisierte Neukundengewinnung für Unternehmen. Wir entwickeln hochkonvertierende Sales Funnels und Strategien zur Lead-Generierung in Dresden & Deutschland.",
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
    title: "Suchmaschinenoptimierung",
    description: "Dominieren Sie die Suchergebnisse und werden Sie gefunden.",
    seoTitle:
      "SEO Agentur Dresden | Suchmaschinenoptimierung & Top Rankings | INVERTA",
    seoDescription:
      "Ihre Experten für Suchmaschinenoptimierung in Dresden. Wir steigern Ihre Sichtbarkeit, Klicks und Umsätze durch nachhaltige Google-Strategien.",
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
    seoTitle:
      "Social Media Agentur Dresden | Strategie, Reichweite & Social Ads | INVERTA",
    seoDescription:
      "Professionelles Social Media Marketing in Dresden. Wir betreuen Ihre Kanäle auf Instagram, Facebook & LinkedIn für mehr Sichtbarkeit und Kundenbindung.",
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
      {
        title: "Analyse & Erfolgskontrolle",
        description:
          "Wir überwachen alle wichtigen Kennzahlen, um Ihre Strategie kontinuierlich zu optimieren.",
      },
    ],
  },
  {
    slug: "ladezeitoptimierung",
    category: "marketing",
    title: "Ladezeitoptimierung",
    description:
      "Geschwindigkeit konvertiert. Wir machen Ihre Seite blitzschnell.",
    seoTitle:
      "Ladezeitoptimierung & Google Core Web Vitals | PageSpeed Agentur | INVERTA",
    seoDescription:
      "Wir machen Ihre Website blitzschnell! Professionelle Ladezeitoptimierung für bessere Google-Rankings (Core Web Vitals) und höhere Conversion-Raten.",
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
    seoTitle:
      "WordPress Wartung & professioneller Website Support | Agentur INVERTA",
    seoDescription:
      "Zuverlässiger Web-Support & Wartungsservice. Wir kümmern uns um Updates, Backups und Sicherheit, damit Ihre Website immer perfekt läuft.",
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
    seoTitle:
      "Website Erstellung & professionelle Onlineshops | Agentur INVERTA",
    seoDescription:
      "Wir bauen High-End Websites und Onlineshops mit Fokus auf Design & Conversion. Professionelle Webentwicklung in Dresden für Ihr digitales Wachstum.",
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
    seoTitle:
      "Website Relaunch & Modernisierung | Neue Technik & SEO Erhalt | INVERTA",
    seoDescription:
      "Planen Sie einen Website Relaunch? Wir übernehmen das Redesign und die technische Migration ohne Ranking-Verluste. Modern, schnell & sicher.",
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
    seoTitle:
      "Sales Funnel Erstellung & Marketing Automatisierung | Agentur INVERTA",
    seoDescription:
      "Automatisierte Funnelsysteme zur Lead-Generierung. Wir bauen Verkaufs-Funnels, die Ihre Kundenreise optimieren und den Umsatz skalieren.",
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
    seoTitle:
      "Individuelle Webentwicklung & Softwarelösungen Dresden | INVERTA",
    seoDescription:
      "Maßgeschneiderte Webanwendungen und Enterprise-Software. Wir programmieren individuelle Lösungen für komplexe Anforderungen in Dresden.",
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
  // AUTOMATISIERUNG
  {
    slug: "ki-automatisierung",
    category: "automatisierung",
    title: "KI Automatisierung",
    description:
      "Sparen Sie Zeit und Kosten durch intelligente Automatisierung von Geschäftsprozessen.",
    seoTitle:
      "KI Automatisierung für Unternehmen | AI Consulting & Integration | INVERTA",
    seoDescription:
      "Integrieren Sie Künstliche Intelligenz (ChatGPT, AI-Workflows) in Ihre Business-Prozesse. Wir automatisieren Routineaufgaben und sparen Zeit.",
    heroText:
      "Entlasten Sie Ihr Team von Routineaufgaben. Wir integrieren Künstliche Intelligenz in Ihren Alltag, damit Sie sich auf das Wesentliche konzentrieren können.",
    benefits: [
      "Höhere Effizienz",
      "Kostenreduktion",
      "24/7 Verfügbarkeit",
      "Fehlerminimierung",
    ],
    features: [
      {
        title: "Intelligente Chatbots",
        description:
          "Wir entwickeln KI-gestützte Assistenten für Ihren Kundensupport und Vertrieb.",
      },
      {
        title: "Workflow-Automatisierung",
        description:
          "Verbinden Sie Ihre Software-Tools und lassen Sie Daten automatisch übertragen (z.B. mit Make oder Zapier).",
      },
      {
        title: "Mitarbeiter-Training",
        description:
          "Wir schulen Ihr Team im effizienten Umgang mit ChatGPT und anderen KI-Tools zur Produktivitätssteigerung.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
