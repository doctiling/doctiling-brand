# The agent harness of doctiling-brand

This repo carries [raalzate/agent-harness](https://github.com/raalzate/agent-harness)
(<https://raalzate.github.io/agent-harness/>): generic hooks and scripts, byte-identical with upstream
and with every doctiling repo that carries the harness, and one repo-specific file, `.claude/harness.config.json`.
The list of generic files and the drift check live in doctiling-workspace: <!-- linkcheck:ignore -->
`scripts/harness-files.txt` and `node scripts/harness-drift.mjs` there. <!-- linkcheck:ignore -->
Every row names the command that fails. If this page says something no command enforces, that is the bug.

## The gate

`npm run gate` (`node scripts/gate.mjs`) — the human, the agent (`Stop` hook, `gate-runner`, `/gate`)
and CI (`.github/workflows/ci.yml`, also on `v*` tags) run the same line. Signals are declared in
`gate.signals`, each with its `why`.

| Signal | Command | What it catches that no other signal sees |
|---|---|---|
| harness self-test | `node scripts/harness-selftest.mjs` | a hook that no longer bites, a guard that bites innocent work, a config key pointing at nothing |
| docs link-check | `node scripts/docs-linkcheck.mjs` | a doc pointer to a file that does not exist |
| convention lint | `node scripts/repo-lint.mjs` | the rules of this repo no compiler sees (`--rules` lists them) |
| artifacts in place | `node scripts/artifacts-check.mjs` | a spec or plan loose here (specs live in doctiling-web) |
| typecheck | `npm run typecheck` | type errors (vitest never type-checks) |
| tests (palette shape) | `npm test` | same keys in light/dark, every token a 6-digit hex |
| code index (codegraph) | `codegraph status` | a stale index; **omitted** until `codegraph init` |
| harness cost (hook latency) | `node scripts/hooks-timing.mjs` | a hook that got slow enough to be disabled |

An **omitted** signal is not green, and `fast` mode is not a deliverable.

## The hooks

| Event | Hook | What it does |
|---|---|---|
| SessionStart | `session-start.mjs` | prints branch, HEAD, uncommitted changes and `STATUS.md` |
| UserPromptSubmit | `ask-first.mjs` | a question is answered, not acted on |
| UserPromptSubmit | `sdd-router.mjs` | puts the right criteria in front of the agent by request size (`sdd.routes`) |
| UserPromptSubmit | `graph-first.mjs` | index first, files after (`graph`) |
| PreToolUse | `action-guard.mjs` | no repo edits while the turn is a question |
| PreToolUse | `protected-paths.mjs` | `.env*`, `package-lock.json` (agent only), `.git/`, `node_modules/`, `.codegraph/` |
| PreToolUse | `reuse-guard.mjs` | a hex literal in `src/` outside `src/tokens.ts` (the palette has one home) |
| PreToolUse | `bash-guard.mjs` | skipping verification hooks, `push --force`, `reset --hard`, `clean -f`, `git add .`, `find -delete`, `curl \| sh`; asks on `--force-with-lease`, `branch -D` |
| PostToolUse | `post-edit-check.mjs` | lints the edited file and arms the Stop marker |
| Stop | `gate-stop.mjs` | refuses to finish with code edited and no green gate since |
| SubagentStop | `subagent-contract.mjs` | `reviewer` and `gate-runner` close with their `VEREDICTO:` line |

Contract: exit 0 = continue, exit 2 = block. A missing or invalid config **lets through**.

Git hooks (`npm run hooks:install` once per clone): `pre-commit` (protected paths + lint of staged
files), `commit-msg` (code commits reference `#N` or declare `no-issue: <why>`), `pre-push` (`main` only
by PR; branch names via `scripts/cycle-check.mjs`), `post-commit` (no-op without `postCommit`).

Subagents: `explorer`, `reviewer`, `gate-runner`. Commands: `/gate`, `/lesson`, `/harness-audit`,
`/architecture`, `/code-index`. Skill: `new-guardrail`. Map of the harness: `node scripts/harness-map.mjs`.
Scheduled sweep (`.github/workflows/drift.yml`): `node scripts/drift-check.mjs`.

## Active rules

```bash
node scripts/repo-lint.mjs --rules
```

## What no machine verifies

- P3 (values mirror web `globals.css`) and P6 (consumers pin tags) are enforced in the consumers
  (doctiling-web, doctiling-mobile), not here; this repo cannot see them.
- Zero runtime dependencies and no build step (P4) is REVIEW.
