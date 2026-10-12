import React from 'react';
import {
  PieChart,
  TrendingUp,
  Users,
  Split,
  Sparkles,
  ArrowUpRight,
  ArrowDownLeft,
  AlertCircle,
} from 'lucide-react';

export const AnalyticsShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-[#0B132B] text-white relative overflow-hidden border-b border-slate-800">
      {/* Subtle tech background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-900/60 text-brand-300 border border-brand-700/60 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>Deep Financial Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Visual Analytics Built for Financial Precision
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Real-time interactive visualizations that preserve double-entry accounting integrity without confusing spreadsheet formulas.
          </p>
        </div>

        {/* 4 Dashboard Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Monthly Expenses */}
          <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 shadow-xl flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="font-semibold uppercase tracking-wider text-[11px]">Monthly Expenses</span>
                <div className="w-6 h-6 rounded-md bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <PieChart className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-2xl font-bold font-mono text-white mb-1">
                ₹24,850.00
              </div>
              <div className="text-[11px] text-slate-400 mb-4">
                October 2026 • 18 Transactions
              </div>

              {/* Category Breakdown Bars */}
              <div className="space-y-2.5 text-xs">
                <div>
                  <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                    <span>Rent & Housing</span>
                    <span className="font-mono text-slate-200">₹14,500 (58%)</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-brand-500 h-1.5 rounded-full" style={{ width: '58%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                    <span>Groceries & Food</span>
                    <span className="font-mono text-slate-200">₹6,850 (28%)</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '28%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                    <span>Utilities & Bills</span>
                    <span className="font-mono text-slate-200">₹2,320 (9%)</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '9%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                    <span>Transport</span>
                    <span className="font-mono text-slate-200">₹1,180 (5%)</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '5%' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between">
              <span>Category tags enabled</span>
              <span className="text-emerald-400 font-medium">Under Budget</span>
            </div>
          </div>

          {/* Card 2: Cash Flow Dynamics */}
          <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 shadow-xl flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="font-semibold uppercase tracking-wider text-[11px]">Cash Flow</span>
                <div className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-2xl font-bold font-mono text-emerald-400 mb-1">
                +₹40,150.00
              </div>
              <div className="text-[11px] text-slate-400 mb-4">
                Net Monthly Surplus
              </div>

              {/* Inflow vs Outflow Mini Summary */}
              <div className="space-y-3 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-800/70 border border-slate-700/60">
                  <div className="flex items-center justify-between text-[11px] text-slate-300">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <ArrowDownLeft className="w-3.5 h-3.5" />
                      Total Inflows
                    </span>
                    <span className="font-mono font-bold text-white">₹65,000.00</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Salary + ₹2,500 realized return
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-800/70 border border-slate-700/60">
                  <div className="flex items-center justify-between text-[11px] text-slate-300">
                    <span className="flex items-center gap-1.5 text-amber-400">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                      Total Outflows
                    </span>
                    <span className="font-mono font-bold text-white">₹24,850.00</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    100% daily living expenses
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between">
              <span>Savings Rate: 61.7%</span>
              <span className="text-emerald-400 font-mono">+₹40.1k net</span>
            </div>
          </div>

          {/* Card 3: Outstanding Loans Portfolio */}
          <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 shadow-xl flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="font-semibold uppercase tracking-wider text-[11px]">Outstanding Loans</span>
                <div className="w-6 h-6 rounded-md bg-purple-500/10 text-purple-400 flex items-center justify-center">
                  <Users className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-2xl font-bold font-mono text-purple-300 mb-1">
                ₹60,000.00
              </div>
              <div className="text-[11px] text-slate-400 mb-4">
                3 Active Borrower Portfolios
              </div>

              {/* Borrower Snapshot */}
              <div className="space-y-2 text-xs">
                <div className="p-2 rounded bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-white block">Rohan K.</span>
                    <span className="text-[10px] text-slate-400">Due 15 Oct 2026</span>
                  </div>
                  <span className="font-mono text-slate-200">₹25,000</span>
                </div>

                <div className="p-2 rounded bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-white block">Aditya V.</span>
                    <span className="text-[10px] text-amber-400 font-semibold">4 Days Overdue</span>
                  </div>
                  <span className="font-mono text-amber-300">₹15,000</span>
                </div>

                <div className="p-2 rounded bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-white block">Meera S.</span>
                    <span className="text-[10px] text-slate-400">Due 28 Oct 2026</span>
                  </div>
                  <span className="font-mono text-slate-200">₹20,000</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between">
              <span>Expected: +₹5,700</span>
              <span className="text-purple-400 font-medium">Asset Swap</span>
            </div>
          </div>

          {/* Card 4: Borrower Repayment Summaries */}
          <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 shadow-xl flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="font-semibold uppercase tracking-wider text-[11px]">Repayment Allocation</span>
                <div className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <Split className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-2xl font-bold font-mono text-blue-300 mb-1">
                ₹32,500.00
              </div>
              <div className="text-[11px] text-slate-400 mb-4">
                Total Repayments Collected
              </div>

              {/* 4-Bucket Distribution */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded bg-slate-800/60 border border-slate-700/50">
                  <span className="text-blue-300">1. Principal Capital</span>
                  <span className="font-mono font-semibold text-white">₹28,600.00</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded bg-slate-800/60 border border-slate-700/50">
                  <span className="text-emerald-400">2. Agreed Earnings</span>
                  <span className="font-mono font-semibold text-emerald-300">₹3,500.00</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded bg-slate-800/60 border border-slate-700/50">
                  <span className="text-amber-400">3. Late Charges</span>
                  <span className="font-mono font-semibold text-amber-300">₹400.00</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded bg-slate-800/60 border border-slate-700/50">
                  <span className="text-slate-400">4. Other Fees</span>
                  <span className="font-mono font-semibold text-slate-400">₹0.00</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between">
              <span>Strict Profit Separation</span>
              <span className="text-blue-400 font-medium">Reconciled</span>
            </div>
          </div>
        </div>

        {/* Section Compliance Notice */}
        <div className="mt-8 pt-4 border-t border-slate-800/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-brand-400 shrink-0" />
            <span>
              <strong>Sample Data Notice:</strong> Figures above illustrate sample Indian Rupee (₹) outputs and financial accounting rules.
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            Computed with Integer Paise Arithmetic (0 Float Errors)
          </span>
        </div>
      </div>
    </section>
  );
};
