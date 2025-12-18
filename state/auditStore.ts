// state/auditStore.ts
import { create } from 'zustand';
import { AuditModule } from '../lib/types';

// Mock list of 7 Core Audit Modules (IDs should match keys in audit-data.json)
const CORE_AUDIT_MODULES: AuditModule[] = [
  { id: 'eeat', name: 'Trust & EEAT Score', icon: 'Shield', description: 'Assesses Expertise, Authority, and Trustworthiness.' },
  { id: 'keyword-coverage', name: 'Non-Branded Keywords', icon: 'Search', description: 'Identifies gaps in organic keyword coverage.' },
  { id: 'content-architecture', name: 'Content Architecture', icon: 'Layout', description: 'Evaluates site structure and topical relevance.' },
  { id: 'ai-ranking', name: 'AI Ranking Signals', icon: 'Sparkle', description: 'Analyzes compatibility with modern AI search algorithms.' },
  { id: 'brand-cohesion', name: 'Brand Cohesion', icon: 'Users', description: 'Checks consistency across all brand touchpoints.' },
  { id: 'serp-gaps', name: 'SERP Gap Analysis', icon: 'Chart', description: 'Compares performance against top competitors.' },
  { id: 'technical-seo', name: 'Technical SEO Health', icon: 'Code', description: 'Standard technical crawl and indexing audit.' },
];

interface AuditState {
  modules: AuditModule[];
  selectedModuleId: string | null;
  
  // Actions
  initializeModules: () => void;
  setSelectedModule: (id: string) => void;
}

export const useAuditStore = create<AuditState>((set, get) => ({
  modules: [],
  selectedModuleId: null,

  // Action to load initial modules and set a default
  initializeModules: () => {
    const modules = CORE_AUDIT_MODULES;
    if (modules.length > 0) {
      set({ 
        modules: modules,
        selectedModuleId: modules[0].id // Set the first module as default ('eeat')
      });
    }
  },
  
  // Action to change the selected audit module
  setSelectedModule: (id) => {
    if (get().modules.some(m => m.id === id)) {
      set({ selectedModuleId: id });
    } else {
      console.warn(`Attempted to set invalid module ID: ${id}`);
    }
  },
}));