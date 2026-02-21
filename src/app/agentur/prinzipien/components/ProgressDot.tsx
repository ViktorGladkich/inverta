"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface ProgressDotProps {
  index: number;
  progress: MotionValue<number>;
  totalItems: number;
}

export function ProgressDot({ index, progress, totalItems }: ProgressDotProps) {
  const scaleX = useTransform(
    progress,
    [index / totalItems, (index + 0.5) / totalItems],
    [1, 1.5],
  );
  const backgroundColor = useTransform(
    progress,
    [index / totalItems, (index + 1) / totalItems],
    ["rgba(0,0,0,0.12)", "#000000"],
  );

  return (
    <motion.div
      style={{ scaleX, backgroundColor }}
      className="h-1 w-6 rounded-full origin-left"
    />
  );
}
