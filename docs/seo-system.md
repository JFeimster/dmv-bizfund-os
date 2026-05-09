# SEO System

## Metadata Strategy

Each statically generated page should use:

- Unique SEO title
- Unique meta description
- Canonical URL
- Open Graph title
- Open Graph description
- Open Graph URL

The helper lives in:

`lib/seo.ts`

## Title Patterns

Homepage:

`DMV BizFund OS | The DMV Funding Resource Center powered by Moonshine Capital`

Location pages:

`[Location] Business Funding | DMV BizFund OS`

Industry pages:

`[Industry] Funding | DMV BizFund OS`

Use-case pages:

`[Use Case] for Local Businesses | DMV BizFund OS`

Referral partner pages:

`[Partner Type] Referral Guide | DMV BizFund OS`

Tool pages:

`[Tool Name] | DMV BizFund OS`

## Canonical URL Pattern

Base domain:

`https://dmv.bizfundos.com`

Example:

`https://dmv.bizfundos.com/locations/washington-dc-business-funding`

## Sitemap

The sitemap is generated in:

`app/sitemap.ts`

It includes static routes and JSON-generated dynamic routes.

## Robots

The robots file is generated in:

`app/robots.ts`

## Schema Recommendations

The repo includes schema helpers in:

`lib/schema.ts`

Recommended schema types:

- Organization
- LocalBusiness if a physical/local entity is later finalized
- FAQPage for FAQ-rich pages
- BreadcrumbList for detail templates
- Article for future long-form guides

## FAQ Schema

Use FAQ schema on pages with strong Q&A sections. Avoid stuffing. Keep answers compliance-safe.

## Internal Linking

Location pages should link to:

- Relevant industries
- Relevant tools
- Emergency working capital
- Apply page

Industry pages should link to:

- Relevant use cases
- Tools
- Apply page

Use-case pages should link to:

- Relevant industries
- Tools
- Apply page

Referral partner pages should link to:

- Partner onboarding
- Apply page
- Scorecard

Tool pages should link to:

- Apply
- Newsletter
- Related guides
