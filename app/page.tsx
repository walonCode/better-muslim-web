import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Float } from "@/components/motion/float";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { StoreCta } from "@/components/store-cta";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Better Muslim",
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

const trustItems = ["No account required", "Offline-first", "Ad-free"];

export default function Home() {
  return (
    <div className="pb-20">
      <Section className="pt-8 md:pt-10">
        <Reveal className="mb-7 flex justify-center md:mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {trustItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[rgba(18,54,37,0.14)] bg-[rgba(255,255,255,0.62)] px-3 py-1 text-[0.74rem] font-semibold text-[#4e5d52]"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid min-h-[min(54rem,calc(100vh-6rem))] items-center gap-10 max-md:min-h-0 max-md:gap-9 md:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
          <Reveal className="space-y-8">
            <div className="text-[0.84rem] font-bold uppercase tracking-[0.14em] text-[#08523e]">
              Better Muslim
            </div>
            <div className="space-y-5">
              <h1 className='max-w-[11ch] font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[clamp(3.2rem,8vw,6rem)] leading-[0.95] font-bold max-md:max-w-none'>
                Quran, Hadith, and learning in one calm daily app.
              </h1>
              <p className="text-[1.02rem] leading-[1.8] text-[#617064]">
                Better Muslim keeps your core Islamic reading and study flow in
                one place with offline-first access and thoughtful reading
                controls.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-[auto_auto] md:items-center md:justify-start">
              <StoreCta />
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

          <Reveal className="relative isolate overflow-x-clip" delay={0.08}>
            <div className="relative px-2 py-6 max-md:px-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7),transparent_62%)]" />
              <Float
                className="absolute left-1/2 top-1/2 h-[28rem] w-[22rem] -translate-x-1/2 -translate-y-[52%] rounded-[4rem] bg-[linear-gradient(180deg,rgba(255,251,244,0.94),rgba(234,244,238,0.84))] shadow-[0_40px_90px_rgba(15,41,31,0.08)] lg:w-[20rem] xl:w-[22rem] max-md:h-[22rem] max-md:w-[17rem]"
                delay={0.15}
                duration={9}
                x={8}
                y={12}
              >
                <div className="h-full w-full" />
              </Float>
              <Float
                className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-[82%] -translate-y-[62%] rotate-[-16deg] rounded-[4.5rem] border border-[rgba(18,54,37,0.08)] bg-[linear-gradient(135deg,rgba(220,239,230,0.42),rgba(255,255,255,0.12))] lg:h-[22rem] lg:w-[18rem] xl:h-[24rem] xl:w-[20rem] max-md:h-[18rem] max-md:w-[18rem]"
                delay={0.5}
                duration={10}
                rotate={3}
                x={10}
                y={14}
              >
                <div className="h-full w-full" />
              </Float>
              <Float
                className="absolute left-1/2 top-1/2 h-[17rem] w-[28rem] -translate-x-[8%] -translate-y-[14%] rotate-[14deg] rounded-[3rem] border border-[rgba(184,148,62,0.16)] bg-[linear-gradient(135deg,rgba(255,245,221,0.7),rgba(255,255,255,0.1))] lg:h-[15rem] lg:w-[22rem] xl:h-[17rem] xl:w-[25rem] max-md:h-[12rem] max-md:w-[20rem]"
                delay={0.8}
                duration={11}
                rotate={-2}
                x={-10}
                y={10}
              >
                <div className="h-full w-full" />
              </Float>
              <Float
                className="absolute left-[5%] top-[14%] h-28 w-36 rotate-[-12deg] rounded-[2rem] border border-[rgba(13,122,92,0.16)] bg-[rgba(220,239,230,0.34)] max-md:hidden"
                delay={0.3}
                duration={8}
                rotate={4}
                x={6}
                y={8}
              >
                <div className="h-full w-full" />
              </Float>
              <Float
                className="absolute bottom-[16%] right-[6%] h-24 w-44 rotate-[18deg] rounded-[2.2rem] border border-[rgba(184,148,62,0.2)] bg-[rgba(255,248,230,0.52)] max-md:hidden"
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
                  <div className="rounded-[1.25rem] border border-[rgba(18,54,37,0.08)] bg-white px-5 py-3 shadow-[0_16px_32px_rgba(15,41,31,0.08)]">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[#9aa39c]">
                      Continue reading
                    </p>
                    <p className="mt-1 text-[1.05rem] font-semibold text-[#163328]">
                      Al-Baqara
                    </p>
                  </div>
                </Float>
                <Float
                  className="absolute right-[10%] top-[7%] z-20 hidden lg:block xl:right-[8%] max-[1400px]:pointer-events-none max-[1400px]:scale-95 max-[1400px]:opacity-0"
                  delay={0.7}
                  y={12}
                >
                  <div className="rounded-[1.25rem] border border-[rgba(18,54,37,0.08)] bg-white px-5 py-3 shadow-[0_16px_32px_rgba(15,41,31,0.08)]">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[#9aa39c]">
                      Saved on device
                    </p>
                    <p className="mt-1 text-[1.05rem] font-semibold text-[#163328]">
                      Offline-first
                    </p>
                  </div>
                </Float>
                <Float
                  className="absolute left-[6%] bottom-[14%] z-20 hidden lg:block xl:left-[4%] max-[1400px]:pointer-events-none max-[1400px]:scale-95 max-[1400px]:opacity-0"
                  delay={1.1}
                  y={9}
                >
                  <div className="rounded-[1.25rem] border border-[rgba(18,54,37,0.08)] bg-white px-5 py-3 shadow-[0_16px_32px_rgba(15,41,31,0.08)]">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[#9aa39c]">
                      Learning hub
                    </p>
                    <p className="mt-1 text-[1.05rem] font-semibold text-[#163328]">
                      Quran, Hadith, Learn
                    </p>
                  </div>
                </Float>
                <Float
                  className="absolute bottom-[24%] right-[6%] z-20 hidden lg:block xl:right-[4%] max-[1400px]:pointer-events-none max-[1400px]:scale-95 max-[1400px]:opacity-0"
                  delay={1.4}
                  y={11}
                >
                  <div className="rounded-[1.25rem] border border-[rgba(18,54,37,0.08)] bg-white px-5 py-3 shadow-[0_16px_32px_rgba(15,41,31,0.08)]">
                    <p className="text-[0.95rem] font-medium text-[#163328]">
                      Offline-first reading
                    </p>
                  </div>
                </Float>
                <Float
                  className="absolute right-[18%] bottom-[3%] z-20 hidden lg:block xl:right-[16%] max-[1400px]:pointer-events-none max-[1400px]:scale-95 max-[1400px]:opacity-0"
                  delay={1.8}
                  y={10}
                >
                  <div className="rounded-[1.25rem] border border-[rgba(18,54,37,0.08)] bg-white px-5 py-3 shadow-[0_16px_32px_rgba(15,41,31,0.08)]">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[#9aa39c]">
                      Reading controls
                    </p>
                    <p className="mt-1 text-[1.05rem] font-semibold text-[#163328]">
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
                  <Image
                    src="/phone_image_transparent.png"
                    alt="Better Muslim app hero image shown on an Android phone"
                    width={1000}
                    height={1200}
                    sizes="(max-width: 768px) 80vw, (max-width: 1280px) 40vw, 35rem"
                    priority
                    className="relative z-10 h-auto w-[min(100%,35rem)] drop-shadow-[0_34px_60px_rgba(15,41,31,0.2)] max-md:w-[min(100%,22rem)]"
                  />
                </Float>
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
              <Card className="min-h-[15rem] p-6 transition-transform duration-300 hover:-translate-y-1.5 max-md:rounded-[1.35rem] max-md:p-5">
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
            <Card className="p-6 transition-transform duration-300 hover:-translate-y-1.5 max-md:rounded-[1.35rem] max-md:p-5">
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
            <Card className="bg-[linear-gradient(135deg,rgba(13,122,92,0.08),rgba(184,148,62,0.08)),rgba(255,252,245,0.86)] p-6 transition-transform duration-300 hover:-translate-y-1.5 max-md:rounded-[1.35rem] max-md:p-5">
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
