"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { ButtonArrow } from "@/components/layout/navbar/icons";

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: `${formData.get("vorname")} ${formData.get("nachname")}`,
      email: formData.get("email"),
      telefon: formData.get("phone"),
      company: formData.get("company"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Fehler beim Senden der Nachricht.");
      }

      setStatus("success");
      // Scroll to the confirmation so the user sees it
      setTimeout(() => {
        formRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    } catch {
      setErrorMessage(
        "Etwas ist schief gelaufen. Bitte versuchen Sie es später noch einmal.",
      );
      setStatus("error");

      // Reset back to idle after a few seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  };

  return (
    <div
      ref={formRef}
      className="w-full lg:w-[45%] flex items-center min-h-[600px] relative"
    >
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex flex-col items-center justify-center text-center gap-8 bg-neutral-950 p-12 md:p-20 rounded-[40px] border border-white/5 relative overflow-hidden shadow-2xl"
          >
            {/* Animated Gradient Background */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg_at_50%_50%,rgba(218,255,2,0.08)_0deg,transparent_60deg,transparent_300deg,rgba(218,255,2,0.08)_360deg)] opacity-70"
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_70%)]" />

            {/* Glowing orb */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#daff02] rounded-full blur-[120px] opacity-10"
            />

            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 100,
                delay: 0.2,
              }}
              className="relative w-28 h-28 rounded-full bg-linear-to-br from-[#daff02] to-[#8a9f00] flex items-center justify-center mb-2 shadow-[0_0_40px_rgba(218,255,2,0.2)]"
            >
              <div className="absolute inset-[2px] bg-neutral-950 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-[#daff02]" />
              </div>
            </motion.div>

            <div className="relative z-10 flex flex-col gap-6">
              <div className="space-y-2">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                  className="text-4xl md:text-5xl font-medium tracking-tight text-white"
                >
                  Anfrage
                  <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#daff02] to-[#8a9f00]">
                    erfolgreich
                  </span>
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                className="text-lg text-white/50 font-light max-w-md mx-auto leading-relaxed"
              >
                Ihre Vision ist bei uns angekommen. Wir analysieren Ihre Daten
                und melden uns in Kürze mit den nächsten Schritten.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-4 relative z-10"
            >
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm uppercase tracking-[0.2em] font-semibold cursor-pointer"
              >
                <span className="w-8 h-px bg-white/20 group-hover:bg-[#daff02] group-hover:w-12 transition-all duration-300" />
                Neue Anfrage
              </button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.form
            key="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="w-full flex flex-col gap-16 bg-white p-8 md:p-16 rounded-[40px] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] border border-black/5"
          >
            <div className="flex flex-col gap-10 md:gap-14">
              {/* Eingabefelder: Name */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-6">
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor="vorname"
                    className="text-xs tracking-[0.15em] font-semibold uppercase text-black"
                  >
                    01. Vorname
                  </label>
                  <input
                    type="text"
                    id="vorname"
                    name="vorname"
                    placeholder="Erika *"
                    required
                    disabled={status === "loading"}
                    className="w-full bg-transparent border-b border-black pb-4 pt-2 text-xl md:text-2xl font-normal placeholder:text-black/20 focus:outline-none focus:border-black transition-colors rounded-none disabled:opacity-50"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor="nachname"
                    className="text-xs tracking-[0.15em] font-semibold uppercase text-black"
                  >
                    02. Nachname
                  </label>
                  <input
                    type="text"
                    id="nachname"
                    name="nachname"
                    placeholder="Mustermann *"
                    required
                    disabled={status === "loading"}
                    className="w-full bg-transparent border-b border-black pb-4 pt-2 text-xl md:text-2xl font-normal placeholder:text-black/20 focus:outline-none focus:border-black transition-colors rounded-none disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Eingabefeld: Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-xs tracking-[0.15em] font-semibold uppercase text-black"
                >
                  03. Ihre E-Mail Adresse
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="info@firma.de *"
                  required
                  disabled={status === "loading"}
                  className="w-full bg-transparent border-b border-black pb-4 pt-2 text-xl md:text-2xl font-normal placeholder:text-black/20 focus:outline-none focus:border-black transition-colors rounded-none disabled:opacity-50"
                />
              </div>

              {/* Eingabefeld: Telefon */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="text-xs tracking-[0.15em] font-semibold uppercase text-black"
                >
                  04. Ihre Telefonnummer
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+49 123 456 789 *"
                  required
                  disabled={status === "loading"}
                  className="w-full bg-transparent border-b border-black pb-4 pt-2 text-xl md:text-2xl font-normal placeholder:text-black/20 focus:outline-none focus:border-black transition-colors rounded-none disabled:opacity-50"
                />
              </div>

              {/* Eingabefeld: Unternehmen */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="company"
                  className="text-xs tracking-[0.15em] font-semibold uppercase text-black"
                >
                  05. Ihr Unternehmen
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Muster GmbH"
                  disabled={status === "loading"}
                  className="w-full bg-transparent border-b border-black pb-4 pt-2 text-xl md:text-2xl font-normal placeholder:text-black/20 focus:outline-none focus:border-black transition-colors rounded-none disabled:opacity-50"
                />
              </div>

              {/* Auswahlfeld: Leistungen */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="service"
                  className="text-xs tracking-[0.15em] font-semibold uppercase text-black"
                >
                  06. Wofür interessieren Sie sich?
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  required
                  disabled={status === "loading"}
                  className="w-full bg-transparent border-b border-black pb-4 pt-2 text-xl md:text-2xl font-normal text-black appearance-none focus:outline-none focus:border-black transition-colors rounded-none cursor-pointer disabled:opacity-50"
                >
                  <option value="" disabled className="text-black/20">
                    Bitte wählen... *
                  </option>
                  <option value="Marketing & SEO">Marketing & SEO</option>
                  <option value="Webentwicklung">Webentwicklung</option>
                  <option value="KI-Automatisierung">
                    KI & Automatisierung
                  </option>
                  <option value="Etwas anderes">Etwas anderes</option>
                </select>
              </div>

              {/* Eingabefeld: Projektbeschreibung */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs tracking-[0.15em] font-semibold uppercase text-black"
                >
                  07. Ihr Projekt
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Erzählen Sie uns von Ihrer Vision... *"
                  required
                  disabled={status === "loading"}
                  className="w-full bg-transparent border-b border-black pb-4 pt-2 text-xl md:text-2xl font-normal placeholder:text-black/20 focus:outline-none focus:border-black transition-colors rounded-none resize-none disabled:opacity-50"
                />
              </div>

              <AnimatePresence>
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm font-medium"
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Absende-Bereich und Datenschutz-Hinweis */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative flex items-center justify-center gap-4 bg-black text-white px-8 md:px-12 py-5 md:py-6 rounded-[10px] text-sm font-semibold tracking-widest uppercase overflow-hidden hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full sm:w-auto shrink-0 cursor-pointer disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    "Anfrage senden"
                  )}
                </span>
                {status !== "loading" && (
                  <>
                    <ButtonArrow className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    <div className="absolute inset-0 bg-neutral-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                  </>
                )}
              </button>

              <p className="text-[10px] md:text-xs text-black/40 font-medium uppercase tracking-wider text-center sm:text-right leading-relaxed max-w-[200px]">
                Mit dem Absenden stimmen Sie unserer <br />
                <a
                  href="/datenschutz"
                  className="underline hover:text-black text-black/60 transition-colors"
                >
                  Datenschutzerklärung
                </a>{" "}
                zu.
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
