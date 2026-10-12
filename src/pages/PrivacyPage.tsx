import React, { useEffect } from 'react';
import { ShieldCheck, HardDrive, AlertTriangle, Lock, Globe, Mail } from 'lucide-react';
import { productConfig } from '../config/product';

export const PrivacyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Transparency & Privacy Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Privacy Policy & Security Model
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Clear, honest disclosure regarding data storage, website operation, and financial software disclaimers.
          </p>
          <div className="text-xs text-slate-400">
            Effective Date: October 2026 • Document Version 1.0
          </div>
        </div>

        {/* Section 1: Executive Summary */}
        <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
            <Lock className="w-5 h-5 text-emerald-700" />
            <span>Core Privacy Guarantee</span>
          </div>
          <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
            Personal Money Manager is engineered with an <strong>offline-first, zero-cloud architecture</strong>. We do not operate remote databases, financial aggregation servers, telemetry trackers, or advertising SDKs. Your personal financial numbers, borrower notes, balances, and records remain 100% on your personal Windows computer.
          </p>
        </div>

        {/* Section 2: Website Behavior & Hosting */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-subtle">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy-900">
                1. Website Behavior & Static Hosting
              </h2>
              <p className="text-xs text-slate-500">
                How this public download website functions.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-600 pl-0 sm:pl-13">
            <div className="space-y-1">
              <h3 className="font-semibold text-slate-900">Cookies & Tracking</h3>
              <p>
                This website does <strong>not</strong> use tracking cookies, marketing cookies, third-party advertising scripts, or session profiling trackers.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="font-semibold text-slate-900">Analytics</h3>
              <p>
                No third-party behavioral analytics services (such as Google Analytics or Meta Pixel) are embedded in this website. The site is a purely static informational download portal.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="font-semibold text-slate-900">Hosting & Server Access Logs</h3>
              <p>
                This website is hosted statically via Cloudflare Pages. Like standard web infrastructure, Cloudflare may process transient network connection metadata (IP addresses, user-agent headers, and requested URLs) strictly for DDoS mitigation, security, and edge content routing. We do not store or sell these technical network logs.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="font-semibold text-slate-900">Contact Forms & Registration</h3>
              <p>
                This website does not feature user account registration, login forms, payment forms, or hidden newsletter data-collection forms.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Desktop Application Privacy */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-subtle">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <HardDrive className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy-900">
                2. Desktop Application Data Storage & Network Model
              </h2>
              <p className="text-xs text-slate-500">
                How the Windows application stores and isolates your data.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-600 pl-0 sm:pl-13">
            <div className="space-y-1">
              <h3 className="font-semibold text-slate-900">Local SQLite Storage</h3>
              <p>
                All balances, accounts, expenses, borrowers, and repayment logs are written directly to an embedded SQLite 3 database file at:
              </p>
              <div className="bg-slate-900 text-slate-200 font-mono text-xs p-2.5 rounded border border-slate-800">
                {productConfig.storagePaths.database}
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="font-semibold text-slate-900">No Cloud Transmission</h3>
              <p>
                During normal operation, the desktop software makes zero network requests. It does not send financial figures, usernames, contact lists, or account amounts over the internet to any server.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="font-semibold text-slate-900">Local Password / PIN Protection</h3>
              <p>
                Your master authentication password or PIN is verified locally using Argon2id key derivation. 5 failed attempts trigger a 5-minute lockout timer. Because authentication is local, the master password protects against unauthorized use on an unlocked Windows workstation.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="font-semibold text-slate-900">Recommended Device Security</h3>
              <p>
                For complete protection against physical disk theft, users should enable <strong>Windows BitLocker device encryption</strong> on their primary Windows OS drive.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Financial Tool Disclaimer */}
        <section id="disclaimer" className="bg-amber-50/60 border border-amber-200 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-navy-900">
              3. Important Financial & Legal Disclaimer
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-slate-700 space-y-3 pl-0 sm:pl-13">
            <p>
              <strong>Personal Record-Keeping Utility:</strong> Personal Money Manager is an offline personal software utility intended solely to assist individuals in logging their own personal financial transactions, money lent, and repayment records.
            </p>
            <p>
              <strong>Dependency on User-Entered Data:</strong> All calculations, liquid balances, overdue fee accruals, and profit summaries produced by the application are entirely dependent upon the completeness and accuracy of user-entered inputs.
            </p>
            <p>
              <strong>Not a Financial Institution:</strong> Personal Money Manager is <strong>not</strong> a bank, registered depository, licensed lending platform, payment processor, credit rating agency, or certified accounting firm. The application does not execute bank transfers, hold deposits, or provide formal tax, accounting, or legal counsel.
            </p>
          </div>
        </section>

        {/* Section 5: Reporting Concerns */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-subtle">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-navy-900">
              4. Reporting Privacy or Security Concerns
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-slate-600 space-y-2 pl-0 sm:pl-13">
            <p>
              If you discover a security vulnerability or have questions about data handling in the desktop application, please open an issue or security advisory on our official GitHub repository.
            </p>
            <p className="text-xs text-slate-500">
              We investigate all responsible disclosures promptly.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
