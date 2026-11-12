# Security policy

## Website architecture

This site is a statically exported Next.js application hosted by Firebase Hosting. It has no application server, database, authentication area, visitor tracking or form processing endpoint.

## Reporting a concern

For a security concern relating to this website or its source code, contact `contact@lumbetech.com`. Please include the affected URL or file, the impact you observed and steps to reproduce it. Do not send credentials, customer data or other secrets by email.

## Operational guidance

- Never commit AWS access keys, Firebase service account keys, customer credentials or `.env` files.
- Use read only and least privilege access for assessments wherever possible.
- Use short lived credentials for implementation and CI/CD.
- Keep access to customer systems approved, scoped and logged.
- Review Firebase Hosting headers before changing the site's asset or script model.
