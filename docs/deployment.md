# Cloudflare Pages Deployment Guide

This guide documents the complete procedure for deploying the **Personal Money Manager** public website and Windows download portal to **Cloudflare Pages**.

---

## 1. Hosting Architecture Overview

- **Hosting Platform**: Cloudflare Pages (Static Edge CDN)
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Build Output Directory**: `dist`
- **Node.js Version**: 20+ (Specified in project configuration)
- **Database / Backend**: None. Zero server-side database or API backend required.
- **SPA Routing**: Handled via `public/_redirects` (`/* /index.html 200`).
- **Security Headers**: Enforced via `public/_headers` (HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy).

---

## 2. Step-by-Step Deployment Instructions

### Step 1: Initialize Git Repository for the Website

If you have not already initialized Git inside `personal-money-manager-site`:

```bash
cd "personal-money-manager-site"
git init
git add .
git commit -m "feat: initial commit of personal money manager website"
```

### Step 2: Push to GitHub

Create a new repository on GitHub (e.g. `personal-money-manager-site`). Keep this repository separate from the desktop software source repository unless you intentionally maintain a monorepo.

```bash
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/personal-money-manager-site.git
git branch -M main
git push -u origin main
```

### Step 3: Connect Repository to Cloudflare Pages

1. Log into your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left-hand sidebar, navigate to **Compute (Workers & Pages)** → **Pages**.
3. Click **Create application** → **Pages** → **Connect to Git**.
4. Select your GitHub account and authorize Cloudflare.
5. Choose your repository: `personal-money-manager-site` and click **Begin setup**.

### Step 4: Configure Cloudflare Pages Build Settings

In the build settings screen, enter the exact verified values:

| Setting | Value |
| :--- | :--- |
| **Project Name** | `personal-money-manager` (or your chosen name) |
| **Production Branch** | `main` |
| **Framework Preset** | `Vite` |
| **Build Command** | `npm run build` |
| **Build Output Directory** | `dist` |
| **Root Directory** | *(Leave blank if the site is in the root of the repo)* |

#### Environment Variables (Optional)
Under **Environment Variables**, you can set:
- `NODE_VERSION`: `20.18.0` (or `22.x`)

### Step 5: Save and Deploy

1. Click **Save and Deploy**.
2. Cloudflare Pages will run `npm install`, compile the Vite production bundle into `dist`, copy `_redirects` and `_headers`, and deploy to a global edge URL (e.g. `https://personal-money-manager.pages.dev`).
3. Once the build completes (typically 30–60 seconds), visit the production URL to verify the site.

---

## 3. Post-Deployment Verification Checklist

Verify the live site from an unauthenticated browser window (e.g. incognito mode):

- [ ] **Home Page Loads**: Check that hero text, feature cards, and illustrative dashboard render cleanly.
- [ ] **Navigation & SPA Routing**: Click each nav link (`/download`, `/features`, `/guide`, `/privacy`, `/releases`). Reload the browser on `/download` to verify `_redirects` serves `index.html` without 404.
- [ ] **Download Link**: Verify the download button points to the intended release asset URL.
- [ ] **Security Headers**: Inspect HTTP response headers using browser DevTools or `curl -I https://<your-project>.pages.dev`:
  - `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
- [ ] **Zero Secrets**: Confirm no API tokens, private keys, or passwords exist in JavaScript bundle chunks.

---

## 4. Configuring a Custom Domain (Optional)

1. In the Cloudflare dashboard, go to **Pages** → select `personal-money-manager`.
2. Select the **Custom domains** tab.
3. Click **Set up a custom domain**.
4. Enter your custom apex domain or subdomain (e.g. `getpmm.com` or `download.yourdomain.com`).
5. Cloudflare will automatically configure DNS records and provision a free universal SSL/TLS certificate.
6. Once active, update `websiteUrl` in `src/config/product.ts` and commit.

---

## 5. Rollback Procedure for Broken Deployments

Cloudflare Pages creates an immutable preview deployment for every commit and branch push. If a broken build is deployed to production:

1. Open Cloudflare Dashboard → **Workers & Pages** → `personal-money-manager`.
2. Click the **Deployments** tab.
3. Locate the last known working deployment.
4. Click the three dots (`...`) next to that deployment and select **Rollback to this deployment**.
5. The rollback is instantaneous across Cloudflare's global edge network.
