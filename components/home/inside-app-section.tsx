"use client";

import Image from "next/image";
import { insideCards } from "@/components/home/home-data";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";

export function InsideAppSection() {
  return (
    <Section className="pt-6">
      <Reveal className="mx-auto mb-8 max-w-[44rem] text-center">
        <div className="text-[0.84rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
          Inside The App
        </div>
        <h2 className='mt-2 font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[clamp(2rem,4.8vw,3.3rem)] leading-none font-bold'>
          Designed for daily use.
        </h2>
        <p className="mt-3 text-[1.02rem] leading-[1.8] text-[var(--text-secondary)]">
          From prayer times to Quran, Hadith, and learning, the app is
          structured to help you return without friction.
        </p>
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <Reveal>
          <Card className="overflow-hidden bg-[linear-gradient(180deg,var(--surface),var(--surface-strong))] p-5 hover:-translate-y-2 hover:border-[var(--brand-soft)] hover:shadow-[0_32px_96px_rgba(var(--shadow-brand),0.16)]">
            <div className="rounded-[1.8rem] bg-[linear-gradient(135deg,var(--hero-preview-top),var(--hero-preview-bottom)),var(--surface)] p-4">
              <Image
                src="/phone_image_transparent.png"
                alt="Better Muslim app preview"
                width={896}
                height={1180}
                className="mx-auto h-auto w-[min(100%,20rem)] drop-shadow-[0_24px_48px_rgba(var(--shadow-strong),0.18)]"
              />
            </div>
          </Card>
        </Reveal>
        <div className="grid gap-4">
          {insideCards.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07}>
              <Card className="bg-[linear-gradient(180deg,var(--surface),var(--surface-strong))] p-5 hover:-translate-y-1.5 hover:border-[var(--brand-soft)] hover:shadow-[0_24px_72px_rgba(var(--shadow-brand),0.14)]">
                <p className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
                  Inside
                </p>
                <h3 className="mt-3 text-[1.25rem] font-bold">{item.title}</h3>
                <p className="mt-3 text-[1rem] leading-[1.75] text-[var(--text-secondary)]">
                  {item.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
