// src/store/useCounterStore.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { useAuditStore } from './useAuditStore';

// 1. Define the structure including error handling
interface CounterState {
  count: number;
  title: string;
  isLoading: boolean;
  error: string | null; // Track error messages
  increment: (value: number) => void;
  decrement: (value: number) => void;
  reset: () => void;
  fetchInitialCount: () => Promise<void>;
  clearError: () => void;
}

const auditAction = (message: string, source: 'COUNTER' | 'SYSTEM' = 'COUNTER') => {
  useAuditStore.getState().addEvent(message, source); 
};

export const useCounterStore = create<CounterState>()(
  persist(
    (set, get) => ({
      count: 0,
      title: "Simple Counter",
      isLoading: false,
      error: null,

      increment: (value) => {
        set((state) => ({ count: state.count + value }));
        auditAction(`Incremented count by ${value}. New count: ${get().count}`);
      },

      decrement: (value) => {
        set((state) => ({ count: state.count - value }));
        auditAction(`Decremented count by ${value}. New count: ${get().count}`);
      },

      reset: () => {
        set({ count: 0 });
        auditAction(`Counter successfully reset.`);
      },
      
      fetchInitialCount: async () => {
        set({ isLoading: true, error: null });
        auditAction(`Attempting to fetch data...`);
        
        try {
          // Simulate API delay
          await new Promise((resolve) => setTimeout(resolve, 2000));
          
          // Simulate a 40% failure rate for testing
          if (Math.random() < 0.4) {
            throw new Error("Network timeout: Could not reach the count server.");
          }
          
          const initialValue = 42; 
          set({ count: initialValue, isLoading: false });
          auditAction(`Data fetched successfully: ${initialValue}`);
        } catch (err: any) {
          set({ error: err.message, isLoading: false });
          auditAction(`API ERROR: ${err.message}`, 'SYSTEM');
        }
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: 'counter-storage', 
      storage: createJSONStorage(() => localStorage), 
      partialize: (state) => ({ count: state.count, title: state.title }),
    }
  )
);