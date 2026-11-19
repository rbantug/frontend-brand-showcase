# Cacao Atelier — Implementation Backlog

**Purpose:** Task-level handoff for Pi coding agent and Gemma 4  
**Status:** Ready for technical review  
**Reference:** Project Specification v1.0

## Instructions for coding agents

- Read the project specification before starting.
- Follow the confirmed technology and architectural decisions.
- Implement one ticket at a time.
- Do not silently expand ticket scope.
- Ask for clarification when a decision is genuinely blocking.
- Prefer complete, maintainable files over unnecessary abstractions.
- Run relevant tests before marking a ticket complete.
- Report changed files, decisions, tests and outstanding issues.
- Do not use real credentials or submit real visitor data during development.
- Do not start a later ticket while its dependencies are incomplete.

Each ticket should be manageable as an individual implementation task.

---

# Phase 1 — Foundation

## SETUP-01: Scaffold Vue application

**Objective:** Establish the initial Vue application.

**Scope:**
- Vue 3.
- TypeScript.
- Vite.
- Vue Router.
- pnpm.
- Standard Vue project entry point.

**Acceptance criteria:**
- Application starts successfully.
- TypeScript compilation works.
- Vue Router is installed and functional.
- pnpm scripts are configured.
- No unnecessary starter dependencies remain.

**Verification:** Run development server and production build.

## SETUP-02: Integrate vite-ssg

**Objective:** Establish static site generation.

**Scope:**
- Install vite-ssg.
- Replace the standard application initialization with ViteSSG.
- Configure Vue Router integration.
- Verify version compatibility.

**Acceptance criteria:**
- Production build generates static HTML.
- Homepage content exists in generated HTML.
- Browser-only functionality does not execute during prerendering.
- Development mode continues to work.

**Dependency:** SETUP-01.

## SETUP-03: Establish SCSS architecture

**Objective:** Implement the agreed SCSS organization.

**Scope:**
- Create centralized SCSS structure.
- Configure Sass.
- Establish variables, mixins and functions.
- Establish reset entry point.
- Configure global stylesheet loading.
- Establish BEM conventions.

**Acceptance criteria:**
- All application styling uses SCSS.
- SCSS modules use modern Sass module syntax.
- Global resets are centralized.
- Vue component styles use scoped SCSS.
- No conflicting naming conventions.

**Dependency:** SETUP-01.

## SETUP-04: Configure linting and formatting

**Objective:** Establish consistent code quality rules.

**Scope:**
- ESLint.
- TypeScript and Vue linting.
- Prettier.
- No semicolons.
- Single quotes in JS/TS.
- Trailing commas.
- 100-character print width.

**Acceptance criteria:**
- Lint and formatting commands work.
- Configuration is compatible with Vue and TypeScript.
- Formatting does not introduce unnecessary changes.

**Dependency:** SETUP-01.

## SETUP-05: Configure Vitest and Vue Test Utils

**Objective:** Establish unit and component testing.

**Acceptance criteria:**
- Vitest runs successfully.
- Vue components can be mounted in tests.
- Test environment supports DOM-based component testing.
- A sample passing test exists.

**Dependency:** SETUP-01.

## SETUP-06: Configure Playwright

**Objective:** Establish browser-based E2E testing.

**Scope:**
- Install Playwright.
- Configure browser installation.
- Configure development-server integration.
- Establish test directory and scripts.

**Acceptance criteria:**
- Chromium test can execute.
- A sample navigation test passes.
- Test reports and traces can be generated.

**Dependency:** SETUP-01.

---

# Phase 2 — Application architecture

## APP-01: Establish application folder structure

**Objective:** Implement the agreed organization.

**Scope:**
- `src/pages`
- `src/components`
- `src/data`
- `src/router`
- `src/assets`

**Acceptance criteria:**
- Page-specific components are kept within their page areas.
- Shared components are placed in `src/components`.
- No unnecessary abstractions or duplicate structures.

**Dependency:** SETUP-01.

## APP-02: Create application shell

**Objective:** Implement the shared application layout.

**Scope:**
- App.vue.
- Header.
- Footer.
- Main navigation.
- Shared page layout.

**Acceptance criteria:**
- Navigation is consistent across pages.
- Header and footer are reusable.
- Layout supports responsive behavior.
- Semantic HTML is used.

**Dependency:** APP-01.

## APP-03: Configure application routes

**Objective:** Establish all public routes.

**Routes:**
- `/`
- `/creations`
- `/creations/:slug`
- `/contact`
- `/privacy`
- 404.

**Acceptance criteria:**
- Every route resolves correctly.
- Unknown routes display the 404 page.
- Product routes support direct navigation.
- Router configuration supports SSG.

**Dependency:** APP-01, SETUP-02.

## APP-04: Implement centralized product data

**Objective:** Create typed product definitions.

