"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="relative">
      {/* Page Content with fade + slide up animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.1,
        }}
      >
        {children}
      </motion.div>

      {/* Curtain reveal overlay — slides up on page enter */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.65, 0, 0.35, 1],
        }}
        className="fixed inset-0 z-[9990] bg-[#f5f5f5] origin-top pointer-events-none"
      />

      {/* Secondary curtain for depth */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.65, 0, 0.35, 1],
          delay: 0.05,
        }}
        className="fixed inset-0 z-[9989] bg-white origin-top pointer-events-none"
      />
    </div>
  );
}
