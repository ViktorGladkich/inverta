"use client";

import { motion } from "framer-motion";
import { MessageSquare, Star } from "lucide-react";
import { BlurTextEffect } from "@/components/ui/BlurTextEffect";

const testimonials = [
  {
    id: 1,
    company: "VanturaHandwerk",
    role: "Geschäftsführung",
    name: "Reza Vantura",
    quote:
      "Durch die individuelle Multi-Page-Website heben wir uns endlich deutlich von der Konkurrenz ab. Die Qualität unserer Handwerksleistungen wird digital perfekt transportiert, was zu spürbar mehr qualifizierten Anfragen geführt hat.",
    image: "/images/projects/vanturahandwerk.jpeg",
  },
  {
    id: 2,
    company: "NEXORA Digital",
    role: "Head of Marketing",
    name: "Sarah Lin",
    quote:
      "Inverta hat unsere IT-Expertise in ein modernes Web-Erlebnis verwandelt. Das neue Branding und die maßgeschneiderten Funnels funktionieren hervorragend – wir messen eine deutliche Steigerung der Conversion-Rate.",
    image: "/images/projects/nexora.jpeg",
  },
  {
    id: 3,
    company: "A.S.S. Security",
    role: "Inhaber",
    name: "Semion Raskin",
    quote:
      "Ein fokussierter One-Pager, der genau unseren Bedarf trifft. Das Design schafft sofortiges Vertrauen bei unseren Kunden im Objekt- und Personenschutz. Professionell, schnell und auf den Punkt.",
    image: "/images/projects/ass-security.jpeg",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative z-10 py-16 md:py-24 bg-[#f5f5f5]"
    >
      <div className="w-full  px-6 md:px-[40px] max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center gap-6 mb-12 md:mb-16"
        >
          <div className="w-fit flex items-center px-[12px] py-[6px] gap-2 rounded-[60px] bg-[#f5f5f5] shadow-[inset_0px_3px_1px_0px_white,0px_2px_4px_rgba(0,0,0,0.05)]">
            <div className="w-[14px] h-[14px] text-black/40">
              <MessageSquare className="w-full h-full" />
            </div>
            <span className="text-[12px] font-medium text-black tracking-wider uppercase">
              REFERENZEN
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black max-w-2xl leading-tight">
            Was unsere Kunden sagen
          </h2>
          <p className="text-lg text-black font-normal leading-relaxed max-w-xl">
            Erfolgsgeschichten von Unternehmen, die mit unseren Lösungen ihre
            Ziele erreicht haben.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 mb-8">
          {/* Featured quote */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full rounded-[20px] bg-[#f5f5f5] px-6 py-10 md:px-10 md:pt-[60px] md:pb-10 flex flex-col justify-center items-center gap-6 h-full min-h-[300px] text-center"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
            }}
          >
            <h3 className="text-xl md:text-[24px] font-medium leading-normal text-[#16101e] max-w-lg">
              <BlurTextEffect>
                Ihr{" "}
                <span className="text-black/40 inline-block">
                  AI-driven Ansatz
                </span>{" "}
                half uns, die richtige Zielgruppe zu erreichen und durch{" "}
                <span className="text-black/40 inline-block">
                  smartere Insights
                </span>{" "}
                schneller zu wachsen – unsere Strategie wurde gestrafft und{" "}
                <span className="text-black/40 inline-block">
                  Ergebnisse erzielt
                </span>
                , die wir zuvor nicht erreichen konnten.
              </BlurTextEffect>
            </h3>

            <div className="w-8 h-8 md:w-10 md:h-10 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                fill="currentColor"
                className="w-full h-full"
              >
                <path d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z"></path>
              </svg>
            </div>
          </motion.div>

          {/* Featured image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full rounded-[20px] bg-[#f5f5f5] p-[20px] relative h-full min-h-[250px] lg:min-h-auto shadow-lg flex flex-col"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
            }}
          >
            <div className="relative w-full h-full rounded-[16px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage: "url(/images/projects/vanturahandwerk.jpeg)",
                }}
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="rounded-[16px] bg-[#f5f5f5] p-6 flex flex-col justify-between gap-4"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
              }}
            >
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 text-black fill-black"
                    strokeWidth={0}
                  />
                ))}
              </div>

              <h3 className="text-sm md:text-base leading-relaxed text-black/80 font-medium">
                &quot;{t.quote}&quot;
              </h3>

              <div className="flex items-center gap-4 pt-6 mt-auto">
                {/* Avatar */}
                <div
                  className="p-1 bg-[#f5f5f5] rounded-[5px]"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
                  }}
                >
                  <div className="w-10 h-10 rounded-[12%] bg-neutral-200 flex items-center justify-center shrink-0 overflow-hidden relative">
                    {/* Placeholder or Image if available */}
                    <span className="text-black/60 font-bold text-sm z-10">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                </div>

                <div className="h-8 w-[3px] border-l-[3px] border-dotted border-black/40 opacity-40" />

                <div className="flex flex-col">
                  <span className="text-sm font-bold text-black">{t.name}</span>
                  <span className="text-xs text-black/50 font-medium">
                    {t.role} @ {t.company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
