import React from 'react';
import { ShieldAlert, Info, CheckCircle2 } from 'lucide-react';

export const SmartScreenGuide: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center">
          <ShieldAlert className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-navy-900">
            Windows Defender SmartScreen & Code Signing Disclosure
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Clear, honest guidance on Windows publisher warnings and how to proceed safely.
          </p>
        </div>
      </div>

      <div className="space-y-4 text-xs sm:text-sm text-slate-600">
        <div className="bg-amber-50/70 border border-amber-200 rounded-lg p-4 space-y-2 text-amber-950">
          <div className="font-semibold flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-800 shrink-0" />
            <span>Honest Security Notice: Unsigned Independent Release</span>
          </div>
          <p className="text-xs leading-relaxed">
            Personal Money Manager is currently distributed as an independently built binary without a paid Extended Validation (EV) code-signing certificate (which costs hundreds of dollars annually). Consequently, Windows Defender SmartScreen may display a blue dialog stating:
          </p>
          <div className="bg-white/80 p-2.5 rounded border border-amber-300 font-mono text-xs text-slate-800">
            "Windows protected your PC — Microsoft Defender SmartScreen prevented an unrecognized app from starting."
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-navy-900 text-sm">
            How to verify and proceed safely:
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
            <li>
              <strong>Verify the SHA-256 Checksum:</strong> Run the PowerShell command above to ensure your downloaded file matches our published hash.
            </li>
            <li>
              <strong>Click "More info":</strong> On the Windows Defender blue dialog, click the underlined text labeled <em>"More info"</em>.
            </li>
            <li>
              <strong>Review App Name:</strong> Confirm that the app name says <em>Personal Money Manager</em>.
            </li>
            <li>
              <strong>Click "Run anyway":</strong> Click the <em>"Run anyway"</em> button to start the installation wizard.
            </li>
          </ol>
        </div>

        <div className="pt-3 border-t border-slate-200 flex items-start gap-2 text-xs text-slate-500">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <span>
            <strong>Our Commitment to Trust:</strong> We never ask you to disable Windows Defender, turn off antivirus software, or alter system security settings. SmartScreen is an expected reputation filter for new independent open releases.
          </span>
        </div>
      </div>
    </div>
  );
};
