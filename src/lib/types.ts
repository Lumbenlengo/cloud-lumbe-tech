export type Lang = "en" | "pt" | "fr" | "es";
export type ServiceSlug = "finops" | "security" | "migration" | "backup" | "monitoring" | "devops";

type FAQ = { q: string; a: string };
export type ServiceCopy = {
  title: string;
  card: string;
  kicker: string;
  intro: string;
  problemTitle: string;
  problem: string;
  solutionTitle: string;
  solution: string;
  benefits: string[];
  includedTitle: string;
  included: string[];
  approachTitle: string;
  approach: string[];
  faqs: FAQ[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
};

export type HomeCopy = {
  nav: string[]; navCta: string; eyebrow: string; heroTitle: string; heroText: string; primaryCta: string; secondaryCta: string; heroNote: string; trustTitle: string; trustItems: string[]; servicesEyebrow: string; servicesTitle: string; servicesIntro: string; cardCta: string; outcomesEyebrow: string; outcomesTitle: string; outcomes: {title:string;text:string}[]; processEyebrow: string; processTitle: string; processIntro: string; steps: {title:string;text:string}[]; proofEyebrow: string; proofTitle: string; proofIntro: string; proof: {title:string;text:string;tag:string;href:string;link:string}[]; aboutEyebrow: string; aboutTitle: string; aboutText: string; credentials: string[]; education: string; faqEyebrow: string; faqTitle: string; faqs: {q:string;a:string}[]; contactEyebrow: string; contactTitle: string; contactText: string; contactCta: string; emailNote: string; footerLine: string; footerServices: string; footerCompany: string; footerContact: string; footerPrivacy: string; detailLabel: string; backHome: string; faqLabel: string;
};
