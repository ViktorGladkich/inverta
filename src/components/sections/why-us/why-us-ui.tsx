"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useMotionValue, animate } from "motion/react";

/**
 * A wrapper card component with complex neumorphic shadow styling.
 * Used across multiple cards in the Benefits section.
 */
export const WhyUsCard = ({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-[20px] bg-[#f5f5f5]",
        "shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(0,0,0,0.08),0px_1.80656px_1.80656px_-1.33333px_rgba(0,0,0,0.08),0px_3.62176px_3.62176px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.66667px_rgba(0,0,0,0.07),0px_13.6468px_13.6468px_-3.33333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),inset_0px_3px_1px_0px_rgba(255,255,255,1)]",
        className,
      )}
    >
      {children}
    </div>
  );
};

/**
 * An animated pill that displays a percentage and label,
 * interpolating the percentage value over time.
 */
export const AnimatedPill = ({
  label,
  values,
  times,
  duration,
}: {
  label: string;
  values: number[];
  times: number[];
  duration: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(values[0]);

  useEffect(() => {
    const controls = animate(motionValue, values, {
      duration: duration,
      times: times,
      repeat: Infinity,
      ease: "easeInOut",
    });
    return controls.stop;
  }, [motionValue, duration, values, times]);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest)}% ${label}`;
      }
    });
    return unsubscribe;
  }, [motionValue, label]);

  return (
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap px-4 py-1 bg-[#f5f5f5] rounded-[100px] shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(0,0,0,0.08),0px_1.80656px_1.80656px_-1.33333px_rgba(0,0,0,0.08),0px_3.62176px_3.62176px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.66667px_rgba(0,0,0,0.07),0px_13.6468px_13.6468px_-3.33333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),inset_0px_3px_1px_0px_white] text-xs font-bold text-black z-20">
      <span ref={ref} />
    </div>
  );
};
