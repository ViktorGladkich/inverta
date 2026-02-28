"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";

export const BenefitsSection = ({ benefits }: { benefits: string[] }) => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window === "undefined" ? true : window.innerWidth < 768
  );
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return isMobile ? <MobileBenefits benefits={benefits} /> : <DesktopBenefits benefits={benefits} />;
};

/* ── MOBILE ── */
function MobileBenefits({ benefits }: { benefits: string[] }) {
  return (
    <section className="relative bg-[#050505] text-white py-24 px-6 overflow-hidden">
      <NoiseOverlay />
      <div className="mb-16 overflow-hidden">
        <motion.p
          initial={{ y: "100%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="text-[#daff02] font-mono text-xs tracking-[0.3em] uppercase"
        >[ Vorteile ]</motion.p>
      </div>
      <div className="flex flex-col gap-0">
        {benefits.map((benefit, index) => (
          <MobileBenefitCard key={index} benefit={benefit} index={index} />
        ))}
      </div>
    </section>
  );
}

function MobileBenefitCard({ benefit, index }: { benefit: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [60, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className="border-b border-white/10 py-10 group">
      <div className="flex items-start gap-5">
        <span className="font-mono text-[#daff02] text-xs tracking-widest mt-1 shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex-1">
          <h3 className="text-[clamp(1.6rem,7vw,2.2rem)] font-medium tracking-tighter text-white leading-[1.05] uppercase hyphens-auto">
            {benefit}
          </h3>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.08, ease: [0.76, 0, 0.24, 1] }}
            className="mt-4 h-[2px] bg-[#daff02] origin-left"
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ── DESKTOP ── */
function DesktopBenefits({ benefits }: { benefits: string[] }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useSpring(mouseX, { stiffness: 400, damping: 35 });
  const cursorY = useSpring(mouseY, { stiffness: 400, damping: 35 });

  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${((benefits.length - 1) / benefits.length) * 100}%`]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => { mouseX.set(e.clientX - 40); mouseY.set(e.clientY - 40); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  useEffect(() => scrollYProgress.on("change", v => setActiveIndex(Math.round(v * (benefits.length - 1)))), [scrollYProgress, benefits.length]);

  return (
    <div ref={targetRef} className="relative bg-[#050505]" style={{ height: `calc(100vh * ${benefits.length})` }}>
      {/* Magnetic cursor */}
      <motion.div
        style={{ x: cursorX, y: cursorY, opacity: cursorVisible ? 1 : 0 }}
        className="fixed top-0 left-0 z-9999 w-20 h-20 rounded-full bg-[#daff02] mix-blend-exclusion pointer-events-none flex items-center justify-center"
      >
        <span className="text-black text-[9px] font-mono font-bold tracking-widest uppercase">Scroll↓</span>
      </motion.div>

      <div
        className="sticky top-0 flex items-center overflow-hidden"
        style={{ height: "100vh" }}
        onMouseEnter={() => setCursorVisible(true)}
        onMouseLeave={() => setCursorVisible(false)}
      >
        <NoiseOverlay />

        {/* Top bar */}
        <div className="absolute top-10 left-12 right-12 z-20 flex items-center justify-between pointer-events-none">
          <p className="text-[#daff02] font-mono text-xs tracking-[0.3em] uppercase">[ Vorteile ]</p>
          <div className="flex items-center gap-3">
            {benefits.map((_, i) => (
              <motion.div key={i} className="rounded-full"
                animate={{ width: i === activeIndex ? 24 : 6, height: 6, backgroundColor: i === activeIndex ? "#daff02" : "rgba(255,255,255,0.15)" }}
                transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              />
            ))}
          </div>
          <div className="font-mono text-white/30 text-xs tracking-widest">
            <span className="text-white">{String(activeIndex + 1).padStart(2, "0")}</span>
            <span> / {String(benefits.length).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 z-20">
          <motion.div style={{ width: progressWidth }} className="h-full bg-[#daff02]" />
        </div>

        {/* Slides */}
        <motion.div style={{ x }} className="flex h-full will-change-transform">
          {benefits.map((benefit, index) => (
            <BenefitSlide key={index} benefit={benefit} index={index} total={benefits.length} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function BenefitSlide({ benefit, index, total }: { benefit: string; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [6, -6]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), { stiffness: 200, damping: 30 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width);
    mouseY.set((e.clientY - r.top) / r.height);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5); mouseY.set(0.5); setHovered(false);
  }, [mouseX, mouseY]);

  const letters = benefit.split("");

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="w-screen shrink-0 flex items-center justify-center relative px-24"
      style={{ height: "100vh", perspective: "1200px" }}
    >
      {/* Giant number */}
      <motion.div
        animate={{ opacity: hovered ? 0.12 : 0.04, scale: hovered ? 1.04 : 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 flex items-center justify-end pr-16 pointer-events-none select-none overflow-hidden"
      >
        <span className="font-black text-white leading-none" style={{ fontSize: "clamp(280px, 38vw, 560px)" }}>
          {String(index + 1).padStart(2, "0")}
        </span>
      </motion.div>

      {/* Vertical yellow accent */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
        className="absolute left-24 top-1/2 -translate-y-1/2 w-[3px] bg-[#daff02] origin-top"
        style={{ height: "35vh" }}
      />

      {/* 3D card */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-10 pl-20 max-w-5xl"
      >
        <h3 aria-label={benefit}
          className="font-medium tracking-[-0.03em] leading-[0.88] text-white uppercase"
          style={{ fontSize: "clamp(3.5rem, 7.5vw, 8.5rem)" }}
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: "105%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.022, ease: [0.76, 0, 0.24, 1] }}
              animate={hovered ? { color: i % 4 === 0 ? "#daff02" : "#fff", transition: { duration: 0.25, delay: i * 0.012 } } : { color: "#fff" }}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h3>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="mt-8 flex items-center gap-4"
        >
          <motion.div
            animate={{ width: hovered ? 80 : 48 }}
            transition={{ duration: 0.4 }}
            className="h-[2px] bg-[#daff02]"
          />
          <span className="font-mono text-[#daff02] text-[11px] tracking-[0.25em] uppercase">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

function NoiseOverlay() {
  return (
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "128px",
      }}
    />
  );
}