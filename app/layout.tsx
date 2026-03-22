import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: {
    default: "Better Muslim | Quran, Hadith & Islamic Learning",
    template: "%s | Better Muslim",
  },
  description:
    "Better Muslim brings Quran reading, Hadith study, and structured Islamic learning into one calm, offline-first mobile experience.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Better Muslim | Quran, Hadith & Islamic Learning",
    description:
      "A respectful, offline-first Islamic companion for Quran reading, Hadith study, and daily learning.",
    images: ["/icon.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth antialiased"
      data-scroll-behavior="smooth"
    >
      <body className='min-h-full bg-[radial-gradient(circle_at_top_left,rgba(184,148,62,0.14),transparent_24%),radial-gradient(circle_at_top_right,rgba(13,122,92,0.16),transparent_22%),linear-gradient(180deg,#fbf7ef_0%,#f4ecdf_100%)] [background-color:#f7f1e6] font-["Avenir_Next","Segoe_UI","Helvetica_Neue",Helvetica,Arial,sans-serif] text-[#163328]'>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
