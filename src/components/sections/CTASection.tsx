"use client";

import { useRef } from "react";
import Link from "next/link";
import { Rocket, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { motion } from "framer-motion";

const NEUMORPHIC_SHADOW =
  "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset";

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-[#f5f5f5] overflow-hidden py-24 px-4 md:px-8"
    >
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px] relative z-10">
        {/* Centered Badge */}
        <div className="flex justify-center mb-12 md:mb-16">
          <FadeIn>
            <div
              className="w-fit flex items-center justify-center px-[12px] py-[6px] gap-3 rounded-[60px] bg-[#f5f5f5]"
              style={{ boxShadow: NEUMORPHIC_SHADOW }}
            >
              <Rocket className="w-3.5 h-3.5 text-black/40" />
              <span className="text-[12px] font-medium text-black tracking-wider uppercase">
                Bereit für den nächsten Schritt?
              </span>
            </div>
          </FadeIn>
        </div>

        <div className="flex justify-center">
          <FadeIn>
            <div
              className="w-full max-w-[1000px] flex flex-col items-center text-center gap-10 p-12 md:p-24 rounded-[40px] md:rounded-[64px] bg-[#f5f5f5]"
              style={{ boxShadow: NEUMORPHIC_SHADOW }}
            >
              {/* Headline */}
              <motion.h2
                className="text-[clamp(2.5rem,5vw,5.5rem)] font-medium tracking-tight leading-[0.95] text-black"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Lassen Sie uns
                <br />
                gemeinsam{" "}
                <span className="relative inline-block text-black/20">
                  Großes
                </span>
                <br />
                <span className="relative inline-block">
                  <span className="absolute bottom-[4px] left-0 w-full h-[8px] md:h-[12px] bg-[#daff02] z-0" />
                  <span className="relative z-10">schaffen.</span>
                </span>
              </motion.h2>

              <p className="text-base md:text-lg text-black/60 font-normal leading-relaxed max-w-lg">
                Jedes erfolgreiche Projekt beginnt mit einem Gespräch. Erzählen
                Sie uns von Ihrer Vision – wir machen den Rest.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                {/* Primary CTA */}
                <Link
                  href="/kontakt"
                  className="group relative inline-flex items-center justify-between gap-3 sm:gap-6 md:gap-8 bg-black text-white p-2 pr-5 sm:pr-6 rounded-full overflow-hidden transition-all duration-500 hover:pr-8 active:scale-95 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] w-fit"
                >
                  <div className="absolute inset-0 bg-[#daff02] -translate-x-full rounded-full transition-transform duration-500 ease-out group-hover:translate-x-0" />

                  <div className="relative z-10 w-9 h-9 md:w-12 md:h-12 rounded-full bg-[#daff02] flex items-center justify-center text-black transition-transform duration-500 group-hover:bg-black group-hover:text-[#daff02] shrink-0">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>

                  <span className="relative z-10 font-bold text-[10px] sm:text-sm md:text-base tracking-widest sm:tracking-widest uppercase transition-colors duration-500 group-hover:text-black whitespace-nowrap">
                    Kostenloses Erstgespräch
                  </span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
