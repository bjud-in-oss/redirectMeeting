import React, { useMemo } from 'react';
import { HEADER_INFO, ROOMS, UI_TEXTS, BREAKOUT_INFO, MAIN_MEETING } from './constants';
import { MeetingCard } from './components/MeetingCard';
import { BreakoutIcon } from './components/BreakoutIcon';
import { getNextSundayInfo } from './utils';
import { Video, Calendar, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const sundayInfo = useMemo(() => getNextSundayInfo(), []);

  return (
    <div className="min-h-screen w-full bg-slate-50 relative font-sans flex flex-col items-center py-12 px-4">
      
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-[32rem] bg-gradient-to-b from-brand-50 via-white to-slate-50 pointer-events-none" />

      <main className="relative z-10 w-full max-w-2xl">
        
        {/* 1. Header & Title */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
            {HEADER_INFO.title}
          </h1>
          <p className="text-brand-600 font-medium">
            {HEADER_INFO.subtitle}
          </p>
        </div>

        {/* 2. Primary Action (2 Steps) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-12">
          
          {/* Step 1: Link Button */}
          <a 
            href={MAIN_MEETING.url}
            className="group flex flex-col items-center justify-center gap-3 bg-brand-600 hover:bg-brand-700 text-white py-6 px-4 rounded-2xl shadow-xl shadow-brand-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] text-center h-full"
          >
            <div className="bg-white/20 p-3 rounded-full mb-1 group-hover:bg-white/25 transition-colors">
              <Video className="w-8 h-8" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-bold">Anslut till Zoom</span>
              <ArrowRight className="w-5 h-5 opacity-90 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Step 2: Instruction Block (Visual distinction: White background) */}
          <div className="flex flex-col items-center justify-center gap-3 bg-white border-2 border-brand-100 text-slate-800 py-6 px-4 rounded-2xl shadow-sm text-center cursor-default h-full relative overflow-hidden">
             {/* Decorative background element */}
             <div className="absolute top-0 right-0 p-16 bg-brand-50 rounded-full -mr-8 -mt-8 opacity-50 pointer-events-none"></div>

            <div className="text-brand-600 text-xs font-bold uppercase tracking-wider relative z-10">När zoom startat:</div>
            <div className="text-lg sm:text-xl font-bold leading-snug flex flex-col items-center justify-center gap-2 relative z-10">
              <span>Välj grupprum via</span>
              <div className="flex items-center gap-2">
                <div className="bg-slate-800 text-white rounded-md p-1.5 shadow-md inline-flex items-center justify-center">
                  <BreakoutIcon className="w-6 h-6" />
                </div>
                <span>ikonen</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Detailed Instructions */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-16">
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div className="shrink-0 bg-slate-800 text-white p-3 rounded-xl flex items-center justify-center shadow-md">
               <BreakoutIcon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-2">{UI_TEXTS.breakoutTitle}</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {BREAKOUT_INFO.description}
              </p>
            </div>
          </div>
        </div>

        {/* 4. Calendar (Meetings this Sunday) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <h2 className="text-lg font-bold text-slate-800">Möten nu på söndag</h2>
            <div className="flex items-center gap-2 text-sm font-medium text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
              <Calendar className="w-4 h-4" />
              <span>{sundayInfo.formattedDate}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ROOMS.map((room, index) => (
              <MeetingCard 
                key={room.id}
                title={room.name}
                description={room.description}
                schedule={room.getSchedule(sundayInfo.weekIndex)}
                isPrimary={index === 0}
                hideAction={true} // Hides the button since we have a main one
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center border-t border-slate-200 pt-8">
          <p className="text-slate-400 text-sm font-medium">
            {HEADER_INFO.footer}
          </p>
        </footer>

      </main>
    </div>
  );
};

export default App;