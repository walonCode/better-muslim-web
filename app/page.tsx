import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Daily Islamic Companion",
};

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
    sublabel: "Android launch link",
    className: "store-button store-button-primary",
  },
  {
    label: "App Store",
    sublabel: "iPhone launch link",
    className: "store-button",
  },
];

export default function Home() {
  return (
    <div className="pb-20">
      <Section className="pt-12 md:pt-20">
        <div className="grid min-h-[min(54rem,calc(100vh-6rem))] items-center gap-12 max-md:min-h-0 max-md:gap-9 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
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
                    <span className="store-button-mark" aria-hidden="true" />
                    <span>
                      <small>{button.sublabel}</small>
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
            <div className="relative px-5 pb-10 max-md:px-1">
              <div className="absolute inset-[12%_8%] bg-[radial-gradient(circle,rgba(13,122,92,0.22),transparent_58%)] blur-[48px]" />
              <div className="relative grid items-center justify-items-center">
                <div className="relative grid place-items-center">
                  <Image
                    src="/android-phone-hero.png"
                    alt="Better Muslim app shown inside an Android phone mockup"
                    width={1400}
                    height={1400}
                    priority
                    className="relative z-10 h-auto w-[min(100%,35rem)] drop-shadow-[0_30px_72px_rgba(15,41,31,0.22)] max-md:w-[min(100%,24rem)]"
                  />
                </div>
                <Card className="relative z-10 -mt-16 ml-auto mr-0 w-[min(18rem,82%)] rounded-[1.8rem] border-[rgba(18,54,37,0.12)] bg-[rgba(255,252,245,0.82)] p-4 backdrop-blur-[18px] max-md:-mt-6 max-md:w-[min(18rem,96%)] max-md:p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.9rem] text-[#617064]">
                        Now reading
                      </p>
                      <h2 className='font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[1.8rem] font-bold'>
                        Al-Baqara
                      </h2>
                    </div>
                    <div className="rounded-full bg-[#dcefe6] px-3 py-2 text-[0.85rem] font-bold text-[#08523e]">
                      Ad-free
                    </div>
                  </div>
                  <div className="mt-4 grid gap-4">
                    <div className="rounded-[1.2rem] bg-[rgba(255,255,255,0.46)] p-4">
                      <strong className="block text-base">Quran</strong>
                      <span className="text-[0.94rem] text-[#617064]">
                        Read by surah or juz
                      </span>
                    </div>
                    <div className="rounded-[1.2rem] bg-[rgba(255,255,255,0.46)] p-4">
                      <strong className="block text-base">Hadith</strong>
                      <span className="text-[0.94rem] text-[#617064]">
                        Browse, search, and save
                      </span>
                    </div>
                    <div className="rounded-[1.2rem] bg-[rgba(255,255,255,0.46)] p-4">
                      <strong className="block text-base">Learn</strong>
                      <span className="text-[0.94rem] text-[#617064]">
                        Salah, Duas, Sunnah, and more
                      </span>
                    </div>
                  </div>
                </Card>
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
