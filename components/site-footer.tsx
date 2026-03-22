import Link from "next/link";

const footerLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/support", label: "Support" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[rgba(18,54,37,0.12)] bg-[rgba(255,250,241,0.62)]">
      <div className="mx-auto flex w-[min(1180px,calc(100%-2rem))] flex-col gap-3 py-2 md:w-[min(1180px,calc(100%-4rem))] md:flex-row md:items-start md:justify-between">
        <div>
          <p className='block font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[1.7rem] leading-none font-bold'>
            Better Muslim
          </p>
          <p className="mt-1 max-w-[32rem] leading-[1.55] text-[#617064]">
            Quran, Hadith, and structured Islamic learning in one calm mobile
            experience.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-4" aria-label="Footer">
          {footerLinks.map((link) => (
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
    </footer>
  );
}
