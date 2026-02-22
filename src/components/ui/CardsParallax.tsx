"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export interface CardItem {
  title: string;
  description: string;
  tag?: string;
  src?: string | null;
  link?: string;
  color?: string;
  textColor?: string;
  icon?: React.ReactNode;
}

export const CardsParallax = ({ items }: { items: CardItem[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="mt-12 w-full relative">
      {items.map((item, i) => {
        const targetScale = 1 - (items.length - i) * 0.05;
        return (
          <Card
            key={i}
            i={i}
            item={item}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

const Card = ({
  i,
  item,
  progress,
  range,
  targetScale,
}: {
  i: number;
  item: CardItem;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Apply parallax zoom only on desktop
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? 1 : 2, 1],
  );
  const scale = useTransform(progress, range, [1, targetScale]);

  const neumorphicShadow =
    "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset";

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center sticky top-[80px] md:top-0"
      style={{ height: "calc(var(--vh, 1vh) * 85)" }}
    >
      <motion.div
        style={{
          scale,
          backgroundColor: "#f5f5f5", // Force standard BG
          color: "black", // Force standard text
          top: `${i * 25}px`,
          boxShadow: neumorphicShadow,
        }}
        className="relative flex flex-col md:flex-row gap-6 md:gap-8 origin-top w-full max-w-5xl rounded-[20px] p-6 md:p-10"
      >
        {/* Content Side */}
        <div className="flex flex-col justify-between w-full md:w-[45%] h-full gap-6 md:gap-8">
          <div className="flex flex-col gap-4 md:gap-6">
            {/* Tag / Icon (Styled like Strategy Card bubbles) */}
            <div className="flex items-center gap-3">
              {item.icon && (
                <div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#f5f5f5] flex items-center justify-center text-black"
                  style={{ boxShadow: neumorphicShadow }}
                >
                  {item.icon}
                </div>
              )}
              {item.tag && (
                <span
                  className="px-3 py-1 rounded-full bg-[#f5f5f5] text-[10px] md:text-xs font-bold uppercase tracking-wider text-black/60"
                  style={{ boxShadow: neumorphicShadow }}
                >
                  {item.tag}
                </span>
              )}
            </div>

            <h2 className="text-2xl md:text-5xl font-medium tracking-tight text-black mb-2">
              {item.title}
            </h2>

            <p className="text-base md:text-xl text-[#16101e]/80 font-normal leading-relaxed">
              {item.description}
            </p>
          </div>

          {item.link && (
            <div className="mt-2 md:mt-4">
              <span className="text-sm font-bold underline opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                Mehr erfahren
              </span>
            </div>
          )}
        </div>

        {/* Image Side */}
        <div
          className="relative w-full md:w-[55%] h-[200px] md:h-auto rounded-[16px] overflow-hidden bg-neutral-200"
          style={{ boxShadow: "rgba(0,0,0,0.05) 0px 10px 20px -5px" }}
        >
          <motion.div className="w-full h-full" style={{ scale: imageScale }}>
            {item.src ? (
              <Image
                fill
                src={item.src}
                alt={item.title}
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-linear-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                <span className="opacity-30 text-4xl font-bold text-black">
                  Inverta
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
