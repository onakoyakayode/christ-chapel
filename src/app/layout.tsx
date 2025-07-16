import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageTransition } from "@/components/page-transition";
import VerseFetcher from "@/components/VerseFetcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christ Chapel Parish",
  description:
    "Welcome to Christ Chapel Parish - A place of worship, community, and spiritual growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-dvh">
            <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-background shadow-md">
              <SiteHeader />
            </header>
            <main className="flex-1 mt-15 lg:mt-[80px]">
              <PageTransition>{children}</PageTransition>
            </main>
            <SiteFooter />
            <VerseFetcher />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
