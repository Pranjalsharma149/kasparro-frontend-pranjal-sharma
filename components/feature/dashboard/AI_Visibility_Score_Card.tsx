"use client";

import React from 'react';
import { useCounterStore } from '@/store/useCounterStore';

/**
 * AI_Visibility_Score_Card Component
 * Displays the primary KPI: AI Visibility.
 */
export const AI_Visibility_Score_Card = ({ score = 74.2 }) => {
  // We can use the global count to simulate dynamic movement
  const count = useCounterStore((state) => state.count);
  
  return (
    <div className="bg-zinc-950 text-white p-8 rounded-[2.5rem] border border-zinc-800 shadow-2xl relative overflow-hidden group">
      {/* Background Glow Effect */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/10 blur-[100px] group-hover:bg-blue-600/20 transition-colors duration-700" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-12">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-2">Primary Metric</p>
            <h2 className="text-xl font-black italic uppercase tracking-tighter">AI Visibility Index</h2>
          </div>
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
            Live
          </div>
        </div>

        <div className="flex items-baseline gap-2 mb-8">
          <span className="text-7xl font-black italic tracking-tighter leading-none">
            {score}<span className="text-blue-600">.</span>{Math.abs(count % 10)}
          </span>
          <span className="text-2xl font-black text-zinc-500">%</span>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Benchmark Performance</span>
            <span className="text-xs font-mono font-bold text-green-500">+4.2% ↑</span>
          </div>
          <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
            <div 
              className="bg-blue-600 h-full transition-all duration-1000 ease-out" 
              style={{ width: `${score}%` }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI_Visibility_Score_Card;