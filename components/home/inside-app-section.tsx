"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
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
    proof: "Prayer awareness and resume state above the fold",
    note: "Built for repeat visits, not hunting through tabs.",
  },
  {
    src: "/screenshots/showcase-screen-02.png",
    alt: "Better Muslim Quran and reading screen",
    kicker: "Read Better",
    title: "Quran and Hadith with calmer reading flow.",
    body: "Large readable text, thoughtful spacing, and quick resume behavior make long-term reading feel consistent and lightweight.",
    proof: "Cleaner typography, calmer spacing, less reader fatigue",
    note: "Designed so longer reading sessions still feel light.",
  },
  {
    src: "/screenshots/showcase-screen-03.png",
    alt: "Better Muslim learning and settings screen",
    kicker: "Learn Section",
    title: "Structured learning, including Arabic mastery.",
    body: "Move through practical Islamic learning modules with clear progression, then come back exactly where you stopped.",
    proof: "Arabic mastery and settings live inside one focused flow",
    note: "Learning modules are practical, not buried under menus.",
  },
  {
    src: "/screenshots/showcase-screen-04.png",
    alt: "Better Muslim reminders and widgets screen",
    kicker: "Stay Consistent",
    title: "Reminders and widgets that support daily habits.",
    body: "Set reminders, keep habits visible from your home screen, and stay anchored to your daily worship routine.",
    proof: "Daily habit support without account setup friction",
    note: "Useful at a glance, not just when the app is open.",
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

      <div className="space-y-16 md:hidden md:space-y-24">
        {SHOWCASE_ITEMS.map((item, index) => (
          <MobileShowcaseStory
            key={item.src}
            index={index}
            item={item}
            reverseDesktop={index % 2 === 1}
            shouldReduceMotion={shouldReduceMotion}
          />
        ))}
      </div>

      <DesktopPinnedShowcase shouldReduceMotion={shouldReduceMotion} />
    </Section>
  );
}

function MobileShowcaseStory({
  index,
  item,
  reverseDesktop,
  shouldReduceMotion,
}: {
  index: number;
  item: (typeof SHOWCASE_ITEMS)[number];
  reverseDesktop: boolean;
  shouldReduceMotion: boolean;
}) {
  const articleRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ["start 78%", "end 28%"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reverseDesktop ? [34, -22] : [22, -34],
  );
  const imageRotate = useTransform(
    scrollYProgress,
    [0, 1],
    reverseDesktop ? [2.5, -1.5] : [-2.5, 1.5],
  );
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    [0.88, 1.035, 0.985],
  );
  const textY = useTransform(scrollYProgress, [0, 1], [24, -12]);
  const proofY = useTransform(scrollYProgress, [0, 0.7, 1], [28, 0, -8]);
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [0.08, 0.22, 0.12],
  );

  return (
    <Reveal className="relative md:hidden" delay={index * 0.05}>
      <article
        ref={articleRef}
        className="relative py-6 md:py-8"
        style={{ position: "relative" }}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-x-[8%] top-[8%] h-[72%] rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(var(--shadow-brand),0.12),transparent_72%)] blur-3xl"
          style={{ opacity: shouldReduceMotion ? undefined : glowOpacity }}
        />
        <div className="relative grid items-center gap-10">
          <Float
            className=""
            delay={0.2 + index * 0.12}
            duration={9}
            y={8}
            x={index % 2 === 0 ? 5 : -5}
            rotate={index % 2 === 0 ? 1.1 : -1.1}
          >
            <motion.div
              style={{
                perspective: 1200,
                y: shouldReduceMotion ? undefined : imageY,
                rotate: shouldReduceMotion ? undefined : imageRotate,
                scale: shouldReduceMotion ? undefined : imageScale,
              }}
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
              className="relative mx-auto w-[min(100%,17rem)]"
            >
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(var(--shadow-strong),0.08),transparent_68%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_68%)]" />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-y-[6%] left-[-8%] z-20 w-[28%] skew-x-[-18deg] rounded-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.42),transparent)] opacity-0 blur-xl dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)]"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        x: ["-120%", "220%"],
                        opacity: [0, 0.32, 0],
                      }
                }
                transition={{
                  duration: 3.4,
                  delay: 0.5 + index * 0.22,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 2.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
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
            style={{ y: shouldReduceMotion ? undefined : textY }}
            className=""
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
            <div className="max-w-[42rem]">
              <p className="text-[0.8rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
                {item.kicker}
              </p>
              <h3 className='mt-3 font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[clamp(1.75rem,3.4vw,2.8rem)] leading-[1.03] font-bold'>
                {item.title}
              </h3>
              <p className="mt-4 max-w-[40ch] text-[1.04rem] leading-[1.85] text-[var(--text-secondary)]">
                {item.body}
              </p>
              <motion.div
                style={{ y: shouldReduceMotion ? undefined : proofY }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -6,
                        scale: 1.01,
                        rotate: reverseDesktop ? -0.4 : 0.4,
                      }
                }
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="group relative mt-6 max-w-[42rem] overflow-hidden rounded-[1.35rem] border border-[var(--border-faint)] bg-[linear-gradient(180deg,var(--surface),var(--surface-strong))] p-4 shadow-[0_18px_50px_rgba(var(--shadow-strong),0.08)]"
              >
                <div className="pointer-events-none absolute inset-x-[-12%] top-0 h-20 -translate-y-10 rotate-[7deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.24),transparent)] opacity-0 transition duration-500 group-hover:translate-y-20 group-hover:opacity-100 dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]" />
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
                  Why It Matters
                </p>
                <p className="mt-2 text-[0.98rem] leading-[1.7] text-[var(--text-primary)]">
                  {item.proof}
                </p>
                <p className="mt-2 text-[0.95rem] leading-[1.7] text-[var(--text-secondary)]">
                  {item.note}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </article>
    </Reveal>
  );
}

