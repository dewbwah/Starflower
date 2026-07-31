# Starflower Bookkeeping

Marketing website for **Starflower Bookkeeping** — CFO-level bookkeeping for contractors and small businesses nationwide. Based in Liberty, Missouri; serving the Kansas City metro locally and clients everywhere, remote.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Statically generated, deployable to Vercel with zero config.

---

## Table of contents

1. [Run it locally](#run-it-locally)
2. [The one thing you must do before launch: the Motion embed](#the-motion-embed)
3. [Swap the placeholder email](#swap-the-placeholder-email)
4. [Confirm the business hours](#confirm-the-business-hours)
5. [Drop in Angie's real photos](#angies-photos)
6. [Where the content and business details live](#content--business-details)
7. [Pages](#pages)
8. [Brand, colors, and fonts](#brand-colors-and-fonts)
9. [SEO, sitemap, robots, schema](#seo)
10. [Redirect map for essistantkc.com](#redirect-map)
11. [Deploy to Vercel](#deploy-to-vercel)

---

## Run it locally

Requires Node 18.18+ (Node 20+ recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Other scripts:

```bash
npm run build   # production build (also runs lint + type-check)
npm run start   # serve the production build locally
npm run lint    # lint only
```

---

## The Motion embed

**This is the one thing to finish before launch.** Every page funnels to booking a 15-minute call, and the Book a Call page (`/book-a-call`) is where that calendar lives.

Right now it shows a clearly-marked placeholder. To go live:

1. Open **`components/MotionEmbed.tsx`**.
2. Find the big comment block that says `MOTION EMBED PLACEHOLDER`.
3. In Motion, open your booking page → **Share → Embed**, and copy the `<iframe …>` snippet.
4. Replace the placeholder `<div>` with your iframe. A clean version looks like:

   ```tsx
   <iframe
     src="YOUR_MOTION_BOOKING_URL"
     title="Book a 15-minute call with Starflower Bookkeeping"
     width="100%"
     height="700"
     style={{ border: 0 }}
     loading="lazy"
   />
   ```

If Motion only gives you a **link** (not an iframe), you don't have to touch the component at all — just set `BOOKING_URL` in **`lib/constants.ts`** and the existing "Open my calendar" button will use it. Every "Book a Call" button across the site already points to `/book-a-call`.

---

## Swap the placeholder email

There is no business email yet, so the site uses a placeholder in **one place**:

- **`lib/constants.ts`** → `BUSINESS.email` (currently `hello@starflowerbookkeeping.com`).

Change it there and it updates the footer, the contact page, the privacy page, and the JSON-LD schema everywhere at once.

---

## Confirm the business hours

The hours are a placeholder marked for you to confirm:

- **`lib/constants.ts`** → `BUSINESS.hours` (currently `Mon–Fri, 9:00am–5:00pm CT`).

Every spot that shows hours is tagged with a `CONFIRM hours before launch` code comment (footer and contact page).

---

## Angie's photos

There's one photo placeholder today, on the About page, shown inside the petal-shaped mask.

1. Add the image to **`public/images/`** (e.g. `public/images/angie.jpg`). A portrait crop around 4:5 looks best.
2. Open **`app/about/page.tsx`**, find the `PhotoPlaceholder` inside the `PetalFrame`, and replace it with a `next/image`:

   ```tsx
   import Image from "next/image";
   // ...
   <PetalFrame className="mx-auto max-w-sm shadow-lift">
     <Image
       src="/images/angie.jpg"
       alt="Angie, founder of Starflower Bookkeeping"
       width={640}
       height={800}
       className="h-auto w-full object-cover"
       priority
     />
   </PetalFrame>
   ```

The `PetalFrame` component (in `components/ui.tsx`) applies the leaf-shaped mask, so any image you drop in gets the on-brand shape automatically. Reuse it anywhere you want that treatment.

---

## Content & business details

Almost all copy and every business fact lives in **`lib/constants.ts`**, so you can edit text without touching page layout:

- `BUSINESS` — name, phone, email, base city/state, hours, founder name
- `BOOKING_URL` — Motion link fallback
- `CTA` — the "Get a Second Opinion on Your Books" language used sitewide
- `TRUST_SIGNALS` — the credentials strip
- `TESTIMONIALS` — the three Google reviews (verbatim)
- `FAQS` — all 10 FAQ questions/answers and their inline links
- `REFERRAL_TOOLS` — the tools on the Phase 2 referrals page
- `NAV_LINKS` — the header/footer navigation

Longer page-specific copy (the contractor and cleanup narratives, pricing tiers, etc.) lives in each page file under `app/`.

---

## Pages

**Phase 1 (live, in the nav):**

| Route | Purpose |
| --- | --- |
| `/` | Home |
| `/about` | Angie's story (trust page) |
| `/bookkeeping-for-contractors` | Construction bookkeeping (top SEO page) |
| `/cleanup-bookkeeping` | QuickBooks cleanup & catch-up |
| `/pricing` | Honest pricing |
| `/faq` | 10 FAQs with accordion + FAQPage schema |
| `/book-a-call` | Motion calendar (the conversion page) |
| `/privacy` | Placeholder privacy policy (linked in footer) |

**Phase 2 (stubbed, `noindex`, not yet in the nav):**

`/services`, `/monthly-bookkeeping`, `/virtual-bookkeeping`, `/cfo-advisory`, `/reviews`, `/contact`, `/referrals`

These resolve with a real headline, a paragraph, and the CTA, and are marked "coming soon" in code comments. They're blocked in `robots.ts` and carry `robots: { index: false }` until you build them out. When one is ready: add real content, remove the `noindex`, remove it from the `disallow` list in `app/robots.ts`, add it to `app/sitemap.ts`, and (if it belongs in the nav) add it to `NAV_LINKS`.

> Note: `/contact` is fully functional already (general-questions form that opens the visitor's mail client). Appointments always go through the Motion embed, never the form.

---

## Brand, colors, and fonts

- **Logo:** the six-petal flower is recreated as inline SVG in `components/FlowerMark.tsx` (crisp at any size). It's used as the header mark, the favicon (`app/icon.svg`), the OG image, and a sparing low-opacity background motif. The `PetalFrame` leaf mask (`components/ui.tsx`) is the recurring visual device.
- **Colors** (`tailwind.config.ts`) — sampled from the two logo PNGs:
  - Navy / petal blues are the **primary** palette (trustworthy, financial). Base navy `#0E2E5C`, petals `#D7E8F5` → `#2F6EA8`.
  - Coral `#E8402A` is the **accent** only: CTAs, links, highlights.
  - `cream` (`#FBF9F6`) and white carry the whitespace.
  - If you want to nudge any color, edit the `colors` block in `tailwind.config.ts` once and it propagates.
- **Fonts** (`app/layout.tsx`, self-hosted via `next/font`): **Fraunces** (humanist display serif) for headlines, **Inter** for body.
- **Motion:** gentle fade/rise on scroll only, and it respects `prefers-reduced-motion` (see `components/Reveal.tsx` and `app/globals.css`). Above-the-fold hero text uses a pure-CSS entrance (`Rise`) so it paints immediately and doesn't hurt LCP.

---

## SEO

- Unique `<title>` and meta description per page, written for each page's target phrase.
- Open Graph + Twitter card metadata; branded OG image generated at `app/opengraph-image.tsx` (flower mark on navy).
- JSON-LD: `AccountingService` (a `LocalBusiness` subtype) sitewide via `lib/schema.tsx`, with name, phone, and `areaServed` (Kansas City metro + United States) and **no street address** (service-area business). `FAQPage` schema on the FAQ page only.
- `app/sitemap.ts` → `sitemap.xml` (Phase 1 routes only). `app/robots.ts` → `robots.txt` (Phase 2 stubs disallowed).
- Set the canonical domain in one place: `SITE_URL` in `lib/constants.ts` (currently `https://starflowerbookkeeping.com`).

---

## Redirect map

The current live site is **essistantkc.com**. Those redirects must be configured **at the old domain / its host** (or wherever `essistantkc.com` is served) — **not** in this repo, since this repo is the new `starflowerbookkeeping.com` site. Use permanent **301** redirects so link equity carries over.

Recommended map:

| Old URL (essistantkc.com) | New URL (starflowerbookkeeping.com) | Type |
| --- | --- | --- |
| `/` | `/` | 301 |
| `/about` | `/about` | 301 |
| `/services` | `/` (until the Phase 2 `/services` page launches, then point here) | 301 |
| `/contact` | `/book-a-call` (the primary goal; the new `/contact` is Phase 2) | 301 |
| `/blog/<post-1-slug>` | `/cleanup-bookkeeping` (or the closest matching service page) | 301 |
| `/blog/<post-2-slug>` | `/bookkeeping-for-contractors` (or the closest matching service page) | 301 |
| anything else | `/` | 301 |

Fill in the two real blog-post slugs and pick the closest new page for each. If you'd rather keep the two posts, we can port them into a `/blog` section in a later phase and redirect old → new one-to-one instead.

> Also point the `essistantkc.com` apex + `www` at the new site (or redirect the whole domain to `starflowerbookkeeping.com`) once DNS for the new domain is live.

---

## Deploy to Vercel

This project is zero-config on Vercel.

**Option A — GitHub + Vercel dashboard (recommended):**

1. Create a new GitHub repo and push:

   ```bash
   git init
   git add .
   git commit -m "Starflower Bookkeeping launch site"
   git branch -M main
   git remote add origin git@github.com:YOUR_USERNAME/starflower-bookkeeping.git
   git push -u origin main
   ```

2. Go to **vercel.com → Add New → Project**, import the repo. Vercel auto-detects Next.js. Framework preset **Next.js**, build command `next build`, output handled automatically. Click **Deploy**.
3. Add the domain: **Project → Settings → Domains → add `starflowerbookkeeping.com`** (and `www`). Point DNS as Vercel instructs (usually an `A` record to `76.76.21.21` for the apex and a `CNAME` to `cname.vercel-dns.com` for `www`, or use Vercel nameservers). HTTPS is automatic.
4. After DNS resolves, confirm the canonical `SITE_URL` in `lib/constants.ts` matches the live domain (it already does), and redeploy if you change it.

**Option B — Vercel CLI:**

```bash
npm i -g vercel
vercel          # first run links/creates the project (accept the Next.js defaults)
vercel --prod   # promote to production
```

**Before you announce it:**

- [ ] Paste the Motion embed (`components/MotionEmbed.tsx`) — see above.
- [ ] Swap the placeholder email (`lib/constants.ts`).
- [ ] Confirm business hours (`lib/constants.ts`).
- [ ] Add Angie's photo(s) (`public/images/` + `app/about/page.tsx`).
- [ ] Replace the placeholder privacy policy (`app/privacy/page.tsx`) with reviewed copy.
- [ ] Configure the `essistantkc.com` 301s (at the old domain).
