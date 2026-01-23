import React from 'react';
import { HEADER_INFO, MEETINGS } from './constants';
import { MeetingCard } from './components/MeetingCard';
import { Home } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50 relative font-sans">
      
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-brand-50 to-slate-50 pointer-events-none" />

      <main className="relative z-10 max-w-3xl mx-auto px-4 py-12 sm:py-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm mb-6 border border-brand-100">
            <Home className="w-8 h-8 text-brand-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            {HEADER_INFO.title}
          </h1>
          <p className="text-lg font-medium text-slate-700 mb-2">
            {HEADER_INFO.subtitle}
          </p>
          <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
            {HEADER_INFO.intro}
          </p>
        </div>

        {/* Meeting Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MEETINGS.map((meeting) => (
            <MeetingCard key={meeting.id} data={meeting} />
          ))}
        </div>

        {/* Simple Footer */}
        <footer className="mt-16 text-center border-t border-slate-200 pt-8">
          <p className="text-slate-400 text-sm font-medium">
            {HEADER_INFO.footer}
          </p>
        </footer>

      </main>
    </div>
  );
};

export default App;