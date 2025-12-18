export const AuditModuleDetails = ({ moduleName = "Citation Graph" }: any) => (
  <div className="p-10 bg-white border border-zinc-100 rounded-[3rem]">
    <div className="flex justify-between items-center mb-10">
      <h2 className="text-3xl font-black uppercase italic tracking-tighter">{moduleName}</h2>
      <div className="px-4 py-2 bg-zinc-900 text-white rounded-full text-[10px] font-black uppercase">Deep Scan</div>
    </div>
    <div className="grid md:grid-cols-2 gap-10">
      <div className="space-y-6">
        <p className="text-zinc-500 leading-relaxed font-medium">
          The citation graph measures how often AI agents reference your specific URLs as 
          the "Ground Truth" for complex reasoning tasks.
        </p>
        <div className="bg-zinc-50 p-6 rounded-3xl border border-zinc-100">
          <div className="text-[10px] font-black text-zinc-300 uppercase mb-4">Vector Density</div>
          <div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 w-2/3" />
          </div>
        </div>
      </div>
      <div className="bg-zinc-950 p-8 rounded-3xl font-mono text-[10px] text-blue-400">
        <p>{`> Scanning citation_nodes...`}</p>
        <p className="mt-2 text-zinc-500">{`> Found 1.2M connections`}</p>
        <p className="mt-2 text-red-500">{`> WARNING: Missing cross-reference from Tier 1 journals`}</p>
      </div>
    </div>
  </div>
);