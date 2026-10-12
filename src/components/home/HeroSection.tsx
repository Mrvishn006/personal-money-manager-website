import React from 'react';
import { Link } from 'react-router-dom';
import {
  Download,
  ArrowRight,
  ShieldCheck,
  HardDrive,
  Cpu,
  IndianRupee,
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  Users,
  AlertCircle,
  Clock,
  Sparkles,
} from 'lucide-react';
import { productConfig } from '../../config/product';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-[#F0F7FF] via-white to-slate-50 border-b border-slate-200/80">
      {/* Subtle background tech accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.035] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Small Label Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200/80 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
              <span>Simple. Secure. Powerful.</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-navy-900 tracking-tight leading-[1.12]">
              Take control of your money.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Track expenses, manage money you've lent, monitor repayments, and understand your finances with a personal money manager for Windows.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <Link to="/download">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<Download className="w-5 h-5" />}
                  className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 shadow-md shadow-brand-600/25 font-bold"
                >
                  Download for Windows
                </Button>
              </Link>
              <a href="#features">
                <Button
                  variant="outline"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4 text-slate-500" />}
                  className="w-full sm:w-auto border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold"
                >
                  Explore Features
                </Button>
              </a>
            </div>

            {/* Compact Benefit Labels */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 gap-2.5">
              <div className="flex items-center gap-2 text-xs text-slate-700 bg-white/80 backdrop-blur-xs p-2.5 rounded-lg border border-slate-200/70 shadow-2xs">
                <Cpu className="w-4 h-4 text-brand-600 shrink-0" />
                <div>
                  <span className="font-semibold block text-navy-900 text-xs">Windows 10 & 11</span>
                  <span className="text-[11px] text-slate-500">64-bit Architecture</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-700 bg-white/80 backdrop-blur-xs p-2.5 rounded-lg border border-slate-200/70 shadow-2xs">
                <HardDrive className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <span className="font-semibold block text-navy-900 text-xs">100% Local Storage</span>
                  <span className="text-[11px] text-slate-500">Offline SQLite 3</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-700 bg-white/80 backdrop-blur-xs p-2.5 rounded-lg border border-slate-200/70 shadow-2xs">
                <IndianRupee className="w-4 h-4 text-brand-600 shrink-0" />
                <div>
                  <span className="font-semibold block text-navy-900 text-xs">Native INR Support</span>
                  <span className="text-[11px] text-slate-500">Exact Integer Paise</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-700 bg-white/80 backdrop-blur-xs p-2.5 rounded-lg border border-slate-200/70 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0" />
                <div>
                  <span className="font-semibold block text-navy-900 text-xs">Offline Privacy</span>
                  <span className="text-[11px] text-slate-500">Zero Cloud Sync</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic Desktop Application Mockup */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Decorative background glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/20 via-blue-600/10 to-emerald-500/20 rounded-2xl blur-xl opacity-70 -z-10" />

              {/* Windows Application Window */}
              <div className="bg-white rounded-2xl shadow-elevated border border-slate-300/80 overflow-hidden">
                {/* Windows Title Bar */}
                <div className="bg-slate-900 text-slate-300 px-4 py-2.5 flex items-center justify-between border-b border-slate-800 text-xs select-none">
                  <div className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded bg-brand-500 flex items-center justify-center text-white text-[10px] font-bold">
                      ₹
                    </div>
                    <span className="font-medium text-slate-200 text-[11px] sm:text-xs truncate">
                      Personal Money Manager — [Local Ledger: %APPDATA%\personal-money-manager\data\pmm.sqlite]
                    </span>
                  </div>
                  {/* Windows Window Controls */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700 hover:bg-slate-600 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700 hover:bg-slate-600 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-red-700 hover:bg-red-600 inline-block" />
                  </div>
                </div>

                {/* Sub-bar: Demo Data Banner */}
                <div className="bg-sky-50/70 px-4 py-1.5 border-b border-sky-100 flex items-center justify-between text-[11px] text-brand-900">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                    <span className="font-medium">Illustrative Dashboard Preview • Demo Values (INR)</span>
                  </div>
                  <span className="font-mono text-[10px] bg-sky-100 text-sky-800 px-2 py-0.5 rounded font-semibold">
                    v{productConfig.currentRelease.version}
                  </span>
                </div>

                {/* Dashboard Body */}
                <div className="p-4 sm:p-5 space-y-4 bg-slate-50/40">
                  {/* Top Metric Cards Row: Cash Balance, Total Lent, Outstanding Receivables */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Cash Balance */}
                    <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-2xs">
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                        <span className="font-medium">Cash Balance</span>
                        <div className="w-6 h-6 rounded-md bg-blue-50 text-brand-600 flex items-center justify-center">
                          <Wallet className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-navy-900 font-mono">
                        ₹85,400.00
                      </div>
                      <div className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                        <span>●</span>
                        <span>Liquid & Reconciled</span>
                      </div>
                    </div>

                    {/* Total Money Lent */}
                    <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-2xs">
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                        <span className="font-medium">Total Money Lent</span>
                        <div className="w-6 h-6 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center">
                          <Users className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-navy-900 font-mono">
                        ₹60,000.00
                      </div>
                      <div className="text-[11px] text-purple-600 font-semibold mt-1 flex items-center gap-1">
                        <span>●</span>
                        <span>Asset Swap (Not Expense)</span>
                      </div>
                    </div>

                    {/* Outstanding Receivables */}
                    <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-2xs">
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                        <span className="font-medium">Outstanding Receivables</span>
                        <div className="w-6 h-6 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center">
                          <Clock className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-navy-900 font-mono">
                        ₹60,000.00
                      </div>
                      <div className="text-[11px] text-amber-600 font-semibold mt-1 flex items-center gap-1">
                        <span>●</span>
                        <span>3 Active Borrowers</span>
                      </div>
                    </div>
                  </div>

                  {/* Middle Row: Income vs Expenses & Upcoming Repayments */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Income vs Expenses Mini Visualizer */}
                    <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-2xs space-y-2.5">
                      <div className="flex items-center justify-between text-xs font-bold text-navy-900">
                        <span>Income vs. Expenses</span>
                        <span className="text-[11px] text-slate-500 font-normal">October 2026</span>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-[11px] mb-1">
                            <span className="text-slate-600">Total Inflow / Salary</span>
                            <span className="font-mono font-semibold text-emerald-700">₹65,000.00</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                            <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '80%' }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-[11px] mb-1">
                            <span className="text-slate-600">Daily Expenses</span>
                            <span className="font-mono font-semibold text-slate-800">₹24,850.00</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                            <div className="bg-amber-500 h-2 rounded-full" style={{ width: '38%' }} />
                          </div>
                        </div>
                        <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500">
                          <span>Net Cash Retained:</span>
                          <span className="font-mono font-bold text-brand-700">+₹40,150.00</span>
                        </div>
                      </div>
                    </div>

                    {/* Upcoming Repayments & Loan Summary */}
                    <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-2xs space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold text-navy-900">
                        <span>Upcoming Repayments</span>
                        <span className="text-[10px] text-brand-600 font-mono">4-Bucket Allocation</span>
                      </div>
                      <div className="space-y-1.5 text-xs">
                        <div className="flex items-center justify-between p-1.5 rounded bg-slate-50 border border-slate-100">
                          <div>
                            <span className="font-semibold text-slate-900">Rohan K.</span>
                            <span className="text-[10px] text-slate-500 block">Due 15 Oct • ₹25,000</span>
                          </div>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                            On Schedule
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-1.5 rounded bg-slate-50 border border-slate-100">
                          <div>
                            <span className="font-semibold text-slate-900">Aditya V.</span>
                            <span className="text-[10px] text-slate-500 block">Due 08 Oct • ₹15,000</span>
                          </div>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                            Overdue (+₹400)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row: Recent Transactions */}
                  <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-2xs">
                    <div className="flex items-center justify-between text-xs font-bold text-navy-900 mb-2">
                      <span>Recent Transactions</span>
                      <span className="text-[11px] text-slate-500 font-normal">Integer Paise Precision</span>
                    </div>
                    <div className="divide-y divide-slate-100 text-xs space-y-1">
                      <div className="pt-1 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                            <ArrowDownLeft className="w-3 h-3" />
                          </div>
                          <div>
                            <span className="font-medium text-slate-800">Repayment from Rohan K. (Agreed Return)</span>
                            <span className="text-[10px] text-slate-400 block">Realized Profit • Bank #1</span>
                          </div>
                        </div>
                        <span className="font-mono font-bold text-emerald-600">+₹2,500.00</span>
                      </div>

                      <div className="pt-1 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center">
                            <ArrowUpRight className="w-3 h-3" />
                          </div>
                          <div>
                            <span className="font-medium text-slate-800">Office Internet Fiber Bill</span>
                            <span className="text-[10px] text-slate-400 block">Category: Bills • Cash in Hand</span>
                          </div>
                        </div>
                        <span className="font-mono font-bold text-slate-900">-₹1,180.00</span>
                      </div>
                    </div>
                  </div>

                  {/* Windows Mockup Footer Note */}
                  <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-200/80">
                    <div className="flex items-center gap-1.5">
                      <AlertCircle className="w-3 h-3 text-slate-400" />
                      <span>Illustrative preview only. Personal Money Manager operates 100% offline.</span>
                    </div>
                    <span className="font-mono text-emerald-700 font-semibold">SQLite WAL Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
