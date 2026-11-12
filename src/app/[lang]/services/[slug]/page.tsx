import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { LANGUAGES, SERVICE_META, SERVICES, isLang, isServiceSlug, type Lang, type ServiceSlug } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGUAGES.flatMap(({ code }) => SERVICE_META.map(({ slug }) => ({ lang: code, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLang(lang) || !isServiceSlug(slug)) return {};
  const service = SERVICES[lang][slug];
  return {
    title: service.title,
    description: service.card,
    alternates: {
      canonical: `/${lang}/services/${slug}/`,
      languages: {
        en: `/en/services/${slug}/`,
        pt: `/pt/services/${slug}/`,
        fr: `/fr/services/${slug}/`,
        es: `/es/services/${slug}/`,
      },
    },
    openGraph: {
      title: `${service.title} | Lumbe Tech Cloud`,
      description: service.card,
      type: "website",
      locale: lang === "pt" ? "pt_PT" : lang === "fr" ? "fr_FR" : lang === "es" ? "es_ES" : "en_US",
    },
  };
}

export default async function LocalizedService({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!isLang(lang) || !isServiceSlug(slug)) notFound();
  return <ServicePage lang={lang as Lang} slug={slug as ServiceSlug} />;
}
