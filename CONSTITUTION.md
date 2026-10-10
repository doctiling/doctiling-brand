# Constitution — doctiling-brand

**Version 2.0.0** · Principles of the design-token package shared by doctiling-web and doctiling-mobile.
Every principle states its strength: **BLOCKING** names the command that fails; otherwise it is
**REVIEW** (judged by the `reviewer` subagent and the human). Amendments bump the version, in their own
commit.

2.0.0 — the harness is now the config-driven [agent-harness](https://github.com/raalzate/agent-harness)
(`scripts/gate.mjs`, `repo-lint`, `cycle-check`, `commit-msg`/`pre-push`); P7 and P8 added.

## P1 — Nothing ships without a green gate · BLOCKING

An **omitted** signal is not green.

*Mechanism:* `npm run gate` (`scripts/gate.mjs`, signals in `.claude/harness.config.json`), the `Stop`
hook (`.claude/hooks/gate-stop.mjs`), and `.github/workflows/ci.yml` on every push, PR and `v*` tag.

## P2 — Assertion integrity · REVIEW

An assertion is never adjusted to make a test pass; a wrong test is fixed in its own commit.

## P3 — Values come from the web · BLOCKING in doctiling-web

The hex values mirror the HSL vars of doctiling-web `src/app/globals.css`; a color is never invented here.

*Mechanism:* `tests/lib/brand-tokens.test.ts` in doctiling-web (fails when the pinned tokens drift
from `globals.css`). Here: REVIEW.

## P4 — Leaf package: zero dependencies, raw TS · BLOCKING (shape) / REVIEW (deps)

*Mechanism:* `tests/tokens.test.ts` (both palettes expose the same keys, every token is a 6-digit hex).
No runtime dependency and no build step is REVIEW.

## P5 — Public repo: only tokens · REVIEW

Nothing internal, nothing secret. `.env*` is a protected path for the agent and in pre-commit.

## P6 — Consumers pin tags · BLOCKING in doctiling-mobile / REVIEW here

Every change ships as a new `vX.Y.Z` tag with the `version` bumped; consumers pin the HTTPS tarball.

*Mechanism:* `tests/brand-pin.test.ts` in doctiling-mobile (fails on a local copy or a moving branch).

## P7 — Protected paths · BLOCKING

`.env*`, `package-lock.json` (agent only), `.git/` and `node_modules/` are not edited by the agent.

*Mechanism:* `.claude/hooks/protected-paths.mjs` + `.githooks/pre-commit`.

## P8 — Work is recorded and enters by PR · BLOCKING

*Mechanism:* `.githooks/commit-msg` (`#N` or `no-issue: <why>` on code commits) and
`.githooks/pre-push` (`main` only by pull request) + `scripts/cycle-check.mjs` (branch names).

## P9 — Conduct on error · REVIEW

Read the real output before retrying; after 2 failed attempts on the same error, stop and escalate.
