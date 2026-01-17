# Pension Quest - Product Requirements Document

> This is the **north star document**. All development decisions reference this PRD.

## Vision

An AI-powered UK pension education platform that helps people understand pensions, retirement planning, and related financial topics through comprehensive guides, calculators, and conversational AI assistance.

## Problem Statement

UK pension information is confusing and fragmented. State Pension rules, workplace pensions, SIPPs, tax relief, and retirement options are spread across government sites, provider websites, and outdated articles. There's no single source that:
- Explains pension concepts in plain English
- Provides structured, comparable information
- Answers follow-up questions conversationally
- Covers all pension types comprehensively
- Is consistently up-to-date with UK regulations

## Target Users

| User Type | Description | Primary Need |
|-----------|-------------|--------------|
| First-Time Savers | Young workers enrolling in workplace pension | Basic understanding of auto-enrolment, contributions |
| Mid-Career Professionals | 30-50 year olds planning retirement | Consolidation, SIPP vs workplace, tax relief optimisation |
| Pre-Retirees | 55+ approaching retirement | Drawdown vs annuity, State Pension timing, tax efficiency |
| Pension Holders | Anyone with existing pensions | Understanding statements, transfer options, inheritance |

## Core Features

### 1. Content Clusters (Guides)

**User Story**: As a pension holder, I want to read comprehensive guides on pension topics so I can understand my options.

**Acceptance Criteria**:
- [x] Pillar pages for each major topic
- [x] Supporting pages with detailed information
- [x] SEO-optimised content with keywords
- [x] Internal linking between related content
- [x] External links to authoritative sources (GOV.UK)

**Completed Clusters (74 pages)**:
- [x] State Pension (10 pages)
- [x] Workplace Pension (11 pages)
- [x] SIPP (9 pages)
- [x] Pension Drawdown (7 pages)
- [x] Pension Annuity (5 pages)
- [x] Retirement Age (6 pages)
- [x] Pension Inheritance (7 pages)
- [x] Final Salary/DB (6 pages)
- [x] Pension Transfers (7 pages)
- [x] Pension Tax Relief (6 pages)

### 2. AI Pension Advisor (Phase 2)

**User Story**: As a user, I want to ask questions about my pension situation and get personalised guidance.

**Acceptance Criteria**:
- [ ] CopilotKit chat interface
- [ ] Knowledge of UK pension regulations
- [ ] Ability to explain content from guides
- [ ] Disclaimer that it's not financial advice
- [ ] Suggestion to consult GOV.UK and professionals

### 3. Voice Interaction (Phase 2)

**User Story**: As a user, I want to speak with the pension advisor hands-free.

**Acceptance Criteria**:
- [ ] Hume EVI voice widget
- [ ] Same knowledge as chat (Single Brain)
- [ ] Clear, concise spoken responses
- [ ] Low latency conversation

### 4. Pension Calculators (Phase 3)

**User Story**: As a user, I want to calculate pension values and scenarios.

**Acceptance Criteria**:
- [ ] State Pension age calculator
- [ ] State Pension amount estimator
- [ ] Drawdown withdrawal calculator
- [ ] Tax relief calculator
- [ ] Retirement income planner

### 5. User Accounts (Phase 2)

**User Story**: As a returning user, I want my preferences saved.

**Acceptance Criteria**:
- [x] Sign up / sign in via Neon Auth
- [x] User dashboard page
- [ ] Save pension details
- [ ] Personalised recommendations
- [ ] Conversation history

## Non-Goals (Explicit Exclusions)

- **Financial Advice**: We provide education, not regulated financial advice
- **Pension Applications**: We explain, but don't process applications
- **Provider Comparison Tables**: We're not a comparison site
- **Investment Recommendations**: We don't recommend specific funds
- **Tax Calculations**: We explain rules but don't calculate personal tax

