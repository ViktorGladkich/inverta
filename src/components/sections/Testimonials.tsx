"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { Quote } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const testimonials = [
  {
    text: "INVERTA hat unsere Erwartungen übertroffen. Die neue Website generiert nicht nur mehr Traffic, sondern vor allem qualifiziertere Leads. Wir sind begeistert von der Professionalität und dem Ergebnis.",
    author: "Marc Müller",
    position: "CEO, EcoSolutions GmbH",
    company: "EcoSolutions",
  },
  {
    text: "Die Zusammenarbeit war von Anfang an partnerschaftlich und transparent. Das Team versteht es, komplexe technische Anforderungen in ein großartiges Nutzererlebnis zu übersetzen.",
    author: "Julia Weber",
    position: "Marketing Director, Urban Architecture",
    company: "Urban Architecture",
  },
  {
    text: "Seit dem Relaunch unseres Onlineshops haben wir eine Umsatzsteigerung von 40% verzeichnet. Die Ladezeiten sind extrem schnell und das Design ist einfach wunderschön.",
    author: "Thomas Klein",
    position: "Inhaber, Pure Skincare",
    company: "Pure Skincare",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-neutral-900 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neutral-800 to-transparent opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <FadeIn>
              <h2 className="text-sm font-mono text-neutral-400 mb-6 uppercase tracking-widest">
                Kundenstimmen
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Vertrauen ist unsere Währung. <br />
                <span className="text-neutral-500">
                  Das sagen unsere Partner.
                </span>
              </h3>
              <p className="text-lg text-neutral-400 mb-12">
                Wir sind stolz darauf, mit visionären Unternehmen
                zusammenzuarbeiten und gemeinsam Erfolgsgeschichten zu
                schreiben.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={prev}
                  className="bg-transparent border-neutral-700 text-white hover:bg-neutral-800 hover:text-white rounded-full w-12 h-12 p-0 flex items-center justify-center"
                >
                  <span className="sr-only">Previous</span>←
                </Button>
                <Button
                  variant="outline"
                  onClick={next}
                  className="bg-transparent border-neutral-700 text-white hover:bg-neutral-800 hover:text-white rounded-full w-12 h-12 p-0 flex items-center justify-center"
                >
                  <span className="sr-only">Next</span>→
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Right Content - Slider */}
          <div className="w-full lg:w-1/2 relative h-[400px] flex items-center">
            <div className="absolute inset-0">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: i === active ? 1 : 0,
                    x: i === active ? 0 : 50,
                    zIndex: i === active ? 10 : 0,
                    pointerEvents: i === active ? "auto" : "none",
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <Quote className="w-12 h-12 text-neutral-700 mb-6" />
                  <p className="text-2xl md:text-3xl font-light italic leading-relaxed mb-8">
                    &quot;{t.text}&quot;
                  </p>
                  <div>
                    <p className="font-bold text-lg">{t.author}</p>
                    <p className="text-neutral-500">{t.position}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
