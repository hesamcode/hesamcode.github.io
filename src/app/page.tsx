// src/app/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

type Lang = "fa" | "en";

function detectLang(): Lang {
  try {
    const saved = localStorage.getItem("preferredLang");
    if (saved === "fa" || saved === "en") return saved;

    const lang = (navigator.language || "").toLowerCase();
    return lang.startsWith("fa") ? "fa" : "en";
  } catch {
    return "en";
  }
}

export default function RootRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    const lang = detectLang();
    router.replace(lang === "fa" ? "/fa" : "/en");
  }, [router]);

  return (
    <main className="min-h-dvh grid place-items-center p-6">
      <div className="w-full max-w-sm rounded-2xl border border-[var(--border)] bg-[var(--glass-2)] p-4 text-center">
        <div className="text-[var(--primary)] font-bold">HesamCode</div>
        <p className="mt-2 text-sm font-bold text-[var(--muted)]">Loading…</p>
      </div>
    </main>
  );
}
