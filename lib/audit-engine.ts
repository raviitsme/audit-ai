import { ToolsListItem } from "@/types/audit";
import { pricingData } from "./pricing-data";
import findAltTool from "./helpers/findAltTool";
import checkCreditsEligibility from "./helpers/creditsEligibility";

export function RunAudit(tools: ToolsListItem[]) {
    const auditResults = tools.map((item) => {
        const currentPlan: any = pricingData[item.tool as keyof typeof pricingData]?.[item.plan as keyof (typeof pricingData)[keyof typeof pricingData]];

        if (!currentPlan) {
    return {
        tool: item.tool,
        currentPlan: item.plan,
        recommendedPlan: item.plan,
        currentMonthlyCost: null,
        optimizedMonthlyCost: null,
        monthlySavings: 0,
        annualSavings: 0,
        isAppropriate: false,
        alternativeTool: null,
        alternativePlan: null,
        alternativeMonthlyCost: null,
        alternativeSavings: 0,
        creditsEligible: false,
        reason: "Pricing data not found for this plan",
    };
}

        // Total number of seats from user
        const seats = Number(item.seats);

        // User use case
        const useCase = item.useCase.toLowerCase();

        // Current Monthly Cost
        const currentMonthlyCost = currentPlan.price !== null ? currentPlan.price * seats : null;

        // Valid seats
        const validSeats = seats >= currentPlan.minSeats && seats <= currentPlan.recommendedMaxSeats;

        // Valid Use cases
        const validUseCase = currentPlan.useCases.includes(item.useCase.toLowerCase());

        // Alternative Tool
        const bestAltTool = findAltTool({ currentTool: item.tool, seats, useCase, currentMonthlyCost })

        // Check credit eligibility
        const eligibilityResults = checkCreditsEligibility({ currentPlan, currentMonthlyCost });

        // All plans for current tools
        const toolPlans = pricingData[item.tool as keyof typeof pricingData];

        let bestPlan: any = null;
        let lowestCost = currentMonthlyCost ?? Infinity;

        Object.entries(toolPlans).forEach(([planName, planData]: any) => {
            // Skip current plan
            if (item.plan === planName) return;

            // Skip custom pricing
            if (planData.price === null) return;

            // Skip more expensive plan
            if (planData.price >= currentPlan.price) return;

            // Validate seats
            const seatsValid = seats >= planData.minSeats && seats <= planData.recommendedMaxSeats;

            // Validate use case
            const useCaseValid = planData.useCases.includes(useCase);

            // Ignore invalid plans
            if (!seatsValid || !useCaseValid) return;

            // Candidate cost
            const candidateCost = planData.price * seats;

            // Cheapest Valid Option
            if (candidateCost < lowestCost) {
                lowestCost = candidateCost;
                bestPlan = {
                    name: planName,
                    monthlyCost: candidateCost,
                }
            }
        });

        // Savings

        const monthlySavings = bestPlan && currentMonthlyCost ? currentMonthlyCost - bestPlan.monthlyCost : 0;

        const annualSavings = monthlySavings * 12;

        const alternativeSavings = bestAltTool && currentMonthlyCost !== null ? currentMonthlyCost - bestAltTool.monthlyCost : 0;

        // Final Decision
        const isAppropriate = !bestAltTool && !bestPlan && !eligibilityResults?.eligible;
        let reason = "";

        if (bestAltTool) {
            reason = `Comparable ${useCase} functionality may be available through ${bestAltTool.tool} ${bestAltTool.plan} at a lower monthly cost.`;

        } else if (bestPlan) {
            reason = `${bestPlan.name} supports the current seat count and use case at a lower monthly cost.`;

        } else if (eligibilityResults?.eligible) {
            reason = eligibilityResults.message;

        } else if (!validSeats) {
            reason = "Current plan minimum seat requirements exceed the stated usage needs.";

        } else if (!validUseCase) {
            reason = "Current plan may not match the selected primary use case";

        } else {
            reason = "Current plan usage looks financially appropriate for the stated team size and use case";
        }

        return {
            tool: item.tool,
            currentPlan: item.plan,
            recommendedPlan: bestPlan?.name || item.plan,
            currentMonthlyCost,
            optimizedMonthlyCost: bestPlan?.monthlyCost || currentMonthlyCost,
            monthlySavings,
            annualSavings,
            isAppropriate,
            alternativeTool: bestAltTool?.tool || null,
            alternativePlan: bestAltTool?.plan || null,
            alternativeMonthlyCost: bestAltTool?.monthlyCost || null,
            alternativeSavings,
            creditsEligible: eligibilityResults?.eligible || false,
            reason,
        }
    });

    return auditResults;
}