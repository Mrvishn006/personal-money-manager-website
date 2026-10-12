import React, { useEffect } from 'react';
import {
  BookOpen,
  Download,
  Terminal,
  ShieldCheck,
  HardDrive,
  AlertTriangle,
} from 'lucide-react';
import { productConfig } from '../config/product';
import { Link } from 'react-router-dom';

export const GuidePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const release = productConfig.currentRelease;

  return (
    <div className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Operating Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Installation, Verification & Operating Guide
          </h1>
          <p className="text-base text-slate-600">
            Everything you need to successfully install, verify, configure, and back up Personal Money Manager on Windows.
          </p>
        </div>

        {/* Section 1: Standard Installation */}
        <section id="installation" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-subtle">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center">
              <Download className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-navy-900">
              1. Standard Windows Installation (NSIS Setup Wizard)
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-slate-600 space-y-3 pl-0 sm:pl-13">
            <p>
              The standard installer packages all runtime files, native SQLite engines, and assets into an NSIS setup executable:
            </p>

            <ol className="list-decimal pl-5 space-y-2">
              <li>
                Download <code className="bg-slate-100 px-1 py-0.5 rounded font-mono font-semibold">{release.installerFilename}</code> from the <Link to="/download" className="text-brand-600 underline font-medium">Download Page</Link>.
              </li>
              <li>
                Optionally verify the SHA-256 hash using PowerShell (see Section 2 below).
              </li>
              <li>
                Double-click the installer. If prompted by Windows SmartScreen, click <em>"More info"</em> and select <em>"Run anyway"</em>.
              </li>
              <li>
                Choose your desired installation directory (default is <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-[11px]">%LOCALAPPDATA%\Programs\Personal Money Manager</code>).
              </li>
              <li>
                Click <strong>Next</strong> and <strong>Install</strong>. Once completed, you can check the box to launch the application immediately.
              </li>
            </ol>
          </div>
        </section>

        {/* Section 2: Hash Verification */}
        <section id="verification" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-subtle">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Terminal className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-navy-900">
              2. Cryptographic Checksum Verification (PowerShell)
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-slate-600 space-y-3 pl-0 sm:pl-13">
            <p>
              Before launching newly downloaded executable files on Windows, verify that the file was not altered in transit:
            </p>

            <div className="space-y-1">
              <span className="font-semibold text-slate-800">Run this command in Windows PowerShell:</span>
              <pre className="bg-slate-900 text-slate-200 font-mono text-xs p-3.5 rounded-lg overflow-x-auto border border-slate-800">
                Get-FileHash -Path "$HOME\Downloads\{release.installerFilename}" -Algorithm SHA256
              </pre>
            </div>

            <p>
              Compare the 64-character hash returned by PowerShell with the SHA-256 hash listed on our official Download page. If they match, your installer is authentic and bit-for-bit intact.
            </p>
          </div>
        </section>

        {/* Section 3: Initial Setup */}
        <section id="setup" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-subtle">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-navy-900">
              3. Initial Launch & Vault Password Configuration
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-slate-600 space-y-3 pl-0 sm:pl-13">
            <p>
              On your very first launch of Personal Money Manager:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Create Master Password or PIN:</strong> Choose between an alphanumeric master password or a quick numeric PIN. Your credentials are hashed locally via memory-hard Argon2id.
              </li>
              <li>
                <strong>Lockout Protection:</strong> Entering 5 consecutive incorrect passwords triggers a 5-minute lockout timer to prevent brute-force attacks.
              </li>
              <li>
                <strong>Add Accounts:</strong> Navigate to Accounts and create your liquid holdings (e.g. "Wallet / Cash in Hand", "HDFC Savings", "ICICI Salary").
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4: Backup & Restore */}
        <section id="backup-restore" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-subtle">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
              <HardDrive className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-navy-900">
              4. Backup and Disaster Recovery Procedure
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-slate-600 space-y-3 pl-0 sm:pl-13">
            <p>
              Your active SQLite database is stored locally at:
            </p>
            <div className="bg-slate-900 text-slate-200 font-mono text-xs p-2.5 rounded border border-slate-800">
              {productConfig.storagePaths.database}
            </div>

            <p>
              Automated and manual backup files are saved with timestamped filenames in:
            </p>
            <div className="bg-slate-900 text-slate-200 font-mono text-xs p-2.5 rounded border border-slate-800">
              {productConfig.storagePaths.backups}
            </div>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
              <div className="font-semibold text-slate-900">How to restore a backup:</div>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Open Personal Money Manager and navigate to <strong>Settings → Backups</strong>.</li>
                <li>Select the desired timestamped backup snapshot from the list.</li>
                <li>Click <strong>Restore Selected Backup</strong>.</li>
                <li>The application automatically captures a pre-restore safety snapshot of your current database first, validates SQLite foreign keys, and restores your records.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 5: Troubleshooting Windows Issues */}
        <section id="troubleshooting" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-subtle">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-100 text-red-700 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-navy-900">
              5. Troubleshooting Common Windows Issues
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-slate-600 space-y-4 pl-0 sm:pl-13">
            <div className="border border-slate-200 rounded-lg p-4 space-y-1">
              <h3 className="font-bold text-slate-900">Issue: "Windows protected your PC" (SmartScreen)</h3>
              <p className="text-xs text-slate-600">
                This occurs because newly published indie software does not yet carry Microsoft cloud reputation. Verify the SHA-256 hash using PowerShell, click <strong>"More info"</strong>, and click <strong>"Run anyway"</strong>.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-4 space-y-1">
              <h3 className="font-bold text-slate-900">Issue: Application fails to start or shows DLL error</h3>
              <p className="text-xs text-slate-600">
                Ensure that the standard <em>Microsoft Visual C++ Redistributable (x64)</em> is installed on your Windows machine. This is required by native Node/Electron modules such as SQLite3 and Argon2.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-4 space-y-1">
              <h3 className="font-bold text-slate-900">Issue: Database file access permissions</h3>
              <p className="text-xs text-slate-600">
                Ensure that your Windows user profile has write permissions to <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-[11px]">%APPDATA%\personal-money-manager</code>. Do not run the installer or app as an administrator unless your organizational policy strictly requires it.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
