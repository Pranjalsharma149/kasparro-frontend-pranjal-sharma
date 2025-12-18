import React from 'react';
import { Badge } from '../primitives/Badge';

export default function CoreModulesOverview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 bg-zinc-50 rounded-[3rem] my-20">
      <Badge>The Engine</Badge>
      <h2 className="text-4xl font-black uppercase italic mt-6 mb-8 tracking-tighter">
        Multi-Layer <span className="text-blue-600">Audit System</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <p className="text-zinc-500 text-lg leading-relaxed">
          Our core engine simulates how LLMs (Large Language Models) perceive your brand. 
          By analyzing high-dimensional vector data, we identify where your brand is 
          losing authority in the agentic search layer.
        </p>
        <ul className="space-y-4 font-bold text-sm uppercase tracking-tight">
          <li className="flex gap-3 items-center text-zinc-400"><span className="text-blue-600">01</span> Visibility Optimization</li>
          <li className="flex gap-3 items-center text-zinc-400"><span className="text-blue-600">02</span> Hallucination Defense</li>
          <li className="flex gap-3 items-center text-zinc-400"><span className="text-blue-600">03</span> Source Authority Verification</li>
        </ul>
      </div>
    </section>
  );
}