"use client";

import React from 'react';

interface TwoColumnLayoutProps {
  main: React.ReactNode;
  sidebar: React.ReactNode;
}

export const TwoColumnLayout = ({ main, sidebar }: TwoColumnLayoutProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      {/* Primary Content (e.g., Charts, Issues) */}
      <div className="lg:col-span-8 space-y-10">
        {main}
      </div>

      {/* Secondary Content (e.g., Recommendations, Logs) */}
      <aside className="lg:col-span-4 space-y-6">
        {sidebar}
      </aside>
    </div>
  );
};