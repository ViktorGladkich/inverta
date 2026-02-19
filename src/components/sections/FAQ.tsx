"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Welche Dienstleistungen bietet INVERTA an?",
    answer:
      "Wir sind spezialisiert auf High-End Webentwicklung (Next.js), datengetriebenes Performance Marketing und maßgeschneiderte AI-Lösungen zur Prozessautomatisierung. Unser Ziel ist es, Ihr digitales Wachstum ganzheitlich zu beschleunigen.",
  },
  {
    question: "Wie lange dauert die Umsetzung eines Projekts?",
    answer:
      "Je nach Komplexität und Umfang variiert die Projektlaufzeit. Eine Landingpage kann in 2-3 Wochen fertig sein, während umfassende Web-Applikationen oder AI-Integrationen 8-12 Wochen in Anspruch nehmen können. Nach dem Erstgespräch erhalten Sie einen detaillierten Zeitplan.",
  },
  {
    question: "Benötige ich technisches Vorwissen?",
    answer:
      "Überhaupt nicht. Wir übersetzen komplexe Technologie in verständliche Lösungen und begleiten Sie durch den gesamten Prozess. Während wir uns um den Code und die Strategie kümmern, können Sie sich voll auf Ihr Kerngeschäft konzentrieren.",
  },
  {
    question: "Ist meine Datensicherheit gewährleistet?",
    answer:
      "Absolut. Wir arbeiten streng nach DSGVO-Richtlinien und setzen auf modernste Sicherheitsstandards. Datensicherheit und Diskretion haben bei uns oberste Priorität, was wir auch gerne vertraglich zusichern (NDA).",
  },
  {
    question: "Lohnt sich AI-Automatisierung für mein Unternehmen?",
    answer:
      "In den meisten Fällen: Ja. AI kann repetitive Aufgaben automatisieren, Kundenservice verbessern und wertvolle Insights aus Ihren Daten gewinnen. Wir analysieren gerne unverbindlich Ihre Prozesse, um das konkrete Einsparpotenzial zu ermitteln.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative z-10 w-full bg-[#f5f5f5] py-24 mb-20 md:mb-0"
    >
      <div className="w-full max-w-[1000px] mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <div className="w-fit flex items-center px-[12px] py-[6px] gap-2 rounded-[60px] bg-[#f5f5f5] shadow-[inset_0px_3px_1px_0px_white,0px_2px_4px_rgba(0,0,0,0.05)]">
            <div className="w-[14px] h-[14px] text-black/40">
              <HelpCircle className="w-full h-full" />
            </div>
            <span className="text-[12px] font-medium text-black tracking-wider uppercase">
              FAQ
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black leading-tight">
            <span className="bg-linear-to-t from-black/80 to-black bg-clip-text text-transparent">
              Fragen? Antworten!
            </span>
          </h2>

          <p className="text-lg text-black font-normal leading-relaxed max-w-xl">
            Hier finden Sie schnelle Antworten auf die häufigsten Fragen zu
            unserer Zusammenarbeit.
          </p>
        </div>

        {/* Accordion */}
        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/50 border border-white shadow-sm backdrop-blur-sm">
          <Mail className="w-4 h-4 text-black" />
          <span className="text-sm font-medium text-black/80">
            Noch Fragen? Schreiben Sie uns:{" "}
            <a
              href="mailto:info@invertadigital.de"
              className="text-black font-medium hover:underline"
            >
              info@invertadigital.de
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={false}
      onClick={onClick}
      className={cn(
        "cursor-pointer group flex flex-col w-full rounded-[16px] bg-[#f5f5f5] overflow-hidden transition-all duration-300",
        isOpen
          ? "shadow-[inset_0px_2px_4px_rgba(0,0,0,0.02)]"
          : "hover:scale-[1.01]",
      )}
      style={{
        boxShadow: isOpen
          ? "inset 3px 3px 6px #d1d9e6, inset -3px -3px 6px #ffffff" // Inner shadow for active
          : "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, inset 0px 1px 0px 0px white", // Neumorphic outer for closed
      }}
    >
      <div className="flex items-center justify-between p-6">
        <h3
          className={cn(
            "text-lg font-medium tracking-tight leading-tight text-black/90 transition-colors",
            isOpen ? "text-black" : "",
          )}
        >
          {question}
        </h3>
        <div
          className={cn(
            "flex items-center justify-center transition-all duration-300",
            isOpen
              ? "rotate-180 text-black"
              : "text-black/40 group-hover:text-black",
          )}
        >
          {isOpen ? (
            <Minus className="w-5 h-5" />
          ) : (
            <Plus className="w-5 h-5" />
          )}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 pb-6 pt-0">
              <div className="h-px w-full bg-black/5 mb-4" />
              <p className="text-base text-black/70 leading-relaxed max-w-3xl">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
