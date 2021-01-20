#!/bin/bash

mkdir -p .data/certificates
touch .data/certificates/acme.json
chmod 600 .data/certificates/acme.json

mkdir -p .data/log/traefik
touch .data/log/traefik/access.log
mkdir -p .data/log/gitea
touch .data/log/gitea/gitea.log

mkdir -p .data/data/matomo
chown 1001:1001 .data/data/matomo
