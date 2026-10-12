import React from 'react';
import { ShieldCheck, HardDrive, Lock, EyeOff, CheckCircle2, AlertTriangle } from 'lucide-react';
import { productConfig } from '../../config/product';

export const DataPrivacySection: React.FC = () => {
  return (
    <section id="privacy" className="py-16 md:py-24 bg-gradient-to-b from-white via-sky-50/20 to-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Local Storage Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Your Financial Records Never Leave Your PC
          </h2>
          <p className="text-base text-slate-600">
            Personal Money Manager is architected from the ground up as an offline-first Windows desktop software. There are no cloud servers, no marketing telemetry, and no remote data storage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Local SQLite Storage */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-card transition-shadow space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200/60 shadow-2xs">
                <HardDrive className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">
                100% Local SQLite Persistence
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every expense, deposit, loan, and repayment is written directly to an embedded SQLite 3 database file on your hard drive:
              </p>
              <div className="bg-slate-900 text-slate-200 font-mono text-[11px] p-3 rounded-xl overflow-x-auto border border-slate-800 select-all">
                {productConfig.storagePaths.database}
              </div>
            </div>
            <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
              You maintain total ownership of the raw data. You can copy, backup, or inspect it using standard SQLite database utilities anytime.
            </p>
          </div>

          {/* Card 2: Zero Cloud Telemetry */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-card transition-shadow space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center border border-brand-200/60 shadow-2xs">
                <EyeOff className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">
                Zero Network Transmission
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                During normal operation, Personal Money Manager does not transmit financial figures, payee names, loan records, or balances over the internet:
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No analytics trackers or marketing SDKs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No cloud financial synchronization service</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Operates completely disconnected from the internet</span>
                </li>
              </ul>
            </div>
            <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
              Your sensitive financial ledger is immune to cloud data leaks and service outages.
            </p>
          </div>

          {/* Card 3: Argon2id Vault & Threat Model */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-card transition-shadow space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-200/60 shadow-2xs">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">
                Argon2id & Hardware Security
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Master credentials are protected using memory-hard Argon2id key derivation, preventing brute-force dictionary attacks.
              </p>
              <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 space-y-1">
                <div className="font-semibold flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                  <span>Realistic Threat Model:</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Local PIN/password protection prevents casual inspection on an unlocked PC. If an unauthorized party gains raw physical access to your drive, protection relies on Windows BitLocker full-disk encryption.
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
              5 consecutive invalid attempts trigger a 5-minute lockout timer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
