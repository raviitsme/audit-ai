"use client";

import { useEffect, useState } from "react";
import { RunAudit } from "@/lib/audit-engine";

export default function AuditPage() {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("audit-tools");

    if (!saved) return;

    const tools = JSON.parse(saved);
    const audit = RunAudit(tools);

    setResults(audit);
  }, []);

  const totalActual = results.reduce((acc, r) => acc + r.actualSpend, 0);

  const totalOptimized = results.reduce((acc, r) => acc + r.expectedSpend, 0);

  const totalSavings = results.reduce((acc, r) => acc + r.potentialSavings, 0);

  const optimizedSpend = Math.max(totalActual - totalSavings, 0);

  const insightTier =
    totalSavings > 500
      ? "HIGH_IMPACT"
      : totalSavings > 100
        ? "OPTIMIZABLE"
        : "WELL_OPTIMIZED";
  return (
    <main className="p-10 space-y-12">
      {/* Hero */}

      <section>
        <h1 className="text-5xl font-black uppercase">Audit Results</h1>
        <div className="text-sm uppercase mt-3 tracking-widest">
          Tools analyzed: {results.length}
        </div>
        <p className="mt-2 text-sm uppercase tracking-[0.2em]">
          AI Spend Breakdown Dashboard
        </p>
      </section>

      {/* Summary */}
      <section className="grid gap-6 md:grid-cols-3">
        {/* CURRENT SPEND */}
        <div className="border-2 border-black p-6">
          <p className="text-xs uppercase tracking-[0.2em]">Current Spend</p>

          <h2 className="mt-4 text-4xl font-black">
            ${totalActual.toFixed(0)}
          </h2>

          <p className="text-sm mt-2">per month</p>
        </div>

        {/* OPTIMIZED */}
        <div className="border-2 border-black p-6">
          <p className="text-xs uppercase tracking-[0.2em]">Optimized Spend</p>

          <h2 className="mt-4 text-4xl font-black">
            ${optimizedSpend.toFixed(0)}
          </h2>

          <p className="text-sm mt-2">after optimization</p>
        </div>

        {/* SAVINGS */}
        <div className="border-2 border-red p-6 relative">
          <p className="text-xs uppercase tracking-[0.2em] text-red">
            Monthly Savings
          </p>

          <h2 className="mt-4 text-5xl font-black text-red">
            ${totalSavings.toFixed(0)}
          </h2>

          <p className="text-sm mt-2">wasted spend recovered</p>

          {/* STAMP */}
          {totalSavings > 500 && (
            <div className="absolute -top-4 right-4 rotate-12 border-2 border-red px-3 py-1 text-xs font-black uppercase text-red">
              High Impact
            </div>
          )}
        </div>
      </section>
      {insightTier === "HIGH_IMPACT" && (
        <section className="border-2 border-red p-6">
          <p className="text-red font-bold uppercase">High Savings Detected</p>

          <p className="mt-2 text-sm">
            You can potentially recover over ${totalSavings.toFixed(0)}/month.
          </p>

          <button className="mt-4 bg-red text-white px-6 py-3 uppercase">
            Unlock Full Optimization Report
          </button>
        </section>
      )}

      {insightTier === "WELL_OPTIMIZED" && (
        <section className="border-2 border-green-600 p-6">
          <p className="font-bold uppercase text-green-600">
            Your stack is already optimized
          </p>

          <p className="mt-2 text-sm">
            We’ll notify you when new optimization opportunities appear.
          </p>

          <button className="mt-4 border px-6 py-3 uppercase">
            Enable Monitoring Alerts
          </button>
        </section>
      )}

      {/* Tool breakdown list */}
      <section>
        <h2 className="text-2xl font-bold uppercase">Per Tool Breakdown</h2>

        <div className="mt-6 space-y-4">
          {results.map((item, index) => (
            <div
              key={`${item.tool}-${index}`}
              className="border-2 border-black p-6 space-y-5 bg-white"
            >
              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-black uppercase text-lg">{item.tool}</p>
                  <p className="text-xs uppercase tracking-widest text-gray-600">
                    {item.plan}
                  </p>
                </div>

                <span
                  className={`text-xs font-bold px-3 py-1 border uppercase ${
                    item.severity === "HIGH"
                      ? "border-red text-red"
                      : item.severity === "MEDIUM"
                        ? "border-yellow-600 text-yellow-600"
                        : "border-green-600 text-green-600"
                  }`}
                >
                  {item.severity}
                </span>
              </div>

              {/* Insights of amount */}
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="border p-3">
                  <p className="text-xs uppercase text-gray-500">Current</p>
                  <p className="font-bold">${item.actualSpend}</p>
                </div>

                <div className="border p-3">
                  <p className="text-xs uppercase text-gray-500">Optimized</p>
                  <p className="font-bold">${item.expectedSpend}</p>
                </div>

                <div className="border p-3">
                  <p className="text-xs uppercase text-gray-500">Waste</p>
                  <p className="font-bold text-red">${item.monthlyWaste}</p>
                </div>
              </div>

              {/* Usage bar */}
              <div>
                <div className="flex justify-between text-xs uppercase mb-1">
                  <span>Utilization</span>
                  <span>{item.utilization}%</span>
                </div>

                <div className="w-full h-2 bg-gray-200">
                  <div
                    className={`h-2 ${
                      item.utilization < 50
                        ? "bg-red"
                        : item.utilization < 80
                          ? "bg-yellow-500"
                          : "bg-green-600"
                    }`}
                    style={{ width: `${item.utilization}%` }}
                  />
                </div>
              </div>

              {/* Recommendation */}
              <div className="border-l-4 border-black pl-4">
                <p className="text-sm font-medium leading-snug">
                  {item.recommendation}
                </p>
              </div>

              {/* Reasoning */}
              <details className="text-sm">
                <summary className="cursor-pointer uppercase text-xs tracking-widest text-gray-600">
                  View Audit Reasoning
                </summary>

                <div className="mt-3 space-y-1 text-xs text-gray-700">
                  {item.reasoning.map((r: string, i: number) => (
                    <p key={i}>• {r}</p>
                  ))}
                </div>
              </details>

              {/* Action */}
              {item.unusedSeats > 0 && (
                <div className="border border-red p-3 bg-red/5">
                  <p className="text-xs uppercase text-red font-bold">
                    Action Required
                  </p>

                  <p className="text-sm">
                    {item.unusedSeats} unused seat(s) detected → reduce seats to
                    cut waste.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
