import { pricingData } from "../pricing-data";

export function findAltTool(currentTool: string, useCase: string, currentSpend: number) {
    const tools = pricingData;

    let altTool: null | {
        tool: string;
        savings: number;
    } = null;

    for (const [toolName, plans] of Object.entries(tools)) {
        // Skip same tool name 
        if (toolName === currentTool) continue;

        for (const [planName, planData] of Object.entries(plans)) {
            const data = planData as any;

            const price = data.price;
            const useCases: string[] = data.useCases || [];

            // skip if no match for use case
            if (!useCases.includes(useCase)) continue;

            // must be cheaper than current spend
            if (price < currentSpend) {
                const savings = currentSpend - price;

                if (!altTool || savings > altTool.savings) {
                    altTool = {
                        tool: toolName,
                        savings,
                    };
                }
            }
        }
    }
    return altTool;
}
