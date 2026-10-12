import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeatureGrid } from '../components/home/FeatureGrid';
import { HowItWorksSection } from '../components/home/HowItWorksSection';
import { AnalyticsShowcase } from '../components/home/AnalyticsShowcase';
import { DataPrivacySection } from '../components/home/DataPrivacySection';
import { FaqSection } from '../components/home/FaqSection';
import { Link } from 'react-router-dom';
import { Download, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { productConfig } from '../config/product';

export const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeatureGrid />
      <HowItWorksSection />
      <AnalyticsShowcase />
      <DataPrivacySection />
      <FaqSection />

      {/* Bottom CTA Banner */}
      <section className="bg-navy-950 py-16 text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-900/60 text-brand-300 border border-brand-700/60">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% Offline • Windows 10 & 11 (64-bit)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Take Control of Your Personal Finances?
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            Download Personal Money Manager today. Zero subscriptions, zero cloud telemetry, and total sovereignty over your local financial data.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/download">
              <Button
                variant="primary"
                size="lg"
                icon={<Download className="w-5 h-5" />}
                className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 font-bold shadow-md shadow-brand-600/30"
              >
                Download for Windows (v{productConfig.currentRelease.version})
              </Button>
            </Link>
            <Link to="/guide">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-white border-slate-700 bg-slate-900 hover:bg-slate-800 hover:text-white font-semibold"
              >
                Read Installation Guide
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
