# White-Label Framework

## Master System

BizFund OS is the repeatable machine.

## Flagship Market

DMV BizFund OS lives at:

`dmv.bizfundos.com`

## Future Instances

- `dc.bizfundos.com`
- `nova.bizfundos.com`
- `maryland.bizfundos.com`
- `atlanta.bizfundos.com`
- `dallas.bizfundos.com`
- `phoenix.bizfundos.com`

## Naming Pattern

`[Market] Funding Resource Center powered by BizFund OS`

Examples:

- Atlanta Funding Resource Center powered by BizFund OS
- Dallas Funding Resource Center powered by BizFund OS
- Phoenix Funding Resource Center powered by BizFund OS

## Files to Change for a New Market

Start with:

- `data/market-config.json`
- `data/locations.json`
- `data/industries.json`
- `data/use-cases.json`
- `data/referral-partners.json`
- `data/tools.json`
- `data/directory.json`
- `data/faqs.json`

## Required Market-Specific Fields

- `brandName`
- `marketName`
- `marketSlug`
- `domain`
- `primaryRegion`
- `primaryCity`
- `locations`
- `counties`
- `suburbs`
- `industries`
- `useCases`
- `referralPartnerCategories`
- `newsletterName`
- `sourceTrackingId`
- `ownerProfile`

## Affiliate Ownership Fields

Use `ownerProfile` for affiliate or agent assignment.

Suggested fields:

- Name
- Email
- CRM owner ID
- Source tracking ID
- Market ownership notes
- Partner onboarding status

## What Stays Global

- BizFund OS master system name
- Compliance-safe language
- CTA hierarchy
- Page templates
- Route structure
- Component system
- SEO utilities
- Schema utilities

## What Becomes Local

- Location data
- Industry priorities
- Local economic anchors
- Newsletter name
- Directory categories
- Referral partner categories
- Lead magnets
- Source tracking IDs
- Affiliate owner
