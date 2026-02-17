"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { navigationItems } from "./config";

export function MegaMenu({ item }: { item: (typeof navigationItems)[0] }) {
  if (!item.items) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[900px]"
      style={{ perspective: "1000px" }}
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-neutral-100 p-1 flex overflow-hidden ring-1 ring-black/5">
        <div className="grid grid-cols-12 w-full min-h-[320px]">
          {/* Menu Sidebar */}
          <div className="col-span-4 bg-white p-8 rounded-l-xl flex flex-col justify-between border-r border-neutral-100">
            <div>
              <h4 className="text-2xl font-bold text-black mb-2 tracking-tight">
                {item.title}
              </h4>
              <p className="text-neutral-500 leading-relaxed text-sm">
                {item.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Strategy", "Growth"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#f5f5f5] rounded-full text-[10px] font-bold uppercase tracking-wider text-neutral-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href={item.href}
              className="inline-flex items-center gap-2 text-sm font-bold text-black group"
            >
              Alle Leistungen
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <MoveRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          {/* Service Links */}
          <div className="col-span-8 p-8 grid grid-cols-2 gap-4 bg-[#f5f5f5] rounded-r-xl">
            {item.items.map((subItem) => (
              <Link
                key={subItem.title}
                href={subItem.href}
                className="group flex flex-col justify-between p-5 rounded-[20px] bg-[#f5f5f5] transition-all duration-300 hover:scale-[1.02] shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(0,0,0,0.08),0px_1.80656px_1.80656px_-1.33333px_rgba(0,0,0,0.08),0px_3.62176px_3.62176px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.66667px_rgba(0,0,0,0.07),0px_13.6468px_13.6468px_-3.33333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),inset_0px_3px_1px_0px_white]"
              >
                <div className="flex items-start justify-between w-full mb-3">
                  <div className="p-2.5 bg-white rounded-[12px] shadow-sm text-neutral-600 group-hover:text-black transition-colors">
                    {subItem.icon}
                  </div>
                  <MoveRight className="w-4 h-4 text-neutral-400 group-hover:text-black -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                </div>
                <div>
                  <h5 className="font-bold text-neutral-900 text-[15px] leading-tight mb-1">
                    {subItem.title}
                  </h5>
                  <p className="text-[12px] text-neutral-500 font-medium leading-relaxed line-clamp-2">
                    {subItem.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
