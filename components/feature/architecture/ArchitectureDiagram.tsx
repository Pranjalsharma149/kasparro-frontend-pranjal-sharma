"use client";

import React from 'react';

const STAGES = [
  {
    id: '01',
    name: 'Signal Ingestion',
    tech: 'InputAssembler',
    details: 'Web Crawls • API Hooks • Social Graph',
    position: 'top-0 left-0',
  },
  {
    id: '02',
    name: 'Vector Mapping',
    tech: 'ContextPack',
    details: 'Embedding Generation • Semantic Clustering',
    position: 'top-0 right-0',
  },
  {
    id: '03',
    name: 'Reasoning Engine',
    tech: 'Audit Layer',
    details: 'Hallucination Check • EEAT Scoring',
    position: 'bottom-0 left-0',
  },
  {
    id: '04',
    name: 'Intelligence Delivery',
    tech: 'OutputSurfaces',
    details: 'Live Ledger • Headless API • Alerts',
    position: 'bottom-0 right-0',
  }
];

export default function ArchitectureDiagram() {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-20 px-4">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Central "Core" Node */}
      <div className="relative z-10 flex justify-center items-center h-[500px]">
        <div className="absolute w-40 h-40 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="relative w-32 h-32 bg-white border-4 border-blue-600 rounded-3xl shadow-2xl flex items-center justify-center rotate-45 group hover:rotate-90 transition-transform duration-700">
          <div className="-rotate-45 group-hover:rotate-[-90px] transition-transform duration-700">
             <span className="font-black text-blue-600 italic">CORE</span>
          </div>
        </div>

        {/* Connection Lines (Desktop) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block">
          {/* Top Left to Center */}
          <path d="M 200 100 Q 250 250 512 250" stroke="#E4E4E7" strokeWidth="2" fill="none" strokeDasharray="5,5" />
          {/* Top Right to Center */}
          <path d="M 824 100 Q 774 250 512 250" stroke="#E4E4E7" strokeWidth="2" fill="none" strokeDasharray="5,5" />
          {/* Bottom Left to Center */}
          <path d="M 200 400 Q 250 250 512 250" stroke="#E4E4E7" strokeWidth="2" fill="none" strokeDasharray="5,5" />
          {/* Bottom Right to Center */}
          <path d="M 824 400 Q 774 250 512 250" stroke="#E4E4E7" strokeWidth="2" fill="none" strokeDasharray="5,5" />
        </svg>

        {/* Nodes */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-20">
          {STAGES.map((stage) => (
            <div 
              key={stage.id} 
              className={`flex flex-col p-6 bg-white border border-zinc-200 rounded-3xl shadow-sm hover:border-blue-600 hover:shadow-xl transition-all duration-500 w-64 ${
                stage.id === '01' || stage.id === '03' ? 'justify-self-start' : 'justify-self-end'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">{stage.id}</span>
                <div className="w-2 h-2 bg-zinc-200 rounded-full group-hover:bg-blue-600 transition-colors" />
              </div>
              <h3 className="font-black text-sm uppercase italic mb-1">{stage.name}</h3>
              <p className="text-blue-600 font-mono text-[10px] font-bold mb-3">{stage.tech}</p>
              <div className="text-[9px] text-zinc-400 font-medium leading-relaxed border-t border-zinc-50 pt-3">
                {stage.details}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend / Caption */}
      <div className="mt-12 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">
          Neural Architecture // Signal Flow Protocol v1.0.4
        </p>
      </div>
    </div>
  );
}