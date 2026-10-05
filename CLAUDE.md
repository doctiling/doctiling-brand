# CLAUDE.md — doctiling-brand

Leaf package of design tokens. Zero runtime dependencies, no build step, raw TS (`main: src/index.ts`).
- Values mirror `globals.css` of doctiling-web; never invent a color here first.
- Gate: `npm run gate` (typecheck · tests). Every change ships as a new tag; consumers pin tags.
- Public repo: nothing but tokens belongs here.
