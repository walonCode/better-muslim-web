"use client";

import { motion } from "framer-motion";
import { credibilityPrinciples } from "@/components/home/home-data";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";

export function CredibilitySection({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean;
}) {
  return (
    <Section className="pt-8">
      <Reveal className="mx-auto mb-10 max-w-[46rem] text-center max-md:mb-6">
        <div className="text-[0.84rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
          Built With Intention
        </div>
        <h2 className='mt-2 font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[clamp(2.1rem,5vw,3.6rem)] leading-none font-bold'>
          Credibility without pretending we are bigger than we are.
        </h2>
        <p className="mt-3 text-[1.02rem] leading-[1.8] text-[var(--text-secondary)]">
          Better Muslim is still in early release, so the trust comes from how
          the product is built, how clearly the preview stage is explained, and
          how focused the experience already is.
        </p>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {credibilityPrinciples.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
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
                  : {
                      y: -8,
                      rotate: index % 2 === 0 ? -0.5 : 0.5,
                      scale: 1.015,
                    }
              }
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="group relative h-full overflow-hidden bg-[linear-gradient(180deg,var(--surface),var(--surface-strong))] p-6 hover:border-[var(--brand-soft)] hover:shadow-[0_28px_80px_rgba(var(--shadow-brand),0.14)]">
                <div className="pointer-events-none absolute inset-x-[-12%] top-0 h-20 -translate-y-10 rotate-[7deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.24),transparent)] opacity-0 transition duration-500 group-hover:translate-y-24 group-hover:opacity-100 dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]" />
                <p className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
                  Principle
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
