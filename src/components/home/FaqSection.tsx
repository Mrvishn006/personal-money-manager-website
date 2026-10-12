import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldAlert } from 'lucide-react';
import { productConfig } from '../../config/product';
import { Link } from 'react-router-dom';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqs: FaqItem[] = [
    {
      question: 'Is Personal Money Manager free to use?',
      answer: (
        <p>
          Yes. Personal Money Manager is released as a free, standalone personal desktop financial management application for Windows. There are no monthly subscriptions, locked feature tiers, or hidden payment gateways.
        </p>
      ),
    },
    {
      question: 'Which operating systems and architectures are supported?',
      answer: (
        <div className="space-y-2">
          <p>
            Personal Money Manager is built and verified specifically for <strong>Windows 10 (Version 1903 or later)</strong> and <strong>Windows 11</strong> on <strong>64-bit (x64)</strong> Intel and AMD architecture.
          </p>
          <p className="text-xs text-slate-500">
            32-bit Windows, macOS, and Linux are not currently supported by this desktop build.
          </p>
        </div>
      ),
    },
    {
      question: 'How do I install Personal Money Manager?',
      answer: (
        <div className="space-y-2">
          <p>
            Download the installer executable (<code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">{productConfig.currentRelease.installerFilename}</code>) from our Download page. Double-click to run the setup wizard, select your preferred installation directory, and follow the simple on-screen prompts. A desktop shortcut and Start Menu entry will be created.
          </p>
          <p>
            You can also view our step-by-step <Link to="/guide" className="text-brand-600 underline font-medium">Installation & Verification Guide</Link>.
          </p>
        </div>
      ),
    },
    {
      question: 'Where are my financial records stored on my computer?',
      answer: (
        <div className="space-y-2">
          <p>
            All financial transactions, accounts, borrowers, and categories are saved in an embedded SQLite 3 database located in your Windows AppData directory:
          </p>
          <div className="bg-slate-900 text-slate-200 font-mono text-xs p-2.5 rounded border border-slate-800">
            {productConfig.storagePaths.database}
          </div>
          <p className="text-xs text-slate-500">
            This database is stored strictly locally. It is never uploaded to any remote server or third-party cloud.
          </p>
        </div>
      ),
    },
    {
      question: 'Does the application require an active internet connection?',
      answer: (
        <p>
          No. Personal Money Manager is an offline-first desktop application. It performs all calculations, overdue fee additions, ledger reconciliation, and backup operations locally on your PC without needing any internet connection.
        </p>
      ),
    },
    {
      question: 'How do I back up my financial data?',
      answer: (
        <div className="space-y-2">
          <p>
            The desktop application provides automatic and manual backup routines using SQLite's online backup API (WAL-safe). Backups are saved to:
          </p>
          <div className="bg-slate-900 text-slate-200 font-mono text-xs p-2.5 rounded border border-slate-800">
            {productConfig.storagePaths.backups}
          </div>
          <p>
            You can copy these timestamped <code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">.sqlite</code> backup files to an external encrypted USB drive or your personal secure archive anytime.
          </p>
        </div>
      ),
    },
    {
      question: 'Can I restore a previous backup if something happens?',
      answer: (
        <p>
          Yes. Personal Money Manager features a safe restore mechanism that creates an automated safety snapshot of your current database before applying any restored file, verifying foreign-key constraints and SQLite database integrity to prevent corruption.
        </p>
      ),
    },
    {
      question: 'How do I verify that I downloaded the authentic installer?',
      answer: (
        <div className="space-y-2">
          <p>
            You can verify the cryptographic SHA-256 hash of the downloaded file using Windows PowerShell before executing it:
          </p>
          <div className="bg-slate-900 text-slate-200 font-mono text-xs p-2.5 rounded border border-slate-800">
            Get-FileHash -Path "$HOME\Downloads\{productConfig.currentRelease.installerFilename}" -Algorithm SHA256
          </div>
          <p>
            Compare the resulting hash against the official hash published on our <Link to="/download" className="text-brand-600 underline font-medium">Download Page</Link>.
          </p>
        </div>
      ),
    },
    {
      question: 'Why might Windows display a Microsoft Defender SmartScreen warning?',
      answer: (
        <div className="space-y-2">
          <p>
            As an independent open release, newly published binaries without a costly commercial Extended Validation (EV) certificate may trigger Windows Defender SmartScreen ("Windows protected your PC / Unknown Publisher").
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded p-2.5 text-xs text-amber-900 flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong>Security Transparency:</strong> We disclose this openly. You should verify the installer's SHA-256 hash first. If the hash matches, click <em>"More info"</em> and select <em>"Run anyway"</em>. We never recommend disabling Windows security protections.
            </div>
          </div>
        </div>
      ),
    },
    {
      question: 'How do I report a bug or request an enhancement?',
      answer: (
        <p>
          Bug reports and feature suggestions can be submitted through our official public GitHub issue tracker. Please include your Windows version, desktop app version, and any reproducible steps.
        </p>
      ),
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Clear Answers About Personal Money Manager
          </h2>
          <p className="text-base text-slate-600">
            Everything you need to know about system requirements, data storage, installation, and security.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/90 shadow-subtle overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 focus-visible:bg-slate-50"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm sm:text-base text-navy-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-brand-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
