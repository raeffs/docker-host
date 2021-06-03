#!/bin/bash

# create directory for certificates
mkdir -p ./.certificates
touch ./.certificates/acme.json
chmod 600 ./.certificates/acme.json

# create docker network
docker network create --subnet 172.20.0.0/24 --ip-range 172.20.0.128/25 docker-host-network

# create docker volumes
docker volume create commento-db
docker volume create cookbook-db
docker volume create gitea
docker volume create gitea-db
docker volume create grafana
docker volume create home-assistant
docker volume create home-assistant-db
docker volume create matomo
docker volume create matomo-db
docker volume create pihole
docker volume create pihole-dnsmasq
docker volume create pihole-sync
docker volume create pihole-sync-ssh
docker volume create portainer
docker volume create prometheus
docker volume create seq
docker volume create verdaccio
docker volume create wireguard
