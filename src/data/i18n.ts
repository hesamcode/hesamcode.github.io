// src/data/i18n.ts
import type { Lang } from "./types";

export const I18N: Record<Lang, Record<string, string>> = {
  fa: {
    // header
    hero_name: "HesamCode",
    hero_headline: "توسعه دهنده فرانت اند",
    hero_subtext: "ساخت وبسایت های مدرن و واکنش گرا",
    cta_collab: "درخواست همکاری",
    pwa_ready: "وب اپ آماده نصب است",
    pwa_install_btn: "نصب وب اپ",
    pwa_installing: "در حال نصب...",
    footer_copy: "تمامی حقوق محفوظ است | HesamCode",

    // tabs
    tab_about: "درباره من",
    tab_projects: "پروژه ها",
    tab_collab: "همکاری",

    // about
    about_title: "درباره من",
    about_text:
      "من HesamCode هستم؛ توسعه‌دهنده فرانت‌اند با تمرکز روی UI مدرن، عملکرد بالا، ریسپانسیو بودن و تجربه کاربری ساده و تمیز. هدفم اینه که سایت شما هم زیبا باشه و هم سریع و قابل توسعه.",
    skills_title: "مهارت ها",
    skills_hint: "اصلی و کاربردی",
    contact_title: "راه های ارتباطی",
    contact_hint: "سریع و مستقیم",
    contact_instagram: "اینستاگرام",

    contact_linkedin: "لینکدین",
    contact_github: "گیت‌هاب",
    contact_youtube: "یوتیوب",
    contact_whatsapp: "واتساپ",
    contact_telegram: "تلگرام",
    contact_call: "تماس",
    contact_email: "ایمیل",

    // stats
    stat_days: "روز فعالیت:",
    stat_projects: "پروژه انجام شده:",

    // projects
    projects_title: "پروژه ها",
    projects_hint: "فیلتر و مشاهده کامل",
    filter_all: "همه",
    filter_landing: "لندینگ",
    filter_dashboard: "داشبورد",
    filter_shop: "فروشگاهی",
    filter_ui: "UI",
    view: "مشاهده",
    request_similar: "درخواست مشابه",
    no_projects: "پروژه‌ای برای این فیلتر موجود نیست.",
    project_image_alt_prefix: "تصویر پروژه:",

    // collab
    collab_title: "همکاری",
    help: "راهنما",
    help_1: "نوع پروژه را انتخاب کن (فقط یک مورد).",
    help_2: "بودجه تقریبی را مشخص کن.",
    help_3: "در صورت نیاز توضیحات پروژه را بنویس.",
    help_4: "در پایان، پیام آماده را در واتساپ یا تلگرام ارسال کن.",
    project_type: "نوع پروژه",
    only_one: "فقط یک مورد",
    budget: "بودجه",
    estimated: "تقریبی",
    notes_label: "توضیحات پروژه (اختیاری)",
    notes_placeholder:
      "مثلاً صفحات موردنیاز، نمونه مشابه، زمان‌بندی، تکنولوژی‌ها و...",
    summary_project: "پروژه",
    summary_budget: "بودجه",
    whatsapp: "واتساپ",
    telegram: "تلگرام",
    helper_line: "بعد از ارسال پیام، هماهنگی ادامه پیدا می‌کند.",

    faq_title: "سوالات متداول",
    faq_hint: "کوتاه و مفید",
    faq_q1: "روند همکاری چطور است؟",
    faq_a1:
      "اطلاعات پروژه را ارسال می‌کنی، زمان/بودجه را هماهنگ می‌کنیم، سپس توسعه شروع می‌شود و در نهایت نسخه نهایی تحویل داده می‌شود.",
    faq_q2: "آیا سایت بهینه و سریع خواهد بود؟",
    faq_a2:
      "بله، تمرکز اصلی روی عملکرد، ریسپانسیو بودن و تجربه کاربری روان است.",
    faq_q3: "اگر پروژه خصوصی باشد چی؟",
    faq_a3:
      "می‌توانیم فقط تصاویر یا بخش‌های قابل نمایش را قرار دهیم و جزئیات حساس را حذف کنیم.",
    faq_q4: "چه زمانی پاسخ می‌دهی؟",
    faq_a4: "در سریع‌ترین زمان ممکن پس از بررسی پیام پاسخ داده می‌شود.",

    // toast
    toast_collab_below: "فرم همکاری رو کامل کن",
    toast_choose_required: "لطفاً نوع پروژه و بودجه را انتخاب کن",
    toast_project_selected: "نوع پروژه برای همکاری انتخاب شد",
    toast_pwa_unavailable:
      "گزینه نصب در حال حاضر فعال نیست. از منوی مرورگر گزینه Add to Home Screen را انتخاب کن.",
    toast_pwa_install_started: "درخواست نصب باز شد",
    toast_pwa_install_cancelled: "نصب لغو شد",
    toast_pwa_install_error: "اجرای نصب با خطا مواجه شد",
    toast_pwa_installed: "وب اپ با موفقیت نصب شد",

    // message text
    msg_hello: "سلام 👋",
    msg_intro: "برای همکاری پیام می‌دم.",
    msg_label_project: "نوع پروژه",
    msg_label_budget: "بودجه",
    msg_notes: "توضیحات:",
    msg_thanks: "ممنون 🙏",

    // footer
    footer_title: "HesamCode",
    footer_note: "توسعه دهنده فرانت اند",
    back_to_top: "رفتن به بالا",
    quick_contact: "ارتباط سریع",
    call: "تماس",

    // misc
    toggle_theme: "تغییر تم",
    close: "بستن",
  },

  en: {
    hero_name: "HesamCode",
    hero_headline: "Front-End Developer",
    hero_subtext: "Building modern and responsive websites",
    cta_collab: "Request collaboration",
    pwa_ready: "Web app is ready to install",
    pwa_install_btn: "Install app",
    pwa_installing: "Installing...",
    footer_copy: "All rights reserved | HesamCode",

    tab_about: "About",
    tab_projects: "Projects",
    tab_collab: "Collaboration",

    about_title: "About Me",
    about_text:
      "I'm HesamCode — a front-end developer focused on modern UI, high performance, responsive layouts, and clean user experience. My goal is to build websites that look great, load fast, and are easy to maintain.",
    skills_title: "Skills",
    skills_hint: "Core",
    contact_title: "Contact",
    contact_hint: "Fast & direct",

    contact_instagram: "Instagram",
    contact_linkedin: "LinkedIn",
    contact_github: "GitHub",
    contact_youtube: "YouTube",
    contact_whatsapp: "WhatsApp",
    contact_telegram: "Telegram",
    contact_call: "Call",
    contact_email: "Email",

    stat_days: "Active days:",
    stat_projects: "Completed projects:",

    projects_title: "Projects",
    projects_hint: "Filter & view",
    filter_all: "All",
    filter_landing: "Landing",
    filter_dashboard: "Dashboard",
    filter_shop: "Shop",
    filter_ui: "UI",
    view: "View",
    request_similar: "Request similar",
    no_projects: "No projects found for this filter.",
    project_image_alt_prefix: "Project image:",

    collab_title: "Collaboration",
    help: "Help",
    help_1: "Select a project type (only one).",
    help_2: "Choose an estimated budget.",
    help_3: "Add optional project notes.",
    help_4: "Send the prepared message via WhatsApp or Telegram.",
    project_type: "Project type",
    only_one: "Only one",
    budget: "Budget",
    estimated: "Estimated",
    notes_label: "Project notes (optional)",
    notes_placeholder: "Pages needed, examples, timeline, tech stack, etc.",
    summary_project: "Project",
    summary_budget: "Budget",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    helper_line: "I’ll reply as soon as possible after reviewing your message.",

    faq_title: "FAQ",
    faq_hint: "Short & useful",
    faq_q1: "What’s the collaboration process?",
    faq_a1:
      "You send the project details, we align on time/budget, development starts, and the final version is delivered.",
    faq_q2: "Will the website be optimized and fast?",
    faq_a2:
      "Yes — the main focus is performance, responsiveness, and a smooth user experience.",
    faq_q3: "What if my project is private?",
    faq_a3:
      "We can showcase only non-sensitive parts and remove confidential details.",
    faq_q4: "When will you reply?",
    faq_a4: "I’ll respond as soon as possible after reviewing your message.",

    toast_collab_below: "Complete the collaboration form",
    toast_choose_required: "Please select project type and budget",
    toast_project_selected: "Project type selected for collaboration",
    toast_pwa_unavailable:
      "Install is not available right now. Use browser menu and choose Add to Home Screen.",
    toast_pwa_install_started: "Install prompt opened",
    toast_pwa_install_cancelled: "Install cancelled",
    toast_pwa_install_error: "Failed to start installation",
    toast_pwa_installed: "Web app installed successfully",

    msg_hello: "Hello 👋",
    msg_intro: "I'm reaching out for collaboration.",
    msg_label_project: "Project type",
    msg_label_budget: "Budget",
    msg_notes: "Notes:",
    msg_thanks: "Thanks 🙏",

    footer_title: "HesamCode",
    footer_note: "Front-end Developer",
    back_to_top: "Back to top",
    quick_contact: "Quick contact",
    call: "Call",

    toggle_theme: "Toggle theme",
    close: "Close",
  },
};

export function t(lang: Lang, key: string) {
  return I18N[lang]?.[key] ?? I18N.en[key] ?? key;
}
