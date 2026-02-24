"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import React from "react";

interface BlurTextEffectProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animate?: boolean;
}

export const BlurTextEffect = ({
  children,
  className = "",
  delay = 0,
  animate = true,
}: BlurTextEffectProps) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 10,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.2,
        ease: "easeOut" as const,
      },
    },
  };

  const renderText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        variants={child}
        className="inline-block"
        style={{ whiteSpace: "pre" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  const traverseNodes = (nodes: React.ReactNode): React.ReactNode => {
    return React.Children.map(nodes, (node) => {
      if (typeof node === "string") {
        return renderText(node);
      }

      if (React.isValidElement(node)) {
        const element = node as React.ReactElement<{
          children?: React.ReactNode;
        }>;
        return React.cloneElement(element, {
          children: traverseNodes(element.props.children),
        });
      }
      return node;
    });
  };

  if (!animate) {
    return <span className={cn("inline-block", className)}>{children}</span>;
  }

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={cn("inline-block", className)}
    >
      {traverseNodes(children)}
    </motion.span>
  );
};
