// src/data/projects.ts
import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "portfolio_v2",
    type: "landing",
    title: {
      fa: "پورتفولیو شخصی (نسخه مدرن)",
      en: "Personal Portfolio (Modern Version)",
    },
    desc: {
      fa: "طراحی و توسعه یک پورتفولیو سبک و سریع با ساختار سئو، بخش‌های معرفی، پروژه‌ها و همکاری. ریسپانسیو کامل و مناسب معرفی حرفه‌ای.",
      en: "A lightweight, fast portfolio with SEO-friendly structure, about/projects/collaboration sections. Fully responsive and suitable for a professional showcase.",
    },
    tags: ["HTML", "CSS", "JS", "SEO"],
    link: "https://hesamcode.github.io/",
    // cover: "/assets/gallery/portfolio_v2.webp",
  },
  {
    id: "business_landing",
    type: "landing",
    title: {
      fa: "لندینگ شرکتی (Conversion محور)",
      en: "Business Landing (Conversion-focused)",
    },
    desc: {
      fa: "پیاده‌سازی لندینگ با تمرکز روی CTA، سرعت، ساختار استاندارد و بخش‌های قابل توسعه برای کمپین‌ها و تبلیغات.",
      en: "A landing page focused on CTA, speed, clean structure, and scalable sections for campaigns and ads.",
    },
    tags: ["Landing", "Responsive", "Performance"],
    link: "https://example.com",
  },
  {
    id: "admin_dashboard",
    type: "dashboard",
    title: {
      fa: "داشبورد مدیریتی (کامپوننت محور)",
      en: "Admin Dashboard (Component-based)",
    },
    desc: {
      fa: "داشبورد با صفحات مختلف، جدول‌ها، فرم‌ها و کامپوننت‌های قابل استفاده مجدد. مناسب اتصال به API و توسعه تیمی.",
      en: "A dashboard with pages, tables, forms, and reusable components. Ready for API integration and team scaling.",
    },
    tags: ["Dashboard", "UI", "Components"],
    link: "https://example.com",
  },
  {
    id: "shop_front",
    type: "shop",
    title: {
      fa: "فرانت فروشگاهی (Listing + Product)",
      en: "E-commerce Front (Listing + Product)",
    },
    desc: {
      fa: "صفحات لیست محصولات، جزئیات محصول، فیلترها و تجربه کاربری خرید روان. مناسب اتصال به بک‌اند/پنل.",
      en: "Product listing, product details, filters, and a smooth shopping UX. Suitable for backend/panel integration.",
    },
    tags: ["E-commerce", "UI", "Responsive"],
    link: "https://example.com",
  },
  {
    id: "ui_kit",
    type: "ui",
    title: {
      fa: "UI Kit سبک (Card / Button / Form)",
      en: "Light UI Kit (Card / Button / Form)",
    },
    desc: {
      fa: "طراحی و پیاده‌سازی یک UI Kit ساده و شیک برای پروژه‌های مختلف. تمرکز روی هماهنگی رنگ‌ها و تجربه کاربری.",
      en: "A simple, elegant UI kit for multiple projects with a focus on visual harmony and UX.",
    },
    tags: ["UI Kit", "Design", "Clean"],
    link: "https://example.com",
  },
];
