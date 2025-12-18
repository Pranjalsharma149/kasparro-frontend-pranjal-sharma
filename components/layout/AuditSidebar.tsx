"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { name: 'Overview', href: '/app/dashboard', icon: '⧉' },
  { name: 'Signal Audit', href: '/app/audit', icon: '◈' },
  { name: 'Citation Map', href: '/app/map', icon: '◬' },
  { name: 'Settings', href: '/app/settings', icon: '⚙' },
];

export const AuditSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-zinc-100 h-screen flex flex-col p-8 bg-white sticky top-0">
      <div className="font-black text-xl tracking-tighter uppercase italic mb-16">
        Kasparro <span className="text-blue-600">Labs</span>
      </div>
      
      <nav className="flex-1 space-y-2">
        {NAV_ITEMS.map((item) => (
          <Link 
            key={item.href} 
            href={item.href}
            className={`flex items-center gap-4 px-4 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
              pathname === item.href ? 'bg-zinc-900 text-white shadow-lg' : 'text-zinc-400 hover:bg-zinc-50 hover:text-zinc-900'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="pt-8 border-t border-zinc-50">
        <div className="p-4 bg-blue-50 rounded-2xl">
          <p className="text-[9px] font-black text-blue-600 uppercase mb-1">Compute Tier</p>
          <p className="text-[11px] font-bold text-zinc-900">Enterprise Node</p>
        </div>
      </div>
    </aside>
  );
};