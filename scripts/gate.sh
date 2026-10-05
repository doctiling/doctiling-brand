#!/bin/sh
# The brand gate. Consumers pin tags, so a red tag never reaches them: CI runs this on every tag too.
set -e
ROOT=$(cd "$(dirname "$0")/.." && pwd)
cd "$ROOT"
STEP=0
run() { STEP=$((STEP + 1)); echo ""; echo "── gate [$STEP] $1"; shift; "$@"; }

# why: a broken hook, a rule that no longer bites or a stale STATUS.md fail silently.
run "harness self-test" node scripts/harness-selftest.mjs
# why: a doc pointer to a moved file sends the agent to read nothing.
run "docs link-check" node scripts/docs-linkcheck.mjs
# why: vitest transpiles per file and never type-checks.
run "typecheck" npm run typecheck
# why: palette shape (same keys light/dark, 6-digit hex) — what consumers index into.
run "tests (palette shape)" npm test

# --git-common-dir, not .git: in a worktree .git is a file.
rm -f "$(git -C "$ROOT" rev-parse --git-common-dir)/gate-dirty"
echo ""
echo "gate: GREEN"
