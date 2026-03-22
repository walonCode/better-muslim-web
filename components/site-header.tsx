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
    <header className="sticky top-0 z-20 border-b border-[rgba(18,54,37,0.12)] bg-[rgba(247,241,230,0.72)] backdrop-blur-[18px]">
      <div className="mx-auto flex w-[min(1180px,calc(100%-2rem))] flex-col items-start justify-between gap-4 py-3 md:w-[min(1180px,calc(100%-4rem))] md:flex-row md:items-center">
        <Link className="flex items-center gap-4" href="/">
          <Image
            src="/better-muslim-logo.png"
            alt="Better Muslim logo"
            width={44}
            height={44}
            className="rounded-[14px] shadow-[0_10px_30px_rgba(13,122,92,0.18)]"
          />
          <div>
            <span className='block font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[1.7rem] leading-none font-bold'>
              Better Muslim
            </span>
            <small className="mt-1 block text-[0.85rem] text-[#617064]">
              Quran, Hadith & Learn
            </small>
          </div>
        </Link>

        <nav
          className="flex w-full flex-wrap gap-x-6 gap-y-4 md:w-auto"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.95rem] text-[#617064] transition-colors hover:text-[#163328]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
