"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ServiceItem = {
  title: string;
  description: string;
  tag: string;
  href: string;
};

interface ServiceBentoGridProps {
  services: ServiceItem[];
}

export function ServiceBentoGrid({ services }: ServiceBentoGridProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    const frameId = requestAnimationFrame(() => {
      setMounted(true);
      checkMobile();
    });

    window.addEventListener("resize", checkMobile);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (!services || services.length < 4) return null;

  const cardVariants = (index: number) => ({
    initial: isMobile
      ? { opacity: 0, x: index % 2 === 0 ? -100 : 100 }
      : { opacity: 1, x: 0 },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      delay: isMobile ? 0 : index * 0.1,
    },
  });

  const viewport = { once: true, margin: "-50px" as const };

  return (
    <section className="pb-24 px-4 md:px-10 overflow-hidden">
      <div
        key={mounted ? (isMobile ? "mobile" : "desktop") : "initial"}
        className="max-w-[1400px] mx-auto"
      >
        <div className="flex flex-col gap-4 md:gap-6">
          {/* Top Row Split */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 h-auto md:h-[650px]">
            {/* Left Huge Card */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              variants={cardVariants(0)}
              className="w-full md:w-[60%] h-auto md:h-full"
            >
              <Link
                href={services[0].href}
                className="group w-full h-full relative overflow-hidden rounded-[32px] md:rounded-[48px] bg-white p-8 md:p-12 flex flex-col justify-between transition-all duration-700 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-black/5"
              >
                <article className="contents">
                  <header className="flex justify-between items-start z-10 mb-20 md:mb-0">
                    <span className="px-5 py-2 rounded-full border border-black/10 text-xs font-bold tracking-widest uppercase bg-[#f5f5f5]">
                      {services[0].tag}
                    </span>
                    <div className="w-14 h-14 rounded-full bg-[#f5f5f5] flex items-center justify-center transition-transform duration-700 group-hover:bg-[#daff02] group-hover:scale-110 shadow-sm border border-black/5">
                      <ArrowUpRight className="w-6 h-6 text-black transition-transform duration-700 group-hover:rotate-45" />
                    </div>
                  </header>

                  <div className="z-10 w-full md:max-w-[85%]">
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight group-hover:-translate-y-2 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                      {services[0].title}
                    </h3>
                    <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-[0.16,1,0.3,1]">
                      <div className="overflow-hidden">
                        <p className="text-black/60 md:text-lg leading-relaxed pt-5 md:pt-6 font-normal opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                          {services[0].description}
                        </p>
                        {/* Learn More Link */}
                        <div className="mt-6 md:mt-8 flex items-center gap-2 text-xs md:text-sm font-bold tracking-widest uppercase group-hover:translate-x-2 transition-transform duration-700 opacity-100 md:opacity-0 group-hover:opacity-100 delay-200">
                          <span className="border-b border-black/20 group-hover:border-black transition-colors duration-500">
                            Mehr erfahren
                          </span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Decoration */}
                  <div className="absolute right-[-5%] bottom-[-5%] w-[50%] h-[70%] bg-[url('/cube-black.png')] bg-contain bg-no-repeat bg-bottom opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />
                </article>
              </Link>
            </motion.div>

            {/* Right Column Stack */}
            <div className="w-full md:w-[40%] flex flex-col gap-4 md:gap-6 h-auto md:h-full">
              {/* Top Right Card (Dark Theme) */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={viewport}
                variants={cardVariants(1)}
                className="w-full flex-1 h-auto md:h-full flex"
              >
                <Link
                  href={services[1].href}
                  className="group w-full relative overflow-hidden rounded-[32px] md:rounded-[48px] bg-black text-white p-8 md:p-10 border border-white/5 flex flex-col justify-between transition-all duration-700 hover:border-white/10 shadow-lg"
                >
                  <article className="contents">
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-700 z-0" />
                    <header className="flex justify-between items-start z-10 mb-16 md:mb-0">
                      <span className="px-5 py-2 rounded-full border border-white/10 text-xs font-bold tracking-widest uppercase bg-white/5 backdrop-blur-sm">
                        {services[1].tag}
                      </span>
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-700 group-hover:bg-[#daff02] group-hover:text-black hover:scale-110">
                        <ArrowUpRight className="w-5 h-5 transition-transform duration-700 group-hover:rotate-45" />
                      </div>
                    </header>

                    <div className="z-10">
                      <h3 className="text-2xl md:text-4xl font-medium tracking-tight group-hover:-translate-y-1 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                        {services[1].title}
                      </h3>
                      <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-[0.16,1,0.3,1]">
                        <div className="overflow-hidden">
                          <p className="text-white/50 text-base leading-relaxed pt-4 font-normal opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                            {services[1].description}
                          </p>
                          {/* Learn More Link */}
                          <div className="mt-5 flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest uppercase group-hover:translate-x-1 transition-transform duration-700 group-hover:text-[#daff02] opacity-100 md:opacity-0 group-hover:opacity-100 delay-200">
                            <span className="border-b border-white/20 group-hover:border-[#daff02] transition-colors duration-500">
                              Mehr erfahren
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>

              {/* Bottom Right Card */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={viewport}
                variants={cardVariants(2)}
                className="w-full flex-1 h-auto md:h-full flex"
              >
                <Link
                  href={services[2].href}
                  className="group w-full relative overflow-hidden rounded-[32px] md:rounded-[48px] bg-white text-black p-8 md:p-10 flex flex-col justify-between transition-all duration-700 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] border border-black/5"
                >
                  <article className="contents">
                    <header className="flex justify-between items-start z-10 mb-16 md:mb-0">
                      <span className="px-5 py-2 rounded-full border border-black/10 text-xs font-bold tracking-widest uppercase bg-[#f5f5f5]">
                        {services[2].tag}
                      </span>
                      <div className="w-12 h-12 rounded-full bg-[#f5f5f5] flex items-center justify-center transition-transform duration-700 group-hover:bg-black group-hover:text-[#daff02] border border-black/5">
                        <ArrowUpRight className="w-5 h-5 transition-transform duration-700 group-hover:rotate-45" />
                      </div>
                    </header>

                    <div className="z-10">
                      <h3 className="text-2xl md:text-4xl font-medium tracking-tight group-hover:-translate-y-1 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                        {services[2].title}
                      </h3>
                      <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-[0.16,1,0.3,1]">
                        <div className="overflow-hidden">
                          <p className="text-black/50 text-base leading-relaxed pt-4 font-normal opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                            {services[2].description}
                          </p>
                          {/* Learn More Link */}
                          <div className="mt-5 flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest uppercase group-hover:translate-x-1 transition-transform duration-700 opacity-100 md:opacity-0 group-hover:opacity-100 delay-200">
                            <span className="border-b border-black/20 group-hover:border-black transition-colors duration-500">
                              Mehr erfahren
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Bottom Wide Card */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            variants={cardVariants(3)}
            className="w-full h-auto md:h-[400px]"
          >
            <Link
              href={services[3].href}
              className="group w-full h-full relative overflow-hidden rounded-[32px] md:rounded-[48px] bg-[#daff02] text-black p-8 md:p-12 flex flex-col justify-between transition-all duration-700 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(218,255,2,0.4)]"
            >
              <article className="contents">
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-700 z-0" />

                <header className="flex justify-between items-start z-10 mb-20 md:mb-0">
                  <span className="px-5 py-2 rounded-full border border-black/10 text-xs font-bold tracking-widest uppercase bg-black/5 backdrop-blur-sm">
                    {services[3].tag}
                  </span>
                  <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-[#daff02] transition-transform duration-700 group-hover:bg-white group-hover:text-black group-hover:scale-110 shadow-sm border border-transparent">
                    <ArrowUpRight className="w-6 h-6 transition-transform duration-700 group-hover:rotate-45" />
                  </div>
                </header>

                <div className="z-10 w-full md:max-w-[70%]">
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight group-hover:-translate-y-2 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                    {services[3].title}
                  </h3>
                  <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-[0.16,1,0.3,1]">
                    <div className="overflow-hidden">
                      <p className="text-black/70 md:text-lg leading-relaxed pt-5 md:pt-6 font-medium opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        {services[3].description}
                      </p>
                      {/* Learn More Link */}
                      <div className="mt-6 md:mt-8 flex items-center gap-2 text-xs md:text-sm font-bold tracking-widest uppercase group-hover:translate-x-2 transition-transform duration-700 opacity-100 md:opacity-0 group-hover:opacity-100 delay-200">
                        <span className="border-b border-black/20 group-hover:border-black transition-colors duration-500">
                          Mehr erfahren
                        </span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
