import { ProductConfig } from '../types/product';

/**
 * ============================================================================
 * PERSONAL MONEY MANAGER — MASTER CONFIGURATION FILE
 * ============================================================================
 * This is the single source of truth for the product website, releases,
 * installer downloads, verified local storage paths, and GitHub URLs.
 *
 * OWNER INSTRUCTIONS BEFORE LAUNCH:
 * 1. Replace GITHUB_OWNER placeholder with your actual GitHub username or organization.
 * 2. Replace GITHUB_REPO placeholder with your actual public releases repository name.
 * 3. Once you generate and publish the official installer binary, calculate its
 *    SHA-256 hash and update `sha256Checksum` below.
 *    (Run PowerShell: Get-FileHash -Path "Personal Money Manager-1.0.0-x64.exe" -Algorithm SHA256)
 * ============================================================================
 */

export const GITHUB_OWNER_PLACEHOLDER = 'YOUR_GITHUB_USERNAME';
export const GITHUB_REPO_PLACEHOLDER = 'YOUR_RELEASE_REPO';

export const productConfig: ProductConfig = {
  productName: 'Personal Money Manager',
  tagline: 'Take control of your money.',
  shortDescription:
    'Track expenses, manage money you\'ve lent, monitor repayments, and understand your finances with a personal money manager for Windows.',
  fullDescription:
    'A production-minded, offline-first personal financial management desktop application for Windows 10 and Windows 11 (64-bit). Engineered with 100% local SQLite storage, integer paise accounting integrity, and zero cloud transmission.',
  websiteUrl: 'https://personalmoneymanager.pages.dev',

  // Owner settings: Verified GitHub identity
  githubOwner: 'Mrvishn006',
  githubRepo: 'personal-money-manager',

  currentRelease: {
    version: '1.0.0',
    releaseDate: 'October 2026',
    // Exact installer filename produced by electron-builder configuration:
    // ${productName}-${version}-${arch}.${ext} => Personal Money Manager-1.0.0-x64.exe
    installerFilename: 'Personal Money Manager-1.0.0-x64.exe',
    portableFilename: 'Personal Money Manager-Portable-1.0.0-x64.exe',
    fileSizeBytes: 126513286,
    fileSizeFormatted: '120.6 MB',
    // Verified SHA-256 hash calculated from the generated installer artifact:
    sha256Checksum: 'AE0DA92634F4B61C9B9C9EFBA1A7381C488E5BCB5832421B1927F564C7A0B595',
    isPrerelease: false,
    notes: [
      'Initial official release for Windows 10 & 11 (64-bit).',
      'Multi-account liquid cash ledger (Cash in hand, Bank accounts, Wallets).',
      'Expense logging with pre-seeded & custom categories.',
      'Borrower and loan portfolio management with contact history.',
      '4-bucket repayment allocation (Principal, Agreed Earnings, Late Charges, Other).',
      'Deterministic, idempotent daily overdue additions.',
      'Strict separation of realized earnings vs. expected returns.',
      'Audit-grade financial statements, reconciliation ledger, and UTF-8 BOM CSV exports.',
      'Offline-first SQLite 3 storage with WAL-safe automatic backups and pre-restore snapshots.',
      'Argon2id master password / PIN authentication with 5-attempt lockout security.',
    ],
  },

  supportedPlatforms: [
    {
      name: 'Windows 11',
      description: 'Fully supported (Standard 64-bit editions)',
      architectures: ['x64'],
    },
    {
      name: 'Windows 10',
      description: 'Fully supported (Version 1903 or later, 64-bit)',
      architectures: ['x64'],
    },
  ],

  storagePaths: {
    database: '%APPDATA%\\personal-money-manager\\data\\pmm.sqlite',
    backups: '%APPDATA%\\personal-money-manager\\backups\\',
  },

  urls: {
    website: 'https://personalmoneymanager.pages.dev',
    githubRepository: `https://github.com/${GITHUB_OWNER_PLACEHOLDER}/${GITHUB_REPO_PLACEHOLDER}`,
    releasesPage: `https://github.com/${GITHUB_OWNER_PLACEHOLDER}/${GITHUB_REPO_PLACEHOLDER}/releases`,
    issueTracker: `https://github.com/${GITHUB_OWNER_PLACEHOLDER}/${GITHUB_REPO_PLACEHOLDER}/issues`,
    discussions: `https://github.com/${GITHUB_OWNER_PLACEHOLDER}/${GITHUB_REPO_PLACEHOLDER}/discussions`,
  },

  systemRequirements: {
    os: 'Windows 10 (Version 1903+) or Windows 11 (64-bit)',
    architecture: 'x64 (Intel or AMD 64-bit processor)',
    minRam: '4 GB RAM',
    recommendedRam: '8 GB RAM',
    diskSpace: '300 MB free hard drive space (installer ~85 MB, app ~240 MB)',
    display: '1280 x 720 minimum resolution (1920 x 1080 recommended)',
    other: [
      'No internet connection required for day-to-day operation.',
      'Requires standard Windows user permissions for installation.',
      'Windows BitLocker device encryption recommended for hardware-level database protection.',
    ],
  },
};

/**
 * Checks whether the current GitHub owner/repo is still a placeholder.
 */
export function isPlaceholderConfig(config: ProductConfig = productConfig): boolean {
  return (
    config.githubOwner === GITHUB_OWNER_PLACEHOLDER ||
    config.githubRepo === GITHUB_REPO_PLACEHOLDER ||
    config.githubOwner.includes('YOUR_') ||
    config.githubRepo.includes('YOUR_')
  );
}

/**
 * Constructs the canonical GitHub Releases latest download URL.
 * Pattern: https://github.com/OWNER/REPO/releases/latest/download/{FILENAME}
 */
export function getLatestInstallerDownloadUrl(config: ProductConfig = productConfig): string {
  return `https://github.com/${config.githubOwner}/${config.githubRepo}/releases/latest/download/${config.currentRelease.installerFilename}`;
}

/**
 * Constructs the release tag download URL for a specific version.
 * Pattern: https://github.com/OWNER/REPO/releases/download/v{VERSION}/{FILENAME}
 */
export function getVersionDownloadUrl(
  version: string = productConfig.currentRelease.version,
  config: ProductConfig = productConfig
): string {
  return `https://github.com/${config.githubOwner}/${config.githubRepo}/releases/download/v${version}/${config.currentRelease.installerFilename}`;
}

/**
 * Constructs the public releases page URL on GitHub.
 */
export function getPublicReleasesUrl(config: ProductConfig = productConfig): string {
  return `https://github.com/${config.githubOwner}/${config.githubRepo}/releases`;
}

/**
 * Helper to get checksum state accurately.
 */
export function getChecksumInfo(config: ProductConfig = productConfig): {
  isPublished: boolean;
  value: string;
  displayText: string;
} {
  const hash = config.currentRelease.sha256Checksum;
  if (!hash || hash.trim().length === 0) {
    return {
      isPublished: false,
      value: '',
      displayText: 'Pending final release publication (Verify via PowerShell upon release)',
    };
  }
  return {
    isPublished: true,
    value: hash.trim(),
    displayText: hash.trim(),
  };
}
