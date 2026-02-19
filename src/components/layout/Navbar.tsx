"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import { navigationItems } from "./navbar/config";
import { MegaMenu } from "./navbar/mega-menu";
import { MobileMenu } from "./navbar/mobile-menu";
import { ButtonArrow } from "./navbar/icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  /* Hover Logic with Timeout to prevent flickering */
  const hoverTimeout = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setHoveredIndex(null);
    }, 200);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed z-100 transition-all duration-500 ease-in-out font-satoshi",
          // Mobile: Floating Island (Solid #f5f5f5, no glass)
          // Mobile: Floating Island
          mobileMenuOpen
            ? "top-3 left-3 right-3 bg-[#f8f8f8] rounded-t-2xl rounded-b-none border-b-transparent shadow-none"
            : "top-3 left-3 right-3 rounded-2xl bg-[#f8f8f8] border-b border-white/50 shadow-[0px_2px_4px_rgba(0,0,0,0.4),0px_7px_13px_-3px_rgba(0,0,0,0.3),inset_0px_-3px_0px_rgba(0,0,0,0.2)]",
          // Desktop: Reset to Full Width
          "lg:top-0 lg:left-0 lg:right-0 lg:rounded-none lg:shadow-none lg:border-none lg:max-w-none lg:mx-0",
          // Desktop Scroll States
          scrolled
            ? "lg:py-2 lg:bg-white/20 lg:backdrop-blur-sm lg:border-b lg:border-neutral-200/60 lg:shadow-sm"
            : "lg:py-2 lg:bg-transparent lg:border-transparent",
        )}
      >
        <nav className="container mx-auto py-2 px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="relative z-50 flex items-center gap-2">
            <Image
              src="/logo-inverta.png"
              alt="INVERTA"
              width={140}
              height={40}
              className="h-12 w-auto object-contain scale-[2.5] origin-left transition-transform duration-300 hover:scale-[2.6]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item, index) => (
              <div
                key={item.title}
                className="h-full flex items-center justify-center p-2"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.items ? "#" : item.href}
                  className="relative z-10 text-base font-medium text-black transition-colors duration-200 flex items-center gap-1 group"
                >
                  {item.title}
                  {/* Hover Underline */}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-full h-[1.5px] bg-black origin-left transition-transform duration-300 ease-out",
                      hoveredIndex === index || item.href === pathname
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                  {item.items && (
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        hoveredIndex === index ? "rotate-180" : "",
                      )}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {item.items && hoveredIndex === index && (
                    <MegaMenu item={item} />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/kontakt"
              className="group relative inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-[10px] shadow-[0_30px_30px_-3.5px_rgba(0,0,0,0.15),0_13px_13px_-2.9px_rgba(0,0,0,0.26),0_6px_6px_-2.3px_rgba(0,0,0,0.3)] hover:shadow-[0_40px_40px_-5px_rgba(0,0,0,0.4)] hover:scale-[1.02] transition-all duration-300"
            >
              <span className="font-semibold text-sm">Projekt starten</span>
              <ButtonArrow className="w-3 h-3" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-transparent text-black hover:bg-neutral-100/50 transition-colors z-110 relative w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
          >
            <motion.span
              animate={mobileMenuOpen ? "open" : "closed"}
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 7 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-5 h-[2px] bg-black block origin-center rounded-full"
            />
            <motion.span
              animate={mobileMenuOpen ? "open" : "closed"}
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.2 }}
              className="w-5 h-[2px] bg-black block rounded-full"
            />
            <motion.span
              animate={mobileMenuOpen ? "open" : "closed"}
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -7 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-5 h-[2px] bg-black block origin-center rounded-full"
            />
          </button>
        </nav>
      </motion.header>

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
