"use client";

import { motion } from "framer-motion";

export function QuantumPathCard() {
  return (
    <div className="relative w-full aspect-square bg-[#fafafa] rounded-[20px] overflow-hidden flex items-center justify-center p-4">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[70%] h-[70%] bg-[radial-gradient(black_2px,transparent_2px)] bg-size-[20px_20px]" />
      </div>

      <svg viewBox="0 0 100 100" className="w-[80%] h-[80%] overflow-visible">
        <motion.path
          d="M 10,90 L 10,50 L 50,50 L 50,10 L 90,10"
          fill="none"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.4, 0.6, 1] }}
        />
        
        <motion.path
          d="M 10,90 L 50,90 L 90,50 L 90,10"
          fill="none"
          stroke="#daff02"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2, times: [0, 0.4, 0.6, 1] }}
        />

        <motion.circle cx="10" cy="90" r="4" fill="black" />
        <motion.circle cx="90" cy="10" r="4" fill="#daff02" 
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

export function CoreEngineCard() {
  return (
    <div className="relative w-full aspect-square bg-[#fafafa] rounded-[20px] overflow-hidden flex items-center justify-center">
      <div className="relative w-[70%] h-[70%] flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 rounded-full border border-black/10"
          style={{ borderStyle: "dashed", borderWidth: "2px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <motion.div 
          className="absolute inset-2 rounded-full border-t-2 border-r-2 border-[#daff02]"
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full" />
        </motion.div>

        <motion.div 
          className="absolute inset-6 rounded-full border-[3px] border-black/80 border-b-transparent border-l-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        <motion.div 
          className="w-4 h-4 bg-black rounded-full shadow-[0_0_15px_rgba(218,255,2,0.6)]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

export function ContinuousOptimizationCard() {
  const barHeights = [
    ["30%", "60%", "40%", "80%", "50%"],
    ["50%", "30%", "80%", "40%", "60%"],
    ["80%", "40%", "60%", "30%", "50%"],
    ["40%", "80%", "50%", "60%", "30%"],
    ["60%", "50%", "30%", "80%", "40%"],
  ];

  return (
    <div className="relative w-full aspect-square bg-[#fafafa] rounded-[20px] overflow-hidden flex items-end justify-center p-5 gap-2 pb-6">
      {[0, 1, 2, 3, 4].map((index) => {
        const isAccent = index === 2; 

        return (
          <motion.div
            key={index}
            className={`w-full rounded-full ${isAccent ? 'bg-[#daff02]' : 'bg-black/15'}`}
            animate={{
              height: [
                barHeights[0][index],
                barHeights[1][index],
                barHeights[2][index],
                barHeights[3][index],
                barHeights[0][index],
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
            style={{ minHeight: "20%" }}
          />
        );
      })}
    </div>
  );
}