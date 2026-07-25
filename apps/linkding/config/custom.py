# linkding loads this file last (bookmarks/settings/prod.py: `from .custom import *`),
# so it is the supported hook for extra Django settings.
import os

# Traefik terminates TLS and proxies plain HTTP to the container, so Django would
# otherwise see request.scheme == "http" and build an http:// OIDC redirect_uri that
# mismatches the https:// callback registered in Pocket ID. Trust Traefik's
# X-Forwarded-Proto (which Traefik sets/overwrites itself, so a client can't spoof it).
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

# The data dir is an ephemeral tmpfs, so linkding's generated secretkey.txt would be
# recreated on every restart and invalidate all sessions. Pin a stable key from the
# environment (a generated tug variable) so logins survive restarts.
_secret_key = os.environ.get('LINKDING_SECRET_KEY')
if _secret_key:
    SECRET_KEY = _secret_key
