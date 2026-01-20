import React from 'react';

export const DiskIcon: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center w-24 h-24">
      {/* Background Ring */}
      <div className="absolute inset-0 border-4 border-slate-800 rounded-full" />
      
      {/* Spinning Loader */}
      <div className="absolute inset-0 border-4 border-cyan-500 rounded-full border-t-transparent animate-spin" />
      
      {/* Simple Database/Disk Icon */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-10 h-10 text-cyan-500/80" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth={1.5}
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" 
        />
      </svg>
    </div>
  );
};