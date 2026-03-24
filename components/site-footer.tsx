import Link from "next/link";

const footerLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/support", label: "Support" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[rgba(18,54,37,0.12)] bg-[rgba(255,250,241,0.62)]">
      <div className="mx-auto flex w-[min(1180px,calc(100%-1.5rem))] flex-col gap-3 py-3 md:w-[min(1180px,calc(100%-4rem))] md:flex-row md:items-start md:justify-between md:gap-4 md:py-2">
        <div className="text-center md:text-left">
          <p className='block font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[1.45rem] leading-none font-bold md:text-[1.7rem]'>
            Better Muslim
          </p>
          <p className="mx-auto mt-1 max-w-[32rem] leading-[1.55] text-[#617064] md:mx-0">
            A calm Muslim companion for prayer, Quran, Hadith, and structured
            daily learning.
          </p>
        </div>
        <nav
          className="grid w-full grid-cols-3 justify-center gap-2 md:flex md:w-full md:flex-wrap md:justify-center md:gap-x-6 md:gap-y-4"
          aria-label="Footer"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-9 items-center justify-center rounded-xl border border-[rgba(18,54,37,0.1)] bg-[rgba(255,255,255,0.56)] px-2 py-2 text-[0.87rem] font-medium text-[#55665b] transition-colors hover:text-[#163328] md:min-h-0 md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0 md:text-[0.95rem] md:font-normal md:text-[#617064]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
