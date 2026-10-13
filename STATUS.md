# STATUS — verified state (doctiling-brand)

Printed by the `SessionStart` hook. **Only what a command verified goes here**; what is assumed goes
under "Known debt".

- **Last full gate:** 2026-10-12, branch `chore/harness-119695d-sync` (generic files synced to agent-harness `119695d`: pre-commit with
  `preCommit.extra`, self-test cases), sobre `cc5e391`
- **Verdict:** GREEN (`npm run gate`, 7/7 run: harness self-test · docs link-check · convention lint · artifacts in place · typecheck ·
  tests (palette shape, 2 tests) · harness cost (hook latency, max 170 ms / 900); code index OMITTED — no `.codegraph`)

## Known debt

- See `docs/arnes.md` § What no machine verifies.
- Code index (codegraph) not initialised: its gate signal is OMITTED (omitted is not green).
- The upstream self-test does not run inside a git worktree (`.git` is a file there): gate from a real clone.
