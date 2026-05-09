# DMV BizFund OS

<img width="1774" height="887" alt="DMV BizFund OS thumbnail showing the DMV Funding Resource Center powered by Moonshine Capital" src="https://github.com/user-attachments/assets/2868f5db-1277-4abe-b34f-f8713d539618" />

DMV BizFund OS is the first Vercel-ready local market instance of BizFund OS.

Public descriptor:

**The DMV Funding Resource Center powered by Moonshine Capital.**

Tagline:

**Business funding guidance for DMV owners who need options — not the bank runaround.**

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- JSON-backed content
- Static-first rendering
- Vercel hosting

## Local Development

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Build

```bash
npm run typecheck
npm run build
```

## Deploy to Vercel

1. Create a GitHub repo.
2. Push this project to GitHub.
3. Open Vercel.
4. Import the GitHub repo.
5. Use the Next.js preset.
6. Build command: `npm run build`.
7. Deploy.
8. Add `dmv.bizfundos.com` as the custom domain when ready.

## Data Files

Edit these files to expand the site:

- `data/market-config.json`
- `data/locations.json`
- `data/industries.json`
- `data/use-cases.json`
- `data/referral-partners.json`
- `data/tools.json`
- `data/directory.json`
- `data/faqs.json`

## CTA Placeholders

Current CTA routes:

- Funding application: `/apply`
- Funding readiness scorecard: `/tools/dmv-funding-readiness-scorecard`
- Partner signup: `/partner`
- Newsletter: `/newsletter`

Later, replace placeholder sections with:

- Tally form
- HubSpot form
- Native form
- n8n webhook
- CRM routing
- Affiliate owner tracking

## SEO Checklist

- Unique title per page
- Unique meta description per page
- Canonical URLs using `https://dmv.bizfundos.com`
- Sitemap at `/sitemap.xml`
- Robots at `/robots.txt`
- Internal links between locations, industries, use cases, tools, apply, and partner pages
- Compliance-safe language on funding pages

## Performance Checklist

- Keep images optimized when added
- Avoid heavy animation libraries
- Keep dependencies minimal
- Use static JSON content
- Test mobile layout before launch

## Troubleshooting

### JSON import errors

Make sure `resolveJsonModule` is enabled in `tsconfig.json`.

### Dynamic page 404

Confirm the slug exists in the relevant JSON file.

### Vercel build issue

Run locally first:

```bash
npm run typecheck
npm run build
```

### CTA not going to the right place

Check `data/market-config.json` and component links.

### New market clone still says DMV

Update `data/market-config.json` and replace DMV-specific records in the content JSON files.
