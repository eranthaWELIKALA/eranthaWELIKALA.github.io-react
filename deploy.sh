#!/usr/bin/env bash
# Builds the site and publishes it to the GitHub Pages repo (eranthaWELIKALA.github.io, branch main).
# Usage: ./deploy.sh ["commit message"]
set -euo pipefail

SRC_DIR="$(cd "$(dirname "$0")" && pwd)"
PAGES_DIR="${PAGES_DIR:-$SRC_DIR/../eranthaWELIKALA.github.io}"
MESSAGE="${1:-Update site}"

if [ ! -d "$PAGES_DIR/.git" ]; then
  echo "Pages repo not found at $PAGES_DIR (set PAGES_DIR to override)" >&2
  exit 1
fi

echo "→ Building"
cd "$SRC_DIR"
npm run build

echo "→ Syncing dist/ into $PAGES_DIR"
cd "$PAGES_DIR"
git checkout -q main
git pull -q --ff-only origin main
rsync -a --delete --exclude .git "$SRC_DIR/dist/" "$PAGES_DIR/"

git add -A
if git diff --cached --quiet; then
  echo "✓ Nothing changed, nothing to deploy"
  exit 0
fi

git commit -q -m "$MESSAGE"
git push -q origin main
echo "✓ Pushed. GitHub Pages will be live at https://eranthawelikala.github.io in a minute or two"
