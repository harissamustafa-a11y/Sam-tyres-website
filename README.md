# Sam Tyres website

One-page site for Sam Tyres, built with Vite, React, TypeScript and Tailwind CSS.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## Edit the shop's details

Phone, email, address, opening hours, stats and reviews are all in
`src/data/business.ts`. Every value marked `TODO` is a placeholder and needs
replacing before the site goes live (the reviews especially: use real ones).

## Where the design came from

- Design system (colours, type, layout rules) from the UI UX Pro Max skill in
  `.claude/skills/ui-ux-pro-max`, with charcoal used in place of its suggested green.
- The hero and services grid are adapted from 21st.dev components; credits are
  at the top of `src/components/ui/hero-section.tsx` and `service-grid.tsx`.
