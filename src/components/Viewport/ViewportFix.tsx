"use client";

import { useEffect } from "react";

export function ViewportFix() {
  useEffect(() => {
    // Устанавливаем высоту ОДИН РАЗ и не меняем её при скролле
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    
    // Только при реальном resize (повороте экрана), не при скролле
    let lastWidth = window.innerWidth;
    const handleResize = () => {
      if (window.innerWidth !== lastWidth) {
        lastWidth = window.innerWidth;
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return null;
}