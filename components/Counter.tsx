// components/Counter.tsx
'use client'; 

import React, { useEffect } from 'react';
import { useCounterStore } from '@/store/useCounterStore'; 
import { useStoreHydration } from '@/store/useStoreHydration'; 

function Counter() {
  const isHydrated = useStoreHydration();

  const count = useCounterStore((state) => state.count);
  const title = useCounterStore((state) => state.title);
  const isLoading = useCounterStore((state) => state.isLoading);
  const error = useCounterStore((state) => state.error);
  const fetchInitialCount = useCounterStore((state) => state.fetchInitialCount);
  const increment = useCounterStore((state) => state.increment);
  const reset = useCounterStore((state) => state.reset);
  const decrement = useCounterStore((state) => state.decrement);

  useEffect(() => {
    if (isHydrated && count === 0 && !error) { 
        fetchInitialCount();
    }
  }, [isHydrated, count, fetchInitialCount, error]);

  // 1. Hydration Loading State
  if (!isHydrated) {
    return <div className="p-5 border rounded-lg">Loading Store...</div>;
  }

  // 2. Error State UI
  if (error) {
    return (
      <div className="p-5 border border-red-500 bg-red-50 rounded-lg max-w-sm">
        <h2 className="text-red-700 font-bold flex items-center gap-2">
          <span>⚠️</span> API Error
        </h2>
        <p className="text-sm text-red-600 my-2">{error}</p>
        <button 
          onClick={() => fetchInitialCount()} 
          className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 transition-colors"
        >
          Retry Connection
        </button>
      </div>
    );
  }

  // 3. Fetching Data State
  if (isLoading) {
    return (
      <div className="p-5 border border-blue-200 bg-blue-50 rounded-lg animate-pulse">
        <h2 className="text-blue-700 font-semibold">Fetching Server Count...</h2>
        <p className="text-xs text-blue-500">Please wait while we sync your data.</p>
      </div>
    );
  }

  // 4. Success State (Main UI)
  return (
    <div className="p-5 border border-gray-300 rounded-lg shadow-sm bg-white dark:bg-zinc-900">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-lg mb-4">Current Count: <span className="font-mono font-bold text-blue-600">{count}</span></p>
      
      <div className="flex gap-2">
        <button onClick={() => increment(1)} className="px-3 py-1 bg-zinc-100 border rounded hover:bg-zinc-200 dark:bg-zinc-800 dark:border-zinc-700">
          + 1
        </button>
        <button onClick={() => decrement(1)} className="px-3 py-1 bg-zinc-100 border rounded hover:bg-zinc-200 dark:bg-zinc-800 dark:border-zinc-700">
          - 1
        </button>
        <button onClick={reset} className="px-3 py-1 bg-zinc-800 text-white rounded hover:bg-black">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;