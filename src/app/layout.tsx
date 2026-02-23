// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import ThemeInit from "@/components/ThemeInit";
import PWARegister from "@/components/PWARegister";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "HesamCode",
  description: "HesamCode — Front-end Developer Portfolio",
  robots: { index: false, follow: false },
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
