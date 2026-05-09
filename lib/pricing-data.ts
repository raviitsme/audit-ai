export const pricingData = {

  // ─── ChatGPT / OpenAI ──────────────────────────────────────────────────────
  // Source: openai.com/chatgpt/pricing  |  fritz.ai/chatgpt-pricing/
  // Source: cloudzero.com/blog/how-much-does-chatgpt-cost/
  // Note: "Business" plan (formerly "Team") was cut to $20/seat/month (annual)
  //       on April 2, 2026. Enterprise is custom; $60/seat is an industry estimate.
  ChatGPT: {
    Free: {
      price: 0,
      billingNote: "Free forever; 10 messages per 5 hours, ads in the US",
      minSeats: 1,
      recommendedMaxSeats: 1,
      useCases: ["writing", "research", "mixed"],
      creditsEligible: false,
      source: "openai.com/chatgpt/pricing",
    },
    Plus: {
      price: 20,
      billingNote: "$20/month; no annual discount. Access to GPT-5.5, Deep Research (10/mo), Sora, Codex, Agent Mode.",
      minSeats: 1,
      recommendedMaxSeats: 2,
      useCases: ["writing", "research", "mixed"],
      creditsEligible: false,
      source: "openai.com/chatgpt/pricing | cloudzero.com/blog/how-much-does-chatgpt-cost",
    },
    Pro: {
      price: 100,
      billingNote: "$100/month (launched April 9, 2026). 5x Plus limits. GPT-5.5 Pro access. $200/mo tier also exists for 20x limits.",
      minSeats: 1,
      recommendedMaxSeats: 2,
      useCases: ["writing", "research", "data", "mixed"],
      creditsEligible: false,
      source: "cloudzero.com/blog/how-much-does-chatgpt-cost | fritz.ai/chatgpt-pricing",
    },
    Business: {
      // Formerly "Team". Renamed and repriced on April 2, 2026.
      price: 20 ,
      billingNote: "$20/seat/month (annual). $25/seat if billed monthly. Min 2 seats. Includes SSO, SCIM, SOC 2 Type II, admin controls.",
      minSeats: 2,
      recommendedMaxSeats: 149,
      useCases: ["coding", "writing", "research", "mixed"],
      creditsEligible: false,
      source: "fritz.ai/chatgpt-pricing | openai.com/chatgpt/pricing",
    },
    Enterprise: {
      // Custom contract; ~$60/seat is an industry estimate (150-seat minimum)
      price: 60,
      billingNote: "Custom pricing; ~$60/seat/month estimated. 150-seat minimum, annual commitment. ~$108K/year floor. Includes multi-region data residency, fine-grained RBAC, 24/7 SLA support.",
      minSeats: 150,
      recommendedMaxSeats: 9999,
      useCases: ["coding", "data", "research", "mixed"],
      creditsEligible: true,
      source: "inference.net/content/chatgpt-enterprise-pricing | fritz.ai/chatgpt-pricing",
    },
    "API Direct": {
      // Pay-per-token; $50/month is a rough usage estimate for a moderate workload
      price: 50,
      billingNote: "Pay-per-token. No seat price. GPT-5.4: $2.50/$15.00 per MTok. GPT-5.5: $5/$30 per MTok. $50 is an estimated monthly spend for reference.",
      minSeats: 1,
      recommendedMaxSeats: 9999,
      useCases: ["coding", "data"],
      creditsEligible: true,
      source: "openai.com/api/pricing | devtk.ai/en/blog/ai-api-pricing-comparison-2026",
    },
  },

  // ─── Claude / Anthropic ────────────────────────────────────────────────────
  // Source: claude.com/pricing  |  screenapp.io/blog/claude-ai-pricing
  // Source: ssdnodes.com/blog/claude-code-pricing-in-2026
  // Note: Max tier added (was missing entirely). Team corrected ($20 annual / $25 monthly).
  Claude: {
    Free: {
      price: 0,
      billingNote: "Free forever. Sonnet 4.6 access with daily usage limits. No credit card required.",
      minSeats: 1,
      recommendedMaxSeats: 1,
      useCases: ["writing", "research", "mixed"],
      creditsEligible: false,
      source: "claude.com/pricing",
    },
    Pro: {
      price: 20,
      billingNote: "$20/month ($17/month billed annually). ~5x Free capacity. Includes Claude Code, file creation/execution, unlimited projects, Google Workspace integration.",
      minSeats: 1,
      recommendedMaxSeats: 2,
      useCases: ["writing", "research", "coding", "mixed"],
      creditsEligible: false,
      source: "claude.com/pricing | screenapp.io/blog/claude-ai-pricing",
    },
    "Max 5x": {
      price: 100,
      billingNote: "$100/month. 5x Pro capacity (25x Free). Maximum model priority. Full Claude Code access. Priority access to new features.",
      minSeats: 1,
      recommendedMaxSeats: 20,
      useCases: ["writing", "research", "coding", "data", "mixed"],
      creditsEligible: false,
      source: "claude.com/pricing | ssdnodes.com/blog/claude-code-pricing-in-2026",
    },
    "Max 20x": {
      price: 200,
      billingNote: "$200/month. 20x Pro capacity (100x Free). Zero-latency priority. Full Claude Code access.",
      minSeats: 1,
      recommendedMaxSeats: 10,
      useCases: ["writing", "research", "coding", "data", "mixed"],
      creditsEligible: false,
      source: "claude.com/pricing | ssdnodes.com/blog/claude-code-pricing-in-2026",
    },
    "Team Standard": {
      price: 25,
      billingNote: "$25/seat/month ($20 annual). Min 5 seats. Includes 200K context, MS365 & Slack integrations, SSO, admin controls. No Claude Code.",
      minSeats: 5,
      recommendedMaxSeats: 50,
      useCases: ["writing", "research", "mixed"],
      creditsEligible: false,
      source: "claude.com/pricing | ssdnodes.com/blog/claude-code-pricing-in-2026",
    },
    "Team Premium": {
      price: 125,
      billingNote: "$125/seat/month ($100 annual). Min 5 seats. Same as Standard plus Claude Code + Cowork + 5x more usage. Mix-and-match seat types allowed.",
      minSeats: 5,
      recommendedMaxSeats: 50,
      useCases: ["coding", "writing", "research", "mixed"],
      creditsEligible: false,
      source: "claude.com/pricing | ssdnodes.com/blog/claude-code-pricing-in-2026",
    },
    Enterprise: {
      // Custom pricing; no published rate
      price: null,
      billingNote: "Custom pricing (contact sales). Includes everything in Team + 500K context window, HIPAA readiness, SCIM, dedicated support, custom data retention. Self-serve Enterprise also available.",
      minSeats: 5,
      recommendedMaxSeats: 9999,
      useCases: ["coding", "data", "research", "mixed"],
      creditsEligible: true,
      source: "claude.com/pricing | vantagepoint.io/blog/sf/anthropic/enterprise-ai-tiers-explained",
    },
    "API Direct": {
      // Pay-per-token; $50/month is an estimated moderate workload reference
      price: 50,
      billingNote: "Pay-per-token. No seat price. Haiku 4.5: $1/$5. Sonnet 4.6: $3/$15. Opus 4.6: $5/$25 per MTok. $50 is an estimated monthly spend for reference.",
      minSeats: 1,
      recommendedMaxSeats: 9999,
      useCases: ["coding", "data"],
      creditsEligible: true,
      source: "platform.claude.com/docs/en/about-claude/pricing | finout.io/blog/anthropic-api-pricing",
    },
  },

  // ─── Cursor ────────────────────────────────────────────────────────────────
  // Source: cursor.com/pricing  |  dev.to/rahulxsingh/cursor-pricing-in-2026
  // Source: nocode.mba/articles/cursor-pricing
  // Note: Cursor moved to a credit-based billing model on June 16, 2025.
  //       Old "Business" tier at $40 is now "Teams". New Pro+/Ultra tiers added.
  Cursor: {
    Hobby: {
      price: 0,
      billingNote: "Free forever. Limited Agent requests and Tab completions. No credit card required.",
      minSeats: 1,
      recommendedMaxSeats: 1,
      useCases: ["coding"],
      creditsEligible: false,
      source: "cursor.com/pricing | nocode.mba/articles/cursor-pricing",
    },
    Pro: {
      price: 20,
      billingNote: "$20/month ($16/month annual). Includes $20 monthly credit pool, unlimited Tab completions, frontier model access, MCPs, cloud agents. Most popular tier.",
      minSeats: 1,
      recommendedMaxSeats: 5,
      useCases: ["coding"],
      creditsEligible: false,
      source: "cursor.com/pricing | nocode.mba/articles/cursor-pricing",
    },
    "Pro+": {
      price: 60,
      billingNote: "$60/month. Everything in Pro plus 3x usage credits ($60 credit pool). Recommended for developers regularly hitting Pro limits.",
      minSeats: 1,
      recommendedMaxSeats: 5,
      useCases: ["coding"],
      creditsEligible: false,
      source: "cursor.com/pricing | flexprice.io/blog/cursor-pricing-guide",
    },
    Ultra: {
      price: 200,
      billingNote: "$200/month. Everything in Pro plus 20x usage credits. Priority access to new features. For the heaviest users.",
      minSeats: 1,
      recommendedMaxSeats: 5,
      useCases: ["coding"],
      creditsEligible: false,
      source: "cursor.com/pricing | flexprice.io/blog/cursor-pricing-guide",
    },
    Teams: {
      price: 40,
      billingNote: "$40/user/month. Pro-equivalent AI access plus admin controls, centralized billing, shared team rules. Annual discount available (~$32/user/month).",
      minSeats: 3,
      recommendedMaxSeats: 100,
      useCases: ["coding"],
      creditsEligible: false,
      source: "cursor.com/pricing | dev.to/rahulxsingh/cursor-pricing-in-2026",
    },
    Enterprise: {
      price: null,
      billingNote: "Custom pricing. Everything in Teams plus compliance, audit logs, SSO, dedicated support.",
      minSeats: 50,
      recommendedMaxSeats: 9999,
      useCases: ["coding"],
      creditsEligible: true,
      source: "cursor.com/pricing",
    },
  },

  // ─── GitHub Copilot ────────────────────────────────────────────────────────
  // Source: github.com/features/copilot/plans  |  docs.github.com/en/copilot
  // Source: github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing
  // Note: "Individual" plan is now called "Pro". Pro+ added at $39/month.
  //       From June 1, 2026, all plans move to usage-based (AI Credits) billing.
  //       Base prices are UNCHANGED. Business $19, Enterprise $39.
  "Github Copilot": {
    Free: {
      price: 0,
      billingNote: "Limited functionality for individual developers. Limited completions and chat interactions per month.",
      minSeats: 1,
      recommendedMaxSeats: 1,
      useCases: ["coding"],
      creditsEligible: false,
      source: "github.com/features/copilot/plans",
    },
    Pro: {
      // Was "Individual" in the original file — now the official name is "Pro"
      price: 10,
      billingNote: "$10/month. Unlimited completions, access to premium models, cloud agent, monthly AI Credits. Moving to usage-based billing June 1, 2026.",
      minSeats: 1,
      recommendedMaxSeats: 1,
      useCases: ["coding"],
      creditsEligible: false,
      source: "github.com/features/copilot/plans | docs.github.com/en/copilot/concepts/billing",
    },
    "Pro+": {
      price: 39,
      billingNote: "$39/month ($39 in monthly AI Credits). Larger premium request allowance. Full access to all available models including Claude Opus 4.6 and o3.",
      minSeats: 1,
      recommendedMaxSeats: 1,
      useCases: ["coding"],
      creditsEligible: false,
      source: "github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing",
    },
    Business: {
      price: 19,
      billingNote: "$19/user/month ($19 in monthly AI Credits per seat). Organization-wide policy controls, audit logs, IP indemnity, SAML SSO. Pooled credits from June 2026.",
      minSeats: 2,
      recommendedMaxSeats: 499,
      useCases: ["coding"],
      creditsEligible: false,
      source: "docs.github.com/en/copilot/concepts/billing/organizations-and-enterprises",
    },
    Enterprise: {
      price: 39,
      billingNote: "$39/user/month ($39 in monthly AI Credits). Requires GitHub Enterprise Cloud ($21/user/month extra = ~$60 total). Adds knowledge bases, GitHub.com Chat, custom fine-tuned models, audit logs.",
      minSeats: 50,
      recommendedMaxSeats: 9999,
      useCases: ["coding"],
      creditsEligible: true,
      source: "docs.github.com/en/copilot/concepts/billing/organizations-and-enterprises | pecollective.com/tools/github-copilot-pricing",
    },
  },

  // ─── Anthropic API (Direct) ────────────────────────────────────────────────
  // Source: platform.claude.com/docs/en/about-claude/pricing
  // Source: finout.io/blog/anthropic-api-pricing
  // Note: Pure pay-per-token; no fixed seat price. $60 reference was wrong.
  //       Estimated at $50/month for a moderate developer workload.
  "Anthropic API": {
    "API Direct": {
      price: 50,
      billingNote: "Pay-per-token. No seat or subscription price. Haiku 4.5: $1/$5, Sonnet 4.6: $3/$15, Opus 4.6: $5/$25 per million input/output tokens. $50 is an estimated monthly spend for reference only.",
      minSeats: 1,
      recommendedMaxSeats: 9999,
      useCases: ["coding", "data"],
      creditsEligible: true,
      source: "platform.claude.com/docs/en/about-claude/pricing | finout.io/blog/anthropic-api-pricing",
    },
  },

  // ─── OpenAI API (Direct) ───────────────────────────────────────────────────
  // Source: openai.com/api/pricing  |  devtk.ai/en/blog/ai-api-pricing-comparison-2026
  // Note: Pure pay-per-token. $70 was inaccurate. Estimated at $50–$60/month
  //       for moderate use with GPT-5.4 ($2.50/$15 per MTok).
  "OpenAI API": {
    "API Direct": {
      price: 55,
      billingNote: "Pay-per-token. No seat or subscription price. GPT-5.4: $2.50/$15.00, GPT-5.5: $5/$30 per MTok. $55 is an estimated monthly spend for reference only.",
      minSeats: 1,
      recommendedMaxSeats: 9999,
      useCases: ["coding", "data"],
      creditsEligible: true,
      source: "openai.com/api/pricing | devtk.ai/en/blog/ai-api-pricing-comparison-2026",
    },
  },

  // ─── Gemini / Google AI ────────────────────────────────────────────────────
  // Source: finout.io/blog/gemini-pricing-in-2026
  // Source: 9to5google.com/2026/04/11/google-ai-pro-ultra-features
  // Source: 9to5google.com/2026/05/05/google-ai-ultra-lite-gemini-usage-limits
  // Note: Google AI Pro = $19.99 (was "Gemini Pro" at $20 — close but rebranded).
  //       Ultra = $249.99/month (was $250 — essentially correct).
  //       A new "Ultra Lite" mid-tier is reportedly in development (codename "Neon").
  Gemini: {
    Free: {
      price: 0,
      billingNote: "Free forever. Gemini 2.5 Flash access, 100 monthly AI credits, 15 GB storage.",
      minSeats: 1,
      recommendedMaxSeats: 1,
      useCases: ["writing", "research", "mixed"],
      creditsEligible: false,
      source: "finout.io/blog/gemini-pricing-in-2026",
    },
    "Google AI Plus": {
      price: 7.99,
      billingNote: "$7.99/month. Launched in the US on January 27, 2026. 50% off first two months for new subscribers. Mid-tier between Free and Pro.",
      minSeats: 1,
      recommendedMaxSeats: 3,
      useCases: ["writing", "research", "mixed"],
      creditsEligible: false,
      source: "felloai.com/gemini-pricing | finout.io/blog/gemini-pricing-in-2026",
    },
    "Google AI Pro": {
      // Rebranded from "Google One AI Premium" / "Gemini Advanced"
      price: 19.99,
      billingNote: "$19.99/month (first month free trial). Gemini 3, 1,000 AI credits/month, Deep Search, higher NotebookLM limits, Google Workspace integration.",
      minSeats: 1,
      recommendedMaxSeats: 5,
      useCases: ["writing", "research", "mixed"],
      creditsEligible: false,
      source: "9to5google.com/2026/04/11/google-ai-pro-ultra-features | finout.io/blog/gemini-pricing-in-2026",
    },
    "Google AI Ultra": {
      price: 249.99,
      billingNote: "$249.99/month. Highest access to Gemini 3 Pro, 25,000 AI credits, Veo 3.1 video, $100/month Google Cloud credits, YouTube Premium, Google Home Premium Advanced.",
      minSeats: 1,
      recommendedMaxSeats: 50,
      useCases: ["research", "data", "mixed"],
      creditsEligible: false,
      source: "9to5google.com/2026/05/05/google-ai-ultra-lite-gemini-usage-limits | finout.io/blog/gemini-pricing-in-2026",
    },
    "API (Gemini Dev)": {
      price: 50,
      billingNote: "Pay-per-token via Google AI Studio / Vertex AI. Gemini 3.1 Pro: $2/$12 per MTok. Gemini 3 Flash: $0.50/$3. Flash-Lite: $0.10/$0.40. Free tier available with rate limits. $50 is an estimated monthly spend for reference.",
      minSeats: 1,
      recommendedMaxSeats: 9999,
      useCases: ["coding", "data"],
      creditsEligible: true,
      source: "ai.google.dev/gemini-api/docs/pricing | finout.io/blog/gemini-pricing-in-2026",
    },
  },

  // ─── v0 by Vercel ──────────────────────────────────────────────────────────
  // Source: v0.app/pricing  |  nocode.mba/articles/v0-pricing
  // Source: shipper.now/v0-pricing  |  nxcode.io/resources/news/v0-by-vercel-complete-guide-2026
  // Note: Plans use a credit-based system. "Premium" = $20 (confirmed).
  //       "Team" = $30/user (confirmed). "Business" tier at $100/user added (was missing).
  v0: {
    Free: {
      price: 0,
      billingNote: "Free forever. $5 in monthly credits (~7–15 UI generations). Deploy to Vercel, GitHub sync, Design Mode. No credit card required.",
      minSeats: 1,
      recommendedMaxSeats: 1,
      useCases: ["coding", "design"],
      creditsEligible: false,
      source: "v0.app/pricing | shipper.now/v0-pricing",
    },
    Premium: {
      price: 20,
      billingNote: "$20/month. $20 in monthly credits. Ability to buy more credits, higher upload limits, Figma imports, v0 API access.",
      minSeats: 1,
      recommendedMaxSeats: 5,
      useCases: ["coding", "design"],
      creditsEligible: false,
      source: "v0.app/pricing | nocode.mba/articles/v0-pricing",
    },
    Team: {
      price: 30,
      billingNote: "$30/user/month. $30 in monthly credits per user + shared team pool. Centralized billing, team collaboration, API access. Training opt-out by default.",
      minSeats: 2,
      recommendedMaxSeats: 50,
      useCases: ["coding", "design", "mixed"],
      creditsEligible: false,
      source: "v0.app/pricing | shipper.now/v0-pricing",
    },
    Business: {
      price: 100,
      billingNote: "$100/user/month. $30 included monthly credits per user + $2 free daily credits on login. Training opt-out by default. Purchase additional credits shared across team.",
      minSeats: 5,
      recommendedMaxSeats: 200,
      useCases: ["coding", "design", "mixed"],
      creditsEligible: false,
      source: "v0.app/pricing | costbench.com/software/ai-coding-assistants/v0-vercel",
    },
    Enterprise: {
      price: null,
      billingNote: "Custom pricing. Priority performance, SAML SSO, role-based access control, dedicated support SLAs, enhanced security.",
      minSeats: 50,
      recommendedMaxSeats: 9999,
      useCases: ["coding", "design", "mixed"],
      creditsEligible: true,
      source: "v0.app/pricing | nxcode.io/resources/news/v0-by-vercel-complete-guide-2026",
    },
  },
};