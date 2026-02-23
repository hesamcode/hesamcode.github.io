"use client";

import { useEffect } from "react";

type Theme = "dark" | "light";

function themeToColor(theme: Theme) {
  return theme === "light" ? "#f2f6ff" : "#070a12";
}

function setThemeColorMeta(theme: Theme) {
  const color = themeToColor(theme);

  let meta = document.querySelector(
    'meta[name="theme-color"]',
  ) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "theme-color";
    document.head.appendChild(meta);
  }
  meta.content = color;
}

export default function ThemeInit() {
  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      const prefersLight =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches;

      const theme: Theme =
        saved === "light" || saved === "dark"
          ? (saved as Theme)
          : prefersLight
            ? "light"
            : "dark";

      document.documentElement.setAttribute("data-theme", theme);
      setThemeColorMeta(theme);
    } catch {
      document.documentElement.setAttribute("data-theme", "dark");
      setThemeColorMeta("dark");
    }
  }, []);

  return null;
}
