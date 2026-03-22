import { Bug, Mail, ScrollText } from "lucide-react";
import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Support",
};

const supportTopics = [
  {
    title: "App issues",
    description:
      "Report bugs, crashes, loading problems, or anything that behaves unexpectedly inside Better Muslim.",
    icon: Bug,
  },
  {
    title: "Content feedback",
    description:
      "Share corrections or concerns related to Quran, Hadith, or Learn content and include the exact section when possible.",
    icon: ScrollText,
  },
];

const checklist = [
  "Your device and OS version",
  "The section where the issue happened",
  "A screenshot if one helps explain it",
  "What you expected and what happened instead",
];

export default function SupportPage() {
  return (
    <Section className="py-14 md:py-20">
      <div className="grid gap-7">
        <Reveal className="mx-auto max-w-[44rem] text-center">
          <div className="text-[0.84rem] font-bold uppercase tracking-[0.14em] text-[#08523e]">
            Support
          </div>
          <h1 className='mt-2 font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[clamp(2.4rem,5vw,4.25rem)] leading-[0.98] font-bold'>
            Need help with Better Muslim?
          </h1>
          <p className="mt-3 text-[1.02rem] leading-[1.8] text-[#617064]">
            Use this page for app support, content corrections, and general
            questions. It is also the public support URL for app store
            submissions.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="grid items-center gap-6 p-6 md:grid-cols-[minmax(0,1fr)_auto]">
            <div>
              <p className="text-[0.8rem] font-bold uppercase tracking-[0.12em] text-[#08523e]">
                Contact email
              </p>
              <a
                className="mt-3 inline-block break-words text-[clamp(1.2rem,2vw,1.7rem)] font-bold"
                href="mailto:support@bettermuslim.app"
              >
                support@bettermuslim.app
              </a>
              <p className="mt-3 text-[#617064]">
                Typical response window: 2 to 5 business days.
              </p>
            </div>
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-[linear-gradient(135deg,rgba(13,122,92,0.12),rgba(184,148,62,0.14))] text-[#08523e] max-md:h-12 max-md:w-12 max-md:rounded-2xl">
              <Mail size={22} strokeWidth={2.1} />
            </div>
          </Card>
        </Reveal>

        <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
          <Reveal delay={0.12}>
            <Card className="p-6">
              <div className="text-[0.84rem] font-bold uppercase tracking-[0.14em] text-[#08523e]">
                How We Can Help
              </div>
              <div className="mt-4 grid gap-[1.1rem]">
                {supportTopics.map((topic) => {
                  const Icon = topic.icon;

                  return (
                    <div
                      key={topic.title}
                      className="grid grid-cols-[auto_1fr] items-start gap-4 border-t border-[rgba(18,54,37,0.12)] pt-[1.1rem] first:border-t-0 first:pt-0"
                    >
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(13,122,92,0.12),rgba(184,148,62,0.14))] text-[#08523e]">
                        <Icon size={20} strokeWidth={2.1} />
                      </div>
                      <div>
                        <h2 className='font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[1.65rem] leading-[1.05] font-bold'>
                          {topic.title}
                        </h2>
                        <p className="mt-2 leading-[1.8] text-[#617064]">
                          {topic.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.18}>
            <Card className="p-6">
              <div className="text-[0.84rem] font-bold uppercase tracking-[0.14em] text-[#08523e]">
                Before You Email
              </div>
              <h2 className='mt-2 font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[1.65rem] leading-[1.05] font-bold'>
                Include enough context to make support useful.
              </h2>
              <ul className="mt-4 grid gap-3 leading-[1.75] text-[#617064]">
                {checklist.map((item) => (
                  <li key={item} className="ml-4">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
