"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, FolderKanban } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { PROJECTS, type Project } from "@/data/projects";
import { CTASection } from "@/components/sections/CTASection";

const MARQUEE_PROJEKTE = [
  "REFERENZEN",
  "PORTFOLIO",
  "CASE STUDIES",
  "ERGEBNISSE",
  "EXZELLENZ",
  "DIGITAL PRODUCTS",
];

export function ProjekteClient() {
  return (
    <div className="relative bg-[#f5f5f5]">
      <h1 className="sr-only">
        Unsere Referenzen: Webentwicklung, Webdesign, SEO & KI-Automatisierung |
        INVERTA Portfolio
      </h1>
      <PageHero
        titleTop="UNSERE"
        titleMain="PORTFOLIO"
        marqueeItems={MARQUEE_PROJEKTE}
        as="h2"
      />

      <main className="relative z-10 bg-[#f5f5f5] rounded-t-[40px] md:rounded-t-[64px] overflow-hidden selection:bg-[#daff02] selection:text-black">
        {/* Einleitung mit Fokus auf unsere Kernkompetenzen für besseres SEO */}
        <section className="pt-15 md:pt-20 pb-12 md:pb-24 px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col items-center text-center gap-6 mb-16">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm">
                  <FolderKanban className="w-3.5 h-3.5 text-black/40" />
                  <span className="text-[11px] font-semibold text-black tracking-widest uppercase mt-px">
                    Portfolio
                  </span>
                </div>
              </FadeIn>

              <div className="max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black mb-6">
                  Digitale Lösungen, die <br />
                  <span className="relative inline-block">
                    <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-4 bg-[#daff02] z-0" />
                    <span className="relative z-10">Märkte dominieren.</span>
                  </span>
                </h2>
                <h3 className="text-lg md:text-xl text-black/80 font-normal leading-relaxed max-w-2xl mx-auto">
                  Wir verbinden professionelle <strong>Webentwicklung</strong>,
                  anspruchsvolles <strong>Webdesign</strong>, datengetriebene{" "}
                  <strong>SEO-Strategien</strong> und gezieltes{" "}
                  <strong>Performance Marketing</strong>, um messbares Wachstum
                  für unsere Kunden zu erzielen. Entdecken Sie unsere Case
                  Studies und smarte Lösungen im Bereich{" "}
                  <strong>KI-Automatisierung</strong>.
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Darstellung aller bisherigen Projekte */}
        <section className="pb-10 md:pb-28 px-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col gap-20 md:gap-38">
              {PROJECTS.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,

    offset: ["0 1", "0.5 0.5"],
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isEven = index % 2 === 0;

  // Hier verknüpfen wir die Scroll-Position mit den seitlichen X-Werten.

  const leftX = useTransform(scrollYProgress, [0, 1], [-150, 0]);
  const rightX = useTransform(scrollYProgress, [0, 1], [150, 0]);

  // Bildskalierung für den sauberen Parallax-Effekt (nur auf Desktop, stoppt den 3D-Effekt auf Mobile)
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? 1 : 1.5, 1],
  );

  const imageX = isEven ? leftX : rightX;
  const textX = isEven ? rightX : leftX;

  const neumorphicShadow =
    "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset";

  return (
    <article
      ref={cardRef}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-12 lg:gap-20 items-center justify-between w-full`}
    >
      <motion.div
        style={{ x: imageX, boxShadow: neumorphicShadow }}
        className="w-full lg:w-[48%] bg-white rounded-[20px] p-3 md:p-5 transform-gpu"
      >
        <div
          className="aspect-16/10 relative group overflow-hidden rounded-[16px] bg-neutral-200 cursor-pointer"
          style={{ boxShadow: "rgba(0,0,0,0.05) 0px 10px 20px -5px" }}
        >
          <Link
            href={`/projekte/${project.slug}`}
            className="block w-full h-full relative"
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-10 pointer-events-none" />

            <motion.div
              style={{ scale: imageScale }}
              className="w-full h-full origin-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full bg-cover bg-center transition-all duration-1000"
                style={{ backgroundImage: `url(${project.image})` }}
              />
            </motion.div>

            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div className="w-24 h-24 rounded-full bg-[#daff02] flex items-center justify-center text-black font-bold text-sm tracking-widest opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out shadow-2xl">
                VIEW
              </div>
            </div>
          </Link>
        </div>
      </motion.div>

      <motion.div
        style={{ x: textX }}
        className="w-full lg:w-[42%] flex flex-col gap-6 md:gap-8 transform-gpu"
      >
        <div className="flex items-center gap-6">
          <span className="text-[11px] font-bold text-black tracking-[0.3em] uppercase">
            {project.category}
          </span>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-black leading-[1.1]">
            {project.title}
          </h3>
          <p className="text-lg text-black font-normal leading-relaxed max-w-xl">
            {project.description}
          </p>
        </div>

        <div className="pt-4">
          <Link
            href={`/projekte/${project.slug}`}
            className="group inline-flex items-center gap-4 text-black font-semibold text-lg cursor-pointer w-fit"
          >
            <span className="relative">
              Details ansehen
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full" />
            </span>
            <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:border-black">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </motion.div>
    </article>
  );
}
