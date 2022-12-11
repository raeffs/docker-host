<p align="center">
    <img width="25%" src="./logo.svg">
</p>

# Usage

## Prerequisites

### Docker

To use the docker compose configurations you obviously need docker with the compose extension installed. The repository also expects that you are able to run the docker commands without root permissions.

If you want to use a service that exposes a DNS service on port 53 (for example Pihole), you also need to disable the local stub DNS resolver.

### Node.js, Yarn & Nx

This repository uses Nx with a local plugin to managed the projects. You can use it without Nx and Node.js at all, but to follow this guide you will need it. The easiest way to get everything up and running is to install [Volta](https://docs.volta.sh/guide/getting-started).

If you have Volta installed, all you need to do is run `yarn` in the root of the repository, and you should be good to go.

## Configure services

Before you can start any of the services, you need to configure them. To do that, you can run `yarn configure <project-name>`, where `project-name` is the name of the folder of the service you want to configure. The command will ask you for all the required configuration values and store them in a `.env.local` file in the root of the repository. It will also create all the required docker volumes and networks for the service.

If a service has a dependency on any other services, it will also configure those services. For example, most of the services depend on Traefik, so you will have to enter the configuration for that service too if not already done.

If you don't want to use Nx, you will have to configure them by yourself and also manually create the required docker volumes and networks. You can do that by either editing the `.env` file in the root of the repository, or by creating an additional `.env` file in the directory of the service.

## Start and stop services

Once the configuration is done, you can start a service by executing `yarn up <project-name>` and stop it by executing `yarn down <project-name>`. If a service has a dependency on any other services, it will also start those services.

If you don't want to use Nx, you have to execute the corresponding docker compose commands yourself.

## Other commands to manage the services

There are other Nx commands that can be used to manage the services. You can find them by looking at the scripts section in the `package.json` or by looking at any of the `project.json` files.
