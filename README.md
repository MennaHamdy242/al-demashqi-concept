# Al Demashqi — Concept Redesign

An independent frontend redesign concept for Al Demashqi, a Syrian restaurant in 10th of Ramadan City, Egypt. This is a training project and is **not an official restaurant website**.

## Project goal

Make the restaurant's menu easier to browse on mobile and make the ordering steps clear. The project compares documented issues in the existing site with a proposed menu, cart, and WhatsApp order flow.

## Features

- Three before/after comparisons tied to documented screenshots: food imagery, category navigation, and the long menu page.
- Arabic-first layout with RTL direction and responsive menu category filters.
- Optional English item and category names toggle.
- Menu sizes can be added to a cart. The cart supports quantity changes, removal, subtotal calculation, and `localStorage` persistence.
- Checkout collects a name, delivery address, and optional notes, then prepares an order message for WhatsApp.
- Cash on delivery is available. Online payment is disabled because this frontend-only demo has no backend or payment integration. No card form is included.
- Lighthouse baseline scores for the existing site are shown on the Before/After page: Performance 83, Accessibility 100, Best Practices 100, SEO 92 (mobile).

## Run locally

Requires Node.js and npm.

```bash
npm install
npm run dev
```

Create and lint a production build:

```bash
npm run build
npm run lint
```

## Order flow and project decisions

- **No backend or database:** cart contents are stored in this browser only. There is no account or server-side order record.
- **WhatsApp handoff:** the site puts order details into a prefilled WhatsApp message. The customer reviews it and sends it themselves. Set the demo owner's international number in `src/config.js` to open a specific chat. If it is blank, WhatsApp opens without a recipient so the customer can choose one. Never use the restaurant's real number for this public demo.
- **Payment:** cash on delivery is the only active option. Online payment is visibly disabled until a backend and payment provider are implemented. The demo does not request or store card details.
- **Business identity:** all pages identify this as an independent concept; they do not claim to be the official site or to accept orders on the restaurant's behalf.
- **Menu content:** names and prices were transcribed for this sample from [eldemashqi.com](https://eldemashqi.com/). Confirm them with the restaurant before presenting this as current business information.

## Image credits

The before screenshots are captures of the public restaurant website. The `new-*` screenshots are captures of this concept and should be refreshed after the design is final.

The menu hero photos are illustrative and are not photos of confirmed restaurant dishes:

- Shawarma photo: [MeCooks image](https://www.mecooks.com/wp-content/uploads/2025/10/IMGL1460-min-1024x683.jpg).
- Shawarma meal photo: [Piper Cooks — Chicken Shawarma Plate](https://www.pipercooks.com/chicken-shawarma-plate/).
- Chicken photo: Sue Winston, [A white plate topped with different types of food](https://unsplash.com/photos/a-white-plate-topped-with-different-types-of-food-1WCLIjfXDeg), under the Unsplash License. The downloaded image is center-cropped for the menu hero.
- Crepe photo: [Chelsea's Messy Apron image](https://www.chelseasmessyapron.com/wp-content/uploads/2019/05/Nutella-Crepes-ChelseasMessyApron-1200-3-500x500.jpg).

The menu hero photos are illustrative and are not photos of confirmed restaurant dishes. Check source terms before public or commercial reuse.

## Problem log

| Problem | Cause | Fix / lesson |
| --- | --- | --- |
| Initial Git commit had no identity | Git user details were not configured | Configure Git identity once on the machine. |
| Vite project appeared in a nested folder | Project was created from inside a same-named directory | Check the working directory before scaffolding. |
| Logo did not load on the deployed host | File was `logo.PNG` while code requested `logo.png` | Use consistent lowercase paths; deployment hosts can be case-sensitive. |
| Hero images cropped too much on mobile | A wide fixed aspect ratio with `object-fit: cover` cropped square photos | Preserve each source image's dimensions and use `object-fit: contain`. |
| Oxlint warned about exporting the hook beside the provider | Fast Refresh expects component-only modules | Keep `useCart` in its own hook file. |

## Current limits

- The cart and checkout are a frontend demo. They do not create a real restaurant order until the customer sends the WhatsApp message.
- The WhatsApp destination is intentionally configurable and has no restaurant phone number in the repository.
- Final concept screenshots, hero-image attribution review, production Lighthouse scores, and the live demo URL should be added after final visual review and deployment.
