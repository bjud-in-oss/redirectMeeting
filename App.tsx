import React, { useState, useMemo } from 'react';
import { HEADER_INFO, SCHEDULE_RULES, UI_TEXTS, BREAKOUT_INFO } from './constants';
import { MeetingCard } from './components/MeetingCard';
import { BreakoutIcon } from './components/BreakoutIcon';
import { getNextSundayInfo } from './utils';
import { Home, Calendar, ChevronDown, ChevronUp, Users, Clock } from 'lucide-react';

const App: React.FC = () => {
  const [showFullSchedule, setShowFullSchedule] = useState(false);
  const sundayInfo = useMemo(() => getNextSundayInfo(), []);

  // Determine which block 2 applies to this Sunday
  const getBlock2Content = (weekIndex: number) => {
    if (SCHEDULE_RULES.block2.variations.fifthSunday.weeks.includes(weekIndex)) {
      return SCHEDULE_RULES.block2.variations.fifthSunday;
    }
    if (SCHEDULE_RULES.block2.variations.sundaySchool.weeks.includes(weekIndex)) {
      return SCHEDULE_RULES.block2.variations.sundaySchool;
    }
    return SCHEDULE_RULES.block2.variations.priesthoodRS;
  };

  const currentBlock2 = getBlock2Content(sundayInfo.weekIndex);

  return (
    <div className="min-h-screen w-full bg-slate-50 relative font-sans pb-20">
      
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-[32rem] bg-gradient-to-b from-brand-50 to-slate-50 pointer-events-none" />

      <main className="relative z-10 max-w-2xl mx-auto px-4 py-8 sm:py-12">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm mb-6 border border-brand-100">
            <Home className="w-8 h-8 text-brand-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            {HEADER_INFO.title}
          </h1>
          <p className="text-lg font-medium text-slate-700 mb-4">
            {HEADER_INFO.subtitle}
          </p>
        </div>

        {/* Main Connection Card */}
        <div className="mb-6">
          <MeetingCard />
        </div>

        {/* Simplified Breakout Room Instruction */}
        <div className="flex gap-4 items-center bg-white/80 backdrop-blur rounded-xl p-5 border border-slate-200 shadow-sm mb-8">
          <div className="p-3 bg-slate-800 text-white rounded-lg shrink-0">
             <BreakoutIcon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1">{UI_TEXTS.breakoutTitle}</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              {BREAKOUT_INFO.description}
            </p>
          </div>
        </div>

        {/* Simplified Dynamic Schedule Section */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4 px-1 text-slate-800">
            <Calendar className="w-5 h-5 text-brand-600" />
            <h3 className="font-bold">
              {sundayInfo.isToday ? UI_TEXTS.today : UI_TEXTS.nextSunday}
              <span className="font-normal text-slate-500 ml-1">
                — {sundayInfo.formattedDate}
              </span>
            </h3>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm divide-y divide-slate-100">
            {/* Block 1 */}
            <div className="p-4 flex gap-4 items-baseline">
              <div className="w-14 text-slate-400 text-sm font-semibold tabular-nums shrink-0">
                11:00
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{SCHEDULE_RULES.block1.title}</h4>
                <div className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                   <Users className="w-3.5 h-3.5" /> 
                   {SCHEDULE_RULES.block1.room}
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="p-4 flex gap-4 items-baseline bg-brand-50/30">
              <div className="w-14 text-brand-500 text-sm font-semibold tabular-nums shrink-0">
                12:10
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{currentBlock2.title}</h4>
                <div className="text-sm text-slate-600 flex flex-wrap gap-x-3 gap-y-1 mt-1">
                  {currentBlock2.rooms.map((room) => (
                    <span key={room} className="flex items-center gap-1">
                       <Users className="w-3.5 h-3.5 text-brand-400" />
                       {room}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Toggle Full Schedule */}
        <div className="text-center">
          <button 
            onClick={() => setShowFullSchedule(!showFullSchedule)}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors py-2"
          >
            {showFullSchedule ? (
              <>
                {UI_TEXTS.hideFullSchedule}
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                {UI_TEXTS.showFullSchedule}
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>

          {showFullSchedule && (
            <div className="mt-4 bg-slate-50 rounded-xl border border-slate-200 p-6 text-left animate-in fade-in slide-in-from-top-2 duration-200">
              <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Schema för månaden
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="text-slate-500">1:a & 3:e</span>
                  <span className="font-medium text-slate-900">Söndagsskola</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="text-slate-500">2:a & 4:e</span>
                  <span className="font-medium text-slate-900">Äldstekvorum & Hjälpförening</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">5:e</span>
                  <span className="font-medium text-slate-900">Biskopsrådet undervisar</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center border-t border-slate-200 pt-8">
          <p className="text-slate-400 text-sm font-medium">
            {HEADER_INFO.footer}
          </p>
        </footer>

      </main>
    </div>
  );
};

export default App;