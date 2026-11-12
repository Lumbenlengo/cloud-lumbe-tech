import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePage from "@/components/HomePage";
import { HOME, isLang, type Lang } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "pt" }, { lang: "fr" }, { lang: "es" }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang) || lang === "en") return {};
  const copy = HOME[lang];
  return {
    title: `${copy.heroTitle} | Lumbe Tech Cloud`,
    description: copy.heroText,
    alternates: {
      canonical: `/${lang}/`,
      languages: { en: "/", pt: "/pt/", fr: "/fr/", es: "/es/" },
    },
    openGraph: {
      title: `${copy.heroTitle} | Lumbe Tech Cloud`,
      description: copy.heroText,
      type: "website",
      locale: lang === "pt" ? "pt_PT" : lang === "fr" ? "fr_FR" : "es_ES",
    },
  };
}

export default async function LocalizedHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang) || lang === "en") notFound();
  return <HomePage lang={lang as Lang} />;
}
