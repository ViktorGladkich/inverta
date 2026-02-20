"use client";

import { useRef, useEffect, useState } from "react";
import { animate } from "framer-motion";

export function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animate(0, to, {
            duration: 2,
            ease: "easeOut",
            onUpdate(value) {
              node.textContent = value.toFixed(0) + suffix;
            },
          });
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [to, suffix, hasAnimated]);

  return (
    <span
      ref={nodeRef}
      className="text-2xl md:text-3xl font-black tracking-tight text-black leading-none"
    >
      0{suffix}
    </span>
  );
}
