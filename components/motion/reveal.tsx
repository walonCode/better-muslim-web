"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  /** When true, direct motion children are staggered automatically */
  stagger?: boolean;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

export const revealChildVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.96,
    filter: "blur(14px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 16,
      mass: 0.85,
    },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 32,
  stagger = false,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  if (stagger) {
    return (
      <motion.div
        className={cn(className)}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.14 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      style={{ transformPerspective: 1400 }}
      initial={{
        opacity: 0,
        y: distance + 8,
        scale: 0.96,
        rotateX: 6,
        transformOrigin: "50% 100%",
        filter: "blur(20px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{
        delay,
        type: "spring",
        stiffness: 95,
        damping: 17,
        mass: 0.88,
      }}
    >
      {children}
    </motion.div>
  );
}
