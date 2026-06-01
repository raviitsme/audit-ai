import { PlanPriceDetail } from "../types/input";

export const aiToolsPricingData: Record<
    string,
    Record<string, PlanPriceDetail>
> = {
    cursor: {
        hobby: {
            costPerSeat: 0,
            isAPI: false,
            minSeats: 1,
            maxSeats: 1,
            tier: "individual",
        },

        pro: {
            costPerSeat: 20,
            isAPI: false,
            minSeats: 1,
            maxSeats: 1,
            tier: "individual",
        },

        business: {
            costPerSeat: 40,
            isAPI: false,
            minSeats: 1,
            maxSeats: 50,
            tier: "team",
        },

        enterprise: {
            costPerSeat: 100,
            isAPI: false,
            minSeats: 10,
            maxSeats: Infinity,
            tier: "enterprise",
        },
    },
    "github-copilot": {
        individual: {
            costPerSeat: 10,
            isAPI: false,
            minSeats: 1,
            maxSeats: 1,
            tier: "individual",
        },

        business: {
            costPerSeat: 19,
            isAPI: false,
            minSeats: 1,
            maxSeats: 100,
            tier: "team",
        },

        enterprise: {
            costPerSeat: 39,
            isAPI: false,
            minSeats: 5,
            maxSeats: Infinity,
            tier: "enterprise",
        },
    },
    claude: {
        free: {
            costPerSeat: 0,
            isAPI: false,
            minSeats: 1,
            maxSeats: 1,
            tier: "individual",
        },

        pro: {
            costPerSeat: 20,
            isAPI: false,
            minSeats: 1,
            maxSeats: 1,
            tier: "individual",
        },

        max: {
            costPerSeat: 40,
            isAPI: false,
            minSeats: 1,
            maxSeats: 1,
            tier: "individual",
        },

        team: {
            costPerSeat: 30,
            isAPI: false,
            minSeats: 5,
            maxSeats: 100,
            tier: "team",
        },

        enterprise: {
            costPerSeat: 75,
            isAPI: false,
            minSeats: 20,
            maxSeats: Infinity,
            tier: "enterprise",
        },
    },
    chatgpt: {
        plus: {
            costPerSeat: 20,
            isAPI: false,
            minSeats: 1,
            maxSeats: 1,
            tier: "individual",
        },

        team: {
            costPerSeat: 30,
            isAPI: false,
            minSeats: 2,
            maxSeats: 100,
            tier: "team",
        },

        enterprise: {
            costPerSeat: 60,
            isAPI: false,
            minSeats: 20,
            maxSeats: Infinity,
            tier: "enterprise",
        },
    },
    "anthropic-api": {
        "consumption / usage-based plan": {
            costPerSeat: "-",
            isAPI: true,
            minSeats: 0,
            maxSeats: Infinity,
            tier: "individual",
        },
    },
    "openai-api": {
        "consumption / usage-based plan": {
            costPerSeat: "-",
            isAPI: true,
            minSeats: 0,
            maxSeats: Infinity,
            tier: "individual",
        },
    },
    gemini: {
        pro: {
            costPerSeat: 20,
            isAPI: false,
            minSeats: 1,
            maxSeats: 1,
            tier: "individual",
        },

        ultra: {
            costPerSeat: 30,
            isAPI: false,
            minSeats: 1,
            maxSeats: 1,
            tier: "individual",
        },

        api: {
            costPerSeat: "-",
            isAPI: true,
            minSeats: 0,
            maxSeats: Infinity,
            tier: "individual",
        },
    },
    "gemini-api": {
        "consumption / usage-based plan": {
            costPerSeat: "-",
            isAPI: true,
            minSeats: 0,
            maxSeats: Infinity,
            tier: "individual",
        },
    },
    v0: {
        free: {
            costPerSeat: 0,
            isAPI: false,
            minSeats: 1,
            maxSeats: 1,
            tier: "individual",
        },

        premium: {
            costPerSeat: 20,
            isAPI: false,
            minSeats: 1,
            maxSeats: 1,
            tier: "individual",
        },

        team: {
            costPerSeat: 30,
            isAPI: false,
            minSeats: 1,
            maxSeats: 100,
            tier: "team",
        },

        enterprise: {
            costPerSeat: 50,
            isAPI: false,
            minSeats: 10,
            maxSeats: Infinity,
            tier: "enterprise",
        },
    },
};
