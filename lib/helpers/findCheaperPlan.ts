import { pricingData } from "../pricing-data";

export function findCheaperPlan(toolName: string, currentPlan: string, seats: number) {

    // Current Vendor (or ai tool)
    const vendor = pricingData[toolName as keyof typeof pricingData];
    if (!vendor) return null;

    // Details of current plan of that vendor
    const currentPlanData = vendor[currentPlan as keyof typeof vendor];

    // Details of current price of that vendor
    const currentPrice = typeof currentPlanData === 'object' ? (currentPlanData as any).price : currentPlanData;

    // Loop through all plans
    for (const [planName, planData] of Object.entries(vendor)) {
        const planPrice = typeof planData == 'object' ? (planData as any).price : planData;
        const minSeats = typeof planData === "object" ? (planData as any).minSeats || 1 : 1;

        // Skip current plan
        if (planName === currentPlan) continue;

        if (planPrice < currentPrice && seats >= minSeats) {
            return {
                planName,
                savings: (currentPrice - planPrice) * seats
            };
        }
    }
    return null;
}
