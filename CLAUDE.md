# Pension Quest

> **Cole Medin Methodology**: PRD-first, modular rules, command-ify, context reset, system evolution.

## Quick Start

```bash
# Frontend (Next.js)
npm run dev                          # -> localhost:3000

# Agent (Pydantic AI on Railway) - Phase 2
cd agent && source .venv/bin/activate
uvicorn src.agent:app --reload --port 8000
```

## Project Overview

Pension Quest is a UK pension education platform providing comprehensive guides, calculators, and AI-powered assistance for understanding pensions, retirement planning, and related financial topics.

**Pattern**: Next.js MDX content site + CopilotKit AI assistant + Hume voice (Phase 2)

---

## Key Files

| Purpose | Location |
|---------|----------|
| Main page | `src/app/page.tsx` |
| Layout | `src/app/layout.tsx` |
| CopilotKit provider | `src/components/providers.tsx` |
| CopilotKit runtime | `src/app/api/copilotkit/route.ts` |
| MDX content | `src/content/{cluster}/*.mdx` |
| MDX utilities | `src/lib/mdx.ts` |
| Topic cluster config | `src/lib/topic-clusters.ts` |
| Sitemap | `src/app/sitemap.ts` |
| Robots | `src/app/robots.ts` |
| Beta banner | `src/components/BetaBanner.tsx` |
| Cookie consent | `src/components/CookieConsent.tsx` |
| Hume voice widget | `src/components/HumeWidget.tsx` |
| Neon Auth client | `src/lib/auth/client.ts` |

---

## Content Clusters (MDX)

### Completed Clusters

| Cluster | Pages | Pillar Page |
|---------|-------|-------------|
| State Pension | 10 | `state-pension/index.mdx` |
| Workplace Pension | 11 | `workplace-pension/index.mdx` |
| SIPP | 9 | `sipp/index.mdx` |
| Pension Drawdown | 7 | `pension-drawdown/index.mdx` |
| Pension Annuity | 5 | `pension-annuity/index.mdx` |
| Retirement Age | 6 | `retirement-age/index.mdx` |
| Pension Inheritance | 7 | `pension-inheritance/index.mdx` |
| Final Salary/DB | 6 | `final-salary/index.mdx` |
| Pension Transfers | 7 | `pension-transfers/index.mdx` |
| Pension Tax Relief | 6 | `pension-tax-relief/index.mdx` |
| **Total** | **74 pages** | |

### Outstanding Clusters

| Cluster | Estimated Pages | Priority |
|---------|----------------|----------|
| Pension Contributions | ~6 | Medium |
| Pension Pot | ~8 | Medium |
| NHS Pension (dedicated) | ~8 | High |
| Teachers Pension (dedicated) | ~6 | High |
| Self-Employed Pensions | ~5 | Medium |

---

## MDX Components

| Component | Purpose | Usage |
|-----------|---------|-------|
| `KeyTakeaways` | Bullet list at top of page | `<KeyTakeaways items={[...]} />` |
| `DataTable` | Structured data tables | `<DataTable title="..." columns={[...]} data={[...]} />` |
| `StatGrid` / `StatCard` | Key statistics display | `<StatGrid columns={2}>...</StatGrid>` |
| `Callout` | Info/warning/tip boxes | `<Callout type="info" title="...">...</Callout>` |
| `FAQAccordion` | FAQ with schema.org markup | `<FAQAccordion items={[...]} />` |
| `ExternalLinkCard` | Links to GOV.UK etc | `<ExternalLinkCard href="..." source="GOV.UK" />` |
| `RelatedArticles` | Internal linking | `<RelatedArticles cluster="..." />` |
| `BarChart` | Visual data display | `<BarChart data={[...]} />` |

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 15, React 19, TypeScript, Tailwind |
| Content | MDX with frontmatter (gray-matter, next-mdx-remote) |
| AI Chat | CopilotKit (planned - currently simplified) |
| Voice | Hume EVI (Phase 2) |
| Database | Neon PostgreSQL |
| Auth | Neon Auth (@neondatabase/auth) |
| Hosting | Vercel |
| Repo | github.com/Londondannyboy/pension.quest |

