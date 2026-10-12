import React, { useState } from 'react';
import { Terminal, Copy, Check, ShieldCheck, AlertCircle } from 'lucide-react';
import { productConfig, getChecksumInfo } from '../../config/product';
import { Button } from '../ui/Button';

export const VerificationGuide: React.FC = () => {
  const [copiedCmd, setCopiedCmd] = useState(false);
  const release = productConfig.currentRelease;
  const checksumInfo = getChecksumInfo();

  const powershellCommand = `Get-FileHash -Path "$HOME\\Downloads\\${release.installerFilename}" -Algorithm SHA256`;

  const handleCopyCmd = () => {
    navigator.clipboard.writeText(powershellCommand);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center">
          <Terminal className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-navy-900">
            How to Verify the Installer Checksum on Windows
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Step-by-step instructions to verify binary integrity before launching setup.
          </p>
        </div>
      </div>

      <div className="space-y-4 text-xs sm:text-sm text-slate-600">
        <p>
          To ensure that the file you downloaded has not been corrupted or tampered with by any intermediary network, calculate its SHA-256 hash using built-in Windows PowerShell:
        </p>

        {/* Step 1 */}
        <div className="space-y-1.5">
          <div className="font-semibold text-slate-800 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-xs">
              1
            </span>
            <span>Open Windows PowerShell</span>
          </div>
          <p className="text-xs text-slate-500 pl-7">
            Press <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded text-slate-700 font-mono">Win + X</kbd> and select <strong>Windows PowerShell</strong> (or Terminal).
          </p>
        </div>

        {/* Step 2 */}
        <div className="space-y-1.5">
          <div className="font-semibold text-slate-800 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-xs">
              2
            </span>
            <span>Execute the Get-FileHash command</span>
          </div>
          <div className="pl-7">
            <div className="relative group">
              <pre className="bg-slate-900 text-slate-200 font-mono text-xs p-3.5 rounded-lg overflow-x-auto border border-slate-800">
                {powershellCommand}
              </pre>
              <div className="absolute top-2 right-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopyCmd}
                  className="text-slate-300 hover:text-white hover:bg-slate-800 text-xs py-1 px-2 h-auto"
                >
                  {copiedCmd ? (
                    <span className="inline-flex items-center gap-1 text-emerald-400">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1">
                      <Copy className="w-3.5 h-3.5" /> Copy
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="space-y-1.5">
          <div className="font-semibold text-slate-800 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-xs">
              3
            </span>
            <span>Compare the Output</span>
          </div>
          <div className="pl-7 space-y-2">
            <p className="text-xs text-slate-600">
              The output will display the <code className="font-mono bg-slate-100 px-1 py-0.5 rounded">Hash</code> column. Compare this value with our official release hash:
            </p>
            {checksumInfo.isPublished ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded p-2.5 text-xs text-emerald-900 font-mono break-all flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Published Official SHA-256: {checksumInfo.value}</span>
              </div>
            ) : (
              <div className="bg-amber-50 border border-amber-200 rounded p-2.5 text-xs text-amber-900 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>
                  Official release hash will be published here as soon as the binary build is uploaded to GitHub.
                </span>
              </div>
            )}
            <p className="text-xs text-slate-500">
              If the computed hash matches the published hash, your installer is authentic and untampered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
