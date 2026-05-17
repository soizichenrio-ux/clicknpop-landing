# clicknpop-landing

Landing apex publique **clicknpop.fr** (Click'n Pop).

## Stack

- Next.js 16 (App Router) + React 19
- OpenNext for Cloudflare Workers
- Tailwind CSS 4 (CSS-only @theme)
- Fraunces serif + IBM Plex Sans/Mono
- Design System Click'n Pop v3 (Sauge / Paper / Carbone / Ink — pas de Pop Orange ici)

## Architecture

```
clicknpop.fr             → ce repo (landing apex)
www.clicknpop.fr         → redirect 301 → clicknpop.fr
candidat.clicknpop.fr    → repo clicknpop-candidat (app candidat)
entreprise.clicknpop.fr  → à créer (J 21/05)
cfa.clicknpop.fr         → à créer (L 25/05)
```

Le middleware (`src/middleware.ts`) redirige en 301 les anciens chemins
`/auth/*`, `/parcours/*`, `/api/*` vers `candidat.clicknpop.fr/...` pour
préserver les liens entrants existants (emails Supabase, partages).

## Commandes

```bash
npm install
npm run dev      # local Next dev server
npm run deploy   # OpenNext build + Cloudflare deploy
```

## Doctrine visuelle

- Logo officiel (asset PNG `public/assets/logo-clicknpop-officiel.png`),
  intouchable.
- Tagline gravée : "Le recrutement qui fait pop."
- Palette stricte (token CSS) : sauge / sauge-light / sauge-dark / paper /
  paper-warm / carbone / ink / ink-soft.
- **Pop Orange interdit** sur cette page (doctrine archivée 17/05/2026 :
  réservé Score POP™ + matching, pas la marque).
- Animations fade-in cascadées + pop-reveal logo, `prefers-reduced-motion`
  respecté.
