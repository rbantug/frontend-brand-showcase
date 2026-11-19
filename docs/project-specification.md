# Cacao Atelier — Project Specification

**Document status:** Planning baseline  
**Project type:** Portfolio / demonstration website  
**Version:** 1.0

## 1. Project overview

Cacao Atelier is a fictional experimental chocolatier brand created as a portfolio and demonstration project.

The website showcases artistic chocolate bonbons through editorial presentation, storytelling, product photography and selective interactive 3D experiences.

**Brand motto:** The unexpected is worth tasting.

### Brand personality
- Modern, artistic and experimental.
- Premium but approachable.
- Focused on flavor discovery and creative combinations.
- Editorial luxury blended with an experimental art-gallery aesthetic.

### Emotional objectives
1. Create curiosity and wonder.
2. Inspire desire and appreciation for the creations.

## 2. Project objectives

- Demonstrate frontend engineering skills.
- Showcase Vue 3, TypeScript, SSG and interactive 3D.
- Demonstrate thoughtful UI/UX and responsive design.
- Showcase SEO-friendly static website architecture.
- Provide a working contact form integrated with HubSpot.

## 3. Scope

### Included
- Homepage.
- Creations collection page.
- Six individual product detail pages.
- Contact page and custom contact form.
- Privacy notice page.
- Selective 3D product experiences.
- Responsive layouts.
- SEO implementation.
- Testing and deployment to GitHub Pages.

### Excluded
- E-commerce functionality.
- Shopping cart and checkout.
- Payment processing.
- Customer accounts and authentication.
- Order management.
- Backend application or database.
- Inventory management.

## 4. Products

Initial illustrative collection:

| Product | Flavor combination | Presentation |
|---|---|---|
| Raspberry Noir | Raspberry and dark chocolate | 3D experience |
| Pistachio Rose | Pistachio and rose | Photography |
| Passion Fruit Caramel | Passion fruit and caramel | Photography |
| Matcha Sesame | Matcha and toasted sesame | Photography |
| Citrus Ember | Chili, citrus and dark chocolate | 3D experience |
| Smoked Tea Caramel | Smoked tea and salted caramel | Photography |

Names, recipes and descriptions are provisional.

All six products should have product imagery. Initially, use replaceable placeholder images.

Only Raspberry Noir and Citrus Ember receive interactive 3D experiences.

## 5. Website routes

- `/` — Homepage
- `/creations` — Product collection
- `/creations/:slug` — Product detail
- `/contact` — Contact form
- `/privacy` — Privacy notice
- 404 page

Use Vue Router with a shared product detail template driven by centralized product data.

## 6. Homepage structure

1. Hero section with strong visual composition, brand introduction and collection link.
2. Brand philosophy and flavor experimentation.
3. Featured creations.
4. Craftsmanship and creativity.
5. Contact invitation.

The creations page should use an editorial gallery with expressive compositions, asymmetrical layouts and subtle interactions rather than a conventional e-commerce grid.

## 7. Design direction

**Visual style:** Editorial luxury meets experimental art gallery.

- Sophisticated typography.
- Generous whitespace.
- Expressive imagery and compositions.
- Cream, cocoa brown, terracotta, muted pink and dusty rose as initial color inspiration.
- Subtle hover and scroll interactions.
- Responsive layouts across mobile, tablet and desktop.

Final design tokens, typography and imagery remain to be established during design.

## 8. Technical architecture

| Area | Technology / decision |
|---|---|
| Framework | Vue 3 |
| Language | TypeScript |
| Build tool | Vite |
| Rendering | Static Site Generation |
| SSG integration | vite-ssg |
| Routing | Vue Router |
| 3D | TresJS |
| Styling | SCSS |
| CSS naming | BEM |
| Package manager | pnpm |
| Unit testing | Vitest |
| Component testing | Vue Test Utils |
| E2E testing | Playwright |
| Linting | ESLint |
| Formatting | Prettier |
| Metadata | Unhead, subject to compatibility verification |
| CRM | HubSpot |
| Hosting | GitHub Pages |

### Application structure

Use `src/pages` for page-specific features and `src/components` for genuinely reusable components.

Centralize the six product definitions in:

`src/data/products.ts`

Use one shared product detail template rather than six independent implementations.

### Proposed folder structure

    src/
    ├── assets/
    │   ├── images/
    │   ├── models/
    │   │   ├── placeholders/
    │   │   └── products/
    │   ├── fonts/
    │   └── scss/
    │       ├── _variables.scss
    │       ├── _mixins.scss
    │       ├── _resets.scss
    │       ├── _functions.scss
    │       ├── index.scss
    │       └── global.scss
    ├── components/
    │   ├── ui/
    │   ├── layout/
    │   └── navigation/
    ├── pages/
    │   ├── home/
    │   ├── creations/
    │   ├── products/
    │   ├── contact/
    │   └── privacy/
    ├── data/
    │   └── products.ts
    ├── router/
    ├── App.vue
    └── main.ts

This structure is a starting point, not permission to create unnecessary abstractions.

### SCSS conventions

- Use SCSS throughout the application.
- Use BEM naming: block, element and modifier.
- Use scoped SCSS in Vue single-file components.
- Use modern Sass `@use` and `@forward`, not deprecated `@import`.
- `index.scss` centralizes variables, mixins and functions, excluding resets.
- `_resets.scss` contains reset rules; `global.scss` is the reset entry point.
- Keep shared styles in the centralized SCSS directory.

### Code conventions

