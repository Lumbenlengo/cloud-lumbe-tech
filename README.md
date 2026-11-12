# Lumbe Tech Cloud

A dedicated AWS cloud services website for Lumbe Tech. This project separates AWS cloud engineering from the AI Automation with Make offering on the main Lumbe Tech website.

## What is included

The site is built with Next.js 16, React 19 and TypeScript. It uses static export, so the production website is a set of static files in `out/` and can be hosted by Firebase Hosting without a Node.js server.

Six B2B services have their own detail pages, practical explanations, implementation steps, business benefits and FAQs:

1. AWS Cost Optimization and FinOps
2. AWS Security and Compliance Readiness
3. AWS Cloud Architecture and Migration
4. AWS Backup and Disaster Recovery
5. AWS Monitoring and Reliability
6. AWS DevOps, CI/CD and Container Platforms

The site includes English, Portuguese, French and Spanish. English is the default language at `/`. The translated home pages are `/pt/`, `/fr/` and `/es/`. Each service page has all four language versions under `/{lang}/services/{service}/`.

## Local development

Requirements: Node.js 22 or newer and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Before publishing, run:

```bash
npm run typecheck
npm run build
```

The static website is generated in `out/`. The first `npm install` also creates `package-lock.json`; keep that lockfile in Git when you publish the repository so future installs remain reproducible.

## Firebase Hosting

The project is prepared for a separate Firebase Hosting site named `cloud-lumbe-tech`. This is important: do not deploy it to the existing `lumbetech` Hosting target, because that target belongs to the current main website.

The `.firebaserc` file retains the Firebase project ID found in the current `lumbe-tech-site` repository and maps a separate Hosting target named `cloud-lumbe-tech` to a Hosting site with the same ID. Confirm that this is the Firebase project you intend to use before deploying.

1. Install the Firebase CLI if it is not already installed:

   ```bash
   npm install -g firebase-tools
   ```

2. Sign in and confirm the selected project:

   ```bash
   firebase login
   firebase projects:list
   firebase use project-5c15975f-e002-4ccf-b67
   ```

3. Check whether the separate Hosting site already exists:

   ```bash
   firebase hosting:sites:list --project project-5c15975f-e002-4ccf-b67
   ```

4. If `cloud-lumbe-tech` is not listed, create it:

   ```bash
   firebase hosting:sites:create cloud-lumbe-tech --project project-5c15975f-e002-4ccf-b67
   ```

5. Confirm the target mapping in `.firebaserc`. If you create the site with a different Hosting site ID, update the mapping using:

   ```bash
   firebase target:apply hosting cloud-lumbe-tech YOUR_HOSTING_SITE_ID --project project-5c15975f-e002-4ccf-b67
   ```

6. Build and deploy only the new Hosting target:

   ```bash
   npm install
   npm run typecheck
   npm run build
   firebase deploy --only hosting:cloud-lumbe-tech --project project-5c15975f-e002-4ccf-b67
   ```

7. In Firebase Hosting, add the custom domain `cloud.lumbetech.com` to the new `cloud-lumbe-tech` Hosting site. Follow the DNS records Firebase provides and wait for domain verification and SSL provisioning before announcing the site.

The existing main site uses a different Hosting target, `lumbetech`. This project deliberately does not reuse that target and does not include the old `/api/contact` rewrite. Contact links open the visitor's mail application at `contact@lumbetech.com`; there is no form endpoint or stored contact data in this static site.

## Domain note

The configuration uses `https://cloud.lumbetech.com`, which is the normal format for a subdomain. `cloud@lumbetech.com` is formatted as an email address, not a web subdomain. If you intended to create a mailbox instead, that is a separate email configuration task.

## Security choices

- Static export only. No runtime server, database, secrets or public API endpoints are required.
- Contact actions use `mailto:` and do not collect or store visitor information.
- Firebase Hosting is configured with HTTPS, HSTS, content type protection, clickjacking protection, a restrictive permissions policy and a Content Security Policy.
- No analytics, advertising tags, remote fonts or third party form scripts are included.
- CI uses the minimum GitHub Actions permission needed to read the repository and runs a type check plus production build.
- AWS access for any future customer engagement should use an agreed, scoped access model. Never place AWS access keys or customer credentials in this website repository.

## Source projects used to shape the service offering

- [production-ready-aws-infrastructure](https://github.com/Lumbenlengo/production-ready-aws-infrastructure): Terraform networking, compute, load balancing, WAF, GuardDuty, Security Hub, IAM Access Analyzer, AWS Config, CloudTrail, CloudWatch, Secrets Manager, KMS and AWS Backup.
- [eks-gitops-platform](https://github.com/Lumbenlengo/eks-gitops-platform): Amazon EKS, Terraform, ArgoCD, OIDC, IRSA, KEDA, SQS, DynamoDB, Prometheus and Grafana. Its own cost notes are used as a reason to recommend EKS selectively rather than for every workload.
- [AWS_AI_SERVERLESS_OPS](https://github.com/Lumbenlengo/AWS_AI_SERVERLESS_OPS): CloudWatch, EventBridge, Step Functions, Lambda, SNS and operational workflows inform the monitoring and reliability offering. This is a cloud engineering example and is not presented as Make automation.

The website describes commercial service scopes, not guarantees. Savings depend on actual usage, recovery depends on the agreed objectives, and a readiness assessment is not a formal compliance certification.
