# Personal Money Manager — Public Website & Windows Download Portal

A production-ready, accessible, statically deployable website and Windows software distribution portal for **Personal Money Manager** (PMM).

Built specifically for deployment on **Cloudflare Pages**, this portal provides comprehensive product documentation, release metadata, SHA-256 checksum verification guidance, system requirements, and direct integration with public **GitHub Releases**.

---

## 1. Project Overview & Verified Facts

- **Desktop Application Name**: Personal Money Manager
- **Current Version**: `1.0.0`
- **Target Platform**: Windows 10 & Windows 11 (64-bit, x64)
- **Installer Filename**: `Personal Money Manager-1.0.0-x64.exe` (NSIS target)
- **Local Storage Model**: 100% offline SQLite 3 database (`%APPDATA%\personal-money-manager\data\pmm.sqlite`)
- **Security**: Argon2id master credentials, WAL-safe backups, zero cloud transmission.
- **Website Architecture**: Fully static React SPA (Zero backend server, zero analytics trackers, zero cookies).

---

## 2. Technology Stack

- **Core**: React 18 + TypeScript (strict mode)
- **Bundler**: Vite 6
- **Routing**: React Router 6 (SPA with Cloudflare Pages `_redirects` support)
- **Styling**: Tailwind CSS 3.4 (Modern fintech design system, responsive, accessible)
- **Icons**: Lucide React
- **Testing**: Vitest + React Testing Library + JSDOM
- **Hosting Target**: Cloudflare Pages (`npm run build` → `dist/`)

---

## 3. Prerequisites

- **Node.js**: Node 20+ (x64) (Tested on Node v24.19.0)
- **npm**: npm 10+ (Tested on npm 11.17.0)
- **Git**: For version control and Cloudflare Pages continuous deployment

---

## 4. Local Development

### Install Dependencies
```bash
npm install
```

### Run Local Development Server
Starts the Vite dev server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

---

## 5. Automated Testing & Verification

Run all test suites (unit tests, configuration tests, component tests, routing tests):
```bash
npm run test
```

Run TypeScript strict type checking:
```bash
npm run typecheck
```

Run production build:
```bash
npm run build
```

---

## 6. Project Structure

```text
personal-money-manager-site/
├── index.html                   # Entry HTML with full SEO & Open Graph metadata
├── package.json                 # Dependencies and scripts
├── package-lock.json            # Exact dependency lockfile
├── tsconfig.json                # Strict TypeScript configuration
├── vite.config.ts               # Vite configuration with path aliases
├── vitest.config.ts             # Vitest test runner configuration
├── vitest.setup.ts              # JSDOM matchers & mock setups
├── tailwind.config.js           # Modern fintech design tokens & color palette
├── postcss.config.js            # PostCSS configuration for Tailwind
├── .gitignore                   # Ignores dist, node_modules, and binary executables
├── public/
│   ├── _redirects               # Cloudflare Pages SPA rewrite rule (/* /index.html 200)
│   ├── _headers                 # Strict security headers (CSP, HSTS, X-Frame-Options)
│   ├── favicon.svg              # Modern SVG wallet/shield logo icon
│   ├── robots.txt               # Search engine crawler instructions
│   └── sitemap.xml              # XML sitemap for SEO indexing
├── src/
│   ├── App.tsx                  # Root router & application wrapper
│   ├── main.tsx                 # React DOM mount point
│   ├── config/
│   │   └── product.ts           # MASTER CONFIGURATION: Release assets, URLs, paths
│   ├── types/
│   │   └── product.ts           # TypeScript interfaces for configuration
│   ├── components/
│   │   ├── layout/              # Header, Footer, and Layout
│   │   ├── ui/                  # Button, Badge, Card
│   │   ├── home/                # Hero, Preview, Features, How-It-Works, Privacy, FAQ
│   │   └── download/            # Download card, SHA-256 verification, SmartScreen, Specs
│   ├── pages/
│   │   ├── HomePage.tsx         # Complete product landing page
│   │   ├── DownloadPage.tsx     # Installer download & integrity portal
│   │   ├── FeaturesPage.tsx     # In-depth financial accounting rules
│   │   ├── GuidePage.tsx        # Step-by-step installation, backup & troubleshooting
│   │   ├── PrivacyPage.tsx      # Privacy policy & financial software disclaimer
│   │   ├── ReleasesPage.tsx     # Version history & release notes
│   │   └── NotFoundPage.tsx     # Accessible 404 page
│   └── styles/
│       └── index.css            # Tailwind directives and custom fintech utilities
├── tests/
│   ├── config.test.ts           # Product config and URL construction tests
│   ├── components.test.tsx      # UI components & disclosure rendering tests
│   └── routing.test.tsx         # Client-side routing & 404 tests
└── docs/
    ├── deployment.md            # Cloudflare Pages step-by-step deployment guide
    ├── release-process.md       # Step-by-step Windows desktop publishing procedure
    ├── launch-checklist.md      # Owner pre-launch settings checklist
    └── privacy-policy.md        # Offline model and website privacy documentation
```

