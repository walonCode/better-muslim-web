import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Better Muslim",
};

function GooglePlayIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.5 2.5L13.8 12 3.5 21.5" fill="#34A853" />
      <path
        d="M13.8 12 17.2 8.9 21 11.05c.8.45.8 1.45 0 1.9L17.2 15.1 13.8 12Z"
        fill="#FBBC04"
      />
      <path d="M3.5 2.5 17.2 8.9 13.8 12 3.5 2.5Z" fill="#4285F4" />
      <path d="M3.5 21.5 13.8 12 17.2 15.1 3.5 21.5Z" fill="#EA4335" />
    </svg>
  );
}

function AppStoreIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.84 12.07c.03 2.63 2.3 3.51 2.33 3.52-.02.06-.36 1.24-1.18 2.45-.71 1.05-1.45 2.09-2.61 2.11-1.14.02-1.5-.68-2.79-.68s-1.69.66-2.77.7c-1.12.04-1.98-1.12-2.7-2.16-1.47-2.13-2.6-6.03-1.09-8.65.75-1.3 2.09-2.12 3.55-2.14 1.11-.02 2.16.75 2.79.75.62 0 1.8-.93 3.03-.79.52.02 1.98.21 2.92 1.58-.07.04-1.74 1.01-1.72 3.31ZM15.65 4.55c.59-.71 1-1.7.89-2.68-.85.03-1.88.57-2.49 1.28-.55.63-1.03 1.64-.9 2.6.95.07 1.91-.48 2.5-1.2Z" />
    </svg>
  );
}

const featureCards = [
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
  "Offline-first Quran, Hadith, and Learn access where possible",
  "Local bookmarks, favorites, reading progress, and display settings",
  "Light, dark, and system themes with reading controls built in",
];

const storeButtons = [
  {
    label: "Google Play",
    className: "store-button store-button-primary",
    icon: GooglePlayIcon,
  },
  {
    label: "App Store",
    className: "store-button",
    icon: AppStoreIcon,
  },
];

