# Lumbe Tech Cloud project context

This repository contains the dedicated AWS Cloud services website for Lumbe Tech. It is intentionally separate from the main Lumbe Tech website, which retains AI Automation with Make services.

## Stack and deployment

- Next.js 16.3.5, React 19.2.8 and TypeScript
- Static export to `out/`
- Firebase Hosting on the dedicated target `cloud-lumbe-tech`
- Intended website hostname: `cloud.lumbetech.com`
- Four languages: English, Portuguese, French and Spanish

## Main service offers

1. AWS Cost Optimization and FinOps
2. AWS Security and Compliance Readiness
3. AWS Cloud Architecture and Migration
4. AWS Backup and Disaster Recovery
5. AWS Monitoring and Reliability
6. AWS DevOps, CI/CD and Container Platforms

## Important boundaries

Do not deploy this project to the existing `lumbetech` Firebase Hosting target. Do not introduce AI Automation with Make pages or copy. Keep the website static unless the owner explicitly approves a backend. Contact links currently use `mailto:contact@lumbetech.com` and do not collect visitor data.

Read `README.md`, `FIREBASE_SETUP.md` and `AGENTS.md` before making structural changes.
