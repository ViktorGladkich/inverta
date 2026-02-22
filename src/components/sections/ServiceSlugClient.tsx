"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ServiceContent } from "@/data/services";
import { MoveRight } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

// --- HERO SECTION ---
const Hero = ({
  service,
  categoryLabel,
}: {
  service: ServiceContent;
  categoryLabel: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[800px] flex items-end pb-20 md:pb-32 px-6 overflow-hidden bg-white"
    >
      {/* Massive Background Stroke Text */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "80%"]) }}
        className="absolute top-[10%] left-[-5%] whitespace-nowrap opacity-[0.03] z-0 pointer-events-none select-none"
      >
        <span
          className="text-[30vw] font-black uppercase tracking-tighter"
          style={{ WebkitTextStroke: "2px black", color: "transparent" }}
        >
          {categoryLabel}
        </span>
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="max-w-[1400px] mx-auto w-full relative z-10 text-black"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-9">
            <FadeIn>
              <div className="overflow-hidden mb-6">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-black/10 bg-black/5 backdrop-blur-xl"
                >
                  <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
                  <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                    {categoryLabel}
                  </span>
                </motion.div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-5xl sm:text-7xl md:text-[6.5rem] lg:text-[8rem] font-medium tracking-tighter leading-[0.9] wrap-break-word uppercase">
                {service.title}
              </h1>
            </FadeIn>
          </div>

          <div className="lg:col-span-3 pb-2 lg:pb-6">
            <FadeIn delay={0.3}>
              <div className="w-full h-px bg-black/20 mb-6 hidden lg:block" />
              <p className="text-lg md:text-xl text-black/60 font-medium leading-relaxed">
                {service.heroText}
              </p>
            </FadeIn>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// --- HORIZONTAL SCROLL BENEFITS ---
const HorizontalScrollBenefits = ({ benefits }: { benefits: string[] }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // For 4 benefits, we need a container that scrolls left.
  // 4 items = window width * 4. We scroll horizontally by -75% of the total width.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#daff02]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Decorative corner texts */}
        <div className="absolute top-10 left-10 font-mono text-black/30 text-sm font-bold tracking-widest uppercase">
          [ Advantages ]
        </div>
        <div className="absolute bottom-10 right-10 font-mono text-black/30 text-sm font-bold tracking-widest uppercase">
          Scroll {"->"}
        </div>

        <motion.div style={{ x }} className="flex w-[400vw]">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="w-screen h-scren flex items-center justify-center relative px-6 md:px-20"
            >
              <div className="relative w-full max-w-5xl">
                {/* Massive Number */}
                <div className="absolute -top-[20vh] md:-top-[30vh] md:-left-20 text-[200px] md:text-[400px] font-black text-black/5 leading-none select-none tracking-tighter">
                  0{index + 1}
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
                  <div className="w-16 md:w-32 h-[2px] bg-black shrink-0" />
                  <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.05] text-black uppercase">
                    {benefit}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// --- FEATURES ACCORDION ---
const FeaturesAccordion = ({
  features,
}: {
  features: { title: string; description: string }[];
}) => {
  return (
    <section className="relative bg-white pt-40 pb-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-32">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.05]">
              Der Weg <span className="text-black/30 italic">Zum Ziel.</span>
            </h2>
            <div className="w-12 h-1 bg-[#daff02] mt-8" />
          </FadeIn>
        </div>

        <div className="flex flex-col border-t border-black/10">
          {features.map((feature, i) => (
            <article
              key={i}
              className="group relative flex flex-col lg:flex-row justify-between py-12 md:py-20 border-b border-black/10 overflow-hidden cursor-default"
            >
              {/* Hover Sliding Background */}
              <div className="absolute inset-0 bg-black translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />

              <div className="relative z-10 lg:w-1/4 mb-6 lg:mb-0 flex items-start gap-4">
                <span className="text-lg md:text-xl font-mono text-black/40 group-hover:text-white/50 transition-colors duration-500">
                  (0{i + 1})
                </span>
                <MoveRight className="w-6 h-6 text-black opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#daff02] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
              </div>

              <div className="relative z-10 lg:w-3/4 flex flex-col md:flex-row gap-6 md:gap-16 items-start">
                <h3 className="w-full md:w-1/2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter leading-tight group-hover:text-white transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="w-full md:w-1/2 text-lg md:text-xl font-medium text-black/50 group-hover:text-white/70 leading-relaxed transition-colors duration-500 mt-2">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export function ServiceSlugClient({
  service,
  categoryLabel,
}: {
  service: ServiceContent;
  categoryLabel: string;
}) {
  return (
    <div className="bg-white">
      <Hero service={service} categoryLabel={categoryLabel} />
      <HorizontalScrollBenefits benefits={service.benefits} />
      <FeaturesAccordion features={service.features} />

      {/* Clean transition into CTA */}
      <div className="bg-white pt-20">
        <CTASection />
      </div>
    </div>
  );
}
