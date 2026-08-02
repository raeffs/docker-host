#!/usr/bin/env bash
#
# Runs `docker compose config` over every file combination a user could apply:
# each app's base file on its own, and the base paired with each of its overlays
# (.ci, .local, .production, .smb-example). The libs/ files are checked
# standalone; apps reach them through `extends:`, which compose already resolves
# as part of the base check.
#
# The variables have to be provisioned first. `docker compose config` treats an
# unset ${VAR} as the empty string, which both invents errors (an empty
# `extra_hosts` entry fails the schema) and masks real ones. `tug
# create-variables --use-defaults` only fills in what is missing and leaves
# existing values alone, so this is safe to run against a real `.env.local`.

set -euo pipefail
shopt -s nullglob

cd "$(git rev-parse --show-toplevel)"

checked=0
failed=()

check() {
  local label="$1"
  shift

  checked=$((checked + 1))

  if ! docker compose --env-file .env.local "$@" config -q; then
    failed+=("$label")
  fi
}

for app in apps/*/; do
  tug create-variables "$(basename "$app")" --use-defaults
done

for base in apps/*/docker-compose.yml libs/*/docker-compose.yml; do
  check "$base" --file "$base"

  for overlay in "$(dirname "$base")"/docker-compose.*.yml; do
    check "$base + $(basename "$overlay")" --file "$base" --file "$overlay"
  done
done

if [[ ${#failed[@]} -gt 0 ]]; then
  echo "Invalid compose configurations:" >&2
  printf '  %s\n' "${failed[@]}" >&2
  exit 1
fi

echo "Validated ${checked} compose configurations"
