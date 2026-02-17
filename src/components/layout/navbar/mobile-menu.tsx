"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MoveRight, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { navigationItems } from "./config";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ButtonArrow } from "./icons";

const menuVars = {
  initial: {
    opacity: 1,
    height: 68, // Match Navbar height (48 logo + 16 py + 2 border + 2 margin approx)
    y: 0,
    scale: 1,
  },
  animate: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.5,
      ease: [0.32, 0.72, 0, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    height: 68,
    transition: {
      duration: 0.3,
      ease: [0.32, 0.72, 0, 1] as const,
    },
  },
};

const shadowStyle =
  "rgba(0, 0, 0, 0.07) 0px 0.706592px 0.706592px -0.583333px, rgba(0, 0, 0, 0.07) 0px 1.80656px 1.80656px -1.16667px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -1.75px, rgba(0, 0, 0, 0.06) 0px 6.8656px 6.8656px -2.33333px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -2.91667px, rgba(0, 0, 0, 0.03) 0px 30px 30px -3.5px, rgb(255, 255, 255) 0px 3px 1px 0px inset";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-140 bg-black/20 backdrop-blur-[2px]"
          />
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-3 left-3 right-3 z-150 bg-[#f5f5f5] rounded-[10px] overflow-hidden flex flex-col max-h-[90vh]"
            style={{ boxShadow: shadowStyle }}
          >
            {/* Header: Logo & Close Button */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-black/5 shrink-0">
              <Link href="/" onClick={onClose} className="relative block">
                <Image
                  src="/logo-inverta.png"
                  alt="INVERTA"
                  width={140}
                  height={40}
                  className="h-12 w-auto object-contain scale-[2.5] origin-left"
                  priority
                />
              </Link>

              <button
                onClick={onClose}
                className="relative w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 text-black hover:bg-neutral-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex-1 overflow-y-auto p-5 flex flex-col gap-2"
            >
              {navigationItems.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-[10px] overflow-hidden shadow-sm border border-transparent hover:border-black/5 transition-colors"
                >
                  {item.items ? (
                    <div>
                      <button
                        onClick={() => toggleAccordion(item.title)}
                        className="flex items-center justify-between w-full p-4 text-left"
                      >
                        <span className="text-lg font-bold text-black">
                          {item.title}
                        </span>
                        <ChevronDown
                          className={cn(
                            "w-5 h-5 text-neutral-400 transition-transform duration-300",
                            openAccordion === item.title
                              ? "rotate-180 text-black"
                              : "",
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {openAccordion === item.title && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-[#f9f9f9] border-t border-black/5"
                          >
                            <div className="flex flex-col p-2 gap-1">
                              {item.items.map((sub) => (
                                <Link
                                  key={sub.title}
                                  href={sub.href}
                                  onClick={onClose}
                                  className="p-3 rounded-lg text-sm font-medium text-neutral-600 hover:text-black hover:bg-white hover:shadow-sm transition-all flex items-center justify-between group"
                                >
                                  {sub.title}
                                  <MoveRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block w-full p-4 text-lg font-bold text-black"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <div className="p-5 pt-0">
              <Link
                href="/kontakt"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full bg-black text-white py-4 rounded-[10px] font-bold shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.15) 0px 30px 30px -3.5px, rgba(0, 0, 0, 0.26) 0px 13px 13px -2.9px",
                }}
              >
                <span>Projekt starten</span>
                <ButtonArrow className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
