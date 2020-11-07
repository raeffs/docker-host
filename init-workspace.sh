#!/bin/bash

mkdir -p .certificates
touch .certificates/acme.json
chmod 600 .certificates/acme.json

mkdir -p .log/traefik
touch .log/traefik/access.log
mkdir -p .log/gitea
touch .log/gitea/gitea.log
