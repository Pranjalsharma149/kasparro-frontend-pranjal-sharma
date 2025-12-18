"use client";

import React from 'react';

interface RecommendationProps {
  id?: string;
  title?: string;
  description?: string;
  priority?: 'Critical' | 'High' | 'Medium';
  impact?: string;
  target?: string;
}

const RecommendationBox = ({
  id = "REC-402",
  title = "Update Schema for Semantic Alignment",
  description = "Your current JSON-LD structure lacks the 'knowsAbout' property. Adding this will help LLMs like Claude-3.5 better map your brand to specific industry technical vectors.",
  priority = "High",
  impact = "+14.2% Visibility",
  target = "Anthropic / Claude-3.5"
}: RecommendationProps) => {
  
  const priorityColors = {
    Critical: "bg-red-600",
    High: "bg-blue-600",
    Medium: "bg-zinc-900"
  };

  return (
    <div className="relative overflow-hidden bg-white border border-zinc-200 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group">
      {/* Top Status Bar */}
      <div className="flex items-center justify-between px-8 py-4 bg-zinc-50 border-b border-zinc-100">
        <div className="flex items-center gap-3">
          <div className={`h-2 w-2 rounded-full ${priorityColors[priority]} animate-pulse`} />
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
            {id} // {priority} Priority
          </span>
        </div>
        <div className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
          {impact}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <h3 className="text-xl font-black italic uppercase tracking-tighter text-zinc-900 mb-4 leading-tight">
          {title}
        </h3>
        
        <p className="text-sm text-zinc-500 font-medium leading-relaxed mb-8">
          {description}
        </p>

        {/* Technical Metadata */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
            <p className="text-[9px] font-black text-zinc-300 uppercase mb-1">Target Engine</p>
            <p className="text-[11px] font-bold text-zinc-900">{target}</p>
          </div>
          <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
            <p className="text-[9px] font-black text-zinc-300 uppercase mb-1">Resource Type</p>
            <p className="text-[11px] font-bold text-zinc-900">Metadata Injections</p>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full py-5 bg-zinc-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-blue-600 transition-all active:scale-[0.98] shadow-lg shadow-zinc-200 group-hover:shadow-blue-100">
          Execute System Optimization
        </button>
      </div>

      {/* Decorative Corner Element */}
      <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M0 20L20 0H0V20Z" fill="#2563EB" />
        </svg>
      </div>
    </div>
  );
};

export default RecommendationBox;