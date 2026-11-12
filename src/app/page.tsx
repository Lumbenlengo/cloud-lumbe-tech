import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { HOME } from "@/lib/content";

export const metadata: Metadata = {
  title: "Lumbe Tech Cloud | AWS Cloud Engineering for Business",
  description: HOME.en.heroText,
  alternates: {
    canonical: "/",
    languages: { en: "/", pt: "/pt/", fr: "/fr/", es: "/es/" },
  },
};

export default function Page() {
  return <HomePage lang="en" />;
}
