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
    id: 12,
    number: "01",
    slug: "prosecure",
    label: "PROSECURE",
    title: "Digitale Exzellenz für die Sicherheitsbranche",
    category: "High-End Webdesign & Branding",
    description:
      "Eine Plattform, die über das Standard-Webdesign hinausgeht. High-End-Ästhetik trifft auf Funktionalität – denn Sicherheit braucht keine Erklärungen, sie muss sich richtig anfühlen.",
    image: "/images/projects/prosecure.png",
    services: ["GSAP Animationen", "Interactive Storytelling", "Mobile-First Architektur"],
    challenge:
      "In der Sicherheitsbranche ist Vertrauen die wichtigste Währung. Die Herausforderung bestand darin, dieses Vertrauen digital durch ein Design zu vermitteln, das Sicherheit nicht nur erklärt, sondern fühlbar macht.",
    solution:
      "Entwicklung einer minimalistischen Plattform mit Interactive Storytelling durch gezielte GSAP-Animationen und einer Mobile-First Architektur, die den hohen Qualitätsanspruch von ProSecure widerspiegelt.",
    results: [
      { label: "Visuelle Wirkung", value: "Maximal" },
      { label: "Performance", value: "High-End" },
    ],
    websiteUrl: "https://www.prosecuresecurity.de/",
  },
  {
    id: 1,
    number: "02",
    slug: "milly-modest-fashion",
    label: "MILLY",
    title: "Modest Fashion E-Commerce",
    category: "E-Commerce & Webdesign",
    description:
      "Ein exklusiver Online-Shop für Modest Fashion. Modernes Design trifft auf ein reibungsloses Einkaufserlebnis und stilvolle Präsentation.",
    image: "/images/projects/milly.png",
    services: ["Webentwicklung", "UI/UX Design", "E-Commerce"],
    challenge:
      "Die Entwicklung eines Online-Shops, der die Eleganz und den Stil von Modest Fashion digital perfekt in Szene setzt und eine hohe Conversion-Rate erzielt.",
    solution:
      "Ein performanter und ästhetisch ansprechender E-Commerce Store mit intuitiver Navigation, ansprechendem Produktdesign und optimiertem Checkout-Prozess.",
    results: [
      { label: "User Experience", value: "Premium" },
      { label: "Shop Performance", value: "High-End" },
    ],
    websiteUrl: "https://melli-swart.vercel.app/",
  },
  {
    id: 3,
    number: "03",
    slug: "ma-bau-gmbh",
    label: "MA Bau GmbH",
    title: "Bau & Solarenergie",
    category: "Full-Service Digital Presence",
    description:
      "Umfassender Relaunch inklusive Solar-Sparte. Maßgeschneiderte Lösung für Sanierung, Innenausbau und energetische Systeme der Zukunft.",
    image: "/images/projects/ma-bau-gmbh.png",
    services: ["Webentwicklung", "Corporate Design", "Content Creation"],
    challenge:
      "Zusammenführung klassischer Baudienstleistungen mit zukunftsorientierter Solartechnik in einer kohärenten digitalen Identität.",
    solution:
      "Ein strukturierter Web-Auftritt, der sowohl Bauherren als auch Interessenten für erneuerbare Energien gezielt anspricht und durch ein klares Navigationskonzept überzeugt.",
    results: [
      { label: "Hauptbranchen", value: "2" },
      { label: "Lead-Qualität", value: "+45%" },
    ],
    websiteUrl: "https://mabaugmbh.de/",
  },
  {
    id: 5,
    number: "04",
    slug: "ts-servicegroup",
    label: "T&S Servicegroup",
    title: "Sicherheit, Reinigung & Umzug",
    category: "Corporate Webdesign",
    description:
      "Eine professionelle Unternehmenswebsite für vielseitige Dienstleistungen in den Bereichen Objekt- und Personenschutz, Reinigungsdienste und Umzüge.",
    image: "/images/projects/ts-servicegroup.png",
    services: ["Webentwicklung", "Strukturierung", "UI Design"],
    challenge:
      "Verschiedene, unabhängige Dienstleistungsbereiche übersichtlich und vertrauenserweckend auf einer einzigen, kohärenten Plattform zu vereinen.",
    solution:
      "Entwicklung einer klar strukturierten Website mit zielgruppenorientierter Navigation, die jede Dienstleistung separat, professionell und leicht zugänglich präsentiert.",
    results: [
      { label: "Benutzerfreundlichkeit", value: "Maximal" },
      { label: "Dienstleistungsbereiche", value: "3" },
    ],
    websiteUrl: "https://ts-servicegroup.de/",
  },
  {
    id: 6,
    number: "05",
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
    websiteUrl: "https://ass-security-ug.de/",
  },
  {
    id: 7,
    number: "06",
    slug: "alinafitka",
    label: "Alinafitka",
    title: "Premium Personal Brand",
    category: "Personal Branding & Webdesign",
    description:
      "Eine Premium-Website für eine hochklassige Fitnesstrainerin, Rehabilitationsspezialistin und WOGA-Trainerin. Expertise und Vertrauen in jedem Detail.",
    image: "/images/projects/alinafitka.png",
    services: ["Modernes UI", "Sanfte Animationen", "Responsive Design"],
    challenge:
      "Eine digitale Präsenz zu schaffen, die die Personal Brand professionell unterstützt und die Expertise in den Bereichen Fitness und Rehabilitation auf Premium-Niveau widerspiegelt.",
    solution:
      "Gestaltung eines ästhetischen Designs mit sanften Animationen und einer durchdachten Struktur, um das Vertrauen potenzieller Klienten zu gewinnen und die Brand rund um die Uhr zu unterstützen.",
    results: [
      { label: "Premium Qualität", value: "100%" },
      { label: "Personal Brand", value: "Gestärkt" },
    ],
    websiteUrl: "https://alinafitka.vercel.app/",
  },
  {
    id: 11,
    number: "07",
    slug: "novasun",
    label: "Novasun",
    title: "Moderne Solartechnik",
    category: "Webdesign & Lead-Gen",
    description:
      "Eine zukunftsweisende Website für ein Solarunternehmen. Fokus auf erneuerbare Energien, Nachhaltigkeit und die effiziente Generierung von Kundenanfragen.",
    image: "/images/projects/novasun.png",
    services: ["Webentwicklung", "Lead Funnels", "UI/UX Design"],
    challenge:
      "Das komplexe Thema Solarenergie für Hausbesitzer zugänglich, attraktiv und verständlich zu gestalten, um qualifizierte Leads für Beratungsgespräche zu gewinnen.",
    solution:
      "Eine performante und vertrauensbildende Website mit klaren Call-to-Actions, modernen Animationen und einem unkomplizierten Kontakt-Prozess für Interessenten.",
    results: [
      { label: "Lead-Qualität", value: "Hoch" },
      { label: "Design", value: "Zukunftsorientiert" },
    ],
    websiteUrl: "https://solarsun-eight.vercel.app/",
  },
  {
    id: 13,
    number: "08",
    slug: "victoria-green",
    label: "Victoria Green",
    title: "Fotografie Portfolio",
    category: "Portfolio & Ästhetik",
    description:
      "Ein elegantes und minimalistisches Portfolio für eine professionelle Fotografin. Das Design tritt in den Hintergrund und lässt die Bilder für sich sprechen.",
    image: "/images/projects/victoria-green.png",
    services: ["Portfolio Design", "Bildergalerien", "Mobile Optimierung"],
    challenge:
      "Die visuelle Kunst der Fotografie digital so zu präsentieren, dass die Website nicht von den Werken ablenkt, sondern sie perfekt rahmt und in Szene setzt.",
    solution:
      "Entwicklung eines minimalistischen und extrem performanten Portfolios mit optimierten Bildergalerien, flüssigen Übergängen und reibungslosen Ladezeiten.",
    results: [
      { label: "Ästhetik", value: "Minimalistisch" },
      { label: "Performance", value: "Sehr schnell" },
    ],
    websiteUrl: "https://victoria-green.vercel.app/",
  },
  {
    id: 2,
    number: "09",
    slug: "n8n-lead-automation",
    label: "Lead Engine",
    title: "CRM Automation mit n8n",
    category: "KI-Automatisierung & Lead-Gen",
    description:
      "Ein hochkomplexes Automatisierungs-System, das den gesamten Lead-Management-Prozess digitalisiert. Von der ersten Anfrage bis zur CRM-Zuweisung und Team-Benachrichtigung erfolgt alles in unter 2 Sekunden – vollautomatisch und fehlerfrei.",
    image: "/images/projects/n8n.webp",
    services: ["n8n Workflows", "Notion API", "Lead Scoping", "JavaScript"],
    challenge:
      "Manuelle Datenübertragung aus Kontaktformularen in CRM-Systeme ist zeitfressend und fehleranfällig. Ohne sofortige Benachrichtigung sinkt die Conversion-Rate (Speed-to-Lead), da potenzielle Kunden zu lange auf eine Rückmeldung warten.",
    solution:
      "Implementierung einer zentralen n8n-Instanz als 'Digitaler Vermittler'. Eingehende Webhooks werden gefiltert, mit Custom Code (JavaScript) validiert und formatiert, bevor sie simultan in Notion, Google Sheets und dedizierte Telegram-Channels für das Vertriebsteam gepusht werden.",
    results: [
      { label: "Bearbeitungszeit", value: "0 Min." },
      { label: "Lead-Qualität", value: "100%" },
    ],
  },
  {
    id: 4,
    number: "10",
    slug: "seo-master-automation",
    label: "SEO Master",
    title: "SEO Alerts & Reporting",
    category: "KI-Automatisierung & SEO",
    description:
      "Ein intelligentes Monitoring-System zur Automatisierung von SEO-Workflows. Das System überwacht täglich Keyword-Rankings, prüft die Indexierung von Webseiten und sendet automatisierte Reports direkt an Telegram und Google Sheets.",
    image: "/images/projects/seo-n8n.webp",
    services: ["n8n Workflows", "GSC API", "Telegram Automation", "SEO Tools"],
    challenge:
      "Die manuelle Überwachung von Keyword-Rankings und die regelmäßige Überprüfung des Index-Status hunderter URLs ist extrem zeitaufwendig. Ranking-Verluste werden oft erst bemerkt, wenn der Traffic bereits massiv eingebrochen ist.",
    solution:
      "Entwicklung eines n8n-Workflows, der die Google Search Console API nutzt, um Daten in Echtzeit zu analysieren. Das System vergleicht tägliche Performance-Werte und alarmiert das Team sofort bei signifikanten Positionsverlusten oder Indexierungs-Problemen.",
    results: [
      { label: "Monitoring", value: "24/7" },
      { label: "Reaktionszeit", value: "< 1 Std." },
    ],
  },
  {
    id: 8,
    number: "11",
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
  {
    id: 9,
    number: "12",
    slug: "content-marketing-automation",
    label: "Content Engine",
    title: "Automated Content Marketing",
    category: "KI-Automatisierung & Marketing",
    description:
      "Ein vollautomatisiertes System für das Content-Marketing und Social-Media-Management. Von der Trend-Analyse via RSS bis hin zur KI-gestützten Content-Erstellung und automatisierten Veröffentlichung auf Twitter, LinkedIn und Instagram.",
    image: "/images/projects/automated-content-marketing.webp",
    services: [
      "n8n Workflows",
      "OpenAI GPT-4",
      "Social Media APIs",
      "Auto-Posting",
    ],
    challenge:
      "Die manuelle Erstellung von relevantem Content für verschiedene Plattformen ist zeitaufwendig. Trends gehen oft verloren, bevor sie genutzt werden können, und die konsistente Bespielung aller Kanäle erfordert hohen personellen Aufwand.",
    solution:
      "Implementierung eines intelligenten n8n-Workflows, der RSS-Feeds überwacht, Trends extrahiert und mittels GPT-4 plattformspezifische Posts generiert. Ein integriertes Freigabesystem (Slack) und automatisierte Analytics runden den Prozess ab.",
    results: [
      { label: "Content-Volumen", value: "+300%" },
      { label: "Zeitaufwand", value: "-90%" },
    ],
  },
  {
    id: 10,
    number: "13",
    slug: "email-ai-assistant",
    label: "Email Engine",
    title: "AI-Powered Customer Support",
    category: "KI-Automatisierung & Service",
    description:
      "Ein intelligenter E-Mail-Assistent für einen Smartphone-Reparaturservice. Das System analysiert eingehende Anfragen via IMAP, extrahiert Hersteller und Modell und generiert mittels AI-Agenten automatisierte, personalisierte Preisangebote auf Basis von Echtzeit-Daten.",
    image: "/images/projects/alle-emails-abrufen.webp",
    services: [
      "AI Agents (LangChain)",
      "n8n Automation",
      "Ollama / GPT Integration",
      "E-Mail Workflow",
    ],
    challenge:
      "Kundensupport-Teams verbringen Stunden damit, repetitive Preisanfragen für Reparaturen zu beantworten. Die manuelle Suche nach dem korrekten Preis in komplexen WooCommerce-Katalogen führt zu Verzögerungen und Fehlern.",
    solution:
      "Entwicklung eines Agenten-basierten Workflows, der Kundenabsichten erkennt, Produktvarianten im System identifiziert und unter Berücksichtigung der Lagerverfügbarkeit professionelle E-Mail-Antworten in Echtzeit versendet.",
    results: [
      { label: "Antwortzeit", value: "< 30 Sek." },
      { label: "Automatisierungsgrad", value: "85%" },
    ],
  },
];
