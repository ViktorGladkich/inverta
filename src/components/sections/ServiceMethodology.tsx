"use client";

import { motion } from "framer-motion";

type StepItem = {
  num: string;
  title: string;
  desc: string;
};

interface ServiceMethodologyProps {
  subtitle: string;
  titleTop: string;
  titleBottom: string;
  description: string;
  steps: StepItem[];
}

export function ServiceMethodology({
  subtitle,
  titleTop,
  titleBottom,
  description,
  steps,
}: ServiceMethodologyProps) {
  return (
    <section className="py-24 md:py-40 px-6 md:px-10 bg-[#050505] text-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          {/* Sticky Left */}
          <aside className="lg:w-1/3">
            <div className="sticky top-32 flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-[#daff02] text-sm font-bold tracking-[0.3em] uppercase">
                  {subtitle}
                </span>
                <h2 className="text-5xl md:text-7xl font-medium tracking-tight mt-4">
                  {titleTop} <br />
                  <span className="text-white/30 italic">{titleBottom}</span>
                </h2>
                <p className="text-white/50 text-lg md:text-xl mt-8 font-light max-w-sm leading-relaxed">
                  {description}
                </p>
              </motion.div>
            </div>
          </aside>

          {/* Scrolling Right */}
          <div className="lg:w-2/3 flex flex-col gap-0 border-t border-white/10 mt-12 lg:mt-0">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <article className="group border-b border-white/10 py-12 md:py-24 transition-colors duration-700 hover:border-[#daff02]/30">
                  <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                    <span className="text-6xl md:text-8xl font-light text-[#daff02] md:text-white/5 group-hover:text-[#daff02] transition-colors duration-700 md:mt-[-10px]">
                      {step.num}
                    </span>
                    <div className="flex flex-col gap-6 flex-1 mt-2 md:mt-0">
                      <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white group-hover:translate-x-4 transition-transform duration-700">
                        {step.title}
                      </h3>
                      <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl group-hover:translate-x-4 transition-transform duration-700 delay-75">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
