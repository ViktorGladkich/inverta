"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    href?: string;
    asChild?: boolean; // Ignored for now without Radix
  };

const MotionLink = motion.create(Link);

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth,
      href,
      children,
      asChild, // Destructure asChild so it's not passed to DOM
      ...props
    },
    ref,
  ) => {
    const baseClass =
      "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group";

    const variants = {
      primary:
        "bg-neutral-900 text-white hover:bg-neutral-800 border border-transparent",
      secondary:
        "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 border border-transparent",
      outline:
        "border border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-900",
      ghost: "hover:bg-neutral-100 hover:text-neutral-900 text-neutral-600",
    };

    const sizes = {
      sm: "h-8 md:h-9 px-3 md:px-4 text-xs md:text-sm",
      md: "h-10 md:h-11 px-5 md:px-8 text-sm md:text-base",
      lg: "h-12 md:h-14 px-6 md:px-10 text-base md:text-lg",
    };

    const classes = cn(
      baseClass,
      variants[variant],
      sizes[size],
      fullWidth && "w-full",
      className,
    );

    const content = (
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    );

    if (href) {
      return (
        <MotionLink
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          whileTap={{ scale: 0.98 }}
          whileHover={variant === "primary" ? { scale: 1.02 } : {}}
          {...(props as HTMLMotionProps<"a">)}
        >
          {content}
        </MotionLink>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        whileTap={{ scale: 0.98 }}
        whileHover={variant === "primary" ? { scale: 1.02 } : {}}
        {...(props as HTMLMotionProps<"button">)}
      >
        {content}
      </motion.button>
    );
  },
);
Button.displayName = "Button";
