# CLAUDE.md — doctiling-brand

Leaf package of design tokens. Zero runtime dependencies, no build step, raw TS (`main: src/index.ts`).
- Values mirror `globals.css` of doctiling-web; never invent a color here first.
- Gate (BLOCKING): `npm run gate` (harness self-test · docs link-check · typecheck · tests). Every change ships as a new tag; consumers pin tags.
- Agent harness: `docs/agent-harness.md` (hooks, protected paths, Stop gate), principles in `CONSTITUTION.md`, verified state in `STATUS.md`, incidents in `docs/gotchas.md` via `/lesson`. Install the pre-commit once per clone: `npm run hooks:install`.
- Public repo: nothing but tokens belongs here.
