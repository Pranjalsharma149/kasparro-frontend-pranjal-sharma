"use client";

import React, { useState } from 'react';

export default function DashboardPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [activeBrand, setActiveBrand] = useState('My Brand'); // Toggle state
  const [logs, setLogs] = useState([
    "> Success: Vector mapping complete.",
    "> Audit Engine: All modules online."
  ]);

  // Mock data for comparison
  const stats = {
    'My Brand': { visibility: '88.2%', trust: 'High', bias: '2.1%', share: '34%' },
    'Competitor A': { visibility: '72.5%', trust: 'Medium', bias: '5.4%', share: '18%' }
  };

  const currentData = stats[activeBrand as keyof typeof stats];

  const runAudit = () => {
    setIsScanning(true);
    setLogs([`> Re-scanning parameters for ${activeBrand}...`]);
    
    setTimeout(() => setLogs(prev => [...prev, "> Analyzing citation density..."]), 800);
    setTimeout(() => {
      setLogs(prev => [...prev, `> Success: ${activeBrand} snapshot updated.`]);
      setIsScanning(false);
    }, 1800);
  };

  return (
    <main className="min-h-screen bg-zinc-100 p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-black uppercase italic leading-none">
              Audit <span className="text-blue-600">Ledger</span>
            </h1>
            <div className="flex gap-2 mt-4 bg-white p-1 rounded-xl border border-zinc-200 w-fit">
              <button 
                onClick={() => setActiveBrand('My Brand')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeBrand === 'My Brand' ? 'bg-zinc-900 text-white' : 'text-zinc-400 hover:text-zinc-600'}`}
              >
                My Brand
              </button>
              <button 
                onClick={() => setActiveBrand('Competitor A')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeBrand === 'Competitor A' ? 'bg-zinc-900 text-white' : 'text-zinc-400 hover:text-zinc-600'}`}
              >
                Competitor A
              </button>
            </div>
          </div>
          
          <button 
            onClick={runAudit}
            disabled={isScanning}
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-blue-700 active:scale-95 disabled:bg-zinc-300 transition-all"
          >
            {isScanning ? 'Processing...' : `Audit ${activeBrand}`}
          </button>
        </header>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'AI Visibility', value: currentData.visibility },
            { label: 'Trust Index', value: currentData.trust },
            { label: 'Bias Risk', value: currentData.bias },
            { label: 'Share of Voice', value: currentData.share }
          ].map((metric) => (
            <div key={metric.label} className="bg-white p-6 rounded-[2rem] border border-zinc-200">
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">{metric.label}</p>
              <p className={`text-3xl font-black ${isScanning ? 'animate-pulse text-zinc-200' : 'text-zinc-900'}`}>
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Chart Mockup */}
        <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 mb-8">
          <h3 className="text-sm font-bold uppercase tracking-tighter mb-6 text-zinc-400">Head-to-Head Trust Analysis</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs font-bold mb-2">
                <span>My Brand</span>
                <span className="text-blue-600">88%</span>
              </div>
              <div className="h-3 w-full bg-zinc-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full transition-all duration-1000" style={{ width: isScanning ? '0%' : '88%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold mb-2 text-zinc-400">
                <span>Competitor A</span>
                <span>72%</span>
              </div>
              <div className="h-3 w-full bg-zinc-100 rounded-full overflow-hidden">
                <div className="h-full bg-zinc-300 rounded-full transition-all duration-1000" style={{ width: isScanning ? '0%' : '72%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Terminal */}
        <div className="bg-zinc-900 rounded-[2rem] p-8 font-mono text-sm shadow-2xl">
          <div className="flex gap-1.5 mb-4">
              <div className="w-2 h-2 rounded-full bg-red-500/30" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/30" />
              <div className="w-2 h-2 rounded-full bg-green-500/30" />
          </div>
          <div className="space-y-1">
            {logs.map((log, i) => (
              <p key={i} className={log.includes('Success') ? 'text-green-400' : 'text-blue-400'}>{log}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}