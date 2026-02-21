"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PROCESS_STEPS } from "../constants";

export function ProcessSection() {
  return (
    <section className="bg-white py-32 md:py-64 px-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#daff02]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2 sticky top-32 h-fit">
            <span className="text-[10px] font-bold tracking-[0.4em] text-black/30 uppercase mb-6 block">
              Our Impact
            </span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-black leading-[0.85] mb-12">
              VOM <br />
              KAOS ZUR <br />
              <span className="text-black/10">PRÄZISION.</span>
            </h2>
            <div className="flex items-center gap-6">
              <Link
                href="/kontakt"
                className="group flex items-center gap-4 bg-black text-white pl-8 pr-2 py-2 rounded-full hover:scale-105 transition-transform duration-300"
              >
                <span className="text-sm font-bold tracking-widest uppercase">
                  Audit vereinbaren
                </span>
                <div className="w-10 h-10 rounded-full bg-[#daff02] flex items-center justify-center text-black group-hover:rotate-45 transition-transform duration-500">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-32 py-12">
            {PROCESS_STEPS.map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col gap-6 border-l-2 border-black/5 pl-8 hover:border-[#daff02] transition-colors duration-500"
              >
                <span className="text-xs font-black text-[#daff02] tracking-widest">
                  {item.step}
                </span>
                <h3 className="text-3xl font-medium tracking-tight text-black">
                  {item.title}
                </h3>
                <p className="text-lg text-black/50 leading-relaxed font-light max-w-md italic">
                  &quot;{item.desc}&quot;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
