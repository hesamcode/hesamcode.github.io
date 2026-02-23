// src/components/HtmlAttrs.tsx
"use client";

import { useEffect } from "react";
import type { Lang } from "@/data/types";

export default function HtmlAttrs({
  lang,
  dir,
}: {
  lang: Lang;
  dir: "rtl" | "ltr";
}) {
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", dir);
  }, [lang, dir]);

  return null;
}
