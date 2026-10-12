# Privacy Policy & Security Architecture Documentation

**Product:** Personal Money Manager  
**Platform:** Windows 10 & Windows 11 (64-bit)  
**Effective Date:** October 2026  
**Website:** https://personalmoneymanager.pages.dev  

---

## 1. Core Operating Principle: 100% Offline Local Sovereignty

Personal Money Manager is engineered as an offline-first Windows desktop software. The application stores financial transactions, loan records, repayment logs, and category settings strictly on the user's local disk drive.

### Verified Database Architecture
- **Local Engine**: Embedded SQLite 3
- **Default Database Location**: `%APPDATA%\personal-money-manager\data\pmm.sqlite`
- **Backup Location**: `%APPDATA%\personal-money-manager\backups\`
- **Journal Mode**: Write-Ahead Logging (WAL) for safe atomic writes
- **Cloud Transmission**: None. Zero network requests during normal operation.

---

## 2. Public Download Website Privacy Practices

This public website acts exclusively as an informational portal and download distributor for the Windows desktop software:

1. **Cookies**: The website sets no first-party or third-party cookies.
2. **Behavioral Analytics**: No tracking pixels (e.g. Google Analytics, Meta Pixel) are embedded.
3. **User Accounts**: The website has no user accounts, passwords, or credit card collection forms.
4. **Hosting Logs**: Hosted via Cloudflare Pages edge network. Standard transient edge network logs (IP addresses, user agent headers) are handled by Cloudflare according to standard DDoS and routing practices and are never sold or combined with personal identities.

---

## 3. Desktop Authentication & Threat Model

1. **Argon2id Master Password & PIN**: Master authentication hashes are computed using memory-hard Argon2id key derivation.
2. **Lockout Protection**: 5 failed unlock attempts trigger a 5-minute lockout timer to prevent brute-force attacks.
3. **Workstation Threat Boundary**: Local PIN/password protection defends against unauthorized access on an unlocked PC. If an unauthorized entity has physical hardware access to the disk drive, security relies on Windows BitLocker full-disk device encryption.

---

## 4. Legal & Financial Software Disclaimer

- **Personal Record-Keeping Utility**: Personal Money Manager is designed solely as an offline record-keeping and bookkeeping aid for personal finances.
- **Accuracy of Output**: Calculated balances, realized profits, and overdue fees depend entirely upon user-entered numbers.
- **Regulatory Disclosures**: Personal Money Manager is not a financial institution, chartered bank, payment processing gateway, registered credit bureau, or licensed accounting firm.

---

## 5. Security Inquiries

Security disclosures and bug reports can be submitted via GitHub issues on our official release repository.
