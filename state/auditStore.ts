import { create } from 'zustand';
import { AuditModule } from '../lib/types';

/**
 * CORE_AUDIT_MODULES
 * Defines the static structure of our audit layers.
 */
const CORE_AUDIT_MODULES: AuditModule[] = [
  { 
    id: 'eeat', 
    name: 'Trust & EEAT Score', 
    icon: 'Shield', 
    description: 'Assesses Expertise, Authority, and Trustworthiness.',
    score: 0, 
    status: 'Stable' 
  },
  { 
    id: 'keyword-coverage', 
    name: 'Non-Branded Keywords', 
    icon: 'Search', 
    description: 'Identifies gaps in organic keyword coverage.',
    score: 0, 
    status: 'Stable'
  },
  { 
    id: 'content-architecture', 
    name: 'Content Architecture', 
    icon: 'Layout', 
    description: 'Evaluates site structure and topical relevance.',
    score: 0, 
    status: 'Stable'
  },
  { 
    id: 'ai-ranking', 
    name: 'AI Ranking Signals', 
    icon: 'Sparkle', 
    description: 'Analyzes compatibility with modern AI search algorithms.',
    score: 0, 
    status: 'Stable'
  },
  { 
    id: 'brand-cohesion', 
    name: 'Brand Cohesion', 
    icon: 'Users', 
    description: 'Checks consistency across all brand touchpoints.',
    score: 0, 
    status: 'Stable'
  },
  { 
    id: 'serp-gaps', 
    name: 'SERP Gap Analysis', 
    icon: 'ChartLine', 
    description: 'Compares performance against top competitors.',
    score: 0, 
    status: 'Stable'
  },
  { 
    id: 'technical-seo', 
    name: 'Technical SEO Health', 
    icon: 'Code', 
    description: 'Standard technical crawl and indexing audit.',
    score: 0, 
    status: 'Stable'
  },
];

interface AuditState {
  modules: AuditModule[];
  selectedModuleId: string | null;
  
  // Actions
  initializeModules: () => void;
  setSelectedModule: (id: string) => void;
}

/**
 * useAuditStore
 * Manages state for the Kasparro Audit Engine.
 */
export const useAuditStore = create<AuditState>((set, get) => ({
  modules: [],
  selectedModuleId: null,

  initializeModules: () => {
    // We clone the constants into the state
    const modules = [...CORE_AUDIT_MODULES];
    if (modules.length > 0) {
      set({ 
        modules: modules,
        selectedModuleId: modules[0].id 
      });
    }
  },
  
  setSelectedModule: (id) => {
    if (get().modules.some(m => m.id === id)) {
      set({ selectedModuleId: id });
    } else {
      console.warn(`Invalid module ID: ${id}`);
    }
  },
}));

export default useAuditStore;