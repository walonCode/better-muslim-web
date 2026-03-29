"use client";

import { motion } from "framer-motion";
import { statusItems } from "@/components/home/home-data";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";

export function StatusSection({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean;
}) {
  return (
    <Section className="pt-4">
      <Reveal>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {statusItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 24, scale: 0.96, filter: "blur(8px)" }
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
                  : { y: -8, rotate: index === 1 ? 0.5 : -0.5, scale: 1.015 }
              }
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="group relative overflow-hidden bg-[linear-gradient(180deg,var(--surface),var(--surface-strong))] p-5 hover:border-[var(--brand-soft)] hover:shadow-[0_28px_80px_rgba(var(--shadow-brand),0.14)]">
                <div className="pointer-events-none absolute -right-8 top-0 h-20 w-20 rounded-full bg-[var(--brand-soft)] opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
                <p className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
                  {item.title}
                </p>
                <p className="mt-3 text-[1.5rem] font-bold leading-none">
                  {item.value}
                </p>
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
