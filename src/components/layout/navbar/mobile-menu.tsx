"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { navigationItems } from "./config";
import { useState, useEffect } from "react";

const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.6,
      ease: [0.12, 0, 0.39, 0] as const,
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.3,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const linkContainerVars = {
  initial: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  animate: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.07,
      staggerDirection: 1,
    },
  },
};

const linkVars = {
  initial: {
    y: "15vh",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1] as const,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0, 0.55, 0.45, 1] as const,
      duration: 0.7,
    },
  },
};

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Close accordion smoothly when menu closes
      setTimeout(() => setOpenAccordion(null), 500);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const toggleAccordion = (title: string) => {
    setOpenAccordion((prev) => (prev === title ? null : title));
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed left-3 right-3 top-[55px] pb-[12px] h-[calc(100dvh-88px)] origin-top bg-[#050505] text-white z-90 flex flex-col justify-between overflow-y-auto overflow-x-hidden rounded-2xl shadow-[0px_20px_40px_rgba(0,0,0,0.4)] border border-white/10"
        >
          {/* The top bar is handled by the main Navbar.tsx -> which is z-100 and stays visible */}

          {/* Menu Link Container */}
          <motion.div
            variants={linkContainerVars}
            initial="initial"
            animate="animate"
            exit="initial"
            className="flex flex-col px-6 pt-10 pb-6 w-full flex-1 z-10"
          >
            {navigationItems.map((item, index) => (
              <div
                key={item.title}
                className="overflow-hidden border-b border-white/10 relative"
              >
                <motion.div variants={linkVars}>
                  {item.items ? (
                    <div>
                      <button
                        onClick={() => toggleAccordion(item.title)}
                        className="w-full flex justify-between items-center py-5 text-left group"
                      >
                        <span className="text-[8vw] sm:text-5xl font-black uppercase tracking-tighter text-white group-hover:text-white/70 transition-colors leading-[0.85] flex items-start gap-2 break-all sm:break-normal line-clamp-1">
                          <span className="text-white/20 text-[10px] sm:text-sm font-medium tracking-widest mt-1 sm:mt-2 shrink-0">
                            0{index + 1}
                          </span>
                          <span className="truncate">{item.title}</span>
                        </span>
                        <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full shrink-0">
                          {openAccordion === item.title ? (
                            <Minus className="w-5 h-5 text-white/70" />
                          ) : (
                            <Plus className="w-5 h-5 text-white/70" />
                          )}
                        </div>
                      </button>
                      <AnimatePresence>
                        {openAccordion === item.title && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.4,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-4 pb-8 pt-2 pl-6 sm:pl-10">
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.href}
                                  onClick={onClose}
                                  className="text-base sm:text-xl text-white/60 hover:text-white transition-colors tracking-widest uppercase font-medium flex items-center gap-2"
                                >
                                  <ArrowUpRight className="w-3 h-3 text-[#daff02]" />
                                  {subItem.title}
                                </Link>
                              ))}
                              {/* Direct Link to Main Page */}
                              <Link
                                href={item.href}
                                onClick={onClose}
                                className="text-base sm:text-xl text-[#daff02] hover:text-white transition-colors tracking-widest uppercase font-semibold mt-4 flex items-center gap-2"
                              >
                                <ArrowUpRight className="w-4 h-4" />
                                Alle {item.title} ansehen
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="py-5 flex items-start gap-2 text-[8vw] sm:text-5xl font-black uppercase tracking-tighter text-white hover:text-[#daff02] transition-colors leading-[0.85] line-clamp-1"
                    >
                      <span className="text-white/20 text-[10px] sm:text-sm font-medium tracking-widest mt-1 sm:mt-2 shrink-0">
                        0{index + 1}
                      </span>
                      <span className="truncate">{item.title}</span>
                    </Link>
                  )}
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Footer of Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="px-6 py-8 w-full shrink-0 flex flex-col gap-6 z-10"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="flex flex-col gap-3 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
                <span className="text-white/30">Socials</span>
                <a
                  href="https://www.instagram.com/invertadigital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#daff02] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/invertadigitall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#daff02] transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#daff02] transition-colors"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex flex-col gap-3 text-[10px] sm:text-xs font-semibold tracking-widest uppercase items-end text-right">
                <span className="text-white/30">Kontakt</span>
                <a
                  href="mailto:info@invertadigital.de"
                  className="text-[#daff02] hover:text-white transition-colors"
                >
                  info@invertadigital.de
                </a>
                <p className="text-white/50 leading-relaxed font-medium">
                  Rubensweg 1<br /> 01217 Dresden
                  <br /> Deutschland
                </p>
              </div>
            </div>
          </motion.div>

          {/* Ambient Glow / Background Magic */}
          <div className="absolute top-[10%] right-[-30%] w-[300px] h-[300px] bg-[#daff02] rounded-full blur-[160px] opacity-10 pointer-events-none z-0" />
          <div className="absolute bottom-[20%] left-[-20%] w-[250px] h-[250px] bg-[#daff02] rounded-full blur-[140px] opacity-10 pointer-events-none z-0" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
