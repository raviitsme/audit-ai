export type ToolsListItem = {
  id: string;
  tool: string;
  plan: string;
  spend: string;
  seats: string;
  teamSize: string;
  useCase: string;
}

export type AuditResult = {
    tool: string;
    currentPlan: string;
    recommendedPlan: string;
    currentMonthlyCost: number | null;
    optimizedMonthlyCost: number | null;
    monthlySavings: number;
    annualSavings: number;
    isAppropriate: boolean;
    alternativeTool: string | null;
    alternativePlan: string | null;
    alternativeMonthlyCost: number | null;
    alternativeSavings: number;
    creditsEligible: boolean;
    reason: string;
};