**Scope:**
- Create `src/data/products.ts`.
- Define product TypeScript types.
- Add all six illustrative products.
- Include slugs, names, descriptions, imagery references and 3D availability.

**Acceptance criteria:**
- All six products are represented.
- Product data is strongly typed.
- Product lookup by slug works.
- Only Raspberry Noir and Citrus Ember are configured for 3D.
- Product data is not duplicated across pages.

**Dependency:** APP-01.

## APP-05: Configure product prerendering

**Objective:** Generate static pages for all six products.

**Scope:**
- Configure vite-ssg included routes.
- Generate product paths from centralized product data.
- Configure nested output.

**Acceptance criteria:**
- All six product pages are generated.
- Generated paths match their slugs.
- No product page depends on client-side route generation.
- No duplicate or missing paths.

**Dependency:** APP-03, APP-04.

---

# Phase 3 — SEO foundation

## SEO-01: Configure metadata management

**Objective:** Implement page metadata.

**Scope:**
- Integrate Unhead.
- Verify compatibility with vite-ssg.
- Establish reusable metadata configuration.

**Acceptance criteria:**
- Each public page can define its own metadata.
- Metadata appears in prerendered HTML.
- Product metadata comes from centralized product data.

**Dependency:** SETUP-02, APP-03, APP-04.

## SEO-02: Implement canonical and social metadata

**Objective:** Establish search and social sharing metadata.

**Scope:**
- Canonical URLs.
- Open Graph.
- Twitter/X metadata.
- Configurable production site URL.

**Acceptance criteria:**
- Each page has a unique canonical URL.
- Social metadata is included in generated HTML.
- No invented production domain.
- No duplicate canonical URLs.

**Dependency:** SEO-01.

## SEO-03: Generate sitemap and robots.txt

**Objective:** Provide search engines with site discovery information.

**Acceptance criteria:**
- Sitemap includes all public indexable routes.
- All six product routes are included.
- robots.txt is generated.
- Sitemap references the configured production URL.

**Dependency:** APP-05, SEO-02.

## SEO-04: Implement structured data

**Objective:** Add appropriate JSON-LD.

**Scope:**
- Organization structured data.
- Product structured data where applicable.

**Acceptance criteria:**
- JSON-LD is valid.
- No fabricated prices, availability or ratings.
- Structured data agrees with visible page content.

**Dependency:** SEO-01, APP-04.

---

# Phase 4 — Main website

## UI-01: Implement homepage

**Objective:** Build the complete homepage.

**Sections:**
- Hero.
- Brand philosophy.
- Featured creations.
- Craft and creativity.
- Contact invitation.

**Acceptance criteria:**
- All sections are present.
- Brand messaging follows the specification.
- Layout is responsive.
- Featured products link to their detail pages.
- Semantic HTML and metadata are implemented.

**Dependency:** APP-02, APP-04.

## UI-02: Implement creations collection

**Objective:** Build the editorial product gallery.

**Acceptance criteria:**
- All six products are displayed.
- Each product links to its detail page.
- Gallery follows the editorial design direction.
- Placeholder imagery can be replaced easily.
- Responsive layouts work.

**Dependency:** APP-04, APP-02.

## UI-03: Implement shared product detail page

**Objective:** Create one reusable product page template.

**Acceptance criteria:**
- All six product routes display the correct content.
- Product information comes from centralized data.
- Missing product slugs show the 404 experience.
- Images have descriptive alt text.
- Each page has appropriate metadata.
- Only designated products display the 3D experience.

**Dependency:** APP-04, APP-05.

## UI-04: Implement responsive navigation and layouts

**Objective:** Ensure consistent usability across devices.

**Acceptance criteria:**
- Header and navigation work on mobile.
- Layouts adapt to mobile, tablet and desktop.
- No unintended horizontal overflow.
- Interactive controls remain accessible.

**Dependency:** APP-02, UI-01, UI-02, UI-03.

## UI-05: Implement visual interactions

**Objective:** Add subtle interactions to the website.

**Scope:**
- Hover interactions.
- Scroll-triggered effects where appropriate.
- Navigation transitions.
- Editorial presentation details.

**Acceptance criteria:**
- Animations do not interfere with navigation.
- Reduced-motion preferences are respected.
- Content remains accessible without animation.
- Performance remains acceptable.

**Dependency:** UI-01, UI-02, UI-03.

---

# Phase 5 — 3D experiences

## 3D-01: Integrate TresJS

**Objective:** Establish the 3D rendering environment.

**Acceptance criteria:**
- TresJS integrates with Vue 3.
- Browser-only initialization works with SSG.
- 3D code is not executed during prerendering.
- Static content remains usable without WebGL.

**Dependency:** SETUP-02.

## 3D-02: Build reusable 3D viewer

