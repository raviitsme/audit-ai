## Day 1 — 2026-05-06

**Hours worked:** 0

**What I did:**  
Didn’t make any development progress today as I was unwell. Only checked emails and briefly reviewed the project structure and direction.

**What I learned:**  
Got more clarity on how important it is to properly structure the UI flow before jumping into implementation. Also reinforced how design hierarchy in a dashboard affects readability and decision-making.

**Blockers / what I'm stuck on:**  
Still figuring out how the audit data flow will connect between form input and results page, especially how tool selections and plan data should be passed and stored.

**Plan for tomorrow:**  
Start building the SpendForm component and design how tool + plan selection should work dynamically. Focus on structuring the input flow that feeds into the audit engine.


---

## Day 2 — 2026-05-07

**Hours worked:** 3

**What I did:**  
Started the AuditAI project setup. Built the initial foundation of the homepage and designed the hero section layout with a brutalist editorial style. Created the core visual direction with bold typography, red accents, and structured sections for “AI Spend Audit”.

**What I learned:**  
How to translate a design concept into a structured Next.js + Tailwind layout. Also improved understanding of layout hierarchy and how visual weight affects user attention in dashboards.

**Blockers / what I'm stuck on:**  
Still figuring out how the audit data flow will connect between form input and results page.

**Plan for tomorrow:**  
Start building the SpendForm component and design how tool + plan selection should work dynamically.


---

## Day 3 — 2026-05-08

**Hours worked:** 5

**What I did:**  
Built the Audit Results page UI and connected it with the audit engine. Implemented localStorage-based data loading and rendered computed audit outputs dynamically. Added full dashboard structure including summary cards (current spend, optimized spend, savings), per-tool breakdown cards, utilization visualization bar, recommendation section, and expandable reasoning details. Also introduced severity-based UI states (LOW / MEDIUM / HIGH) and conditional “action required” warnings for unused seats. Enhanced the page with better hierarchy, spacing, and stronger visual emphasis on financial impact.

**What I learned:**  
Understood how tightly UI and audit logic need to be aligned in a system like this. Small mismatches in data shape (like savings fields vs monthlyWaste vs potentialSavings) can break aggregate calculations. Learned how to structure a dashboard so that raw computed data becomes readable insight (not just numbers). Also improved understanding of conditional rendering patterns in React for insight tiers and per-tool warnings.

**Blockers / what I'm stuck on:**  
Had inconsistency in savings calculation fields across components (monthlyWaste vs expectedSavings vs potentialSavings). Needed to align audit engine output with dashboard expectations to avoid incorrect totals. Also UI logic for insightTier needed careful tuning so it doesn’t over-trigger “HIGH IMPACT”.

**Plan for tomorrow:**  
- Clean up audit data model (finalize single source of truth for savings fields)  
- Improve recommendation engine logic clarity (reduce overlapping conditions)  
- Refactor UI into reusable components (ToolCard, SummaryCard, InsightBanner)  
- Add better empty-state UI when no audit data exists  
- Start polishing “shareable report quality” layout (screenshot-ready output)