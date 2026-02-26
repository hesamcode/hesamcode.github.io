// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import ThemeInit from "@/components/ThemeInit";
import PWARegister from "@/components/PWARegister";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const SITE = "https://hesamcode.github.io";

export const metadata: Metadata = {
  title: "HesamCode",
  description: "HesamCode — Front-end Developer Portfolio",
  robots: { index: false, follow: true },
  verification: {
    google: "f-lslA1JN_2X8pcrmz3f8esmMT_627qEM7-Fv6tE1SQ",
  },
  alternates: {
    canonical: `${SITE}/`,
    languages: {
      fa: `${SITE}/fa/`,
      en: `${SITE}/en/`,
      "x-default": `${SITE}/en/`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["fa_IR"],
    url: `${SITE}/`,
    siteName: "HesamCode",
    title: "HesamCode | Front-end Developer",
    description:
      "Building Modern & responsive websites | Projects and collaboration",
    images: [
      {
        url: `${SITE}/icons/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "HesamCode",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HesamCode | Front-end Developer",
    description:
      "Building Modern & responsive websites | Projects and collaboration",
    images: [`${SITE}/icons/og-image.jpg`],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070a12" },
    { media: "(prefers-color-scheme: light)", color: "#f2f6ff" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="dark">
      <head>
        {/* default; ThemeInit will update it dynamically on load + when toggled */}
        <meta name="theme-color" content="#070a12" />
      </head>
      <body>
        <ThemeInit />
        <PWARegister />
        {children}
      </body>
    </html>
  );
}
