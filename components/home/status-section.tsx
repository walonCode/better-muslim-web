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
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -6, rotate: index === 1 ? 0.4 : -0.4, scale: 1.01 }
              }
              transition={{ duration: 0.22 }}
            >
              <Card className="bg-[linear-gradient(180deg,var(--surface),var(--surface-strong))] p-5 hover:border-[var(--brand-soft)] hover:shadow-[0_28px_80px_rgba(var(--shadow-brand),0.14)]">
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
