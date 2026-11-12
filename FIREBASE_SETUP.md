# Firebase Hosting setup

This repository is configured for a separate Firebase Hosting site. Do not deploy it to the `lumbetech` target used by the existing main website.

## 1. Confirm the Firebase project

The `.firebaserc` file currently points to the Firebase project ID already present in the `lumbe-tech-site` repository:

```text
project-5c15975f-e002-4ccf-b67
```

Check that this is the project you want to use:

```bash
firebase login
firebase projects:list
```

Change the `default` project in `.firebaserc` if you intend to use another project.

## 2. Create or identify the separate Hosting site

```bash
firebase hosting:sites:list --project project-5c15975f-e002-4ccf-b67
```

If there is no Hosting site named `cloud-lumbe-tech`, create one:

```bash
firebase hosting:sites:create cloud-lumbe-tech --project project-5c15975f-e002-4ccf-b67
```

The `.firebaserc` file maps the logical deployment target `cloud-lumbe-tech` to a Hosting site with that ID. If you use another site ID, update the mapping:

```bash
firebase target:apply hosting cloud-lumbe-tech YOUR_HOSTING_SITE_ID --project project-5c15975f-e002-4ccf-b67
```

## 3. Build and deploy only the new site

From the project directory:

```bash
npm install
npm run typecheck
npm run build
firebase deploy --only hosting:cloud-lumbe-tech --project project-5c15975f-e002-4ccf-b67
```

The build exports static files to `out/`.

## 4. Connect the subdomain

In Firebase Console, open Hosting for the `cloud-lumbe-tech` site and add this custom domain:

```text
cloud.lumbetech.com
```

Follow the DNS records shown by Firebase. Do not copy records from another Hosting site. Wait for domain verification and SSL certificate provisioning before announcing the website.

## Important naming distinction

`cloud.lumbetech.com` is a website subdomain. `cloud@lumbetech.com` is an email address. This project uses the website subdomain and uses `contact@lumbetech.com` as its contact email link.
