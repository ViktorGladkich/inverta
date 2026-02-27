"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { ServiceContent } from "@/data/services";
import { VideoSchema } from "@/components/seo/VideoSchema";
import { cn } from "@/lib/utils";

interface HeroProps {
  service: ServiceContent;
  categoryLabel: string;
}

const badge = (categoryLabel: string) => (
  <div className="overflow-hidden mb-12 md:mb-16">
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="w-fit flex items-center justify-center px-[16px] py-[8px] gap-2.5 rounded-[60px] bg-white shadow-[0px_0.706592px_0.706592px_-0.541667px_rgba(0,0,0,0.1),0px_1.80656px_1.80656px_-1.08333px_rgba(0,0,0,0.09),0px_3.62176px_3.62176px_-1.625px_rgba(0,0,0,0.09),0px_6.8656px_6.8656px_-2.16667px_rgba(0,0,0,0.09),0px_13.6468px_13.6468px_-2.70833px_rgba(0,0,0,0.08),0px_30px_30px_-3.25px_rgba(0,0,0,0.05),inset_0px_3px_1px_0px_white]"
    >
      <div className="w-[16px] h-[16px] text-black/40">
        <Sparkles className="w-full h-full" />
      </div>
      <span className="text-[12px] font-bold text-black tracking-widest uppercase">
        {categoryLabel}
      </span>
    </motion.div>
  </div>
);

const title = (words: string[], isMobile: boolean) => (
  <h1
    lang="de"
    className="text-[10vw] sm:text-[8vw] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] text-black font-medium tracking-tighter leading-[0.95] uppercase flex flex-wrap justify-center gap-x-2 md:gap-x-4 gap-y-2 mb-8 md:mb-10 px-4 w-full drop-shadow-sm hyphens-auto"
  >
    {words.map((word, i) => {
      const isLongWord = isMobile && word.length > 12;
      return (
        <div
          key={i}
          className={cn(
            "overflow-hidden py-4 max-w-full",
            isLongWord && "text-[7.5vw] xs:text-[8.5vw]",
          )}
        >
          <motion.span
            initial={{ y: "110%", rotateZ: 5 }}
            animate={{ y: "0%", rotateZ: 0 }}
            transition={{
              duration: 1,
              delay: i * 0.1,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="block"
          >
            {word}
          </motion.span>
        </div>
      );
    })}
  </h1>
);

const accentAndText = (heroText: string) => (
  <>
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="w-24 h-1 bg-[#daff02] mb-6"
    />
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="text-lg md:text-2xl text-black max-w-2xl font-medium leading-relaxed px-6"
    >
      {heroText}
    </motion.p>
  </>
);

const videoBackground = (serviceTitle: string) => (
  <div className="absolute inset-0 z-0 bg-white">
    <VideoSchema
      name={`${serviceTitle} Service Background`}
      description={`Videopräsentation für ${serviceTitle} - INVERTA Digital`}
      thumbnailUrl="https://invertadigital.de/slug-poster.jpg"
      contentUrl="https://invertadigital.de/slug-loop.mp4"
    />
    <video
      autoPlay
      muted
      loop
      playsInline
      poster="/slug-poster.jpg"
      className="w-full h-full object-cover"
    >
      <source src="/slug-loop.mp4" type="video/mp4" />
    </video>
  </div>
);

/* ── Mobile: без useScroll, без параллакса ── */
function MobileHero({ service, categoryLabel }: HeroProps) {
  const titleWords = service.title.split(" ");

  return (
    <section
      className="relative flex items-center justify-center px-6 overflow-hidden bg-white"
      style={{ height: "calc(var(--vh, 1vh) * 100)" }}
    >
      {videoBackground(service.title)}
      <div className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col items-center text-center mt-12">
        {badge(categoryLabel)}
        {title(titleWords, true)}
        {accentAndText(service.heroText)}
      </div>
    </section>
  );
}

/* ── Desktop: с useScroll и параллаксом ── */
function DesktopHero({ service, categoryLabel }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleWords = service.title.split(" ");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative flex items-center justify-center px-6 overflow-hidden bg-white"
      style={{ height: "calc(var(--vh, 1vh) * 100)" }}
    >
      {videoBackground(service.title)}
      <motion.div
        style={{ y, opacity }}
        className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col items-center text-center mt-12 md:mt-16"
      >
        {badge(categoryLabel)}
        {title(titleWords, false)}
        {accentAndText(service.heroText)}
      </motion.div>
    </section>
  );
}

/* ── Main export ── */
export const Hero = ({ service, categoryLabel }: HeroProps) => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.innerWidth < 768;
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <MobileHero service={service} categoryLabel={categoryLabel} />
  ) : (
    <DesktopHero service={service} categoryLabel={categoryLabel} />
  );
};
