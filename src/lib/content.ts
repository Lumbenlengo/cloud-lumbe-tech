import { HOME, LANGUAGES, SERVICE_META } from "./home";
import { SERVICES_EN } from "./services-en";
import { SERVICES_PT } from "./services-pt";
import { SERVICES_FR } from "./services-fr";
import { SERVICES_ES } from "./services-es";
import type { Lang, ServiceSlug, ServiceCopy } from "./types";

export type { Lang, ServiceSlug, ServiceCopy } from "./types";
export { HOME, LANGUAGES, SERVICE_META };

export const SERVICES = {
  en: SERVICES_EN,
  pt: SERVICES_PT,
  fr: SERVICES_FR,
  es: SERVICES_ES,
} satisfies Record<Lang, Record<ServiceSlug, ServiceCopy>>;

export function isLang(value: string): value is Lang {
  return LANGUAGES.some((item) => item.code === value);
}

export function isServiceSlug(value: string): value is ServiceSlug {
  return SERVICE_META.some((item) => item.slug === value);
}

export function homePath(lang: Lang): string {
  return lang === "en" ? "/" : `/${lang}/`;
}

export function servicePath(lang: Lang, slug: ServiceSlug): string {
  return `/${lang}/services/${slug}/`;
}
