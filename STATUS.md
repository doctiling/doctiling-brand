# STATUS — verified state (doctiling-brand)

Printed by the `SessionStart` hook. **Only what a command verified goes here**; what is assumed goes
under "Known debt".

- **Last full gate:** 2026-10-10, branch `chore/port-agent-harness`
- **Verdict:** GREEN (`npm run gate`: harness self-test · docs link-check · convention lint · artifacts in place · typecheck · tests (palette shape) · harness cost; code index OMITTED — no `.codegraph`)

## Known debt

- See `docs/arnes.md` § What no machine verifies.
- Code index (codegraph) not initialised: its gate signal is OMITTED (omitted is not green).
- The upstream self-test does not run inside a git worktree (`.git` is a file there): gate from a real clone.
