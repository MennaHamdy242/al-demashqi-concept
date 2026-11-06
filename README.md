# Al Demashqi — Menu and Ordering

An independent frontend training project for browsing the Al Demashqi menu and preparing an order message. It is not the restaurant's official website and does not accept orders on the restaurant's behalf.

## What it does

- Arabic-first, right-to-left experience with a global Arabic/English switch in the header.
- Search across menu items and filter by category.
- Select sizes, add items to a cart, adjust quantities, and review the total.
- Prepare an order message for WhatsApp. The customer reviews and sends it themselves.
- Link the restaurant address to Google Maps.
- Show documented website issues alongside before/after comparisons.
- Keep cash on delivery as the only active payment choice. Online payment stays disabled because there is no backend or payment provider; the site never asks for card details.

## Run locally

Requires Node.js and npm.

```bash
npm install
npm run dev
```

Create a production build and run the linter:

```bash
npm run build
npm run lint
```

## WhatsApp configuration

The number is read from `VITE_WHATSAPP_NUMBER`. For local testing, put a number in international format without `+`, spaces, or the leading national zero in an ignored `.env.local` file:

```text
VITE_WHATSAPP_NUMBER=201xxxxxxxxx
```

Do not commit personal phone numbers or set one in a public deployment without the owner's explicit approval. If the value is blank, WhatsApp opens with the prepared message and lets the user choose a recipient. Never use the restaurant's real number for this demo.

## Menu and image notes

Menu names and sample prices were transcribed from [eldemashqi.com](https://eldemashqi.com/); confirm them with the restaurant before presenting them as current business information. Menu photos are illustrative and are not confirmed photos of restaurant dishes.

- Shawarma: [MeCooks image](https://www.mecooks.com/wp-content/uploads/2025/10/IMGL1460-min-1024x683.jpg).
- Shawarma meals: [Piper Cooks — Chicken Shawarma Plate](https://www.pipercooks.com/chicken-shawarma-plate/).
- Crepe: [Chelsea's Messy Apron image](https://www.chelseasmessyapron.com/wp-content/uploads/2019/05/Nutella-Crepes-ChelseasMessyApron-1200-3-500x500.jpg).
- Chicken: provided by the project owner.

The before screenshots document the existing public restaurant website. The `new-*` screenshots are earlier captures of this project and should be refreshed from the final deployment before presenting the comparison as final evidence.

## Lighthouse notes

The attached desktop and mobile Lighthouse reports were collected against `http://localhost:5173/` while Vite's development server was running. Both included approximately 5.3 MB of development JavaScript and HMR files, so those performance scores do not describe the optimized production build. Re-run Lighthouse against the deployed production URL before comparing final scores.

The earlier mobile baseline for the existing restaurant site was Performance 83, Accessibility 100, Best Practices 100, and SEO 92. These values are kept separate from the local development reports.

## Project limits

- There is no backend, database, account, or server-side order record.
- Cart contents are stored in this browser only.
- WhatsApp messages are prepared for review; the customer must send them.
- Online payments are not implemented.
- The public demo URL, production Lighthouse scores, and refreshed comparison screenshots still need final verification.