**Objective:** Create a reusable model viewer.

**Scope:**
- Model loading.
- Camera.
- Lighting.
- Rotation controls.
- Loading and error states.
- Resource disposal.

**Acceptance criteria:**
- GLB/glTF models can be loaded.
- Viewer accepts configurable model paths.
- Viewer cleans up resources on unmount.
- Errors do not break the product page.
- Viewer supports fallback imagery.

**Dependency:** 3D-01.

## 3D-03: Integrate placeholder models

**Objective:** Establish replaceable model assets.

**Acceptance criteria:**
- Placeholder GLB/glTF assets load correctly.
- Model configuration is external to viewer implementation.
- Models can be replaced without rewriting viewer logic.

**Dependency:** 3D-02.

## 3D-04: Implement Raspberry Noir experience

**Objective:** Add the first interactive product experience.

**Scope:**
- Reusable viewer integration.
- Rotation.
- Exploded-layer animation.

**Acceptance criteria:**
- Experience works on supported browsers.
- Static fallback is available.
- Loading and errors are handled.
- Product page remains usable if 3D fails.

**Dependency:** 3D-03, UI-03.

## 3D-05: Implement Citrus Ember experience

**Objective:** Add the second interactive product experience.

**Acceptance criteria:**
- Reuses shared viewer architecture.
- Supports product-specific configuration.
- Includes rotation and exploded-layer animation.
- Provides static fallback.

**Dependency:** 3D-03, UI-03.

---

# Phase 6 — Contact and HubSpot

## CRM-01: Prepare HubSpot configuration

**Objective:** Create the CRM integration prerequisites.

**Scope:**
- Create or configure HubSpot account.
- Create website inquiry form.
- Establish required properties.
- Obtain portal ID and form GUID.
- Verify public Forms API documentation and account limitations.

**Acceptance criteria:**
- Form exists in HubSpot.
- Field mappings are documented.
- Public submission endpoint is verified.
- No private API key is required in the frontend.

**Dependency:** None.

## CRM-02: Implement contact page

**Objective:** Create `/contact`.

**Scope:**
- Custom contact form.
- Direct email and social contact links.
- Responsive layout.

**Acceptance criteria:**
- Required fields: name, email and message.
- Inquiry type is optional.
- Marketing opt-in is optional and unchecked by default.
- Privacy notice is linked.
- No embedded HubSpot form.

**Dependency:** APP-03, APP-02.

## CRM-03: Implement form validation

**Objective:** Validate visitor input.

**Acceptance criteria:**
- Required fields are validated.
- Email format is validated.
- Invalid submissions do not reach HubSpot.
- Errors are accessible and understandable.

**Dependency:** CRM-02.

## CRM-04: Integrate HubSpot Forms API

**Objective:** Submit contact inquiries to HubSpot.

**Scope:**
- Configure portal ID and form GUID.
- Map Vue form fields to HubSpot properties.
- Submit page context.
- Handle API responses.

**Acceptance criteria:**
- Successful submissions appear in HubSpot.
- No private credentials appear in frontend assets.
- Errors are handled without losing visitor input.
- Submission behavior is verified using test data.

**Dependency:** CRM-01, CRM-03.

## CRM-05: Implement submission feedback

**Objective:** Provide clear form states.

**Acceptance criteria:**
- Loading state.
- Duplicate submissions prevented while processing.
- Success confirmation.
- Failure feedback.
- Form resets only after successful submission.

**Dependency:** CRM-04.

## CRM-06: Implement basic spam protection

**Objective:** Reduce automated submissions.

**Scope:**
- Evaluate honeypot and other lightweight protections.
- Evaluate CAPTCHA or serverless alternatives if needed.

**Acceptance criteria:**
- Chosen approach is documented.
- Ordinary visitors can submit normally.
- No private secrets are exposed.

**Dependency:** CRM-04.

---

# Phase 7 — Privacy notice

## PRIV-01: Implement privacy notice page

**Objective:** Create `/privacy`.

**Scope:**
- Data collected.
- Processing purposes.
- HubSpot disclosure.
- Retention.
- Security.
- Applicable visitor rights.
- Privacy contact information.

**Acceptance criteria:**
- Plain-language content.
- No invented business registration or legal identity.
- Placeholder email is clearly identified during development.
- Actual data handling matches published claims.
- Privacy page has appropriate metadata.

**Dependency:** APP-03, CRM-01.

## PRIV-02: Finalize privacy and consent behavior

**Objective:** Ensure form behavior matches privacy requirements.

**Acceptance criteria:**
- Privacy notice is linked near submission.
- No blanket policy agreement checkbox is required.
- Marketing opt-in is separate and optional.
- Marketing opt-in is unchecked by default.
- No marketing consent is inferred from submitting an inquiry.
- Retention and privacy wording are reviewed before accepting real submissions.

