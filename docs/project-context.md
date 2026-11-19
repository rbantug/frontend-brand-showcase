# Cacao Atelier — Project Context

## 1. Project Overview

Cacao Atelier is a fictional experimental chocolatier brand created as a portfolio and demonstration website.

**Brand motto:** The unexpected is worth tasting.

The website should combine editorial luxury with the atmosphere of an experimental art gallery. Its visual identity should feel sophisticated, artistic, expressive, and approachable.

This is a frontend showcase, not an e-commerce application.

## 2. Core Technical Stack

| Area | Technology |
|---|---|
| Framework | Vue 3 |
| Language | TypeScript |
| Build tool | Vite |
| Routing | Vue Router |
| Rendering | Static Site Generation (vite-ssg) |
| Styling | SCSS |
| CSS methodology | BEM |
| 3D | TresJS |
| Package manager | pnpm |
| Unit/component testing | Vitest + Vue Test Utils |
| E2E testing | Playwright |
| Code quality | ESLint + Prettier |
| Metadata | Unhead |
| Contact management | HubSpot Forms API |
| Hosting | GitHub Pages |

Do not introduce additional frameworks, libraries, or services without authorization.

## 3. Application Architecture

The application uses Vue 3 Composition API and TypeScript.

Conventions:
- Use `<script setup lang="ts">` for Vue components.
- Prefer Composition API and function-based dependency injection.
- Do not introduce Pinia initially; use local component state and composables.
- Use SCSS throughout the application.
- Use BEM naming for CSS classes.
- Use `<style lang="scss" scoped>` for component styles.
- Use Sass modules (`@use` and `@forward`), not deprecated `@import`.
- Keep product information in one centralized `src/data/products.ts` file.
- Put genuinely reusable components in `src/components`.
- Organize route-level features under `src/pages`.

## 4. Planned Routes

- `/` — Homepage
- `/creations` — Product gallery
- `/creations/:slug` — Product detail
- `/contact` — Contact form
- `/privacy` — Privacy notice
- 404 — Not-found page

All public routes should be statically prerendered.

Dynamic product routes must be generated from the centralized product data.

## 5. Product Showcase

Six provisional creations:

1. Raspberry Noir — raspberry and dark chocolate.
2. Pistachio Rose — pistachio and rose.
3. Passion Fruit Caramel — passion fruit and caramel.
4. Matcha Sesame — matcha and toasted sesame.
5. Citrus Ember — chili, citrus, and dark chocolate.
6. Smoked Tea Caramel — smoked tea and salted caramel.

Product names, ingredients, and descriptions are provisional.

Two products will feature interactive 3D presentations:
- Raspberry Noir
- Citrus Ember

Use placeholder 3D assets initially. Keep asset references configurable so they can be replaced later.

## 6. 3D Implementation

Use TresJS for 3D rendering.

Requirements:
- Load 3D functionality only in the browser.
- Lazy-load the 3D viewer.
- Provide a static image fallback.
- Provide loading and error states.
- Keep the rest of the website usable without WebGL.
- Dispose of resources appropriately when components unmount.

## 7. Contact Form

Use a custom Vue form connected to HubSpot Forms API.

Do not embed a HubSpot form.

The form should support:
- Name
- Email
- Inquiry type
- Message
- Client-side validation
- Submission/loading state
- Success and failure feedback
- Preserving entered values after failure

Never expose private API keys in frontend code.

## 8. SEO and Performance

Requirements:
- Unique page titles and meta descriptions.
- Canonical URLs.
- Open Graph and social-sharing metadata.
- XML sitemap and robots.txt.
- Semantic HTML and appropriate heading hierarchy.
- Descriptive image alt text.
- Organization structured data where appropriate.
- Verify metadata in generated prerendered HTML.
- Optimize images, fonts, and Core Web Vitals.

Do not invent a production domain. GitHub Pages will initially provide the public URL.

## 9. Testing

Use:
- Vitest and Vue Test Utils for unit and component tests.
- Playwright for browser-based end-to-end tests.

Testing should be introduced progressively alongside implementation.

Important scenarios include:
- Navigation and product routes.
- Contact form validation and submission behavior.
- Responsive layouts.
- 3D loading and fallback behavior.
- Production build and prerendered pages.

## 10. Deployment

Host the static website on GitHub Pages.

Pay attention to:
- Vite's `base` configuration.
- Vue Router's base path.
- Nested routes and direct navigation.
- Asset paths in generated HTML.
- GitHub Pages 404 handling.

## 11. Important Project Boundaries

This project does not require:
- Shopping cart or checkout.
- Payment processing.
- Customer accounts.
- Inventory management.
- Order management.
- A custom backend or database.

Do not add these features unless explicitly requested.

## 12. Authoritative References

- `/workspace/AGENTS.md` — mandatory agent instructions.
- `/workspace/docs/project-specification.md` — complete project specification.
- `/workspace/docs/implementation-backlog.md` — implementation tickets.
- `/workspace/docs/pi-workflow.md` — Pi workflow.

When instructions conflict, follow `AGENTS.md` and the explicit authorization for the current ticket. Do not silently change established project decisions.