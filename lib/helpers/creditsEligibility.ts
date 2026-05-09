type Params = {
    currentPlan : any;
    currentMonthlyCost : number | null;
}

export default function checkCreditsEligibility({ currentPlan, currentMonthlyCost } : Params) {
    if(!currentPlan) return null;

    if(!currentPlan.creditsEligible) return null;

    if(!currentMonthlyCost) return null;

    if(currentMonthlyCost < 100) return null;

    return {
        eligible : true,
        message : "Usage-based billing or platform credits may reduce fixed subscription costs for this workload."
    }
}
