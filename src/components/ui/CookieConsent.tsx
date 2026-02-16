"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
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
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 z-100 mx-auto max-w-2xl"
        >
          <div className="rounded-2xl bg-neutral-900 p-6 text-white shadow-2xl md:flex md:items-center md:justify-between md:gap-6">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Cookies & Datenschutz</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Wir nutzen Cookies, um Ihnen die bestmögliche Erfahrung zu
                bieten. Einige sind essentiell, andere helfen uns, unsere
                Website zu verbessern. Weitere Informationen finden Sie in
                unserer{" "}
                <Link
                  href="/datenschutz"
                  className="underline hover:text-white"
                >
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                onClick={handleDecline}
                className="text-sm text-neutral-400 hover:text-white transition-colors py-2 px-4"
              >
                Nur Essentielle
              </button>
              <Button
                onClick={handleAccept}
                variant="secondary"
                size="sm"
                className="whitespace-nowrap"
              >
                Alle akzeptieren
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
