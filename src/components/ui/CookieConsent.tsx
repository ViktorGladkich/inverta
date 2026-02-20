"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Cookie,
  Shield,
  BarChart3,
  Settings2,
  ChevronDown,
} from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Lock body scroll while cookie banner is visible
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVisible]);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "essential");
    setIsVisible(false);
  };

  const cookieCategories = [
    {
      id: "essential" as const,
      icon: <Shield className="w-4 h-4" />,
      title: "Essentiell",
      description:
        "Notwendig für die grundlegende Funktionalität der Website. Diese Cookies können nicht deaktiviert werden.",
      required: true,
    },
    {
      id: "analytics" as const,
      icon: <BarChart3 className="w-4 h-4" />,
      title: "Analyse",
      description:
        "Helfen uns zu verstehen, wie Besucher unsere Website nutzen, um sie kontinuierlich zu verbessern.",
      required: false,
    },
    {
      id: "marketing" as const,
      icon: <Settings2 className="w-4 h-4" />,
      title: "Marketing",
      description:
        "Werden verwendet, um Werbung relevanter für Sie zu gestalten und die Effektivität von Kampagnen zu messen.",
      required: false,
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-9998 bg-black/10 backdrop-blur-[2px]"
          />

          <motion.div
            initial={{ y: 80, opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ y: 60, opacity: 0, scale: 0.96, filter: "blur(8px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-9999 flex items-center justify-center px-4 pointer-events-none"
          >
            <div
              className="relative rounded-[20px] bg-white border border-black/5 overflow-hidden max-h-[calc(100dvh-100px)] overflow-y-auto w-full max-w-[440px] pointer-events-auto"
              style={{
                boxShadow:
                  "0 40px 80px -20px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.02), 0 2px 4px rgba(0,0,0,0.04)",
              }}
            >
              {/* Header */}
              <div className="p-6 pb-0 sm:p-7 sm:pb-0">
                <div className="flex items-start gap-4 mb-5">
                  <motion.div
                    initial={{ rotate: -30, scale: 0.8 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{
                      delay: 0.3,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
                  >
                    <Cookie className="w-5.5 h-5.5 text-white" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-black tracking-tight leading-tight mb-1">
                      Ihre Privatsphäre ist uns wichtig
                    </h3>
                    <p className="text-[12px] text-black/40 font-medium leading-relaxed">
                      Wir verwenden Cookies und ähnliche Technologien, um Ihnen
                      ein optimales Online-Erlebnis zu bieten.
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[13px] leading-[1.7] text-black/50 font-medium">
                  Wir nutzen Cookies, um unsere Website zu verbessern, den
                  Traffic zu analysieren und personalisierte Inhalte anzubieten.
                  Sie können Ihre Einstellungen jederzeit anpassen. Weitere
                  Informationen finden Sie in unserer{" "}
                  <Link
                    href="/datenschutz"
                    className="text-black font-semibold underline underline-offset-2 decoration-black/15 hover:decoration-black/50 transition-all"
                  >
                    Datenschutzerklärung
                  </Link>
                  .
                </p>
              </div>

              {/* Toggle Details */}
              <div className="px-6 sm:px-7 mt-4">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center gap-2 text-[12px] font-semibold text-black/50 hover:text-black/80 transition-colors uppercase tracking-wider group"
                >
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${showDetails ? "rotate-180" : ""}`}
                  />
                  Cookie-Einstellungen anpassen
                </button>
              </div>

              {/* Expandable Cookie Categories */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-7 pt-4 pb-2 flex flex-col gap-3">
                      {cookieCategories.map((cat) => (
                        <div
                          key={cat.id}
                          className="flex items-start gap-3 p-3 rounded-xl bg-black/2 border border-black/4"
                        >
                          <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center shrink-0 mt-0.5 text-black/50">
                            {cat.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[13px] font-bold text-black tracking-tight">
                                {cat.title}
                              </span>
                              {cat.required ? (
                                <span className="text-[10px] font-semibold text-black/30 uppercase tracking-wider">
                                  Immer aktiv
                                </span>
                              ) : (
                                <button
                                  onClick={() =>
                                    setPreferences((prev) => ({
                                      ...prev,
                                      [cat.id]: !prev[cat.id],
                                    }))
                                  }
                                  className={`relative w-10 h-[22px] rounded-full transition-colors duration-300 ${
                                    preferences[cat.id]
                                      ? "bg-black"
                                      : "bg-black/10"
                                  }`}
                                >
                                  <motion.div
                                    layout
                                    transition={{
                                      type: "spring",
                                      stiffness: 500,
                                      damping: 30,
                                    }}
                                    className={`absolute top-[3px] w-4 h-4 rounded-full bg-white shadow-sm ${
                                      preferences[cat.id]
                                        ? "left-[22px]"
                                        : "left-[3px]"
                                    }`}
                                  />
                                </button>
                              )}
                            </div>
                            <p className="text-[11px] text-black/40 leading-relaxed font-medium">
                              {cat.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="p-6 sm:p-7 pt-5 flex flex-col gap-2.5">
                <button
                  onClick={handleAcceptAll}
                  className="w-full py-3.5 rounded-xl text-[13px] font-bold text-white bg-black hover:bg-black/85 shadow-[0_2px_10px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-300 tracking-tight active:scale-[0.98]"
                >
                  Alle Cookies akzeptieren
                </button>
                <div className="flex items-center gap-2.5">
                  {showDetails && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      onClick={handleSavePreferences}
                      className="flex-1 py-3 rounded-xl text-[12px] font-semibold text-black/70 bg-black/4 hover:bg-black/8 transition-all duration-200 tracking-tight"
                    >
                      Auswahl speichern
                    </motion.button>
                  )}
                  <button
                    onClick={handleDecline}
                    className={`${showDetails ? "flex-1" : "w-full"} py-3 rounded-xl text-[12px] font-semibold text-black/50 bg-black/4 hover:bg-black/8 transition-all duration-200 tracking-tight`}
                  >
                    Nur Essentielle
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
