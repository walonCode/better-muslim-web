# Better Muslim Web

Marketing and support website for the Better Muslim mobile app. This project is a Next.js App Router site that presents the app, links to its legal/support pages, and serves the public-facing pages needed for app store submission and general web presence.

## What This Project Is

The site is built around a single product story:

- Better Muslim combines Quran reading, Hadith study, and structured Islamic learning.
- The product positioning emphasizes a calm, offline-first, ad-free mobile experience.
- This repo is the website layer, not the mobile app itself.

Current routes:

- `/` landing page for the app
- `/support` public support/contact page
- `/privacy` privacy policy
- `/terms` terms of use
- `/sitemap.xml` generated sitemap
- `/robots.txt` generated robots rules

## Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion for route and section animation
- Biome for formatting and linting

## Site Behavior

The site uses a shared layout with:

- Sticky header with responsive mobile navigation
- Animated page transitions between routes
- Reusable content sections and card components
- A warm editorial visual system built with gradients, serif headings, and soft glass-like panels

The homepage focuses on:

- Hero section with product positioning and app mockup imagery
- Feature cards for Quran, Hadith, and Learn
- Reading experience messaging around bookmarks, progress, themes, and font controls
- Trust cues such as offline-first, ad-free, and no-account-required usage

The support and legal pages are also part of the product surface, especially for app store compliance.

## Project Structure

```text
app/
  layout.tsx        Shared metadata, header, footer, and route transitions
  page.tsx          Main landing page
  privacy/page.tsx  Privacy policy
  terms/page.tsx    Terms of use
  support/page.tsx  Support/contact page
  sitemap.ts        Sitemap generation
  robots.ts         Robots configuration

components/
  legal-page.tsx    Shared legal page wrapper
  site-header.tsx   Header and mobile nav
  site-footer.tsx   Footer links and brand copy
  motion/           Framer Motion helpers
  ui/               Reusable UI primitives

public/
  better-muslim-logo.png
  app_image_cutout.webp
  sw.js
```

## Local Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Available scripts:

- `npm run dev` start the local development server
- `npm run build` create a production build
- `npm run start` run the production server
- `npm run lint` run Biome checks
- `npm run format` format the codebase with Biome

`bun.lock` is present in the repo, so Bun is also an option if that is your preferred package manager.

## Content And Product Assumptions

Based on the current codebase, the site describes the app as:

- Offline-first where practical
- No account required for core use
- Focused on local bookmarks, progress, and display settings
- Backed by third-party Quran and Hadith content sources referenced in the privacy policy

Those claims are encoded directly in the page copy and legal pages, so any product changes should be reflected here as part of release work.

## Deployment Notes

The metadata is configured for `https://bettermuslim.app`, including canonical URL handling, Open Graph defaults, sitemap generation, and robots rules. If the production domain changes, update the site metadata and generated route files accordingly.

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).
