import Link from "next/link";

const footerLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/support", label: "Support" },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-auto border-t border-[var(--border-faint)] bg-[var(--footer-bg)] backdrop-blur-sm">
      {/* Subtle top shimmer — mirrors the header accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent_10%,var(--brand-soft)_50%,transparent_90%)] opacity-50"
      />

      <div className="mx-auto w-[min(1180px,calc(100%-1.5rem))] py-10 md:w-[min(1180px,calc(100%-4rem))] md:py-12">
        {/* Top row: brand + nav */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="max-w-[22rem]">
            <p className='font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[1.35rem] font-bold leading-none text-[var(--text-primary)]'>
              Better Muslim
            </p>
            <p className="mt-2 text-[0.94rem] leading-[1.65] text-[var(--text-muted)]">
              Prayer, Quran, Hadith, and structured daily learning — calm,
              offline-first, no account required.
            </p>
          </div>

          {/* Nav links */}
          <nav
            className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:justify-end"
            aria-label="Footer"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.92rem] text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text-primary)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-[var(--border-faint)]" />

        {/* Bottom row: copyright */}
        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.84rem] text-[var(--text-muted)]">
            © {new Date().getFullYear()} Better Muslim. All rights reserved.
          </p>
          <p className="text-[0.82rem] text-[var(--text-muted)] opacity-70">
            Built with care for the Muslim community.
          </p>
        </div>
      </div>
    </footer>
  );
}
