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
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full">
        <div className="site-shell">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
