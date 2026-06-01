export interface AuditResult {
    type : string,
    severity : "info" | "warning" | "critical",
    title : string,
    explanation : string,
    recommendation? : string,
    estimatedSavings : number,
    toolName : string,
}