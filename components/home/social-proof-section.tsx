"use client";

import { motion } from "framer-motion";
import { socialProofItems } from "@/components/home/home-data";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";

export function SocialProofSection({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean;
}) {
  return (
    <Section className="pt-6">
      <Reveal className="mx-auto mb-8 max-w-[44rem] text-center">
        <div className="text-[0.84rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
          Why early users stick
        </div>
        <h2 className='mt-2 font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[clamp(2rem,4.8vw,3.3rem)] leading-none font-bold'>
          Built for daily use, not one impressive screenshot.
        </h2>
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2">
        {socialProofItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <motion.div
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -6, rotate: index === 1 ? 0.4 : -0.4, scale: 1.01 }
              }
              transition={{ duration: 0.22 }}
            >
              <Card className="h-full bg-[linear-gradient(180deg,var(--surface),var(--surface-strong))] p-5 hover:border-[var(--brand-soft)] hover:shadow-[0_28px_80px_rgba(var(--shadow-brand),0.14)]">
                <p className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
                  Proof point
                </p>
                <h3 className="mt-3 text-[1.18rem] font-bold">{item.title}</h3>
                <p className="mt-3 text-[1rem] leading-[1.75] text-[var(--text-secondary)]">
                  {item.body}
                </p>
              </Card>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
