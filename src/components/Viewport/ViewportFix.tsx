"use client";

import { useEffect } from "react";

export function ViewportFix() {
  useEffect(() => {
    let rafId: number;
    let lastHeight = 0;

    const updateVh = () => {
      const currentHeight = window.innerHeight;
      if (currentHeight !== lastHeight) {
        lastHeight = currentHeight;
        const vh = currentHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      }
    };

    const handleResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateVh);
    };

    updateVh();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
