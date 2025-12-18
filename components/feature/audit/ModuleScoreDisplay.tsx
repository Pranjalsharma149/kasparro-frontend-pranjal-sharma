"use client";
import React from 'react';

export const ModularScoreDisplay = ({ score = 84, label = "Aggregate Integrity" }: any) => {
  return (
    <div className="bg-zinc-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-[80px]" />
      <div className="relative z-10 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-4">{label}</p>
        <div className="text-8xl font-black italic tracking-tighter mb-2">
          {score}<span className="text-blue-600">.0</span>
        </div>
        <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden mt-4">
          <div className="bg-blue-600 h-full transition-all duration-1000" style={{ width: `${score}%` }} />
        </div>
      </div>
    </div>
  );
};