import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://cloud.lumbetech.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lumbe Tech Cloud | AWS Cloud Engineering for Business",
    template: "%s | Lumbe Tech Cloud",
  },
  description: "Practical AWS cloud engineering for businesses. Cost optimization, security, migration, backup, monitoring and DevOps services.",
  applicationName: "Lumbe Tech Cloud",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      pt: "/pt/",
      fr: "/fr/",
      es: "/es/",
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Lumbe Tech Cloud",
    title: "Lumbe Tech Cloud | AWS Cloud Engineering for Business",
    description: "Secure your cloud, control AWS spend and build reliable systems with practical engineering.",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Lumbe Tech Cloud | AWS Cloud Engineering for Business",
    description: "Practical AWS cloud engineering for businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7fafc",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
