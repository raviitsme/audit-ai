import { AddedToolItem } from "@/app/types/input";
import { AuditResult } from "@/app/types/audit";
import { aiToolsPricingData } from "@/app/data/pricingData";

export function checkPlanFit(
  tool: AddedToolItem,
): AuditResult | null {

  const toolPricing =
    aiToolsPricingData[
      tool.toolId as keyof typeof aiToolsPricingData
    ];

  if (!toolPricing) return null;

  const currentPlan =
    toolPricing[
      tool.planName.toLowerCase() as keyof typeof toolPricing
    ];

  if (!currentPlan) return null;

  if (currentPlan.isAPI) return null;

  // Oversized plan
  if (tool.teamSize < currentPlan.minSeats) {
    return {
      type: "PLAN_FIT",
      severity: "warning",

      title: "Current Plan Appears Oversized",

      explanation:
        `${tool.planName} is generally intended for teams of at least ${currentPlan.minSeats} users, but your team size is ${tool.teamSize}.`,

      recommendation:
        "Consider evaluating a lower-tier plan.",
        estimatedSavings : 100,
    toolName : tool.toolName,
    };
  }

  // Undersized plan
  if (tool.teamSize > currentPlan.maxSeats) {
    return {
      type: "PLAN_FIT",
      severity: "info",

      title: "Current Plan May Be Too Small",

      explanation:
        `${tool.planName} is generally intended for up to ${currentPlan.maxSeats} users, but your team size is ${tool.teamSize}.`,

      recommendation:
        "Consider evaluating a higher-tier plan.",
        estimatedSavings : 100,
        toolName : tool.toolName
    };
  }

  return null;
}