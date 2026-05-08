export const pricingData = {
  ChatGPT: {
    Plus: {
      price: 20,
      minSeats: 1,
      recommendedMaxSeats: 2,
      useCases: ["writing", "research", "mixed"],
      creditsEligible: false,
    },
    Team: {
      price: 30,
      minSeats: 2,
      recommendedMaxSeats: 50,
      useCases: ["coding", "writing", "research", "mixed"],
      creditsEligible: false,
    },
    Enterprise: {
      price: 60,
      minSeats: 50,
      recommendedMaxSeats: 9999,
      useCases: ["coding", "data", "research", "mixed"],
      creditsEligible: true,
    },
    "API Direct": {
      price: 50,
      minSeats: 1,
      recommendedMaxSeats: 9999,
      useCases: ["coding", "data"],
      creditsEligible: true,
    },
  },

  Claude: {
    Free: {
      price: 0,
      minSeats: 1,
      recommendedMaxSeats: 1,
      useCases: ["writing", "research", "mixed"],
      creditsEligible: false,
    },
    Pro: {
      price: 20,
      minSeats: 1,
      recommendedMaxSeats: 2,
      useCases: ["writing", "research", "mixed"],
      creditsEligible: false,
    },
    Max: {
      price: 100,
      minSeats: 1,
      recommendedMaxSeats: 20,
      useCases: ["writing", "research", "mixed"],
      creditsEligible: false,
    },
    Team: {
      price: 30,
      minSeats: 2,
      recommendedMaxSeats: 50,
      useCases: ["coding", "writing", "research", "mixed"],
      creditsEligible: false,
    },
    Enterprise: {
      price: 75,
      minSeats: 50,
      recommendedMaxSeats: 9999,
      useCases: ["coding", "data", "research", "mixed"],
      creditsEligible: true,
    },
    "API Direct": {
      price: 50,
      minSeats: 1,
      recommendedMaxSeats: 9999,
      useCases: ["coding", "data"],
      creditsEligible: true,
    },
  },

  Cursor: {
    Hobby: {
      price: 0,
      minSeats: 1,
      recommendedMaxSeats: 1,
      useCases: ["coding"],
      creditsEligible: false,
    },
    Pro: {
      price: 20,
      minSeats: 1,
      recommendedMaxSeats: 5,
      useCases: ["coding"],
      creditsEligible: false,
    },
    Business: {
      price: 40,
      minSeats: 5,
      recommendedMaxSeats: 100,
      useCases: ["coding"],
      creditsEligible: false,
    },
    Enterprise: {
      price: 60,
      minSeats: 50,
      recommendedMaxSeats: 9999,
      useCases: ["coding"],
      creditsEligible: true,
    },
  },

  "Github Copilot": {
    Individual: {
      price: 10,
      minSeats: 1,
      recommendedMaxSeats: 1,
      useCases: ["coding"],
      creditsEligible: false,
    },
    Business: {
      price: 19,
      minSeats: 2,
      recommendedMaxSeats: 500,
      useCases: ["coding"],
      creditsEligible: false,
    },
    Enterprise: {
      price: 39,
      minSeats: 50,
      recommendedMaxSeats: 9999,
      useCases: ["coding"],
      creditsEligible: true,
    },
  },

  "Anthropic API": {
    "API Direct": {
      price: 60,
      minSeats: 1,
      recommendedMaxSeats: 9999,
      useCases: ["coding", "data"],
      creditsEligible: true,
    },
  },

  "OpenAI API": {
    "API Direct": {
      price: 70,
      minSeats: 1,
      recommendedMaxSeats: 9999,
      useCases: ["coding", "data"],
      creditsEligible: true,
    },
  },

  Gemini: {
    Pro: {
      price: 20,
      minSeats: 1,
      recommendedMaxSeats: 5,
      useCases: ["writing", "research", "mixed"],
      creditsEligible: false,
    },
    Ultra: {
      price: 250,
      minSeats: 1,
      recommendedMaxSeats: 50,
      useCases: ["research", "data", "mixed"],
      creditsEligible: false,
    },
    API: {
      price: 50,
      minSeats: 1,
      recommendedMaxSeats: 9999,
      useCases: ["coding", "data"],
      creditsEligible: true,
    },
  },

  v0: {
    Free: {
      price: 0,
      minSeats: 1,
      recommendedMaxSeats: 1,
      useCases: ["coding", "design"],
      creditsEligible: false,
    },
    Premium: {
      price: 20,
      minSeats: 1,
      recommendedMaxSeats: 5,
      useCases: ["coding", "design"],
      creditsEligible: false,
    },
    Team: {
      price: 40,
      minSeats: 2,
      recommendedMaxSeats: 50,
      useCases: ["coding", "design", "mixed"],
      creditsEligible: false,
    },
  },
};