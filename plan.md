# Better Muslim Web Plan

## Objective

Build the official Better Muslim website as a small, production-ready Next.js app that supports mobile app publishing requirements and gives the product a credible public presence.

Primary outcomes:
- A strong landing page at `/`
- Legal pages at `/privacy` and `/terms`
- A support page at `/support`
- Clean metadata, navigation, footer, and deploy-ready structure

## Current Project State

The repository is a minimal Next.js App Router project with:
- `app/page.tsx` still using the default starter content
- `app/layout.tsx` using default metadata
- Tailwind v4 available through `app/globals.css`
- No reusable components yet
- No legal or support routes yet

This means the work is mostly greenfield and can be implemented cleanly without migration overhead.

## Product Context From The Mobile App

The website should be based on the real Better Muslim app in `/home/walon/Code/better-muslim`, not only on the earlier web brief.

Verified app capabilities:
- Quran reading
  - Surah list and Juz list
  - Arabic text, translation, and transliteration
  - Ayah bookmarks and sharing
  - Continue-reading state
  - Audio support
- Hadith browsing
  - Collections and sections
  - Search
  - Bookmarks and sharing
  - Continue-reading state
- Learn hub
  - Salah
  - Duas
  - Sunnah
  - Islamic Etiquette
  - Learn Arabic
  - Basics of Islam
- Settings
  - Light, dark, and system theme
  - Arabic and English font size controls
  - Translation/transliteration visibility controls

Verified product behavior relevant to the website:
- The app is positioned as offline-first where possible
- Quran and Hadith content are cached on device
- Learn content is bundled locally with cache/refresh behavior
- User state is stored locally on device
  - bookmarks
  - favorites
  - reading progress
  - last-read positions
  - display settings

Verified external content sources:
- Quran: `api.alquran.cloud`
- Hadith: `fawazahmed0/hadith-api`

This should directly shape the landing page copy and the privacy policy.

## Scope

### In Scope

- Replace starter homepage with a real landing page
- Add:
  - `/privacy`
  - `/terms`
  - `/support`
- Add shared site chrome:
  - header/navigation
  - footer
  - reusable content layout
- Add app/site metadata:
  - title
  - description
  - social metadata basics
  - favicon usage
- Add placeholder areas for store links and screenshots
- Prepare the project for static-style deployment on Vercel

### Out of Scope For First Pass

- Blog/CMS
- Account deletion flow
- Multi-language support
- Contact form backend
- Analytics setup
- Custom domain configuration
- Full SEO content strategy beyond essentials

## Route Plan

### `/`

Purpose:
- Introduce Better Muslim clearly
- Explain why the app is useful
- Support future App Store and Play Store listing traffic

Content blocks:
- Hero section
- Short value proposition
- Key features
  - Quran reading with translation, transliteration, bookmarks, and audio
  - Hadith browsing with search and saved reading state
  - Learn section with structured Islamic study modules
  - Offline-first reading experience
  - Reading personalization through settings
- Optional screenshot/mockup section
- Download CTA section
- Footer links to legal/support pages

Acceptance criteria:
- The page explains the app within the first screenful
- CTAs are visible and easy to update later
- Layout works well on mobile and desktop

### `/privacy`

Purpose:
- Provide a publishable privacy policy URL for app stores

Content blocks:
- Intro and effective date
- Data collected
- Local storage/cached content behavior
- Third-party services or APIs
- Permissions used
- Data retention/deletion explanation
- Children/privacy disclaimer if needed
- Contact information

Acceptance criteria:
- The page is readable and complete enough for store submission
- Policy language matches the actual app behavior
- Contact details are included

### `/terms`

Purpose:
- Define terms of use and reduce ambiguity around liability/content

Content blocks:
- Acceptance of terms
- Intended use
- Content disclaimer
- Intellectual property
- No warranty / limitation of liability
- Changes to the service
- Contact information

Acceptance criteria:
- The page reads like a real public legal page, not placeholder text
- It includes religious/educational content disclaimers where appropriate

### `/support`

Purpose:
- Provide a support URL for app stores and a clear contact path for users

Content blocks:
- Support intro
- Contact email
- Optional FAQ
- Expected response framing

Acceptance criteria:
- A real contact email can be inserted easily
- The page works as a standalone support URL

## Recommended Information Architecture

### Shared Layout

- Header
  - Logo or text mark
  - Links: Home, Privacy, Terms, Support
