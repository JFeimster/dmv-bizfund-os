# DMV BizFund OS Launch Checklist

## Local Setup

- Install Node.js 20+
- Run `npm install`
- Run `npm run dev`
- Open `http://localhost:3000`

## Build Test

- Run `npm run typecheck`
- Run `npm run build`

## Route Test

Check these routes:

- `/`
- `/locations`
- `/locations/washington-dc-business-funding`
- `/industries`
- `/industries/contractor-business-funding-northern-virginia`
- `/use-cases`
- `/use-cases/emergency-working-capital`
- `/referral-partners`
- `/referral-partners/bank-manager-referral-guide`
- `/tools`
- `/tools/dmv-funding-readiness-scorecard`
- `/directory`
- `/newsletter`
- `/apply`
- `/partner`

## CTA Test

Verify:

- Check Funding Options routes to `/apply`
- Get Your Funding Readiness Score routes to `/tools/dmv-funding-readiness-scorecard`
- Become a Referral Partner routes to `/partner`
- Newsletter CTA routes to `/newsletter`

## SEO Test

Verify:

- Page titles are unique
- Meta descriptions are unique
- Canonicals use `dmv.bizfundos.com`
- Sitemap loads at `/sitemap.xml`
- Robots loads at `/robots.txt`

## Mobile Test

Test:

- Header
- Hero CTAs
- Cards
- Detail pages
- Footer
- Apply page
- Partner page

## Vercel Deploy

- Push repo to GitHub
- Import project into Vercel
- Framework preset: Next.js
- Build command: `npm run build`
- Output: default Next.js
- Add custom domain later: `dmv.bizfundos.com`

## Forms Later

Replace placeholders with:

- Tally
- HubSpot
- Native form
- n8n webhook
- CRM source tracking
