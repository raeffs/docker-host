<p align="center">
    <img width="25%" src="./logo.svg">
</p>

# Setup Instructions

## Setup the Host

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

### Install Node.js & Yarn

To simplify the management of my docker host, I created some scripts in the `package.json`. If you want to use those scripts you need to install Node.js and Yarn. However, you can skip this step and use docker compose directly if you don't mind that you have to type more.

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash

source ~/.bashrc

nvm install --lts

nvm use --lts

npm i -g yarn
```

After Yarn is installed, you also need to install the required dependencies by executing `yarn` in the root of the repository.

## Configure the Docker Host Environment

### Configuration Options

To use my docker host configuration you will need to configure a good amount of environment variables. The easiest way to do this is to create an `.env` file in the root of the repository, that contains all the configured variables. To help you getting started, I created a `.env.example` file that you can use as a reference.

Many of the variables are used to configure a certain service. Those are described in the readme of the different stacks. However, there are some configuration options that affect all services, which are configured by the following environment variables:

| Variable              | Description                                                                                                                                                  | Default           |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| `LOCAL_IP`            | The local ip address of the machine running your docker host.                                                                                                | (none / required) |
| `DOMAIN_SUFFIX`       | A public DNS name suffix that is used to reach the services on the docker host. To each service on the docker host a subdomain with this suffix is assigned. | (none / required) |
| `MYSQL_ROOT_PASSWORD` | The root password used for all the MySQL containers.                                                                                                         | (none / required) |

### Prepare Docker Network and Volumes

My docker host uses a custom docker network that allows some of the containers to have static ip addresses within the docker network. Furthermore, most of the containers use docker volumes to store persistent data. All the required networks and volumes can be created with the `setup-workspace.sh` script.

## Start the Docker Host

As mentioned, I created scripts in the `package.json` to easily manage my docker host. To start all the stacks at once, you simply have to execute the following command:

```
yarn up
```

Docker now takes care that all the containers are running. It even starts them again after a restart of the host system.

## Managed the Docker Host

Apart from starting the docker host, the following commands are available that affect all the available stacks:

| Command        | Description                                                      |
| -------------- | ---------------------------------------------------------------- |
| `yarn up`      | Starts all the stacks.                                           |
| `yarn down`    | Stops all the stacks.                                            |
| `yarn restart` | Restarts all the stacks.                                         |
| `yarn pull`    | Pulls the latest docker images for all the stacks.               |
| `yarn update`  | Pulls the latest docker images and then restarts all the stacks. |
| `yarn status`  | Prints out the status of all running containers.                 |

All the commands can also be used for a specific stack by adding the stack's name as a prefix, for example `yarn infra:up`.

## Backup & Restore the Docker Host

If you need to backup or restore the persistent data stored in the docker volumes, you can use the scripts `backup-volumes.sh` and `restore-volumes.sh`.
