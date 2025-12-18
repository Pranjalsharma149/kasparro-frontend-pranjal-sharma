import React from 'react';

// 1. Unified TypeScript Interfaces
interface PhilosophyPoint {
  title: string;
  content: string;
}

interface VisionData {
  mission: string;
  philosophy: PhilosophyPoint[];
}

// 2. Consolidated Data Object
// This follows the "No hard-coded JSX" rule by separating content from logic.
const KASPARRO_VISION: VisionData = {
  mission: "To define the standard for brand integrity in the agentic era.",
  philosophy: [
    {
      title: "Systems over Keywords",
      content: "Traditional SEO manipulates crawlers. AI-SEO manages data systems that feed reasoning engines."
    },
    {
      title: "Verifiable Trust",
      content: "AI agents prioritize sources with high EEAT (Experience, Expertise, Authoritativeness, Trustworthiness)."
    },
    {
      title: "Agentic First",
      content: "We design for a world where AI agents, not humans, are the primary consumers of web data."
    },
    {
      title: "From Links to Citations",
      content: "In the AI era, ranking #1 doesn't matter if the LLM doesn't cite you as the source of truth."
    },
    {
      title: "Systems-Level SEO",
      content: "We move beyond keyword stuffing into 'Signal Engineering'—ensuring data ingestion pipelines see your best self."
    }
  ]
};
