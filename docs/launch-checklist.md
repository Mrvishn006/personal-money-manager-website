# Owner Pre-Launch Checklist

Before announcing or publicly directing traffic to the **Personal Money Manager** website, the repository owner must complete the following configuration checklist.

---

## 1. GitHub Releases Setup

- [ ] **Public Repository Created**: Create or designate a public GitHub repository to host installer downloads (e.g., `github.com/<OWNER>/personal-money-manager`).
- [ ] **Release Tag & Asset Uploaded**:
  - Exact tag: `v1.0.0`
  - Exact asset filename: `Personal Money Manager-1.0.0-x64.exe`
  - Uploaded as an attachment to the release, not committed into git.
- [ ] **Public Unauthenticated Download Tested**: Verify that opening:
  `https://github.com/<OWNER>/<REPO>/releases/latest/download/Personal Money Manager-1.0.0-x64.exe`
  downloads the installer without requiring a GitHub account or login.

---

## 2. Website Configuration Settings (`src/config/product.ts`)

Open `src/config/product.ts` and replace all placeholder values:

- [ ] **`githubOwner`**: Replace `'YOUR_GITHUB_USERNAME'` with your real GitHub account or organization name.
- [ ] **`githubRepo`**: Replace `'YOUR_RELEASE_REPO'` with your actual public repository name.
- [ ] **`sha256Checksum`**:
  - Run in PowerShell on the final `.exe`:
    `Get-FileHash -Path "Personal Money Manager-1.0.0-x64.exe" -Algorithm SHA256`
  - Replace `null` with the exact 64-character hash string.
- [ ] **`websiteUrl`**: Update if using a custom apex domain (e.g. `https://getpmm.com`), or leave as `https://personalmoneymanager.pages.dev`.

---

## 3. Cloudflare Pages Deployment Setup

- [ ] **Git Repository Connected**: Connect your website Git repository to Cloudflare Pages.
- [ ] **Build Command**: Set to `npm run build`.
- [ ] **Output Directory**: Set to `dist`.
- [ ] **Framework Preset**: Selected `Vite`.
- [ ] **Initial Build Passed**: Verify the first build is green.

---

## 4. Security & Compliance Sanity Check

- [ ] **No Secrets in Source**: Confirm that no private keys, certificates, or personal access tokens are committed.
- [ ] **Zero Database Binaries Committed**: Ensure no `.sqlite`, `.db`, or `.exe` files exist in the website repository.
- [ ] **SmartScreen Notice Understood**: Be aware that Windows Defender SmartScreen is normal for new unsigned independent open releases. The website provides honest instructions for users.
- [ ] **Financial Tool Disclaimer**: The privacy policy and footer disclaimers are intact and accurately state that Personal Money Manager is an offline personal record-keeping utility.

---

## 5. Final Smoke Test

- [ ] **Home Page**: Test in incognito browser on desktop and mobile.
- [ ] **Download Page**: Click download button, verify direct download starts.
- [ ] **PowerShell Command**: Copy PowerShell hash command from website and run on downloaded file. Confirm the hash matches.
- [ ] **Internal Links**: Check navigation between Features, Guide, Privacy, and Releases pages.
