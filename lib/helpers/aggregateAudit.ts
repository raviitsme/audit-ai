import { AuditResult } from "@/types/audit";

export function aggregateAudit(results: AuditResult[]) {
    let totalMonthlySavings = 0;
    let totalAnnualSavings = 0;

    let optimizedCount = 0;
    let wastefulCount = 0;

    let ranked = [...results].map((item) => {
        const savings = (item.monthlySavings || 0) + (item.alternativeSavings || 0);

        totalMonthlySavings += savings;
        totalAnnualSavings += savings * 12;

        if (savings > 0) optimizedCount++;
        else wastefulCount++;

        return {
            tool: item.tool,
            savings,
        };
    });

    // sort highest waste first
    ranked.sort((a, b) => b.savings - a.savings);

    const topWastedTool = ranked[0]?.tool || null;

    const credexCTA = totalMonthlySavings > 500;

    return {
        totalMonthlySavings,
        totalAnnualSavings,
        topWastedTool,
        optimizedTools: optimizedCount,
        wastefulTools: wastefulCount,
        credexCTA,
        ranked,
    };
}