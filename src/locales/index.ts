import { en, Translations } from "./en";
import { ru } from "./ru";

export function getDictionary(locale: string = "en"): Translations {
  return locale === "ru" ? ru : en;
}

export type { Translations };
