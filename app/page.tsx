"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { AndroidPreviewModal } from "@/components/home/android-preview-modal";
import { CredibilitySection } from "@/components/home/credibility-section";
import { FaqSection } from "@/components/home/faq-section";
import { FeaturesSection } from "@/components/home/features-section";
import { HeroSection } from "@/components/home/hero-section";
import { androidPreviewUrl } from "@/components/home/home-data";
import { InsideAppSection } from "@/components/home/inside-app-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { SocialProofSection } from "@/components/home/social-proof-section";
import { StatusSection } from "@/components/home/status-section";

export default function Home() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [isAndroidModalOpen, setIsAndroidModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isAndroidModalOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsAndroidModalOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isAndroidModalOpen]);

  return (
    <>
      <div className="pb-24 md:pb-28">
        <HeroSection
          shouldReduceMotion={shouldReduceMotion}
          onOpenAndroidPreview={() => setIsAndroidModalOpen(true)}
        />
        <StatusSection shouldReduceMotion={shouldReduceMotion} />
        <FeaturesSection shouldReduceMotion={shouldReduceMotion} />
        <InsideAppSection />
        <SocialProofSection shouldReduceMotion={shouldReduceMotion} />
        <CredibilitySection shouldReduceMotion={shouldReduceMotion} />
        <NewsletterSection shouldReduceMotion={shouldReduceMotion} />
        <FaqSection />
      </div>

      <AndroidPreviewModal
        isMounted={isMounted}
        isOpen={isAndroidModalOpen}
        onClose={() => setIsAndroidModalOpen(false)}
        androidPreviewUrl={androidPreviewUrl}
      />
    </>
  );
}
