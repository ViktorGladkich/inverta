"use client";

import { FC, ReactNode } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

/* Single word that reveals based on scroll progress */
const RevealWord: FC<{
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-0.5 lg:mx-1">
      <span className="opacity-15">{children}</span>
      <motion.span style={{ opacity }} className="absolute inset-0 text-black">
        {children}
      </motion.span>
    </span>
  );
};

/* Paragraph that reveals word-by-word, driven by external scroll progress.
   Also fades in/out so only the active paragraph is visible. */
export const ScrollRevealParagraph: FC<{
  text: string;
  progress: MotionValue<number>;
  range: [number, number];
  number: string;
  className?: string;
}> = ({ text, progress, range, number, className }) => {
  const words = text.split(" ");
  const segmentProgress = useTransform(progress, range, [0, 1]);

  // Fade in at start of range, fade out at end
  const containerOpacity = useTransform(
    progress,
    [Math.max(0, range[0] - 0.03), range[0], range[1] - 0.02, range[1]],
    [0, 1, 1, 0],
  );

  return (
    <motion.div
      style={{ opacity: containerOpacity }}
      className={`absolute inset-0 flex gap-5 items-start ${className ?? ""}`}
    >
      <span className="text-[10px] font-bold tracking-widest text-black/20 uppercase mt-1 shrink-0 pt-[3px]">
        {number}
      </span>
      <p className="flex flex-wrap text-lg md:text-xl font-normal leading-relaxed">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <RevealWord key={i} progress={segmentProgress} range={[start, end]}>
              {word}
            </RevealWord>
          );
        })}
      </p>
    </motion.div>
  );
};
