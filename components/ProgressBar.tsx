import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
  duration: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ duration }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className="w-full max-w-xs h-1.5 bg-slate-800 rounded-full overflow-hidden">
      <div 
        className="h-full bg-cyan-500 transition-all ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};