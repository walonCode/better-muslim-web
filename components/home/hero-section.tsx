"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { highlights, trustItems } from "@/components/home/home-data";
import { Float } from "@/components/motion/float";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { StoreCta } from "@/components/store-cta";
import { Button } from "@/components/ui/button";

const heroTrustStats = [
  {
    label: "Home Dashboard",
    value: "Prayer + resume + goals",
  },
  {
    label: "Quran Tools",
    value: "Audio + tafsir + reciters",
  },
  {
    label: "Learn Section",
    value: "Arabic drills + tests",
  },
  {
    label: "Daily Support",
    value: "Widgets + reminders",
  },
] as const;

export function HeroSection({
  shouldReduceMotion,
  onOpenAndroidPreview,
}: {
  shouldReduceMotion: boolean;
  onOpenAndroidPreview: () => void;
}) {
  return (
    <Section className="pt-10 md:pt-12">
      <Reveal className="mb-7 flex justify-center md:mb-10">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {trustItems.map((item, index) => (
            <motion.span
              key={item}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 16, scale: 0.92, filter: "blur(10px)" }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
              }
              transition={{
                duration: 0.55,
                delay: 0.1 + index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -2, scale: 1.04 }
              }
              className="rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-1 text-[0.74rem] font-semibold text-[var(--text-soft)] backdrop-blur-sm cursor-default"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </Reveal>

      <div className="grid min-h-[min(54rem,calc(100vh-6rem))] items-center gap-10 max-md:min-h-0 max-md:gap-9 md:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
        <Reveal className="max-w-[38rem] space-y-8">
          <motion.div
            className="text-[0.84rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]"
            initial={shouldReduceMotion ? false : { opacity: 0, x: -16 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Better Muslim
          </motion.div>
          <div className="space-y-5">
            <h1 className='max-w-[12ch] font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[clamp(3.2rem,8vw,6rem)] leading-[0.95] font-bold max-md:max-w-none'>
              A calmer Muslim app for the habits you actually return to.
            </h1>
            <p className="max-w-[35rem] text-[1.02rem] leading-[1.8] text-[var(--text-secondary)]">
              Check the next prayer, resume Quran reading, study Hadith and
              Arabic, keep widgets on your home screen, and tune reminders
              without juggling separate tools.
            </p>
          </div>
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 18, filter: "blur(10px)" }
            }
            animate={
              shouldReduceMotion
                ? undefined
                : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            transition={{
              duration: 0.75,
              delay: 0.22,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid gap-4 md:max-w-max md:grid-cols-[auto_auto] md:items-center md:justify-start"
          >
            <motion.div
              whileHover={
                shouldReduceMotion ? undefined : { y: -4, scale: 1.02 }
              }
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
            >
              <Button
                type="button"
                variant="storePrimary"
                onClick={onOpenAndroidPreview}
              >
                <span>
                  <strong>Try Android Preview</strong>
                </span>
              </Button>
            </motion.div>
            <motion.div
              whileHover={
                shouldReduceMotion ? undefined : { y: -4, scale: 1.02 }
              }
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
            >
              <StoreCta platforms={["ios"]} />
            </motion.div>
          </motion.div>
          <motion.p
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 14, filter: "blur(8px)" }
            }
            animate={
              shouldReduceMotion
                ? undefined
                : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            transition={{
              duration: 0.6,
              delay: 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-[0.92rem] text-[var(--text-muted)]"
          >
            Android preview is available now. iPhone waitlist is open.
          </motion.p>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {heroTrustStats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 28, scale: 0.95, filter: "blur(12px)" }
                }
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
                }
                transition={{
                  duration: 0.65,
                  delay: 0.3 + index * 0.09,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -5,
                        scale: 1.015,
                        rotate: index % 2 === 0 ? -0.5 : 0.5,
                      }
                }
                style={{ transformPerspective: 900 }}
                className="rounded-[1.35rem] border border-[var(--border-faint)] bg-[linear-gradient(160deg,var(--surface),var(--surface-strong))] p-4 shadow-[0_16px_36px_rgba(var(--shadow-strong),0.08)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(var(--shadow-brand),0.12)]"
              >
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
                  {item.label}
                </p>
                <p className="mt-2 text-[0.98rem] font-semibold text-[var(--text-primary)]">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="grid gap-3">
            {highlights.map((item, index) => (
              <motion.p
                key={item}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, x: -20, filter: "blur(8px)" }
                }
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { opacity: 1, x: 0, filter: "blur(0px)" }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.34 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-r-[1rem] border-l-2 border-[var(--accent-soft)] pl-4 pr-2 text-[var(--text-secondary)]"
              >
                {item}
              </motion.p>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative isolate overflow-x-clip" delay={0.08}>
          <div className="relative px-2 py-6 max-md:px-0">
            {/* Radial glow behind phone */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--hero-glow),transparent_62%)]" />

            {/* Animated ambient blobs — more natural motion */}
            <motion.div
              aria-hidden
              className="absolute left-[12%] top-[6%] h-48 w-48 rounded-full bg-[var(--hero-shape-green)] blur-3xl"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      x: [0, 22, -12, 8, 0],
                      y: [0, -18, 12, -6, 0],
                      opacity: [0.28, 0.5, 0.22, 0.4, 0.28],
                      scale: [1, 1.05, 0.97, 1.02, 1],
                    }
              }
              transition={{
                duration: 13,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              aria-hidden
              className="absolute bottom-[4%] right-[8%] h-60 w-60 rounded-full bg-[var(--hero-shape-gold)] blur-3xl"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      x: [0, -26, 14, -8, 0],
                      y: [0, 14, -18, 8, 0],
                      opacity: [0.22, 0.38, 0.16, 0.3, 0.22],
                      scale: [1, 0.97, 1.06, 0.99, 1],
                    }
              }
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
            {/* Rotating light column */}
            <motion.div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-[30rem] w-[9rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(180deg,transparent,var(--surface-overlay),transparent)] blur-2xl"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      rotate: [14, 0, -12, 6, 14],
                      opacity: [0.18, 0.36, 0.14, 0.28, 0.18],
                      scaleY: [1, 1.06, 0.96, 1.02, 1],
                    }
              }
              transition={{
                duration: 17,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />

            {/* Background shape panels (Float) */}
            <Float
              className="absolute left-1/2 top-1/2 h-[27rem] w-[22rem] -translate-x-1/2 -translate-y-[58%] rounded-[4rem] bg-[linear-gradient(180deg,var(--hero-shape-main-top),var(--hero-shape-main-bottom))] opacity-90 shadow-[0_40px_90px_rgba(var(--shadow-strong),0.08)] lg:w-[20rem] xl:w-[22rem] max-md:h-[21rem] max-md:w-[17rem] max-md:-translate-y-[60%]"
              delay={0.15}
              duration={9}
              x={8}
              y={12}
            >
              <div className="h-full w-full" />
            </Float>
            <Float
              className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-[82%] -translate-y-[62%] rotate-[-16deg] rounded-[4.5rem] border border-[var(--border-faint)] bg-[linear-gradient(135deg,var(--hero-shape-side-top),var(--hero-shape-side-bottom))] lg:h-[22rem] lg:w-[18rem] xl:h-[24rem] xl:w-[20rem] max-md:h-[18rem] max-md:w-[18rem]"
              delay={0.5}
              duration={10}
              rotate={3}
              x={10}
              y={14}
            >
              <div className="h-full w-full" />
            </Float>
            <Float
              className="absolute left-1/2 top-1/2 h-[17rem] w-[28rem] -translate-x-[8%] -translate-y-[14%] rotate-[14deg] rounded-[3rem] border border-[var(--accent-soft)] bg-[linear-gradient(135deg,var(--hero-shape-accent-top),var(--hero-shape-accent-bottom))] lg:h-[15rem] lg:w-[22rem] xl:h-[17rem] xl:w-[25rem] max-md:h-[12rem] max-md:w-[20rem]"
              delay={0.8}
              duration={11}
              rotate={-2}
              x={-10}
              y={10}
            >
              <div className="h-full w-full" />
            </Float>
            <Float
              className="absolute left-[5%] top-[14%] h-28 w-36 rotate-[-12deg] rounded-[2rem] border border-[var(--brand-soft)] bg-[var(--hero-shape-green)] max-md:hidden"
              delay={0.3}
              duration={8}
              rotate={4}
              x={6}
              y={8}
            >
              <div className="h-full w-full" />
            </Float>

            {/* Phone + floating info cards */}
            <div className="relative grid min-h-[38rem] items-center justify-items-center max-md:min-h-[28rem]">
              {/* Info cards */}
              <Float
                className="absolute left-[8%] top-[10%] z-20 hidden lg:block xl:left-[6%] max-[1400px]:pointer-events-none max-[1400px]:scale-95 max-[1400px]:opacity-0"
                delay={0.2}
                y={10}
              >
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { y: -4, scale: 1.04, rotate: -1 }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-[1.25rem] border border-[var(--border-faint)] bg-[var(--hero-card-bg)] px-5 py-3 shadow-[0_16px_40px_rgba(var(--shadow-strong),0.1)]"
                >
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[var(--hero-card-muted)]">
                    Continue reading
                  </p>
                  <p className="mt-1 text-[1.05rem] font-semibold text-[var(--text-primary)]">
                    Surah Al-Baqara
                  </p>
                </motion.div>
              </Float>
              <Float
                className="absolute right-[10%] top-[7%] z-20 hidden lg:block xl:right-[8%] max-[1400px]:pointer-events-none max-[1400px]:scale-95 max-[1400px]:opacity-0"
                delay={0.7}
                y={12}
              >
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { y: -4, scale: 1.04, rotate: 1 }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-[1.25rem] border border-[var(--border-faint)] bg-[var(--hero-card-bg)] px-5 py-3 shadow-[0_16px_40px_rgba(var(--shadow-strong),0.1)]"
                >
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[var(--hero-card-muted)]">
                    Quran tools
                  </p>
                  <p className="mt-1 text-[1.05rem] font-semibold text-[var(--text-primary)]">
                    Audio, tafsir, goals
                  </p>
                </motion.div>
              </Float>
              <Float
                className="absolute left-[6%] bottom-[14%] z-20 hidden lg:block xl:left-[4%] max-[1400px]:pointer-events-none max-[1400px]:scale-95 max-[1400px]:opacity-0"
                delay={1.1}
                y={9}
              >
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { y: -4, scale: 1.04, rotate: -1 }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-[1.25rem] border border-[var(--border-faint)] bg-[var(--hero-card-bg)] px-5 py-3 shadow-[0_16px_40px_rgba(var(--shadow-strong),0.1)]"
                >
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[var(--hero-card-muted)]">
                    Home dashboard
                  </p>
                  <p className="mt-1 text-[1.05rem] font-semibold text-[var(--text-primary)]">
                    Prayer, streak, resume
                  </p>
                </motion.div>
              </Float>
              <Float
                className="absolute bottom-[24%] right-[6%] z-20 hidden lg:block xl:right-[4%] max-[1400px]:pointer-events-none max-[1400px]:scale-95 max-[1400px]:opacity-0"
                delay={1.4}
                y={11}
              >
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { y: -4, scale: 1.04, rotate: 0.5 }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-[1.25rem] border border-[var(--border-faint)] bg-[var(--hero-card-bg)] px-5 py-3 shadow-[0_16px_40px_rgba(var(--shadow-strong),0.1)]"
                >
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[var(--hero-card-muted)]">
                    Saved on device
                  </p>
                  <p className="mt-1 text-[1.05rem] font-semibold text-[var(--text-primary)]">
                    Widgets, backups, reminders
                  </p>
                </motion.div>
              </Float>

              {/* Main phone — cinematic entrance */}
              <Float
                className="relative grid place-items-center"
                delay={0.3}
                duration={7}
                rotate={1.6}
                x={5}
                y={14}
              >
                <motion.div
                  style={{ perspective: 1400 }}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 60,
                          scale: 0.86,
                          rotateX: 18,
                          rotateY: -28,
                          rotateZ: -3,
                          filter: "blur(18px)",
                        }
                  }
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          rotateX: 16,
                          rotateY: -18,
                          rotateZ: -2.5,
                          filter: "blur(0px)",
                        }
                  }
                  transition={{
                    duration: 1.15,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -12,
                          scale: 1.025,
                          rotateX: 6,
                          rotateY: -6,
                          rotateZ: 0,
                        }
                  }
                >
                  <div className="relative">
                    {/* Horizontal light sweep across screen */}
                    <motion.div
                      aria-hidden
                      className="pointer-events-none absolute inset-y-[8%] left-[-10%] z-20 w-[34%] skew-x-[-18deg] rounded-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)] opacity-0 blur-xl dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]"
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : {
                              x: ["-140%", "240%"],
                              opacity: [0, 0.42, 0],
                            }
                      }
                      transition={{
                        duration: 3.6,
                        delay: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 3.2,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    />
                    {/* Pulsing glow ring behind phone */}
                    <motion.div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(var(--shadow-brand),0.18),transparent_66%)]"
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : {
                              scale: [0.9, 1.06, 0.94, 1.02, 0.9],
                              opacity: [0.16, 0.36, 0.18, 0.3, 0.16],
                            }
                      }
                      transition={{
                        duration: 5.8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                    <Image
                      src="/screenshots/showcase-screen-01.png"
                      alt="Better Muslim home dashboard preview"
                      width={688}
                      height={1532}
                      sizes="(max-width: 768px) 80vw, (max-width: 1280px) 40vw, 35rem"
                      priority
                      className="relative z-10 h-auto w-[min(100%,24rem)] object-contain mix-blend-multiply drop-shadow-[0_32px_64px_rgba(var(--shadow-strong),0.26)] max-md:w-[min(100%,17rem)]"
                    />
                  </div>
                </motion.div>
              </Float>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
