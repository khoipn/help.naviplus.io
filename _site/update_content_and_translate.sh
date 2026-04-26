#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

PYTHON_BIN="${PYTHON_BIN:-python3}"

if ! command -v "$PYTHON_BIN" >/dev/null 2>&1; then
  echo "Missing python3. Install Python 3 and re-run." >&2
  exit 1
fi

if [[ ! -d ".venv" ]]; then
  "$PYTHON_BIN" -m venv .venv
fi

# shellcheck disable=SC1091
source .venv/bin/activate

VENV_PYTHON=".venv/bin/python3"

"$VENV_PYTHON" -m pip install --upgrade pip >/dev/null
"$VENV_PYTHON" -m pip install -q requests pyyaml markdown

if [[ -z "${OPENAI_API_KEY:-}" ]]; then
  if [[ -f ".openai_api_key" ]]; then
    OPENAI_API_KEY="$(tr -d '\r\n' < .openai_api_key)"
    export OPENAI_API_KEY
  fi
fi

if [[ -z "${OPENAI_API_KEY:-}" ]]; then
  echo "OPENAI_API_KEY is missing. Set env var OPENAI_API_KEY or create .openai_api_key file." >&2
  exit 1
fi

"$VENV_PYTHON" getMD.py
"$VENV_PYTHON" translate_i18n.py
"$VENV_PYTHON" build_navigation_i18n.py

echo ""
echo "📦 Committing and pushing to git..."
cd "$ROOT_DIR"
git add -A
COMMIT_MSG="Update content $(date '+%Y-%m-%d %H:%M')"
git commit -m "$COMMIT_MSG" || echo "ℹ️  Nothing to commit."
git push && echo "✅ Pushed to git." || echo "❌ Git push failed."
