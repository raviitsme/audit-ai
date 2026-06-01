import { AddedToolItem } from "@/app/types/input";
import { AuditResult } from "@/app/types/audit";
import { aiToolsPricingData } from "@/app/data/pricingData";

export function checkSameVendorSavings(tool: AddedToolItem): AuditResult | null {
    const toolPricing = aiToolsPricingData[tool.toolId as keyof typeof aiToolsPricingData];
    if (!toolPricing) return null;

    const currentPlan = toolPricing[tool.planName.toLowerCase() as keyof typeof toolPricing];

    if (!currentPlan) return null;

    if (currentPlan.isAPI) return null;

    const eligiblePlans = Object.entries(toolPricing).filter(([_, details]) => {
        if (details.isAPI) return false;

        return (
            tool.teamSize >= details.minSeats && tool.teamSize <= details.maxSeats
        );
    });

    if (eligiblePlans.length === 0) return null;

    const sortedPlans = eligiblePlans.sort((a, b) => Number(a[1].costPerSeat) - Number(b[1].costPerSeat));
    const cheapestPlan = sortedPlans[0];

    if (cheapestPlan[0] === tool.planName.toLowerCase()) {
        return null;
    }

    const currentMonthlyCost = Number(tool.monthlySpend);
    const cheaperMonthlyCost = Number(cheapestPlan[1].costPerSeat) * Number(tool.noOfSeats);

    const savings = currentMonthlyCost - cheaperMonthlyCost;

    if (savings <= 0) return null;

    return {
        type: "SAME_VENDOR_SAVINGS",

        severity: "warning",

        title: "Cheaper Plan Available",

        explanation:
            `${tool.toolName} has a lower-cost plan that still supports your current team size.`,

        recommendation:
            `Consider switching from ${tool.planName} to ${cheapestPlan[0]}.`,

        estimatedSavings: savings,

        toolName: tool.toolName,
    };
}