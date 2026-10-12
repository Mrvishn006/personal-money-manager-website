import React, { useEffect } from 'react';
import {
  Coins,
  ArrowLeftRight,
  Split,
  CalendarCheck,
  Database,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const FeaturesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Hero */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200">
            <Layers className="w-3.5 h-3.5" />
            <span>Financial Architecture & Rules</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
            Engineered with Strict Accounting Integrity
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Most generic expense trackers treat loans as expenses, count repayments as income, and round cents arbitrarily. Personal Money Manager follows formal financial accounting principles.
          </p>
        </div>

        {/* Feature 1: Integer Paise Math */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center">
              <Coins className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-navy-900">
              1. Integer Paise Precision (Zero Rounding Errors)
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Computers frequently create floating-point errors when calculating decimal currency (such as <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-xs">0.1 + 0.2 = 0.30000000000000004</code>). In financial ledgers, fractional rounding discrepancies accumulate over time.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Personal Money Manager internally represents and calculates all amounts as exact integer paise (<code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-xs">100 paise = ₹1.00</code>). Formatting into the Indian numbering system (<code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-xs">₹1,50,000.00</code>) is performed purely for visual display, guaranteeing zero mathematical drift.
            </p>
            <div className="space-y-1 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Exact double-entry precision across thousands of entries</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Standard Indian grouping format (Lakhs & Crores)</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-slate-900 text-slate-200 p-6 rounded-xl font-mono text-xs space-y-3 border border-slate-800">
            <div className="text-slate-400 text-[11px] pb-2 border-b border-slate-800 flex justify-between">
              <span>IEEE 754 vs Integer Paise</span>
              <span className="text-emerald-400">PMM Architecture</span>
            </div>
            <div className="text-red-400">
              // Generic Apps (Float) <br />
              0.1 + 0.2 = 0.30000000000000004
            </div>
            <div className="text-emerald-400">
              // PMM Internal Engine (Paise) <br />
              10 paise + 20 paise = 30 paise <br />
              Display: ₹0.30 (Exact)
            </div>
            <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
              Stored as SQLite INTEGER. No float rounding ever.
            </div>
          </div>
        </div>

        {/* Feature 2: Lending is Not an Expense */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <ArrowLeftRight className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-navy-900">
              2. Lending is an Asset Swap, Not an Expense
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              When you lend ₹50,000 to a friend or colleague, your net worth has not decreased. You merely exchanged liquid cash for an equivalent receivable asset.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Generic expense apps falsely log this as a ₹50,000 expense, ruining your monthly budget graphics. In Personal Money Manager, lending reduces your liquid cash account and proportionally increases your Loan Portfolio Receivables, keeping your net worth completely intact.
            </p>
          </div>
          <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3 text-xs">
            <div className="font-bold text-slate-900 text-sm">Asset Swap Example</div>
            <div className="space-y-2">
              <div className="flex justify-between p-2 rounded bg-white border border-slate-200">
                <span className="text-slate-600">Bank Account Balance</span>
                <span className="font-mono font-semibold text-slate-900">₹1,00,000 → ₹75,000 (-₹25,000)</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-white border border-slate-200">
                <span className="text-slate-600">Borrower Receivables</span>
                <span className="font-mono font-semibold text-emerald-700">₹0 → ₹25,000 (+₹25,000)</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-emerald-50 border border-emerald-200 font-bold text-emerald-900">
                <span>Net Portfolio Value</span>
                <span className="font-mono">₹1,00,000 (Unchanged)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: 4-Bucket Repayment Allocation */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-subtle space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center">
              <Split className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-navy-900">
              3. The 4-Bucket Repayment Allocation Model
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              When borrowers make repayments—especially irregular or partial installments—funds must be allocated systematically across four distinct financial buckets:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/70 space-y-2">
              <div className="font-bold text-navy-900 text-sm">Bucket 1: Principal</div>
              <p className="text-xs text-slate-600">
                Recovers your original capital. Directly reduces outstanding receivables. <em>Zero profit recognition.</em>
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-emerald-50/70 space-y-2">
              <div className="font-bold text-emerald-900 text-sm">Bucket 2: Agreed Earnings</div>
              <p className="text-xs text-emerald-800">
                Pre-agreed profit margin, interest, or return. Recognized as <strong>Realized Profit</strong> only when collected.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-amber-50/70 space-y-2">
              <div className="font-bold text-amber-900 text-sm">Bucket 3: Late Charges</div>
              <p className="text-xs text-amber-800">
                Deterministic overdue penalties accrued per calendar day. Settled independently.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/70 space-y-2">
              <div className="font-bold text-slate-900 text-sm">Bucket 4: Other / Misc</div>
              <p className="text-xs text-slate-600">
                Bank transfer charges, administrative reimbursements, or customized fee offsets.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 4: Deterministic Overdue Fee Accruals */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center">
              <CalendarCheck className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-navy-900">
              4. Deterministic, Idempotent Overdue Tracking
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              If a borrower misses a repayment due date and an overdue daily fee was configured, Personal Money Manager computes fee additions idempotently across exact calendar date boundaries.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Whether you open the desktop app three times a day or leave it closed for two weeks, charges accrue exactly once per eligible elapsed calendar day. Restarting the software never duplicates fees.
            </p>
          </div>
          <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3 text-xs">
            <div className="font-bold text-slate-900 text-sm">Idempotent Accrual Rules</div>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Runs on midnight date boundary transition</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Idempotent: App restarts never duplicate accruals</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Optional grace period configuration per loan</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Windows desktop notification alerts upon due date</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature 5: SQLite WAL & Security */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-navy-900">
              5. WAL-Safe SQLite Backups & Disaster Recovery
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              SQLite operates in Write-Ahead Logging (WAL) mode for fast, safe concurrent disk writes. During backup creation, Personal Money Manager uses the official SQLite online backup API to ensure that even uncheckpointed WAL frames are safely and completely archived without database locking.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Before restoring any database snapshot, the application automatically captures a pre-restore backup, verifies SQLite schema integrity, and checks foreign keys to safeguard against accidental overwrites.
            </p>
          </div>
          <div className="lg:col-span-5 bg-slate-900 text-slate-200 p-6 rounded-xl font-mono text-xs space-y-3 border border-slate-800">
            <div className="text-slate-400 text-[11px] pb-2 border-b border-slate-800 flex items-center justify-between">
              <span>SQLite Storage Protocol</span>
              <span className="text-brand-400">WAL Mode</span>
            </div>
            <div>PRAGMA journal_mode = WAL;</div>
            <div>PRAGMA foreign_keys = ON;</div>
            <div>PRAGMA synchronous = NORMAL;</div>
            <div className="pt-2 border-t border-slate-800 text-[11px] text-emerald-400">
              ✓ Automated Pre-Restore Safety Snapshots
            </div>
          </div>
        </div>

        {/* Action CTA */}
        <div className="text-center pt-8 space-y-4">
          <h3 className="text-2xl font-bold text-navy-900">
            Ready to experience principled financial management?
          </h3>
          <div>
            <Link to="/download">
              <Button variant="primary" size="lg">
                Download for Windows 10 & 11
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
