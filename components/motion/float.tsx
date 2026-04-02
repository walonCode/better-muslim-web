"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FloatProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  rotate?: number;
  x?: number;
  y?: number;
};

export function Float({
  children,
  className,
  delay = 0,
  duration = 6,
  rotate = 0,
  x = 0,
  y = 10,
}: FloatProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{
        // Organic 4-point path — feels naturally floaty rather than mechanical
        x: x ? [0, x * 0.6, x, x * 0.4, 0] : 0,
        y: [0, -y * 0.5, -y, -y * 0.35, 0],
        rotate: rotate ? [0, rotate * 0.4, rotate, rotate * 0.35, 0] : 0,
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        // Custom spring-like ease: slow out, float, spring back
        ease: [0.37, 0, 0.63, 1],
        times: [0, 0.28, 0.55, 0.78, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
