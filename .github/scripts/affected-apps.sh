#!/usr/bin/env bash
#
# Emits `apps=<json array>` to $GITHUB_OUTPUT — the matrix of apps to health-check.
#
# On a pull request only the apps touched by the diff are checked. Apps never
# reference each other (cross-project `extends:` only ever points into libs/) and
# `tug up --no-deps` skips dependencies, so a changed app cannot affect another
# app's healthcheck. Anything under libs/ or .github/ is shared, so it fans out
# to every app. Every other event checks everything.

set -euo pipefail

# apps that exist but are intentionally not health-checked
SKIP='^(cloudflared)$'

all_apps() {
  find apps -mindepth 1 -maxdepth 1 -type d -printf '%f\n' | grep -Ev "$SKIP" | sort
}

changed_apps() {
  local changed
  changed="$(git diff --name-only "origin/${GITHUB_BASE_REF}...HEAD")"

  if grep -qE '^(libs/|\.github/)' <<<"$changed"; then
    all_apps
  else
    # Intersect with all_apps: the diff reports deleted files under their old
    # path, so a removed or archived app would otherwise land in the matrix.
    comm -12 <(all_apps) <(grep -oP '^apps/\K[^/]+' <<<"$changed" | sort -u)
  fi
}

if [[ "${GITHUB_EVENT_NAME}" == 'pull_request' ]]; then
  apps="$(changed_apps)"
else
  apps="$(all_apps)"
fi

echo "Affected apps:"
echo "${apps:-<none>}"

echo "apps=$(jq -cRn '[inputs | select(length > 0)]' <<<"$apps")" >>"$GITHUB_OUTPUT"
