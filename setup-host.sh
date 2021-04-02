#!/bin/bash

sudo apt update
sudo apt upgrade

# install docker
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
sudo apt update
sudo apt install -y docker-ce

# install docker-compose
sudo curl -L https://github.com/docker/compose/releases/download/1.27.4/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# disable dns resolver
sudo sed -r -i.orig 's/#?DNSStubListener=yes/DNSStubListener=no/g' /etc/systemd/resolved.conf
sudo sh -c 'rm /etc/resolv.conf && ln -s /run/systemd/resolve/resolv.conf /etc/resolv.conf'
sudo systemctl restart systemd-resolved

# install dhcp server
sudo apt install -y isc-dhcp-server
sudo cp -f ./dhcp/dhcpd.conf /etc/dhcp/dhcpd.conf
sudo systemctl start isc-dhcp-server.service
sudo systemctl enable isc-dhcp-server.service

# enable firewall
sudo cp -f ./firewall/* /etc/ufw/applications.d/
sudo ufw allow dhcp
sudo ufw allow dns
sudo ufw allow ssh
sudo ufw allow traefik
sudo ufw allow git
sudo ufw enable

# set correct timezone
sudo timedatectl set-timezone Europe/Zurich

# add user to docker group to run docker without sudo
sudo usermod -aG docker ${USER}
su - ${USER}
