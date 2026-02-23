"use client";

import { MoveRight, Route } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

interface FeaturesAccordionProps {
  features: { title: string; description: string }[];
}

export const FeaturesAccordion = ({ features }: FeaturesAccordionProps) => {
  return (
    <section className="relative bg-[#f5f5f5] pt-40 px-8" aria-label="Methodik">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 md:mb-32">
          <FadeIn className="flex flex-col items-center text-center gap-6 md:gap-8 mb-16">
            <div className="w-fit flex items-center justify-center px-[12px] py-[6px] gap-2 rounded-[60px] bg-white shadow-[0px_0.706592px_0.706592px_-0.541667px_rgba(0,0,0,0.1),0px_1.80656px_1.80656px_-1.08333px_rgba(0,0,0,0.09),0px_3.62176px_3.62176px_-1.625px_rgba(0,0,0,0.09),0px_6.8656px_6.8656px_-2.16667px_rgba(0,0,0,0.09),0px_13.6468px_13.6468px_-2.70833px_rgba(0,0,0,0.08),0px_30px_30px_-3.25px_rgba(0,0,0,0.05),inset_0px_3px_1px_0px_white]">
              <div className="w-[14px] h-[14px] text-black/40">
                <Route className="w-full h-full" />
              </div>
              <span className="text-[12px] font-medium text-black tracking-wider uppercase">
                Methodik
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black">
              Der Weg{" "}
              <span className="relative inline-block">
                <span className="absolute bottom-1 left-0 w-full h-4 bg-[#daff02] z-0" />
                <span className="relative z-10 text-black">Zum Ziel.</span>
              </span>
            </h2>
          </FadeIn>
        </div>

        <div className="flex flex-col border-t border-black/10">
          {features.map((feature, i) => (
            <article
              key={i}
              className="group relative flex flex-col lg:flex-row justify-between py-12 md:py-20 border-b border-black/10 overflow-hidden cursor-default"
            >
              {/* Hover Sliding Background */}
              <div className="absolute inset-0 bg-black translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />

              <div className="relative z-10 lg:w-1/4 mb-6 lg:mb-0 flex items-start gap-4 pl-2 md:pl-4">
                <span className="text-lg md:text-xl font-mono text-black/40 group-hover:text-white/50 transition-colors duration-500">
                  0{i + 1}
                </span>
                <MoveRight className="w-6 h-6 text-black opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#daff02] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
              </div>

              <div className="relative z-10 lg:w-3/4 flex flex-col md:flex-row gap-6 md:gap-16 items-start">
                <h3 className="w-full md:w-1/2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter leading-tight group-hover:text-white transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="w-full md:w-1/2 text-lg md:text-xl font-medium text-black/50 group-hover:text-white/70 leading-relaxed transition-colors duration-500 mt-2">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
