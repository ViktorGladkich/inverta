"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Rocket } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const neumorphicShadow =
  "0px 0.706592px 0.706592px -0.666667px rgba(0,0,0,0.08),0px 1.80656px 1.80656px -1.33333px rgba(0,0,0,0.08),0px 3.62176px 3.62176px -2px rgba(0,0,0,0.07),0px 6.8656px 6.8656px -2.66667px rgba(0,0,0,0.07),0px 13.6468px 13.6468px -3.33333px rgba(0,0,0,0.05),0px 30px 30px -3.25px rgba(0,0,0,0.05),inset 0px 3px 1px 0px white]";

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
            <div className="w-fit flex items-center justify-center px-[12px] py-[6px] gap-3 rounded-[60px] bg-[#f5f5f5] shadow-[0px_0.706592px_0.706592px_-0.541667px_rgba(0,0,0,0.1),0px_1.80656px_1.80656px_-1.08333px_rgba(0,0,0,0.09),0px_3.62176px_3.62176px_-1.625px_rgba(0,0,0,0.09),0px_6.8656px_6.8656px_-2.16667px_rgba(0,0,0,0.09),0px_13.6468px_13.6468px_-2.70833px_rgba(0,0,0,0.08),0px_30px_30px_-3.25px_rgba(0,0,0,0.05),inset_0px_3px_1px_0px_white]">
              <Rocket className="w-3.5 h-3.5 text-black/40" />
              <span className="text-[12px] font-medium text-black tracking-wider uppercase">
                Bereit für den nächsten Schritt?
              </span>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-end">
          {/* Left — headline */}
          <FadeIn>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
              {/* Headline */}
              <h2 className="text-[clamp(2.8rem,6vw,6.5rem)] font-medium tracking-tight leading-[0.92] text-black">
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
              </h2>

              <p className="text-base md:text-lg text-black/40 font-normal leading-relaxed max-w-lg">
                Jedes erfolgreiche Projekt beginnt mit einem Gespräch. Erzählen
                Sie uns von Ihrer Vision – wir machen den Rest.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mt-4">
                {/* Primary CTA */}
                <Link
                  href="/kontakt"
                  className="group relative inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-[10px] shadow-[0_30px_30px_-3.5px_rgba(0,0,0,0.15),0_13px_13px_-2.9px_rgba(0,0,0,0.26),0_6px_6px_-2.3px_rgba(0,0,0,0.3)] hover:shadow-[0_40px_40px_-5px_rgba(0,0,0,0.4)] hover:scale-[1.02] transition-all duration-300"
                >
                  <span className="font-semibold text-lg">
                    Kostenloses Erstgespräch
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    className="w-5 h-5 fill-current"
                  >
                    <g>
                      <path d="M200,64V168a8,8,0,0,1-13.66,5.66L140,127.31,69.66,197.66a8,8,0,0,1-11.32-11.32L128.69,116,82.34,69.66A8,8,0,0,1,88,56H192A8,8,0,0,1,200,64Z"></path>
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Right — stats card */}
          <FadeIn delay={0.2}>
            <div
              className="rounded-[24px] bg-[#f5f5f5] p-8 md:p-10 flex flex-col gap-8 min-w-[280px]"
              style={{ boxShadow: neumorphicShadow }}
            >
              {/* Stats */}
              {[
                { value: "97+", label: "Projekte erfolgreich" },
                { value: "95%", label: "Kundenzufriedenheit" },
                { value: "5+", label: "Jahre Erfahrung" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  {i > 0 && <div className="h-[1px] bg-black/6 -mt-4 mb-3" />}
                  <span className="text-4xl md:text-5xl font-medium tracking-tight text-black leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-black/30">
                    {stat.label}
                  </span>
                </div>
              ))}

              {/* Yellow accent bar */}
              <div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "95%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                  className="h-full bg-[#daff02] rounded-full"
                />
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom divider row */}
        <FadeIn delay={0.3}>
          <div className="mt-20 md:mt-28 pt-8 border-t border-black/6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[10px] font-bold tracking-widest uppercase text-black/20">
              Inverta Digital — Agentur für Marketing & Webentwicklung
            </span>
            <div className="flex items-center gap-6">
              {["Dresden", "Remote", "International"].map((loc) => (
                <span
                  key={loc}
                  className="text-[10px] font-bold tracking-widest uppercase text-black/20"
                >
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
