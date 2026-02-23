// src/app/en/layout.tsx
import type { Metadata } from "next";
import HtmlAttrs from "@/components/HtmlAttrs";

const SITE = "https://hesamcode.github.io";

export const metadata: Metadata = {
  title: "HesamCode | Front-End Developer",
  description:
    "HesamCode - Front-end Developer. Building modern and responsive websites. View projects, learn about me, and request collaboration.",
  authors: [{ name: "HesamCode" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE}/en/`,
    languages: {
      fa: `${SITE}/fa/`,
      en: `${SITE}/en/`,
      "x-default": `${SITE}/en/`,
    },
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icons/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon-180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["fa_IR"],
    url: `${SITE}/en/`,
    siteName: "HesamCode",
    title: "HesamCode | Front-end Developer",
    description: "Modern & responsive websites | Projects and collaboration",
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
    description: "Modern & responsive websites | Projects and collaboration",
    images: [`${SITE}/icons/og-image.jpg`],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "HesamCode",
  jobTitle: "Front-end Developer",
  url: `${SITE}/en/`,
  image: `${SITE}/icons/hesamcode.png`,
  sameAs: [
    "https://github.com/hesamcode",
    "https://www.instagram.com/hesamcode",
    "https://www.youtube.com/@hesam_code",
    "https://t.me/hesam_code",
    "https://www.linkedin.com/in/hesam-khorshidi-4651803b1",
  ],
  knowsAbout: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "UI",
    "Performance",
    "SEO",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "HesamCode",
  url: `${SITE}/en/`,
  inLanguage: "en",
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HtmlAttrs lang="en" dir="ltr" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      {children}
    </>
  );
}
