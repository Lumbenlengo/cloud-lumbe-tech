# Instructions for coding agents

- This repository is the AWS Cloud services website only. Keep AI Automation with Make services on the separate main website.
- Preserve all four languages: English (`en`), Portuguese (`pt`), French (`fr`) and Spanish (`es`). Add or update the corresponding content for every language when changing public copy.
- Keep the static export configuration in `next.config.ts`. The production host is Firebase Hosting and the generated site is in `out/`.
- Do not add a server runtime, API route, database or form processor without an explicit project decision.
- Do not add tracking scripts, third party form providers or externally hosted fonts without reviewing the privacy and Content Security Policy implications.
- Never add AWS credentials, Firebase service account keys, customer data or other secrets to this repository.
- Keep the separate Firebase Hosting target `cloud-lumbe-tech`. Do not replace or reuse the `lumbetech` target for the current main website.
- Before changing Next.js code, read the matching guide from `node_modules/next/dist/docs/` for the installed Next.js version. The project currently pins Next.js 16.3.5.
- Run `npm run typecheck` and `npm run build` before considering a change complete.
- Public marketing copy must be direct and human. Do not promise a fixed percentage of savings, guaranteed security, zero downtime or formal certification unless a separately verified scope supports the claim.
