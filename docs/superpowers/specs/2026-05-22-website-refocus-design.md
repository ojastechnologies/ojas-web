# Ojas Technologies Website Refocus — Design Spec

## Context

The current website positions Ojas Technologies as a generalist digital agency (web dev, mobile, graphics design, digital marketing, SEO). The goal is to narrow positioning to what actually differentiates the company: **Microsoft-ecosystem software engineering** (`.NET, Blazor, MAUI, React, Azure`) with **IT outstaffing** as the core business model and **AI-adept workflows** as a quality/velocity differentiator.

Key insight from the portfolio: SearchMed proves Blazor + MAUI + Azure + AI feature experience. LeanLaw proves microservices + hybrid cloud. These are rare skills in the outstaffing market.

## What Gets Removed

- Graphics Design (service + content)
- Digital Marketing (service + content)
- SEO Optimization (service + content)
- "Features" section on homepage (absorbed into 3-pillar structure)
- "Services" as a generic 6-card grid
- All remaining `HiLightBulb` badge icons (already partially done)
- "Crafting Digital Experiences" tagline (already replaced)

## New Site Architecture

### Pages (5 total)

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | `app/page.tsx` | Homepage: hero, 3 pillars, tech bar, portfolio preview, testimonials, contact |
| `/portfolio` | `app/portfolio/page.tsx` | 4 case studies (already exists, trim/reorder) |
| `/hire-developers` | `app/hire-developers/page.tsx` | Outstaffing deep-dive: process, pricing, tech matrix, team composition |
| `/about` | `app/about/page.tsx` | Company story, AI-adept workflow, Microsoft tech DNA, Nepal advantage |
| `/contact` | `app/contact/page.tsx` | Standalone contact form + map + info |

### Homepage Section Order

1. **Navbar** — existing, updated links
2. **Hero** — rewritten: "Dedicated .NET, Blazor & React Teams from Nepal — AI-Adept, Azure-Ready"
3. **3 Pillars** — replaces Features:
   - Outstaffing & Dedicated Teams
   - Custom SaaS & Platform Development
   - Cloud & DevOps
4. **Tech credibility bar** — .NET Core / Blazor / MAUI / React / Azure / Docker (logos, no cards)
5. **Portfolio preview** — 2 featured projects only, with AI/ML callouts
6. **Testimonials** — already built
7. **Contact** — existing section, kept
8. **Footer** — existing, with Privacy/Terms links (already fixed)

### Navbar Links (Update)

Current: Home, About, Features, Services, Portfolio, Contact
New: Home, Hire Developers, Portfolio, About, Contact

All pointing to full pages (not anchor links except homepage anchors).

## Content Architecture

### Home Page — Hero
- Headline: "Dedicated .NET, Blazor & React Teams from Nepal"
- Sub: "AI-Adept, Azure-Ready"
- Descriptive text focused on Microsoft ecosystem + outstaffing
- Two CTAs: "Hire Developers" → /hire-developers | "See Our Work" → /portfolio

### Home Page — 3 Pillars (replace current Features section)

1. **IT Outstaffing & Dedicated Teams** — Embed .NET/Blazor/MAUI/React engineers as your remote team. AI-adept workflows deliver quality faster.
2. **Custom SaaS & Platform Development** — Full-stack product engineering: healthcare, legal-tech, enterprise. HIPAA-compliant, Azure-native.
3. **Cloud & DevOps** — Azure App Services, AKS, Docker, CI/CD. Hybrid cloud experience (Azure + Digital Ocean).

Each pillar has: icon + title + 2-sentence description + link to relevant page.

### Home Page — Tech Bar
Horizontal logo strip: Microsoft .NET, Blazor, .NET MAUI, React, Azure, Docker, Kubernetes, TypeScript

### Home Page — Portfolio Preview
Only SearchMed and LeanLaw. Each shown with: logo, 2-line description calling out AI/Blazor/MAUI, link to full case study.

### /hire-developers Page
- How it works (4-step process: Share requirements → Team matching → Onboarding → Ongoing delivery)
- Technology expertise matrix (.NET Core, Blazor, MAUI, React, Azure, Docker, K8s, MSSQL, TypeScript)
- AI-adept workflow section: how we use AI agents for code quality, reviews, documentation
- Engagement models (monthly retainer, dedicated team, project-based)
- Timezone overlap explanation (NPT ↔ EST/PST)
- Team composition examples (example 1: 2x .NET + 1x React + 1x DevOps, etc.)
- CTA: Contact form or Calendly (if desired)

### /about Page
- Founded 2020, Kathmandu, Nepal
- Microsoft ecosystem specialists — .NET, Blazor, MAUI core DNA
- AI-adept workflow explained: "Every developer at Ojas leverages AI agents for code generation, review, and testing — ensuring consistent quality and faster delivery"
- Stats: 150+ projects, 98% satisfaction, 20+ team, 10+ countries
- CTA: View portfolio or hire developers

### /portfolio Page (existing, trim)
- Keep all 4 projects
- Add outcome metrics (already done)
- Reorder narrative to emphasize AI/ML features where present
- Remove vision sign advertising or demote it (HTML/CSS/JS doesn't support the Microsoft narrative)

### /contact Page (standalone)
- Reuse existing Contact component
- Add direct URL access (no anchor dependency)
- Metadata for SEO

## SEO Strategy

Each page targets specific keywords:

| Page | Primary Keywords |
|------|-----------------|
| `/` | IT outstaffing Nepal, .NET development team, Blazor developers |
| `/hire-developers` | hire .NET developers, hire Blazor developers, dedicated development team Nepal, IT staff augmentation |
| `/portfolio` | Blazor healthcare platform, .NET MAUI case study, HIPAA compliant software, legal billing software |
| `/about` | software company Kathmandu, .NET development Nepal, Microsoft technology partner |
| `/contact` | contact Ojas Technologies |

Metadata: Every page gets unique title, description, and OpenGraph tags.

## Visual Design

- Style: Trust & Authority (from UI/UX Pro Max design system)
- Colors: Navy primary (#0F172A), Accent (#0369A1), Clean white background (#F8FAFC)
- Existing blue/sky gradient kept for brand continuity but toned down
- Font: Geist Sans (already configured, just fixed the Arial override)
- Cards: glassmorphism pattern kept (already working well)

## Files to Create

- `app/hire-developers/page.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`

## Files to Modify

- `app/page.tsx` — replace Features/Services with 3 pillars + tech bar + portfolio preview
- `app/components/navbar.tsx` — update NAV_ITEMS links
- `app/constants.ts` — update NAV_ITEMS, remove Graphics/SEO/Marketing from SERVICES_LIST
- `app/components/mainLayout/hero.tsx` — further refine messaging if needed
- `app/sitemap.ts` — add new routes
- `app/globals.css` — any remaining cleanup

## Files to Delete (if they exist from aborted earlier work)

- `app/services/page.tsx` (was partially created, now replaced by hire-developers)
- `app/services/ServicesPageContent.tsx` (if created)

## Verification

1. `npm run build` passes with no TypeScript errors
2. All 5 routes render: `/`, `/portfolio`, `/hire-developers`, `/about`, `/contact`
3. Navbar links navigate correctly
4. Footer Privacy/Terms links work
5. Sitemap includes all routes
6. Each page has unique metadata (title, description)
7. Homepage scrolls correctly on mobile
8. No remaining references to Graphics Design, Digital Marketing, SEO in visible content
