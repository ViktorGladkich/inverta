"use client";

import { motion } from "framer-motion";
import { Target, TrendingUp } from "lucide-react";

export const innerCardShadow =
  "0px 0.706592px 0.706592px -0.666667px rgba(0,0,0,0.08),0px 1.80656px 1.80656px -1.33333px rgba(0,0,0,0.08),0px 3.62176px 3.62176px -2px rgba(0,0,0,0.07),inset 0px 3px 1px 0px rgba(255,255,255,1)";

/**
 * 1. StrategyCard (Стратегия)
 * Темная стильная карточка. Анимация радара/поиска цели.
 */
export function StrategyCard() {
  return (
    <div className="bg-black rounded-[14px] h-28 md:h-36 flex flex-col items-center justify-between py-3 px-2 relative overflow-hidden group">
      <div className="relative w-full h-16 mt-2 flex items-center justify-center">
        {/* Пульсирующие кольца радара */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-[#daff02]/20"
            initial={{ width: 0, height: 0, opacity: 1 }}
            animate={{ width: 80, height: 80, opacity: 0 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
              ease: "linear",
            }}
          />
        ))}

        {/* Орбитальный спутник */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute w-12 h-12 rounded-full"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#daff02] rounded-full shadow-[0_0_8px_#daff02]" />
        </motion.div>

        {/* Центральная иконка */}
        <div className="relative z-10 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/5 flex items-center justify-center">
          <Target className="w-4 h-4 text-[#daff02]" />
        </div>
      </div>

      <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-white z-10">
        Strategy
      </span>
    </div>
  );
}

export function DesignCard() {
  return (
    <div className="bg-[#daff02] rounded-[14px] h-28 md:h-36 flex flex-col items-center justify-between py-3 px-2 relative overflow-hidden">
      <div className="relative w-full h-16 mt-2 flex flex-col items-center justify-center gap-2">
        {/* Анимированные UI блоки (скелетон интерфейса) */}
        <motion.div
          animate={{ width: ["40%", "80%", "40%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="h-2 bg-black/80 rounded-full"
        />
        <div className="flex gap-2 w-full justify-center">
          <motion.div
            animate={{ height: [8, 16, 8] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="w-10 bg-black/40 rounded-full"
          />
          <motion.div
            animate={{ width: ["20%", "40%", "20%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="h-2 bg-black/20 rounded-full"
          />
        </div>
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1, 0.9] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-2 w-1/2 bg-black/60 rounded-full"
        />
      </div>

      <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-black z-10">
        Design
      </span>
    </div>
  );
}

export function GrowthCard() {
  return (
    <div
      className="bg-[#f5f5f5] rounded-[14px] h-28 md:h-36 flex flex-col items-center justify-between py-3 px-2 relative overflow-hidden group"
      style={{ boxShadow: innerCardShadow }}
    >
      <div className="relative w-full h-16 mt-2 flex flex-col items-center justify-end pb-2">
        {/* Линия тренда (SVG) */}
        

        <div className="flex items-end gap-1.5 z-10 h-full pt-4">
          {/* Растущие столбцы графика */}
          {[40, 60, 45, 80, 100].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: "10%" }}
              animate={{ height: [`10%`, `${height}%`, `10%`] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "circInOut",
              }}
              className={`w-3 rounded-t-sm ${i === 3 ? "bg-[#daff02]" : "bg-black"}`}
            />
          ))}
        </div>

        <TrendingUp className="absolute top-0 right-2 w-4 h-4 text-black" />
      </div>

      <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-black z-10">
        Growth
      </span>
    </div>
  );
}
