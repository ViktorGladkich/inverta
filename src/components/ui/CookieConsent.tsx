"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Subtle backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[9998] bg-black/5 backdrop-blur-[1px] pointer-events-none"
          />

          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.96, filter: "blur(8px)" }}
            animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ y: 40, opacity: 0, scale: 0.96, filter: "blur(6px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-5 left-4 right-4 sm:left-auto sm:right-5 sm:max-w-[420px] z-[9999]"
          >
            <div
              className="relative rounded-2xl bg-white border border-black/[0.06] p-6 sm:p-7 overflow-hidden"
              style={{
                boxShadow:
                  "0px 32px 64px -12px rgba(0,0,0,0.14), 0px 0px 0px 1px rgba(0,0,0,0.02), 0px 1px 2px rgba(0,0,0,0.06)",
              }}
            >
              {/* Close Button */}
              <button
                onClick={handleDecline}
                className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full bg-black/[0.04] hover:bg-black/[0.08] transition-colors group"
                aria-label="Cookie-Banner schließen"
              >
                <X className="w-3.5 h-3.5 text-black/40 group-hover:text-black/70 transition-colors" />
              </button>

              {/* Icon + Title Row */}
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  initial={{ rotate: -20 }}
                  animate={{ rotate: 0 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shrink-0"
                >
                  <Cookie className="w-5 h-5 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-[15px] font-bold text-black tracking-tight leading-tight">
                    Cookies & Datenschutz
                  </h3>
                  <p className="text-[11px] text-black/40 font-medium tracking-wide uppercase mt-0.5">
                    Wir respektieren Ihre Privatsphäre
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-[13px] leading-relaxed text-black/55 font-medium mb-6">
                Wir nutzen Cookies, um Ihnen die bestmögliche Erfahrung zu
                bieten. Einige sind essentiell, andere helfen uns, unsere
                Website zu verbessern.{" "}
                <Link
                  href="/datenschutz"
                  className="text-black underline underline-offset-2 decoration-black/20 hover:decoration-black/60 transition-all"
                >
                  Mehr erfahren
                </Link>
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleDecline}
                  className="flex-1 py-3 px-4 rounded-xl text-[13px] font-semibold text-black/60 bg-black/[0.04] hover:bg-black/[0.08] transition-all duration-200 tracking-tight"
                >
                  Nur Essentielle
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 py-3 px-4 rounded-xl text-[13px] font-semibold text-white bg-black hover:bg-black/85 shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.25)] transition-all duration-200 tracking-tight active:scale-[0.98]"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
