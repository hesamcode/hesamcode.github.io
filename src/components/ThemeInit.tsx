"use client";

import { useEffect } from "react";

type Theme = "dark" | "light";

function themeToColor(theme: Theme) {
  return theme === "light" ? "#f2f6ff" : "#070a12";
}

export function setThemeColorMeta(theme: Theme) {
  const color = themeToColor(theme);
  let meta = document.querySelector(
    'meta[name="theme-color"]',
  ) as HTMLMetaElement | null;

  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "theme-color";
    document.head.appendChild(meta);
  }

  // use setAttribute to avoid some mobile quirks
  meta.setAttribute("content", color);
}

function getInitialTheme(): Theme {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // ignore
  }

  const prefersLight =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;

  return prefersLight ? "light" : "dark";
}

export default function ThemeInit() {
  useEffect(() => {
    const theme = getInitialTheme();
    document.documentElement.setAttribute("data-theme", theme);
    setThemeColorMeta(theme);

    const onStorage = (e: StorageEvent) => {
      if (e.key !== "theme") return;
      const next: Theme = e.newValue === "light" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      setThemeColorMeta(next);
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return null;
}
