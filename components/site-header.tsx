"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  return (
    <motion.header
      initial={shouldReduceMotion ? false : { opacity: 0, y: -24 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="sticky top-0 z-20 border-b border-[var(--border)] bg-[var(--header-bg)] backdrop-blur-[22px]"
    >
      {/* Top shimmer line — subtle premium touch */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent_10%,var(--brand-soft)_50%,transparent_90%)] opacity-60"
      />

      <div className="mx-auto w-[min(1180px,calc(100%-1.5rem))] py-2.5 md:flex md:items-center md:justify-between md:gap-8 md:w-[min(1180px,calc(100%-4rem))] md:py-3">
        <div className="flex items-center justify-between gap-3 md:gap-4">
          <Link
            className="flex items-center gap-3 rounded-[1.25rem] px-1 py-1 transition-transform duration-200 hover:-translate-y-0.5 md:gap-4"
            href="/"
          >
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.06, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <Image
                src="/better-muslim-logo.png"
                alt="Better Muslim logo"
                width={44}
                height={44}
                className="h-10 w-10 rounded-[12px] border border-[var(--border-faint)] bg-[var(--surface-strong)] shadow-[0_10px_30px_rgba(var(--shadow-brand),0.18)] md:h-11 md:w-11 md:rounded-[14px]"
              />
            </motion.div>
            <div>
              <span className='block font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[1.45rem] leading-none font-bold md:text-[1.7rem]'>
                Better Muslim
              </span>
              <small className="mt-0.5 block text-[0.8rem] text-[var(--text-secondary)] md:mt-1 md:text-[0.85rem]">
                Prayer, Quran, Hadith &amp; Learn
              </small>
            </div>
          </Link>
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <motion.button
              type="button"
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.93 }}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--text-primary)] shadow-[0_10px_24px_rgba(var(--shadow-strong),0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--surface-soft)]"
            >
              <motion.svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                animate={isOpen ? "open" : "closed"}
              >
                {isOpen ? (
                  <motion.path
                    d="M6 6L18 18M18 6L6 18"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.22 }}
                  />
                ) : (
                  <motion.path
                    d="M4 7H20M4 12H20M4 17H20"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.22 }}
                  />
                )}
              </motion.svg>
            </motion.button>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="md:flex md:items-center md:gap-3">
          <nav
            className="hidden md:flex md:items-center md:gap-1"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative inline-flex min-h-9 items-center justify-center rounded-full px-3.5 py-2 text-[0.95rem] font-medium transition-colors duration-200 hover:text-[var(--text-primary)]"
                  style={{
                    color: isActive
                      ? "var(--text-primary)"
                      : "var(--text-secondary)",
                  }}
                >
                  {/* Active pill indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-[var(--brand-soft)]"
                      transition={{
                        type: "spring",
                        stiffness: 340,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>
          <div className="max-md:hidden">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile nav — AnimatePresence for smooth slide-in */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              key="mobile-nav"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.97 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              aria-label="Primary mobile"
              className="mt-3 flex w-full flex-col gap-1 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-1 md:hidden"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: -10 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="inline-flex min-h-10 w-full items-center justify-start rounded-xl bg-[var(--surface-muted)] px-3 py-2 text-[0.92rem] font-medium text-[var(--text-muted)] transition-all duration-200 hover:text-[var(--text-primary)]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
