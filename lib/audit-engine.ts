import type { ToolsListItem } from "@/types/audit";
import { pricingData } from "./pricing-data";
import { findCheaperPlan } from "./helpers/findCheaperPlan";
import { findAltTool } from "./helpers/findAltTool";

export type AuditResult = ToolsListItem & {
    expectedSpend: number;
    actualSpend: number;
    monthlyWaste: number;
    yearlyWaste: number;
    utilization: number;
    unusedSeats: number;
    severity: "LOW" | "MEDIUM" | "HIGH";
    recommendation: string;
    reasoning: string[];
    altSavings: number;
    planSavings: number;
    totalSavings: number;
    potentialSavings : number;
};

export function RunAudit(tools: ToolsListItem[]): AuditResult[] {
    return tools.map((tool) => {
        // Tool Values
        const seats = Number(tool.seats);
        const spend = Number(tool.spend);
        const teamSize = Number(tool.teamSize);

        // Tools and plans
        const toolData = pricingData[tool.tool as keyof typeof pricingData];

        const planData = toolData?.[tool.plan as keyof typeof toolData];

        // Plan Price
        const pricePerSeat =
            typeof planData === "object" ? (planData as any).price : planData || 0;

        // Unused Seats
        const unusedSeats = seats > teamSize ? seats - teamSize : 0;

        // Utilization
        const utilization = seats > 0 ? Math.round((teamSize / seats) * 100) : 0;

        // Monthly waste
        const monthlyWaste = unusedSeats > 0 ? (spend / seats) * unusedSeats : 0;

        // Yearly waste
        const yearlyWaste = monthlyWaste * 12;

        let potentialSavings = monthlyWaste;

        let severity: "LOW" | "MEDIUM" | "HIGH" = "LOW";

        if (utilization < 50) {
            severity = "HIGH";
        } else if (utilization < 80) {
            severity = "MEDIUM";
        }

        // Recommendations

        let recommendation = "Current plan usage looks healthy";

        const cheaperPlan = findCheaperPlan(tool.tool, tool.plan, seats);
        const altTool = findAltTool(tool.tool, tool.useCase, spend);

        if (utilization < 50) {
            recommendation = `Current seat utilization is significantly below expected operational efficiency.
                        Downgrading plans or reducing seats may help in reducing costs.`;
        } else if (unusedSeats > 0) {
            recommendation = `${unusedSeats} unused seat(s) detected! Consider reducing seat allocation to minimize monthly spend.`;
        } else if (altTool) {
            potentialSavings += altTool.savings;
            recommendation = `${altTool.tool} may provide similar ${tool.useCase} capability with approximately $${altTool.savings}/month lower spend.`;
        } else if (cheaperPlan) {
            potentialSavings += cheaperPlan.savings;
            recommendation = `${cheaperPlan.planName} may satisfy current usage requirements with approximately $${cheaperPlan.savings}/month lower spend.`;
        } 

        const planSavings = cheaperPlan ? cheaperPlan.savings : 0;

        const altSavings = altTool ? altTool.savings : 0;

        const totalSavings = monthlyWaste + planSavings + altSavings;

        // Reasoning
        const reasoning: string[] = [];

        reasoning.push(`Actual spend reported: $${spend}/month`);
        reasoning.push(`Expected spend (based on seats): $${pricePerSeat * seats}/month`);
        reasoning.push(`Plan cost per seat: $${pricePerSeat}/month`);

        reasoning.push(`Utilization rate: ${utilization}%`);

        if (utilization < 50) {
            reasoning.push(`Low utilization indicates overprovisioning`);
        }

        if (unusedSeats > 0) {
            reasoning.push(`Unused capacity detected: ${unusedSeats} seat(s) not utilized`);
        }

        if (cheaperPlan) {
            reasoning.push(
                `Better plan available: ${cheaperPlan.planName} could reduce cost by ~$${cheaperPlan.savings}/month`
            );
        }

        if (altTool) {
            reasoning.push(
                `Alternative tool option: ${altTool.tool} may reduce spend by ~$${altTool.savings}/month`
            );
        }

        return {
            ...tool,
            expectedSpend: pricePerSeat * seats,
            actualSpend: spend,
            monthlyWaste,
            yearlyWaste,
            utilization,
            unusedSeats,
            severity,
            recommendation,
            reasoning,
            planSavings,
            altSavings,
            totalSavings,
            potentialSavings,
        };
    });
}
