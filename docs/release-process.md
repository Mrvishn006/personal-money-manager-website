# Official Release & Distribution Process

This document outlines the strict, repeatable engineering procedure for building, verifying, checksumming, and publishing a new Windows installer release for **Personal Money Manager**.

---

## 1. Architecture & Release Repository Rules

1. **Public Binary Hosting**: Release assets (`.exe`) must be hosted on a **public** GitHub Releases repository. If visitors are expected to download without logging into GitHub, private repositories cannot be used for public releases.
2. **Private Source Code Option**: If the software author prefers to keep the desktop application source code private, the owner can maintain a dedicated public release-distribution repository (e.g. `github.com/<OWNER>/personal-money-manager-releases`) containing only public GitHub Releases, while keeping the main desktop source repository private.
3. **Never Commit Binaries to Git**: The website repository must never contain the 85+ MB executable binary inside its Git history. Git is for code; GitHub Releases CDN is for binary distribution.
4. **SemVer Consistency**: Use strict Semantic Versioning (`1.0.0`, `1.0.1`, `1.1.0`).

---

## 2. End-to-End Release Checklist

### Step 1: Run Full Desktop Test Suite
In the desktop application repository (`PMM`):
```bash
npm run test:all
```
Ensure 100% of unit tests, integration tests, and accounting logic tests pass.

### Step 2: Clean and Compile Desktop Application
```bash
npm run build
npm run typecheck
npm run lint
```

### Step 3: Package the Production Windows NSIS Installer
Run the verified make command:
```bash
npm run make
```
This invokes `electron-builder --win` and outputs the installer to:
`release/Personal Money Manager-<VERSION>-x64.exe` (e.g. `release/Personal Money Manager-1.0.0-x64.exe`).

### Step 4: Local Smoke Test & Verification
Before publishing:
1. Launch the generated `.exe` on a clean Windows 10 or 11 test machine (or VM).
2. Confirm the installer wizard shows "Personal Money Manager" and version `1.0.0`.
3. Verify the installation succeeds, desktop shortcut works, and the application opens.
4. Confirm initial vault password creation functions correctly.
5. Confirm no debug logs or test databases were bundled into `%APPDATA%\personal-money-manager\data\pmm.sqlite`.

### Step 5: Compute Official SHA-256 Checksum
In Windows PowerShell, navigate to the `release/` folder and calculate the hash:
```powershell
Get-FileHash -Path ".\Personal Money Manager-1.0.0-x64.exe" -Algorithm SHA256 | Select-Object -ExpandProperty Hash
```
Example Output:
`9B34A9C874D1E20F553B8...`

Save this exact 64-character hexadecimal hash string. **Never fabricate or copy a hash from an older build.**

### Step 6: Create GitHub Release
1. Go to your public GitHub repository (`https://github.com/<OWNER>/<REPO>/releases`).
2. Click **Draft a new release**.
3. Choose a tag matching the version, e.g. `v1.0.0` (create tag on publish).
4. Release Title: `Personal Money Manager v1.0.0 (Windows 64-bit)`
5. Attach the installer binary file: `Personal Money Manager-1.0.0-x64.exe`.
6. Include release notes in the description, along with the computed SHA-256 hash:
   ```markdown
   ## Personal Money Manager v1.0.0

   Official production release for Windows 10 & 11 (64-bit).

   ### SHA-256 Verification Checksum
   `PASTE_EXACT_SHA256_HASH_HERE`

   ### Verify on Windows PowerShell:
   Get-FileHash -Path "$HOME\Downloads\Personal Money Manager-1.0.0-x64.exe" -Algorithm SHA256
   ```
7. Click **Publish release**.

### Step 7: Update Website Release Configuration
Open `src/config/product.ts` in the website repository:
1. Set `sha256Checksum`: `'PASTE_EXACT_SHA256_HASH_HERE'`
2. Set `githubOwner`: Your actual GitHub username / organization.
3. Set `githubRepo`: Your actual public releases repository name.
4. Commit and push changes to `main`.
Cloudflare Pages will automatically rebuild and deploy the website.

### Step 8: Unauthenticated Browser Test
Open a private/incognito browser window and navigate to:
`https://github.com/<OWNER>/<REPO>/releases/latest/download/Personal Money Manager-1.0.0-x64.exe`

Verify that the file downloads directly and completely without prompting for a GitHub login.
