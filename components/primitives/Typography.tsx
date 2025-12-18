import React from 'react';

export const Heading = ({ children, className = "" }: any) => (
  <h2 className={`text-3xl font-black uppercase italic tracking-tighter ${className}`}>
    {children}
  </h2>
);