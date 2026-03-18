#!/bin/bash
set -e

add_oauth_provider() {
  echo "Creating OAuth provider '${OAUTH_PROVIDER_NAME}' ..."

  su - git -c "/usr/local/bin/forgejo admin auth add-oauth \
    --name \"${OAUTH_PROVIDER_NAME}\" \
    --provider 'openidConnect' \
    --key \"${OAUTH_CLIENT_ID}\" \
    --secret \"${OAUTH_CLIENT_SECRET}\" \
    --auto-discover-url \"${OAUTH_AUTO_DISCOVER_URL}\" \
    --scopes 'openid profile email groups' \
    --skip-local-2fa \
    --group-claim-name 'groups' \
    --admin-group 'admin'"

  echo "Successfully created OAuth provider '${OAUTH_PROVIDER_NAME}'."
}

update_oauth_provider() {
  local provider_id=$1
  echo "Updating OAuth provider '${OAUTH_PROVIDER_NAME}' with ID ${provider_id} ..."

  su - git -c "/usr/local/bin/forgejo admin auth update-oauth \
    --id ${provider_id} \
    --name \"${OAUTH_PROVIDER_NAME}\" \
    --provider 'openidConnect' \
    --key \"${OAUTH_CLIENT_ID}\" \
    --secret \"${OAUTH_CLIENT_SECRET}\" \
    --auto-discover-url \"${OAUTH_AUTO_DISCOVER_URL}\" \
    --scopes 'openid profile email groups' \
    --skip-local-2fa \
    --group-claim-name 'groups' \
    --admin-group 'admin'"

  echo "Successfully updated OAuth provider '${OAUTH_PROVIDER_NAME}'."
}

echo "Starting Forgejo provisioning..."

if [ -z "${OAUTH_PROVIDER_NAME}" ]; then
  echo "OAUTH_PROVIDER_NAME environment variable is not set. Provisioning is skipped."
  exit 0
fi

if [ -z "${OAUTH_AUTO_DISCOVER_URL}" ]; then
  echo "OAUTH_AUTO_DISCOVER_URL environment variable is not set. Provisioning is skipped."
  exit 0
fi

if [ -z "${OAUTH_CLIENT_ID}" ]; then
  echo "OAUTH_CLIENT_ID environment variable is not set. Provisioning is skipped."
  exit 0
fi

if [ -z "${OAUTH_CLIENT_SECRET}" ]; then
  echo "OAUTH_CLIENT_SECRET environment variable is not set. Provisioning is skipped."
  exit 0
fi

PROVIDER_LINE=$(su - git -c "/usr/local/bin/forgejo admin auth list" | grep -w "${OAUTH_PROVIDER_NAME}" || true)

if [ -z "${PROVIDER_LINE}" ]; then
  add_oauth_provider
else
  PROVIDER_ID=$(echo "${PROVIDER_LINE}" | cut -f 1)
  update_oauth_provider "${PROVIDER_ID}"
fi

echo "Forgejo provisioning finished."
