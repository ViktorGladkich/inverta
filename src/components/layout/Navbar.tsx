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
          "fixed top-0 left-0 right-0 z-100 transition-all duration-500 ease-in-out border-b font-satoshi",
          scrolled
            ? "bg-white/60 backdrop-blur-sm border-white/40 shadow-lg supports-backdrop-filter:bg-white/5"
            : "bg-transparent border-transparent",
        )}
      >
        <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="relative z-50 flex items-center gap-2">
            <Image
              src="/logo-inverta.png"
              alt="INVERTA"
              width={140}
              height={40}
              className="h-22 w-auto object-contain transition-transform duration-300 hover:scale-105"
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
            className="lg:hidden p-2 rounded-full bg-neutral-100 text-black hover:bg-neutral-200 transition-colors z-110"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
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
