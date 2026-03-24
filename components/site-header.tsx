"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/support", label: "Support" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-[rgba(18,54,37,0.12)] bg-[rgba(247,241,230,0.72)] backdrop-blur-[18px]">
      <div className="mx-auto w-[min(1180px,calc(100%-1.5rem))] py-2.5 md:flex md:items-center md:justify-between md:gap-8 md:w-[min(1180px,calc(100%-4rem))] md:py-3">
        <div className="flex items-center justify-between gap-3 md:gap-4">
          <Link className="flex items-center gap-3 md:gap-4" href="/">
            <Image
              src="/better-muslim-logo.png"
              alt="Better Muslim logo"
              width={44}
              height={44}
              className="h-10 w-10 rounded-[12px] shadow-[0_10px_30px_rgba(13,122,92,0.18)] md:h-11 md:w-11 md:rounded-[14px]"
            />
            <div>
              <span className='block font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[1.45rem] leading-none font-bold md:text-[1.7rem]'>
                Better Muslim
              </span>
              <small className="mt-0.5 block text-[0.8rem] text-[#617064] md:mt-1 md:text-[0.85rem]">
                Prayer, Quran, Hadith & Learn
              </small>
            </div>
          </Link>

          <button
            type="button"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(18,54,37,0.14)] bg-[rgba(255,255,255,0.68)] text-[#163328] md:hidden"
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

        <nav
          className={`${
            isOpen ? "mt-3 flex" : "hidden"
          } w-full flex-col gap-1 rounded-2xl border border-[rgba(18,54,37,0.1)] bg-[rgba(255,252,245,0.66)] p-1 md:mt-0 md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:rounded-none md:border-0 md:bg-transparent md:p-0`}
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="inline-flex min-h-10 items-center justify-start rounded-xl bg-[rgba(255,255,255,0.6)] px-3 py-2 text-[0.92rem] font-medium text-[#55665b] transition-colors hover:text-[#163328] md:min-h-0 md:justify-center md:rounded-full md:bg-transparent md:px-3 md:py-2 md:text-[0.96rem] md:font-medium md:text-[#617064] md:hover:bg-[rgba(13,122,92,0.08)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
