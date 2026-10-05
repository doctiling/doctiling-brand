# Constitution — doctiling-brand

**Version 1.0.0** · Principles of the design-token package shared by doctiling-web and doctiling-mobile.
Every principle states its strength: **BLOCKING** names the command that fails; otherwise it is
**REVIEW** (judged by the `reviewer` subagent and the human). Amendments bump the version, in their own
commit.

## P1 — Nothing ships without a green gate · BLOCKING

*Mechanism:* `npm run gate` (`scripts/gate.sh`: harness self-test · docs link-check · typecheck ·
tests), the `Stop` hook, and `.github/workflows/gate.yml` on every push, PR and `v*` tag.

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

## P7 — Conduct on error · REVIEW

Read the real output before retrying; after 2 failed attempts on the same error, stop and escalate.
