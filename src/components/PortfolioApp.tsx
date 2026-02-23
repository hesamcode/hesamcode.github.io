// src/components/PortfolioApp.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Lang, ProjectTypeId } from "@/data/types";
import { t } from "@/data/i18n";
import { CANONICAL, CONTACT } from "@/data/constants";
import { PROJECTS } from "@/data/projects";
import { BUDGETS, PROJECT_TYPES } from "@/data/collab";

type Tab = "about" | "projects" | "collab";
type Filter = "all" | ProjectTypeId;
type Theme = "dark" | "light";

function getTheme(): Theme {
  try {
    const v = localStorage.getItem("theme");
    return v === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

function setTheme(next: Theme) {
  document.documentElement.setAttribute("data-theme", next);

  try {
    localStorage.setItem("theme", next);
  } catch {
    // ignore
  }

  // sync browser top bar color instantly
  setThemeColorMeta(next);
}

function setThemeColorMeta(theme: "dark" | "light") {
  const color = theme === "light" ? "#f2f6ff" : "#070a12";
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

function ensureHttp(url: string) {
  const u = (url || "").trim();
  if (!u) return "#";
  if (u.startsWith("http://") || u.startsWith("https://")) return u;
  return `https://${u}`;
}

export default function PortfolioApp({ lang }: { lang: Lang }) {
  const dir: "rtl" | "ltr" = lang === "fa" ? "rtl" : "ltr";
  const arrow = lang === "fa" ? "🡐" : "🡒";

  const [tab, setTab] = useState<Tab>("about");
  const [filter, setFilter] = useState<Filter>("all");

  const [selectedProjectType, setSelectedProjectType] =
    useState<ProjectTypeId>("landing");
  const [selectedBudgetId, setSelectedBudgetId] = useState<string>("b1");
  const [note, setNote] = useState<string>("");

  const [helpOpen, setHelpOpen] = useState(false);

  // toast
  const [toastText, setToastText] = useState("");
  const [toastOpen, setToastOpen] = useState(false);
  const toastTimer = useRef<number | null>(null);

  // refs
  const appRef = useRef<HTMLDivElement | null>(null);
  const collabRef = useRef<HTMLDivElement | null>(null);

  const filteredProjects = useMemo(() => {
    if (filter === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.type === filter);
  }, [filter]);

  // store preferred lang for root redirect
  useEffect(() => {
    try {
      localStorage.setItem("preferredLang", lang);
    } catch {
      // ignore
    }
  }, [lang]);

  // toast helpers
  function showToast(text: string) {
    setToastText(text);
    setToastOpen(true);

    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToastOpen(false), 2600);
  }

  function hideToast() {
    setToastOpen(false);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") hideToast();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function toggleTheme() {
    const current = getTheme();
    setTheme(current === "light" ? "dark" : "light");
  }

  function focusCollab() {
    setTab("collab");
    setTimeout(() => {
      collabRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }

  function onHeaderCta() {
    showToast(t(lang, "toast_collab_below"));
    focusCollab();
  }

  function labelProjectType(typeId: ProjectTypeId) {
    const item = PROJECT_TYPES.find((x) => x.id === typeId);
    return item?.label?.[lang] ?? item?.label?.en ?? "—";
  }

  function labelBudget(budgetId: string) {
    const item = BUDGETS.find((x) => x.id === budgetId);
    return item?.label?.[lang] ?? item?.label?.en ?? "—";
  }

  function buildMessageText() {
    const projectLabel = labelProjectType(selectedProjectType);
    const budgetLabel = labelBudget(selectedBudgetId);
    const n = note.trim();

    const lines: string[] = [
      t(lang, "msg_hello"),
      t(lang, "msg_intro"),
      "",
      `${t(lang, "msg_label_project")}: ${projectLabel}`,
      `${t(lang, "msg_label_budget")}: ${budgetLabel}`,
    ];

    if (n) lines.push("", t(lang, "msg_notes"), n);

    lines.push("", t(lang, "msg_thanks"));
    return lines.join("\n");
  }

  function openWhatsapp() {
    const msg = encodeURIComponent(buildMessageText());
    const url = `https://wa.me/${encodeURIComponent(CONTACT)}?text=${msg}`;
    window.open(url, "_blank", "noopener");
  }

  function openTelegram() {
    const msg = encodeURIComponent(buildMessageText());
    const url = `https://t.me/share/url?url=${encodeURIComponent(CANONICAL[lang])}&text=${msg}`;
    window.open(url, "_blank", "noopener");
  }

  function scrollTop() {
    // Always works (whether scrolling is on window or container)
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }

    // If container has its own scrolling
    const el = appRef.current;
    if (el) {
      try {
        el.scrollTo({ top: 0, behavior: "smooth" });
      } catch {
        el.scrollTop = 0;
      }
    }
  }

  // style tokens (CSS vars from globals.css)
  const card = "rounded-xl border border-[var(--border)]";
  const glass1 = "bg-[var(--glass-1)] backdrop-blur";
  const glass2 = "bg-[var(--glass-2)] backdrop-blur";
  const glass3 = "bg-[var(--glass-3)] backdrop-blur";
  const panel = "bg-[var(--elev-4)]";
  const elev1 = "bg-[var(--elev-1)]";
  const elev2 = "bg-[var(--elev-2)]";
  const textMuted = "text-[var(--muted)]";
  const textPrimary = "text-[var(--primary)]";

  const btnBase =
    "h-11 px-4 rounded-xl border font-bold inline-flex items-center justify-center gap-2 transition active:scale-95";
  const btnGlass = `${btnBase} ${glass2} border-[var(--border)] text-[var(--text)]`;
  const btnSoft = `${btnBase} bg-[var(--primary-soft)] text-[var(--primary)] border-[var(--primary-border-soft)]`;
  const btnPrimary =
    "h-11 px-4 rounded-xl border border-[var(--primary)] bg-[var(--primary)] text-white font-bold inline-flex items-center justify-center gap-2 transition active:scale-95";

  // Social brand buttons (NO icons, full name)
  const socialBtnBase =
    "h-11 px-4 rounded-xl border font-bold inline-flex items-center justify-center transition active:scale-95 w-full";

  const socialGrid = "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3";

  return (
    <div
      ref={appRef}
      className="min-h-dvh w-full overflow-x-hidden overflow-y-auto mx-auto max-w-[1100px] px-3 sm:px-4 lg:px-6"
      dir={dir}
    >
      {/* Toast */}
      <div
        className={[
          "fixed left-1/2 top-3 z-20 w-[calc(100%-24px)] max-w-[776px] -translate-x-1/2",
          card,
          glass3,
          "px-3 py-3 flex items-center justify-between gap-3",
          toastOpen ? "" : "hidden",
        ].join(" ")}
        role="status"
        aria-live="polite"
      >
        <div className="flex items-center gap-3">
          <div
            className={[
              "size-11 rounded-xl border border-[var(--border)]",
              "grid place-items-center",
              "bg-[var(--primary-soft)] text-[var(--primary)] font-extrabold",
            ].join(" ")}
            aria-hidden="true"
          >
            i
          </div>
          <p className="text-xs font-extrabold text-[var(--text)]">
            {toastText}
          </p>
        </div>

        <button
          className={btnGlass}
          type="button"
          onClick={hideToast}
          aria-label="Close toast"
        >
          ✕
        </button>
      </div>

      {/* Header */}
      <header
        className={[
          "relative mt-3",
          card,
          glass1,
          "p-3 sm:p-4",
          "flex flex-col items-center gap-3 text-center",
        ].join(" ")}
      >
        <div className="absolute left-3 right-3 top-3 flex items-center justify-between gap-3">
          {lang === "fa" ? (
            <Link className={btnGlass} href="/en" aria-label="English version">
              EN
            </Link>
          ) : (
            <Link className={btnGlass} href="/fa" aria-label="نسخه فارسی">
              FA
            </Link>
          )}

          <button className={btnGlass} type="button" onClick={toggleTheme}>
            {t(lang, "toggle_theme")}
          </button>
        </div>

        <div className="pt-12 sm:pt-14 w-full flex flex-col items-center gap-3">
          <img
            src="/icons/hesamcode.png"
            alt="HesamCode"
            className="size-28 sm:size-32 rounded-full object-cover"
            loading="eager"
          />

          <div className="text-xl sm:text-2xl font-extrabold text-[var(--text)]">
            {t(lang, "hero_name")}
          </div>

          <div className="w-full">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--primary)]">
              {t(lang, "hero_headline")}
            </h1>
            <p
              className={[
                "mt-1 text-sm sm:text-base font-bold",
                textMuted,
              ].join(" ")}
            >
              {t(lang, "hero_subtext")}
            </p>
          </div>

          <button
            className={btnPrimary + " w-full"}
            type="button"
            onClick={onHeaderCta}
          >
            {t(lang, "cta_collab")} <span aria-hidden="true">{arrow}</span>
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div
        className={[
          "mt-3",
          card,
          glass1,
          "p-3 sm:p-4",
          "grid grid-cols-3 gap-3 place-items-center",
        ].join(" ")}
        role="tablist"
        aria-label="Tabs"
      >
        {(
          [
            ["about", t(lang, "tab_about")],
            ["projects", t(lang, "tab_projects")],
            ["collab", t(lang, "tab_collab")],
          ] as Array<[Tab, string]>
        ).map(([id, label]) => {
          const selected = tab === id;
          return (
            <button
              key={id}
              type="button"
              className={[
                "w-full h-11 rounded-xl border font-bold transition active:scale-95",
                selected
                  ? "bg-[var(--primary-soft)] text-[var(--primary)] border-[var(--primary-border)]"
                  : "bg-[var(--glass-2)] text-[var(--text)] border-[var(--border)]",
              ].join(" ")}
              onClick={() => setTab(id)}
              aria-selected={selected}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Main panel */}
      <main className={["mt-3", card, panel, "p-3 sm:p-4"].join(" ")}>
        {/* ABOUT */}
        {tab === "about" && (
          <section className="flex flex-col gap-3">
            <div className={[card, glass1, "p-3 sm:p-4"].join(" ")}>
              <h2 className="text-sm sm:text-base font-extrabold text-[var(--text)]">
                {t(lang, "about_title")}
              </h2>
              <p
                className={[
                  "mt-3 text-xs sm:text-sm font-bold leading-7",
                  textMuted,
                ].join(" ")}
              >
                {t(lang, "about_text")}
              </p>
            </div>

            <div className={[card, glass1, "p-3 sm:p-4"].join(" ")}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm sm:text-base font-extrabold text-[var(--text)]">
                  {t(lang, "skills_title")}
                </h3>
                <span className={["text-xs font-bold", textPrimary].join(" ")}>
                  {t(lang, "skills_hint")}
                </span>
              </div>

              <div className="mt-3 grid grid-cols-2 sm:grid-cols-2 gap-3">
                {["HTML/CSS", "JavaScript", "React", "Next.js"].map((x) => (
                  <div
                    key={x}
                    className={[
                      card,
                      "h-11 px-3",
                      elev2,
                      "flex items-center gap-3 font-bold",
                    ].join(" ")}
                  >
                    <span className="text-[var(--text)]">{x}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={[card, glass1, "p-3 sm:p-4"].join(" ")}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm sm:text-base font-extrabold text-[var(--text)]">
                  {t(lang, "contact_title")}
                </h3>
                <span className={["text-xs font-bold", textPrimary].join(" ")}>
                  {t(lang, "contact_hint")}
                </span>
              </div>

              {/* Contact methods — localized labels, brand colors */}
              <div className={"mt-3 " + socialGrid}>
                <a
                  className={socialBtnBase}
                  style={{
                    background: "rgba(225, 48, 108, 0.14)",
                    borderColor: "rgba(225, 48, 108, 0.25)",
                    color: "rgb(225, 48, 108)",
                  }}
                  href="https://www.instagram.com/hesamcode"
                  target="_blank"
                  rel="noopener"
                >
                  {t(lang, "contact_instagram")}
                </a>

                <a
                  className={socialBtnBase}
                  style={{
                    background: "rgba(10, 102, 194, 0.14)",
                    borderColor: "rgba(10, 102, 194, 0.25)",
                    color: "rgb(10, 102, 194)",
                  }}
                  href="https://www.linkedin.com/in/hesam-khorshidi-4651803b1"
                  target="_blank"
                  rel="noopener"
                >
                  {t(lang, "contact_linkedin")}
                </a>

                <a
                  className={socialBtnBase}
                  style={{
                    background: "var(--elev-1)",
                    borderColor: "var(--border)",
                    color: "var(--text)",
                  }}
                  href="https://github.com/hesamcode"
                  target="_blank"
                  rel="noopener"
                >
                  {t(lang, "contact_github")}
                </a>

                <a
                  className={socialBtnBase}
                  style={{
                    background: "rgba(255, 0, 0, 0.12)",
                    borderColor: "rgba(255, 0, 0, 0.22)",
                    color: "rgb(255, 0, 0)",
                  }}
                  href="https://www.youtube.com/@hesam_code"
                  target="_blank"
                  rel="noopener"
                >
                  {t(lang, "contact_youtube")}
                </a>

                <a
                  className={socialBtnBase}
                  style={{
                    background: "rgba(16, 185, 129, 0.14)",
                    borderColor: "rgba(16, 185, 129, 0.25)",
                    color: "rgb(16, 185, 129)",
                  }}
                  href={`https://wa.me/${CONTACT}`}
                  target="_blank"
                  rel="noopener"
                >
                  {t(lang, "contact_whatsapp")}
                </a>

                <a
                  className={socialBtnBase}
                  style={{
                    background: "rgba(0, 136, 204, 0.14)",
                    borderColor: "rgba(0, 136, 204, 0.25)",
                    color: "rgb(0, 136, 204)",
                  }}
                  href="https://t.me/hesam_code"
                  target="_blank"
                  rel="noopener"
                >
                  {t(lang, "contact_telegram")}
                </a>

                <a
                  className={socialBtnBase}
                  style={{
                    background: "var(--primary-soft)",
                    borderColor: "var(--primary-border-soft)",
                    color: "var(--primary)",
                  }}
                  href="tel:09931231249"
                >
                  {t(lang, "contact_call")}
                </a>

                <a
                  className={socialBtnBase}
                  style={{
                    background: "rgba(245, 158, 11, 0.14)",
                    borderColor: "rgba(245, 158, 11, 0.25)",
                    color: "rgb(245, 158, 11)",
                  }}
                  href="mailto:hesamcode.com@gmail.com"
                >
                  {t(lang, "contact_email")}
                </a>
              </div>
            </div>
          </section>
        )}

        {/* PROJECTS */}
        {tab === "projects" && (
          <section className="flex flex-col gap-3">
            <div className={[card, glass1, "p-3 sm:p-4"].join(" ")}>
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-sm sm:text-base font-extrabold text-[var(--text)]">
                  {t(lang, "projects_title")}
                </h2>
                <span className={["text-xs font-bold", textPrimary].join(" ")}>
                  {t(lang, "projects_hint")}
                </span>
              </div>

              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {(
                  [
                    ["all", t(lang, "filter_all")],
                    ["landing", t(lang, "filter_landing")],
                    ["dashboard", t(lang, "filter_dashboard")],
                    ["shop", t(lang, "filter_shop")],
                    ["ui", t(lang, "filter_ui")],
                  ] as Array<[Filter, string]>
                ).map(([id, label]) => {
                  const selected = filter === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      className={[
                        "h-11 px-3 rounded-xl border font-bold transition active:scale-95",
                        selected
                          ? "bg-[var(--primary-soft)] text-[var(--primary)] border-[var(--primary-border)]"
                          : "bg-[var(--elev-2)] text-[var(--text)] border-[var(--border)]",
                      ].join(" ")}
                      onClick={() => setFilter(id)}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {filteredProjects.length === 0 ? (
                <div
                  className={[
                    card,
                    glass1,
                    "p-3 text-sm font-bold",
                    textMuted,
                    "lg:col-span-2",
                  ].join(" ")}
                >
                  {t(lang, "no_projects")}
                </div>
              ) : (
                filteredProjects.map((p) => (
                  <article
                    key={p.id}
                    className={[card, glass1, "overflow-hidden"].join(" ")}
                  >
                    {/* Placeholder cover (until images available) */}
                    <div className="h-56 w-full border-b border-[var(--border)] bg-[var(--elev-2)] grid place-items-center">
                      <span className="text-xs font-bold text-[var(--muted)]">
                        {t(lang, "project_image_alt_prefix")} {p.title[lang]}
                      </span>
                    </div>

                    <div className="p-3 sm:p-4 flex flex-col gap-3">
                      <h3 className="text-sm sm:text-base font-extrabold text-[var(--text)]">
                        {p.title[lang]}
                      </h3>

                      <p
                        className={[
                          "text-xs sm:text-sm font-bold leading-7",
                          textMuted,
                        ].join(" ")}
                      >
                        {p.desc[lang]}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--elev-2)] text-xs font-bold text-[var(--primary)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <a
                          className={btnSoft}
                          href={ensureHttp(p.link)}
                          target="_blank"
                          rel="noopener"
                        >
                          {t(lang, "view")}
                        </a>

                        <button
                          className={btnPrimary}
                          type="button"
                          onClick={() => {
                            setSelectedProjectType(p.type);
                            showToast(t(lang, "toast_project_selected"));
                            focusCollab();
                          }}
                        >
                          {t(lang, "request_similar")}{" "}
                          <span aria-hidden="true">{arrow}</span>
                        </button>
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>
          </section>
        )}

        {/* COLLAB */}
        {tab === "collab" && (
          <section ref={collabRef} className="flex flex-col gap-3 scroll-mt-5">
            <div className={[card, glass1, "p-3 sm:p-4"].join(" ")}>
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-sm sm:text-base font-extrabold text-[var(--text)]">
                  {t(lang, "collab_title")}
                </h2>

                <button
                  type="button"
                  className="font-bold underline underline-offset-4 text-[var(--primary)]"
                  onClick={() => setHelpOpen((s) => !s)}
                  aria-expanded={helpOpen}
                  aria-controls="help-panel"
                >
                  {t(lang, "help")}
                </button>
              </div>

              <div
                id="help-panel"
                className={[
                  "mt-3",
                  card,
                  elev1,
                  "p-3",
                  helpOpen ? "" : "hidden",
                ].join(" ")}
              >
                <ul
                  className={[
                    "list-disc text-sm font-bold flex flex-col gap-2",
                    textMuted,
                    dir === "rtl" ? "pr-5" : "pl-5",
                  ].join(" ")}
                >
                  <li>{t(lang, "help_1")}</li>
                  <li>{t(lang, "help_2")}</li>
                  <li>{t(lang, "help_3")}</li>
                  <li>{t(lang, "help_4")}</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {/* Project type */}
              <div className={[card, glass1, "p-3 sm:p-4"].join(" ")}>
                <div className="flex items-center justify-between gap-3">
                  <div className="font-extrabold text-[var(--primary)]">
                    {t(lang, "project_type")}
                  </div>
                  <div className={["text-sm font-bold", textMuted].join(" ")}>
                    {t(lang, "only_one")}
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROJECT_TYPES.map((pt) => {
                    const selected =
                      selectedProjectType === (pt.id as ProjectTypeId);
                    return (
                      <button
                        key={pt.id}
                        type="button"
                        className={[
                          "h-11 px-3 rounded-xl border font-bold flex items-center justify-between gap-3 transition active:scale-95",
                          selected
                            ? "bg-[var(--primary-soft)] border-[var(--primary-border)]"
                            : "bg-[var(--elev-2)] border-[var(--border)]",
                        ].join(" ")}
                        onClick={() =>
                          setSelectedProjectType(pt.id as ProjectTypeId)
                        }
                        aria-pressed={selected}
                      >
                        <span className="text-[var(--text)] truncate">
                          {pt.label[lang]}
                        </span>
                        <span
                          className={[
                            "text-xs font-extrabold",
                            selected ? "text-[var(--primary)]" : textMuted,
                          ].join(" ")}
                        >
                          {selected ? "✓" : ""}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget */}
              <div className={[card, glass1, "p-3 sm:p-4"].join(" ")}>
                <div className="flex items-center justify-between gap-3">
                  <div className="font-extrabold text-[var(--primary)]">
                    {t(lang, "budget")}
                  </div>
                  <div className={["text-sm font-bold", textMuted].join(" ")}>
                    {t(lang, "estimated")}
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {BUDGETS.map((b) => {
                    const selected = selectedBudgetId === b.id;
                    return (
                      <button
                        key={b.id}
                        type="button"
                        className={[
                          "h-11 px-3 rounded-xl border font-bold flex items-center justify-between gap-3 transition active:scale-95",
                          selected
                            ? "bg-[var(--primary-soft)] border-[var(--primary-border)]"
                            : "bg-[var(--elev-2)] border-[var(--border)]",
                        ].join(" ")}
                        onClick={() => setSelectedBudgetId(b.id)}
                        aria-pressed={selected}
                      >
                        <span className="text-[var(--text)] truncate">
                          {b.label[lang]}
                        </span>
                        <span
                          className={[
                            "text-xs font-extrabold",
                            selected ? "text-[var(--primary)]" : textMuted,
                          ].join(" ")}
                        >
                          {selected ? "✓" : ""}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Notes */}
              <div
                className={["lg:col-span-2", card, glass1, "p-3 sm:p-4"].join(
                  " ",
                )}
              >
                <label className="flex flex-col gap-3">
                  <span className="font-extrabold text-[var(--primary)]">
                    {t(lang, "notes_label")}
                  </span>
                  <textarea
                    className={[
                      "min-h-[110px] w-full rounded-xl border border-[var(--border)]",
                      "bg-[var(--glass-2)] p-3 text-[var(--text)] font-bold",
                      "focus:outline-none focus:ring-2 focus:ring-[var(--focus)]",
                    ].join(" ")}
                    placeholder={t(lang, "notes_placeholder")}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </label>
              </div>

              {/* Summary */}
              <div
                className={[card, elev1, "p-3 sm:p-4 flex flex-col gap-3"].join(
                  " ",
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-extrabold text-[var(--primary)]">
                    {t(lang, "summary_project")}
                  </span>
                  <strong className="text-[var(--text)]">
                    {labelProjectType(selectedProjectType)}
                  </strong>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-extrabold text-[var(--primary)]">
                    {t(lang, "summary_budget")}
                  </span>
                  <strong className="text-[var(--text)]">
                    {labelBudget(selectedBudgetId)}
                  </strong>
                </div>
              </div>

              {/* Messenger */}
              <div
                className={[
                  card,
                  glass1,
                  "p-3 sm:p-4 flex flex-col gap-3",
                ].join(" ")}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    className="h-11 rounded-xl font-bold text-white bg-emerald-500 border border-emerald-400 transition active:scale-95"
                    type="button"
                    onClick={openWhatsapp}
                  >
                    {t(lang, "whatsapp")}
                  </button>

                  <button
                    className="h-11 rounded-xl font-bold text-white bg-sky-600 border border-sky-500 transition active:scale-95"
                    type="button"
                    onClick={openTelegram}
                  >
                    {t(lang, "telegram")}
                  </button>
                </div>

                <p
                  className={["text-sm font-bold text-center", textMuted].join(
                    " ",
                  )}
                >
                  {t(lang, "helper_line")}
                </p>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* FAQ (outside tabs) */}
      <section className={["mt-3", card, glass1, "p-3 sm:p-4"].join(" ")}>
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-sm sm:text-base font-extrabold text-[var(--text)]">
            {t(lang, "faq_title")}
          </h2>
          <span className={["text-xs font-bold", textPrimary].join(" ")}>
            {t(lang, "faq_hint")}
          </span>
        </div>

        <div className="mt-3 flex flex-col gap-3">
          <details className={[card, "bg-[var(--elev-1)]", "p-3"].join(" ")}>
            <summary className="cursor-pointer list-none flex items-center justify-between gap-3 font-extrabold text-[var(--text)]">
              <span>{t(lang, "faq_q1")}</span>
              <span
                className={["text-sm font-bold", textMuted].join(" ")}
                aria-hidden="true"
              >
                🡫
              </span>
            </summary>
            <p
              className={[
                "mt-2 text-xs sm:text-sm font-bold leading-7",
                textMuted,
              ].join(" ")}
            >
              {t(lang, "faq_a1")}
            </p>
          </details>

          <details className={[card, "bg-[var(--elev-1)]", "p-3"].join(" ")}>
            <summary className="cursor-pointer list-none flex items-center justify-between gap-3 font-extrabold text-[var(--text)]">
              <span>{t(lang, "faq_q2")}</span>
              <span
                className={["text-sm font-bold", textMuted].join(" ")}
                aria-hidden="true"
              >
                🡫
              </span>
            </summary>
            <p
              className={[
                "mt-2 text-xs sm:text-sm font-bold leading-7",
                textMuted,
              ].join(" ")}
            >
              {t(lang, "faq_a2")}
            </p>
          </details>

          <details className={[card, "bg-[var(--elev-1)]", "p-3"].join(" ")}>
            <summary className="cursor-pointer list-none flex items-center justify-between gap-3 font-extrabold text-[var(--text)]">
              <span>{t(lang, "faq_q3")}</span>
              <span
                className={["text-sm font-bold", textMuted].join(" ")}
                aria-hidden="true"
              >
                🡫
              </span>
            </summary>
            <p
              className={[
                "mt-2 text-xs sm:text-sm font-bold leading-7",
                textMuted,
              ].join(" ")}
            >
              {t(lang, "faq_a3")}
            </p>
          </details>

          <details className={[card, "bg-[var(--elev-1)]", "p-3"].join(" ")}>
            <summary className="cursor-pointer list-none flex items-center justify-between gap-3 font-extrabold text-[var(--text)]">
              <span>{t(lang, "faq_q4")}</span>
              <span
                className={["text-sm font-bold", textMuted].join(" ")}
                aria-hidden="true"
              >
                🡫
              </span>
            </summary>
            <p
              className={[
                "mt-2 text-xs sm:text-sm font-bold leading-7",
                textMuted,
              ].join(" ")}
            >
              {t(lang, "faq_a4")}
            </p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className={["mt-3", card, glass1, "overflow-hidden"].join(" ")}>
        <div className="p-3 sm:p-4 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-sm font-extrabold text-[var(--text)]">
                {t(lang, "footer_title")}
              </div>
              <div className={["text-xs font-bold", textMuted].join(" ")}>
                {t(lang, "footer_note")}
              </div>
            </div>

            <button
              className={btnGlass}
              type="button"
              onClick={scrollTop}
              aria-label={t(lang, "back_to_top")}
            >
              🡑
            </button>
          </div>

          <div className={[card, glass1, "p-3"].join(" ")}>
            <div className="text-sm font-extrabold text-[var(--text)]">
              {t(lang, "quick_contact")}
            </div>

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a className={btnSoft} href="tel:09931231249">
                {t(lang, "call")}
              </a>
              <a
                className={btnGlass}
                style={{
                  background: "rgba(16, 185, 129, 0.14)",
                  borderColor: "rgba(16, 185, 129, 0.25)",
                  color: "rgb(16, 185, 129)",
                }}
                href={`https://wa.me/${CONTACT}`}
                target="_blank"
                rel="noopener"
              >
                {t(lang, "whatsapp")}
              </a>
              <a
                className={btnGlass}
                style={{
                  background: "rgba(0, 136, 204, 0.14)",
                  borderColor: "rgba(0, 136, 204, 0.25)",
                  color: "rgb(0, 136, 204)",
                }}
                href="https://t.me/hesam_code"
                target="_blank"
                rel="noopener"
              >
                {t(lang, "telegram")}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border)] p-3 text-center text-sm font-bold text-[var(--primary)]">
          © {new Date().getFullYear()} {t(lang, "footer_copy")}{" "}
          <span aria-hidden="true">♥️</span>
        </div>
      </footer>

      <div className="h-6" />
    </div>
  );
}
