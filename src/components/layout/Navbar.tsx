"use client";

import React, { useState, useEffect } from "react";
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

  // Dropdowns schließen, wenn auf eine neue Seite navigiert wird
  useEffect(() => {
    setHoveredIndex(null); // eslint-disable-line
    setMobileMenuOpen(false);
  }, [pathname]);

  /* Hover-Logik mit Timeout, um Flackern zu vermeiden */
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
          // Mobile: Floating Island (Always White)
          mobileMenuOpen
            ? "top-3 left-3 right-3 bg-[#f8f8f8] rounded-2xl border border-black/5 shadow-md text-black"
            : "top-3 left-3 right-3 rounded-2xl bg-[#f8f8f8] border border-black/5 shadow-[0px_13px_27px_-5px_rgba(50,50,93,0.25),0px_8px_16px_-8px_rgba(0,0,0,0.3)] text-black",
          // Desktop: Reset to Full Width
          "lg:top-0 lg:left-0 lg:right-0 lg:rounded-none lg:shadow-none lg:border-none lg:max-w-none lg:mx-0",
          // Desktop Scroll States
          scrolled
            ? "lg:py-2 lg:bg-white/20 lg:backdrop-blur-sm lg:border-b lg:border-neutral-200/60 lg:shadow-sm"
            : "lg:py-2 lg:bg-transparent lg:border-transparent",
        )}
      >
        <nav className="container mx-auto py-2 px-4 md:px-6 flex items-center justify-between">
          {/* Logo - Optimiert für lokale SEO (Dresden) */}
          <Link
            href="/"
            title="INVERTA Digitalagentur Startseite"
            className="relative z-50 flex items-center gap-2"
          >
            <Image
              src="/logo-inverta.png"
              alt="INVERTA DIGITAL Logo - Marketing & Webentwicklung Agentur aus Dresden"
              width={140}
              height={40}
              className="h-12 w-auto object-contain scale-[2.5] origin-left transition-transform duration-300 hover:scale-[2.6]"
              priority
            />
          </Link>

          {/* Desktop Navigation (SEO-freundliche Liste) */}
          <ul className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item, index) => (
              <li
                key={item.title}
                className="h-full flex items-center justify-center p-2"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className="relative z-10 text-base font-medium text-black transition-colors duration-200 flex items-center gap-1 group"
                  title={`Bereich ${item.title} entdecken`}
                >
                  {item.title}
                  {/* Hover Unterstreichung */}
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
              </li>
            ))}
          </ul>

          {/* Call to Action (Projekt starten) */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/kontakt"
              title="Starten Sie Ihr Projekt für Webdesign oder KI"
              className="group relative inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-[10px] shadow-[0_30px_30px_-3.5px_rgba(0,0,0,0.15),0_13px_13px_-2.9px_rgba(0,0,0,0.26),0_6px_6px_-2.3px_rgba(0,0,0,0.3)] hover:shadow-[0_40px_40px_-5px_rgba(0,0,0,0.4)] hover:scale-[1.02] transition-all duration-300"
            >
              <span className="font-semibold text-sm">Projekt starten</span>
              <ButtonArrow className="w-3 h-3" />
            </Link>
          </div>

          {/* Mobiler Burger-Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-transparent hover:bg-white/10 transition-colors z-110 relative w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
          >
            <motion.span
              animate={mobileMenuOpen ? "open" : "closed"}
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 7 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-5 h-[2px] block origin-center rounded-full transition-colors bg-black"
            />
            <motion.span
              animate={mobileMenuOpen ? "open" : "closed"}
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.2 }}
              className="w-5 h-[2px] block rounded-full transition-colors bg-black"
            />
            <motion.span
              animate={mobileMenuOpen ? "open" : "closed"}
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -7 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-5 h-[2px] block origin-center rounded-full transition-colors bg-black"
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
