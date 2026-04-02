"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { statusItems } from "@/components/home/home-data";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";

/** Extracts a leading integer from a value string like "4.8★" → 48, "3 pillars" → 3 */
function parseLeadingNumber(value: string): { prefix: string; num: number; suffix: string } | null {
  // Match patterns like "4.8" "3" "100"
  const match = value.match(/^(\D*?)(\d+\.?\d*)(.*)$/);
  if (!match) return null;
  return {
    prefix: match[1] ?? "",
    num: parseFloat(match[2]),
    suffix: match[3] ?? "",
  };
}

function AnimatedStat({
  value,
  shouldReduceMotion,
}: {
  value: string;
  shouldReduceMotion: boolean;
}) {
  const parsed = parseLeadingNumber(value);
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 55,
    damping: 14,
    mass: 0.85,
  });
  const displayed = useTransform(spring, (v) => {
    if (!parsed) return value;
    const isDecimal = parsed.num % 1 !== 0;
    const formatted = isDecimal ? v.toFixed(1) : Math.round(v).toString();
    return `${parsed.prefix}${formatted}${parsed.suffix}`;
  });

  useEffect(() => {
    if (isInView && parsed && !shouldReduceMotion) {
      motionValue.set(parsed.num);
    }
  }, [isInView, parsed, motionValue, shouldReduceMotion]);

  if (!parsed || shouldReduceMotion) {
    return (
      <p
        ref={ref}
        className="mt-3 text-[1.5rem] font-bold leading-none"
      >
        {value}
      </p>
    );
  }

  return (
    <motion.p
      ref={ref}
      className="mt-3 text-[1.5rem] font-bold leading-none tabular-nums"
    >
      {displayed}
    </motion.p>
  );
}

export function StatusSection({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean;
}) {
  return (
    <Section className="pt-10 md:pt-12">
      <Reveal className="mx-auto mb-8 max-w-[44rem] text-center">
        <div className="text-[0.84rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
          Available Now
        </div>
        <h2 className='mt-2 font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[clamp(2rem,4.8vw,3.3rem)] leading-none font-bold'>
          Early release, already practical.
        </h2>
        <p className="mt-3 text-[1rem] leading-[1.8] text-[var(--text-secondary)]">
          Android preview access is open now, the iPhone waitlist is active, and
          the current build already covers the routines people return to most
          often.
        </p>
      </Reveal>
      <Reveal>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {statusItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 28, scale: 0.95, filter: "blur(10px)" }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
              }
              viewport={{ once: true, amount: 0.28 }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -10,
                      rotate: index === 1 ? 0.5 : -0.5,
                      scale: 1.018,
                    }
              }
              transition={{
                default: { duration: 0.42, ease: [0.16, 1, 0.3, 1] },
                opacity: { delay: index * 0.08 },
                y: { delay: index * 0.08 },
                scale: { delay: index * 0.08 },
                filter: { delay: index * 0.08 },
              }}
            >
              <Card className="group relative h-full overflow-hidden bg-[linear-gradient(160deg,var(--surface),var(--surface-strong))] p-6 hover:border-[var(--brand-soft)] hover:shadow-[0_30px_90px_rgba(var(--shadow-brand),0.16)]">
                {/* Corner glow orb */}
                <div className="pointer-events-none absolute -right-8 top-0 h-24 w-24 rounded-full bg-[var(--brand-soft)] opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
                {/* Shimmer sweep on hover */}
                <div className="pointer-events-none absolute inset-x-[-20%] top-0 h-20 -translate-y-12 rotate-[10deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.28),transparent)] opacity-0 blur-sm transition-all duration-700 group-hover:translate-y-32 group-hover:opacity-100 dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]" />
                <p className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
                  {item.title}
                </p>
                <AnimatedStat
                  value={item.value}
                  shouldReduceMotion={shouldReduceMotion}
                />
                <p className="mt-3 text-[0.98rem] leading-[1.75] text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
