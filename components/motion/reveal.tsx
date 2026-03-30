"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 32,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      style={{ transformPerspective: 1200 }}
      initial={{
        opacity: 0,
        y: distance + 6,
        scale: 0.95,
        rotateX: 7,
        transformOrigin: "50% 100%",
        filter: "blur(18px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{
        delay,
        type: "spring",
        stiffness: 110,
        damping: 18,
        mass: 0.82,
      }}
    >
      {children}
    </motion.div>
  );
}
