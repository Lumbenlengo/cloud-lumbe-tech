import Link from "next/link";
import { HOME, LANGUAGES, SERVICE_META, SERVICES, homePath, servicePath, type Lang, type ServiceSlug } from "@/lib/content";

function mailto(subject: string) {
  return `mailto:contact@lumbetech.com?subject=${encodeURIComponent(subject)}`;
}

export function SiteHeader({ lang, currentSlug }: { lang: Lang; currentSlug?: ServiceSlug }) {
  const copy = HOME[lang];
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href={homePath(lang)} aria-label="Lumbe Tech Cloud home">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span className="brand-word">lumbe<span>tech</span><small> CLOUD ENGINEERING</small></span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <a href={`${homePath(lang)}#services`}>{copy.nav[0]}</a>
          <a href={`${homePath(lang)}#how-we-work`}>{copy.nav[1]}</a>
          <a href={`${homePath(lang)}#engineering`}>{copy.nav[2]}</a>
          <a href={`${homePath(lang)}#about`}>{copy.nav[3]}</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="Choose language">
            {LANGUAGES.map((item) => {
              const href = currentSlug ? servicePath(item.code, currentSlug) : homePath(item.code);
              return <Link key={item.code} href={href} hrefLang={item.code} aria-current={item.code === lang ? "page" : undefined} title={item.name}>{item.label}</Link>;
            })}
          </div>
          <a className="button button-small button-dark" href={mailto("AWS Cloud Engineering conversation")}>{copy.navCta}</a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter({ lang }: { lang: Lang }) {
  const copy = HOME[lang];
  return (
    <footer className="site-footer">
      <div className="footer-main wrap">
        <div className="footer-brand-block">
          <Link className="brand brand-footer" href={homePath(lang)}>
            <span className="brand-mark" aria-hidden="true"><span /></span>
            <span className="brand-word">lumbe<span>tech</span><small> CLOUD ENGINEERING</small></span>
          </Link>
          <p>{copy.footerLine}</p>
        </div>
        <div className="footer-column">
          <h3>{copy.footerServices}</h3>
          {SERVICE_META.map(({ slug }) => <Link key={slug} href={servicePath(lang, slug)}>{SERVICES[lang][slug].title}</Link>)}
        </div>
        <div className="footer-column">
          <h3>{copy.footerCompany}</h3>
          <a href={`${homePath(lang)}#how-we-work`}>{copy.nav[1]}</a>
          <a href={`${homePath(lang)}#engineering`}>{copy.nav[2]}</a>
          <a href={`${homePath(lang)}#about`}>{copy.nav[3]}</a>
        </div>
        <div className="footer-column">
          <h3>{copy.footerContact}</h3>
          <a href={mailto("AWS Cloud Engineering conversation")}>contact@lumbetech.com</a>
          <span>cloud.lumbetech.com</span>
          <p className="footer-privacy">{copy.footerPrivacy}</p>
        </div>
      </div>
      <div className="footer-bottom wrap">
        <span>© 2026 Lumbe Tech. All rights reserved.</span>
        <span>Designed for clarity, security and practical delivery.</span>
      </div>
    </footer>
  );
}

export function ContactLink({ lang, label, subject, className = "button button-primary" }: { lang: Lang; label?: string; subject?: string; className?: string }) {
  const text = label ?? HOME[lang].contactCta;
  return <a className={className} href={mailto(subject ?? "AWS Cloud Services enquiry")}>{text}<span aria-hidden="true"> ↗</span></a>;
}
