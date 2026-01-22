import React from 'react';
import { MEETING_CONFIG, TEXTS } from '../constants';
import { Video, KeyRound, ExternalLink } from 'lucide-react';

interface HelpCardProps {
  onResume: () => void;
}

export const HelpCard: React.FC<HelpCardProps> = ({ onResume }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4 animate-fade-in border border-slate-100">
      <div className="flex flex-col items-center text-center space-y-6">
        
        <div className="bg-brand-50 p-4 rounded-full">
          <Video className="w-8 h-8 text-brand-600" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">{TEXTS.instructionsTitle}</h2>
          <p className="text-slate-600">{TEXTS.instructionsSubtitle}</p>
        </div>

        <div className="w-full bg-slate-50 p-4 rounded-xl border border-slate-100 text-left space-y-3">
          <div className="flex items-start gap-3">
            <KeyRound className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-slate-500 font-medium mb-1">{TEXTS.passcodeLabel}</p>
              <div className="flex items-center gap-2">
                <code className="bg-white px-3 py-1 rounded border border-slate-200 text-lg font-mono font-bold text-brand-700">
                  {MEETING_CONFIG.passcode}
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full">
           <a 
            href={MEETING_CONFIG.url}
            className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            {TEXTS.manualLink}
          </a>
          
          <button 
            onClick={onResume}
            className="w-full bg-white hover:bg-slate-50 text-slate-600 font-medium py-3 px-6 rounded-lg border border-slate-200 transition-colors"
          >
            {TEXTS.backButton}
          </button>
        </div>
      </div>
    </div>
  );
};