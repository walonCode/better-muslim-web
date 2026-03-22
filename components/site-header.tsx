import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/support", label: "Support" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="section-wrap header-inner">
        <Link className="brand-mark" href="/">
          <Image
            src="/better-muslim-logo.png"
            alt="Better Muslim logo"
            width={44}
            height={44}
          />
          <div>
            <span>Better Muslim</span>
            <small>Quran, Hadith & Learn</small>
          </div>
        </Link>

        <nav className="header-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
