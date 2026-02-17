import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight, FileText, Mail, CheckCircle, Database } from "lucide-react";
import { ServicesOverviewCard } from "./ServicesOverviewCard";

export const MarketingCard = ({ className }: { className?: string }) => {
  return (
    <ServicesOverviewCard className={className}>
      <div className="flex flex-col justify-between h-full bg-[#f5f5f5] relative">
        {/* Visual Container */}
        <div className="relative flex-1 w-full flex items-center justify-center mb-6 min-h-[160px]">
          {/* Central Icon */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 z-10">
            <div
              className="flex items-center justify-center p-[9px] bg-[#f5f5f5] rounded-[24px]"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
              }}
            >
              <div
                className="w-[100px] h-[100px] rounded-[20px] bg-[#f5f5f5] flex items-center justify-center relative overflow-hidden"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
                }}
              >
                <Image
                  src="/cube-black.png"
                  alt="Central"
                  width={60}
                  height={60}
                />
              </div>
            </div>
          </div>

          {/* Satellites */}
          <motion.div
            className="absolute w-[40px] h-[40px] bg-[#f5f5f5] rounded-xl flex items-center justify-center shadow-[0px_0.7px_0.7px_-0.66px_rgba(0,0,0,0.08),inset_0px_3px_1px_0px_white] z-20"
            style={{ top: "10px", left: "2%", opacity: 1 }}
            animate={{
              x: [0, 30, 30, 0],
              y: 0,
            }}
            transition={{
              duration: 6,
              times: [0, 0.2, 0.8, 1],
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FileText className="w-5 h-5 text-black/60" />
          </motion.div>

          <motion.div
            className="absolute w-[40px] h-[40px] bg-[#f5f5f5] rounded-xl flex items-center justify-center shadow-[0px_0.7px_0.7px_-0.66px_rgba(0,0,0,0.08),inset_0px_3px_1px_0px_white] z-20"
            style={{ top: "10px", left: "84%", opacity: 1 }}
            animate={{
              x: [0, -30, -30, 0],
              y: 0,
            }}
            transition={{
              duration: 6,
              times: [0, 0.4, 0.8, 1],
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <Mail className="w-5 h-5 text-black/60" />
          </motion.div>

          <motion.div
            className="absolute w-[40px] h-[40px] bg-[#f5f5f5] rounded-xl flex items-center justify-center shadow-[0px_0.7px_0.7px_-0.66px_rgba(0,0,0,0.08),inset_0px_3px_1px_0px_white] z-20"
            style={{ top: "120px", left: "8%", opacity: 1 }}
            animate={{
              x: [0, 15, 15, 0],
              y: [0, -20, -20, 0],
            }}
            transition={{
              duration: 6,
              times: [0, 0.4, 0.8, 1],
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <CheckCircle className="w-5 h-5 text-black/60" />
          </motion.div>

          <motion.div
            className="absolute w-[40px] h-[40px] bg-[#f5f5f5] rounded-xl flex items-center justify-center shadow-[0px_0.7px_0.7px_-0.66px_rgba(0,0,0,0.08),inset_0px_3px_1px_0px_white] z-20"
            style={{ top: "115px", left: "79%", opacity: 1 }}
            animate={{
              x: [0, -15, -15, 0],
              y: [0, -20, -20, 0],
            }}
            transition={{
              duration: 6,
              times: [0, 0.4, 0.8, 1],
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          >
            <Database className="w-5 h-5 text-black/60" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full mt-auto flex flex-col gap-3 items-start text-left">
          <h3 className="text-[20px] font-medium text-black leading-[1.2] tracking-[-0.01em]">
            Performance Marketing
          </h3>
          <p className="text-[16px] font-normal text-[#16101e]/80 leading-normal">
            Maximieren Sie Leads und messbare Ergebnisse durch datengestützte
            Kampagnen und präzises Targeting.
          </p>
          <Link
            href="/marketing"
            className="inline-flex items-center gap-2 text-sm font-bold text-black hover:opacity-70 transition-opacity pt-4"
          >
            Mehr erfahren <MoveRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </ServicesOverviewCard>
  );
};
