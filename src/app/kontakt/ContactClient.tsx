"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ButtonArrow } from "@/components/layout/navbar/icons";

export default function ContactClient() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
    <main className="min-h-screen bg-[#f5f5f5] pt-32 pb-24 text-black selection:bg-black selection:text-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row justify-between gap-24 lg:gap-10">
          {/* Left Column: Big Text & Contact Info */}
          <div className="w-full lg:w-[45%] flex flex-col justify-between">
            <div className="sticky top-32">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-[clamp(4rem,8vw,8rem)] tracking-tighter leading-[0.9] font-medium uppercase wrap-break-word"
              >
                LASS <br />
                <span className="text-[#daff02] italic drop-shadow-sm">
                  UNS
                </span>{" "}
                <br />
                SPRECHEN
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="mt-16 flex flex-col gap-10 text-lg font-medium"
              >
                <div>
                  <a
                    href="mailto:info@invertadigital.de"
                    className="group flex items-center gap-4 text-2xl md:text-4xl hover:text-black/60 transition-colors"
                  >
                    info@invertadigital.de
                    <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-8 text-base">
                  <div className="flex flex-col gap-1 pr-6">
                    <span className="text-black/40 text-xs tracking-[0.2em] font-semibold uppercase mb-2 border-b border-black/10 pb-2">
                      Office
                    </span>
                    <p className="mt-2 text-black/80 font-normal leading-relaxed">
                      Rubensweg 1
                      <br />
                      01217 Dresden
                      <br />
                      Deutschland
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-black/40 text-xs tracking-[0.2em] font-semibold uppercase mb-2 border-b border-black/10 pb-2">
                      Socials
                    </span>
                    <ul className="mt-2 flex flex-col gap-1 text-black/80 font-normal">
                      <li>
                        <a
                          href="https://www.instagram.com/invertadigital/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-black transition-colors"
                        >
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/invertadigitall"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-black transition-colors"
                        >
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-black transition-colors"
                        >
                          LinkedIn
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-[45%] flex items-center min-h-[600px] relative">
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
                    Ihre Projektanfrage wurde erfolgreich versendet. Wir melden
                    uns in Kürze bei Ihnen.
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
                    {/* Field 1 & 2 */}
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

                    {/* Field 3 */}
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

                    {/* Field 4 */}
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

                    {/* Field 5 */}
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

                    {/* Field 6 */}
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

                  {/* Submit Section */}
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
        </div>
      </div>
    </main>
  );
}
