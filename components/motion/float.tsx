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
        x: x ? [0, x, 0] : 0,
        y: [0, -y, 0],
        rotate: rotate ? [0, rotate, 0] : 0,
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
