// lib/types/index.ts

// 1. Export types from sub-files to ensure they are recognized as modules
export * from './audit';
export * from './brand';

/**
 * AuditModule Interface
 * This is the core data structure for the 7-layer audit engine.
 */
export interface AuditModule {
  id: string;
  name: string;
  // This line fixes the "Object literal may only specify known properties" error
  icon: string; 
  score: number;
  status: 'Optimal' | 'Warning' | 'Critical' | 'Stable';
  description?: string;
}

/**
 * Brand Interface
 * Used for the brand management and comparison logic.
 */
export interface Brand {
  id: string;
  name: string;
  industry: string;
  visibilityScore: number;
  lastAuditDate: string;
  isPrimary: boolean;
  metrics: {
    sentiment: number;
    trust: number;
    citations: number;
  };
}