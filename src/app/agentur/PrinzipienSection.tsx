"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Target, Zap, Eye, Users, Shield } from "lucide-react";

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

function ProgressDot({
  index,
  progress,
}: {
  index: number;
  progress: MotionValue<number>;
}) {
  const scaleX = useTransform(
    progress,
    [index / 4, (index + 0.5) / 4],
    [1, 1.5],
  );
  const backgroundColor = useTransform(
    progress,
    [index / 4, (index + 1) / 4],
    ["rgba(0,0,0,0.12)", "#000000"],
  );

  return (
    <motion.div
      style={{ scaleX, backgroundColor }}
      className="h-1 w-6 rounded-full origin-left"
    />
  );
}

function DesktopPrincipleLine({
  principle,
  index,
  progress,
}: {
  principle: (typeof principles)[0];
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index / principles.length;
  const end = (index + 1) / principles.length;

  const lineScale = useTransform(progress, [start, end], [0, 1]);
  const rowOpacity = useTransform(
    progress,
    [Math.max(0, start - 0.06), start],
    [0.25, 1],
  );
  const titleX = useTransform(progress, [start, start + 0.1], [-24, 0]);
  const contentOpacity = useTransform(progress, [start, start + 0.1], [0, 1]);
  const dotLeft = useTransform(lineScale, [0, 1], ["0%", "100%"]);
  const dotOpacity = useTransform(lineScale, [0, 0.04, 0.96, 1], [0, 1, 1, 0]);

  return (
    <motion.div style={{ opacity: rowOpacity }} className="flex flex-col">
      <div className="flex items-center gap-4 md:gap-8 py-2 md:py-3">
        <span className="text-[10px] font-black tracking-widest text-black/20 shrink-0 w-5">
          {principle.number}
        </span>
        <div
          className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 ${
            principle.isEven ? "bg-black text-white" : "bg-[#daff02] text-black"
          }`}
        >
          {principle.icon}
        </div>
        <motion.h3
          style={{ x: titleX, opacity: contentOpacity }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-black leading-none flex-1 min-w-0"
        >
          {principle.title}
        </motion.h3>

        <motion.div
          style={{ opacity: contentOpacity }}
          className="hidden md:flex items-center gap-2 shrink-0"
        >
          {principle.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#f5f5f5] text-black whitespace-nowrap"
              style={{ boxShadow: neumorphicShadow }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="flex flex-col sm:flex-row gap-2 sm:gap-6 pb-1 pl-[88px] md:pl-[124px]"
      >
        <p className="text-xs text-black font-normal leading-relaxed max-w-md flex-1">
          {principle.description}
        </p>
      </motion.div>

      <div className="relative h-[1.5px] w-full bg-black/6 mt-3 md:mt-2 overflow-visible">
        <motion.div
          style={{ scaleX: lineScale, originX: 0 }}
          className="absolute inset-0 bg-black"
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full pointer-events-none bg-black"
          style={{
            left: dotLeft,
            opacity: dotOpacity,
            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          }}
        />
      </div>
    </motion.div>
  );
}

function MobilePrincipleLine({
  principle,
  index,
}: {
  principle: (typeof principles)[0];
  index: number;
}) {
  const lineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 90%", "end 60%"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const dotLeft = useTransform(lineScale, [0, 1], ["0%", "100%"]);
  const dotOpacity = useTransform(lineScale, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex flex-col gap-4"
    >
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-black tracking-widest text-black/20 shrink-0 w-5">
          {principle.number}
        </span>
        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
            principle.isEven ? "bg-black text-white" : "bg-[#daff02] text-black"
          }`}
        >
          {principle.icon}
        </div>
        <h3 className="text-2xl font-medium tracking-tight text-black leading-none">
          {principle.title}
        </h3>
      </div>

      <div className="pl-[92px] flex flex-col gap-4">
        <p className="text-xs text-black font-normal leading-relaxed max-w-md">
          {principle.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {principle.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-[8px] font-bold tracking-widest uppercase bg-[#f5f5f5] text-black whitespace-nowrap"
              style={{ boxShadow: neumorphicShadow }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        ref={lineRef}
        className="relative h-[1.5px] w-full bg-black/6 mt-4 overflow-visible"
      >
        <motion.div
          style={{ scaleX: lineScale, originX: 0 }}
          className="absolute inset-0 bg-black"
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full pointer-events-none bg-black"
          style={{
            left: dotLeft,
            opacity: dotOpacity,
            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          }}
        />
      </div>
    </motion.div>
  );
}

function MobilePrinzipien() {
  return (
    <section
      className="relative z-10 bg-[#f5f5f5] py-24 px-6 md:px-16"
      aria-labelledby="values-heading"
    >
      <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-16">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center justify-center px-[12px] py-[6px] gap-2 rounded-[60px] bg-white shadow-sm border border-black/5">
            <Shield className="w-3.5 h-3.5 text-black/40" />
            <span className="text-[10px] font-medium text-black tracking-wider uppercase">
              Unsere Prinzipien
            </span>
          </div>
          <h2
            id="values-heading"
            className="text-3xl font-medium tracking-tight text-black"
          >
            Woran wir glauben.
          </h2>
        </div>

        <div className="flex flex-col gap-16">
          {principles.map((principle, index) => (
            <MobilePrincipleLine
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

function DesktopPrinzipien() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const contentY = useTransform(smoothProgress, [0.4, 0.85], [0, -105]);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-[#f5f5f5]"
      aria-labelledby="values-heading"
      style={{ minHeight: "500vh" }}
    >
      <div
        className="sticky top-0 flex flex-col overflow-hidden pt-24 pb-32 md:pb-12"
        style={{ height: "calc(var(--vh, 1vh) * 100)" }}
      >
        <motion.div
          style={{ y: contentY }}
          className="flex-1 flex flex-col px-6 md:px-16 max-w-[1400px] mx-auto w-full"
        >
          <div className="flex flex-col items-center text-center gap-4 mb-6 md:mb-8 shrink-0">
            <div className="flex items-center justify-center px-[12px] py-[6px] gap-2 rounded-[60px] bg-[#f5f5f5] shadow-[0px_0.706592px_0.706592px_-0.541667px_rgba(0,0,0,0.1),0px_1.80656px_1.80656px_-1.08333px_rgba(0,0,0,0.09),0px_3.62176px_3.62176px_-1.625px_rgba(0,0,0,0.09),0px_6.8656px_6.8656px_-2.16667px_rgba(0,0,0,0.09),0px_13.6468px_13.6468px_-2.70833px_rgba(0,0,0,0.08),0px_30px_30px_-3.25px_rgba(0,0,0,0.05),inset_0px_3px_1px_0px_white]">
              <div className="w-[14px] h-[14px] text-black/40">
                <Shield className="w-full h-full" />
              </div>
              <span className="text-[12px] font-medium text-black tracking-wider uppercase">
                Unsere Prinzipien
              </span>
            </div>
            <h2
              id="values-heading"
              className="text-2xl md:text-4xl font-medium tracking-tight text-black"
            >
              <span className="bg-linear-to-t from-black/80 to-black bg-clip-text text-transparent">
                Woran wir glauben.
              </span>
            </h2>

            <div className="hidden md:flex items-center gap-2 mt-2">
              {principles.map((_, i) => (
                <ProgressDot key={i} index={i} progress={smoothProgress} />
              ))}
            </div>
          </div>

          <div className="flex flex-col flex-1 justify-between">
            {principles.map((principle, index) => (
              <DesktopPrincipleLine
                key={principle.number}
                principle={principle}
                index={index}
                progress={smoothProgress}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function PrinzipienSection() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  if (isDesktop === null) return null; // Prevent SSR/Hydration mismatch

  return isDesktop ? <DesktopPrinzipien /> : <MobilePrinzipien />;
}
