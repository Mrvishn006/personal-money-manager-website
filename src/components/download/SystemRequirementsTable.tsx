import React from 'react';
import { Cpu, Check, Laptop, HardDrive, Monitor, Shield } from 'lucide-react';
import { productConfig } from '../../config/product';

export const SystemRequirementsTable: React.FC = () => {
  const reqs = productConfig.systemRequirements;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center">
          <Laptop className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-navy-900">
            System Requirements & Compatibility
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Verified minimum specifications for running Personal Money Manager.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-slate-50 text-slate-700 border-y border-slate-200">
            <tr>
              <th className="py-3 px-4 font-semibold">Component</th>
              <th className="py-3 px-4 font-semibold">Minimum Specification</th>
              <th className="py-3 px-4 font-semibold">Recommended Specification</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600">
            <tr>
              <td className="py-3 px-4 font-medium text-slate-900 flex items-center gap-2">
                <Laptop className="w-4 h-4 text-brand-600" />
                <span>Operating System</span>
              </td>
              <td className="py-3 px-4">Windows 10 (Version 1903+, 64-bit)</td>
              <td className="py-3 px-4 font-medium text-emerald-700">Windows 11 (64-bit)</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium text-slate-900 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-brand-600" />
                <span>CPU Architecture</span>
              </td>
              <td className="py-3 px-4">x64 (64-bit Intel or AMD)</td>
              <td className="py-3 px-4 font-medium text-emerald-700">Multi-core 64-bit processor</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium text-slate-900 flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-brand-600" />
                <span>System Memory (RAM)</span>
              </td>
              <td className="py-3 px-4">{reqs.minRam}</td>
              <td className="py-3 px-4 font-medium text-emerald-700">{reqs.recommendedRam}</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium text-slate-900 flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-brand-600" />
                <span>Disk Storage</span>
              </td>
              <td className="py-3 px-4">{reqs.diskSpace}</td>
              <td className="py-3 px-4 font-medium text-emerald-700">SSD storage for instant SQLite WAL commits</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium text-slate-900 flex items-center gap-2">
                <Monitor className="w-4 h-4 text-brand-600" />
                <span>Display Resolution</span>
              </td>
              <td className="py-3 px-4">1280 x 720</td>
              <td className="py-3 px-4 font-medium text-emerald-700">1920 x 1080 (Full HD)</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium text-slate-900 flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-600" />
                <span>Internet Requirement</span>
              </td>
              <td className="py-3 px-4" colSpan={2}>
                <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  <Check className="w-3.5 h-3.5" />
                  None — Fully operational 100% offline
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-200 text-xs text-slate-500 space-y-1">
        <div className="font-semibold text-slate-700">Additional Compatibility Notes:</div>
        <ul className="list-disc pl-4 space-y-0.5">
          {reqs.other.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
