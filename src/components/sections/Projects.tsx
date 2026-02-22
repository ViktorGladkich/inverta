"use client";

import { motion, AnimatePresence, animate } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FolderKanban } from "lucide-react";
import React from "react"; // Added React import for useRef

// Shared Neumorphic Shadow (matches site standard)
const neumorphicShadow =
  "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset";

const projects = [
  {
    available: true,
    id: 1,
    number: "01",
    label: "vanturahandwerk",
    title: "Premium Handwerkskunst",
    description:
      "Individuelle Multi-Page-Website für Komplettsanierung, Innenausbau und Sanitär. Ein einzigartiges, nicht-schablonenhaftes Design, das die Qualität und Vielfalt der Handwerksleistungen digital erlebbar macht.",
    stats: [
      { value: "100%", label: "Individuelles Design" },
      { value: "6+", label: "Leistungsbereiche" },
    ],
    image: "/images/projects/vanturahandwerk.jpeg",
  },
  {
    available: true,
    id: 2,
    number: "02",
    label: "NEXORA Digital",
    title: "High-Performance IT & Web",
    description:
      "Umfassender Relaunch für eine IT-Agentur (Webdesign, Funnels, Marketing). Eine maßgeschneiderte Multi-Page-Plattform, die technische Expertise mit modernem Branding verbindet und sich klar vom Markt abhebt.",
    stats: [
      { value: "5+", label: "Service-Module" },
      { value: "300%", label: "Performance-Boost" },
    ],
    image: "/images/projects/nexora.jpeg",
  },
  {
    available: true,
    id: 3,
    number: "03",
    label: "A.S.S. Security",
    title: "Sicherheit & Vertrauen",
    description:
      "Fokussierter One-Pager für Sicherheitsdienstleistungen (Objekt- & Personenschutz). Klares, vertrauensbildendes Design mit individueller Ansprache für maximale Konversion.",
    stats: [
      { value: "24/7", label: "Erreichbarkeit" },
      { value: "100%", label: "Fokus & Vertrauen" },
    ],
    image: "/images/projects/ass-security.jpeg",
  },
];

const Counter = ({
  value,
  label,
  suffix = "",
}: {
  value: string;
  label: string;
  suffix?: string;
}) => {
  // Extract number for animation (handle "3x", "24/7" cases gracefully?)
  // If value is numeric string like "80", we animate. If "24/7", maybe no animation or just text.
  // Simple approach: standard text for complex strings, counter for numbers.
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  // Treat "24/7" (contains /) as text, not number to animate
  const isNumber =
    !isNaN(numericValue) && value.match(/^[0-9.]/) && !value.includes("/");

  return (
    <div className="flex-1 min-w-[140px] bg-[#f5f5f5] p-4 rounded-xl flex flex-col items-center justify-center text-center shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(0,0,0,0.08),0px_1.80656px_1.80656px_-1.33333px_rgba(0,0,0,0.08),inset_0px_3px_1px_0px_white]">
      <div className="flex items-baseline gap-0.5 mb-1">
        {isNumber ? (
          <CountUp
            to={numericValue}
            suffix={suffix || value.replace(/[0-9.]/g, "")}
          />
        ) : (
          <span className="text-3xl font-bold text-black leading-none">
            {value}
          </span>
        )}
      </div>
      <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
};

const CountUp = ({ to, suffix }: { to: number; suffix: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(0, to, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = value.toFixed(0) + suffix;
      },
    });
    return () => controls.stop();
  }, [to, suffix]);

  return (
    <span
      ref={nodeRef}
      className="text-3xl font-medium text-black leading-none font-sans"
    />
  );
};

