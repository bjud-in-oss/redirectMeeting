import React from 'react';
import { TEXTS } from '../constants';
import { CircularProgress } from './CircularProgress';
import { Loader2, HelpCircle } from 'lucide-react';

interface RedirectCardProps {
  progress: number;
  timeLeft: number;
  onPause: () => void;
}

export const RedirectCard: React.FC<RedirectCardProps> = ({ progress, timeLeft, onPause }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4 relative overflow-hidden border border-slate-100">
      <div className="flex flex-col items-center text-center space-y-8">
        
        {/* Header Section */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">{TEXTS.title}</h1>
          <p className="text-slate-500 font-medium">{TEXTS.subTitle}</p>
        </div>

        {/* Animation Section */}
        <div className="relative flex flex-col items-center justify-center py-4">
          <div className="relative">
             <CircularProgress progress={progress} size={120} strokeWidth={6} />
             <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-3xl font-bold text-slate-700">{Math.ceil(timeLeft / 1000)}</span>
             </div>
          </div>
          <div className="flex items-center gap-2 mt-6 text-brand-600 animate-pulse">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span className="text-sm font-semibold uppercase tracking-wider">{TEXTS.waitMessage}</span>
          </div>
        </div>

        {/* Action Section */}
        <button 
          onClick={onPause}
          className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-600 transition-all duration-200 border border-slate-200 hover:border-slate-300"
        >
          <HelpCircle className="w-4 h-4 group-hover:text-brand-600 transition-colors" />
          <span className="text-sm font-medium">{TEXTS.helpButton}</span>
        </button>

      </div>
    </div>
  );
};