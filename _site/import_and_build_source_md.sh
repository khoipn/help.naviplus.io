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

VENV_PYTHON=".venv/bin/python3"
"$VENV_PYTHON" -m pip install -q requests pyyaml markdown

"$VENV_PYTHON" import_gitbook_markdown.py
"$VENV_PYTHON" build_from_source_md.py

git status --short
