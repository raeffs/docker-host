#!/bin/bash

mkdir -p .data/certificates
touch .data/certificates/acme.json
chmod 600 .data/certificates/acme.json

docker network create --subnet 172.20.0.0/24 --ip-range 172.20.0.128/25 docker-host-network
