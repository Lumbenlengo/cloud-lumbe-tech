import Link from "next/link";
import { HOME, SERVICE_META, SERVICES, servicePath, type Lang } from "@/lib/content";
import { ContactLink, SiteFooter, SiteHeader } from "@/components/SiteChrome";

export default function HomePage({ lang }: { lang: Lang }) {
  const copy = HOME[lang];
  return (
    <div lang={lang} className="site-shell">
      <SiteHeader lang={lang} />
      <main id="top">
        <section className="hero-section">
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />
          <div className="wrap hero-layout">
            <div className="hero-copy">
              <p className="eyebrow"><span className="status-dot" />{copy.eyebrow}</p>
              <h1>{copy.heroTitle}</h1>
              <p className="hero-lede">{copy.heroText}</p>
              <div className="hero-buttons">
                <a className="button button-primary" href="#services">{copy.primaryCta}<span aria-hidden="true"> ↓</span></a>
                <ContactLink lang={lang} label={copy.secondaryCta} className="button button-outline" />
              </div>
              <p className="hero-note"><span aria-hidden="true">✓</span>{copy.heroNote}</p>
            </div>
            <div className="hero-visual" role="img" aria-label="Illustration of a connected AWS cloud environment">
              <div className="visual-topline"><span>YOUR AWS ENVIRONMENT</span><span className="live-indicator">● {lang === "pt" ? "VISÃO CLARA" : lang === "fr" ? "VUE CLAIRE" : lang === "es" ? "VISIÓN CLARA" : "CLEAR VIEW"}</span></div>
              <div className="cloud-diagram">
                <div className="cloud-orbit orbit-a" /><div className="cloud-orbit orbit-b" />
                <div className="cloud-core"><span className="cloud-symbol">☁</span><strong>AWS</strong><small>BUILT AROUND YOUR BUSINESS</small></div>
                <div className="node node-security"><b>01</b><span>{lang === "pt" ? "Segurança" : lang === "fr" ? "Sécurité" : lang === "es" ? "Seguridad" : "Security"}</span></div>
                <div className="node node-cost"><b>02</b><span>{lang === "pt" ? "Custos" : lang === "fr" ? "Coûts" : lang === "es" ? "Costes" : "Cost"}</span></div>
                <div className="node node-ops"><b>03</b><span>{lang === "pt" ? "Operações" : lang === "fr" ? "Opérations" : lang === "es" ? "Operaciones" : "Operations"}</span></div>
                <div className="node node-delivery"><b>04</b><span>{lang === "pt" ? "Entrega" : lang === "fr" ? "Livraison" : lang === "es" ? "Entrega" : "Delivery"}</span></div>
              </div>
              <div className="visual-footer"><span>SECURE</span><i /><span>OBSERVABLE</span><i /><span>READY TO GROW</span></div>
            </div>
          </div>
          <div className="hero-bottom-line"><div className="wrap"><span>{copy.trustTitle}</span><div>{copy.trustItems.map((item) => <span className="trust-chip" key={item}>{item}</span>)}</div></div></div>
        </section>

        <section className="section wrap" id="services">
          <div className="section-heading">
            <div><p className="eyebrow">{copy.servicesEyebrow}</p><h2>{copy.servicesTitle}</h2></div>
            <p className="section-intro">{copy.servicesIntro}</p>
          </div>
          <div className="service-grid">
            {SERVICE_META.map(({ slug, icon, number }) => {
              const service = SERVICES[lang][slug];
              return (
                <article className="service-card" key={slug}>
                  <div className="service-card-top"><span className="service-icon" aria-hidden="true">{icon}</span><span className="service-number">{number}</span></div>
                  <p className="service-kicker">{service.kicker}</p>
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.card}</p>
                  <Link className="button button-outline button-small service-button" href={servicePath(lang, slug)}>{copy.cardCta}<span aria-hidden="true"> ↗</span></Link>
                </article>
              );
            })}
          </div>
        </section>

        <section className="outcomes-section" id="results">
          <div className="wrap section">
            <div className="section-heading section-heading-light">
              <div><p className="eyebrow">{copy.outcomesEyebrow}</p><h2>{copy.outcomesTitle}</h2></div>
            </div>
            <div className="outcome-grid">
              {copy.outcomes.map((item, index) => <article className="outcome-item" key={item.title}><span className="outcome-index">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section wrap" id="how-we-work">
          <div className="section-heading">
            <div><p className="eyebrow">{copy.processEyebrow}</p><h2>{copy.processTitle}</h2></div>
            <p className="section-intro">{copy.processIntro}</p>
          </div>
          <div className="process-grid">
            {copy.steps.map((step, index) => <article className="process-step" key={step.title}><span className="process-number">0{index + 1}</span><div className="process-line" /><h3>{step.title}</h3><p>{step.text}</p></article>)}
          </div>
        </section>

        <section className="proof-section" id="engineering">
          <div className="wrap section">
            <div className="section-heading">
              <div><p className="eyebrow">{copy.proofEyebrow}</p><h2>{copy.proofTitle}</h2></div>
              <p className="section-intro">{copy.proofIntro}</p>
            </div>
            <div className="proof-grid">
              {copy.proof.map((item, index) => <article className="proof-card" key={item.href}><div className="proof-visual" aria-hidden="true"><div className={`proof-symbol proof-symbol-${index + 1}`}>{index === 0 ? "AWS" : "EKS"}</div><div className="proof-lines"><i /><i /><i /></div><span>{item.tag}</span></div><div className="proof-copy"><p className="proof-tag">{item.tag}</p><h3>{item.title}</h3><p>{item.text}</p><a className="text-link" href={item.href} target="_blank" rel="noopener noreferrer">{item.link}<span aria-hidden="true"> ↗</span></a></div></article>)}
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="wrap about-layout section">
            <div className="about-monogram" aria-hidden="true"><span>PL</span><i>PT · AWS</i></div>
            <div className="about-copy"><p className="eyebrow">{copy.aboutEyebrow}</p><h2>{copy.aboutTitle}</h2><p>{copy.aboutText}</p><div className="credential-list">{copy.credentials.map((item) => <span key={item}><b>✓</b>{item}</span>)}</div><p className="education-note">{copy.education}</p><ContactLink lang={lang} label={copy.navCta} subject="Conversation with Lumbe Tech Cloud" /></div>
          </div>
        </section>

        <section className="section wrap faq-section" id="faq">
          <div className="section-heading"><div><p className="eyebrow">{copy.faqEyebrow}</p><h2>{copy.faqTitle}</h2></div></div>
          <div className="faq-list">{copy.faqs.map((faq, index) => <details className="faq-item" key={faq.q} open={index === 0}><summary>{faq.q}<span aria-hidden="true">+</span></summary><p>{faq.a}</p></details>)}</div>
        </section>

        <section className="contact-section" id="contact">
          <div className="wrap contact-panel"><div><p className="eyebrow">{copy.contactEyebrow}</p><h2>{copy.contactTitle}</h2><p>{copy.contactText}</p><small>{copy.emailNote}</small></div><ContactLink lang={lang} label={copy.contactCta} subject="AWS Cloud Services enquiry" /></div>
        </section>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
