import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { ServicesOverviewCard } from "./ServicesOverviewCard";
import { ChatSimulation } from "./ChatSimulation";

export const AICard = ({ className }: { className?: string }) => {
  return (
    <ServicesOverviewCard
      className={`min-h-[400px] h-full flex flex-col justify-between overflow-hidden ${className || ""}`}
    >
      <div className="flex flex-col gap-6 relative z-10 w-full h-full">
        {/* Chat UI Visuals */}
        <ChatSimulation />

        {/* Text Content */}
        <div className="flex flex-col gap-2 mt-auto">
          <h3 className="text-[20px] font-medium text-black leading-[1.2] tracking-[-0.01em]">
            KI & Automatisierung
          </h3>
          <p className="text-[16px] font-normal text-[#16101e]/80 leading-normal">
            Maßgeschneiderte KI-Lösungen für 24/7 Kundenservice und effiziente
            Prozesse. Skalieren Sie Ihr Unternehmen intelligent.
          </p>
          <Link
            href="/automatisierung"
            className="inline-flex items-center gap-2 text-sm font-bold text-black hover:opacity-70 transition-opacity pt-1"
          >
            Mehr erfahren <MoveRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </ServicesOverviewCard>
  );
};
