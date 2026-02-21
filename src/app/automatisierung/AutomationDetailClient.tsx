"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { MARQUEE_ITEMS } from "./constants";
import { ServiceContent } from "@/data/services";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";

interface AutomationDetailClientProps {
  service: ServiceContent;
}

export function AutomationDetailClient({
  service,
}: AutomationDetailClientProps) {
  return (
    <div className="relative bg-[#f5f5f5]">
      <PageHero
        titleTop="AUTOMATISIERUNG"
        titleMain={service.title}
        marqueeItems={MARQUEE_ITEMS}
      />

      <main className="relative z-10">
        {/* Intro Service Section */}
        <section className="bg-[#f5f5f5] px-8 md:px-16 pt-20 md:pt-28 pb-32 rounded-t-[32px] shadow-[0_-20px_60px_rgba(0,0,0,0.15)] overflow-hidden">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white mb-8">
                  <span className="text-[10px] font-bold tracking-widest uppercase">
                    Solution Overview
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.05] mb-8">
                  {service.heroText}
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.benefits.map((benefit, idx) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-black/5"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#daff02] shrink-0" />
                    <span className="text-sm font-medium text-black/70">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="bg-black py-32 px-6 rounded-t-[40px] md:rounded-t-[80px]">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col items-center text-center gap-6 mb-24">
              <span className="text-[10px] font-bold tracking-[0.4em] text-[#daff02] uppercase">
                Technical Details
              </span>
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white italic">
                How it works.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col gap-6 p-10 bg-neutral-900 border border-white/5 rounded-[32px]"
                >
                  <div className="w-10 h-1 bg-[#daff02]" />
                  <h3 className="text-2xl font-medium text-white tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-base text-white/40 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Action CTA */}
        <section className="bg-[#f5f5f5] py-32 px-6">
          <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center gap-12">
            <h2 className="text-4xl md:text-7xl font-medium tracking-tight text-black leading-[1.1]">
              Bereit für den <br />{" "}
              <span className="text-black/20">nächsten Schritt?</span>
            </h2>
            <Link
              href="/kontakt"
              className="group flex items-center gap-6 bg-black text-white pl-10 pr-4 py-4 rounded-full hover:scale-105 transition-transform duration-300"
            >
              <span className="text-lg font-bold tracking-widest uppercase">
                Projekt anfragen
              </span>
              <div className="w-12 h-12 rounded-full bg-[#daff02] flex items-center justify-center text-black group-hover:rotate-45 transition-transform duration-500">
                <ChevronRight className="w-6 h-6" />
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
