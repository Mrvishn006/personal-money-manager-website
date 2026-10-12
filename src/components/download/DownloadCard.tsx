import React, { useState } from 'react';
import {
  Download,
  CheckCircle2,
  AlertTriangle,
  Copy,
  Check,
  ExternalLink,
  Shield,
  HardDrive,
  FileText,
  HelpCircle,
} from 'lucide-react';
import {
  productConfig,
  getLatestInstallerDownloadUrl,
  getPublicReleasesUrl,
  getChecksumInfo,
  isPlaceholderConfig,
} from '../../config/product';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const DownloadCard: React.FC = () => {
  const [copiedHash, setCopiedHash] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);

  const release = productConfig.currentRelease;
  const isPlaceholder = isPlaceholderConfig();
  const downloadUrl = getLatestInstallerDownloadUrl();
  const releasesPageUrl = getPublicReleasesUrl();
  const checksumInfo = getChecksumInfo();

  const handleCopyHash = () => {
    if (checksumInfo.isPublished) {
      navigator.clipboard.writeText(checksumInfo.value);
      setCopiedHash(true);
      setTimeout(() => setCopiedHash(false), 2000);
    }
  };

  const handleDownloadClick = (e: React.MouseEvent) => {
    if (isPlaceholder) {
      e.preventDefault();
      setShowConfigModal(true);
    }
    // If not placeholder, standard browser download triggers via href
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-elevated overflow-hidden">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-navy-900 via-slate-800 to-navy-900 p-6 sm:p-8 text-white relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="emerald" size="md">
                Latest Stable Release
              </Badge>
              <Badge variant="slate" size="md">
                v{release.version}
              </Badge>
              <span className="text-xs text-slate-300">
                Released: {release.releaseDate}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Personal Money Manager for Windows
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Official 64-bit installer executable for Windows 10 & 11. Offline local SQLite storage with integer paise accounting precision.
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-start sm:items-end gap-2">
            <a
              href={downloadUrl}
              onClick={handleDownloadClick}
              className="w-full sm:w-auto"
            >
              <Button
                variant="emerald"
                size="lg"
                icon={<Download className="w-5 h-5" />}
                className="w-full sm:w-auto shadow-md hover:shadow-lg font-bold"
              >
                Download Installer (.exe)
              </Button>
            </a>
            <span className="text-[11px] text-slate-400">
              {release.fileSizeFormatted} • Windows 10/11 x64
            </span>
          </div>
        </div>
      </div>

      {/* Release Metadata Table */}
      <div className="p-6 sm:p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-6 border-b border-slate-200">
          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200/70">
            <div className="text-xs text-slate-500 font-medium">Target Operating System</div>
            <div className="text-sm font-bold text-navy-900 mt-0.5">Windows 10 / Windows 11</div>
            <div className="text-[11px] text-slate-500">64-bit (x64) only</div>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200/70">
            <div className="text-xs text-slate-500 font-medium">Installer Filename</div>
            <div className="text-xs font-mono font-bold text-navy-900 mt-1 truncate" title={release.installerFilename}>
              {release.installerFilename}
            </div>
            <div className="text-[11px] text-slate-500">Standard NSIS Setup Wizard</div>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200/70">
            <div className="text-xs text-slate-500 font-medium">Estimated File Size</div>
            <div className="text-sm font-bold text-navy-900 mt-0.5">{release.fileSizeFormatted}</div>
            <div className="text-[11px] text-slate-500">Stand-alone binary package</div>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200/70">
            <div className="text-xs text-slate-500 font-medium">Database Persistence</div>
            <div className="text-sm font-bold text-navy-900 mt-0.5">Local SQLite 3</div>
            <div className="text-[11px] text-slate-500">Zero cloud upload</div>
          </div>
        </div>

        {/* SHA-256 Checksum Section */}
        <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand-600 shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-navy-900">
                SHA-256 Checksum Verification
              </span>
            </div>
            {checksumInfo.isPublished ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified Hash Published
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                <AlertTriangle className="w-3.5 h-3.5" />
                Pending Final Binary Publication
              </span>
            )}
          </div>

          <p className="text-xs text-slate-600">
            Verify the cryptographic hash of your downloaded file before installation to guarantee that the binary is authentic and untampered:
          </p>

          <div className="flex items-center gap-2">
            <div className="flex-1 bg-slate-900 text-slate-200 font-mono text-xs p-3 rounded-lg overflow-x-auto border border-slate-800 select-all">
              {checksumInfo.isPublished ? checksumInfo.value : checksumInfo.displayText}
            </div>
            {checksumInfo.isPublished && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyHash}
                icon={copiedHash ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              >
                {copiedHash ? 'Copied' : 'Copy'}
              </Button>
            )}
          </div>
        </div>

        {/* Release Notes for v1.0.0 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-slate-600" />
            <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wider">
              Release Notes (v{release.version})
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600">
            {release.notes.map((note, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-slate-50/70 p-2.5 rounded-lg border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Fallback & Repository Link Bar */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <HardDrive className="w-4 h-4 text-slate-400" />
            <span>Portable version also available on GitHub release page.</span>
          </div>

          {isPlaceholder ? (
            <span className="text-slate-400 inline-flex items-center gap-1.5 cursor-not-allowed">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Public Releases Page (Configuration Pending)</span>
            </span>
          ) : (
            <a
              href={releasesPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-800 font-semibold"
            >
              <span>View All Releases on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Owner Configuration Fallback Dialog (If GITHUB_OWNER is still placeholder) */}
      {showConfigModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-navy-900">
                  Release Repository Setup Pending
                </h3>
                <p className="text-xs text-slate-500">
                  Configuration placeholder detected
                </p>
              </div>
            </div>

            <div className="text-xs text-slate-600 space-y-2 bg-slate-50 p-3.5 rounded-lg border border-slate-200">
              <p>
                The download button is configured to download the Windows installer asset directly from GitHub Releases:
              </p>
              <div className="bg-slate-900 text-slate-200 font-mono text-[11px] p-2 rounded break-all">
                {downloadUrl}
              </div>
              <p>
                <strong>Before Launch:</strong> Replace <code className="font-mono bg-slate-200 px-1 py-0.5 rounded text-slate-800">YOUR_GITHUB_USERNAME</code> in <code className="font-mono bg-slate-200 px-1 py-0.5 rounded text-slate-800">src/config/product.ts</code> with your actual GitHub username and public release repo.
              </p>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setShowConfigModal(false)}
              >
                Understood, Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
