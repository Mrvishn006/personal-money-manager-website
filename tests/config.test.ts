import { describe, it, expect } from 'vitest';
import {
  productConfig,
  getLatestInstallerDownloadUrl,
  getVersionDownloadUrl,
  getPublicReleasesUrl,
  getChecksumInfo,
  isPlaceholderConfig,
  GITHUB_OWNER_PLACEHOLDER,
  GITHUB_REPO_PLACEHOLDER,
} from '../src/config/product';

describe('Product Configuration & Release URL Construction', () => {
  it('has verified product name, version, and filename', () => {
    expect(productConfig.productName).toBe('Personal Money Manager');
    expect(productConfig.currentRelease.version).toBe('1.0.0');
    expect(productConfig.currentRelease.installerFilename).toBe('Personal.Money.Manager-1.0.0-x64.exe');
  });

  it('correctly validates configured vs placeholder settings', () => {
    // Current configuration is linked to verified owner Mrvishn006
    expect(isPlaceholderConfig(productConfig)).toBe(false);

    const placeholderConfig = {
      ...productConfig,
      githubOwner: GITHUB_OWNER_PLACEHOLDER,
      githubRepo: GITHUB_REPO_PLACEHOLDER,
    };
    expect(isPlaceholderConfig(placeholderConfig)).toBe(true);
  });

  it('constructs correct GitHub Releases latest download URL for Mrvishn006', () => {
    const url = getLatestInstallerDownloadUrl(productConfig);
    expect(url).toBe(
      'https://github.com/Mrvishn006/personal-money-manager/releases/latest/download/Personal.Money.Manager-1.0.0-x64.exe'
    );
  });

  it('constructs versioned download URL', () => {
    const url = getVersionDownloadUrl('1.0.0', productConfig);
    expect(url).toBe(
      'https://github.com/Mrvishn006/personal-money-manager/releases/download/v1.0.0/Personal.Money.Manager-1.0.0-x64.exe'
    );
  });

  it('constructs public releases page URL', () => {
    const url = getPublicReleasesUrl(productConfig);
    expect(url).toBe('https://github.com/Mrvishn006/personal-money-manager/releases');
  });

  it('displays verified SHA-256 checksum in production config', () => {
    const info = getChecksumInfo(productConfig);
    expect(info.isPublished).toBe(true);
    expect(info.value).toBe('AE0DA92634F4B61C9B9C9EFBA1A7381C488E5BCB5832421B1927F564C7A0B595');
  });

  it('handles unpublished checksum gracefully when null without fabricating hash', () => {
    const unpublishedConfig = {
      ...productConfig,
      currentRelease: {
        ...productConfig.currentRelease,
        sha256Checksum: null,
      },
    };
    const info = getChecksumInfo(unpublishedConfig);
    expect(info.isPublished).toBe(false);
    expect(info.displayText).toContain('Pending final release publication');
  });

  it('verifies supported Windows platform definitions', () => {
    const platforms = productConfig.supportedPlatforms.map((p) => p.name);
    expect(platforms).toContain('Windows 11');
    expect(platforms).toContain('Windows 10');
    expect(productConfig.systemRequirements.architecture).toContain('x64');
  });
});
