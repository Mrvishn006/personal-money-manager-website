import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Wallet,
  Download,
  Menu,
  X,
  Shield,
  BookOpen,
  Layers,
  GitBranch,
  Home,
  HelpCircle,
} from 'lucide-react';
import { productConfig } from '../../config/product';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Features', path: '/features', icon: Layers },
    { label: 'Download', path: '/download', icon: Download },
    { label: 'Installation Guide', path: '/guide', icon: BookOpen },
    { label: 'Privacy & Security', path: '/privacy', icon: Shield },
    { label: 'Support', path: '/guide#troubleshooting', icon: HelpCircle },
    { label: 'Releases', path: '/releases', icon: GitBranch },
  ];

  const isActive = (path: string) => {
    if (path.includes('#')) {
      return location.pathname === path.split('#')[0] && location.hash === '#' + path.split('#')[1];
    }
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Name */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:rounded-lg"
            aria-label="Personal Money Manager Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 via-blue-700 to-navy-900 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-all duration-200">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-navy-900 tracking-tight text-base sm:text-lg leading-tight">
                {productConfig.productName}
              </span>
              <span className="text-[11px] font-medium text-slate-500 hidden sm:block">
                Windows 10 & 11 • Offline SQLite
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-150 ${
                    active
                      ? 'bg-brand-50 text-brand-700 font-semibold shadow-2xs'
                      : 'text-slate-600 hover:text-navy-900 hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action / CTA */}
          <div className="hidden md:flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 font-mono">
              v{productConfig.currentRelease.version}
            </span>
            <Link to="/download">
              <Button
                variant="primary"
                size="sm"
                icon={<Download className="w-4 h-4" />}
                className="bg-brand-600 hover:bg-brand-700 shadow-sm shadow-brand-600/20 font-semibold"
              >
                Download for Windows
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-2">
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 font-mono">
              v{productConfig.currentRelease.version}
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'bg-brand-50 text-brand-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-brand-600' : 'text-slate-500'}`} />
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2">
            <Link to="/download" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center bg-brand-600 hover:bg-brand-700 font-semibold shadow-sm"
                icon={<Download className="w-4 h-4" />}
              >
                Download for Windows (v{productConfig.currentRelease.version})
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
