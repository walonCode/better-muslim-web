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
      <div className="support-shell">
        <Reveal className="section-heading support-heading">
          <div className="eyebrow">Support</div>
          <h1>Need help with Better Muslim?</h1>
          <p>
            Use this page for app support, content corrections, and general
            questions. It is also the public support URL for app store
            submissions.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="support-hero-card">
            <div className="support-hero-copy">
              <p className="support-kicker">Contact email</p>
              <a
                className="support-email"
                href="mailto:support@bettermuslim.app"
              >
                support@bettermuslim.app
              </a>
              <p className="support-note">
                Typical response window: 2 to 5 business days.
              </p>
            </div>
            <div className="support-hero-badge">
              <Mail size={22} strokeWidth={2.1} />
            </div>
          </Card>
        </Reveal>

        <div className="support-layout">
          <Reveal delay={0.12}>
            <Card className="support-main-card">
              <div className="eyebrow">How We Can Help</div>
              <div className="support-topic-list">
                {supportTopics.map((topic) => {
                  const Icon = topic.icon;

                  return (
                    <div key={topic.title} className="support-topic-row">
                      <div className="support-topic-icon">
                        <Icon size={20} strokeWidth={2.1} />
                      </div>
                      <div>
                        <h2>{topic.title}</h2>
                        <p>{topic.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.18}>
            <Card className="support-side-card">
              <div className="eyebrow">Before You Email</div>
              <h2>Include enough context to make support useful.</h2>
              <ul className="support-checklist">
                {checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
