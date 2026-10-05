# The agent harness of doctiling-brand

Same definitions as <https://raalzate.github.io/agent-harness/>, scaled to a two-file leaf package.
**A rule without a command that makes it fail is a suggestion**: every row names that command.

## The gate

`npm run gate` (`scripts/gate.sh`) — the human, the agent (`Stop` hook, `gate-runner`, `/gate`) and CI
(`.github/workflows/gate.yml`, also on tags) run the same line.

| Signal | Command | What it catches that no other signal sees |
|---|---|---|
| harness self-test | `node scripts/harness-selftest.mjs` | a hook that no longer bites (one sample derived from every rule), a guard that bites innocent work, the Stop hook dead in a worktree, a gate signal without `# why:`, a gotcha without its mechanism, CI not running the gate, `core.hooksPath` unset, a stale STATUS.md |
| docs link-check | `node scripts/docs-linkcheck.mjs` | a `docs/...` pointer to a file that is not tracked |
| typecheck | `npm run typecheck` | type errors (vitest never type-checks) |
| tests | `npm test` | palette shape: same keys in light/dark, every token a 6-digit hex |

## Hooks

Generic files, byte-identical with doctiling-web / -cli / -mobile (doctiling-workspace
`scripts/harness-drift.sh` fails on drift); everything repo-specific is in `.claude/harness.config.json`.

| Event | Hook | What it does |
|---|---|---|
| SessionStart | `session-start.mjs` | prints branch, HEAD and `STATUS.md`; warns if the pre-commit is not installed |
| PreToolUse Write\|Edit | `protected-paths.mjs` | `.env*`, `package-lock.json`, `.git/` |
| PreToolUse Bash | `bash-guard.mjs` | `--no-verify`, `push --force`, `reset --hard`, `git add .` |
| PostToolUse Write\|Edit | `post-edit-check.mjs` | `tsc --noEmit` after editing `src/`, `tests/`, `scripts/`; arms the Stop marker |
| Stop | `gate-stop.mjs` | refuses to finish with code edited and no green gate since |

`.githooks/pre-commit` applies the protected-paths list to what is staged. Install once per clone:
`npm run hooks:install`. Subagents: `gate-runner`, `reviewer`. Commands: `/gate`, `/lesson`, `/harness-audit`.

## Memory

`CLAUDE.md` (conventions) · `CONSTITUTION.md` (principles with strength and mechanism) · `STATUS.md`
(verified state, cites the gated commit) · `docs/gotchas.md` (incidents, `/lesson`).

## Known debt

- P3 and P6 are enforced in the consumers (web, mobile), not here; this repo cannot see them.
