"use client";

import { motion } from "framer-motion";
import { featureCards } from "@/components/home/home-data";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";

export function FeaturesSection({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean;
}) {
  return (
    <Section id="features" className="pt-12 md:pt-14">
      <Reveal className="mx-auto mb-10 max-w-[46rem] text-center max-md:mb-6">
        <div className="text-[0.84rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
          What You Can Use
        </div>
        <h2 className='mt-2 font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[clamp(2.1rem,5vw,3.6rem)] leading-none font-bold'>
          Already deeper than a simple reader.
        </h2>
        <p className="mt-3 text-[1.02rem] leading-[1.8] text-[var(--text-secondary)]">
          The current build already covers prayer awareness, Quran reading,
          Hadith browsing, structured learning, Arabic practice, widgets,
          reminders, and local device control in one calmer interface.
        </p>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {featureCards.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 0.08}>
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 28, rotateX: 10, filter: "blur(10px)" }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }
              }
              viewport={{ once: true, amount: 0.28 }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -10,
                      rotate: index % 2 === 0 ? -0.8 : 0.8,
                      scale: 1.015,
                    }
              }
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="group relative flex min-h-[15.5rem] flex-col overflow-hidden border-[var(--border)] bg-[linear-gradient(180deg,var(--surface),var(--surface-strong))] p-6 shadow-[0_20px_70px_rgba(var(--shadow-strong),0.12)] hover:border-[var(--brand-soft)] hover:shadow-[0_30px_90px_rgba(var(--shadow-brand),0.16)] max-md:rounded-[1.35rem] max-md:p-5">
                <div className="pointer-events-none absolute inset-x-[-20%] top-0 h-24 -translate-y-10 rotate-[8deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.28),transparent)] opacity-0 transition duration-500 group-hover:translate-y-28 group-hover:opacity-100 dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]" />
                <h3 className="mb-3 text-[1.15rem] font-bold">
                  {feature.title}
                </h3>
                <p className="text-[1.02rem] leading-[1.8] text-[var(--text-secondary)]">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
