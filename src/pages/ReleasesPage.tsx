import React, { useEffect } from 'react';
import { GitBranch, Download, CheckCircle2, ExternalLink, HardDrive } from 'lucide-react';
import {
  productConfig,
  getPublicReleasesUrl,
  getChecksumInfo,
  isPlaceholderConfig,
} from '../config/product';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export const ReleasesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const release = productConfig.currentRelease;
  const isPlaceholder = isPlaceholderConfig();
  const releasesPageUrl = getPublicReleasesUrl();
  const checksumInfo = getChecksumInfo();

  return (
    <div className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Public Version History</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Release Notes & Distribution History
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Official changelog and verified binary artifacts for Personal Money Manager on Windows.
          </p>
        </div>

        {/* Version 1.0.0 Release Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-subtle overflow-hidden">
          {/* Release Title Header */}
          <div className="p-6 sm:p-8 border-b border-slate-200/80 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-navy-900">
                  Version {release.version}
                </h2>
                <Badge variant="emerald" size="md">
                  Latest Stable
                </Badge>
              </div>
              <div className="text-xs text-slate-500">
                Released: {release.releaseDate} • Architecture: Windows x64
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link to="/download">
                <Button variant="primary" size="sm" icon={<Download className="w-4 h-4" />}>
                  Download v{release.version}
                </Button>
              </Link>
            </div>
          </div>

          {/* Release Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider">
                What's New in v{release.version}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {release.notes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Binary Asset Details */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3 text-xs">
              <div className="font-bold text-slate-900 flex items-center justify-between">
                <span>Distribution Artifact Details</span>
                <span className="font-mono text-slate-500">NSIS Target</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600">
                <div>
                  <span className="text-slate-400">Installer File:</span>{' '}
                  <code className="font-mono bg-white px-1 py-0.5 rounded border border-slate-200 text-slate-800">
                    {release.installerFilename}
                  </code>
                </div>
                <div>
                  <span className="text-slate-400">Target Platforms:</span>{' '}
                  <span>Windows 10 & 11 (64-bit)</span>
                </div>
                <div>
                  <span className="text-slate-400">Database Storage:</span>{' '}
                  <span>Local SQLite 3 (WAL Mode)</span>
                </div>
                <div>
                  <span className="text-slate-400">SHA-256 Checksum:</span>{' '}
                  <span>{checksumInfo.isPublished ? checksumInfo.value : 'Pending upload'}</span>
                </div>
              </div>
            </div>

            {/* GitHub Releases Link */}
            <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <HardDrive className="w-4 h-4 text-slate-400" />
                <span>Hosted on GitHub Releases CDN</span>
              </div>
              {!isPlaceholder && (
                <a
                  href={releasesPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-800 font-semibold"
                >
                  <span>View GitHub Release Asset</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
