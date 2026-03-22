import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";

type LegalPageProps = {
  title: string;
  intro: string;
  children: ReactNode;
};

export function LegalPage({ title, intro, children }: LegalPageProps) {
  return (
    <Section className="py-14 md:py-20">
      <div className="legal-shell">
        <Reveal className="section-heading left-aligned">
          <div className="eyebrow">Legal</div>
          <h1>{title}</h1>
          <p>{intro}</p>
        </Reveal>
        <Reveal className="legal-prose" delay={0.08}>
          {children}
        </Reveal>
      </div>
    </Section>
  );
}
