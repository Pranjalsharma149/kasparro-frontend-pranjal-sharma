// src/store/useAuditStore.ts
import { create } from 'zustand';

// Define the Audit Event Type
interface AuditEvent {
  id: number;
  timestamp: number;
  message: string;
  source: 'COUNTER' | 'USER' | 'SYSTEM'; // Event originator
}

// Define the Audit State Structure
interface AuditState {
  log: AuditEvent[];
  addEvent: (message: string, source: AuditEvent['source']) => void;
  clearLog: () => void;
}

// Create the Store
export const useAuditStore = create<AuditState>((set) => ({
  log: [], 

  // Action to add an event
  addEvent: (message, source) => 
    set((state) => ({
      log: [
        {
          id: Date.now() + Math.random(), 
          timestamp: Date.now(),
          message: message,
          source: source,
        },
        ...state.log, 
      ],
    })),

  // Action to clear all events
  clearLog: () => set({ log: [] }),
}));