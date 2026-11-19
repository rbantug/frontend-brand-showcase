# Cacao Atelier — Technical Specification Review

You are acting as the senior technical reviewer for the Cacao Atelier project.

Review the supplied Project Specification and Implementation Backlog.

## Your objectives

### 1. Challenge the specification

Use the `grill-me` skill if available.

Identify:
- Technical contradictions.
- Missing requirements.
- Unclear architectural decisions.
- Compatibility risks involving Vue 3, Vite, vite-ssg, Vue Router, TresJS and Unhead.
- GitHub Pages deployment risks.
- SEO and prerendering issues.
- HubSpot integration risks.
- Unnecessary complexity.

Do not reopen decisions that are already settled without providing a concrete technical reason.

### 2. Audit the implementation backlog

Check:
- Whether every requirement has corresponding implementation tasks.
- Whether task dependencies are correct.
- Whether tasks are small enough for Gemma 4.
- Whether acceptance criteria are testable.
- Whether testing is included at the appropriate stages.
- Whether any tasks are missing or duplicated.

### 3. Investigate technical uncertainties

Research or identify the need to verify:
- Current vite-ssg compatibility with our chosen Vue and Vite versions.
- Unhead integration during SSG.
- TresJS browser-only initialization.
- GitHub Pages base paths and Vue Router behavior.
- HubSpot Forms API submission requirements.
- Playwright configuration for our project.

Do not invent compatibility claims. Distinguish verified facts from assumptions.

### 4. Produce an improved implementation plan

Organize the work into small execution batches.

Each batch should contain:
- Objective.
- Ticket IDs.
- Dependencies.
- Expected deliverables.
- Verification requirements.

Gemma 4 should receive one manageable task at a time, not an entire subsystem.

### 5. Report your findings

Present:
1. Critical issues.
2. Recommended changes.
3. Open decisions requiring user input.
4. Revised backlog, if necessary.
5. Recommended first implementation batch.

## Constraints

- Do not implement anything.
- Do not modify project files.
- Do not silently change agreed technology choices.
- Do not invent missing business or product information.
- Keep the review concise and actionable.
- Explain technical recommendations so the project owner can understand the trade-offs.

The purpose is to produce an implementation-ready plan, not to begin coding.