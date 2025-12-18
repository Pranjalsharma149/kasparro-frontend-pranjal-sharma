"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form submission handler for the Modal
  const handleRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setSubmitted(false);
    }, 2500);
  };

  return (
    <div className="bg-white min-h-screen text-zinc-900 selection:bg-blue-100 relative overflow-x-hidden">
      
      {/* --- NAVIGATION --- */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto border-b border-zinc-50">
        <div className="font-black text-xl tracking-tighter uppercase italic">
          Kasparro <span className="text-blue-600">Labs</span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
          <Link href="/platform" className="hover:text-blue-600 transition-colors">Platform</Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">Vision</Link>
          <Link href="/app/dashboard" className="text-zinc-900 hover:text-blue-600 transition-colors underline decoration-2 underline-offset-4">
            Launch Audit
          </Link>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 mb-6 text-[10px] font-black tracking-widest text-blue-600 bg-blue-50 rounded-full uppercase">
              Brand Integrity for LLMs
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase italic mb-8">
              The Front Page <br />
              <span className="text-blue-600">Is An Answer.</span>
            </h1>
            <p className="text-xl text-zinc-500 font-medium max-w-lg leading-relaxed mb-10">
              Kasparro optimizes your brand signals for the reasoning layer of AI agents. Move beyond keywords into the era of semantic trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-10 py-5 bg-zinc-900 text-white rounded-full font-bold text-sm hover:bg-blue-600 hover:scale-105 transition-all shadow-xl text-center"
              >
                Request Access
              </button>
              <Link 
                href="/platform" 
                className="px-10 py-5 border border-zinc-200 rounded-full font-bold text-sm hover:bg-zinc-50 transition-all text-center"
              >
                View Architecture
              </Link>
            </div>
          </div>

          {/* Abstract Visual Component */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full" />
            <div className="relative border border-zinc-200 bg-white/50 backdrop-blur-xl p-10 rounded-[3.5rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
              <div className="space-y-6">
                <div className="h-2 w-1/2 bg-blue-600 rounded-full" />
                <div className="h-2 w-3/4 bg-zinc-100 rounded-full" />
                <div className="pt-8 grid grid-cols-2 gap-6">
                  <div className="bg-zinc-50 rounded-3xl border border-zinc-100 p-6">
                    <div className="text-[10px] font-black text-zinc-300 uppercase">AI Visibility</div>
                    <div className="text-2xl font-black mt-1">88.2%</div>
                  </div>
                  <div className="bg-zinc-50 rounded-3xl border border-zinc-100 p-6">
                    <div className="text-[10px] font-black text-zinc-300 uppercase">Trust Rank</div>
                    <div className="text-2xl font-black mt-1 text-blue-600">Tier 1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST BAR --- */}
      <section className="border-y border-zinc-100 py-12 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale">
          {['OpenAI', 'Anthropic', 'Perplexity', 'Google DeepMind', 'Mistral'].map((brand) => (
            <span key={brand} className="font-black text-xs tracking-tighter uppercase italic">{brand}</span>
          ))}
        </div>
      </section>

      {/* --- CORE MODULES (Marketing) --- */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { id: '01', title: 'Discovery', desc: 'Ensuring your brand is the primary citation for relevant AI queries.' },
            { id: '02', title: 'Alignment', desc: 'Mapping brand messaging to the specific vector space of major LLMs.' },
            { id: '03', title: 'Defense', desc: 'Real-time monitoring for hallucination risks and sentiment bias.' }
          ].map((feature) => (
            <div key={feature.id} className="space-y-4 group">
              <h3 className="font-black text-xs uppercase tracking-widest text-blue-600 group-hover:translate-x-2 transition-transform inline-block">
                {feature.id}. {feature.title}
              </h3>
              <p className="text-xl font-bold leading-tight">{feature.desc}</p>
              <div className="w-12 h-1 bg-zinc-100 group-hover:w-full group-hover:bg-blue-600 transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* --- DATA CONSUMPTION (Pipeline) --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 mb-20 bg-zinc-900 rounded-[4rem] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[150px]" />
        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black uppercase italic mb-6 leading-none">
              The Reasoning <br /> <span className="text-blue-500">Pipeline</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              We move beyond keywords into "Signal Engineering"—ensuring AI ingestion pipelines see your brand's verifiable authority.
            </p>
            <Link href="/platform" className="text-blue-400 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors">
              Explore Architecture →
            </Link>
          </div>
          <div className="bg-zinc-800/50 border border-zinc-700 p-8 rounded-3xl font-mono text-[10px] text-zinc-500">
             <p className="text-blue-400">{`> initializing_vector_scan...`}</p>
             <p className="mt-2 text-zinc-300">{`> mapping brand_signals to GPT-4o vector_space`}</p>
             <p className="mt-2 text-green-400">{`> match found: 98.4% alignment`}</p>
             <p className="mt-4 animate-pulse">_</p>
          </div>
        </div>
      </section>

      {/* --- MODAL OVERLAY --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-zinc-900/90 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-lg rounded-[3.5rem] p-12 relative overflow-hidden shadow-2xl scale-in-center">
            {!submitted ? (
              <>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-8 right-10 text-zinc-300 hover:text-zinc-900 font-bold transition-colors"
                >
                  ESC ✕
                </button>
                <h2 className="text-4xl font-black uppercase italic mb-2 tracking-tighter">Initialize <span className="text-blue-600">Scan</span></h2>
                <p className="text-zinc-400 text-sm mb-10 font-medium">Verify your brand footprint across agentic models.</p>
                <form className="space-y-4" onSubmit={handleRequest}>
                  <input required type="text" placeholder="Corporate Domain" className="w-full px-8 py-5 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium" />
                  <input required type="email" placeholder="Professional Email" className="w-full px-8 py-5 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium" />
                  <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-zinc-900 hover:scale-[1.02] transition-all shadow-lg shadow-blue-100">
                    Initialize Signal Scan
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">✓</div>
                <h2 className="text-3xl font-black uppercase italic mb-2">Request Logged</h2>
                <p className="text-zinc-500 font-medium">Pipeline initialization in progress...</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- FOOTER --- */}
      <footer className="max-w-7xl mx-auto px-6 py-20 border-t border-zinc-50 text-center">
        <div className="font-black text-2xl tracking-tighter uppercase italic mb-2">Kasparro <span className="text-blue-600">Labs</span></div>
        <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.4em]">The Standard for Brand Integrity</p>
      </footer>
    </div>
  );
}