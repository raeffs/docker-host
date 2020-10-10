<p align="center">
    <img width="25%" src="./logo.svg">
</p>

# Docker Host

This repository contains the configuration of my docker host that aims to improve my home network with several services.

## What's included?

- [Traefik](https://hub.docker.com/_/traefik) is used as reverse proxy to make the web interfaces of all the other services available through a local domain name.
- [Pihole](https://hub.docker.com/r/pihole/pihole) is used as an ad blocker as well as a DNS server that maps the ip address of the docker host to the local domain name.
- [Dozzle](https://hub.docker.com/r/amir20/dozzle) is used to easily access the logs of running containers.
- [Portainer](https://hub.docker.com/r/portainer/portainer-ce) is used if some more detailed investigation has to be done.
- [Watchtower](https://hub.docker.com/r/containrrr/watchtower) is used to keep the containers up-to-date.
- [Prometheus](https://hub.docker.com/r/prom/prometheus) is used for monitoring of services and the network.
- [Blackbox-Exporter](https://hub.docker.com/r/prom/blackbox-exporter) is an exporter for Prometheus that is used to ping network targets.
- [Speedtext-Exporter](https://hub.docker.com/r/raeffs/speedtest-exporter) is an exporter for Prometheus that is used to execute network speed tests.
- [Pihole-Exporter](https://hub.docker.com/r/ekofr/pihole-exporter) is an exporter for Prometheus that is used to collect data from Pihole.
- [Gitea](https://hub.docker.com/r/gitea/gitea) is used to provide a local GitHub alternative.
- [Home Assistant](https://hub.docker.com/r/homeassistant/home-assistant) is used for home automation tasks.
- [MariaDB](https://hub.docker.com/_/mariadb) is used as database for several services.
- [PhpMyAdmin](https://hub.docker.com/_/phpmyadmin) is used as web interface to access the MariaDB databases.

## How to use it?

My docker host runs on an Ubuntu Server 20.04 installation. The following steps need to be done after a clean installation of the host operating system.

### Install Docker

```
sudo apt update

sudo apt install apt-transport-https ca-certificates curl software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"

sudo apt update

sudo apt install docker-ce
```

### Install Docker Compose

```
sudo curl -L https://github.com/docker/compose/releases/download/1.27.4/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose
```

### Disable local DNS Resolver

```
sudo sed -r -i.orig 's/#?DNSStubListener=yes/DNSStubListener=no/g' /etc/systemd/resolved.conf

sudo sh -c 'rm /etc/resolv.conf && ln -s /run/systemd/resolve/resolv.conf /etc/resolv.conf'

sudo systemctl restart systemd-resolved
```

### Configure Docker to run without root Permissions

If you don't want to prefix every command with `sudo` you have to add your user to the `docker` group:

```
sudo usermod -aG docker ${USER}

su - ${USER}
```

### Configure Docker Host Environment

Create an `.env` file that contains the configuration values. You can use the `.env.example` file as a reference.

### Start Docker Host

The whole stack can be started with a simple docker compose command:

```
docker-compose up -d
```

Docker now takes care that all the containers are running, and even starts them again after a restart of the host system.

## Attributions

Icon made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
