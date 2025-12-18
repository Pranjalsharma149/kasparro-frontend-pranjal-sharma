// Ensure this file exports everything from the sub-files
export * from './audit';
export * from './brand';

// You can also define the AuditModule interface here directly if it's missing
export interface AuditModule {
  id: string;
  name: string;
  score: number;
  status: 'Optimal' | 'Warning' | 'Critical' | 'Stable';
  description?: string;
}