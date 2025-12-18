// lib/types/audit.ts

export type IssueSeverity = 'Critical' | 'Warning' | 'Info';

export interface AuditIssue {
  id: string; // Unique ID for the issue (e.g., 'missing-schema-markup')
  title: string;
  severity: IssueSeverity;
  detail: string; // Detailed description of the issue
  module: AuditModule['id']; // Which module identified it
  recommendationRef: string; // Link to the specific recommendation key
}

export interface AuditModule {
  id: string; // e.g., 'trust-eeat', 'keyword-coverage', 'content-architecture'
  name: string; // User-facing name (e.g., 'Trust & EEAT')
  icon: string; // Icon identifier (e.g., 'Shield' or 'Key')
  description: string;
}

export interface AuditModuleResult {
  module: AuditModule['id'];
  score: number; // 0-100 (for the score card display)
  keyInsights: string[]; // List of 3-5 high-level takeaways
  issues: AuditIssue[]; // Detailed list of issues/flags found
  recommendations: {
    id: string;
    text: string; // Textual recommendation
    priority: 'High' | 'Medium' | 'Low';
    estimatedImpact: string; // e.g., '+15% Visibility'
  }[];
}

export interface BrandAuditData {
  brandId: string;
  lastRunDate: number; // Audit completion timestamp
  // Flattened snapshot metrics for easy access on the dashboard
  visibilityScore: number;
  trustEeatScore: number;
  nonBrandedCoverage: string;

  // Detailed results keyed by module ID
  moduleResults: Record<AuditModule['id'], AuditModuleResult>;
}