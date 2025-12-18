"use client";

import React from 'react';

export const DashboardHeader = ({ title = "System Overview" }) => {
  return (
    <header className="flex justify-between items-center px-10 py-6 border-b border-zinc-100 bg-white/80 backdrop-blur-md sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">Console /</span>
        <h1 className="text-xl font-black uppercase italic tracking-tighter">{title}</h1>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">System Live</span>
        </div>
        <button className="px-5 py-2 bg-zinc-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-colors">
          Export Audit
        </button>
      </div>
    </header>
  );
};