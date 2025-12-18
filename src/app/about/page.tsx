import React from 'react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-100">
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.95] text-zinc-900 uppercase italic">
            Securing Integrity <br />
            <span className="text-blue-600">in the Agentic Era.</span>
          </h1>
          <p className="text-2xl font-medium text-zinc-500 leading-relaxed border-l-4 border-zinc-100 pl-8">
            "Our mission is to define the standard for brand integrity in the era of reasoning agents."
          </p>
        </div>
      </section>

      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {[
            { t: "Systems over Keywords", c: "Traditional SEO manipulates crawlers. AI-SEO manages data systems." },
            { t: "Verifiable Trust", c: "We ensure AI agents prioritize sources with high verifiable authority." },
            { t: "Agentic First", c: "Designed for a world where AI agents are the primary consumers of data." }
          ].map((item, i) => (
            <div key={i} className="space-y-4">
              <div className="text-4xl font-mono font-black text-blue-600/20">0{i + 1}</div>
              <h3 className="text-xl font-bold tracking-tight">{item.t}</h3>
              <p className="text-zinc-500 leading-relaxed">{item.c}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="bg-zinc-900 rounded-[3rem] p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Built for the next frontier of search.</h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Kasparro Labs was founded to bridge the gap between technical data engineering 
            and brand communications.
          </p>
          <div className="font-bold text-blue-500 uppercase tracking-widest text-xs">Signal Engineering Team</div>
        </div>
      </section>
    </main>
  );
}