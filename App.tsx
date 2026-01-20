import React, { useEffect, useState } from 'react';
import { DiskIcon } from './components/DiskIcon';
import { ProgressBar } from './components/ProgressBar';

const REDIRECT_URL = "https://rebel-edition-electron-rooms.trycloudflare.com/";
const ANIMATION_DURATION = 3500; // 3.5 seconds total wait time

const LoadingSteps = [
  { time: 0, text: "Initializing secure connection..." },
  { time: 1000, text: "Locating remote volume..." },
  { time: 2000, text: "Mounting disk..." },
  { time: 3000, text: "Redirecting..." },
];

const App: React.FC = () => {
  const [statusText, setStatusText] = useState(LoadingSteps[0].text);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    // Sequence the text updates
    // Use ReturnType<typeof setTimeout> to handle both number (browser) and NodeJS.Timeout (node) types
    const timers: ReturnType<typeof setTimeout>[] = [];

    LoadingSteps.forEach((step) => {
      const timer = setTimeout(() => {
        setStatusText(step.text);
      }, step.time);
      timers.push(timer);
    });

    // Perform the redirect
    const redirectTimer = setTimeout(() => {
      setRedirecting(true);
      window.location.href = REDIRECT_URL;
    }, ANIMATION_DURATION);
    timers.push(redirectTimer);

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col items-center justify-center p-4 selection:bg-cyan-500/30">
      
      <div className="flex flex-col items-center space-y-8 max-w-md w-full">
        
        {/* Animated Icon */}
        <div className="transform transition-transform duration-700 hover:scale-105">
          <DiskIcon />
        </div>

        {/* Text Status */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold tracking-wide text-white">
            Loading your remote disk
          </h1>
          <p className="text-sm text-cyan-400 font-mono h-6 transition-all duration-300">
            {`> ${statusText}`}
            <span className="animate-pulse">_</span>
          </p>
        </div>

        {/* Progress Bar */}
        <ProgressBar duration={ANIMATION_DURATION} />

        {/* Manual Link Fallback */}
        <div className={`transition-opacity duration-1000 ${redirecting ? 'opacity-100' : 'opacity-0'} text-center mt-8`}>
          <p className="text-slate-500 text-xs">
            If you are not redirected automatically,{' '}
            <a 
              href={REDIRECT_URL}
              className="text-cyan-500 hover:text-cyan-400 underline underline-offset-2 transition-colors"
            >
              click here
            </a>.
          </p>
        </div>

      </div>

      {/* Footer / Decorative */}
      <div className="fixed bottom-4 text-slate-700 text-[10px] font-mono tracking-widest uppercase">
        Secure Link • End-to-End Encrypted
      </div>
    </div>
  );
};

export default App;