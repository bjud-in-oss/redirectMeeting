import React, { useState } from 'react';
import { MAIN_MEETING, UI_TEXTS } from '../constants';
import { Video, Copy, Check, MapPin } from 'lucide-react';

export const MeetingCard: React.FC = () => {
  const [copiedId, setCopiedId] = useState(false);
  
  const copyToClipboard = (text: string, setFn: (val: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setFn(true);
    setTimeout(() => setFn(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-brand-900/5 border border-slate-200 overflow-hidden relative">
      {/* Decorative top bar */}
      <div className="h-2 w-full bg-brand-500" />
      
      <div className="p-6 sm:p-8">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="bg-brand-50 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {MAIN_MEETING.location}
          </div>
          
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Söndagsmöten
          </h2>
          <p className="text-slate-500 max-w-sm mx-auto">
            Klicka nedan för att ansluta till mötet. Välj <strong>Kapellsalen</strong> i Zoom-menyn (Grupprum).
          </p>
        </div>

        {/* Primary Action Button */}
        <a 
          href={MAIN_MEETING.url}
          className="group relative flex items-center justify-center gap-3 w-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg py-4 px-6 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-brand-600/25 hover:shadow-brand-600/40 mb-8"
        >
          <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <Video className="w-6 h-6 animate-pulse" />
          <span>{UI_TEXTS.joinButton}</span>
        </a>

        {/* Info Footer */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
           <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {UI_TEXTS.idLabel}
            </span>
            <button 
              onClick={() => copyToClipboard(MAIN_MEETING.meetingId, setCopiedId)}
              className="flex items-center gap-2 text-sm font-mono font-medium text-slate-700 hover:text-brand-600 transition-colors"
            >
              {MAIN_MEETING.meetingId}
              {copiedId ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
            </button>
           </div>
        </div>
      </div>
    </div>
  );
};