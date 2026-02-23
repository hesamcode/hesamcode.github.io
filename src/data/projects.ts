// src/data/projects.ts
import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "admin-dashboard",
    type: "dashboard",
    title: {
      fa: "داشبورد مدیریتی حرفه‌ای",
      en: "Admin Dashboard",
    },
    desc: {
      fa: "داشبورد مدیریتی واکنش‌گرا با HTML، CSS و JavaScript با ساختار ماژولار و رابط کاربری تمیز.",
      en: "A responsive admin dashboard built with vanilla HTML, CSS and JavaScript.",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://hesamcode.github.io/admin-dashboard/",
    cover: "/assets/images/admin-dashboard.webp",
  },
  {
    id: "analytics-playground",
    type: "dashboard",
    title: {
      fa: "ابزار تحلیل داده",
      en: "Analytics Playground",
    },
    desc: {
      fa: "ابزار تحلیل داده‌های CSV با نمودارهای تعاملی در مرورگر.",
      en: "Client-side CSV analytics tool with interactive charts.",
    },
    tags: ["HTML", "CSS", "JavaScript", "Chart.js"],
    link: "https://hesamcode.github.io/analytics-playground/",
    cover: "/assets/images/analytics-playground.webp",
  },
  {
    id: "chat-simulator",
    type: "dashboard",
    title: {
      fa: "شبیه‌ساز چت",
      en: "Chat Simulator",
    },
    desc: {
      fa: "رابط کاربری شبیه‌سازی چت با تجربه تعاملی و طراحی واکنش‌گرا.",
      en: "Interactive chat UI simulation with responsive design.",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://hesamcode.github.io/chat-simulator/",
    cover: "/assets/images/chat-simulator.webp",
  },
  {
    id: "ecommerce-frontend",
    type: "shop",
    title: {
      fa: "فرانت فروشگاه آنلاین",
      en: "Ecommerce Frontend",
    },
    desc: {
      fa: "پیاده‌سازی رابط کاربری فروشگاه شامل لیست محصولات و صفحه جزئیات.",
      en: "E-commerce storefront UI with listing and product pages.",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://hesamcode.github.io/ecommerce-frontend/",
    cover: "/assets/images/ecommerce-frontend.webp",
  },
  {
    id: "expense-tracker-pro",
    type: "dashboard",
    title: {
      fa: "مدیریت هزینه حرفه‌ای",
      en: "Expense Tracker Pro",
    },
    desc: {
      fa: "اپلیکیشن مدیریت و ثبت هزینه‌ها با رابط کاربری ساده و کاربردی.",
      en: "A modern expense tracking application.",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://hesamcode.github.io/expense-tracker-pro/",
    cover: "/assets/images/expense-tracker-pro.webp",
  },
  {
    id: "hotel-booking",
    type: "landing",
    title: {
      fa: "لندینگ رزرو هتل",
      en: "Hotel Booking Landing",
    },
    desc: {
      fa: "صفحه فرود رزرو هتل با طراحی ریسپانسیو و تجربه کاربری روان.",
      en: "Responsive hotel booking landing page.",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://hesamcode.github.io/hotel-booking/",
    cover: "/assets/images/hotel-booking.webp",
  },
  {
    id: "project-planner",
    type: "dashboard",
    title: {
      fa: "برنامه‌ریز پروژه",
      en: "Project Planner",
    },
    desc: {
      fa: "اپلیکیشن برنامه‌ریزی پروژه و مدیریت وظایف.",
      en: "Project planning and task management app.",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://hesamcode.github.io/project-planner/",
    cover: "/assets/images/project-planner.webp",
  },
  {
    id: "quiz-platform",
    type: "dashboard",
    title: {
      fa: "پلتفرم آزمون آنلاین",
      en: "Quiz Platform",
    },
    desc: {
      fa: "پلتفرم برگزاری آزمون با محاسبه امتیاز و نمایش نتیجه.",
      en: "Online quiz platform with scoring system.",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://hesamcode.github.io/quiz-platform/",
    cover: "/assets/images/quiz-platform.webp",
  },
  {
    id: "task-manager-kanban",
    type: "dashboard",
    title: {
      fa: "تابلوی جریان کار",
      en: "Task Manager Board",
    },
    desc: {
      fa: "مدیریت وظایف به صورت تابلوی جریان کار (سبک کانبان).",
      en: "Kanban-style task management board.",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://hesamcode.github.io/task-manager-kanban/",
    cover: "/assets/images/task-manager-kanban.webp",
  },
  {
    id: "weather-pro",
    type: "dashboard",
    title: {
      fa: "اپلیکیشن آب‌وهوا",
      en: "Weather Pro",
    },
    desc: {
      fa: "نمایش وضعیت آب‌وهوا با دریافت داده از API.",
      en: "Weather forecast app using external API.",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://hesamcode.github.io/weather-pro/",
    cover: "/assets/images/weather-pro.webp",
  },

  // --- React + Tailwind Projects ---

  {
    id: "react-collab-board-lite",
    type: "dashboard",
    title: {
      fa: "بورد همکاری سبک",
      en: "React Collab Board Lite",
    },
    desc: {
      fa: "بورد همکاری تیمی با React و Tailwind.",
      en: "Lightweight collaborative board built with React and Tailwind.",
    },
    tags: ["React", "JavaScript", "Tailwind"],
    link: "https://hesamcode.github.io/react-collab-board-lite/",
    cover: "/assets/images/react-collab-board-lite.webp",
  },
  {
    id: "react-content-studio",
    type: "dashboard",
    title: {
      fa: "استودیو مدیریت محتوا",
      en: "React Content Studio",
    },
    desc: {
      fa: "رابط مدیریت محتوا با React و Tailwind.",
      en: "Content management interface built with React and Tailwind.",
    },
    tags: ["React", "JavaScript", "Tailwind"],
    link: "https://hesamcode.github.io/react-content-studio/",
    cover: "/assets/images/react-content-studio.webp",
  },
  {
    id: "react-data-viz-studio",
    type: "dashboard",
    title: {
      fa: "استودیو داده‌نگاری",
      en: "React Data Viz Studio",
    },
    desc: {
      fa: "رابط نمایش و تحلیل داده‌ها با React و Tailwind.",
      en: "Data visualization studio built with React and Tailwind.",
    },
    tags: ["React", "JavaScript", "Tailwind"],
    link: "https://hesamcode.github.io/react-data-viz-studio/",
    cover: "/assets/images/react-data-viz-studio.webp",
  },
  {
    id: "react-form-builder",
    type: "dashboard",
    title: {
      fa: "فرم‌ساز",
      en: "React Form Builder",
    },
    desc: {
      fa: "ابزار ساخت فرم پویا با React و Tailwind.",
      en: "Dynamic form builder built with React and Tailwind.",
    },
    tags: ["React", "JavaScript", "Tailwind"],
    link: "https://hesamcode.github.io/react-form-builder/",
    cover: "/assets/images/react-form-builder.webp",
  },
  {
    id: "react-rbac-admin",
    type: "dashboard",
    title: {
      fa: "داشبورد مدیریت دسترسی",
      en: "React RBAC Admin",
    },
    desc: {
      fa: "پنل مدیریت نقش و سطح دسترسی با React و Tailwind.",
      en: "Role-based access control admin panel built with React and Tailwind.",
    },
    tags: ["React", "JavaScript", "Tailwind"],
    link: "https://hesamcode.github.io/react-rbac-admin/",
    cover: "/assets/images/react-rbac-admin.webp",
  },
];
