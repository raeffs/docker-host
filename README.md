<p align="center">
    <img width="25%" src="./logo.svg">
</p>

# Docker Compose configurations for Self-Hosting

This repository used to contain the configuration of my docker host running in my home network. Nowadays it is more of a collection of different docker compose configurations for services I either run in my home network or on some cloud infrastructure.

The repository uses [tug](https://github.com/raeffs/tug) — a small standalone CLI — to manage the different projects (start/stop with dependency ordering, provision variables, volumes and networks, and more). But if you don't want to install anything, you can still use the docker compose configurations directly with `docker compose`.

## What's included?

You can find a list of services that are included below. I try to create a folder (Nx project) per service / docker compose configuration. Almost all of the services depend on the reverse proxy Traefik. But other than that, they should be mostly self contained.

| Service                               | Status | Rootless | Healthchecks | CI Checks |
| ------------------------------------- | :----: | :------: | :----------: | :-------: |
| [Baikal](apps/baikal)                 |   🟢   |    ❌    |      ❌      |    ✅     |
| [Bonob](apps/bonob)                   |   🟢   |    ✅    |      ✅      |    ✅     |
| [Cloudflared](apps/cloudflared)       |        |          |              |           |
| [Dozzle](apps/dozzle)                 |   🟢   |    ✅    |      ✅      |    ✅     |
| [Forgejo](apps/forgejo)               |   🟢   |    ❌    |      ✅      |    ✅     |
| [Forgejo Runner](apps/forgejo-runner) |   🟢   |    ❌    |      ❌      |    ❌     |
| [Gotify](apps/gotify)                 |   🟢   |    ❌    |      ✅      |    ✅     |
| [Homepage](apps/homepage)             |   🟢   |    ✅    |      ✅      |    ✅     |
| [Keycloak](apps/keycloak)             |   🟢   |    ✅    |      ✅      |    ✅     |
| [Linkding](apps/linkding)             |   🟢   |    ✅    |      ✅      |    ✅     |
| [Mailpit](apps/mailpit)               |   🟢   |    ✅    |      ✅      |    ✅     |
| [Mealie](apps/mealie)                 |   🟢   |    ✅    |      ✅      |    ✅     |
| [Miniflux](apps/miniflux)             |   🟢   |    ✅    |      ✅      |    ✅     |
| [Navidrome](apps/navidrome)           |   🟢   |    ✅    |      ❌      |    ✅     |
| [Ofelia](apps/ofelia)                 |   🟢   |    ✅    |      ✅      |    ✅     |
| [Pocket ID](apps/pocket-id)           |   🟢   |    ✅    |      ✅      |    ✅     |
| [Redmine](apps/redmine)               |   🟢   |    ✅    |      ✅      |    ✅     |
| [Seq](apps/seq)                       |   🟢   |    ✅    |      ✅      |    ✅     |
| [Tandoor](apps/tandoor)               |   🟢   |    ✅    |      ✅      |    ✅     |
| [Traefik](apps/traefik)               |   🟢   |    ✅    |      ✅      |    ✅     |
| [Umami](apps/umami)                   |   🟢   |    ✅    |      ✅      |    ✅     |
| [Wallabag](apps/wallabag)             |   🟢   |    ❌    |      ✅      |    ✅     |
| [Watchtower](apps/watchtower)         |   🟢   |    ✅    |      ✅      |    ✅     |
| [Whoami](apps/whoami)                 |   🟢   |    ✅    |      ❌      |    ✅     |
| [Wishlist](apps/wishlist)             |   🟢   |    ✅    |      ❌      |    ✅     |

Configurations for services I no longer run have been moved to the [archive](archive/README.md).

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
