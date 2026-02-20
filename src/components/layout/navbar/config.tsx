import { BarChart3, Globe, LayoutGrid, Zap, Rocket, Code2 } from "lucide-react";

export const navigationItems = [
  {
    title: "Marketing",
    description: "Sichtbarkeit erhöhen & Umsatz steigern",
    href: "/marketing",
    items: [
      {
        title: "Neukundengewinnung",
        href: "/marketing/neukundengewinnung",
        icon: <BarChart3 className="w-5 h-5 text-blue-500" />,
        desc: "Performance Marketing & Ads",
      },
      {
        title: "SEO Optimierung",
        href: "/marketing/seo",
        icon: <Globe className="w-5 h-5 text-indigo-500" />,
        desc: "Organisches Wachstum & Ranking",
      },
      {
        title: "Social Media",
        href: "/marketing/social-media",
        icon: <LayoutGrid className="w-5 h-5 text-pink-500" />,
        desc: "Content & Community Management",
      },
      {
        title: "Ladezeitoptimierung",
        href: "/marketing/ladezeitoptimierung",
        icon: <Zap className="w-5 h-5 text-yellow-500" />,
        desc: "PageSpeed & Core Web Vitals",
      },
    ],
  },
  {
    title: "Webentwicklung",
    description: "Moderne Websites & komplexe Systeme",
    href: "/webentwicklung",
    items: [
      {
        title: "Website / Onlineshop",
        href: "/webentwicklung/website",
        icon: <Globe className="w-5 h-5 text-cyan-500" />,
        desc: "High-End Design & Development",
      },
      {
        title: "Relaunch",
        href: "/webentwicklung/relaunch",
        icon: <Rocket className="w-5 h-5 text-orange-500" />,
        desc: "Modernisierung & Migration",
      },
      {
        title: "Funnelsysteme",
        href: "/webentwicklung/funnels",
        icon: <BarChart3 className="w-5 h-5 text-green-500" />,
        desc: "Conversion-optimierte Landingpages",
      },
      {
        title: "Individuelle Lösungen",
        href: "/webentwicklung/programmierung",
        icon: <Code2 className="w-5 h-5 text-purple-500" />,
        desc: "Maßgeschneiderte Web-Apps",
      },
    ],
  },
  {
    title: "Automatisierung",
    href: "/automatisierung",
  },
  {
    title: "Projekte",
    href: "/projekte",
  },
  {
    title: "Agentur",
    href: "/agentur",
  },
  {
    title: "Kontakt",
    href: "/kontakt",
  },
];
