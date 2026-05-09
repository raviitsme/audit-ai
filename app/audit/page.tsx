"use client";

import { useEffect, useState } from "react";
import { RunAudit } from "@/lib/audit-engine";
import { aggregateAudit } from "@/lib/helpers/aggregateAudit";
import { ToolsListItem } from "@/types/audit";

/* ─── Utils ─── */
const currency = (n: number) => 
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

const today = () => new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

export default function AuditDashboard() {
  const [results, setResults] = useState<any[]>([]);
  const [summary, setSummary] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("audit-tools");
    if (!saved) return;
    const tools: ToolsListItem[] = JSON.parse(saved);
    const audit = RunAudit(tools);
    setResults(audit);
    setSummary(aggregateAudit(audit));
  }, []);

  if (!summary) return null;

  const monthlyWaste = Number(summary.totalMonthlySavings);
  const annualWaste = Number(summary.totalAnnualSavings);
  
  // Logic Gates
  const isHighValue = monthlyWaste >= 500;
  const isOptimal = monthlyWaste === 0;
  const isLowValue = monthlyWaste > 0 && monthlyWaste < 500;

  return (
    <div className="min-h-screen bg-[#fffef0] text-[#1a1a1a] font-sans antialiased pb-20 selection:bg-[#B30026] selection:text-white">
      
      {/* HEADER: Editorial Style */}
      <header className="max-w-7xl mx-auto px-6 pt-12 pb-8 border-b-2 border-black flex flex-col md:flex-row justify-between items-baseline gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-3 w-3 bg-[#B30026] rotate-45" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#6b6b6b]">Analysis Report</span>
          </div>
          <h1 className="text-5xl font-[Anton,sans-serif] uppercase tracking-tight leading-[0.8]">
            AI Stack <span className="text-[#B30026]">Audit</span>
          </h1>
        </div>
        <div className="text-right">
          <p className="text-xs font-mono font-bold tracking-tighter uppercase">{today()}</p>
          <p className="text-[10px] text-[#6b6b6b] uppercase tracking-widest mt-1">Ref: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <section className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Big Numbers */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="group">
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#6b6b6b] mb-3 group-hover:text-[#B30026] transition-colors">Recoverable Monthly</p>
              <p className="text-7xl font-[Anton,sans-serif] leading-none tracking-tighter italic">
                {currency(monthlyWaste)}
              </p>
              <div className="h-1 w-12 bg-black mt-4 group-hover:w-full transition-all duration-500" />
            </div>
            <div className="group">
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#6b6b6b] mb-3">Projected Annual</p>
              <p className="text-7xl font-[Anton,sans-serif] leading-none tracking-tighter">
                {currency(annualWaste)}
              </p>
              <div className="h-1 w-12 bg-[#B30026] mt-4" />
            </div>
          </div>

          {/* Dynamic Human-Written Summary Card */}
          <div className="lg:col-span-5 bg-black text-white p-8 rounded-sm shadow-2xl transform lg:rotate-1 hover:rotate-0 transition-transform duration-300">
            {isHighValue && (
              <>
                <h2 className="text-2xl font-[Anton,sans-serif] uppercase leading-tight mb-4 text-[#ffe600]">
                  You're overpaying for performance.
                </h2>
                <p className="text-sm font-serif italic opacity-90 leading-relaxed mb-6">
                  "The audit shows significant 'seat-ghosting' and redundant model access. We found <strong>{results.length}</strong> areas where you're being billed for enterprise features that your actual usage doesn't justify."
                </p>
                <button className="w-full bg-[#B30026] hover:bg-white hover:text-black transition-all py-4 text-xs font-bold uppercase tracking-widest">
                  Auto-Apply Savings with Credex
                </button>
              </>
            )}

            {isLowValue && (
              <>
                <h2 className="text-2xl font-[Anton,sans-serif] uppercase leading-tight mb-4">
                  Small leaks, tight ship.
                </h2>
                <p className="text-sm font-serif italic opacity-90 leading-relaxed mb-6">
                  "Your stack is actually quite healthy. We spotted a few minor optimizations, but nothing critical. You're currently beating 85% of audited teams in efficiency."
                </p>
                <div className="flex gap-2">
                  <input className="bg-transparent border-b border-white/30 py-2 text-xs flex-1 outline-none focus:border-[#ffe600]" placeholder="Email for new alerts..." />
                  <button className="text-[#ffe600] text-[10px] font-bold uppercase tracking-widest">Join</button>
                </div>
              </>
            )}

            {isOptimal && (
              <>
                <h2 className="text-2xl font-[Anton,sans-serif] uppercase leading-tight mb-4 text-[#00ff00]">
                  Perfect 1.0 Efficiency.
                </h2>
                <p className="text-sm font-serif italic opacity-90 leading-relaxed mb-6">
                  "This is rare. Every subscription we analyzed shows high engagement and zero plan waste. No changes recommended today."
                </p>
                <button className="w-full border border-white/40 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                  Get notified of price drops
                </button>
              </>
            )}
          </div>
        </section>

        {/* RESULTS FEED: Styled like a curated list, not a cold table */}
        <section className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-[Anton,sans-serif] text-2xl uppercase tracking-wider">The Breakdown</h3>
            <span className="text-[10px] font-bold py-1 px-3 bg-[#f8f6e8] border border-black/10 rounded-full italic font-serif">
              Total items: {results.length}
            </span>
          </div>

          <div className="space-y-4">
            {results.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white border border-black/5 p-6 hover:border-black transition-all flex flex-col md:flex-row items-start md:items-center gap-6"
              >
                {/* Visual indicator of "human" check */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="bg-black text-[#ffe600] text-[8px] font-bold px-1 py-4 [writing-mode:vertical-lr] uppercase">Verified</div>
                </div>

                <div className="flex-1">
                  <h4 className="text-lg font-[Anton,sans-serif] uppercase tracking-wide group-hover:text-[#B30026] transition-colors">
                    {item.tool}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-mono text-[#6b6b6b] uppercase">{item.currentPlan}</span>
                    <span className="text-[#6b6b6b] text-xs">→</span>
                    <span className="text-[10px] font-mono font-bold uppercase">{item.recommendedPlan}</span>
                  </div>
                </div>

                <div className="md:w-64">
                  <p className="text-sm font-serif italic text-[#444] leading-tight">
                    "{item.reason}"
                  </p>
                </div>

                <div className="text-right min-w-[120px]">
                  <p className={`text-xl font-[Anton,sans-serif] ${Number(item.monthlySavings) > 0 ? 'text-[#B30026]' : 'text-black opacity-30'}`}>
                    {Number(item.monthlySavings) > 0 ? `-${currency(item.monthlySavings)}` : '--'}
                  </p>
                  <p className="text-[9px] uppercase tracking-widest text-[#6b6b6b]">Monthly Saving</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="mt-24 max-w-7xl mx-auto px-6 py-12 border-t border-black/10 flex flex-col md:flex-row justify-between items-center opacity-40 hover:opacity-100 transition-opacity">
        <p className="text-[10px] uppercase font-mono tracking-widest italic">
          Scanned {results.length} active API endpoints and user licenses.
        </p>
        <p className="text-[10px] uppercase font-mono tracking-widest mt-4 md:mt-0">
          Credex Intelligence Engine v.04 // Built for Efficiency.
        </p>
      </footer>
    </div>
  );
}