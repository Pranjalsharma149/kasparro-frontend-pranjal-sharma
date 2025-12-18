export interface PipelineStep {
  id: string;
  name: string;
  role: string;
  description: string;
  technicalTerm: 'InputAssembler' | 'ContextPack' | 'AuditModules' | 'OutputSurfaces';
}

export const KASPARRO_PIPELINE: PipelineStep[] = [
  {
    id: '1',
    name: 'Data Ingestion',
    role: 'InputAssembler',
    description: 'Aggregates brand mentions, site crawls, and social signals into a raw data stream.',
    technicalTerm: 'InputAssembler'
  },
  {
    id: '2',
    name: 'Semantic Processing',
    role: 'ContextPack',
    description: 'Enriches raw data with LLM-specific context and vector embeddings.',
    technicalTerm: 'ContextPack'
  },
  {
    id: '3',
    name: 'Core Analysis',
    role: 'AuditModules',
    description: 'The 7-module engine evaluates visibility, trust, and sentiment bias.',
    technicalTerm: 'AuditModules'
  },
  {
    id: '4',
    name: 'Final Delivery',
    role: 'OutputSurfaces',
    description: 'Generates actionable insights and executive dashboards.',
    technicalTerm: 'OutputSurfaces'
  }
];