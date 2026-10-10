# CLAUDE.md — doctiling-brand

Leaf package of design tokens. Zero runtime dependencies, no build step, raw TS (`main: src/index.ts`).
- Values mirror `globals.css` of doctiling-web; never invent a color here first.
- Gate (BLOCKING): `npm run gate` (`node scripts/gate.mjs`; signals in `.claude/harness.config.json` →
  `gate.signals`). Every change ships as a new tag; consumers pin tags.
- Agent harness: [raalzate/agent-harness](https://github.com/raalzate/agent-harness) — this repo's harness
  in `docs/arnes.md`, principles in `CONSTITUTION.md`, verified state in `STATUS.md`, incidents in
  `docs/gotchas.md` via `/lesson`. Install the git hooks once per clone: `npm run hooks:install`.
  Generic harness files are byte-identical with upstream: only `.claude/harness.config.json` is repo-specific.
- Commits touching code (`src/`, `tests/`, `scripts/`, `.claude/`, `.githooks/`, `.github/`) reference
  `#N` or carry a `no-issue: <why>` line; branches are `type/what`; main only by PR.
- Public repo: nothing but tokens belongs here.
