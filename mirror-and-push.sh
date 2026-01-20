#!/usr/bin/env bash
set -euo pipefail

# mirror-and-push.sh
# Usage: ./mirror-and-push.sh <site-url> [branch]
# Example: ./mirror-and-push.sh https://v0-credit-time-website.vercel.app main

if [ -z "${1:-}" ]; then
  echo "Usage: $0 <site-url> [branch]"
  exit 1
fi

SITE_URL="$1"
BRANCH="${2:-main}"
REPO_SSH="git@github.com:Maxou9595/credit-plus.git"

TMPDIR=$(mktemp -d)
trap 'rm -rf "$TMPDIR"' EXIT

echo "Mirroring $SITE_URL into $TMPDIR"
# Use wget to mirror the site (static copy). Requires wget installed.
wget --mirror --convert-links --adjust-extension --page-requisites --no-parent "$SITE_URL" -P "$TMPDIR"

# wget creates a directory like $TMPDIR/<host>. Find the first directory with content.
HOST_DIR=$(find "$TMPDIR" -maxdepth 1 -mindepth 1 -type d | head -n 1 || true)
if [ -z "$HOST_DIR" ]; then
  # If nothing found, use TMPDIR contents
  HOST_DIR="$TMPDIR"
fi

echo "Preparing temporary git repo from $HOST_DIR"
cd "$HOST_DIR"

# Initialize a fresh git repo and commit the static files
rm -rf .git || true
git init
git checkout -b "$BRANCH" || git checkout --orphan "$BRANCH"

git add .
# If there is nothing to commit, exit
if git diff-index --quiet HEAD --; then
  echo "No changes to commit. Exiting."
  exit 0
fi

git commit -m "Static mirror of $SITE_URL"

# Push to remote (force to replace branch). Requires that the runner has push access to the repo (SSH key or HTTPS token).
# Set remote if not set
if ! git remote | grep -q origin; then
  git remote add origin "$REPO_SSH"
fi

echo "Pushing to $REPO_SSH branch $BRANCH"
# Force push to replace the target branch with the mirrored content
git push -u origin "$BRANCH" --force

echo "Push complete. Clean up and exit.
"