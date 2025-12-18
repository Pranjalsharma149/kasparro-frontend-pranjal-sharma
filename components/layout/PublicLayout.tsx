"use client";

import React from 'react';
import Link from 'next/link';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white min-h-screen flex flex-col selection:bg-blue-100">
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto w-full border-b border-zinc-50">
        <Link href="/" className="font-black text-xl tracking-tighter uppercase italic">
          Kasparro <span className="text-blue-600">Labs</span>
        </Link>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
          <Link href="/platform" className="hover:text-blue-600 transition-colors">Platform</Link>
          <Link href="/app/dashboard" className="text-zinc-900 underline decoration-2 underline-offset-4">Launch Audit</Link>
        </div>
      </nav>
      
      <main className="flex-grow">{children}</main>

      <footer className="max-w-7xl mx-auto px-6 py-20 w-full border-t border-zinc-50 text-center">
        <div className="font-black text-2xl tracking-tighter uppercase italic mb-2">Kasparro <span className="text-blue-600">Labs</span></div>
        <p className="text-zinc-400 text-[9px] font-black uppercase tracking-[0.4em]">Proprietary Signal Engineering © 2025</p>
      </footer>
    </div>
  );
}