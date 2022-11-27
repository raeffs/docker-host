#!/bin/bash

# create docker network
function create_docker_network() {
    local NETWORK_NAME=docker-host-network
    docker network ls | grep -q $NETWORK_NAME
    if [ $? -ne 0 ]; then
        echo "creating docker network $NETWORK_NAME"
        docker network create --subnet 172.20.0.0/24 --ip-range 172.20.0.128/25 $NETWORK_NAME
    fi
}

create_docker_network

# create docker volumes
function create_docker_volume() {
    local NAME=$1
    docker volume ls | grep -q $NAME
    if [ $? -ne 0 ]; then
        echo "creating docker volume $NAME"
        docker volume create $NAME
    fi
}

create_docker_volume commento-db
create_docker_volume cookbook-db
create_docker_volume etesync-data
create_docker_volume etesync-db
create_docker_volume gitea
create_docker_volume gitea-db
create_docker_volume grafana
create_docker_volume home-assistant
create_docker_volume home-assistant-db
create_docker_volume mastodon
create_docker_volume mastodon-db
create_docker_volume mastodon-es
create_docker_volume matomo
create_docker_volume matomo-db
create_docker_volume miniflux-db
create_docker_volume pihole
create_docker_volume pihole-dnsmasq
create_docker_volume pihole-sync
create_docker_volume pihole-sync-ssh
create_docker_volume portainer
create_docker_volume prometheus
create_docker_volume seq
create_docker_volume traefik
create_docker_volume verdaccio
create_docker_volume wallabag-db
create_docker_volume wireguard

docker run --rm -v mastodon:/mastodon busybox /bin/sh -c 'chown -R 991:991 /mastodon'
