import { PlanPriceDetail } from "../types/input";

export const aiToolsPricingData: Record<
    string,
    Record<string, PlanPriceDetail>
> = {
    cursor: {
        hobby: {
            costPerSeat: 0,
            isAPI: false,
        },
        pro: {
            costPerSeat: 20,
            isAPI: false,
        },
        business: {
            costPerSeat: 40,
            isAPI: false,
        },
        enterprise: {
            costPerSeat: 100,
            isAPI: false,
        },
    },
    "github-copilot": {
        individual: {
            costPerSeat: 10,
            isAPI: false,
        },
        business: {
            costPerSeat: 19,
            isAPI: false,
        },
        enterprise: {
            costPerSeat: 39,
            isAPI: false,
        },
    },
    claude: {
        free: { costPerSeat: 0, isAPI: false },
        pro: { costPerSeat: 20, isAPI: false },
        max: { costPerSeat: 40, isAPI: false },
        team: { costPerSeat: 30, isAPI: false },
        enterprise: { costPerSeat: 75, isAPI: false },
        "api direct": { costPerSeat: "-", isAPI: true },
    },
    chatgpt: {
        plus: { costPerSeat: 20, isAPI: false },
        team: { costPerSeat: 30, isAPI: false },
        enterprise: { costPerSeat: 60, isAPI: false },
        "api direct": { costPerSeat: "-", isAPI: true },
    },
    "anthropic-api": {
        "consumption / usage-based plan": { costPerSeat: "-", isAPI: true },
    },
    "openai-api": {
        "consumption / usage-based plan": { costPerSeat: "-", isAPI: true },
    },
    gemini: {
        pro: { costPerSeat: 20, isAPI: false },
        ultra: { costPerSeat: 30, isAPI: false },
        api: { costPerSeat: "-", isAPI: true },
    },
    v0: {
        free: { costPerSeat: 0, isAPI: false },
        premium: { costPerSeat: 20, isAPI: false },
        team: { costPerSeat: 30, isAPI: false },
        enterprise: { costPerSeat: 50, isAPI: false },
    },
};
