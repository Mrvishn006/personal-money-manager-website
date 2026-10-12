export interface SystemRequirements {
  os: string;
  architecture: string;
  minRam: string;
  recommendedRam: string;
  diskSpace: string;
  display: string;
  other: string[];
}

export interface ReleaseAsset {
  version: string;
  releaseDate: string;
  installerFilename: string;
  portableFilename?: string;
  fileSizeBytes?: number; // In bytes when known, e.g. ~85MB
  fileSizeFormatted?: string;
  sha256Checksum: string | null; // null if not yet published
  isPrerelease: boolean;
  notes: string[];
}

export interface ProductConfig {
  productName: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  websiteUrl: string;
  
  // GitHub Repository & Release Configuration (Placeholders clearly marked)
  githubOwner: string; // e.g. "OWNER" or "username"
  githubRepo: string; // e.g. "personal-money-manager"
  
  // Releases
  currentRelease: ReleaseAsset;
  
  // Supported Platform
  supportedPlatforms: {
    name: string;
    description: string;
    architectures: string[];
  }[];
  
  // Local storage paths (verified from desktop application)
  storagePaths: {
    database: string;
    backups: string;
  };
  
  // Links
  urls: {
    website: string;
    githubRepository: string;
    releasesPage: string;
    issueTracker: string;
    discussions: string;
  };
  
  // Requirements
  systemRequirements: SystemRequirements;
}
