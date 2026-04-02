"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqItems } from "@/components/home/home-data";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

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

      <div className="mx-auto max-w-[52rem] grid gap-3">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <Reveal key={item.question} delay={index * 0.05}>
              <motion.div
                layout
                className="overflow-hidden rounded-[1.35rem] border border-[var(--border-faint)] bg-[linear-gradient(180deg,var(--surface),var(--surface-strong))] shadow-[0_8px_32px_rgba(var(--shadow-strong),0.06)] transition-shadow duration-300 hover:border-[var(--brand-soft)] hover:shadow-[0_20px_60px_rgba(var(--shadow-brand),0.1)]"
              >
                {/* Question button */}
                <button
                  type="button"
                  aria-expanded={isOpen}
                  id={`faq-btn-${index}`}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => toggle(index)}
                  className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <h3 className="text-[1.1rem] font-bold transition-colors duration-200 group-hover:text-[var(--brand-strong)]">
                    {item.question}
                  </h3>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className="shrink-0 rounded-full border border-[var(--border-faint)] bg-[var(--surface-muted)] p-1.5 text-[var(--text-muted)] transition-colors duration-200 group-hover:border-[var(--brand-soft)] group-hover:bg-[var(--brand-soft)] group-hover:text-[var(--brand-strong)]"
                  >
                    <ChevronDown size={16} strokeWidth={2.5} />
                  </motion.span>
                </button>

                {/* Animated answer panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-btn-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { type: "spring", stiffness: 280, damping: 28 },
                        opacity: { duration: 0.18 },
                      }}
                    >
                      <div className="border-t border-[var(--border-faint)] px-6 pb-5 pt-4">
                        <p className="text-[1rem] leading-[1.8] text-[var(--text-secondary)]">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
