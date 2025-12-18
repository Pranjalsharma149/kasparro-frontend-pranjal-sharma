import React from 'react';

export default function DataConsumptionOverview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-zinc-100">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="bg-zinc-900 p-8 rounded-[2rem] text-blue-400 font-mono text-[10px] leading-relaxed shadow-2xl">
          <p>{`> GET /api/v1/brand-signals`}</p>
          <p>{`> STATUS: 200 OK`}</p>
          <p>{`> ANALYZING AGENTIC CONSUMPTION...`}</p>
          <div className="mt-4 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 w-3/4 animate-pulse" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-black uppercase italic mb-6">Built for <br/> <span className="text-blue-600">Reasoning Models.</span></h2>
          <p className="text-zinc-500 leading-relaxed">
            Traditional SEO was built for humans clicking links. Modern brand integrity 
            is built for AI agents citing sources. We ensure your brand is the "top-of-mind" 
            reference for every query.
          </p>
        </div>
      </div>
    </section>
  );
}