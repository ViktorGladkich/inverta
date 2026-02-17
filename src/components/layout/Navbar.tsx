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
import { Menu, X, ChevronDown } from "lucide-react";
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
    if (latest > 50 && !scrolled) setScrolled(true);
    else if (latest <= 50 && scrolled) setScrolled(false);
  });

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed z-100 transition-all duration-500 ease-in-out font-satoshi",
          // Mobile: Floating Island (Solid #f5f5f5, no glass)
          "top-3 left-3 right-3 rounded-[10px] bg-[#f5f5f5] border-b-2 border-white/30",
          "shadow-[rgba(0,0,0,0.07)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.07)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.06)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.03)_0px_30px_30px_-3.5px,rgb(255,255,255)_0px_3px_1px_0px_inset]",
          // Desktop: Reset to Full Width
          "lg:top-0 lg:left-0 lg:right-0 lg:rounded-none lg:shadow-none lg:border-none lg:max-w-none lg:mx-0",
          // Desktop Scroll States
          scrolled
            ? "lg:py-2 lg:bg-white/95 lg:backdrop-blur-md lg:border-b lg:border-neutral-200/60 lg:shadow-sm"
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
          <div
            className="hidden lg:flex items-center gap-8"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {navigationItems.map((item, index) => (
              <div
                key={item.title}
                className="relative h-full flex items-center justify-center p-2"
                onMouseEnter={() => setHoveredIndex(index)}
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
            className="lg:hidden p-2 rounded-full bg-neutral-100 text-black hover:bg-neutral-200 transition-colors z-110 relative w-10 h-10 flex items-center justify-center overflow-hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
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
