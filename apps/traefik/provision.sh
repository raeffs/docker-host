#!/bin/sh

# make sure the the json file to store certificates exists and has the correct access rights
mkdir -p /certificates
touch /certificates/acme.json
chmod 600 /certificates/acme.json
