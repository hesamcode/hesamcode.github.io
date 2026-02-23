// src/data/types.ts
export type Lang = "fa" | "en";
export type Theme = "dark" | "light";

export type ProjectTypeId = "landing" | "dashboard" | "shop" | "ui";

export type I18nText = Record<Lang, string>;

export type Project = {
  id: string;
  type: ProjectTypeId;
  title: I18nText;
  desc: I18nText;
  tags: string[];
  link: string;
  cover?: string; // optional (you said no images for now)
};

export type ChipOption = {
  id: string;
  label: I18nText;
};
