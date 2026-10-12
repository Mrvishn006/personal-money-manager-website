import React, { useEffect } from 'react';
import { DownloadCard } from '../components/download/DownloadCard';
import { VerificationGuide } from '../components/download/VerificationGuide';
import { SmartScreenGuide } from '../components/download/SmartScreenGuide';
import { SystemRequirementsTable } from '../components/download/SystemRequirementsTable';
import { Download, ShieldCheck, HardDrive, Cpu, CheckCircle } from 'lucide-react';

export const DownloadPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-10 md:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200">
            <Download className="w-3.5 h-3.5" />
            <span>Official Windows Distribution</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Download Personal Money Manager
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Get the latest stable release for Windows 10 and Windows 11. Follow the verification steps below to guarantee a safe and authentic installation.
          </p>
        </div>

        {/* Primary Download Card */}
        <DownloadCard />

        {/* Trust & Local Principles Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3 shadow-subtle">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-navy-900">Zero Cloud Synchronization</div>
              <div className="text-xs text-slate-500 mt-0.5">
                Financial records stay strictly on your personal hard drive.
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3 shadow-subtle">
            <HardDrive className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-navy-900">Embedded SQLite 3 Storage</div>
              <div className="text-xs text-slate-500 mt-0.5">
                WAL mode enabled with automated pre-restore snapshots.
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3 shadow-subtle">
            <Cpu className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-navy-900">Native Windows Performance</div>
              <div className="text-xs text-slate-500 mt-0.5">
                Engineered for 64-bit Windows 10 and Windows 11 environments.
              </div>
            </div>
          </div>
        </div>

        {/* Checksum Verification Section */}
        <VerificationGuide />

        {/* Windows Defender SmartScreen & Code Signing Disclosure */}
        <SmartScreenGuide />

        {/* System Requirements Table */}
        <SystemRequirementsTable />

        {/* Post-Download Installation Steps Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-subtle">
          <h2 className="text-base sm:text-lg font-bold text-navy-900 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-brand-600" />
            <span>After You Download: 3 Simple Setup Steps</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs sm:text-sm text-slate-600">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900">1. Run the Installer</div>
              <p className="text-xs text-slate-500">
                Double-click the downloaded setup file. Follow the NSIS wizard prompts to choose your destination directory.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900">2. Set Vault Master PIN</div>
              <p className="text-xs text-slate-500">
                Configure your Argon2id authentication password or PIN to secure local records from unauthorized desktop users.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900">3. Log Initial Accounts</div>
              <p className="text-xs text-slate-500">
                Enter your cash in hand and bank accounts in INR (₹) to initialize your private ledger.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
