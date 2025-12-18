import React from 'react';

const MODULES = [
  { name: 'Visibility', score: 92, status: 'Optimal' },
  { name: 'Trust (EEAT)', score: 78, status: 'Warning' },
  { name: 'Sentiment', score: 85, status: 'Stable' },
  { name: 'Citation Graph', score: 64, status: 'Critical' },
  { name: 'Hallucination', score: 98, status: 'Optimal' },
  { name: 'Vector Alignment', score: 72, status: 'Stable' },
  { name: 'Source Authority', score: 81, status: 'Stable' }
];

export const AuditModuleList = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {MODULES.map((m) => (
      <div key={m.name} className="p-6 bg-white border border-zinc-100 rounded-[2rem] hover:border-blue-500 transition-all cursor-pointer group">
        <div className="flex justify-between items-start mb-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{m.name}</span>
          <span className={`h-1.5 w-1.5 rounded-full ${m.status === 'Optimal' ? 'bg-green-500' : m.status === 'Critical' ? 'bg-red-500' : 'bg-yellow-500'}`} />
        </div>
        <div className="text-2xl font-black italic group-hover:text-blue-600 transition-colors">{m.score}%</div>
      </div>
    ))}
  </div>
);