import React from 'react';
import {
  PieChart,
  Wallet,
  Users,
  Split,
  CalendarClock,
  TrendingUp,
  FileSpreadsheet,
  Bell,
  Database,
  Lock,
} from 'lucide-react';

interface FeatureItem {
  icon: React.ElementType;
  title: string;
  badge?: string;
  description: string;
  details: string[];
  color: string;
}

export const FeatureGrid: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: PieChart,
      title: 'Expense Tracking',
      badge: 'Daily Spending',
      color: 'bg-amber-50 text-amber-700 border-amber-200',
      description:
        'Log daily expenses with pre-seeded categories (Food, Rent, Bills, Transport, Healthcare) or create unlimited custom categories.',
      details: [
        'Integer paise precision (zero rounding error)',
        'Linked directly to your chosen liquid payment account',
        'Filterable by category and date range',
      ],
    },
    {
      icon: Wallet,
      title: 'Income Management',
      badge: 'Liquid Cash',
      color: 'bg-brand-50 text-brand-700 border-brand-200',
      description:
        'Manage income across cash in hand, bank accounts, and digital wallets with clear deposit and salary logging.',
      details: [
        'Record initial balances, salaries, and freelance inflows',
        'Zero double-counting of receivables or loans',
        'Instant transfer recording between internal accounts',
      ],
    },
    {
      icon: Users,
      title: 'Loan and Borrower Management',
      badge: 'Receivables',
      color: 'bg-purple-50 text-purple-700 border-purple-200',
      description:
        'Maintain a professional record of money lent to individuals, agreed return dates, repayment commitments, and borrower contact details.',
      details: [
        'Lending recorded as an asset swap, not an expense',
        'Track contact histories and repayment notes',
        'Clear visibility of active vs. closed loans',
      ],
    },
    {
      icon: Split,
      title: 'Partial Repayments',
      badge: '4-Bucket Logic',
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      description:
        'Support flexible partial and full repayments by allocating funds across Principal, Agreed Earnings, Late Charges, and Other fees.',
      details: [
        'Recovers original capital without false profit spikes',
        'Recognizes earnings strictly when cash is collected',
        'Manual or automated bucket prioritization',
      ],
    },
    {
      icon: CalendarClock,
      title: 'Overdue Tracking',
      badge: 'Idempotent Fees',
      color: 'bg-rose-50 text-rose-700 border-rose-200',
      description:
        'Deterministic flat daily overdue fee additions computed idempotently across calendar day boundaries. Never duplicates on restart.',
      details: [
        'Accrues strictly once per overdue calendar day',
        'Configurable grace period per loan agreement',
        'Real-time overdue calculation upon application load',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Financial Analytics',
      badge: 'Cash Flow & P&L',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description:
        'Generate cash flow statements, profit & loss summaries, borrower ledger reports, and a real-time reconciliation formula audit.',
      details: [
        'Strict separation of realized profits from expected returns',
        'Monthly and yearly trend breakdowns',
        'Reconciliation formula verifies opening vs. closing cash',
      ],
    },
    {
      icon: FileSpreadsheet,
      title: 'Reports and CSV/Excel Export',
      badge: 'Data Freedom',
      color: 'bg-teal-50 text-teal-700 border-teal-200',
      description:
        'Export any transaction ledger, borrower portfolio, or financial summary to UTF-8 BOM CSV files ready for instant opening in Microsoft Excel.',
      details: [
        'Clean tabular exports with standard Indian currency format',
        'One-click full portfolio snapshot export',
        'Zero vendor lock-in for your financial records',
      ],
    },
    {
      icon: Bell,
      title: 'Reminders and Notifications',
      badge: 'Windows Alerts',
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      description:
        'Native Windows desktop notifications alert you when loan repayment dates approach or overdue fees accrue.',
      details: [
        'Desktop notification integration for upcoming due dates',
        'In-app notification queue fallback',
        'Configurable alert thresholds for overdue loans',
      ],
    },
    {
      icon: Database,
      title: 'Backup and Restore',
      badge: 'Disaster Recovery',
      color: 'bg-slate-100 text-slate-800 border-slate-300',
      description:
        'Built-in SQLite online backup API safely captures the database even during write-ahead logging (WAL), generating pre-restore safety snapshots.',
      details: [
        'Integrity check verification on every backup',
        'Automated and manual timestamped backup archives',
        'Fail-safe restore workflow prevents database corruption',
      ],
    },
    {
      icon: Lock,
      title: 'PIN/Password Protection',
      badge: 'Local Security',
      color: 'bg-violet-50 text-violet-700 border-violet-200',
      description:
        'Protects against unauthorized access on shared PCs using memory-hard Argon2id key derivation with automatic 5-attempt lockout security.',
      details: [
        'Choice of master alphanumeric password or quick numeric PIN',
        'Automated 5-minute lockout after 5 failed attempts',
        '100% offline authentication with zero cloud transmission',
      ],
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200">
            <span>Verified Desktop Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Comprehensive Financial Management for Windows
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Every feature is engineered to preserve strict accounting rules, keep your data strictly on your PC, and give you complete financial clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8FAFC]/80 rounded-2xl p-6 border border-slate-200/80 hover:border-brand-300 hover:bg-white hover:shadow-card transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white text-brand-600 flex items-center justify-center border border-slate-200/90 shadow-2xs group-hover:scale-105 group-hover:bg-brand-50 transition-all duration-200">
                      <Icon className="w-5 h-5 text-brand-600" />
                    </div>
                    {feature.badge && (
                      <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${feature.color}`}>
                        {feature.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/70 space-y-1.5">
                  {feature.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
