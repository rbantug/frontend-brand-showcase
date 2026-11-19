# AGENTS.md — Cacao Atelier

## 1. Project Context

Cacao Atelier is a fictional experimental chocolatier brand website created as a portfolio/demo project.

The project is a frontend showcase, not an e-commerce application.

The authoritative project requirements and decisions are documented in:

- `docs/project-specification.md`
- `docs/implementation-backlog.md`

Refer to these documents when the assigned task requires additional project context. Do not unnecessarily reread all documentation for every ticket.

## 2. Established Technology Stack

Follow these established decisions:

- Vue 3
- TypeScript
- Vite
- vite-ssg for static site generation
- Vue Router
- TresJS for 3D experiences
- SCSS for styling
- BEM naming convention
- pnpm for package management
- Vitest and Vue Test Utils for unit/component tests
- Playwright for end-to-end tests
- ESLint and Prettier

Do not introduce alternative frameworks, styling systems, state management libraries, or unnecessary dependencies without explicit approval.

## 3. Architecture Conventions

- Use Vue 3 Composition API.
- Prefer function-based approaches over classes.
- Use `<script setup lang="ts">` for Vue components.
- Use SCSS throughout the application.
- Use BEM for CSS class naming.
- Use Sass modules (`@use` and `@forward`), not deprecated `@import`.
- Use Vue components for reusable UI.
- Keep page-specific components within their respective page directories.
- Keep product information centralized in `src/data/products.ts`.
- Avoid introducing Pinia unless explicitly approved.
- Keep browser-only functionality separate from SSG execution.

Follow the established folder structure in the project specification.

## 4. Ticket Execution Rules

For every assigned ticket:

1. Read the ticket and its acceptance criteria.
2. Inspect the existing code relevant to the task.
3. Identify the files that need to be created or modified.
4. Implement only the requested scope.
5. Run the relevant checks and tests.
6. Report the outcome.

Do not independently select or start another ticket.

## 5. File and Dependency Safety

- Work only inside `/workspace`.
- Never create a nested project directory.
- Do not modify unrelated files.
- Do not delete existing files unless explicitly required.
- Do not install, uninstall, or upgrade dependencies without authorization.
- Do not overwrite existing configuration or documentation without checking its contents.
- Do not modify Git history, reset branches, or discard user changes.
- Do not create additional documentation or configuration files unless required by the assigned ticket.
- Ask for approval before making changes outside the assigned scope.

Creating or modifying files explicitly required by an assigned ticket is permitted.

## 6. Technical Decision Rules

- Preserve established architectural decisions.
- Do not silently substitute technologies.
- Do not invent requirements or functionality.
- Do not introduce unnecessary abstractions or complexity.
- If a requirement is ambiguous, ask for clarification.
- If an existing decision appears technically problematic, explain the concern and request approval before changing it.
- Do not claim compatibility or successful verification without evidence.

## 7. Testing and Verification

- Run relevant tests after implementation.
- Run TypeScript checks when applicable.
- Run linting when applicable.
- Do not claim tests passed unless they were actually executed.
- Report any failed checks and unresolved issues.
- Do not modify tests merely to make an implementation pass without understanding the failure.

## 8. Completion Report

At the end of each ticket, provide:

1. Ticket ID and objective.
2. Summary of implementation.
3. Files created or modified.
4. Dependencies added or changed, if authorized.
5. Commands and tests executed.
6. Test results.
7. Known limitations or outstanding issues.

Do not mark a ticket complete if its acceptance criteria have not been satisfied.