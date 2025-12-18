// state/brandStore.ts
import { create } from 'zustand';
import { Brand } from '../lib/types';
import brandsMock from '../lib/data/brands.json'; // Assume this file exists

interface BrandState {
  brands: Brand[];
  selectedBrandId: string | null;
  
  // Actions
  initializeBrands: () => void;
  setSelectedBrand: (id: string) => void;
}

export const useBrandStore = create<BrandState>((set, get) => ({
  brands: [],
  selectedBrandId: null,

  // Action to load initial brands from mock data and set a default
  initializeBrands: () => {
    // Cast the mock data to the Brand[] type
    const initialBrands: Brand[] = brandsMock as Brand[]; 

    if (initialBrands.length > 0) {
      set({ 
        brands: initialBrands,
        selectedBrandId: initialBrands[0].id // Set the first brand as default
      });
    } else {
      set({ brands: [] });
    }
  },
  
  // Action to change the selected brand
  setSelectedBrand: (id) => {
    // Simple check to ensure the ID is valid before setting
    if (get().brands.some(b => b.id === id)) {
      set({ selectedBrandId: id });
    } else {
      console.warn(`Attempted to set invalid brand ID: ${id}`);
    }
  },
}));