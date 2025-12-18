"use client";

import React from 'react';

/**
 * InsightsList Component
 * Renders a list of strategic observations derived from the LLM audit.
 */
export const InsightsList = () => {
  const insights = [
    "Brand authority in technical queries has dropped by 12% since the last update.",
    "Competitor 'X' is currently being cited as the primary source for 'AI Governance' topics.",
    "High correlation found between LinkedIn mentions and GPT-4 citation frequency.",
    "Unverified citations detected in 14% of Perplexity's 'Reasoning Mode' responses."
  ];

  return (
    <div className="w-full">
      {/* Header with technical spacing */}
      <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-8 flex items-center gap-3">
        <span className="w-8 h-[1px] bg-zinc-200"></span>
        Strategic Insights
      </h3>
      
      <div className="space-y-4">
        {insights.map((insight, i) => (
          <div 
            key={i} 
            className="group flex gap-5 items-start p-6 bg-zinc-50 border border-zinc-100 rounded-[2rem] hover:bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-300"
          >
            {/* Monospace Indexing */}
            <div className="flex flex-col items-center">
              <span className="font-mono text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                0{i + 1}
              </span>
              <div className="w-[1px] h-full bg-zinc-100 mt-2 group-hover:bg-blue-100 transition-colors" />
            </div>

            {/* Insight Text */}
            <div className="space-y-2">
              <p className="text-sm font-bold text-zinc-800 leading-snug tracking-tight group-hover:text-zinc-900 transition-colors">
                {insight}
              </p>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[9px] font-black uppercase text-blue-500 tracking-tighter">Verified Signal</span>
                <span className="text-[9px] font-black uppercase text-zinc-300 tracking-tighter">• Source: Audit Layer 7</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Meta */}
      <div className="mt-8 px-6">
        <p className="text-[9px] font-mono text-zinc-300 uppercase italic">
          // End of observation stream. 4/4 nodes synced.
        </p>
      </div>
    </div>
  );
};

export default InsightsList;