---

## 7. Configuration Guide (`src/config/product.ts`)

`src/config/product.ts` is the single source of truth for the entire website. All download URLs, release versions, file sizes, and checksums are configured in this file.

### How to Configure the GitHub Release Repository
Open `src/config/product.ts` and replace the placeholders:
```typescript
export const GITHUB_OWNER_PLACEHOLDER = 'YOUR_GITHUB_USERNAME'; // e.g. 'vishnu'
export const GITHUB_REPO_PLACEHOLDER = 'YOUR_RELEASE_REPO';     // e.g. 'personal-money-manager'

export const productConfig: ProductConfig = {
  ...
  githubOwner: 'YOUR_GITHUB_USERNAME',
  githubRepo: 'personal-money-manager',
  ...
};
```
The site automatically constructs the official GitHub Releases direct download URL:
`https://github.com/<OWNER>/<REPO>/releases/latest/download/Personal Money Manager-1.0.0-x64.exe`

### How to Update the Displayed Version
When you release a new version (e.g., `1.0.1`):
```typescript
currentRelease: {
  version: '1.0.1',
  releaseDate: 'November 2026',
  installerFilename: 'Personal Money Manager-1.0.1-x64.exe',
  ...
}
```

### How to Calculate and Publish the SHA-256 Checksum
1. Run in PowerShell on the final packaged installer:
   ```powershell
   Get-FileHash -Path ".\Personal Money Manager-1.0.0-x64.exe" -Algorithm SHA256
   ```
2. Copy the resulting 64-character hash string.
3. In `src/config/product.ts`, set:
   ```typescript
   sha256Checksum: 'YOUR_COMPUTED_SHA256_HASH',
   ```
4. Commit and push. The website will immediately display the verified green hash badge.

### How to Configure a Custom Domain
1. In Cloudflare Pages, go to **Custom Domains** → **Set up a custom domain**.
2. Enter your domain (e.g. `getpmm.com`).
3. Update `websiteUrl` in `src/config/product.ts`.

---

## 8. Deployment on Cloudflare Pages

| Setting | Value |
| :--- | :--- |
| **Framework Preset** | `Vite` |
| **Build Command** | `npm run build` |
| **Build Output Directory** | `dist` |
| **SPA Routing** | Handled automatically via `public/_redirects` |
| **Security Headers** | Enforced automatically via `public/_headers` |

For detailed deployment steps, see [docs/deployment.md](docs/deployment.md).

---

## 9. Known Limitations & Transparency

- **Independent Unsigned Binary**: Personal Money Manager is released without an expensive commercial Extended Validation (EV) code-signing certificate. Microsoft Defender SmartScreen will display an unrecognized publisher dialog on initial launch until sufficient reputation is established. The website provides honest, safe instructions for users without advising them to disable Windows protections.
- **Platform Scope**: The desktop application is verified for 64-bit Windows 10 and 11. 32-bit Windows, macOS, and Linux are not supported by this build.
- **Offline Storage**: All data is stored locally in `%APPDATA%\personal-money-manager\data\pmm.sqlite`. Disasters such as hard drive loss require restoring from user-managed backups.
