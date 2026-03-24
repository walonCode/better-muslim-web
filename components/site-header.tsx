"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/support", label: "Support" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.header
      initial={shouldReduceMotion ? false : { opacity: 0, y: -18 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-20 border-b border-[var(--border)] bg-[var(--header-bg)] backdrop-blur-[18px]"
    >
      <div className="mx-auto w-[min(1180px,calc(100%-1.5rem))] py-2.5 md:flex md:items-center md:justify-between md:gap-8 md:w-[min(1180px,calc(100%-4rem))] md:py-3">
        <div className="flex items-center justify-between gap-3 md:gap-4">
          <Link
            className="flex items-center gap-3 rounded-[1.25rem] px-1 py-1 transition-transform duration-200 hover:-translate-y-0.5 md:gap-4"
            href="/"
          >
            <Image
              src="/better-muslim-logo.png"
              alt="Better Muslim logo"
              width={44}
              height={44}
              className="h-10 w-10 rounded-[12px] border border-[var(--border-faint)] bg-[var(--surface-strong)] shadow-[0_10px_30px_rgba(var(--shadow-brand),0.18)] md:h-11 md:w-11 md:rounded-[14px]"
            />
            <div>
              <span className='block font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[1.45rem] leading-none font-bold md:text-[1.7rem]'>
                Better Muslim
              </span>
              <small className="mt-0.5 block text-[0.8rem] text-[var(--text-secondary)] md:mt-1 md:text-[0.85rem]">
                Prayer, Quran, Hadith & Learn
              </small>
            </div>
          </Link>
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--text-primary)] shadow-[0_10px_24px_rgba(var(--shadow-strong),0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--surface-soft)]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {isOpen ? (
                  <path d="M6 6L18 18M18 6L6 18" />
                ) : (
                  <path d="M4 7H20M4 12H20M4 17H20" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div className="md:flex md:items-center md:gap-3">
          <nav
            className={`${
              isOpen ? "mt-3 flex" : "hidden"
            } w-full flex-col gap-1 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-1 md:mt-0 md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:rounded-none md:border-0 md:bg-transparent md:p-0`}
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="inline-flex min-h-10 items-center justify-start rounded-xl bg-[var(--surface-muted)] px-3 py-2 text-[0.92rem] font-medium text-[var(--text-muted)] transition-all duration-200 hover:text-[var(--text-primary)] md:min-h-0 md:justify-center md:rounded-full md:bg-transparent md:px-3 md:py-2 md:text-[0.96rem] md:text-[var(--text-secondary)] md:hover:-translate-y-0.5 md:hover:bg-[var(--brand-soft)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="max-md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