- No semicolons in JS/TS.
- Single quotes in JS/TS.
- Trailing commas.
- 100-character print width.
- Two-space indentation (working convention; confirm during scaffold).
- LF line endings.
- Avoid unnecessary dependencies and abstractions.

## 9. Static Site Generation

Use vite-ssg to prerender all public routes.

Requirements:
- Static HTML for every public page.
- All six product detail URLs must be explicitly included in prerendering.
- Product routes must be generated from centralized product data.
- The website must remain usable without WebGL.
- 3D components must initialize only in the browser.
- Provide static fallback imagery for 3D experiences.
- Verify actual generated HTML rather than relying on development-server behavior.

Use nested output where appropriate for static hosting.

## 10. 3D experiences

Use TresJS with external GLB/glTF assets.

Initially use placeholder models. Model paths must be configurable so actual chocolate models can replace them without rewriting the viewer.

Requirements:
- Reusable 3D viewer.
- Camera, lighting and model controls.
- Rotation interaction.
- Exploded-layer animation.
- Loading, error and fallback states.
- Lazy/on-demand initialization.
- Resource cleanup when components unmount.
- No dependency on WebGL for ordinary page content.

3D experiences are limited to Raspberry Noir and Citrus Ember.

## 11. SEO requirements

Use Unhead for page metadata, after verifying compatibility with the chosen vite-ssg version.

Every public page must have:
- Unique title.
- Unique meta description.
- Canonical URL.
- Open Graph metadata.
- Twitter/X social metadata.
- Appropriate social preview image.

Additional requirements:
- Semantic HTML and logical heading hierarchy.
- Descriptive image alt text.
- XML sitemap.
- robots.txt.
- Organization JSON-LD.
- Product structured data only where appropriate and truthful.
- No invented prices, ratings or availability.
- Optimized images and Core Web Vitals considerations.
- Metadata must be present in prerendered HTML.

Use a configurable production site URL. Do not hardcode an invented domain.

## 12. Contact form and HubSpot

Build a custom Vue contact form. Do not embed a HubSpot-hosted form.

### Fields

| Field | Required |
|---|---|
| Name | Yes |
| Email | Yes |
| Inquiry type | No |
| Message | Yes |
| Marketing updates opt-in | No |

Inquiry types:
- General inquiry
- Product inquiry
- Gifting and special occasions
- Collaboration
- Other

### Integration

Submit directly to HubSpot's public Forms API using the portal ID and form GUID.

Do not expose private API keys or credentials in frontend code.

Include appropriate submission context, such as page URL and page title.

### Behavior

- Validate required fields and email format.
- Disable the submit button during submission.
- Show loading, success and failure states.
- Preserve entered information on failure.
- Clear the form after successful submission.
- Keep direct email/social contact links available.
- Include basic anti-spam protection.
- Keep marketing opt-in separate and unchecked by default.

The privacy notice should be linked near the submission control. Do not require blanket agreement to the entire privacy policy as a condition of submitting an inquiry.

HubSpot endpoint behavior, current plan limitations, field mapping and cross-origin submission must be verified before implementation.

## 13. Privacy notice

Create `/privacy`.

Cacao Atelier is a fictional portfolio brand. Do not invent a registered business identity or claim certifications and compliance that have not been established.

Explain:
- Who is responsible for the website's data handling.
- Information collected.
- Purposes of processing.
- HubSpot as a third-party service.
- Data retention.
- Security practices, accurately described.
- Applicable visitor rights.
- Privacy contact information.

Use `privacy@example.com` as a clearly marked development placeholder only. Replace it before accepting real inquiries.

A publicly deployed portfolio site can still collect real personal information. The privacy notice must accurately reflect actual operations, not fictional promises.

Review applicable Philippine privacy obligations before accepting real visitor submissions. This specification is not a legal compliance certification.

## 14. Testing

Use:
- Vitest for unit tests.
- Vue Test Utils for component tests.
- Playwright for browser-based E2E tests.

Test at minimum:
- Main navigation and routes.
- All six product pages.
- Product data correctness.
- Contact form validation and submission states.
- SSG output and page metadata.
- 3D loading and fallback.
- Responsive layouts.
- Chromium, Firefox and WebKit compatibility.

Playwright should be introduced progressively, with guidance on browser automation, locators, assertions, reports and traces.

## 15. Deployment

Deploy static output to GitHub Pages.

Requirements:
- Correct Vite `base` configuration for the repository path.
- Correct Vue Router base configuration.
- All public routes prerendered.
- Correct asset paths.
- Appropriate 404 handling.
- Production HTTPS.
- Configurable canonical site URL.
- Verify navigation and direct page refreshes.
- Verify contact integration and 3D behavior after deployment.

Start with the free GitHub Pages URL. A custom domain is optional and can be added later.

## 16. Open decisions

Do not invent answers to these items:

- Final repository name and GitHub Pages URL.
- Custom domain, if any.
- Final photography and product images.
- Final product descriptions and recipes.
- Final visual design tokens and fonts.
- HubSpot portal/form configuration.
- Final privacy contact email.
- Actual data retention period and privacy wording.
- Final anti-spam mechanism.
- Exact hosting workflow and deployment automation.
- Final dependency versions and compatibility.

## 17. General implementation rules

1. Prefer simple solutions appropriate for a small portfolio website.
2. Avoid unnecessary architecture and dependencies.
3. Preserve the agreed technical decisions unless a verified compatibility issue requires reconsideration.
4. Keep product data centralized.
5. Keep 3D model assets replaceable.
6. Build accessible, responsive components.
7. Add tests alongside implementation.
8. Verify SSG output in production builds.
9. Do not expose private credentials.
10. Do not silently invent missing business, product or privacy information.