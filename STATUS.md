# STATUS — verified state (doctiling-brand)

Printed by the `SessionStart` hook. **Only what a command verified goes here**; what is assumed goes
under "Known debt". The harness self-test fails if the commit cited below is more than 25 commits
behind HEAD.

- **Last full gate:** 2026-10-12, branch `chore/port-agent-harness` (working tree, port to agent-harness `119695d`)
- **Verdict:** GREEN (`npm run gate`, 6/6 signals, 68 s: harness self-test · docs link-check · convention lint · harness cost
  (hook latency, max 170 ms / 900) · typecheck · tests (palette shape, 2 tests))

**Port to agent-harness `119695d` (2026-10-12)**: generic files byte-identical to the upstream; the gate is `gate.signals`
in `.claude/harness.config.json`; `tracker` + `commitMsg` require an issue or `no-issue:` on code commits; a `reuse` rule
denies 3-digit hex colours. ADR: `docs/decisions/0001-agent-harness.md`.

- **Previous full gate:** 2026-10-05, branch `chore/agent-harness`, sobre `8d1b8e9` — GREEN

## Known debt

- See `docs/agent-harness.md` § Known debt.