export function Projects() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % projects.length);
    }, 8000); // 8 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="projects" className="py-24 bg-[#f5f5f5]">
      <div className="w-full px-[40px]">
        {/* Header - Standardized Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-6 mb-16 md:mb-24"
        >
          {/* Badge */}
          <div className="flex items-center justify-center px-[12px] py-[6px] gap-2 rounded-[60px] bg-[#f5f5f5] shadow-[0px_0.706592px_0.706592px_-0.541667px_rgba(0,0,0,0.1),0px_1.80656px_1.80656px_-1.08333px_rgba(0,0,0,0.09),0px_3.62176px_3.62176px_-1.625px_rgba(0,0,0,0.09),0px_6.8656px_6.8656px_-2.16667px_rgba(0,0,0,0.09),0px_13.6468px_13.6468px_-2.70833px_rgba(0,0,0,0.08),0px_30px_30px_-3.25px_rgba(0,0,0,0.05),inset_0px_3px_1px_0px_white]">
            <div className="w-[14px] h-[14px] text-black/40">
              <FolderKanban className="w-full h-full" />
            </div>
            <span className="text-[12px] font-medium text-black tracking-wider uppercase">
              PROJEKTE
            </span>
          </div>

          {/* Title & Description */}
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black mb-6">
              Bewiesene Ergebnisse
            </h2>
            <p className="text-lg md:text-xl text-[#16101e]/80 font-normal leading-relaxed max-w-3xl mx-auto">
              Entdecken Sie ausgewählte Projekte, die unsere Expertise in KI und
              Automatisierung widerspiegeln.
            </p>
          </div>
        </motion.div>

        {/* Content Area - Single Unified Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-6xl mx-auto rounded-[20px] bg-[#f5f5f5] p-6 md:p-8 flex flex-col gap-8"
          style={{ boxShadow: neumorphicShadow }}
        >
          {/* Top Steps Loader Wrapper (Navigation) */}
          <div className="grid grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveTab(index)}
                className={`relative h-12 rounded-lg flex items-center justify-center transition-all duration-300 overflow-hidden bg-[#f5f5f5] shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(0,0,0,0.08),0px_1.80656px_1.80656px_-1.33333px_rgba(0,0,0,0.08),0px_3.62176px_3.62176px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.66667px_rgba(0,0,0,0.05),inset_0px_3px_1px_0px_white] ${
                  activeTab === index
                    ? "opacity-100"
                    : "opacity-50 hover:opacity-75"
                }`}
              >
                <span className="text-sm md:text-base font-bold tracking-wider uppercase z-10 text-black">
                  <span className="md:hidden">{project.number}</span>
                  <span className="hidden md:inline">{project.label}</span>
                </span>
                {/* Progress Bar for Auto-play (Optional) */}
                {activeTab === index && (
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 8, ease: "linear" }}
                    className="absolute bottom-0 left-0 h-[3px] bg-[#daff02]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Project Content (Row) */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Image Side */}
            <div className="w-full md:w-1/2 aspect-4/3 relative rounded-2xl overflow-hidden bg-white shadow-sm ring-1 ring-black/5">
              {/* Image Placeholder */}
              <AnimatePresence>
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }} // Slide down out
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {projects[activeTab].image ? (
                    // Use Image component (Need to import it back)
                    <div className="w-full h-full relative">
                      {/* Placeholder for now to avoid broken images if paths wrong */}
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${projects[activeTab].image})`,
                        }}
                      />
                    </div>
                  ) : (
                    <span className="text-neutral-400 font-bold text-lg">
                      {projects[activeTab].title} Visual
                    </span>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4"
                >
                  <div className="text-sm font-medium tracking-widest text-black uppercase font-sans">
                    {projects[activeTab].number}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-black leading-tight">
                    {projects[activeTab].title}
                  </h3>

                  <p className="text-base text-black leading-relaxed mb-4">
                    {projects[activeTab].description}
                  </p>

                  {/* Stats Pills */}
                  <div className="flex flex-wrap gap-4 w-full">
                    {projects[activeTab].stats.map((stat, i) => (
                      <Counter key={i} value={stat.value} label={stat.label} />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