- Main content container
- Footer
  - App name
  - Legal/support links
  - Copyright line

### Reusable Building Blocks

- `SiteHeader`
- `SiteFooter`
- `Section`
- `PageHero`
- `LegalPage` or shared legal prose wrapper

Keeping these reusable will make later additions like `/delete-account` or `/blog` straightforward.

## Content Decisions Needed

These values should be supplied before final publishing:
- Official app tagline
- Final app description copy
- Play Store URL
- App Store URL
- Support email
- Legal contact name or business name
- Whether analytics, crash reporting, ads, or external SDKs are used
- Exact permissions the mobile app requests
- Whether screenshots or device mockups are available

If any of these are still unknown, the codebase should use clear placeholders that are easy to replace.

Already known from the mobile app:
- The app currently emphasizes Quran, Hadith, and Islamic learning
- It stores reading-related data locally on device
- It uses remote Quran and Hadith APIs plus bundled Learn content

Still needs explicit confirmation before publishing:
- Whether any analytics or crash SDKs are present outside the currently inspected code
- The final support email and business/legal identity
- Final store URLs
- Whether any user account features will be added soon

## Implementation Plan

### Phase 1: Foundation

- Update site metadata in `app/layout.tsx`
- Define the visual direction in `app/globals.css`
- Add shared layout/navigation/footer components
- Remove the default starter content

Deliverable:
- A cohesive base shell for all routes

### Phase 2: Landing Page

- Build a mobile-first homepage in `app/page.tsx`
- Add hero, features, and CTA sections
- Base copy on the actual app strengths:
  - respectful reading experience
  - offline-first access
  - Quran, Hadith, and Learn in one app
  - theme-aware and reading-friendly settings
- Add placeholder store buttons and screenshot area

Deliverable:
- A publishable landing page with real product framing

### Phase 3: Legal Pages

- Create `app/privacy/page.tsx`
- Create `app/terms/page.tsx`
- Use shared legal content styling for readability
- Reflect the app's current storage and API behavior accurately

Deliverable:
- Two stable legal URLs ready for review and final copy edits

### Phase 4: Support Page

- Create `app/support/page.tsx`
- Add contact instructions and optional FAQ

Deliverable:
- A support URL suitable for App Store and Play Store submission

### Phase 5: Polish and Readiness

- Tighten metadata and page titles
- Verify responsive behavior
- Run formatting/lint checks
- Replace placeholders with final values where available
- Update `README.md` with project-specific instructions

Deliverable:
- A deployable first version ready for content finalization and hosting

## Technical Notes

### Framework

Use the existing stack:
- Next.js App Router
- React 19
- Tailwind CSS v4

### Styling Direction

The current starter styling is generic. The site should move to:
- Calm, warm, credible colors
- Intentional typography
- A clean Islamic-friendly feel without visual clutter
- Responsive spacing and readable long-form legal text

### SEO/Metadata

Base metadata should include:
- Title: `Better Muslim - Quran, Hadith & Islamic Learning App`
- Description aligned with the landing page value proposition
- Open Graph basics
- Proper page-specific titles for privacy, terms, and support

### Deployment

Target:
- Vercel

Expected commands:
- `npm run build`
- `npm run lint`

## Risks and Dependencies

### Content Risk

The largest risk is publishing legal copy that does not match the mobile app’s real data behavior. Privacy and permissions text must be verified against the app before submission.

### Branding Risk

If no logo, screenshots, or store links exist yet, the first pass should use tasteful placeholders without pretending those assets are final.

### Product Accuracy Risk

Claims on the landing page must match actual app functionality. Feature sections should stay conservative until verified.

## Definition of Done

The first version is done when:
- `/` is a real landing page
- `/privacy` exists with reviewed policy text
- `/terms` exists with reviewed terms text
- `/support` exists with usable contact information
- Navigation and footer connect all core pages
- Metadata is updated from the Next.js defaults
- The project builds and passes lint checks

## Suggested File Targets

- `app/layout.tsx`
- `app/page.tsx`
- `app/privacy/page.tsx`
- `app/terms/page.tsx`
- `app/support/page.tsx`
- `app/globals.css`
- `components/...` for shared UI, if introduced
- `README.md`

## Immediate Next Step

Implement Phase 1 and Phase 2 first:
- establish the shared layout
- replace the default homepage
- then add legal and support routes

This sequence produces visible value quickly while creating the structure the remaining pages need.
