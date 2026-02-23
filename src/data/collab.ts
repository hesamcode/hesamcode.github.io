// src/data/collab.ts
import type { ChipOption } from "./types";

export const PROJECT_TYPES: ChipOption[] = [
  {
    id: "landing",
    label: { fa: "لندینگ / سایت شرکتی", en: "Landing / Company site" },
  },
  { id: "dashboard", label: { fa: "داشبورد / پنل", en: "Dashboard / Panel" } },
  { id: "shop", label: { fa: "فروشگاهی", en: "E-commerce" } },
  { id: "ui", label: { fa: "UI / کامپوننت", en: "UI / Components" } },
];

export const BUDGETS: ChipOption[] = [
  { id: "b1", label: { fa: "کمتر از ۱۰ میلیون", en: "Under 10M" } },
  { id: "b2", label: { fa: "۱۰ تا ۲۰ میلیون", en: "10M to 20M" } },
  { id: "b3", label: { fa: "۲۰ تا ۴۰ میلیون", en: "20M to 40M" } },
  { id: "b4", label: { fa: "۴۰+ میلیون", en: "40M+" } },
];
