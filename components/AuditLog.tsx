// components/AuditLog.tsx

'use client'; 

import React, { useState } from 'react';
import { useAuditStore } from '@/store/useAuditStore';

const sourceColors = {
  COUNTER: 'text-green-600 bg-green-100',
  USER: 'text-blue-600 bg-blue-100',
  SYSTEM: 'text-red-600 bg-red-100',
};

function AuditLog() {
  // Use selectors for data and functions
  const log = useAuditStore((state) => state.log);
  const clearLog = useAuditStore((state) => state.clearLog);
  
  // SELECTOR LOGIC: Derive error count directly from the log array
  const errorCount = useAuditStore((state) => 
    state.log.filter(e => e.source === 'SYSTEM').length
  );

  const [filterSource, setFilterSource] = useState<'ALL' | 'COUNTER' | 'USER' | 'SYSTEM'>('ALL');

  const filteredLog = log.filter(event => 
    filterSource === 'ALL' || event.source === filterSource
  );

  return (
    <div className="mt-10 p-6 border border-gray-300 bg-white dark:bg-zinc-900 rounded-xl shadow-lg w-full max-w-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-zinc-100">Audit Ledger</h2>
        {/* Only show badge if errors exist */}
        {errorCount > 0 && (
          <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-pulse">
            {errorCount} SYSTEM ERRORS
          </span>
        )}
      </div>
      
      <div className="flex items-center justify-between mb-4 gap-2">
        <select
          value={filterSource}
          onChange={(e) => setFilterSource(e.target.value as any)}
          className="p-2 border rounded text-xs bg-zinc-50 dark:bg-zinc-800 dark:border-zinc-700"
        >
          <option value="ALL">All Sources</option>
          <option value="COUNTER">Counter Logic</option>
          <option value="USER">User Sessions</option>
          <option value="SYSTEM">System Alerts</option>
        </select>
        
        <button
          onClick={clearLog}
          className="text-[10px] font-bold text-red-500 hover:text-red-700 uppercase tracking-tighter"
          disabled={log.length === 0}
        >
          Purge Ledger
        </button>
      </div>

      <div className="h-64 overflow-y-auto border rounded p-2 bg-zinc-50 dark:bg-zinc-950 font-mono text-[11px] border-zinc-200 dark:border-zinc-800">
        {filteredLog.length === 0 ? (
          <p className="text-gray-400 text-center py-20 italic">No activity recorded in ledger.</p>
        ) : (
          filteredLog.map(event => (
            <div key={event.id} className="mb-2 border-b border-zinc-200 dark:border-zinc-800 pb-1 last:border-0">
              <span className={`px-1 rounded text-[9px] font-bold mr-2 uppercase ${sourceColors[event.source]}`}>
                {event.source}
              </span>
              <span className="text-zinc-600 dark:text-zinc-400">{event.message}</span>
              <span className="block text-[8px] text-zinc-400 mt-1 uppercase tracking-widest">
                {new Date(event.timestamp).toLocaleTimeString()}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AuditLog;