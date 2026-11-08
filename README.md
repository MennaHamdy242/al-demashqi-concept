# Al Demashqi — independent concept redesign

## Concept disclaimer

This frontend is an independent concept redesign for a training application. It is not affiliated with Al Demashqi, and it does not receive or place orders for the restaurant. Menu content and the logo belong to the restaurant and appear only in this concept demo.

## What I built

A frontend-only concept redesign of the Al Demashqi (10th of Ramadan City) menu website. Visitors can browse a sample menu with photos, filter and search it, add items to a cart, and open a ready-made WhatsApp message with their order. A before/after page documents the problems of the original site.

## Access

No login or credentials are needed. Open the live demo and use it directly: https://al-demashqi-concept.vercel.app/

Suggested path: Home → Before/After (drag the sliders) → Menu (filter and search) → tap a size to add items → Cart → fill in name and address → the WhatsApp message opens for review (it is never sent automatically).

## Problem

The existing Al Demashqi menu website is text-heavy and difficult to browse. This repository documents five issues: four visible in screenshots (no food photos, horizontally scrollable categories, a long menu without quick section navigation, and delivery information only at the end) and one Lighthouse finding (missing meta description). This project explores ways to improve menu browsing; it does not claim that the restaurant has no website.

## Solution and features

**Core:** a before/after comparison slider (three comparisons backed by screenshots) and a list of all five documented problems. The Lighthouse-backed problem appears in the list without a slider because no before/after image pair exists for it.

**Supporting:** menu with category filter and search (with Arabic letter normalization), a prepared WhatsApp contact/order message, and a responsive layout.

**Extras:** cart, cash-on-delivery selection, and Arabic/English switching.

The project has no backend and does not process a real order or online payment.

## How the key features work

- **Before/After slider:** an invisible `<input type="range">` sits on top of two stacked images. Its value (0–100) is stored in React state and drives a CSS `clip-path` on the "after" image, so dragging reveals more or less of it. Because it is a native input, keyboard control works by default. The slider stays left-to-right even on the Arabic (RTL) page, since `clip-path` and the handle use physical left/right.
- **Menu filter and search:** all menu data lives in `src/data/menu.js`. The page filters that list by the selected category and the search text. Search normalizes Arabic letters (for example أ/إ/آ become ا) so similar spellings match.
- **Cart:** the cart saves only item IDs, size labels and quantities in `localStorage`. Names and prices are looked up from `menu.js` at runtime, so stale prices cannot appear.
- **WhatsApp order:** on submit, the name and address are trimmed and validated. The order is turned into a text message, URL-encoded, and opened through a `wa.me` link for the user to review before sending. The recipient number comes from the `VITE_WHATSAPP_NUMBER` environment variable (it may be empty).

## Links

- Live demo: https://al-demashqi-concept.vercel.app/
- Repository: https://github.com/MennaHamdy242/al-demashqi-concept
- Video: https://drive.google.com/file/d/1uflfPM0DujSDYgBQK5dkl5jnN3QEkDGE/view?usp=drivesdk

## Tech stack

React, Vite, React Router, and CSS. There are no extra runtime dependencies.

## Run locally

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local`.
3. Optionally set `VITE_WHATSAPP_NUMBER` to your own number (digits only, international format). Leaving it blank is supported. Never use the restaurant's number. `VITE_` values are public in the built site.
4. Run `npm run dev`.

WhatsApp messages include a test-order notice.

## Project structure

- `src/components/`: navigation, menu cards, comparison slider, footer, and shared UI.
- `src/pages/`: Home, Menu, Cart, Contact, Before/After, and NotFound routes.
- `src/data/`: menu, translations, documented problems, and Lighthouse values.
- `src/context/` and `src/providers/`: cart and language state.
- `src/hooks/`: cart, language, and page-title hooks.
- `src/utils/`: formatting, Arabic normalization, and WhatsApp message helpers.
- `public/images/`: logo, category images, and comparison screenshots.
- `docs/`: screenshot guide and the saved Lighthouse report of the old site.

## Decisions

- Data is separate from UI so menu values and translations can be reviewed independently.
- There is no backend or payment processing because this is a frontend-only training demo. Online payment is unavailable; no fake card form is shown.
- The cart persists only item IDs, size labels, keys, and quantities. Names and prices are derived from `src/data/menu.js`, so stale stored prices cannot override current menu data.
- The menu contains four sample categories only (Shawarma, Shawarma meals, Chicken, Crepes). Items and prices are sample data copied from eldemashqi.com and may be out of date.
- The WhatsApp recipient comes from an environment variable, so no personal number is stored in the repository. It is the developer's own number or empty, never the restaurant's. Vite exposes `VITE_` values in the public build.
- Outgoing messages carry a notice that they are test messages and not real orders.

## Deliberately not built

No backend, database, login, order storage, real checkout, online payment, or restaurant order integration.

## Possible next steps

Ideas I would explore beyond this sample:

- Opening hours with an "open now" label (frontend only).
- Item options such as extra toppings or "no onions", included in the cart and the WhatsApp message (frontend only).
- Order tracking and online payment (these need a backend, which I am still learning, so they are not faked here).

## Accessibility and responsive notes

The app supports Arabic (RTL) and English, keyboard operation for navigation and sliders, visible focus styles, field-level checkout errors, reduced-motion preferences, and a responsive header and menu layout (the cart stays visible on mobile).

## Lighthouse: old vs new

The saved report in `docs/LightHouse` measured the old site on desktop: Performance 75, Accessibility 100, Best Practices 100, SEO 92. The deployed concept site, measured on desktop on 6 November 2026, scored 100 in all four. Both reports used Lighthouse's simulate mode. The old site already scores well on accessibility and best practices, so the value of this redesign is menu browsing UX and the missing meta description, not a general score jump.

Audits deliberately excluded from the problem list: `bf-cache` was attributed to memory pressure, not a confirmed site defect; `layout-shifts` and `render-blocking-insight` had weak or negligible impact and are not claimed as problems.

## Image credits

- Before/after "before" images (`first-page`, `middle-page`, `last-page`, `full-site`, and their mobile versions) are my own screenshots of eldemashqi.com, used only to document the problems.
- "After" images (`new-*`) are screenshots of this concept redesign.
- The logo belongs to Al Demashqi and is used only in this concept demo.
- Category photos in `public/images/hero/` come from free stock sources or the restaurant's public page, and are used only for this concept demo. I did not record the exact source of each photo.

## AI use

I use AI tools (Claude, ChatGPT, and a coding assistant) almost daily. The idea, the choice of restaurant, the problems list, and the design decisions are mine. AI tools helped me write and fix code, review it, and find bugs. I read and tested the changes myself, and I can explain the main parts of the code, such as the before/after slider and the cart.

## Challenges

- **File names:** my logo was `logo.PNG` while the code asked for `logo.png`. Windows did not care, but Vercel is case-sensitive. I now keep file names lowercase and search the code after every rename.
- **Similar file names:** the before/after page has files with very similar names, and one wrong letter breaks things. This confused me more than once.
- **Images:** stretching screenshots to fit looked wrong, so I show them in their original proportions.
- **Scope:** I wanted the design to feel very different from the original, but because this is a sample of the existing site, I kept the scope small and focused on quality.
