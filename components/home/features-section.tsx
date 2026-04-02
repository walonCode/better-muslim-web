"use client";

import { motion } from "framer-motion";
import { Bell, BookOpen, GraduationCap, Home } from "lucide-react";
import React from "react";
import { featureCards } from "@/components/home/home-data";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";

const featureIcons = [
  Home,        // dashboard
  BookOpen,    // quran tools
  GraduationCap, // learn
  Bell,        // widgets / reminders
];

// Subtle icon colour accents per card — adds personality like Notion / Linear
const iconAccents = [
  { bg: "rgba(13,122,92,0.14)", color: "var(--brand-strong)" },
  { bg: "rgba(184,148,62,0.16)", color: "var(--accent)" },
  { bg: "rgba(13,122,92,0.14)", color: "var(--brand-strong)" },
  { bg: "rgba(184,148,62,0.16)", color: "var(--accent)" },
];

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
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {featureCards.map((feature, index) => {
          const accent = iconAccents[index] ?? iconAccents[0];
          const IconComponent = featureIcons[index] ?? BookOpen;
          return (
            <motion.div
              key={feature.title}
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 36,
                      scale: 0.95,
                      rotateX: 12,
                      filter: "blur(12px)",
                    }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      rotateX: 0,
                      filter: "blur(0px)",
                    }
              }
              viewport={{ once: true, amount: 0.24 }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -12,
                      rotate: index % 2 === 0 ? -0.9 : 0.9,
                      scale: 1.018,
                    }
              }
              transition={{
                default: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                opacity: { delay: index * 0.09, duration: 0.55 },
                y: { delay: index * 0.09, duration: 0.55 },
                scale: { delay: index * 0.09, duration: 0.55 },
                filter: { delay: index * 0.09, duration: 0.55 },
                rotateX: { delay: index * 0.09, duration: 0.55 },
              }}
              style={{ transformPerspective: 1200 }}
            >
              <Card className="group relative flex min-h-[16rem] flex-col overflow-hidden border-[var(--border)] bg-[linear-gradient(160deg,var(--surface),var(--surface-strong))] p-6 shadow-[0_20px_70px_rgba(var(--shadow-strong),0.1)] hover:border-[var(--brand-soft)] hover:shadow-[0_36px_100px_rgba(var(--shadow-brand),0.18)] max-md:rounded-[1.35rem] max-md:p-5 transition-shadow duration-300">
                {/* Shimmer sweep on hover */}
                <div className="pointer-events-none absolute inset-x-[-20%] top-0 h-24 -translate-y-12 rotate-[10deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.32),transparent)] opacity-0 blur-sm transition-all duration-700 group-hover:translate-y-36 group-hover:opacity-100 dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]" />
                {/* Bottom glow */}
                <div
                  className="pointer-events-none absolute bottom-0 left-1/2 h-16 w-32 -translate-x-1/2 translate-y-8 rounded-full opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
                  style={{ background: accent.bg }}
                />
                {/* Icon */}
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { scale: 1.1, rotate: -6 }
                  }
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.06)]"
                  style={{ background: accent.bg, color: accent.color }}
                >
                  <IconComponent size={22} strokeWidth={2} />
                </motion.div>
                <h3 className="mb-2.5 text-[1.12rem] font-bold leading-[1.25] text-[var(--text-primary)]">
                  {feature.title}
                </h3>
                <p className="text-[0.98rem] leading-[1.8] text-[var(--text-secondary)]">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
