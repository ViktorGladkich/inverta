import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Typewriter } from "@/components/ui/TypewriterText";
import { ServicesOverviewCard, neumorphicShadow } from "./ServicesOverviewCard";

export const WebDevCard = ({ className }: { className?: string }) => {
  return (
    <ServicesOverviewCard className={className}>
      <div className="flex flex-col justify-between h-full relative">
        {/* Visual Container */}
        <div className="relative flex-1 w-full min-h-[160px] mb-6 flex items-center justify-center">
          {/* Visual Header (Mock UI) */}
          <div className="flex flex-col gap-4 w-full">
            {/* Search Box */}
            <div
              className={cn(
                "bg-[#f5f5f5] rounded-[8px] p-4 flex flex-col gap-4 w-full",
                neumorphicShadow,
              )}
            >
              {/* Search Strip */}
              <div
                className={cn(
                  "w-full bg-[#f5f5f5] rounded-[8px] p-[8px_0_8px_6px] flex items-center mb-1 h-10 pl-3",
                  neumorphicShadow,
                )}
              >
                <Typewriter
                  text={[
                    "npx create-next-app@latest",
                    "npm run build",
                    "git push origin main",
                  ]}
                  speed={50}
                  loop={true}
                  className="text-xs font-mono text-black/70"
                />
              </div>

              {/* Items Group */}
              <div className="flex flex-col gap-2">
                {[
                  "Code Qualität",
                  "SEO & Performance",
                  "Responsive Design",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 opacity-50"
                  >
                    <div className="w-4 h-4 rounded-full border border-black/20 shrink-0" />
                    <span className="text-[14px] font-normal text-[#16101e]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full mt-auto flex flex-col gap-3">
          <h3 className="text-[20px] font-medium text-black leading-[1.2] tracking-[-0.01em]">
            Webentwicklung
          </h3>
          <p className="text-[16px] font-normal text-[#16101e]/80 leading-normal min-h-[90px]">
            Maßgeschneiderte Webseiten und leistungsstarke Web-Apps. Wir setzen
            auf modernen Code, Sicherheit und Skalierbarkeit für Ihr Business.
          </p>
          <Link
            href="/webentwicklung"
            className="inline-flex items-center gap-2 text-sm font-bold text-black hover:opacity-70 transition-opacity pt-4"
          >
            Mehr erfahren <MoveRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </ServicesOverviewCard>
  );
};