**Dependency:** PRIV-01, CRM-02.

---

# Phase 8 — Quality assurance

## TEST-01: Test product data and lookup

**Acceptance criteria:**
- All six products exist.
- Slugs are unique.
- Product lookup works.
- 3D availability is correct.

**Dependency:** APP-04.

## TEST-02: Test page components

**Acceptance criteria:**
- Important shared components have tests.
- Product detail rendering is tested.
- Contact validation is tested.
- Error states are tested.

**Dependency:** SETUP-05, UI-01, UI-02, UI-03, CRM-03.

## TEST-03: Test navigation and routes

**Acceptance criteria:**
- Homepage navigation works.
- Collection links work.
- All six product pages load directly.
- Contact and privacy routes work.
- Unknown routes show 404.

**Dependency:** APP-03, UI-01, UI-02, UI-03.

## TEST-04: Test contact submission

**Acceptance criteria:**
- Valid submission succeeds using test data.
- Invalid submission is rejected.
- API errors are handled.
- Failed submissions preserve input.
- Successful submissions reset the form.
- Marketing preference is mapped correctly.

**Dependency:** CRM-04, CRM-05.

## TEST-05: Verify static generation and SEO

**Acceptance criteria:**
- Every public route is prerendered.
- Generated HTML contains meaningful page content.
- Metadata exists in generated HTML.
- Canonical URLs are correct.
- Sitemap and robots.txt are correct.
- Structured data is valid.

**Dependency:** APP-05, SEO-01, SEO-02, SEO-03, SEO-04.

## TEST-06: Test 3D behavior

**Acceptance criteria:**
- Models load successfully.
- Loading and error states work.
- Fallback imagery appears when WebGL is unavailable or rendering fails.
- Resource cleanup works.
- Ordinary page content remains functional without 3D.

**Dependency:** 3D-04, 3D-05.

## TEST-07: Responsive and browser testing

**Acceptance criteria:**
- Mobile, tablet and desktop layouts verified.
- Chromium, Firefox and WebKit tested.
- No critical console errors.
- Keyboard navigation works for important controls.
- Reduced-motion behavior verified.

**Dependency:** UI-04, UI-05, TEST-03.

---

# Phase 9 — Deployment

## DEPLOY-01: Configure GitHub Pages

**Objective:** Prepare the static deployment.

**Scope:**
- Configure Vite base path.
- Configure Vue Router base.
- Verify generated asset paths.
- Configure GitHub Actions deployment workflow.

**Acceptance criteria:**
- Production build succeeds.
- Generated assets resolve under the repository path.
- Direct navigation to prerendered routes works.
- Refreshing nested routes works.
- 404 behavior is verified.

**Dependency:** APP-05.

## DEPLOY-02: Deploy website

**Objective:** Publish the website on GitHub Pages.

**Acceptance criteria:**
- Deployment completes successfully.
- HTTPS works.
- All public pages are accessible.
- Images and 3D assets load.
- Contact form integration works with approved test configuration.

**Dependency:** DEPLOY-01.

## DEPLOY-03: Production verification

**Objective:** Verify the deployed website.

**Acceptance criteria:**
- All routes tested.
- Metadata verified in deployed HTML.
- Sitemap accessible.
- robots.txt accessible.
- Contact form tested.
- 3D fallbacks verified.
- No broken assets or critical console errors.

**Dependency:** DEPLOY-02, TEST-05, TEST-06, TEST-07.

---

# Suggested execution order

1. SETUP-01 through SETUP-06.
2. APP-01 through APP-05.
3. SEO-01 and SEO-02.
4. UI-01 through UI-04.
5. 3D-01 through 3D-05.
6. CRM-01 through CRM-06.
7. PRIV-01 and PRIV-02.
8. SEO-03 and SEO-04.
9. TEST-01 through TEST-07.
10. DEPLOY-01 through DEPLOY-03.

Testing should be performed alongside implementation, not postponed until the end.

# Completion definition

The project is considered complete when:

- All specified public routes work.
- All six products are represented.
- Both designated 3D experiences work with fallbacks.
- Static HTML is generated for every public page.
- SEO metadata and supporting files are verified.
- Contact submissions are recorded correctly in HubSpot.
- Privacy information accurately reflects actual data handling.
- Responsive and browser tests pass.
- Website is successfully deployed to GitHub Pages.

# Agent handoff protocol

Pi is responsible for coordinating implementation and delegating appropriately to Gemma 4.

For each ticket:
1. Review its objective, dependencies and acceptance criteria.
2. Inspect existing project files before changing anything.
3. Identify the smallest implementation approach.
4. Implement only the assigned scope.
5. Run relevant verification.
6. Report changed files and test results.
7. Record unresolved issues before proceeding.

Do not implement the entire backlog in one operation. Work incrementally and verify each completed task.