## Technical Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                         ARCHITECTURE                                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   ┌──────────────┐         ┌──────────────┐         ┌────────────┐ │
│   │   VERCEL     │         │   RAILWAY    │         │   HUME     │ │
│   │  (Next.js)   │         │   (Python)   │         │   (Voice)  │ │
│   │              │ ──────► │   Phase 2    │ ──────► │   Phase 2  │ │
│   │ Frontend     │         │  Pydantic    │         │   EVI      │ │
│   │ + MDX       │         │  AI Agent    │         │            │ │
│   │ + CopilotKit│         │              │         │            │ │
│   │              │         │              │         │            │ │
│   └──────────────┘         └──────────────┘         └────────────┘ │
│          │                                                          │
│          │                                                          │
│          ▼                                                          │
│   ┌──────────────┐                                                  │
│   │   NEON       │                                                  │
│   │  PostgreSQL  │                                                  │
│   │  + Auth      │                                                  │
│   └──────────────┘                                                  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Tech Stack

| Component | Technology | Status |
|-----------|------------|--------|
| Frontend | Next.js 15, React 19, TypeScript | ✓ Complete |
| UI Framework | Tailwind CSS, Framer Motion | ✓ Complete |
| Content | MDX with frontmatter | ✓ Complete |
| AI Chat | CopilotKit + Gemini | ◐ Partial |
| Agent | Pydantic AI | ○ Phase 2 |
| Database | Neon PostgreSQL | ✓ Complete |
| Voice | Hume EVI | ○ Phase 2 |
| Auth | Neon Auth | ✓ Complete |

## Success Metrics

| Metric | Target | Current |
|--------|--------|---------|
| Content pages | 100+ | 74 |
| Monthly organic traffic | 10,000+ | TBD |
| Core Web Vitals | All green | TBD |
| SEO keyword rankings | Top 10 for targets | TBD |

## Milestones

### Phase 1: Content Foundation ✓ COMPLETE

- [x] Next.js 15 project with MDX
- [x] 10 content clusters (74 pages)
- [x] SEO infrastructure (sitemap, robots, meta)
- [x] Legal pages (Privacy, Terms, Cookies, Disclaimer)
- [x] Beta banner with disclaimer
- [x] Cookie consent
- [x] Neon Auth integration
- [x] Deploy to Vercel

### Phase 2: AI & Voice (IN PROGRESS)

- [ ] CopilotKit pension-advisor agent
- [ ] Pydantic AI backend on Railway
- [ ] Hume voice integration
- [ ] User dashboard with saved data
- [ ] Conversation memory (Zep)

### Phase 3: Calculators & Tools

- [ ] State Pension age calculator
- [ ] State Pension amount estimator
- [ ] Drawdown calculator
- [ ] Tax relief calculator
- [ ] Retirement income planner

### Phase 4: Content Expansion

- [ ] NHS Pension dedicated cluster (~8 pages)
- [ ] Teachers Pension dedicated cluster (~6 pages)
- [ ] Self-employed pensions (~5 pages)
- [ ] Pension Contributions cluster (~6 pages)
- [ ] Additional calculators

## Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Pension rule changes | High | Medium | Regular content reviews, date stamps |
| AI giving wrong info | Medium | High | Strong disclaimers, source citations |
| SEO competition | High | Medium | Long-tail keywords, comprehensive content |
| Regulatory concerns | Low | High | Clear "not advice" disclaimers |

## Content Guidelines

### Disclaimers Required

Every page must include:
1. "For informational purposes only"
2. Link to GOV.UK for official information
3. Recommendation to consult financial adviser
4. Note that rules may change

### Authoritative Sources

Always link to:
- GOV.UK (official pension information)
- HMRC (tax-related topics)
- The Pensions Regulator
- NHS Pensions (for NHS content)
- Teachers' Pensions (for teachers content)
- MoneyHelper (pension guidance)

### Tone

- Clear, jargon-free language
- UK-specific (use £, UK terms)
- Helpful but not prescriptive
- Acknowledge complexity where it exists
- Never give personal financial advice

---

## Changelog

| Date | Change | Author |
|------|--------|--------|
| 2026-01-17 | Completed 5 more clusters (32 pages), updated PRD | Claude |
| 2026-01-16 | Created first 5 clusters (42 pages), legal pages, UI components | Claude |
| 2026-01-15 | Initial project setup, pivoted to pension education | Dan |
| 2026-01-15 | PRD created | Dan |
