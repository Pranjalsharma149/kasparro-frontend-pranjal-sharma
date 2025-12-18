import React from 'react';

const ISSUES = [
  { id: 'KSP-01', type: 'Citation Gap', severity: 'High', source: 'Perplexity API' },
  { id: 'KSP-02', type: 'Hallucination Risk', severity: 'Medium', source: 'GPT-4o Context' },
  { id: 'KSP-03', type: 'Sentiment Drift', severity: 'Low', source: 'Claude-3.5 Graph' },
];

export const IssueTable = () => (
  <div className="w-full overflow-hidden bg-white border border-zinc-100 rounded-[2.5rem]">
    <table className="w-full text-left border-collapse">
      <thead className="bg-zinc-50 border-b border-zinc-100">
        <tr>
          {['ID', 'Type', 'Severity', 'Source'].map((h) => (
            <th key={h} className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-zinc-50">
        {ISSUES.map((issue) => (
          <tr key={issue.id} className="hover:bg-zinc-50/50 transition-colors">
            <td className="px-8 py-5 font-mono text-xs font-bold text-blue-600">{issue.id}</td>
            <td className="px-8 py-5 text-sm font-bold">{issue.type}</td>
            <td className="px-8 py-5">
              <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter ${
                issue.severity === 'High' ? 'bg-red-50 text-red-600' : 'bg-zinc-100 text-zinc-500'
              }`}>{issue.severity}</span>
            </td>
            <td className="px-8 py-5 text-xs text-zinc-400 font-medium">{issue.source}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);