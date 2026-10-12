import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { isPlaceholderConfig } from '../../config/product';
import { AlertCircle, FileCode } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isPlaceholder = isPlaceholderConfig();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      {/* Configuration Status Notice for Deployment Owner */}
      {isPlaceholder && (
        <aside
          role="region"
          aria-label="Repository configuration notice"
          className="bg-amber-500/10 border-b border-amber-300 text-amber-900 text-xs px-4 py-2"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>
                <strong>Owner Configuration Note:</strong> GitHub release repository is currently set to placeholder mode. Replace placeholder values in{' '}
                <code className="bg-amber-100 px-1 py-0.5 rounded font-mono text-[11px]">
                  src/config/product.ts
                </code>{' '}
                before public distribution.
              </span>
            </div>
            <Link
              to="/guide"
              className="inline-flex items-center gap-1 font-medium text-amber-800 hover:text-amber-950 underline underline-offset-2 shrink-0"
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>View Publishing Guide</span>
            </Link>
          </div>
        </aside>
      )}

      <Header />
      <main className="flex-1" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};
