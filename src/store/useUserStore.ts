// src/store/useUserStore.ts
import { create } from 'zustand';
import { useAuditStore } from './useAuditStore'; // Import the Audit Store

// Define the User State Structure
interface UserState {
  isLoggedIn: boolean;
  username: string | null;
  login: (name: string) => Promise<void>;
  logout: () => void;
}

// Helper function to call the audit store
const auditUserAction = (message: string) => {
  useAuditStore.getState().addEvent(message, 'USER');
};

// Create the Store
export const useUserStore = create<UserState>((set, get) => ({
  // Initial State
  isLoggedIn: false,
  username: null,

  // Actions
  login: async (name: string) => {
    auditUserAction(`Attempting login for: ${name}`);
    await new Promise((resolve) => setTimeout(resolve, 200)); 
    set({
      isLoggedIn: true,
      username: name,
    });
    auditUserAction(`User successfully logged in: ${get().username}`);
  },

  logout: () => {
    auditUserAction(`User logged out: ${get().username}`);
    set({
      isLoggedIn: false,
      username: null,
    });
  },
}));