function DesktopPinnedShowcase({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean;
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const activeIndex = useTransform(
    scrollYProgress,
    [0, 0.24, 0.49, 0.74, 1],
    [0, 1, 2, 3, 3],
  );
  const stageGlow = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.12, 0.22, 0.14],
  );

  return (
    <div
      ref={sectionRef}
      className="relative hidden min-h-[420vh] md:block"
      style={{ position: "relative" }}
    >
      <div className="sticky top-0 flex min-h-screen items-center">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-x-[10%] top-[18%] h-[60%] rounded-[4rem] bg-[radial-gradient(circle_at_center,rgba(var(--shadow-brand),0.16),transparent_72%)] blur-3xl"
            style={{ opacity: shouldReduceMotion ? undefined : stageGlow }}
          />

          <div className="relative flex min-h-[40rem] items-center justify-center">
            <Float
              className="absolute inset-0"
              delay={0.2}
              duration={11}
              y={10}
              x={6}
              rotate={1.2}
            >
              <div className="absolute left-1/2 top-1/2 h-[28rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] bg-[linear-gradient(180deg,var(--hero-shape-main-top),var(--hero-shape-main-bottom))] opacity-90 shadow-[0_36px_90px_rgba(var(--shadow-strong),0.08)]" />
            </Float>

            <div className="relative mx-auto w-[min(100%,23rem)]">
              {SHOWCASE_ITEMS.map((item, index) => (
                <PinnedStageImage
                  key={item.src}
                  item={item}
                  index={index}
                  activeIndex={activeIndex}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>
          </div>

          <div className="relative">
            {SHOWCASE_ITEMS.map((item, index) => (
              <PinnedStageCopy
                key={item.title}
                item={item}
                index={index}
                activeIndex={activeIndex}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PinnedStageImage({
  item,
  index,
  activeIndex,
  shouldReduceMotion,
}: {
  item: (typeof SHOWCASE_ITEMS)[number];
  index: number;
  activeIndex: ReturnType<typeof useTransform<number, number>>;
  shouldReduceMotion: boolean;
}) {
  const distance = useTransform(activeIndex, (value) =>
    Math.abs(value - index),
  );
  const opacity = useTransform(distance, [0, 0.18, 0.55, 1.05], [1, 1, 0.7, 0]);
  const scale = useTransform(distance, [0, 0.5, 1.4], [1, 0.98, 0.9]);
  const y = useTransform(distance, [0, 0.8, 1.5], [0, 18, 56]);
  const rotate = useTransform(
    distance,
    [0, 0.75, 1.5],
    [0, index % 2 === 0 ? -2 : 2, index % 2 === 0 ? -6 : 6],
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        opacity: shouldReduceMotion ? (index === 0 ? 1 : 0) : opacity,
        scale: shouldReduceMotion ? 1 : scale,
        y: shouldReduceMotion ? undefined : y,
        rotate: shouldReduceMotion ? undefined : rotate,
      }}
    >
      <motion.div
        whileHover={
          shouldReduceMotion
            ? undefined
            : {
                y: -8,
                scale: 1.015,
                rotateX: 3,
                rotateY: index % 2 === 0 ? -4 : 4,
              }
        }
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-y-[6%] left-[-8%] z-20 w-[28%] skew-x-[-18deg] rounded-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.42),transparent)] opacity-0 blur-xl dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)]"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: ["-120%", "220%"],
                  opacity: [0, 0.3, 0],
                }
          }
          transition={{
            duration: 3.6,
            delay: 0.7 + index * 0.2,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 2.8,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
        <Image
          src={item.src}
          alt={item.alt}
          width={688}
          height={1532}
          loading={index < 2 ? "eager" : "lazy"}
          priority={index < 2}
          className="h-auto w-full object-contain mix-blend-multiply drop-shadow-[0_24px_54px_rgba(var(--shadow-strong),0.2)]"
          sizes="(max-width: 1200px) 42vw, 23rem"
        />
      </motion.div>
    </motion.div>
  );
}

