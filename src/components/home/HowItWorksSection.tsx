import React from 'react';
import { Download, Laptop, ShieldCheck, PlusCircle, TrendingUp } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: 1,
      icon: Download,
      title: 'Download the Installer',
      description: 'Get the verified 64-bit installer executable directly from our release page.',
    },
    {
      step: 2,
      icon: Laptop,
      title: 'Install the Application',
      description: 'Run the setup wizard on Windows 10 or 11 to install Personal Money Manager.',
    },
    {
      step: 3,
      icon: ShieldCheck,
      title: 'Configure Security',
      description: 'Open the app and set your Argon2id master password or PIN for local vault protection.',
    },
    {
      step: 4,
      icon: PlusCircle,
      title: 'Record Income, Expenses & Loans',
      description: 'Add your accounts, log daily spending, and disburse loans to track receivables.',
    },
    {
      step: 5,
      icon: TrendingUp,
      title: 'View Reports & Insights',
      description: 'Monitor cash flow, review realized profits, and export CSV backups anytime.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200">
            <span>Simple 5-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-base text-slate-600">
            From setup to daily accounting, enjoy a transparent workflow that keeps 100% of your financial records private on your PC.
          </p>
        </div>

        {/* Desktop: Horizontal Layout with Connecting Line */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div
            className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4 relative z-10">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-card hover:border-brand-300 transition-all duration-200 flex flex-col items-center text-center group"
                >
                  {/* Numbered circle */}
                  <div className="w-14 h-14 rounded-2xl bg-white border-2 border-brand-500 text-brand-700 flex items-center justify-center font-bold shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-all duration-200 mb-4 relative">
                    <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-navy-900 text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-navy-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
