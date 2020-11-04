#!/bin/bash

mkdir -p .certificates
touch .certificates/acme.json
chmod 600 .certificates/acme.json

mkdir -p .log/traefik
mkdir -p .log/gitea
