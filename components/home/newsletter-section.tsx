"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

export function NewsletterSection({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean;
}) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);
    setEmail("");
  };

  return (
    <Section className="pt-12 md:pt-14">
      <Reveal className="mx-auto max-w-[46rem] text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--brand-soft)] text-[var(--brand-strong)]">
            <Mail size={32} />
          </div>
        </div>
        <h2 className='font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[clamp(2.1rem,5vw,3.6rem)] leading-none font-bold'>
          Stay Updated
        </h2>
        <p className="mt-3 text-[1.02rem] leading-[1.8] text-[var(--text-secondary)]">
          Get notified when the iPhone version launches and receive updates
          about new features.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex-1 max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--brand-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-soft)]"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            className="whitespace-nowrap px-6 py-3"
          >
            {isSubmitted
              ? "Subscribed!"
              : isSubmitting
                ? "Subscribing..."
                : "Subscribe"}
          </Button>
        </motion.form>

        {isSubmitted && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-[var(--success-text)]"
          >
            Thanks for subscribing! We'll keep you updated.
          </motion.p>
        )}
      </Reveal>
    </Section>
  );
}
