"use client";

import { faqItems } from "@/components/home/home-data";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";

export function FaqSection() {
  return (
    <Section className="pt-12 md:pt-14">
      <Reveal className="mx-auto mb-8 max-w-[44rem] text-center">
        <div className="text-[0.84rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
          FAQ
        </div>
        <h2 className='mt-2 font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[clamp(2rem,4.8vw,3.3rem)] leading-none font-bold'>
          Questions worth answering before install.
        </h2>
        <p className="mt-3 text-[1rem] leading-[1.8] text-[var(--text-secondary)]">
          The basics are straightforward: what is live, what works offline, and
          what to expect from the preview stage.
        </p>
      </Reveal>
      <div className="grid gap-4">
        {faqItems.map((item, index) => (
          <Reveal key={item.question} delay={index * 0.05}>
            <Card className="bg-[linear-gradient(180deg,var(--surface),var(--surface-strong))] p-6 hover:-translate-y-1.5 hover:border-[var(--brand-soft)] hover:shadow-[0_24px_72px_rgba(var(--shadow-brand),0.12)]">
              <h3 className="text-[1.1rem] font-bold">{item.question}</h3>
              <p className="mt-3 text-[1rem] leading-[1.8] text-[var(--text-secondary)]">
                {item.answer}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
