"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="w-full lg:w-[45%] flex flex-col justify-between">
      <div className="sticky top-32">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[clamp(4rem,8vw,8rem)] tracking-tighter leading-[0.9] font-medium uppercase wrap-break-word"
        >
          LASS <br />
          <span className="text-[#daff02] italic drop-shadow-sm">UNS</span>{" "}
          <br />
          SPRECHEN
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-16 flex flex-col gap-10 text-lg font-medium"
        >
          <div>
            <a
              href="mailto:info@invertadigital.de"
              className="group flex items-center gap-4 text-2xl md:text-4xl hover:text-black/60 transition-colors"
            >
              info@invertadigital.de
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 text-base">
            <div className="flex flex-col gap-1 pr-6">
              <span className="text-black/40 text-xs tracking-[0.2em] font-semibold uppercase mb-2 border-b border-black/10 pb-2">
                Office
              </span>
              <p className="mt-2 text-black/80 font-normal leading-relaxed">
                Rubensweg 1
                <br />
                01217 Dresden
                <br />
                Deutschland
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-black/40 text-xs tracking-[0.2em] font-semibold uppercase mb-2 border-b border-black/10 pb-2">
                Socials
              </span>
              <ul className="mt-2 flex flex-col gap-1 text-black/80 font-normal">
                <li>
                  <a
                    href="https://www.instagram.com/invertadigital/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/invertadigitall"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
