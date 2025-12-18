import React from 'react';

export const Button = ({ children, onClick, variant = 'primary' }: any) => {
  const styles = variant === 'primary' 
    ? "bg-blue-600 text-white hover:bg-blue-700" 
    : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200";
  
  return (
    <button 
      onClick={onClick}
      className={`px-6 py-3 rounded-full font-bold text-sm transition-all active:scale-95 ${styles}`}
    >
      {children}
    </button>
  );
};