import React, { useState, useEffect, useRef } from 'react';
import { MEETING_CONFIG } from './constants';
import { RedirectCard } from './components/RedirectCard';
import { HelpCard } from './components/HelpCard';

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(MEETING_CONFIG.redirectDelayMs);
  const [isPaused, setIsPaused] = useState(false);
  
  // Ref to keep track of the interval ID to clear it efficiently
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    // If paused or time is up, do not schedule new ticks
    if (isPaused || timeLeft <= 0) {
      if (timeLeft <= 0 && !isPaused) {
        // Trigger redirect only if time is 0 and NOT paused
        window.location.href = MEETING_CONFIG.url;
      }
      return;
    }

    const startTime = Date.now();
    const initialTimeLeft = timeLeft;

    // Use a high-frequency interval for smooth animation state updates
    // but derive the actual value from Date.now() to ensure accuracy
    intervalRef.current = window.setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newTimeLeft = Math.max(0, initialTimeLeft - elapsed);
      
      setTimeLeft(newTimeLeft);

      if (newTimeLeft <= 0) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 50); // Update every 50ms

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, timeLeft]);

  const handlePause = () => {
    setIsPaused(true);
    // When help is clicked, we pause the timer. 
    // We don't reset it to 5s unless they specifically restart, 
    // but the UX pattern usually implies "Reset" or "Continue".
    // For this simple app, pausing is enough.
  };

  const handleResume = () => {
    // Optional: Reset timer to full 5 seconds when returning from help
    // to give the user time to get oriented again.
    setTimeLeft(MEETING_CONFIG.redirectDelayMs);
    setIsPaused(false);
  };

  // Calculate percentage for progress bar (100% -> 0%)
  const progressPercentage = (timeLeft / MEETING_CONFIG.redirectDelayMs) * 100;

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-brand-50 relative overflow-hidden p-4">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="w-full max-w-md z-10 transition-all duration-500 ease-in-out">
        {isPaused ? (
          <HelpCard onResume={handleResume} />
        ) : (
          <RedirectCard 
            progress={progressPercentage} 
            timeLeft={timeLeft} 
            onPause={handlePause} 
          />
        )}
      </div>
    </div>
  );
};

export default App;