#!/bin/sh
# The brand gate: typecheck · tests. Consumers pin a tag, so a red tag never reaches them.
set -e
cd "$(dirname "$0")/.."
echo "── gate [1] typecheck"; npm run typecheck
echo "── gate [2] tests (palette shape)"; npm test
echo ""; echo "gate: GREEN"
