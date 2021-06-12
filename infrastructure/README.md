<p align="center">
    <img width="25%" src="./logo.svg">
</p>

# Infrastructure Stack

The infrastructure stack provides services that support all the other stacks and consists of the following applications:

- [Traefik](https://hub.docker.com/_/traefik) is used as reverse proxy to make the web interfaces of all the other services available through a local domain name. It also takes care of automatic SSL certificate issuing and is configured with several middlewares that allow me to specify whether a service is available over the internet or just within the local network.
- [Dozzle](https://hub.docker.com/r/amir20/dozzle) is used to provide fast and easy access to the logs of all the docker containers.
- [Portainer](https://hub.docker.com/r/portainer/portainer-ce) provides more detailed information about the containers and makes it easy to attach to a running container over its web interface.
- [Adminer](https://hub.docker.com/_/adminer) is used as web interface to access the MySQL / MariaDB databases of other services.

## Configuration

The following configuration options are available and can be set either by providing a `.env` file in the root of the repository or by setting the environment variable directly:

### Traefik

| Variable             | Description                                                                            | Default           |
| -------------------- | -------------------------------------------------------------------------------------- | ----------------- |
| `TRAEFIK_ACME_EMAIL` | Specifies the email address used when issuing new SSL certificates with Let's Encrypt. | (none / required) |

### Dozzle

The Dozzle container does not need any configuration.

### Portainer

The Portainer container does not need any configuration.

### Adminer

The Adminer container does not need any configuration.

### Global Configuration

There are also some global configuration options that affect all containers. Check the [Setup Instructions](../setup) for more details about the global configuration options.
