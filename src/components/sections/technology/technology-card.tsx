"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

/**
 * Props for the TechnologyCard component.
 */
interface TechnologyCardProps {
  className?: string;
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  imageSrc?: string;
  hasImage?: boolean;
  orientation?: "vertical" | "horizontal";
}

/**
 * A feature card component that supports both vertical and horizontal layouts,
 * with or without an image. Designed with neumorphic styling.
 */
export const TechnologyCard = ({
  className,
  title,
  description,
  icon: Icon,
  imageSrc,
  hasImage = false,
  orientation = "vertical",
}: TechnologyCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col bg-[#f5f5f5] rounded-[20px] overflow-hidden transition-all duration-300 hover:scale-[1.01] p-5 gap-6 min-h-[268px]",
        // Neumorphic shadow style matching the Benefits section
        "shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(0,0,0,0.08),0px_1.80656px_1.80656px_-1.33333px_rgba(0,0,0,0.08),0px_3.62176px_3.62176px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.66667px_rgba(0,0,0,0.07),0px_13.6468px_13.6468px_-3.33333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),inset_0px_3px_1px_0px_rgba(255,255,255,1)]",
        hasImage ? "md:flex-row items-stretch" : "justify-center",
        className,
      )}
    >
      {/* Image Section (Conditionally Rendered) */}
      {hasImage && imageSrc && (
        <div className="relative w-full md:w-1/2 min-h-[240px] md:h-auto rounded-[16px] overflow-hidden shadow-[rgba(0,0,0,0.08)_0px_0.7px_0.7px_-0.66px,rgba(0,0,0,0.08)_0px_1.8px_1.8px_-1.33px,rgba(0,0,0,0.07)_0px_3.6px_3.6px_-2px,rgba(0,0,0,0.07)_0px_6.8px_6.8px_-2.66px,rgba(0,0,0,0.05)_0px_13.6px_13.6px_-3.33px,rgba(0,0,0,0.02)_0px_30px_30px_-4px]">
          {/* Background fill technique for consistent object cover */}
          <div
            data-framer-background-image-wrapper="true"
            className="absolute inset-0 rounded-[inherit]"
          >
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover object-center rounded-[inherit]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Light Overlay for visual depth */}
          <div
            className="absolute inset-0 rounded-[16px] opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(50% 100% at -5.4% 35.5%, rgba(240, 248, 255, 0.9) 0%, rgba(4, 7, 13, 0) 100%)",
            }}
          />
        </div>
      )}

      {/* Content Section */}
      <div
        className={cn(
          "flex gap-4 justify-center",
          hasImage ? "w-full md:w-1/2 flex-col" : "w-full",
          // Apply horizontal layout only if no image and requested
          !hasImage && orientation === "horizontal"
            ? "flex-row items-start"
            : "flex-col",
        )}
      >
        {/* Helper function to render the icon with consistent styling */}
        <div
          className="w-12 h-12 rounded-[10px] flex items-center justify-center shrink-0 shadow-[rgba(171,171,171,0.64)_0px_0.7px_0.7px_-0.54px,rgba(171,171,171,0.63)_0px_1.8px_1.8px_-1.08px,rgba(171,171,171,0.61)_0px_3.6px_3.6px_-1.62px,rgba(171,171,171,0.58)_0px_6.8px_6.8px_-2.16px,rgba(171,171,171,0.51)_0px_13.6px_13.6px_-2.7px,rgba(171,171,171,0.35)_0px_30px_30px_-3.25px]"
          style={{
            background:
              "linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(255, 255, 255) 170%)",
          }}
        >
          <div className="w-6 h-6 text-white">
            <Icon className="w-full h-full" />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-black">{title}</h3>
          <p className="text-black/60 text-[15px] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
