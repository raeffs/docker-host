#!/bin/sh

# make sure the the json file to store certificates exists and has the correct access rights
mkdir -p /certificates
touch /certificates/acme.json
chmod 600 /certificates/acme.json

# copy configuration template and replace variables
cp /traefik.template.yml /etc/traefik/traefik.yml
sed -i "s/admin@example.com/$ACME_EMAIL/" /etc/traefik/traefik.yml
