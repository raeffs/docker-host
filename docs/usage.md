<p align="center">
    <img width="25%" src="./logo.svg">
</p>

# Usage

## Prerequisites

### Docker

To use the docker compose configurations you obviously need docker with the compose extension installed. The repository also expects that you are able to run the docker commands without root permissions.

If you want to use a service that exposes a DNS service on port 53 (for example Pihole), you also need to disable the local stub DNS resolver.

### tug

This repository is managed with [tug](https://github.com/raeffs-dot-dev/tug), a small standalone CLI that orchestrates the compose projects. Install it by following the instructions in its own repository, so that the `tug` binary is available on your `PATH`.

You can use the repository without tug at all — the compose files are plain Docker Compose configurations — but this guide assumes tug is installed. Run `tug help` to see every available command.

## Configure services

Before you can start any of the services, you need to configure them. To do that, run `tug configure <project-name>`, where `project-name` is the name of the folder of the service you want to configure. The command asks you for all the required configuration values and stores them in a `.env.local` file in the root of the repository. It also creates all the required docker volumes and networks for the service.

If a service depends on other services, those are configured too. For example, most services depend on Traefik, so you will have to enter the configuration for Traefik as well if you haven't already.

If you don't want to use tug, you can configure things by hand: set the required variables (in the root `.env`/`.env.local` file, or an additional `.env` file in the service's directory) and create the required docker volumes and networks yourself.

## Start and stop services

Once the configuration is done, start a service with `tug up <project-name>` and stop it with `tug down <project-name>`. `tug up` starts the service together with everything in its dependency chain, in order; `tug down` stops just the named service. Add `--wait` to `tug up` to block until every container reports healthy.

If you don't want to use tug, run the corresponding `docker compose` commands yourself.

## Other commands to manage the services

tug covers the rest of the lifecycle too — `pull`, `restart`, `logs`, `ps`, `list`, `all`, `backup-volumes` / `restore-volumes`, and `new` (scaffold a new app). Run `tug help` for the full list, or `tug <command> --help` for the options of a specific command.
