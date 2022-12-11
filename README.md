<p align="center">
    <img width="25%" src="./logo.svg">
</p>

# Docker Compose configurations for Self-Hosting

This repository used to contain the configuration of my docker host running in my home network. Nowadays it is more of a collection of different docker compose configurations for services I either run in my home network or on some cloud infrastructure.

The repository uses Nx with a local plugin to manage the different projects. But if you don't want to use Nx or load a ton of Node.js dependencies, you can still use the docker compose configurations without any of it.

## What's included?

You can find a list of services that are included by opening the [apps](apps) folder. I try to create a folder (Nx project) per service / docker compose configuration. Almost all of the services depend on the reverse proxy / load balancer Traefik. But other than that, they should be mostly self contained.

## How to use it?

You can find instructions on how to use this repository [here](docs/usage.md).

## How to contribute?

If you found a bug or have an idea on how to improve the setup, feel free to send me a pull request or open an issue. Same if you have a question or need help with the setup. And if you would like to support me, you can [buy me a beer](https://www.buymeacoffee.com/raeffs).

</br>
<p align="center">
    <a href="https://www.buymeacoffee.com/raeffs">
        <img width="10%" src="./beer.svg">
    </a>
</p>

## Attributions

Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
