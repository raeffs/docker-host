#!/bin/bash

mkdir -p /tmp/docker-host-backup

docker run -v commento-db:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup backup commento-db
docker run -v cookbook-db:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup backup cookbook-db
docker run -v gitea:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup backup gitea
docker run -v gitea-db:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup backup gitea-db
docker run -v grafana:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup backup grafana
docker run -v home-assistant:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup backup home-assistant
docker run -v home-assistant-db:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup backup home-assistant-db
docker run -v matomo:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup backup matomo
docker run -v matomo-db:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup backup matomo-db
docker run -v pihole:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup backup pihole
docker run -v pihole-dnsmasq:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup backup pihole-dnsmasq
docker run -v portainer:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup backup portainer
docker run -v prometheus:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup backup prometheus
docker run -v seq:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup backup seq
docker run -v verdaccio:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup backup verdaccio
docker run -v wireguard:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup backup wireguard
