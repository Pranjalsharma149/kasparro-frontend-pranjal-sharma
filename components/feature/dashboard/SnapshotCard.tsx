"use client";

import React from 'react';

interface SnapshotProps {
  label: string;
  value: string | number;
  trend?: string;
  isPositive?: boolean;
}

/**
 * SnapshotCard Component
 * A compact display for secondary data points.
 */
export const SnapshotCard = ({ label, value, trend, isPositive = true }: SnapshotProps) => {
  return (
    <div className="bg-white border border-zinc-100 p-6 rounded-[2rem] hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 transition-all group">
      <div className="flex justify-between items-start mb-4">
        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-blue-600 transition-colors">
          {label}
        </p>
        {trend && (
          <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded ${
            isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
          }`}>
            {trend}
          </span>
        )}
      </div>
      
      <div className="flex items-end justify-between">
        <h3 className="text-3xl font-black italic tracking-tighter text-zinc-900">
          {value}
        </h3>
        
        {/* Simple visual spark-line simulation */}
        <div className="flex items-end gap-0.5 h-6">
          {[40, 70, 45, 90, 65].map((h, i) => (
            <div 
              key={i} 
              className="w-1 bg-zinc-100 rounded-full group-hover:bg-blue-100 transition-colors" 
              style={{ height: `${h}%` }} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SnapshotCard;