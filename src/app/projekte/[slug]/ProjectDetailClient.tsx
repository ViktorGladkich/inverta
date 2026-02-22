"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { type Project } from "@/data/projects";
import { FadeIn } from "@/components/ui/FadeIn";

export function ProjectDetailClient({ project }: { project: Project }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="relative bg-[#f5f5f5] min-h-screen selection:bg-[#daff02] selection:text-black">
      {/* Header-Bereich mit animiertem Projektbild */}
      <div
        ref={heroRef}
        className="relative h-[80vh] md:h-screen w-full overflow-hidden flex items-center justify-center bg-black"
      >
        <motion.div
          style={{ y: imageY, opacity }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          />
        </motion.div>

        <motion.div
          style={{ y: headerY, opacity }}
          className="relative z-20 px-6 max-w-5xl mx-auto flex flex-col items-center text-center mt-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md mb-8"
          >
            <div className="w-1.5 h-1.5 bg-[#daff02] rounded-full animate-pulse shadow-[0_0_8px_#daff02]" />
            <span className="text-[10px] md:text-[11px] font-bold text-white tracking-[0.2em] uppercase mt-px">
              {project.category}
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-white leading-[0.9] mb-8">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="block"
            >
              {project.label}
            </motion.span>
          </h1>
        </motion.div>
      </div>

      {/* Hauptbereich der Case Study */}
      <article className="relative z-30 bg-[#f5f5f5] rounded-t-[40px] md:rounded-t-[64px] -mt-10 md:-mt-20 px-6 py-12 md:py-24 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-[1400px] mx-auto">
          {/* Zurück-Navigation */}
          <FadeIn delay={0.05} className="mb-12 md:mb-20">
            <Link
              href="/projekte"
              className="group inline-flex items-center gap-4 text-black hover:text-black/70 transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold tracking-widest uppercase">
                Zurück zur Übersicht
              </span>
            </Link>
          </FadeIn>

          {/* Projektübersicht und Metadaten */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-black/10 pb-16 mb-16 md:mb-32">
            <FadeIn delay={0.1} className="col-span-1 md:col-span-2">
              <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-black mb-6">
                Projekt & Leistungen
              </h2>
              <p
                className={`text-lg md:text-xl text-black/70 font-normal leading-relaxed ${project.websiteUrl ? "mb-8" : ""}`}
              >
                {project.description}
              </p>
              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-between gap-6 bg-black text-[#daff02] p-1.5 pr-6 rounded-full overflow-hidden transition-all duration-500 hover:pr-8 active:scale-95 shadow-xl w-fit"
                >
                  <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#daff02] flex items-center justify-center text-black shrink-0">
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 group-hover:rotate-45" />
                  </div>
                  <span className="relative z-10 text-sm md:text-base font-bold tracking-[0.2em] uppercase truncate mt-px">
                    Website ansehen
                  </span>
                </a>
              )}
            </FadeIn>
            <FadeIn delay={0.2} className="col-span-1">
              <span className="text-[11px] font-bold text-black/40 tracking-[0.2em] uppercase mb-4 block">
                Unsere Leistungen
              </span>
              <ul className="flex flex-col gap-3">
                {project.services?.map((svc) => (
                  <li key={svc} className="text-lg font-medium text-black">
                    {svc}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.3} className="col-span-1">
              <span className="text-[11px] font-bold text-black/40 tracking-[0.2em] uppercase mb-4 block">
                Tätigkeitsbereich
              </span>
              <span className="text-lg font-medium text-black">
                {project.category}
              </span>
            </FadeIn>
          </div>

          {/* Detaillierte Problemstellung und unsere Lösung */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 pb-32">
            <div className="flex flex-col gap-12">
              {project.challenge && (
                <FadeIn delay={0.1}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-xs font-bold font-mono">
                      01
                    </span>
                    <h3 className="text-xl font-bold tracking-tight uppercase">
                      Die Herausforderung
                    </h3>
                  </div>
                  <p className="text-lg md:text-2xl text-black/70 leading-relaxed font-light">
                    {project.challenge}
                  </p>
                </FadeIn>
              )}
            </div>

            <div className="flex flex-col gap-12">
              {project.solution && (
                <FadeIn delay={0.2}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-xs font-bold font-mono">
                      02
                    </span>
                    <h3 className="text-xl font-bold tracking-tight uppercase">
                      Unsere Lösung
                    </h3>
                  </div>
                  <p className="text-lg md:text-2xl text-black/70 leading-relaxed font-light">
                    {project.solution}
                  </p>
                </FadeIn>
              )}
            </div>
          </section>

          {/* Messbare Ergebnisse */}
          {project.results && project.results.length > 0 && (
            <div className="pb-32">
              <FadeIn>
                <div className="bg-black rounded-[32px] md:rounded-[48px] p-10 md:p-20 flex flex-col items-center text-center">
                  <span className="text-[#daff02] text-sm font-bold tracking-[0.3em] uppercase mb-12">
                    Unser Impact & Resultate
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl mx-auto">
                    {project.results.map((res, i) => (
                      <div key={i} className="flex flex-col items-center gap-4">
                        <span className="text-6xl md:text-8xl font-medium tracking-tighter text-white">
                          {res.value}
                        </span>
                        <span className="text-sm font-bold tracking-widest uppercase text-white/50">
                          {res.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          )}
        </div>
      </article>

      {/* Call to Action Footer */}
      <section className="py-24 md:py-40 bg-[#f5f5f5] text-black">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-7xl font-medium tracking-tight mb-12">
              Hat dieses Projekt <br />
              <span className="text-black/30 italic">Sie inspiriert?</span>
            </h2>
            <Link
              href="/kontakt"
              className="group relative inline-flex items-center justify-between gap-8 bg-black text-[#daff02] p-2 pr-8 rounded-full overflow-hidden transition-all duration-500 hover:pr-10 active:scale-95 shadow-xl w-fit"
            >
              <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#daff02] flex items-center justify-center text-black">
                <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-500 group-hover:rotate-45" />
              </div>
              <span className="relative z-10 text-base md:text-lg font-bold tracking-[0.2em] uppercase">
                Anfrage starten
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
