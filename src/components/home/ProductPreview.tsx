import React, { useState } from 'react';
import {
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  Users,
  AlertCircle,
  FileSpreadsheet,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';

export const ProductPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'borrowers' | 'repayment' | 'audit'>('overview');

  return (
    <section className="py-16 md:py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Illustrative Product Mockup</span>
          </div>
          <h2 className="text-3xl font-bold text-navy-900 tracking-tight">
            Designed for Financial Clarity and Control
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Inspect cash flow, categorize daily expenditures, and manage borrower portfolios without confusing spreadsheets or online subscription services.
          </p>
        </div>

        {/* Clear Mandatory Compliance Disclosure */}
        <div className="max-w-4xl mx-auto mb-6 bg-slate-200/70 text-slate-700 border border-slate-300 rounded-lg px-4 py-2 text-xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-slate-600 shrink-0" />
            <span>
              <strong>Note:</strong> Illustrative interface preview. Demonstrates sample INR (₹) formatting and accounting logic. Does not represent real user data.
            </span>
          </div>
          <span className="hidden sm:inline-block font-mono text-[11px] text-slate-500">
            PMM Desktop UI
          </span>
        </div>

        {/* Mockup Container (Mimicking Windows Desktop Window) */}
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-elevated border border-slate-300/80 overflow-hidden">
          {/* Windows Title Bar */}
          <div className="bg-slate-900 text-slate-300 px-4 py-2.5 flex items-center justify-between border-b border-slate-800 text-xs select-none">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-brand-500 flex items-center justify-center text-white text-[10px] font-bold">
                ₹
              </div>
              <span className="font-medium text-slate-200">
                Personal Money Manager — [Local Ledger: %APPDATA%\personal-money-manager\data\pmm.sqlite]
              </span>
            </div>
            {/* Windows Window Controls */}
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
            </div>
          </div>

          {/* Sub-header Navigation / Tabs */}
          <div className="bg-slate-50 px-4 sm:px-6 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
            <div className="flex space-x-1 sm:space-x-4 py-2 overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                  activeTab === 'overview'
                    ? 'bg-white text-brand-700 shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                1. Cash & Expense Overview
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('borrowers')}
                className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                  activeTab === 'borrowers'
                    ? 'bg-white text-brand-700 shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                2. Borrower Portfolio
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('repayment')}
                className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                  activeTab === 'repayment'
                    ? 'bg-white text-brand-700 shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                3. 4-Bucket Repayment Logic
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('audit')}
                className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                  activeTab === 'audit'
                    ? 'bg-white text-brand-700 shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                4. Audit & Integrity
              </button>
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs text-slate-500 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>WAL-Safe SQLite Connected</span>
            </div>
          </div>

          {/* Tab 1: Dashboard Overview */}
          {activeTab === 'overview' && (
            <div className="p-4 sm:p-6 space-y-6">
              {/* Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Cash Balance */}
                <div className="bg-slate-50/80 rounded-lg p-4 border border-slate-200">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span className="font-medium">Total Liquid Cash</span>
                    <Wallet className="w-4 h-4 text-brand-600" />
                  </div>
                  <div className="text-2xl font-bold text-navy-900">₹85,400.00</div>
                  <div className="text-[11px] text-slate-500 mt-1 flex items-center justify-between">
                    <span>Cash + 2 Bank Accounts</span>
                    <span className="text-emerald-600 font-semibold">Excludes loans</span>
                  </div>
                </div>

                {/* Monthly Expenses */}
                <div className="bg-slate-50/80 rounded-lg p-4 border border-slate-200">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span className="font-medium">Monthly Expenses</span>
                    <ArrowUpRight className="w-4 h-4 text-amber-600" />
                  </div>
                  <div className="text-2xl font-bold text-navy-900">₹24,850.00</div>
                  <div className="text-[11px] text-slate-500 mt-1 flex items-center justify-between">
                    <span>Current Month</span>
                    <span>18 entries</span>
                  </div>
                </div>

                {/* Outstanding Receivables */}
                <div className="bg-slate-50/80 rounded-lg p-4 border border-slate-200">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span className="font-medium">Outstanding Receivables</span>
                    <Users className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-navy-900">₹60,000.00</div>
                  <div className="text-[11px] text-slate-500 mt-1 flex items-center justify-between">
                    <span>Money Lent (Asset)</span>
                    <span className="text-purple-600 font-semibold">3 Active Borrowers</span>
                  </div>
                </div>
              </div>

              {/* Middle Section: Cash Flow Breakdown & Upcoming Repayments */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Cash Flow vs Expenses */}
                <div className="border border-slate-200 rounded-lg p-4 bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Income vs. Expense Distribution
                    </h4>
                    <span className="text-[11px] text-slate-500">October 2026</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-600">Primary Salary / Inflows</span>
                        <span className="font-semibold text-slate-900">₹65,000.00</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '85%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-600">Rent & Household Utilities</span>
                        <span className="font-semibold text-slate-900">₹14,500.00</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-brand-500 h-2 rounded-full" style={{ width: '42%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-600">Groceries & Food</span>
                        <span className="font-semibold text-slate-900">₹6,850.00</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-amber-500 h-2 rounded-full" style={{ width: '22%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-600">Realized Profit (Earnings Collected)</span>
                        <span className="font-semibold text-emerald-600">₹3,500.00</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '12%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Upcoming Repayments Table */}
                <div className="border border-slate-200 rounded-lg p-4 bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Upcoming Borrower Repayments
                    </h4>
                    <span className="text-[11px] text-brand-600 font-medium">Auto-Idempotent Fees</span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100 text-xs">
                      <div>
                        <div className="font-semibold text-slate-900">Rohan K.</div>
                        <div className="text-[11px] text-slate-500">Due: 15 Oct 2026 • ₹25,000.00 Principal</div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                        On Schedule
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100 text-xs">
                      <div>
                        <div className="font-semibold text-slate-900">Aditya V.</div>
                        <div className="text-[11px] text-slate-500">Due: 08 Oct 2026 • ₹15,000.00 Principal</div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200">
                        Overdue (+₹400 Fees)
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100 text-xs">
                      <div>
                        <div className="font-semibold text-slate-900">Meera S.</div>
                        <div className="text-[11px] text-slate-500">Due: 28 Oct 2026 • ₹20,000.00 Principal</div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
                        Pending
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Transactions List */}
              <div className="border border-slate-200 rounded-lg p-4 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Recent Verified Ledger Entries
                  </h4>
                  <span className="text-[11px] text-slate-500">Integer Paise Precision</span>
                </div>
                <div className="divide-y divide-slate-100 text-xs">
                  <div className="py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                        <ArrowDownLeft className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800">Repayment from Rohan K. (Agreed Return)</div>
                        <div className="text-[10px] text-slate-400">11 Oct 2026 • Bank Account #1 • Realized Profit</div>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-emerald-600">+₹2,500.00</span>
                  </div>

                  <div className="py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800">Office Internet Fiber Bill</div>
                        <div className="text-[10px] text-slate-400">10 Oct 2026 • Expenses: Bills • Cash in Hand</div>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-slate-900">-₹1,180.00</span>
                  </div>

                  <div className="py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                        <Wallet className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800">Loan Disbursed to Aditya V.</div>
                        <div className="text-[10px] text-slate-400">01 Oct 2026 • Asset Swap (Liquid Cash → Receivable)</div>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-slate-700">₹15,000.00 (Asset)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Borrower Portfolio */}
          {activeTab === 'borrowers' && (
            <div className="p-4 sm:p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <h3 className="text-sm font-bold text-navy-900">Active Lending Portfolio</h3>
                  <p className="text-xs text-slate-500">
                    Tracks capital principal, promised returns, contact history, and maturity dates.
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500">Total Receivables</div>
                  <div className="text-sm font-bold text-brand-700">₹60,000.00</div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-600 font-semibold border-y border-slate-200">
                    <tr>
                      <th className="py-2.5 px-3">Borrower</th>
                      <th className="py-2.5 px-3">Principal Lent</th>
                      <th className="py-2.5 px-3">Agreed Return</th>
                      <th className="py-2.5 px-3">Overdue Accrual</th>
                      <th className="py-2.5 px-3">Due Date</th>
                      <th className="py-2.5 px-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-3 px-3 font-medium text-slate-900">Rohan K.</td>
                      <td className="py-3 px-3 font-mono">₹25,000.00</td>
                      <td className="py-3 px-3 font-mono text-emerald-600">+₹2,500.00</td>
                      <td className="py-3 px-3 font-mono text-slate-400">₹0.00</td>
                      <td className="py-3 px-3 text-slate-600">15 Oct 2026</td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-medium text-slate-900">Aditya V.</td>
                      <td className="py-3 px-3 font-mono">₹15,000.00</td>
                      <td className="py-3 px-3 font-mono text-emerald-600">+₹1,200.00</td>
                      <td className="py-3 px-3 font-mono text-amber-700 font-semibold">+₹400.00</td>
                      <td className="py-3 px-3 text-red-600 font-medium">08 Oct 2026</td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200">
                          4 Days Overdue
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-medium text-slate-900">Meera S.</td>
                      <td className="py-3 px-3 font-mono">₹20,000.00</td>
                      <td className="py-3 px-3 font-mono text-emerald-600">+₹2,000.00</td>
                      <td className="py-3 px-3 font-mono text-slate-400">₹0.00</td>
                      <td className="py-3 px-3 text-slate-600">28 Oct 2026</td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-brand-50 text-brand-700 border border-brand-200">
                          On Track
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 text-xs text-slate-600 space-y-1">
                <div className="font-semibold text-slate-800">Financial Accounting Rule in PMM:</div>
                <p>
                  Lending is strictly treated as an asset exchange (Liquid Cash → Receivable). It never artificially lowers your net worth as an expense. Expected returns remain separate until cash is collected.
                </p>
              </div>
            </div>
          )}

          {/* Tab 3: 4-Bucket Repayment Allocation */}
          {activeTab === 'repayment' && (
            <div className="p-4 sm:p-6 space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <h3 className="text-sm font-bold text-navy-900">4-Bucket Repayment Logic</h3>
                <p className="text-xs text-slate-500">
                  When a borrower makes a partial or full payment, funds are mathematically allocated across 4 distinct buckets to prevent tax and profit distortion.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs">
                  <div className="font-bold text-blue-900 text-sm">Bucket 1: Principal</div>
                  <p className="text-blue-700 mt-1">
                    Recovers original capital. Restores liquid balance. <strong>Zero profit recognition.</strong>
                  </p>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-xs">
                  <div className="font-bold text-emerald-900 text-sm">Bucket 2: Agreed Earnings</div>
                  <p className="text-emerald-700 mt-1">
                    Pre-agreed premium or interest. Recognized as <strong>Realized Profit</strong> upon cash receipt.
                  </p>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs">
                  <div className="font-bold text-amber-900 text-sm">Bucket 3: Late Charges</div>
                  <p className="text-amber-700 mt-1">
                    Accrued daily overdue penalty fees. Tracked and settled idempotently.
                  </p>
                </div>

                <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 text-xs">
                  <div className="font-bold text-slate-900 text-sm">Bucket 4: Other / Misc</div>
                  <p className="text-slate-700 mt-1">
                    Bank transfer fee reimbursements, processing costs, or adjustments.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 text-xs text-slate-600">
                <span className="font-semibold text-slate-800">Why this matters:</span> In generic expense apps, getting ₹10,000 back from a friend is wrongly counted as "Income", and lending ₹10,000 is wrongly counted as "Expense". Personal Money Manager maintains double-entry integrity so your real cash, capital, and profits are always 100% accurate.
              </div>
            </div>
          )}

          {/* Tab 4: Audit & Integrity */}
          {activeTab === 'audit' && (
            <div className="p-4 sm:p-6 space-y-4">
              <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-navy-900">Real-Time Reconciliation Audit</h3>
                  <p className="text-xs text-slate-500">
                    SQLite WAL integrity check runs on every startup with instant export.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Audit Passed: 0 Discrepancies</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="border border-slate-200 rounded-lg p-3 bg-white space-y-2">
                  <div className="font-semibold text-slate-800 flex items-center justify-between">
                    <span>Reconciliation Formula</span>
                    <span className="text-[10px] font-mono bg-slate-100 px-1 py-0.5 rounded">Exact</span>
                  </div>
                  <div className="font-mono text-[11px] text-slate-600 bg-slate-50 p-2 rounded border border-slate-200 space-y-1">
                    <div>Opening Balance: ₹50,000.00</div>
                    <div>+ Inflows & Income: ₹65,000.00</div>
                    <div>- Daily Expenses: ₹24,850.00</div>
                    <div>- Net Lent Principal: ₹15,000.00</div>
                    <div>+ Realized Earnings: ₹10,250.00</div>
                    <div className="border-t border-slate-300 pt-1 font-bold text-slate-900">
                      = Verified Liquid Cash: ₹85,400.00
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg p-3 bg-white space-y-2">
                  <div className="font-semibold text-slate-800 flex items-center justify-between">
                    <span>Backup & Integrity Status</span>
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                  </div>
                  <ul className="space-y-1.5 text-slate-600">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>SQLite Foreign Keys: Enforced</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Write-Ahead Logging (WAL Mode): Active</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Automatic Pre-Restore Snapshots: Enabled</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Export Format: UTF-8 BOM CSV / Excel Ready</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Windows Status Bar */}
          <div className="bg-slate-100 px-4 py-2 border-t border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span>Database: pmm.sqlite (WAL)</span>
              <span>•</span>
              <span>Argon2id Vault: Locked on inactivity</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500">
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Offline Windows 10 & 11 (64-bit)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
