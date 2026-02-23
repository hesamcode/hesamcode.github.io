// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import ThemeInit from "@/components/ThemeInit";
import PWARegister from "@/components/PWARegister";

export const metadata: Metadata = {
  title: "HesamCode",
  description: "HesamCode — Front-end Developer Portfolio",
  robots: { index: false, follow: false }, // چون روت فقط redirect است
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
      <body>
        {/* sets data-theme + meta theme-color before paint */}
        <ThemeInit />
        {/* register SW only in production build */}
        <PWARegister />
        {children}
      </body>
    </html>
  );
}
