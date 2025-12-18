// lib/types/brand.ts

export interface Brand {
  id: string; // Unique identifier (e.g., 'brand-a', 'brand-b')
  name: string; // Display name (e.g., 'Global Tech Corp')
  logoUrl: string; // URL for the brand logo
  lastAuditTimestamp: number; // Unix timestamp for the last full audit
}

export interface BrandSnapshotData {
  visibilityScore: number; // e.g., 88
  trustEeatScore: number; // e.g., 95
  nonBrandedKeywordCoverage: string; // e.g., '14,000 keywords'
}