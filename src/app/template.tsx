"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 0);
  }, [pathname]);

  return (
    <div key={pathname} className="relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
          delay: 0.2,
        }}
      >
        {children}
      </motion.div>

      <div className="fixed inset-0 z-9990 flex w-full h-screen pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`black-${i}`}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.06 * i,
            }}
            className="h-full w-full bg-[#050505] origin-top"
          />
        ))}
      </div>

      <div className="fixed inset-0 z-9989 flex w-full h-screen pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`neon-${i}`}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.06 * i + 0.08,
            }}
            className="h-full w-full bg-[#daff02] origin-top"
          />
        ))}
      </div>
    </div>
  );
}
