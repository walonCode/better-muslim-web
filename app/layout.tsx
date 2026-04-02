import type { Metadata } from "next";
import { RouteTransition } from "@/components/motion/route-transition";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bettermuslim.app"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Better Muslim | Quran, Hadith & Islamic Learning",
    template: "%s | Better Muslim",
  },
  description:
    "Better Muslim brings Quran reading, Hadith study, and structured Islamic learning into one calm, offline-first mobile experience.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    shortcut: "/icon.png",
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
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className='min-h-full overflow-x-clip font-["Avenir_Next","Segoe_UI","Helvetica_Neue",Helvetica,Arial,sans-serif] text-[var(--text-primary)]'>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col overflow-x-clip">
            <SiteHeader />
            <main className="flex-1">
              <RouteTransition>{children}</RouteTransition>
            </main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
