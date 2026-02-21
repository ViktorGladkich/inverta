"use client";

import { useRef } from "react";
import Link from "next/link";
import { Rocket } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

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

        <div className="flex justify-center">
          <FadeIn>
            <div className="w-full max-w-[1000px] flex flex-col items-center text-center gap-10 p-12 md:p-24 rounded-[40px] md:rounded-[64px] bg-[#f5f5f5] shadow-[0px_0.706592px_0.706592px_-0.541667px_rgba(0,0,0,0.1),0px_1.80656px_1.80656px_-1.08333px_rgba(0,0,0,0.09),0px_3.62176px_3.62176px_-1.625px_rgba(0,0,0,0.09),0px_6.8656px_6.8656px_-2.16667px_rgba(0,0,0,0.09),0px_13.6468px_13.6468px_-2.70833px_rgba(0,0,0,0.08),0px_30px_30px_-3.25px_rgba(0,0,0,0.05),inset_0px_3px_1px_0px_white]">
              {/* Headline */}
              <h2 className="text-[clamp(2.5rem,5vw,5.5rem)] font-medium tracking-tight leading-[0.95] text-black">
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

              <p className="text-base md:text-lg text-black/60 font-normal leading-relaxed max-w-lg">
                Jedes erfolgreiche Projekt beginnt mit einem Gespräch. Erzählen
                Sie uns von Ihrer Vision – wir machen den Rest.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                {/* Primary CTA */}
                <Link
                  href="/kontakt"
                  className="group relative inline-flex items-center gap-2 bg-black text-white px-6 py-4 md:px-10 md:py-5 rounded-[12px] shadow-[0_30px_30px_-3.5px_rgba(0,0,0,0.15),0_13px_13px_-2.9px_rgba(0,0,0,0.26),0_6px_6px_-2.3px_rgba(0,0,0,0.3)] hover:shadow-[0_40px_40px_-5px_rgba(0,0,0,0.4)] hover:scale-[1.02] transition-all duration-300"
                >
                  <span className="font-semibold text-base md:text-lg whitespace-nowrap">
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
        </div>
      </div>
    </section>
  );
}
