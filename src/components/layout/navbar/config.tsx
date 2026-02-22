import { BarChart3, Globe, LayoutGrid, Zap, Rocket, Code2 } from "lucide-react";

export const navigationItems = [
  {
    title: "Marketing",
    description:
      "Sichtbarkeit erhöhen & planbaren Umsatz mit Performance Marketing steigern",
    href: "/marketing",
    items: [
      {
        title: "Neukundengewinnung",
        href: "/marketing/neukundengewinnung",
        icon: <BarChart3 className="w-5 h-5 text-blue-500" />,
        desc: "Performance Marketing & bezahlte Werbeanzeigen",
      },
      {
        title: "SEO Agentur",
        href: "/marketing/seo",
        icon: <Globe className="w-5 h-5 text-indigo-500" />,
        desc: "Organisches Google Ranking & nachhaltiges SEO",
      },
      {
        title: "Social Media",
        href: "/marketing/social-media",
        icon: <LayoutGrid className="w-5 h-5 text-pink-500" />,
        desc: "Content Erstellung & Community Management",
      },
      {
        title: "Ladezeitoptimierung",
        href: "/marketing/ladezeitoptimierung",
        icon: <Zap className="w-5 h-5 text-yellow-500" />,
        desc: "PageSpeed & Core Web Vitals für besseres Ranking",
      },
    ],
  },
  {
    title: "Webentwicklung",
    description:
      "Professionelles Webdesign und komplexe Software-Lösungen aus Dresden",
    href: "/webentwicklung",
    items: [
      {
        title: "Webdesign & Onlineshop",
        href: "/webentwicklung/website",
        icon: <Globe className="w-5 h-5 text-cyan-500" />,
        desc: "Premium Webdesign & performantes E-Commerce Development",
      },
      {
        title: "Website Relaunch",
        href: "/webentwicklung/relaunch",
        icon: <Rocket className="w-5 h-5 text-orange-500" />,
        desc: "Sichere Migration & Modernisierung bestehender Systeme",
      },
      {
        title: "Funnelsysteme",
        href: "/webentwicklung/funnels",
        icon: <BarChart3 className="w-5 h-5 text-green-500" />,
        desc: "Conversion-optimierte Landingpages für maximale Leads",
      },
      {
        title: "Spezialanwendungen",
        href: "/webentwicklung/programmierung",
        icon: <Code2 className="w-5 h-5 text-purple-500" />,
        desc: "Maßgeschneiderte Web-Apps & individuelle Programmierung",
      },
    ],
  },
  {
    title: "KI Automatisierung",
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
