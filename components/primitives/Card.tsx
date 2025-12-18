import React from 'react';

export const Card = ({ children, className = "" }: any) => (
  <div className={`bg-white border border-zinc-200 rounded-[2.5rem] p-8 shadow-sm hover:shadow-md transition-shadow ${className}`}>
    {children}
  </div>
);