import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Shield, HardDrive, Cpu, ExternalLink, HelpCircle } from 'lucide-react';
import { productConfig, isPlaceholderConfig } from '../../config/product';

export const Footer: React.FC = () => {
  const currentYear = 2026;
  const isPlaceholder = isPlaceholderConfig();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Identity & verified architecture */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white">
                <Wallet className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-base tracking-tight">
                {productConfig.productName}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              An offline-first desktop personal money manager built specifically for Windows 10 and Windows 11. Stores 100% of financial records locally in SQLite with zero cloud dependencies.
            </p>
            <div className="space-y-1.5 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-2">
                <HardDrive className="w-3.5 h-3.5 text-brand-400" />
                <span>Local SQLite Database</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                <span>Windows 10 / 11 (64-bit)</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-purple-400" />
                <span>Argon2id Master Protection</span>
              </div>
            </div>
          </div>

          {/* Column 2: Software & Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Application
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-slate-400 hover:text-white transition-colors">
                  Financial Features
                </Link>
              </li>
              <li>
                <Link to="/download" className="text-slate-400 hover:text-white transition-colors">
                  Download Windows Installer
                </Link>
              </li>
              <li>
                <Link to="/releases" className="text-slate-400 hover:text-white transition-colors">
                  Release Notes (v{productConfig.currentRelease.version})
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Documentation & Help */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Documentation & Guides
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/guide" className="text-slate-400 hover:text-white transition-colors">
                  Installation Instructions
                </Link>
              </li>
              <li>
                <Link to="/guide#verification" className="text-slate-400 hover:text-white transition-colors">
                  SHA-256 Hash Verification
                </Link>
              </li>
              <li>
                <Link to="/guide#troubleshooting" className="text-slate-400 hover:text-white transition-colors">
                  Windows SmartScreen Guide
                </Link>
              </li>
              <li>
                <Link to="/guide#backup-restore" className="text-slate-400 hover:text-white transition-colors">
                  Backup & Restore Procedure
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Trust & Transparency */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Trust & Transparency
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy & Data Model
                </Link>
              </li>
              <li>
                <Link to="/privacy#security" className="text-slate-400 hover:text-white transition-colors">
                  Security Architecture
                </Link>
              </li>
              <li>
                <Link to="/privacy#disclaimer" className="text-slate-400 hover:text-white transition-colors">
                  Financial Disclaimer
                </Link>
              </li>
              <li>
                {isPlaceholder ? (
                  <span className="text-slate-500 inline-flex items-center gap-1.5 cursor-not-allowed">
                    <HelpCircle className="w-3.5 h-3.5" />
                    GitHub Repository (Config Pending)
                  </span>
                ) : (
                  <a
                    href={productConfig.urls.githubRepository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                  >
                    <span>GitHub Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </li>
              <li>
                {isPlaceholder ? (
                  <span className="text-slate-500 inline-flex items-center gap-1.5 cursor-not-allowed">
                    <HelpCircle className="w-3.5 h-3.5" />
                    Issue Tracker (Config Pending)
                  </span>
                ) : (
                  <a
                    href={productConfig.urls.issueTracker}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Report a Bug / Issue</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Financial Disclaimer Notice */}
        <div className="pt-6 border-t border-slate-800 text-xs text-slate-400 space-y-2">
          <p>
            <strong className="text-slate-300">Financial Tool Disclaimer:</strong> Personal Money Manager is an offline personal financial record-keeping and loan portfolio management software tool. Calculated balances, overdue fees, and realized profit metrics depend entirely upon user-entered transactions. Personal Money Manager is not a financial institution, bank, payment processor, lending platform, or certified accounting service.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 text-slate-400 text-xs">
            <div>
              &copy; {currentYear} {productConfig.productName}. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Static Site Hosted on Cloudflare Pages</span>
              <span>•</span>
              <span>No Cookies or Tracking</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