function PinnedStageCopy({
  item,
  index,
  activeIndex,
  shouldReduceMotion,
}: {
  item: (typeof SHOWCASE_ITEMS)[number];
  index: number;
  activeIndex: ReturnType<typeof useTransform<number, number>>;
  shouldReduceMotion: boolean;
}) {
  const distance = useTransform(activeIndex, (value) =>
    Math.abs(value - index),
  );
  const opacity = useTransform(
    distance,
    [0, 0.15, 0.45, 0.95],
    [1, 1, 0.82, 0],
  );
  const y = useTransform(distance, [0, 0.6, 1.1], [0, 8, 28]);
  const scale = useTransform(distance, [0, 0.7, 1.1], [1, 0.995, 0.97]);

  return (
    <motion.div
      className="absolute inset-0 flex items-center"
      style={{
        opacity: shouldReduceMotion ? (index === 0 ? 1 : 0) : opacity,
        y: shouldReduceMotion ? undefined : y,
        scale: shouldReduceMotion ? 1 : scale,
      }}
    >
      <div className="max-w-[42rem]">
        <p className="text-[0.8rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
          {item.kicker}
        </p>
        <h3 className='mt-3 font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[clamp(2rem,3.8vw,3rem)] leading-[1.02] font-bold'>
          {item.title}
        </h3>
        <p className="mt-4 max-w-[40ch] text-[1.05rem] leading-[1.9] text-[var(--text-secondary)]">
          {item.body}
        </p>
        <motion.div
          whileHover={
            shouldReduceMotion
              ? undefined
              : { y: -6, scale: 1.01, rotate: index % 2 === 0 ? 0.35 : -0.35 }
          }
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="group relative mt-6 max-w-[42rem] overflow-hidden rounded-[1.35rem] border border-[var(--border-faint)] bg-[linear-gradient(180deg,var(--surface),var(--surface-strong))] p-4 shadow-[0_18px_50px_rgba(var(--shadow-strong),0.08)]"
        >
          <div className="pointer-events-none absolute inset-x-[-12%] top-0 h-20 -translate-y-10 rotate-[7deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.24),transparent)] opacity-0 transition duration-500 group-hover:translate-y-20 group-hover:opacity-100 dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]" />
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
            Why It Matters
          </p>
          <p className="mt-2 text-[0.98rem] leading-[1.7] text-[var(--text-primary)]">
            {item.proof}
          </p>
          <p className="mt-2 text-[0.95rem] leading-[1.7] text-[var(--text-secondary)]">
            {item.note}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
