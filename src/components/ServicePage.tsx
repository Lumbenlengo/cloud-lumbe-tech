import Link from "next/link";
import { HOME, SERVICE_META, SERVICES, homePath, type Lang, type ServiceSlug } from "@/lib/content";
import { ContactLink, SiteFooter, SiteHeader } from "@/components/SiteChrome";

export default function ServicePage({ lang, slug }: { lang: Lang; slug: ServiceSlug }) {
  const copy = HOME[lang];
  const service = SERVICES[lang][slug];
  const meta = SERVICE_META.find((item) => item.slug === slug)!;
  return (
    <div lang={lang} className="site-shell">
      <SiteHeader lang={lang} currentSlug={slug} />
      <main id="top">
        <section className="detail-hero">
          <div className="wrap">
            <Link className="breadcrumb" href={homePath(lang)}>← {copy.backHome}</Link>
            <div className="detail-hero-grid">
              <div>
                <p className="eyebrow"><span className="status-dot" />{copy.detailLabel} · {meta.number}</p>
                <p className="detail-kicker">{service.kicker}</p>
                <h1>{service.title}</h1>
                <p className="detail-intro">{service.intro}</p>
                <ContactLink lang={lang} label={service.ctaLabel} subject={`${service.title} enquiry`} />
              </div>
              <div className="detail-visual" aria-hidden="true"><span className="detail-visual-number">{meta.number}</span><div className="detail-orbit orbit-one" /><div className="detail-orbit orbit-two" /><div className="detail-icon">{meta.icon}</div><div className="detail-visual-caption">LUMBE TECH · AWS</div></div>
            </div>
          </div>
        </section>

        <section className="section wrap detail-story">
          <article className="story-block story-problem"><p className="eyebrow">01 / {lang === "pt" ? "O DESAFIO" : lang === "fr" ? "LE DÉFI" : lang === "es" ? "EL RETO" : "THE CHALLENGE"}</p><h2>{service.problemTitle}</h2><p>{service.problem}</p></article>
          <article className="story-block story-solution"><p className="eyebrow">02 / {lang === "pt" ? "A SOLUÇÃO" : lang === "fr" ? "LA SOLUTION" : lang === "es" ? "LA SOLUCIÓN" : "THE SOLUTION"}</p><h2>{service.solutionTitle}</h2><p>{service.solution}</p></article>
        </section>

        <section className="detail-benefits-section"><div className="wrap section"><div className="section-heading"><div><p className="eyebrow">03 / {lang === "pt" ? "O QUE MELHORA" : lang === "fr" ? "CE QUI S'AMÉLIORE" : lang === "es" ? "QUÉ MEJORA" : "WHAT IMPROVES"}</p><h2>{lang === "pt" ? "O impacto que a empresa procura." : lang === "fr" ? "Les résultats recherchés par l'entreprise." : lang === "es" ? "El impacto que busca la empresa." : "The impact your business is looking for."}</h2></div></div><div className="benefit-grid">{service.benefits.map((item, index) => <div className="benefit-card" key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div></div></section>

        <section className="section wrap detail-included">
          <div className="section-heading"><div><p className="eyebrow">04 / {lang === "pt" ? "ENTREGÁVEIS" : lang === "fr" ? "LIVRABLES" : lang === "es" ? "ENTREGABLES" : "DELIVERABLES"}</p><h2>{service.includedTitle}</h2></div></div>
          <div className="included-list">{service.included.map((item) => <div className="included-item" key={item}><span aria-hidden="true">✓</span><p>{item}</p></div>)}</div>
        </section>

        <section className="process-detail-section"><div className="wrap section"><div className="section-heading"><div><p className="eyebrow">05 / {lang === "pt" ? "IMPLEMENTAÇÃO" : lang === "fr" ? "MISE EN ŒUVRE" : lang === "es" ? "IMPLEMENTACIÓN" : "IMPLEMENTATION"}</p><h2>{service.approachTitle}</h2></div></div><div className="detail-steps">{service.approach.map((item, index) => <div className="detail-step" key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div></div></section>

        <section className="section wrap faq-section detail-faq"><div className="section-heading"><div><p className="eyebrow">06 / {copy.faqLabel}</p><h2>{lang === "pt" ? "Respostas antes de começar." : lang === "fr" ? "Les réponses avant de commencer." : lang === "es" ? "Respuestas antes de empezar." : "Answers before you start."}</h2></div></div><div className="faq-list">{service.faqs.map((faq, index) => <details className="faq-item" key={faq.q} open={index === 0}><summary>{faq.q}<span aria-hidden="true">+</span></summary><p>{faq.a}</p></details>)}</div></section>

        <section className="contact-section"><div className="wrap contact-panel"><div><p className="eyebrow">LUMBE TECH · AWS CLOUD</p><h2>{service.ctaTitle}</h2><p>{service.ctaText}</p><small>{copy.emailNote}</small></div><ContactLink lang={lang} label={service.ctaLabel} subject={`${service.title} enquiry`} /></div></section>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
