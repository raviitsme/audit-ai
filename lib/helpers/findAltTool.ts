import { pricingData } from "../pricing-data";

type Params = {
    currentTool : string,
    seats : number,
    useCase : string,
    currentMonthlyCost : number | null
}

export default function findAltTool({ currentTool, seats, useCase, currentMonthlyCost } : Params) {
    let bestAlt : any = null;

    let lowestAltCost = currentMonthlyCost ?? Infinity;
    
    Object.entries(pricingData).forEach(([toolName, toolPlans] : any) => {
        if(toolName === currentTool) return;

        Object.entries(toolPlans).forEach(([planName, planData] : any) => {
            if(planName.price === null) return;

            const seatsValid = seats >= planData.minSeats && seats <= planData.recommendedMaxSeats;

            // Use case validation
            const useCaseValid = planData.useCases.includes(useCase);

            // Ignore invalid plans
            if(!seatsValid || !useCaseValid) return;

            const candidateCost = planData.price * seats;
            
            if(candidateCost >= lowestAltCost) return;

            lowestAltCost = candidateCost;

            bestAlt = {
                tool : toolName,
                plan : planName,
                monthlyCost : candidateCost
            };
        });
    })
    return bestAlt;
}