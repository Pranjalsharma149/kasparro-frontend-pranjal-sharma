import React from 'react';

export const Tabs = ({ options, active, onChange }: any) => (
  <div className="flex gap-2 bg-white p-1 rounded-xl border border-zinc-200 w-fit">
    {options.map((opt: string) => (
      <button
        key={opt}
        onClick={() => onChange(opt)}
        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
          active === opt ? 'bg-zinc-900 text-white' : 'text-zinc-400 hover:text-zinc-600'
        }`}
      >
        {opt}
      </button>
    ))}
  </div>
);