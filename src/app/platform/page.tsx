"use client";

import React from 'react';
import Link from 'next/link';

// --- INTEGRATED ARCHITECTURE DIAGRAM COMPONENT ---
// (Moved inside this file to fix your "Module not found" error)
const ArchitectureDiagram = () => (
  <div className="relative w-full max-w-5xl mx-auto py-20 px-4">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
    <div className="relative z-10 flex justify-center items-center h-[400px]">
      <div className="absolute w-40 h-40 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="relative w-32 h-32 bg-white border-4 border-blue-600 rounded-3xl shadow-2xl flex items-center justify-center rotate-45 group transition-transform duration-700">
        <div className="-rotate-45">
           <span className="font-black text-blue-600 italic">CORE</span>
        </div>
      </div>
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-20">
        {['Ingestion', 'Mapping', 'Audit', 'Delivery'].map((name, i) => (
          <div key={name} className={`p-6 bg-white border border-zinc-200 rounded-3xl shadow-sm w-56 ${i % 2 === 0 ? 'justify-self-start' : 'justify-self-end'}`}>
            <div className="text-[10px] font-black text-blue-600 mb-2 uppercase tracking-widest">0{i+1}</div>
            <h3 className="font-black text-sm uppercase italic">{name}</h3>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PIPELINE_STAGES = [
  { id: '01', phase: 'Ingestion', title: 'InputAssembler', desc: 'Aggregates signals into a normalized stream.', features: ['Real-time Crawling', 'Normalization'] },
  { id: '02', phase: 'Enrichment', title: 'ContextPack', desc: 'Maps data against LLM vector spaces.', features: ['Vector Embeddings', 'Clustering'] },
  { id: '03', phase: 'Analysis', title: 'Audit Engine', desc: 'Evaluating visibility and sentiment bias.', features: ['7-Layer Audit', 'Bias Detection'] },
  { id: '04', phase: 'Delivery', title: 'Output Surfaces', desc: 'Delivered via Dashboard and API.', features: ['Live Ledger', 'Alerts'] }
];

export default function PlatformPage() {
  return (
    <div className="bg-white min-h-screen text-zinc-900 selection:bg-blue-100">
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto border-b border-zinc-50">
        <div className="font-black text-xl tracking-tighter uppercase italic">Kasparro <span className="text-blue-600">Labs</span></div>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/app/dashboard" className="text-zinc-900 hover:text-blue-600 transition-colors">Launch Audit</Link>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 mb-6 text-[10px] font-black tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">Infrastructure</div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none uppercase italic">The Architecture of <span className="text-blue-600 underline decoration-4 underline-offset-8">Trust.</span></h1>
        </div>
      </section>

      <ArchitectureDiagram />

      <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PIPELINE_STAGES.map((stage) => (
          <div key={stage.id} className="group bg-white border border-zinc-200 rounded-[2.5rem] p-8 hover:border-blue-500 hover:shadow-2xl transition-all duration-500">
            <div className="text-[10px] font-black text-blue-600 mb-8 tracking-[0.2em] uppercase">Phase {stage.id}</div>
            <h2 className="text-xl font-bold mb-3 tracking-tight">{stage.title}</h2>
            <p className="text-sm text-zinc-500 mb-8">{stage.desc}</p>
            <ul className="space-y-3 pt-6 border-t border-zinc-50">
              {stage.features.map(f => <li key={f} className="text-[11px] font-bold text-zinc-400 uppercase tracking-wide">• {f}</li>)}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}