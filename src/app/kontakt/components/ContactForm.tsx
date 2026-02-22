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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full flex flex-col items-center justify-center text-center gap-6 bg-white p-12 md:p-16 rounded-[40px] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] border border-black/5"
          >
            <div className="w-24 h-24 rounded-full bg-[#daff02]/20 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-12 h-12 text-[#b0cc00]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black">
              Vielen Dank!
            </h2>
            <p className="text-lg text-black/60 font-medium">
              Ihre Projektanfrage wurde erfolgreich versendet. Wir melden uns in
              Kürze bei Ihnen.
            </p>
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
                    className="w-full bg-transparent border-b border-black/10 pb-4 pt-2 text-xl md:text-2xl font-normal placeholder:text-black/20 focus:outline-none focus:border-black transition-colors rounded-none disabled:opacity-50"
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
                    className="w-full bg-transparent border-b border-black/10 pb-4 pt-2 text-xl md:text-2xl font-normal placeholder:text-black/20 focus:outline-none focus:border-black transition-colors rounded-none disabled:opacity-50"
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
                  className="w-full bg-transparent border-b border-black/10 pb-4 pt-2 text-xl md:text-2xl font-normal placeholder:text-black/20 focus:outline-none focus:border-black transition-colors rounded-none disabled:opacity-50"
                />
              </div>

              {/* Eingabefeld: Unternehmen */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="company"
                  className="text-xs tracking-[0.15em] font-semibold uppercase text-black"
                >
                  04. Ihr Unternehmen
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Muster GmbH"
                  disabled={status === "loading"}
                  className="w-full bg-transparent border-b border-black/10 pb-4 pt-2 text-xl md:text-2xl font-normal placeholder:text-black/20 focus:outline-none focus:border-black transition-colors rounded-none disabled:opacity-50"
                />
              </div>

              {/* Auswahlfeld: Leistungen */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="service"
                  className="text-xs tracking-[0.15em] font-semibold uppercase text-black"
                >
                  05. Wofür interessieren Sie sich?
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  disabled={status === "loading"}
                  className="w-full bg-transparent border-b border-black/10 pb-4 pt-2 text-xl md:text-2xl font-normal text-black appearance-none focus:outline-none focus:border-black transition-colors rounded-none cursor-pointer disabled:opacity-50"
                >
                  <option value="" disabled className="text-black/20">
                    Bitte wählen...
                  </option>
                  <option value="marketing">Marketing & SEO</option>
                  <option value="webdev">Webentwicklung</option>
                  <option value="automation">KI & Automatisierung</option>
                  <option value="other">Etwas anderes</option>
                </select>
              </div>

              {/* Eingabefeld: Projektbeschreibung */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs tracking-[0.15em] font-semibold uppercase text-black"
                >
                  06. Ihr Projekt
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Erzählen Sie uns von Ihrer Vision... *"
                  required
                  disabled={status === "loading"}
                  className="w-full bg-transparent border-b border-black/10 pb-4 pt-2 text-xl md:text-2xl font-normal placeholder:text-black/20 focus:outline-none focus:border-black transition-colors rounded-none resize-none disabled:opacity-50"
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
