"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Float } from "@/components/motion/float";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";

const SHOWCASE_ITEMS = [
  {
    src: "/screenshots/showcase-screen-01.png",
    alt: "Better Muslim home dashboard screen",
    kicker: "Daily Focus",
    title: "See what matters first.",
    body: "Prayer awareness, your current streak, and resume points are surfaced immediately so your routine starts without friction.",
  },
  {
    src: "/screenshots/showcase-screen-02.png",
    alt: "Better Muslim Quran and reading screen",
    kicker: "Read Better",
    title: "Quran and Hadith with calmer reading flow.",
    body: "Large readable text, thoughtful spacing, and quick resume behavior make long-term reading feel consistent and lightweight.",
  },
  {
    src: "/screenshots/showcase-screen-03.png",
    alt: "Better Muslim learning and settings screen",
    kicker: "Learn Section",
    title: "Structured learning, including Arabic mastery.",
    body: "Move through practical Islamic learning modules with clear progression, then come back exactly where you stopped.",
  },
  {
    src: "/screenshots/showcase-screen-04.png",
    alt: "Better Muslim reminders and widgets screen",
    kicker: "Stay Consistent",
    title: "Reminders and widgets that support daily habits.",
    body: "Set reminders, keep habits visible from your home screen, and stay anchored to your daily worship routine.",
  },
] as const;

export function InsideAppSection() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <Section className="pt-14 md:pt-18">
      <Reveal className="mx-auto mb-14 max-w-[44rem] text-center md:mb-20">
        <div className="text-[0.84rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
          Inside The App
        </div>
        <h2 className='mt-2 font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[clamp(2.2rem,5vw,4rem)] leading-[0.96] font-bold'>
          One focused screen at a time.
        </h2>
        <p className="mt-4 text-[1.04rem] leading-[1.85] text-[var(--text-secondary)]">
          The experience is designed like a product story: clear screens, clear
          purpose, and enough space to let each feature breathe.
        </p>
      </Reveal>

      <div className="space-y-16 md:space-y-24">
        {SHOWCASE_ITEMS.map((item, index) => {
          const reverseDesktop = index % 2 === 1;
          return (
            <Reveal key={item.src} delay={index * 0.05}>
              <article className="relative py-2 md:py-4">
                <div
                  className={`relative grid items-center gap-10 lg:gap-16 ${reverseDesktop ? "lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]" : "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"}`}
                >
                  <Float
                    className={reverseDesktop ? "lg:order-2" : "lg:order-1"}
                    delay={0.2 + index * 0.12}
                    duration={9}
                    y={8}
                    x={index % 2 === 0 ? 5 : -5}
                    rotate={index % 2 === 0 ? 1.1 : -1.1}
                  >
                    <motion.div
                      style={{ perspective: 1200 }}
                      initial={
                        shouldReduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 40,
                              scale: 0.9,
                              rotateX: 10,
                              rotateY: reverseDesktop ? 20 : -20,
                              rotateZ: reverseDesktop ? 2 : -2,
                              filter: "blur(8px)",
                            }
                      }
                      whileInView={
                        shouldReduceMotion
                          ? undefined
                          : {
                              opacity: 1,
                              y: 0,
                              scale: 1,
                              rotateX: 5,
                              rotateY: reverseDesktop ? 12 : -12,
                              rotateZ: reverseDesktop ? 1 : -1,
                              filter: "blur(0px)",
                            }
                      }
                      viewport={{ once: true, amount: 0.35 }}
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : {
                              y: -10,
                              scale: 1.02,
                              rotateX: 2,
                              rotateY: reverseDesktop ? 4 : -4,
                              rotateZ: 0,
                            }
                      }
                      transition={{
                        default: {
                          duration: 0.8,
                          ease: [0.16, 1, 0.3, 1],
                        },
                      }}
                      className="relative mx-auto w-[min(100%,17rem)] md:w-[min(100%,20rem)]"
                    >
                      <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(var(--shadow-strong),0.08),transparent_68%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_68%)]" />
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={688}
                        height={1532}
                        loading={index < 2 ? "eager" : "lazy"}
                        priority={index < 2}
                        className="h-auto w-full object-contain mix-blend-multiply drop-shadow-[0_18px_42px_rgba(var(--shadow-strong),0.18)]"
                        sizes="(max-width: 768px) 80vw, (max-width: 1200px) 44vw, 20rem"
                      />
                    </motion.div>
                  </Float>

                  <motion.div
                    className={reverseDesktop ? "lg:order-1" : "lg:order-2"}
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 18,
                            x: reverseDesktop ? 20 : -20,
                            filter: "blur(8px)",
                          }
                    }
                    whileInView={
                      shouldReduceMotion
                        ? undefined
                        : { opacity: 1, y: 0, x: 0, filter: "blur(0px)" }
                    }
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      duration: 0.75,
                      delay: 0.12 + index * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <p className="text-[0.8rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
                      {item.kicker}
                    </p>
                    <h3 className='mt-3 font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[clamp(1.75rem,3.4vw,2.8rem)] leading-[1.03] font-bold'>
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-[40ch] text-[1.04rem] leading-[1.85] text-[var(--text-secondary)]">
                      {item.body}
                    </p>
                  </motion.div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
