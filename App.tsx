import React, { useEffect, useState } from 'react';
import { DiskIcon } from './components/DiskIcon';
import { ProgressBar } from './components/ProgressBar';

const REDIRECT_URL = "https://rebel-edition-electron-rooms.trycloudflare.com/";
const ANIMATION_DURATION = 3500; // 3.5 seconds total wait time

const App: React.FC = () => {
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    // Perform the redirect
    const redirectTimer = setTimeout(() => {
      setRedirecting(true);
      window.location.href = REDIRECT_URL;
    }, ANIMATION_DURATION);

    return () => {
      clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
      
      <div className="flex flex-col items-center space-y-12">
        {/* Animated Icon */}
        <div className="transform scale-125">
          <DiskIcon />
        </div>

        {/* Visual Progress Bar */}
        <ProgressBar duration={ANIMATION_DURATION} />
      </div>

      {/* Manual Link Fallback - Subtle and only appears if needed */}
      <div className={`fixed bottom-8 transition-opacity duration-1000 ${redirecting ? 'opacity-100' : 'opacity-0'}`}>
        <a 
          href={REDIRECT_URL}
          className="text-slate-800 hover:text-cyan-900/50 text-[10px] uppercase tracking-widest transition-colors"
        >
          Click if not redirected
        </a>
      </div>

    </div>
  );
};

export default App;