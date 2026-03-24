"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Float } from "@/components/motion/float";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { StoreCta } from "@/components/store-cta";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const featureCards = [
  {
    title: "Daily companion, not just a reader",
    description:
      "Start from a home dashboard built around prayer times, next actions, streaks, and the parts of the app you actually revisit.",
  },
  {
    title: "Quran that fits real reading habits",
    description:
      "Read by surah or juz with Arabic text, translation, transliteration, bookmarks, and continue-reading support.",
  },
  {
    title: "Hadith study without friction",
    description:
      "Browse collections and sections, search faster with on-device caching, and keep your place as you study.",
  },
  {
    title: "Learn beyond reading",
    description:
      "Move through Salah, Duas, Sunnah, etiquette, Arabic, and Islamic basics in a structured learning hub.",
  },
];

const highlights = [
  "Prayer times, progress, streaks, and resume flows in one place",
  "Offline-first Quran, Hadith, and Learn access where possible",
  "Local bookmarks, favorites, backup, and reader settings on device",
];

const trustItems = ["No account required", "Offline-first", "Ad-free"];
const androidPreviewUrl =
  "https://expo.dev/accounts/walon/projects/better-muslim/builds/cdf6ecce-78cd-458b-a8d3-9e4c01302680";

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pb-20">
      <Section className="pt-8 md:pt-10">
        <Reveal className="mb-7 flex justify-center md:mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {trustItems.map((item, index) => (
              <motion.span
                key={item}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 14, scale: 0.94, filter: "blur(8px)" }
                }
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
                }
                transition={{
                  duration: 0.55,
                  delay: 0.12 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-1 text-[0.74rem] font-semibold text-[var(--text-soft)]"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </Reveal>

        <div className="grid min-h-[min(54rem,calc(100vh-6rem))] items-center gap-10 max-md:min-h-0 max-md:gap-9 md:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
          <Reveal className="space-y-8">
            <div className="text-[0.84rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
              Better Muslim
            </div>
            <div className="space-y-5">
              <h1 className='max-w-[11ch] font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[clamp(3.2rem,8vw,6rem)] leading-[0.95] font-bold max-md:max-w-none'>
                A calm Muslim companion for prayer, reading, and daily growth.
              </h1>
              <p className="text-[1.02rem] leading-[1.8] text-[var(--text-secondary)]">
                Better Muslim brings prayer times, Quran reading, Hadith study,
                structured learning, and progress tracking into one focused
                mobile experience with offline-first behavior where practical.
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
              className="grid gap-4 md:grid-cols-[auto_auto] md:items-center md:justify-start"
            >
              <motion.div
                whileHover={
                  shouldReduceMotion ? undefined : { y: -3, scale: 1.01 }
                }
                transition={{ duration: 0.2 }}
              >
                <Button
                  href={androidPreviewUrl}
                  variant="storePrimary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <strong>Try Android Preview</strong>
                  </span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={
                  shouldReduceMotion ? undefined : { y: -3, scale: 1.01 }
                }
                transition={{ duration: 0.2 }}
              >
                <StoreCta platforms={["ios"]} />
              </motion.div>
            </motion.div>
            <div className="grid gap-4 md:grid-cols-[auto_auto] md:items-center md:justify-start">
              <Link
                className="inline-flex min-h-13 w-full items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] transition-transform duration-200 hover:-translate-y-0.5 md:w-auto"
                href="#features"
              >
                Explore Features
              </Link>
            </div>
            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <motion.p
                  key={item}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, x: -16, filter: "blur(8px)" }
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
                  className="border-l-2 border-[var(--accent-soft)] pl-4 text-[var(--text-secondary)]"
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative isolate overflow-x-clip" delay={0.08}>
            <div className="relative px-2 py-6 max-md:px-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--hero-glow),transparent_62%)]" />
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
              <Float
                className="absolute bottom-[16%] right-[6%] h-24 w-44 rotate-[18deg] rounded-[2.2rem] border border-[var(--accent-soft)] bg-[var(--hero-shape-gold)] max-md:hidden"
                delay={1}
                duration={9}
                rotate={-3}
                x={-7}
                y={9}
              >
                <div className="h-full w-full" />
              </Float>
              <div className="relative grid min-h-[38rem] items-center justify-items-center max-md:min-h-[28rem]">
                <Float
                  className="absolute left-[8%] top-[10%] z-20 hidden lg:block xl:left-[6%] max-[1400px]:pointer-events-none max-[1400px]:scale-95 max-[1400px]:opacity-0"
                  delay={0.2}
                  y={10}
                >
                  <div className="rounded-[1.25rem] border border-[var(--border-faint)] bg-[var(--hero-card-bg)] px-5 py-3 shadow-[0_16px_32px_rgba(var(--shadow-strong),0.08)]">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[var(--hero-card-muted)]">
                      Continue reading
                    </p>
                    <p className="mt-1 text-[1.05rem] font-semibold text-[var(--text-primary)]">
                      Al-Baqara
                    </p>
                  </div>
                </Float>
                <Float
                  className="absolute right-[10%] top-[7%] z-20 hidden lg:block xl:right-[8%] max-[1400px]:pointer-events-none max-[1400px]:scale-95 max-[1400px]:opacity-0"
                  delay={0.7}
                  y={12}
                >
                  <div className="rounded-[1.25rem] border border-[var(--border-faint)] bg-[var(--hero-card-bg)] px-5 py-3 shadow-[0_16px_32px_rgba(var(--shadow-strong),0.08)]">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[var(--hero-card-muted)]">
                      Saved on device
                    </p>
                    <p className="mt-1 text-[1.05rem] font-semibold text-[var(--text-primary)]">
                      Offline-first
                    </p>
                  </div>
                </Float>
                <Float
                  className="absolute left-[6%] bottom-[14%] z-20 hidden lg:block xl:left-[4%] max-[1400px]:pointer-events-none max-[1400px]:scale-95 max-[1400px]:opacity-0"
                  delay={1.1}
                  y={9}
                >
                  <div className="rounded-[1.25rem] border border-[var(--border-faint)] bg-[var(--hero-card-bg)] px-5 py-3 shadow-[0_16px_32px_rgba(var(--shadow-strong),0.08)]">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[var(--hero-card-muted)]">
                      Daily flow
                    </p>
                    <p className="mt-1 text-[1.05rem] font-semibold text-[var(--text-primary)]">
                      Prayer, Quran, Learn
                    </p>
                  </div>
                </Float>
                <Float
                  className="absolute bottom-[24%] right-[6%] z-20 hidden lg:block xl:right-[4%] max-[1400px]:pointer-events-none max-[1400px]:scale-95 max-[1400px]:opacity-0"
                  delay={1.4}
                  y={11}
                >
                  <div className="rounded-[1.25rem] border border-[var(--border-faint)] bg-[var(--hero-card-bg)] px-5 py-3 shadow-[0_16px_32px_rgba(var(--shadow-strong),0.08)]">
                    <p className="text-[0.95rem] font-medium text-[var(--text-primary)]">
                      Streaks and goals
                    </p>
                  </div>
                </Float>
                <Float
                  className="absolute right-[18%] bottom-[3%] z-20 hidden lg:block xl:right-[16%] max-[1400px]:pointer-events-none max-[1400px]:scale-95 max-[1400px]:opacity-0"
                  delay={1.8}
                  y={10}
                >
                  <div className="rounded-[1.25rem] border border-[var(--border-faint)] bg-[var(--hero-card-bg)] px-5 py-3 shadow-[0_16px_32px_rgba(var(--shadow-strong),0.08)]">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[var(--hero-card-muted)]">
                      Reading controls
                    </p>
                    <p className="mt-1 text-[1.05rem] font-semibold text-[var(--text-primary)]">
                      Theme and font size
                    </p>
                  </div>
                </Float>
                <Float
                  className="relative grid place-items-center"
                  delay={0.3}
                  duration={7}
                  rotate={1.6}
                  x={5}
                  y={14}
                >
                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 26,
                            scale: 0.94,
                            rotate: -2,
                            filter: "blur(12px)",
                          }
                    }
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            rotate: 0,
                            filter: "blur(0px)",
                          }
                    }
                    transition={{
                      duration: 1,
                      delay: 0.26,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={
                      shouldReduceMotion ? undefined : { y: -5, rotate: -1.2 }
                    }
                  >
                    <Image
                      src="/phone_image_transparent.png"
                      alt="Better Muslim app hero image shown on an Android phone"
                      width={1000}
                      height={1200}
                      sizes="(max-width: 768px) 80vw, (max-width: 1280px) 40vw, 35rem"
                      priority
                      className="relative z-10 h-auto w-[min(100%,35rem)] drop-shadow-[0_34px_60px_rgba(var(--shadow-strong),0.2)] max-md:w-[min(100%,22rem)]"
                    />
                  </motion.div>
                </Float>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="features" className="pt-8">
        <Reveal className="mx-auto mb-10 max-w-[46rem] text-center max-md:mb-6">
          <div className="text-[0.84rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
            Why it stands out
          </div>
          <h2 className='mt-2 font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[clamp(2.1rem,5vw,3.6rem)] leading-none font-bold'>
            Built around daily Muslim habits, not a cluttered feature dump.
          </h2>
          <p className="mt-3 text-[1.02rem] leading-[1.8] text-[var(--text-secondary)]">
            The app already supports the core habits people come back for:
            prayer awareness, reading, saving progress, revisiting material, and
            learning in a calmer interface.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {featureCards.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.08}>
              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -8,
                        rotate: index % 2 === 0 ? -0.6 : 0.6,
                        scale: 1.01,
                      }
                }
                transition={{ duration: 0.22 }}
              >
                <Card className="min-h-[15rem] border-[var(--border)] bg-[linear-gradient(180deg,var(--surface),var(--surface-strong))] p-6 shadow-[0_20px_70px_rgba(var(--shadow-strong),0.12)] hover:border-[var(--brand-soft)] hover:shadow-[0_30px_90px_rgba(var(--shadow-brand),0.16)] max-md:rounded-[1.35rem] max-md:p-5">
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

      <Section className="pt-6">
        <div className="grid gap-8 md:grid-cols-2 max-md:gap-5">
          <Reveal>
            <Card className="bg-[linear-gradient(180deg,var(--surface),var(--surface-strong))] p-6 hover:-translate-y-2 hover:border-[var(--brand-soft)] hover:shadow-[0_32px_96px_rgba(var(--shadow-brand),0.16)] max-md:rounded-[1.35rem] max-md:p-5">
              <div className="text-[0.84rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
                Reading experience
              </div>
              <h2 className='mb-3 mt-2 font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[clamp(2.1rem,5vw,3.6rem)] leading-none font-bold'>
                Personalized without turning into noise.
              </h2>
              <p className="text-[1.02rem] leading-[1.8] text-[var(--text-secondary)]">
                Better Muslim keeps the experience adaptable with theme
                controls, Arabic and English font sizing, and translation or
                transliteration visibility settings, while keeping the interface
                focused on daily use.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="bg-[linear-gradient(135deg,var(--brand-soft),rgba(184,148,62,0.08)),var(--surface)] p-6 hover:-translate-y-2 hover:border-[var(--brand-soft)] hover:shadow-[0_32px_96px_rgba(var(--shadow-brand),0.16)] dark:bg-[linear-gradient(135deg,rgba(46,92,78,0.34),rgba(115,96,48,0.18)),var(--surface)] max-md:rounded-[1.35rem] max-md:p-5">
              <div className="text-[0.84rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
                Real product depth
              </div>
              <ul className="mt-4 grid gap-4 text-[var(--text-secondary)]">
                <li>
                  Prayer setup, local schedules, and next-prayer awareness
                </li>
                <li>Ayah bookmarks and sharing</li>
                <li>Hadith bookmarks, search, and continue reading</li>
                <li>
                  Learn modules for Salah, Duas, etiquette, Arabic, and basics
                </li>
                <li>
                  Global search, Quran goals, streaks, backup, and storage tools
                </li>
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-6">
        <Reveal>
          <Card className="grid gap-8 overflow-hidden bg-[linear-gradient(135deg,var(--hero-preview-top),var(--hero-preview-bottom)),var(--surface)] p-6 hover:-translate-y-2 hover:border-[var(--brand-soft)] hover:shadow-[0_32px_96px_rgba(var(--shadow-brand),0.16)] md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:p-8">
            <div>
              <div className="text-[0.84rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
                Android preview
              </div>
              <h2 className='mt-2 font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[clamp(2rem,4.4vw,3.2rem)] leading-none font-bold'>
                Try the Android preview before release.
              </h2>
              <p className="mt-4 text-[1.02rem] leading-[1.8] text-[var(--text-secondary)]">
                Android users can try Better Muslim early by downloading the
                current preview build directly from Expo. No sign in or sign up
                is required.
              </p>
              <div className="mt-5 flex flex-wrap gap-4 max-md:flex-col">
                <a
                  href={androidPreviewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-13 items-center justify-center rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-[var(--text-inverse)] shadow-[0_16px_36px_rgba(var(--shadow-brand),0.22)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-strong)]"
                >
                  Try Android Preview
                </a>
                <Link
                  className="inline-flex min-h-13 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] transition-transform duration-200 hover:-translate-y-0.5"
                  href="#android-install-guide"
                >
                  View Install Guide
                </Link>
              </div>
            </div>

            <div
              id="android-install-guide"
              className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-strong)] p-5 shadow-[0_14px_40px_rgba(var(--shadow-strong),0.08)]"
            >
              <div className="text-[0.8rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
                Install guide
              </div>
              <ol className="mt-4 grid gap-4 text-[0.98rem] leading-[1.75] text-[var(--text-secondary)]">
                <li>Open the preview build link on your Android phone.</li>
                <li>
                  Tap download on the Expo build page. No account is required.
                </li>
                <li>
                  Download the APK from the build page and wait for the file to
                  finish downloading.
                </li>
                <li>
                  If Android blocks the install, allow installs from your
                  browser or file manager for this one step.
                </li>
                <li>
                  Open the downloaded APK, install Better Muslim, and launch the
                  app normally.
                </li>
              </ol>
              <p className="mt-4 text-sm leading-[1.7] text-[var(--text-secondary)]">
                If you already installed an older preview, uninstall it first if
                Android reports a signing conflict.
              </p>
            </div>
          </Card>
        </Reveal>
      </Section>
    </div>
  );
}
