# Al Demashqi — independent concept redesign

## Concept disclaimer

This frontend is an independent concept redesign for a training application. It is not affiliated with Al Demashqi, and it does not receive or place orders for the restaurant. Menu content and the logo belong to the restaurant and appear only in this concept demo.

## Problem

The existing Al Demashqi menu is text-heavy and difficult to browse. Evidence in this repository documents five issues: four visible in screenshots (no food photos, horizontally scrollable categories, a long menu without quick section navigation, and delivery information only at the end) and one Lighthouse finding (missing meta description). This project explores ways to improve menu browsing; it does not claim that the restaurant has no website.

## Solution and features

Core: a before/after comparison slider for the original screenshot-backed redesigns and a list of all five documented problems. The Lighthouse-backed problem appears in the list without a slider because no before/after image pair exists for it.

Supporting: menu categories, normalized Arabic search, prepared WhatsApp contact/order messages, responsive layout, and AR/EN language switching. Extras: cart and cash-on-delivery selection. The project has no backend and does not process a real order or online payment.

## Links

- Live demo: TODO(user)
- Repository: TODO(user)
- Video: TODO(user)

## Tech stack

React, Vite, React Router, and CSS. There are no extra runtime dependencies.

## Run locally

1. Install the existing dependencies with `npm install`.
2. Copy `.env.example` to `.env.local`.
3. Optionally set `VITE_WHATSAPP_NUMBER` to your own number in the environment file; leaving it blank is supported. Never use the restaurant's number. `VITE_` values are public in the built site.
4. Run `npm run dev`.

The WhatsApp message includes a test-order notice. Verify its behavior yourself before sharing a public deployment.

## Project structure

- `src/components/`: reusable navigation, menu cards, comparison slider, footer, and shared UI.
- `src/pages/`: Home, Menu, Cart, Contact, Before/After, and NotFound routes.
- `src/data/`: menu, translations, documented problems, and Lighthouse values.
- `src/context/` and `src/providers/`: cart and language state.
- `src/hooks/`: cart, language, and page-title hooks.
- `src/utils/`: formatting, Arabic normalization, and WhatsApp message helpers.
- `public/images/`: logo, category images, and comparison screenshots.
- `docs/`: screenshot capture guide.

## Decisions

- Data is separate from UI so menu values and translations can be reviewed independently.
- There is no backend or payment processing because this is a frontend-only training demo. Online payment is unavailable; no fake card form is shown.
- The cart persists only item IDs, size labels, keys, and quantities. Names and prices are derived from `src/data/menu.js` so stale stored prices do not override current menu data.
- The menu contains four sample categories. Any menu content and prices shown are for demonstration and must be verified by the student before presenting.
- The WhatsApp recipient comes from an environment variable, so no personal number is stored in the repository. It must be the student's own number or empty, never the restaurant's. Vite exposes `VITE_` values in public built assets.
- Outgoing messages carry a notice that they are test messages and not real orders.

## Deliberately not built

No backend, database, login, order storage, real checkout, online payment, or restaurant order integration.

## Accessibility and responsive notes

The app supports RTL Arabic and English, keyboard operation for navigation and sliders, visible focus styles, field-level checkout errors, reduced-motion preferences for existing interactions, and responsive menu/header layouts. Check narrow viewports and production routes before delivery.

## Lighthouse: old vs new

The saved report in `docs/LightHouse` measured the old site on desktop: Performance 75, Accessibility 100, Best Practices 100, and SEO 92. The new values remain empty until the deployed redesign is measured. The old site already scores well on accessibility and best practices, so the redesign's value is menu browsing UX and the missing meta description, not a general score jump.

Audits deliberately excluded from the problem list: `bf-cache` was attributed to memory pressure, not a confirmed site defect; `layout-shifts` and `render-blocking-insight` were treated as weak or negligible impact and are not claimed as problems.

## Image credits

Add the real source and license for each image. Do not guess credits.

- `public/images/logo.png` — TODO(user): source and license.
- `public/images/hero/chicken.jpg` — TODO(user): source and license.
- `public/images/hero/crepes.jpg` — TODO(user): source and license.
- `public/images/hero/shawarma-meals.webp` — TODO(user): source and license.
- `public/images/hero/shawarma.webp` — TODO(user): source and license.
- `public/images/before-after/first-page-mobile.png` — TODO(user): source and license.
- `public/images/before-after/first-page.png` — TODO(user): source and license.
- `public/images/before-after/full-site.png` — TODO(user): source and license.
- `public/images/before-after/last-page-mobile.png` — TODO(user): source and license.
- `public/images/before-after/last-page.png` — TODO(user): source and license.
- `public/images/before-after/middle-page-mobile.png` — TODO(user): source and license.
- `public/images/before-after/middle-page.png` — TODO(user): source and license.
- `public/images/before-after/new-menu-card.png` — TODO(user): source and license.
- `public/images/before-after/new-menu.png` — TODO(user): source and license.
- `public/images/before-after/new-navbar-mobile.png` — TODO(user): source and license.
- `public/images/before-after/new-navbar.png` — TODO(user): source and license.

## AI use — edit before submission

TODO(user): Replace this paragraph with an honest description of which tools helped, what they changed, what you reviewed, and which parts you can explain independently.

## Challenges

TODO(user): Add the actual challenges and lessons learned in the submission video.
