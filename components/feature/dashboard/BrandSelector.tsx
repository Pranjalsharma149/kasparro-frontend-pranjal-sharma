"use client";

import React from 'react';

/**
 * BrandSelector Component
 * Allows users to toggle between managed brand profiles.
 */
export const BrandSelector = () => {
  const brands = ["Kasparro Labs", "Competitor Alpha", "Legacy Tech Corp"];
  const [active, setActive] = React.useState(brands[0]);

  return (
    <div className="bg-white border border-zinc-100 p-2 rounded-2xl flex gap-1 shadow-sm">
      {brands.map((brand) => (
        <button
          key={brand}
          onClick={() => setActive(brand)}
          className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
            active === brand 
              ? 'bg-zinc-900 text-white shadow-md' 
              : 'text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50'
          }`}
        >
          {brand}
        </button>
      ))}
    </div>
  );
};

export default BrandSelector;