import type { ReactNode } from "react";
import { Float } from "@/components/motion/float";
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
      <div className="relative max-w-[52rem]">
        <Float
          className="absolute -right-8 top-2 hidden h-28 w-28 rounded-[2rem] border border-[var(--accent-soft)] bg-[linear-gradient(135deg,var(--brand-soft),var(--accent-soft))] opacity-80 md:block"
          delay={0.2}
          duration={10}
          rotate={4}
          x={10}
          y={12}
        >
          <div className="h-full w-full rounded-[2rem] backdrop-blur-[2px]" />
        </Float>
        <Float
          className="absolute right-10 top-16 hidden h-12 w-12 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] md:block"
          delay={0.7}
          duration={8}
          x={6}
          y={9}
        >
          <div className="h-full w-full rounded-full" />
        </Float>
        <Reveal className="mb-8 text-left">
          <div className="mb-5 h-px w-20 bg-[linear-gradient(90deg,var(--brand),transparent)]" />
          <div className="text-[0.84rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
            Legal
          </div>
          <h1 className='mt-2 font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[clamp(2.1rem,5vw,3.6rem)] leading-none font-bold'>
            {title}
          </h1>
          <p className="mt-3 text-[1.02rem] leading-[1.8] text-[var(--text-secondary)]">
            {intro}
          </p>
        </Reveal>
        <Reveal
          className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,var(--surface),var(--surface-strong))] p-6 shadow-[0_20px_70px_rgba(var(--shadow-strong),0.12)] backdrop-blur-[16px] max-md:rounded-[1.35rem] max-md:p-5 [&_h2]:text-[1.15rem] [&_h2]:font-bold [&_li]:ml-4 [&_p]:text-[1.02rem] [&_p]:leading-[1.8] [&_p]:text-[var(--text-secondary)] [&_section+section]:mt-[1.7rem] [&_section+section]:border-t [&_section+section]:border-[var(--border)] [&_section+section]:pt-[1.7rem] [&_ul]:mt-3 [&_ul]:grid [&_ul]:gap-[0.45rem] [&_ul]:leading-[1.8] [&_ul]:text-[var(--text-secondary)] max-md:[&_section+section]:mt-[1.35rem] max-md:[&_section+section]:pt-[1.35rem]"
          delay={0.08}
        >
          {children}
        </Reveal>
      </div>
    </Section>
  );
}
