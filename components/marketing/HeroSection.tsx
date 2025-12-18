import React from 'react';
import Link from 'next/link';
import { Button } from '../primitives/Button';

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-20 text-center md:text-left">
      <div className="inline-block px-3 py-1 mb-6 text-[10px] font-black tracking-widest text-blue-600 bg-blue-50 rounded-full uppercase">
        Brand Integrity for LLMs
      </div>
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase italic mb-8">
        The Front Page <br />
        <span className="text-blue-600">Is An Answer.</span>
      </h1>
      <p className="text-xl text-zinc-500 font-medium max-w-lg leading-relaxed mb-10">
        Kasparro optimizes your brand signals for the reasoning layer of AI agents. Move beyond keywords.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/app/dashboard">
          <Button>Start AI-SEO Audit</Button>
        </Link>
        <Link href="/platform">
          <Button variant="secondary">View Architecture</Button>
        </Link>
      </div>
    </section>
  );
}