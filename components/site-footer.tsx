import { Github, Twitter } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/support", label: "Support" },
];

const socialLinks = [
  { href: "https://twitter.com/bettermuslim", label: "Twitter", icon: Twitter },
  { href: "https://github.com/bettermuslim", label: "GitHub", icon: Github },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--footer-bg)]">
      <div className="mx-auto w-[min(1180px,calc(100%-1.5rem))] py-8 md:w-[min(1180px,calc(100%-4rem))] md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className='block font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[1.45rem] leading-none font-bold md:text-[1.7rem]'>
              Better Muslim
            </p>
            <p className="mt-2 leading-[1.55] text-[var(--text-secondary)]">
              A calm Muslim companion for prayer, Quran, Hadith, and structured
              daily learning.
            </p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-muted)] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)] hover:bg-[var(--surface-strong)]"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <nav
              className="grid grid-cols-2 gap-4 md:flex md:justify-end md:gap-x-8 md:gap-y-4"
              aria-label="Footer"
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 border-t border-[var(--border-faint)] pt-6 md:mt-8 md:pt-8">
              <p className="text-sm text-[var(--text-muted)]">
                © 2024 Better Muslim. Built with care for the Muslim community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
