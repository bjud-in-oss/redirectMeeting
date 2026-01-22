import React, { useState } from 'react';
import { MEETING_CONFIG, TEXTS } from '../constants';
import { Copy, Check, Info, Shield, Video } from 'lucide-react';

export const HelpCard: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(MEETING_CONFIG.passcode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-brand-100 w-full max-w-md mx-auto shadow-sm">
      <div className="flex items-start gap-3 mb-4">
        <Info className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="font-semibold text-slate-800 text-sm">{TEXTS.helpTitle}</h3>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">{TEXTS.helpSubtitle}</p>
        </div>
      </div>

      <div className="space-y-3">
        {/* Platform Info */}
        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">{TEXTS.platformLabel}</span>
          </div>
          <span className="text-sm font-semibold text-slate-700">{MEETING_CONFIG.platform}</span>
        </div>

        {/* Passcode */}
        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100 group hover:border-brand-200 transition-colors">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">{TEXTS.passcodeLabel}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-mono font-bold text-slate-800 tracking-wider">{MEETING_CONFIG.passcode}</span>
            <button
              onClick={handleCopy}
              className="text-slate-400 hover:text-brand-600 transition-colors p-1"
              title={TEXTS.copy}
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};