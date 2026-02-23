"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ServiceContent } from "@/data/services";
import { MoveRight, Mouse, Route } from "lucide-react";
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

  const titleWords = service.title.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[800px] flex items-center justify-center px-6 overflow-hidden bg-white"
      style={{ minHeight: "calc(var(--vh, 1vh) * 100)" }}
    >
      <div className="absolute inset-0 z-0 bg-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/slug-loop.mp4" type="video/mp4" />
        </video>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col items-center text-center mt-12 md:mt-20 text-white"
      >
        <div className="overflow-hidden mb-12 md:mb-16">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-black/20 bg-white/30 backdrop-blur-xl"
          >
            <span className="text-[11px] font-bold tracking-[0.2em] text-black uppercase">
              {categoryLabel}
            </span>
          </motion.div>
        </div>

        <h1 className="text-[10vw] sm:text-[8vw] md:text-[5rem] lg:text-[6rem] xl:text-[7.5rem] text-black font-medium tracking-tighter leading-[0.85] uppercase flex flex-wrap justify-center gap-x-2 md:gap-x-6 gap-y-2 mb-16 md:mb-24 px-4 w-full">
          {titleWords.map((word, i) => (
            <div key={i} className="overflow-hidden pb-4 max-w-full">
              <motion.span
                initial={{ y: "110%", rotateZ: 5 }}
                animate={{ y: "0%", rotateZ: 0 }}
                transition={{
                  duration: 1.2,
                  ease: [0.76, 0, 0.24, 1],
                  delay: i * 0.1,
                }}
                className="inline-block origin-bottom-left wrap-break-word max-w-full"
              >
                {word}
              </motion.span>
            </div>
          ))}
        </h1>

        <div className="overflow-hidden w-full max-w-2xl px-4 mb-20">
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col items-center"
          >
            <div className="w-24 h-[2px] bg-[#daff02] mb-5 " />
            <p className="text-lg md:text-2xl text-black font-medium leading-relaxed max-w-xl mx-auto">
              {service.heroText}
            </p>
          </motion.div>
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

  // Calculate horizontal scroll distance dynamically based on item count
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${((benefits.length - 1) / benefits.length) * 100}%`],
  );

  return (
    <section
      ref={targetRef}
      className="relative bg-[#f5f5f5] text-black"
      style={{ height: `${benefits.length * 100}vh` }}
    >
      <div
        className="sticky top-0 flex items-center overflow-hidden"
        style={{ height: "calc(var(--vh, 1vh) * 100)" }}
      >
        {/* Decorative corner texts */}
        <div className="absolute top-10 left-10 font-mono text-black text-sm font-bold tracking-widest uppercase">
          [ Advantages ]
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-black text-sm font-bold tracking-widest uppercase flex flex-col items-center gap-2">
          <Mouse className="w-6 h-6 animate-bounce" />
          <span>Scroll</span>
        </div>

        <motion.div style={{ x }} className="flex h-full">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="w-screen shrink-0 flex items-center justify-center relative px-6 md:px-20"
              style={{ height: "calc(var(--vh, 1vh) * 100)" }}
            >
              <div className="relative w-full max-w-5xl flex items-center justify-center">
                {/* Massive Number */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] sm:text-[400px] md:text-[600px] font-black text-[#daff02] leading-none select-none tracking-tighter pointer-events-none">
                  0{index + 1}
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-16 w-full mt-10 md:mt-0">
                  <div className="w-16 md:w-32 h-[2px] sm:h-2 bg-black shrink-0" />
                  <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-medium tracking-tighter leading-[1.05] text-black uppercase drop-shadow-2xl">
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
    <section className="relative bg-[#f5f5f5] pt-40 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 md:mb-32">
          <FadeIn className="flex flex-col items-center text-center gap-6 md:gap-8 mb-16">
            <div className="w-fit flex items-center justify-center px-[12px] py-[6px] gap-2 rounded-[60px] bg-white shadow-[0px_0.706592px_0.706592px_-0.541667px_rgba(0,0,0,0.1),0px_1.80656px_1.80656px_-1.08333px_rgba(0,0,0,0.09),0px_3.62176px_3.62176px_-1.625px_rgba(0,0,0,0.09),0px_6.8656px_6.8656px_-2.16667px_rgba(0,0,0,0.09),0px_13.6468px_13.6468px_-2.70833px_rgba(0,0,0,0.08),0px_30px_30px_-3.25px_rgba(0,0,0,0.05),inset_0px_3px_1px_0px_white]">
              <div className="w-[14px] h-[14px] text-black/40">
                <Route className="w-full h-full" />
              </div>
              <span className="text-[12px] font-medium text-black tracking-wider uppercase">
                Methodik
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black">
              Der Weg{" "}
              <span className="relative inline-block">
                <span className="absolute bottom-1 left-0 w-full h-4 bg-[#daff02] z-0" />
                <span className="relative z-10 text-black">Zum Ziel.</span>
              </span>
            </h2>
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

              <div className="relative z-10 lg:w-1/4 mb-6 lg:mb-0 flex items-start gap-4 pl-2 md:pl-4">
                <span className="text-lg md:text-xl font-mono text-black/40 group-hover:text-white/50 transition-colors duration-500">
                  0{i + 1}
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
      <div className="bg-[#f5f5f5] pt-20">
        <CTASection />
      </div>
    </div>
  );
}
