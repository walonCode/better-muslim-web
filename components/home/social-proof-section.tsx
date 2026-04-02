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
    <Section className="pt-12 md:pt-14">
      <Reveal className="mx-auto mb-8 max-w-[44rem] text-center">
        <div className="text-[0.84rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
          Why It Stays Useful
        </div>
        <h2 className='mt-2 font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[clamp(2rem,4.8vw,3.3rem)] leading-none font-bold'>
          It keeps earning another visit.
        </h2>
        <p className="mt-3 text-[1rem] leading-[1.8] text-[var(--text-secondary)]">
          Better Muslim works best as a daily-use product, because the prayer,
          reading, learning, and reminder flows reinforce each other instead of
          sitting in separate apps.
        </p>
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2">
        {socialProofItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 26, scale: 0.97, filter: "blur(10px)" }
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
              <Card className="group relative h-full overflow-hidden bg-[linear-gradient(180deg,var(--surface),var(--surface-strong))] p-6 hover:border-[var(--brand-soft)] hover:shadow-[0_28px_80px_rgba(var(--shadow-brand),0.14)]">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--brand-soft),transparent)] opacity-0 transition duration-500 group-hover:opacity-100" />
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
