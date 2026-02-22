export interface Project {
  id: number;
  number: string;
  slug: string;
  label: string;
  title: string;
  category: string;
  description: string;
  image: string;
  services: string[];
  challenge?: string;
  solution?: string;
  results?: { label: string; value: string }[];
  websiteUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    number: "01",
    slug: "vanturahandwerk",
    label: "VANTURA-HANDWERK",
    title: "Premium Handwerkskunst",
    category: "Webentwicklung & Branding",
    description:
      "Individuelle Multi-Page-Website für Komplettsanierung. Ein einzigartiges Design, das die Qualität der Handwerksleistungen digital erlebbar macht.",
    image: "/images/projects/vanturahandwerk.jpeg",
    services: ["Webdesign", "UI/UX Design", "SEO"],
    challenge:
      "Eine nicht-schablonenhafte digitale Präsenz für ein traditionelles Handwerksunternehmen schaffen, die Premium-Qualität ausstrahlt.",
    solution:
      "Entwicklung einer individuellen Multi-Page-Website mit maßgeschneidertem Design, das die verschiedenen Leistungsbereiche (Sanierung, Innenausbau, Trockenbau, Sanitär) übersichtlich und ansprechend präsentiert.",
    results: [
      { label: "Design", value: "100% Individuell" },
      { label: "Leistungsbereiche", value: "6+" },
    ],
    websiteUrl: "https://vantura-handwerk.vercel.app/",
  },
  {
    id: 2,
    number: "02",
    slug: "ma-bau-gmbh",
    label: "MA Bau GmbH",
    title: "Bau & Solarenergie",
    category: "Full-Service Digital Presence",
    description:
      "Umfassender Relaunch inklusive Solar-Sparte. Maßgeschneiderte Lösung für Sanierung, Innenausbau und energetische Systeme der Zukunft.",
    image: "/images/projects/ma-bau-gmbh.jpeg",
    services: ["Webentwicklung", "Corporate Design", "Content Creation"],
    challenge:
      "Zusammenführung klassischer Baudienstleistungen mit zukunftsorientierter Solartechnik in einer kohärenten digitalen Identität.",
    solution:
      "Ein strukturierter Web-Auftritt, der sowohl Bauherren als auch Interessenten für erneuerbare Energien gezielt anspricht und durch ein klares Navigationskonzept überzeugt.",
    results: [
      { label: "Sektoren", value: "2 Hauptbranchen" },
      { label: "Lead-Qualität", value: "+45%" },
    ],
    websiteUrl: "https://mabaugmbh.de/",
  },
  {
    id: 3,
    number: "03",
    slug: "nexora-digital",
    label: "NEXORA Digital",
    title: "High-Performance IT & Web",
    category: "Growth & Automation",
    description:
      "Umfassender Relaunch für eine IT-Agentur. Eine maßgeschneiderte Plattform, die technische Expertise mit modernem Branding vereint.",
    image: "/images/projects/nexora.jpeg",
    services: ["Funnels", "Performance Marketing", "Webdesign"],
    challenge:
      "Die technische Expertise einer IT-Agentur in ein modernes, konversionsstarkes Gewand zu verpacken, das sich vom Wettbewerb abhebt.",
    solution:
      "Kreierung einer High-Performance-Website mit State-of-the-Art Animationen, klaren Call-to-Actions und optimierten Funnels zur Neukundengewinnung.",
    results: [
      { label: "Service-Module", value: "5+" },
      { label: "Performance-Boost", value: "300%" },
    ],
    websiteUrl: "https://nexora-smoky-omega.vercel.app/",
  },
  {
    id: 4,
    number: "04",
    slug: "ass-security",
    label: "A.S.S. Security",
    title: "Sicherheit & Vertrauen",
    category: "One-Page Strategy",
    description:
      "Fokussierter One-Pager für Sicherheitsdienstleistungen. Klares, vertrauensbildendes Design für maximale Konversion und Kundenvertrauen.",
    image: "/images/projects/ass-security.jpeg",
    services: ["One-Page Design", "Copywriting", "Cro (Conversion Rate Opt.)"],
    challenge:
      "Ein vertrauensvolles und seriöses Design für Objekt- & Personenschutz zu entwickeln, das sofort überzeugt und unkomplizierte Kontaktmöglichkeiten bietet.",
    solution:
      "Ein fokussierter One-Pager mit prägnanten Aussagen, klarem Strukturaufbau und sofortiger Sichtbarkeit der wichtigsten Sicherheitszertifikate.",
    results: [
      { label: "Erreichbarkeit", value: "24/7" },
      { label: "Fokus & Vertrauen", value: "100%" },
    ],
    websiteUrl: "https://www.ass-security.de/",
  },
  {
    id: 5,
    number: "05",
    slug: "brand-identity",
    label: "Brand Identity",
    title: "Strategisches Branding",
    category: "Corporate Design & Strategie",
    description:
      "Entwicklung einer unverwechselbaren Markenidentität. Von Logo-Design bis hin zu umfassenden Styleguides, die im Gedächtnis bleiben.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2000",
    services: ["Logo Design", "Brand Guidelines", "Visual Identity"],
    challenge:
      "Eine ausdrucksstarke und kohärente visuelle Identität zu schaffen, die die Markenwerte über alle Touchpoints hinweg konsistent kommuniziert.",
    solution:
      "Tiefgreifende Markenworkshops gefolgt von der iterativen Entwicklung eines umfassenden Corporate Designs inkl. detailliertem Brand Book.",
    results: [
      { label: "Brand Recall", value: "+80%" },
      { label: "Design Assets", value: "120+" },
    ],
  },
  {
    id: 6,
    number: "06",
    slug: "system-logic",
    label: "System Logic",
    title: "Backend Architektur & Datensysteme",
    category: "Cloud & Architektur",
    description:
      "Konzepte und Implementierung robuster, skalierbarer Backend-Architekturen zur Unterstützung komplexer Geschäftsprozesse.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000",
    services: ["Systemarchitektur", "API Design", "Datenbankoptimierung"],
    challenge:
      "Strukturierung und Optimierung komplexer Datenflüsse, um Engpässe zu beseitigen und absolute Skalierbarkeit zu gewährleisten.",
    solution:
      "Konzeptionierung einer Microservices-Architektur basierend auf cloud-nativen Technologien, unterstützt durch ein performantes API-Gateway.",
    results: [
      { label: "Latenz", value: "-40%" },
      { label: "Uptime", value: "99.99%" },
    ],
  },
  {
    id: 7,
    number: "07",
    slug: "ki-automatisierung",
    label: "KI Automatisierung",
    title: "Intelligente Workflows",
    category: "AI & Automation",
    description:
      "Integration von Künstlicher Intelligenz in bestehende Geschäftsprozesse. Maximierung der Effizienz und Reduktion manueller Fehler.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000",
    services: ["Machine Learning", "Workflow Automation", "NLP Integration"],
    challenge:
      "Identifizierung zeitaufwändiger, repetitiver Prozesse und deren Überführung in vollautomatische, intelligente Workflows ohne Betriebsunterbrechung.",
    solution:
      "Implementierung state-of-the-art KI-Modelle, die nahtlos in aktuelle CRM- und ERP-Systeme integriert wurden, um Datenverarbeitung und Kunden-Support zu automatisieren.",
    results: [
      { label: "Zeitersparnis", value: "35h/Woche" },
      { label: "Fehlerquote", value: "< 1%" },
    ],
  },
];
