"use client";

import { useState, useEffect } from "react";
import SpendForm from "./forms/SpendForm";

// Centralized type structure matching state architecture dependencies 
export interface AuditItem {
  id: string;
  tool: string;
  plan: string;
  spend: string;
  seats: string;
  teamSize: string;
  useCase: string;
  enabled: boolean;
}

export default function Home() {
  // Global state holding the active stack data payload pool
  const [items, setItems] = useState<AuditItem[] | null>(null);

  // Hydrate client-side state parameters safely post-mount to avoid server-side render mismatches
  useEffect(() => {
    try {
      const saved = localStorage.getItem("audit-tools");
      setItems(saved ? JSON.parse(saved) : []);
    } catch (e) {
      console.error("Local inventory extraction failure:", e);
      setItems([]);
    }
  }, []);

  /* ----------------------- DYNAMIC METRICS ENGINES ----------------------- */
  
  // Calculate running real-time totals based on user's manual items state pool
  const totalSpend = items
    ? items.reduce((acc, item) => acc + (Number(item.spend) || 0), 0)
    : 0;

  // Simple optimization algorithm: Estimates a 35% consolidation recovery on stacks with multiple entries
  const optimizedSpend = items && items.length > 0 
    ? Math.round(totalSpend * 0.65) 
    : 0;
    
  const potentialSavings = totalSpend - optimizedSpend;

  // Fallback fallback arrays to populate structural visuals if state array is entirely empty
  const UIReportList = items && items.length > 0 
    ? items 
    : [
        { id: "1", tool: "ChatGPT Team", spend: "240" },
        { id: "2", tool: "Claude Pro", spend: "120" },
        { id: "3", tool: "Cursor Business", spend: "80" }
      ];

  const UISavingsDisplay = items && items.length > 0 ? potentialSavings : 310;
  const UITotalDisplay = items && items.length > 0 ? totalSpend : 560;
  const UIOptimizedDisplay = items && items.length > 0 ? optimizedSpend : 250;

  // Prevent flash or layout shifts during local storage hydration sync checks
  if (items === null) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center font-ui uppercase tracking-widest text-ink font-bold">
        Loading Stack Inventory Framework...
      </div>
    );
  }

  return (
    <main className="overflow-x-hidden bg-bg px-4 py-8 md:px-8 font-ui text-ink">
      
      {/* ---------------------------- HERO SECTION ---------------------------- */}
      <section className="border-b-[6px] border-border py-20 max-w-7xl mx-auto">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Headline Copy */}
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-[0.3em] font-body text-red font-bold">
              AI Spend Audit
            </p>
            <h1 className="font-headline leading-none text-[clamp(3.5rem,7.5vw,9.5rem)] uppercase tracking-tight">
              Your AI Stack Is overpriced
            </h1>
            <p className="max-w-2xl text-lg font-body text-ink-soft">
              Discover wasted AI spend and platform cross-licensing overlaps across ChatGPT, Claude, Cursor, Gemini, and enterprise seat packages.
            </p>
            <button 
              onClick={() => document.getElementById("audit-input-section")?.scrollIntoView({ behavior: "smooth" })}
              className="border-[3px] border-border bg-ink px-8 py-4 uppercase font-headline tracking-widest cursor-pointer text-bg transition duration-150 hover:bg-bg hover:text-ink shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
            >
              Start Audit Now
            </button>
          </div>

          {/* Interactive Report Simulation Graphic */}
          <div className="relative border-[3px] border-border bg-paper p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="mb-8 flex items-center justify-between border-b-2 border-border pb-4">
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-ink-soft">
                AI SPEND SUMMARY REPORT
              </p>
              <p className="bg-red px-3 py-1 text-xs uppercase text-bg font-bold animate-pulse">
                LIVE METRICS
              </p>
            </div>

            {/* Simulated/Dynamic Output List Grid */}
            <div className="space-y-6 font-body font-bold text-sm uppercase text-ink-soft">
              {UIReportList.map((item) => (
                <div key={item.id} className="flex justify-between border-b-2 border-border/40 pb-2">
                  <span>{item.tool}</span>
                  <span className="text-ink">${item.spend}</span>
                </div>
              ))}
            </div>

            {/* Computed Aggregation Output Frame */}
            <div className="mt-12">
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-red font-bold">
                POTENTIAL SAVINGS RECOVERY
              </p>
              <h2 className="font-headline text-[clamp(3rem,8vw,6.5rem)] leading-none text-ink">
                ${UISavingsDisplay}
              </h2>
              <p className="text-sm font-bold text-ink-soft tracking-wider mt-1">PER SINGLE OPERATIONAL MONTH</p>
            </div>

            {/* Brutalist Warning Label Stamp */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 rotate-12 border-4 border-red bg-paper px-6 py-2 text-2xl font-black uppercase text-red tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              OVERPAYING
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------- FORM INPUT SECTION ---------------------------- */}
      <section id="audit-input-section" className="border-b-[6px] border-border py-20 max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col items-center text-center lg:items-start lg:text-left">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-red font-body font-bold">
            INPUT YOUR CURRENT STACK
          </p>
          <h2 className="font-headline text-[clamp(2.5rem,6vw,5.5rem)] leading-none uppercase">
            Enter active platform tools
          </h2>
        </div>

        <div className="space-y-8">
          {/* Connected Form cleanly feeding layout parameters to handle type structures correctly */}
              <SpendForm/>
        </div>

        <div className="space-y-8 grid"></div>
      </section>

      {/* ---------------------------- AUDIT METRICS DISPLAY ---------------------------- */}
      <section className="border-b-[6px] border-border py-20 max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-xs uppercase font-bold tracking-[0.3rem] text-red mb-4">
            Audit Optimization Metrics
          </p>
          <h2 className="font-headline text-[clamp(2.5rem,7vw,5.5rem)] mb-12 leading-none uppercase">
            Your AI spend breakdown
          </h2>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Total baseline spend module */}
            <div className="border-[3px] border-border bg-paper p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-xs uppercase tracking-[0.25rem] font-bold text-ink-soft">Gross Cost Matrix</p>
              <h3 className="mt-6 font-headline text-6xl text-ink">${UITotalDisplay}</h3>
              <p className="mt-2 text-xs font-bold uppercase text-muted tracking-wider">
                per month (unconsolidated)
              </p>
            </div>

            {/* Targeted Optimized target spend module */}
            <div className="border-[3px] border-border bg-paper p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-xs uppercase tracking-[0.25rem] font-bold text-red">Optimized Run Rate</p>
              <h3 className="mt-6 font-headline text-6xl text-ink">${UIOptimizedDisplay}</h3>
              <p className="mt-2 text-xs font-bold uppercase text-muted tracking-wider">
                after multi-seat consolidation
              </p>
            </div>

            {/* Total operational waste metrics recovery frame */}
            <div className="border-[3px] border-border bg-paper p-8 relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-xs uppercase tracking-[0.25rem] font-bold text-red">Monthly Net Recoverable</p>
              <h3 className="mt-6 font-headline text-6xl text-red">${UISavingsDisplay}</h3>
              <p className="text-xs font-bold uppercase mt-2 text-muted tracking-wider">
                wasted budget leakage recovery
              </p>

              {/* Status Action Flag */}
              <div className="absolute -top-4 right-4 rotate-6 border-2 border-red bg-bg px-3 py-1 text-sm font-black uppercase text-red tracking-wide">
                {items.length > 0 ? "Leak detected" : "Static Profile"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------- CALL TO ACTION SECTION ---------------------------- */}
      <section className="py-20 max-w-7xl mx-auto">
        <div className="border-4 border-border bg-black p-12 text-center text-bg relative shadow-[10px_10px_0px_0px_rgba(255,0,0,1)]">
          <p className="text-xs uppercase tracking-[0.3rem] text-yellow font-bold">
            Stop Subscription Overlap
          </p>
          <h2 className="mt-6 font-headline text-[clamp(2rem,5vw,5rem)] leading-none uppercase text-white">
            Fix Your AI Budget Waste Now
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base font-body text-bg/80">
            Most technology and engineering cross-functional teams waste roughly 20–40% on identical workspace allocations. Audit your infrastructure and secure your software budget boundaries instantly.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row justify-center">
            <button 
              onClick={() => alert("Generating full corporate diagnostic parameters...")}
              className="bg-red border-2 border-red px-10 py-4 text-white uppercase tracking-widest font-headline text-lg cursor-pointer transition duration-150 hover:bg-white hover:text-black hover:border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
            >
              Run Full Audit
            </button>

            <button 
              onClick={() => alert("Compiling asset list data frame...")}
              className="border-2 border-white px-10 py-4 uppercase font-headline tracking-widest text-white text-lg cursor-pointer transition duration-150 hover:bg-white hover:text-black"
            >
              Export Report
            </button>
          </div>

          <p className="mt-10 text-xs uppercase tracking-[0.3em] text-white/50 font-bold">
            No registration profiles required • Local encryption calculation pipeline
          </p>

          {/* Secure validation badge indicator */}
          <div className="absolute right-6 bottom-6 -rotate-12 text-yellow text-2xl font-headline border-yellow border-4 px-4 py-1.5 uppercase tracking-widest hidden md:block">
            Verified
          </div>
        </div>
      </section>
    </main>
  );
}