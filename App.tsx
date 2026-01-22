import React from 'react';
import { RedirectCard } from './components/RedirectCard';
import { HelpCard } from './components/HelpCard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-brand-50 relative overflow-hidden p-6 font-sans">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-100/50 rounded-full blur-[100px] opacity-60 mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[100px] opacity-60 mix-blend-multiply"></div>
      </div>

      <div className="w-full max-w-xl z-10 flex flex-col items-center">
        <RedirectCard />
        <HelpCard />
        
        <footer className="mt-12 text-center text-slate-400 text-xs">
          <p>Säker omdirigeringstjänst</p>
        </footer>
      </div>
    </div>
  );
};

export default App;