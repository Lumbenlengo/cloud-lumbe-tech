import type { Lang, ServiceSlug } from "./types";
import { HOME_EN } from "./home-en";
import { HOME_PT } from "./home-pt";
import { HOME_FR } from "./home-fr";
import { HOME_ES } from "./home-es";

export const LANGUAGES: { code: Lang; label: string; name: string }[] = [
  { code: "en", label: "EN", name: "English" },
  { code: "pt", label: "PT", name: "Português" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "es", label: "ES", name: "Español" }
];

export const SERVICE_META: { slug: ServiceSlug; icon: string; number: string }[] = [
  { slug: "finops", icon: "$", number: "01" },
  { slug: "security", icon: "◇", number: "02" },
  { slug: "migration", icon: "↗", number: "03" },
  { slug: "backup", icon: "↻", number: "04" },
  { slug: "monitoring", icon: "◉", number: "05" },
  { slug: "devops", icon: "⌘", number: "06" }
];

export const HOME = {
  en: HOME_EN,
  pt: HOME_PT,
  fr: HOME_FR,
  es: HOME_ES
};