export default function Home() {
  return (
    <div className="pb-20">
      <Section className="pt-12 md:pt-20">
        <div className="grid min-h-[min(54rem,calc(100vh-6rem))] items-center gap-10 max-md:min-h-0 max-md:gap-9 md:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
          <Reveal className="space-y-8">
            <div className="text-[0.84rem] font-bold uppercase tracking-[0.14em] text-[#08523e]">
              Better Muslim
            </div>
            <div className="space-y-5">
              <h1 className='max-w-[11ch] font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[clamp(3.2rem,8vw,6rem)] leading-[0.95] font-bold max-md:max-w-none'>
                A calmer way to read Quran, study Hadith, and keep learning
                every day.
              </h1>
              <p className="text-[1.02rem] leading-[1.8] text-[#617064]">
                Better Muslim is a mobile app built for respectful daily use. It
                brings Quran reading, Hadith browsing, and guided Islamic
                learning into one focused experience with offline-first behavior
                and thoughtful reading settings.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-[auto_auto] md:items-center md:justify-start">
              <div className="flex flex-wrap gap-4 max-md:flex-col">
                {storeButtons.map((button) => (
                  <Button
                    key={button.label}
                    href="/"
                    aria-disabled="true"
                    variant={
                      button.className.includes("primary")
                        ? "storePrimary"
                        : "store"
                    }
                  >
                    <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(255,255,255,0.16)] text-current"
                      aria-hidden="true"
                    >
                      <button.icon />
                    </span>
                    <span>
                      {/*<small>Download on</small>*/}
                      <strong>{button.label}</strong>
                    </span>
                  </Button>
                ))}
              </div>
              <Link
                className="inline-flex min-h-13 w-full items-center justify-center rounded-full border border-[rgba(18,54,37,0.12)] bg-[rgba(255,250,241,0.72)] px-5 py-3 text-sm font-medium text-[#163328] transition-transform duration-200 hover:-translate-y-0.5 md:w-auto"
                href="#features"
              >
                Explore Features
              </Link>
            </div>
            <div className="grid gap-4">
              {highlights.map((item) => (
                <p
                  key={item}
                  className="border-l-2 border-[rgba(184,148,62,0.4)] pl-4 text-[#617064]"
                >
                  {item}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative isolate" delay={0.08}>
            <div className="relative px-2 py-6 max-md:px-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7),transparent_62%)]" />
              <div className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(22,51,40,0.12)] max-md:h-[16rem] max-md:w-[16rem]" />
              <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(22,51,40,0.08)] max-md:h-[21rem] max-md:w-[21rem]" />
              <div className="absolute left-1/2 top-1/2 h-[31rem] w-[31rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(22,51,40,0.05)] max-md:h-[25rem] max-md:w-[25rem]" />
              <div className="absolute left-[6%] top-[18%] h-32 w-32 rounded-full border-[5px] border-[rgba(13,122,92,0.18)] bg-[rgba(220,239,230,0.28)] max-md:hidden" />
              <div className="absolute bottom-[18%] right-[6%] h-48 w-48 rounded-full border-[5px] border-[rgba(184,148,62,0.24)] max-md:hidden" />
              <div className="relative grid min-h-[38rem] items-center justify-items-center max-md:min-h-[28rem]">
                <div className="absolute left-[8%] top-[10%] z-20 hidden rounded-[1.25rem] border border-[rgba(18,54,37,0.08)] bg-white px-5 py-3 shadow-[0_16px_32px_rgba(15,41,31,0.08)] lg:block xl:left-[6%]">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[#9aa39c]">
                    Continue reading
                  </p>
                  <p className="mt-1 text-[1.05rem] font-semibold text-[#163328]">
                    Al-Baqara
                  </p>
                </div>
                <div className="absolute right-[10%] top-[7%] z-20 hidden rounded-[1.25rem] border border-[rgba(18,54,37,0.08)] bg-white px-5 py-3 shadow-[0_16px_32px_rgba(15,41,31,0.08)] lg:block xl:right-[8%]">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[#9aa39c]">
                    Saved on device
                  </p>
                  <p className="mt-1 text-[1.05rem] font-semibold text-[#163328]">
                    Offline-first
                  </p>
                </div>
                <div className="absolute left-[6%] bottom-[14%] z-20 hidden rounded-[1.25rem] border border-[rgba(18,54,37,0.08)] bg-white px-5 py-3 shadow-[0_16px_32px_rgba(15,41,31,0.08)] lg:block xl:left-[4%]">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[#9aa39c]">
                    Learning hub
                  </p>
                  <p className="mt-1 text-[1.05rem] font-semibold text-[#163328]">
                    Quran, Hadith, Learn
                  </p>
                </div>
                <div className="absolute bottom-[24%] right-[6%] z-20 hidden rounded-[1.25rem] border border-[rgba(18,54,37,0.08)] bg-white px-5 py-3 shadow-[0_16px_32px_rgba(15,41,31,0.08)] lg:block xl:right-[4%]">
                  <p className="text-[0.95rem] font-medium text-[#163328]">
                    Offline-first reading
                  </p>
                </div>
                <div className="absolute right-[18%] bottom-[3%] z-20 hidden rounded-[1.25rem] border border-[rgba(18,54,37,0.08)] bg-white px-5 py-3 shadow-[0_16px_32px_rgba(15,41,31,0.08)] lg:block xl:right-[16%]">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[#9aa39c]">
                    Reading controls
                  </p>
                  <p className="mt-1 text-[1.05rem] font-semibold text-[#163328]">
                    Theme and font size
                  </p>
                </div>
                <div className="relative grid place-items-center">
                  <Image
                    src="/app_image_cutout.png"
                    alt="Better Muslim app hero image shown on an Android phone"
                    width={1000}
                    height={1400}
                    priority
                    className="relative z-10 h-auto w-[min(100%,39rem)] drop-shadow-[0_34px_60px_rgba(15,41,31,0.2)] max-md:w-[min(100%,24rem)]"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="features" className="pt-8">
        <Reveal className="mx-auto mb-10 max-w-[46rem] text-center max-md:mb-6">
          <div className="text-[0.84rem] font-bold uppercase tracking-[0.14em] text-[#08523e]">
            Why it stands out
          </div>
          <h2 className='mt-2 font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[clamp(2.1rem,5vw,3.6rem)] leading-none font-bold'>
            Built around consistent daily use, not a cluttered feature dump.
          </h2>
          <p className="mt-3 text-[1.02rem] leading-[1.8] text-[#617064]">
            The app already supports the core habits people come back for:
            reading, saving progress, revisiting material, and learning in a
            calmer interface.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {featureCards.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.08}>
              <Card className="min-h-[15rem] p-6 max-md:rounded-[1.35rem] max-md:p-5">
                <h3 className="mb-3 text-[1.15rem] font-bold">
                  {feature.title}
                </h3>
                <p className="text-[1.02rem] leading-[1.8] text-[#617064]">
                  {feature.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-6">
        <div className="grid gap-8 md:grid-cols-2 max-md:gap-5">
          <Reveal>
            <Card className="p-6 max-md:rounded-[1.35rem] max-md:p-5">
              <div className="text-[0.84rem] font-bold uppercase tracking-[0.14em] text-[#08523e]">
                Reading experience
              </div>
              <h2 className='mb-3 mt-2 font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[clamp(2.1rem,5vw,3.6rem)] leading-none font-bold'>
                Personalized without turning into noise.
              </h2>
              <p className="text-[1.02rem] leading-[1.8] text-[#617064]">
                Better Muslim keeps the experience adaptable with theme
                controls, Arabic and English font sizing, and translation or
                transliteration visibility settings.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="bg-[linear-gradient(135deg,rgba(13,122,92,0.08),rgba(184,148,62,0.08)),rgba(255,252,245,0.86)] p-6 max-md:rounded-[1.35rem] max-md:p-5">
              <div className="text-[0.84rem] font-bold uppercase tracking-[0.14em] text-[#08523e]">
                Real product depth
              </div>
              <ul className="mt-4 grid gap-4 text-[#617064]">
                <li>Ayah bookmarks and sharing</li>
                <li>Hadith bookmarks, search, and continue reading</li>
                <li>
                  Learn modules for Salah, Duas, etiquette, Arabic, and basics
                </li>
                <li>Local storage for progress, favorites, and settings</li>
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
