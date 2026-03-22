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
      <div className="max-w-[52rem]">
        <Reveal className="mb-8 text-left">
          <div className="text-[0.84rem] font-bold uppercase tracking-[0.14em] text-[#08523e]">
            Legal
          </div>
          <h1 className='mt-2 font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[clamp(2.1rem,5vw,3.6rem)] leading-none font-bold'>
            {title}
          </h1>
          <p className="mt-3 text-[1.02rem] leading-[1.8] text-[#617064]">
            {intro}
          </p>
        </Reveal>
        <Reveal
          className="rounded-[2rem] border border-[rgba(18,54,37,0.12)] bg-[rgba(255,252,245,0.86)] p-6 shadow-[0_20px_70px_rgba(15,41,31,0.12)] backdrop-blur-[16px] max-md:rounded-[1.35rem] max-md:p-5 [&_h2]:text-[1.15rem] [&_h2]:font-bold [&_li]:ml-4 [&_p]:text-[1.02rem] [&_p]:leading-[1.8] [&_p]:text-[#617064] [&_section+section]:mt-[1.7rem] [&_section+section]:border-t [&_section+section]:border-[rgba(18,54,37,0.12)] [&_section+section]:pt-[1.7rem] [&_ul]:mt-3 [&_ul]:grid [&_ul]:gap-[0.45rem] [&_ul]:leading-[1.8] [&_ul]:text-[#617064] max-md:[&_section+section]:mt-[1.35rem] max-md:[&_section+section]:pt-[1.35rem]"
          delay={0.08}
        >
          {children}
        </Reveal>
      </div>
    </Section>
  );
}
