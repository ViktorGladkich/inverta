"use client";

import { Shield } from "lucide-react";
import { PRINCIPLES } from "./constants";
import { MobilePrincipleLine } from "./components/MobilePrincipleLine";

export function MobileView() {
  return (
    <section
      className="relative z-10 bg-[#f5f5f5] py-24 px-6 md:px-16"
      aria-labelledby="values-heading"
    >
      <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-16">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center justify-center px-[12px] py-[6px] gap-2 rounded-[60px] bg-white shadow-sm border border-black/5">
            <Shield className="w-3.5 h-3.5 text-black/40" />
            <span className="text-[10px] font-medium text-black tracking-wider uppercase">
              Unsere Prinzipien
            </span>
          </div>
          <h2
            id="values-heading"
            className="text-3xl font-medium tracking-tight text-black"
          >
            Woran wir glauben.
          </h2>
        </div>

        <div className="flex flex-col gap-16">
          {PRINCIPLES.map((principle, index) => (
            <MobilePrincipleLine
              key={principle.number}
              principle={principle}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
