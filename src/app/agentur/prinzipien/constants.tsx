import { Target, Zap, Eye, Users } from "lucide-react";
import { Principle } from "./types";

export const PRINCIPLES: Principle[] = [
  {
    number: "01",
    title: "Ergebnis­orientiert",
    description:
      "Jede Entscheidung ist datenbasiert. Wir optimieren für messbare KPIs: Conversion, Umsatz, nachhaltiges Wachstum.",
    icon: <Target className="w-5 h-5" />,
    tags: ["Conversion", "Umsatz", "Wachstum"],
    isEven: true,
  },
  {
    number: "02",
    title: "Technische Exzellenz",
    description:
      "Modernste Technologien, blitzschnelle Ladezeiten und suchmaschinenoptimierte Architekturen. Kein Kompromiss.",
    icon: <Zap className="w-5 h-5" />,
    tags: ["Next.js", "Speed", "SEO"],
    isEven: false,
  },
  {
    number: "03",
    title: "Transparenz",
    description:
      "Keine versteckten Kosten, kein Fachchinesisch. Klare Meilensteine, ehrliches Feedback, Kommunikation auf Augenhöhe.",
    icon: <Eye className="w-5 h-5" />,
    tags: ["Kommunikation", "Meilensteine", "Vertrauen"],
    isEven: true,
  },
  {
    number: "04",
    title: "Partner­schaft",
    description:
      "Wir verstehen Ihr Business und werden Teil Ihres Wachstums. Nicht transaktional — langfristig.",
    icon: <Users className="w-5 h-5" />,
    tags: ["Partnership", "Wachstum", "Vertrauen"],
    isEven: false,
  },
];

export const NEUMORPHIC_SHADOW =
  "0px 0.706592px 0.706592px -0.666667px rgba(0,0,0,0.08),0px 1.80656px 1.80656px -1.33333px rgba(0,0,0,0.08),0px 3.62176px 3.62176px -2px rgba(0,0,0,0.07),inset 0px 3px 1px 0px rgba(255,255,255,1)";
