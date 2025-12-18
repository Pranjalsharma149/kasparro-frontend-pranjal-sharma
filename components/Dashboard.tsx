'use client'; 

import React, { useEffect, useState, useRef } from 'react';
// These imports assume you have your Zustand stores set up in /src/store/
import { useCounterStore } from '@/store/useCounterStore'; 
import { useUserStore } from '@/store/useUserStore';

const Dashboard = () => {
  // Store Subscriptions
  const count = useCounterStore((state) => state.count);
  const isCounterLoading = useCounterStore((state) => state.isLoading);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const username = useUserStore((state) => state.username);

  // Local state for trend tracking logic
  const [trend, setTrend] = useState<'up' | 'down' | 'neutral'>('neutral');
  const prevCount = useRef(count);

  useEffect(() => {
    if (count > prevCount.current) setTrend('up');
    else if (count < prevCount.current) setTrend('down');
    
    prevCount.current = count;

    // Reset trend indicator after 2 seconds
    const timer = setTimeout(() => setTrend('neutral'), 2000);
    return () => clearTimeout(timer);
  }, [count]);

  // Loading State (Matches your "Syncing" aesthetic)
  if (isCounterLoading) {
    return (
      <div className="bg-zinc-50 border border-zinc-200 p-10 rounded-[2.5rem] w-full max-w-xl text-center animate-pulse">
        <h2 className="text-sm font-black uppercase tracking-[0.2em] text-blue-600 italic">
          Initializing System Sync...
        </h2>
      </div>
    );
  }

  return (
    <div className="p-8 border border-zinc-200 bg-white dark:bg-zinc-950 rounded-[2.5rem] shadow-sm w-full max-w-xl">
      <div className="flex justify-between items-center mb-8 border-b border-zinc-50 pb-4">
        <h2 className="text-xl font-black uppercase italic tracking-tighter text-zinc-900 dark:text-white">
          System <span className="text-blue-600">Intelligence</span>
        </h2>
        <div className="text-[10px] font-mono text-zinc-400">v1.0.4 // LIVE</div>
      </div>
      
      <div className="space-y-4">
        {/* User Status Card */}
        <div className="p-6 border border-zinc-100 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl flex justify-between items-center group hover:border-blue-200 transition-colors">
          <div>
            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">
              Active Session
            </p>
            <p className="text-xl font-bold text-zinc-900 dark:text-zinc-100 italic">
              {isLoggedIn ? username : 'Guest Account'}
            </p>
          </div>
          <div className="relative">
             <div className={`h-3 w-3 rounded-full ${isLoggedIn ? 'bg-green-500 animate-ping opacity-75' : 'bg-zinc-300'}`} />
             <div className={`absolute inset-0 h-3 w-3 rounded-full ${isLoggedIn ? 'bg-green-500' : 'bg-zinc-300'}`} />
          </div>
        </div>

        {/* Global Count Card with Trend Visualizer */}
        <div className="p-6 border border-zinc-100 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl group hover:border-green-200 transition-colors">
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-1">
                Global Item Count
              </p>
              <p className="text-5xl font-black text-zinc-900 dark:text-zinc-100 tracking-tighter italic">
                {count.toLocaleString()}
              </p>
            </div>
            
            {/* Trend Icon */}
            <div className={`text-xl font-black flex items-center gap-1 ${
              trend === 'up' ? 'text-green-500' : 
              trend === 'down' ? 'text-red-500' : 
              'text-zinc-300'
            }`}>
              {trend === 'up' && <span className="animate-bounce">▲</span>}
              {trend === 'down' && <span className="animate-bounce">▼</span>}
              {trend === 'neutral' && <span className="opacity-50">—</span>}
            </div>
          </div>
          
          {/* Visual Progress Bar (Simulating scale of 0-100) */}
          <div className="space-y-2">
            <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-700 ease-out ${
                  trend === 'down' ? 'bg-red-500' : 'bg-blue-600'
                }`}
                style={{ width: `${Math.min(Math.max((count / 100) * 100, 5), 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-[8px] font-black uppercase text-zinc-400 tracking-tighter">
              <span>Min Capacity</span>
              <span>Network Load</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-4 border-t border-zinc-50 flex items-center justify-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
          State Synchronized via Multi-Store Hook
        </p>
      </div>
    </div>
  );
};

export default Dashboard;