---

## Legal Pages

| Page | Route | Status |
|------|-------|--------|
| Privacy Policy | `/privacy` | ✓ Created |
| Terms of Service | `/terms` | ✓ Created |
| Cookie Policy | `/cookies` | ✓ Created |
| Disclaimer | `/disclaimer` | ✓ Created |

---

## Environment Variables

```bash
# Database
DATABASE_URL=postgresql://...@neon.tech/neondb

# CopilotKit (optional - Gemini)
GOOGLE_API_KEY=...

# Hume EVI (Phase 2)
HUME_API_KEY=...
HUME_SECRET_KEY=...
NEXT_PUBLIC_HUME_CONFIG_ID=...

# Unsplash (images)
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=...

# Neon Auth
NEON_AUTH_BASE_URL=...
```

---

## Commands

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `/prime` | Load project context | Start of session |
| `/plan {feature}` | Create implementation plan | Before coding features |
| `/execute {plan}` | Build from plan (fresh context) | After plan approval |
| `/evolve` | Improve system after bugs | After fixing issues |

---

## Completed Tasks

### Phase 1: Content Foundation ✓
- [x] Next.js 15 project setup with MDX
- [x] Topic cluster architecture
- [x] 10 content clusters (74 pages)
- [x] Sitemap and robots.txt
- [x] Legal pages (Privacy, Terms, Cookies, Disclaimer)
- [x] Beta banner with "not financial advice" warning
- [x] Cookie consent component
- [x] Neon Auth integration
- [x] Deploy to Vercel

### Phase 2: AI & Voice (Outstanding)
- [ ] CopilotKit "pension-advisor" agent
- [ ] Pydantic AI backend on Railway
- [ ] Hume voice integration
- [ ] Calculator components (interactive)
- [ ] User dashboard with saved preferences

### Phase 3: Content Expansion (Outstanding)
- [ ] NHS Pension dedicated cluster
- [ ] Teachers Pension dedicated cluster
- [ ] Self-employed pension content
- [ ] Pension calculators (State Pension, drawdown)
- [ ] Interactive tools

---

## SEO Strategy

Each MDX page includes frontmatter for SEO:

```yaml
---
title: "Page Title for SEO"
description: "Meta description for search results"
keywords: [array, of, keywords]
targetKeyword: "main keyword"
volume: 12000        # Monthly search volume
difficulty: 20       # Keyword difficulty (0-100)
cpc: 1.50           # Cost per click
cluster: "cluster-name"
pillar: true/false
---
```

---

## Session Log

### Jan 17, 2026
- Created Retirement Age cluster (6 pages)
- Created Pension Inheritance cluster (7 pages)
- Created Final Salary/DB cluster (6 pages)
- Created Pension Transfers cluster (7 pages)
- Created Pension Tax Relief cluster (6 pages)
- Total: 32 new pages, 74 total content pages
- All pushed to GitHub

### Jan 16, 2026
- Created State Pension cluster (10 pages)
- Created Workplace Pension cluster (11 pages)
- Created SIPP cluster (9 pages)
- Created Pension Drawdown cluster (7 pages)
- Created Pension Annuity cluster (5 pages)
- Legal pages (Privacy, Terms, Cookies, Disclaimer)
- BetaBanner and CookieConsent components
- Sitemap and robots.txt

### Jan 15, 2026
- Project setup, pivoted from wine project
- Next.js 15 + MDX architecture
- Neon Auth integration
- Initial deployment to Vercel

---

## Important Notes

- **Not financial advice**: All content includes disclaimer directing users to GOV.UK, HMRC, and professional advisers
- **UK-focused**: Content is specifically for UK pensions (State Pension, workplace, SIPP, etc.)
- **Authoritative sources**: Always link to GOV.UK and official sources
- **Mobile-first**: Responsive design, especially for calculators

### Jan 18, 2026 (Evening)
- Fixed package.json name (was incorrectly set to aionysus-wine)
- Re-linked Vercel to correct project
- Cleaned up wine-related file contamination
