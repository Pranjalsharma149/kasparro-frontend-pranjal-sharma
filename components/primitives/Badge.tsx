import React from 'react';

export const Badge = ({ children }: any) => (
  <span className="px-3 py-1 text-[10px] font-black tracking-widest text-blue-600 bg-blue-50 rounded-full uppercase">
    {children}
  </span>
);