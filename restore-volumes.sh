#!/bin/bash

docker run -v commento-db:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup restore commento-db
docker run -v gitea:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup restore gitea
docker run -v gitea-db:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup restore gitea-db
docker run -v grafana:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup restore grafana
docker run -v home-assistant:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup restore home-assistant
docker run -v home-assistant-db:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup restore home-assistant-db
docker run -v matomo:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup restore matomo
docker run -v matomo-db:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup restore matomo-db
docker run -v pihole:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup restore pihole
docker run -v pihole-dnsmasq:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup restore pihole-dnsmasq
docker run -v portainer:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup restore portainer
docker run -v prometheus:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup restore prometheus
docker run -v recipes-db:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup restore recipes-db
docker run -v recipes-media:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup restore recipes-media
docker run -v seq:/volume -v /tmp/docker-host-backup:/backup --rm loomchild/volume-backup restore seq
