# Gotchas — what already cost us hours

Fixed format: **observable symptom → root cause → rule → the mechanism that now fails**. Written when
the cost is paid (`/lesson <incident>`). The `Mecanismo:` line is mandatory and the harness self-test
enforces the four lines; with no executable mechanism, write "ninguno ejecutable: <why>".

---

### GOTCHA: the vendored brand copy drifted silently and its check could not run in CI

Síntoma: doctiling-mobile carried a copy of these tokens; the drift check only ran with a sibling web
         checkout and printed "skipped" in CI (2026-10-05).
Causa:   the package was duplicated instead of shared; reading the other repo from CI needed a secret.
Regla:   tokens live only here; consumers pin a tag through the HTTPS tarball (no git needed in the
         Docker builder, unlike a `github:` spec).
Mecanismo: doctiling-mobile `tests/brand-pin.test.ts` (fails on a local copy or a moving branch) and
         doctiling-web `tests/lib/brand-tokens.test.ts` (fails when pinned tokens drift from globals.css).
