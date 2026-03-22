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
        <div className="hero-grid">
          <Reveal className="space-y-8">
            <div className="eyebrow">Better Muslim</div>
            <div className="space-y-5">
              <h1 className="hero-title">
                A calmer way to read Quran, study Hadith, and keep learning
                every day.
              </h1>
              <p className="hero-copy">
                Better Muslim is a mobile app built for respectful daily use. It
                brings Quran reading, Hadith browsing, and guided Islamic
                learning into one focused experience with offline-first behavior
                and thoughtful reading settings.
              </p>
            </div>
            <div className="hero-actions">
              <div className="store-button-row">
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
              <Link className="secondary-button" href="#features">
                Explore Features
              </Link>
            </div>
            <div className="hero-points">
              {highlights.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </Reveal>

          <Reveal className="hero-visual" delay={0.08}>
            <div className="device-frame">
              <div className="device-glow" />
              <div className="phone-stack">
                <div className="phone-showcase">
                  <Image
                    src="/android-phone-hero.png"
                    alt="Better Muslim app shown inside an Android phone mockup"
                    width={1400}
                    height={1400}
                    priority
                    className="showcase-image"
                  />
                </div>
                <Card className="hero-side-panel">
                  <div className="device-card-top">
                    <div>
                      <p className="device-label">Now reading</p>
                      <h2>Al-Baqara</h2>
                    </div>
                    <div className="device-pill">Ad-free</div>
                  </div>
                  <div className="device-stats">
                    <div>
                      <strong>Quran</strong>
                      <span>Read by surah or juz</span>
                    </div>
                    <div>
                      <strong>Hadith</strong>
                      <span>Browse, search, and save</span>
                    </div>
                    <div>
                      <strong>Learn</strong>
                      <span>Salah, Duas, Sunnah, and more</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="features" className="pt-8">
        <Reveal className="section-heading">
          <div className="eyebrow">Why it stands out</div>
          <h2>
            Built around consistent daily use, not a cluttered feature dump.
          </h2>
          <p>
            The app already supports the core habits people come back for:
            reading, saving progress, revisiting material, and learning in a
            calmer interface.
          </p>
        </Reveal>
        <div className="feature-grid">
          {featureCards.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.08}>
              <Card className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-6">
        <div className="story-grid">
          <Reveal>
            <Card className="story-card">
              <div className="eyebrow">Reading experience</div>
              <h2>Personalized without turning into noise.</h2>
              <p>
                Better Muslim keeps the experience adaptable with theme
                controls, Arabic and English font sizing, and translation or
                transliteration visibility settings.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="story-card accent-card">
              <div className="eyebrow">Real product depth</div>
              <ul className="story-list">
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
