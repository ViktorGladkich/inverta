"use client";

import { useState, useEffect } from "react";
import { DesktopView } from "./DesktopView";
import { MobileView } from "./MobileView";

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

  if (isDesktop === null) return null;

  return isDesktop ? <DesktopView /> : <MobileView />;
}
