import React from "react";
import { cn } from "@/lib/utils";

export const neumorphicShadow =
  "shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(0,0,0,0.08),0px_1.80656px_1.80656px_-1.33333px_rgba(0,0,0,0.08),0px_3.62176px_3.62176px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.66667px_rgba(0,0,0,0.07),0px_13.6468px_13.6468px_-3.33333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),inset_0px_3px_1px_0px_white]";

export const ServicesOverviewCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      "bg-[#f5f5f5] rounded-[20px] p-8 md:p-10 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.01]",
      neumorphicShadow,
      className,
    )}
  >
    {children}
  </div>
);
