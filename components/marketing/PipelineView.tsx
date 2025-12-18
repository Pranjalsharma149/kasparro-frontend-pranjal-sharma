import React from 'react';
import { Card } from '../primitives/Card';

const STEPS = [
  { id: '01', title: 'Ingestion', desc: 'Aggregating multi-source brand signals.' },
  { id: '02', title: 'Enrichment', desc: 'Semantic mapping for vector spaces.' },
  { id: '03', title: 'Audit', desc: 'Evaluating trust and visibility layers.' },
  { id: '04', title: 'Output', desc: 'Delivery via API and Dashboard.' }
];

export default function PipelineView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto">
      {STEPS.map((step) => (
        <Card key={step.id}>
          <div className="text-blue-600 font-mono text-xs mb-6 font-bold">STEP // {step.id}</div>
          <h3 className="font-black text-xl mb-2 italic uppercase">{step.title}</h3>
          <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
        </Card>
      ))}
    </div>
  );
}