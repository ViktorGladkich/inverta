"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Target, Zap, Eye, Users, Shield } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const principles = [
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

const neumorphicShadow =
  "0px 0.706592px 0.706592px -0.666667px rgba(0,0,0,0.08),0px 1.80656px 1.80656px -1.33333px rgba(0,0,0,0.08),0px 3.62176px 3.62176px -2px rgba(0,0,0,0.07),inset 0px 3px 1px 0px rgba(255,255,255,1)";

function PrincipleLine({
  principle,
  index,
}: {
  principle: (typeof principles)[0];
  index: number;
}) {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 90%", "start 30%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={lineRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
      className="flex flex-col"
    >
      {/* Row */}
      <div className="flex items-center gap-4 md:gap-8 py-4 md:py-5">
        {/* Number */}
        <span className="text-[10px] font-black tracking-widest text-black/20 shrink-0 w-5">
          {principle.number}
        </span>

        {/* Icon */}
        <div
          className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 ${
            principle.isEven ? "bg-black text-white" : "bg-[#daff02] text-black"
          }`}
        >
          {principle.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-black leading-none flex-1 min-w-0">
          {principle.title}
        </h3>

        {/* Desktop tags */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          {principle.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#f5f5f5] text-black whitespace-nowrap"
              style={{ boxShadow: neumorphicShadow }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Description + mobile tags */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 pb-2 pl-[52px] md:pl-[74px]">
        <p className="text-xs md:text-sm text-black/50 font-normal leading-relaxed max-w-md flex-1">
          {principle.description}
        </p>
        <div className="flex md:hidden flex-wrap gap-1.5">
          {principle.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[8px] font-bold tracking-wider uppercase bg-[#f5f5f5] text-black whitespace-nowrap"
              style={{ boxShadow: neumorphicShadow }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Progress line — всегда чёрная */}
      <div className="relative h-[1.5px] w-full bg-black/8 mt-2 overflow-hidden">
        <motion.div
          style={{ scaleX: lineScale, originX: 0 }}
          className="absolute inset-0 bg-black"
        />
      </div>
    </motion.div>
  );
}

export function PrinzipienSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 py-24 md:py-32 bg-[#f5f5f5] overflow-hidden"
      aria-labelledby="values-heading"
    >
      {/* Parallax background number */}
      <motion.div
        style={{ y: bgY }}
        className="absolute right-[-40px] top-1/2 -translate-y-1/2 text-[clamp(160px,22vw,300px)] font-black text-black/[0.03] leading-none select-none pointer-events-none tracking-tighter"
        aria-hidden="true"
      >
        02
      </motion.div>

      <div className="container mx-auto px-6 md:px-10 max-w-[1400px] relative z-10">
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 md:mb-16">
            <div className="flex flex-col gap-4">
              {/* Badge */}
              <div className="w-fit flex items-center justify-center px-[12px] py-[6px] gap-2 rounded-[60px] bg-[#f5f5f5] shadow-[0px_0.706592px_0.706592px_-0.541667px_rgba(0,0,0,0.1),0px_1.80656px_1.80656px_-1.08333px_rgba(0,0,0,0.09),0px_3.62176px_3.62176px_-1.625px_rgba(0,0,0,0.09),0px_6.8656px_6.8656px_-2.16667px_rgba(0,0,0,0.09),0px_13.6468px_13.6468px_-2.70833px_rgba(0,0,0,0.08),0px_30px_30px_-3.25px_rgba(0,0,0,0.05),inset_0px_3px_1px_0px_white]">
                <div className="w-[14px] h-[14px] text-black/40">
                  <Shield className="w-full h-full" />
                </div>
                <span className="text-[12px] font-medium text-black tracking-wider uppercase">
                  Unsere Prinzipien
                </span>
              </div>
              <h2
                id="values-heading"
                className="text-4xl md:text-6xl font-medium tracking-tight text-black"
              >
                Woran wir glauben.
              </h2>
            </div>
            <p className="text-base md:text-lg text-black/40 font-medium max-w-sm leading-relaxed">
              Vier Grundsätze, die jede Entscheidung und jedes Pixel bestimmen.
            </p>
          </div>
        </FadeIn>

        {/* Principles */}
        <div className="flex flex-col">
          {principles.map((principle, index) => (
            <PrincipleLine
              key={principle.number}
              principle={principle}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
