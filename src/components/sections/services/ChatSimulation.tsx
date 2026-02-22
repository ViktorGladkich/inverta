import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { Typewriter } from "@/components/ui/TypewriterText";
import { neumorphicShadow } from "./ServicesOverviewCard";

export const ChatSimulation = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    // Cycle: 0 (Empty) -> 1 (User) -> 2 (Typing) -> 3 (AI) -> 0
    if (step === 0) {
      timeout = setTimeout(() => setStep(1), 500);
    } else if (step === 1) {
      timeout = setTimeout(() => setStep(2), 2000);
    } else if (step === 2) {
      timeout = setTimeout(() => setStep(3), 3000); // 3s thinking
    } else if (step === 3) {
      timeout = setTimeout(() => setStep(0), 5000); // Hold reading time
    }
    return () => clearTimeout(timeout);
  }, [step]);

  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full flex flex-col gap-4 min-h-[160px]">
      {/* Chat Message Row (User) */}
      <div className="flex w-full justify-end items-end gap-3 min-h-[50px]">
        <motion.div
          initial="hidden"
          animate={step >= 1 ? "visible" : "hidden"}
          variants={variants}
          className="flex w-full justify-end items-end gap-3"
        >
          <div
            className={cn(
              "bg-[#f5f5f5] rounded-[10px] p-3 max-w-[70%] text-sm text-black/60 shadow-sm text-right",
              neumorphicShadow,
            )}
          >
            <p>Wie schnell können wir mit dem Projekt starten?</p>
          </div>
          <div
            className={cn(
              "w-10 h-10 shrink-0 rounded-full bg-[#f5f5f5] flex items-center justify-center text-black/80",
              neumorphicShadow,
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* AI Response Row */}
      <div className="flex w-full justify-start items-end gap-3 h-[80px]">
        <motion.div
          initial="hidden"
          animate={step >= 2 ? "visible" : "hidden"}
          variants={variants}
          className="flex w-full justify-start items-end gap-3"
        >
          <div
            className={cn(
              "w-10 h-10 shrink-0 rounded-full bg-[#f5f5f5] flex items-center justify-center text-black/80",
              neumorphicShadow,
            )}
          >
            <Sparkles className="w-5 h-5" />
          </div>

          {/* Bubble Container: Either Typing or Text */}
          <div
            className={cn(
              "bg-[#f5f5f5] rounded-[10px] p-3 max-w-[70%] text-sm text-black/60 shadow-sm",
              neumorphicShadow,
            )}
          >
            {step === 2 ? (
              // Typing Indicator
              <div className="flex gap-1 h-5 items-center px-1">
                <motion.div
                  className="w-1.5 h-1.5 bg-black/40 rounded-full"
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: 0,
                  }}
                />
                <motion.div
                  className="w-1.5 h-1.5 bg-black/40 rounded-full"
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: 0.2,
                  }}
                />
                <motion.div
                  className="w-1.5 h-1.5 bg-black/40 rounded-full"
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: 0.4,
                  }}
                />
              </div>
            ) : (
              // Final Message
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Das Team ist informiert. Ich habe einen Kick-off Termin für
                Montag vorgeschlagen.
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Input Search Bar */}
      <div
        className={cn(
          "w-[90%] mx-auto bg-[#f5f5f5] rounded-[100px] py-3 px-5 text-sm text-black/40 flex items-center justify-between mt-2",
          neumorphicShadow,
        )}
      >
        <Typewriter
          text={[
            "Nachricht schreiben...",
            "Prozesse automatisieren...",
            "Kundensupport skalieren...",
          ]}
          speed={70}
          loop={true}
          className="text-sm text-black/40"
        />
        <div className="w-3 h-3 rounded-full bg-black/10 animate-pulse" />
      </div>
    </div>
  );
};
