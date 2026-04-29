# GEN AICRAFTS LLC — Corporate Website

Static marketing site for [genaicrafts.com](https://www.genaicrafts.com).

Built with [Astro](https://astro.build/) + [Tailwind CSS v4](https://tailwindcss.com/). No client-side JavaScript framework, no analytics, no cookies. Hosted on Cloudflare Pages.

## Stack

- Astro 6 (static output)
- Tailwind CSS 4 via `@tailwindcss/vite`
- TypeScript strict
- Node 22+

## Local development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to ./dist
npm run preview   # preview the production build locally
```

## Where things live

| What | Where |
|------|-------|
| Pages (one file per route) | `src/pages/` |
| Shared layout | `src/layouts/BaseLayout.astro` |
| Header / Footer | `src/components/` |
| Company info (single source of truth) | `src/data/company.ts` |
| Global styles (`@import "tailwindcss"`) | `src/styles/global.css` |
| Static assets | `public/` |

**To change company name, address, phone, or email anywhere on the site, edit only `src/data/company.ts`.**

## Deployment — Cloudflare Pages

1. Push this repo to GitHub.
2. Cloudflare → Workers & Pages → **Create** → **Pages** → **Connect to Git**.
3. Pick the repo. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Node version: `22`
4. After the first deploy succeeds: **Custom domains** → add `genaicrafts.com` and `www.genaicrafts.com`. DNS is auto-managed because the domain is on Cloudflare.
