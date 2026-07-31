import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd, accountingServiceSchema } from "@/lib/schema";
import { BUSINESS, SITE_URL } from "@/lib/constants";

// Self-hosted via next/font. Fraunces is a distinctive humanist display serif;
// Inter is a clean, highly legible sans for body copy.
const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: "#0E2E5C",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Starflower Bookkeeping | CFO-Level Bookkeeping for Contractors",
    template: "%s | Starflower Bookkeeping",
  },
  description:
    "CFO-level bookkeeping for contractors and small businesses nationwide. Based in Liberty, Missouri, serving the Kansas City metro and clients everywhere, remote.",
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.name }],
  keywords: [
    "construction bookkeeping",
    "bookkeeper for contractors",
    "QuickBooks cleanup",
    "catch up bookkeeping",
    "small business bookkeeping",
    "Kansas City bookkeeper",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: BUSINESS.name,
    url: SITE_URL,
    title: "Starflower Bookkeeping | CFO-Level Bookkeeping for Contractors",
    description:
      "Not a bookkeeper who took a QuickBooks course. CFO-level financial oversight for contractors and small businesses nationwide.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Starflower Bookkeeping | CFO-Level Bookkeeping for Contractors",
    description:
      "CFO-level bookkeeping for contractors and small businesses nationwide.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans">
        <JsonLd data={accountingServiceSchema()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
