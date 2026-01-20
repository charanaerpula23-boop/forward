import React from 'react';

export const DiskIcon: React.FC = () => {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full animate-pulse" />
      
      {/* Disk Unit */}
      <div className="relative z-10 w-24 h-24 bg-slate-800 border-2 border-slate-600 rounded-lg shadow-2xl flex flex-col items-center justify-center overflow-hidden">
        
        {/* Activity LED */}
        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-green-400 rounded-full" />

        {/* Disk Platters (Stylized) */}
        <div className="w-16 h-16 border-4 border-slate-700 rounded-full flex items-center justify-center relative">
          <div className="w-6 h-6 bg-slate-900 rounded-full border-2 border-slate-600 z-10" />
          
          {/* Spinning Segment */}
          <div className="absolute inset-0 border-t-4 border-cyan-400 rounded-full animate-spin" />
        </div>

        {/* Data Scan Effect */}
        <div className="absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-scan" />
      </div>

      {/* Connection Lines */}
      <div className="absolute -bottom-4 w-full flex justify-center space-x-2">
        <div className="w-1 h-4 bg-cyan-500/50 rounded-full animate-bounce delay-75" />
        <div className="w-1 h-4 bg-cyan-500/50 rounded-full animate-bounce delay-150" />
        <div className="w-1 h-4 bg-cyan-500/50 rounded-full animate-bounce delay-300" />
      </div>
    </div>
  );
};