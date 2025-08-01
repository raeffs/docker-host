<p align="center">
    <img width="25%" src="./logo.svg">
</p>

# Docker Compose configurations for Self-Hosting

This repository used to contain the configuration of my docker host running in my home network. Nowadays it is more of a collection of different docker compose configurations for services I either run in my home network or on some cloud infrastructure.

The repository uses Nx with a local plugin to manage the different projects. But if you don't want to use Nx or load a ton of Node.js dependencies, you can still use the docker compose configurations without any of it.

## What's included?

You can find a list of services that are included below. I try to create a folder (Nx project) per service / docker compose configuration. Almost all of the services depend on the reverse proxy Traefik. But other than that, they should be mostly self contained.

| Service                               |        Status        |        Rootless        |        Healthchecks        |      CI Checks       |    Latest Version     |     Last Commit      |
| ------------------------------------- | :------------------: | :--------------------: | :------------------------: | :------------------: | :-------------------: | :------------------: |
| [Adminer](apps/adminer)               |                      |                        |                            |                      |                       |                      |
| [Authelia](apps/authelia)             |                      |                        |                            |                      |                       |                      |
| [Baikal](apps/baikal)                 |                      |                        |                            |                      |                       |                      |
| [Bonob](apps/bonob)                   |                      |                        |                            |                      |                       |                      |
| [Commento](apps/commento)             |                      |                        |                            |                      |                       |                      |
| [Dozzle](apps/dozzle)                 |   ![dozzle-status]   |   ![dozzle-rootless]   |   ![dozzle-healthchecks]   |   ![dozzle-checks]   |   ![dozzle-version]   |   ![dozzle-commit]   |
| [Etesync](apps/etesync)               |                      |                        |                            |                      |                       |                      |
| [Gitea](apps/gitea)                   |                      |                        |                            |                      |                       |                      |
| [Grafana](apps/grafana)               |                      |                        |                            |                      |                       |                      |
| [Grocy](apps/grocy)                   |                      |                        |                            |                      |                       |                      |
| [Home Assistant](apps/home-assistant) |                      |                        |                            |                      |                       |                      |
| [Iperf](apps/iperf)                   |                      |                        |                            |                      |                       |                      |
| [Leantime](apps/leantime)             |                      |                        |                            |                      |                       |                      |
| [Mastodon](apps/mastodon)             |  ![mastodon-status]  |                        |                            |                      |                       |                      |
| [Matomo](apps/matomo)                 |                      |                        |                            |                      |                       |                      |
| [Mealie](apps/mealie)                 |                      |                        |                            |                      |                       |                      |
| [Memos](apps/memos)                   |                      |                        |                            |                      |                       |                      |
| [Miniflux](apps/miniflux)             |                      |                        |                            |                      |                       |                      |
| [Navidrome](apps/navidrome)           |                      |                        |                            |                      |                       |                      |
| [Ofelia](apps/ofelia)                 |                      |                        |                            |                      |                       |                      |
| [OpenProject](apps/openproject)       |                      |                        |                            |                      |                       |                      |
| [PiHole](apps/pihole)                 |                      |                        |                            |                      |                       |                      |
| [Pocket ID](apps/pocket-id)           | ![pocket-id-status]  | ![pocket-id-rootless]  | ![pocket-id-healthchecks]  | ![pocket-id-checks]  | ![pocket-id-version]  | ![pocket-id-commit]  |
| [Portainer](apps/portainer)           |                      |                        |                            |                      |                       |                      |
| [Prometheus](apps/prometheus)         |                      |                        |                            |                      |                       |                      |
| [Redmine](apps/redmine)               |                      |                        |                            |                      |                       |                      |
| [Seq](apps/seq)                       |                      |                        |                            |                      |                       |                      |
| [Traefik](apps/traefik)               |  ![traefik-status]   |  ![traefik-rootless]   |  ![traefik-healthchecks]   |  ![traefik-checks]   |  ![traefik-version]   |  ![traefik-commit]   |
| [Unbound](apps/unbound)               |                      |                        |                            |                      |                       |                      |
| [Verdaccio](apps/verdaccio)           |                      |                        |                            |                      |                       |                      |
| [Wallabag](apps/wallabag)             |                      |                        |                            |                      |                       |                      |
| [Watchtower](apps/watchtower)         | ![watchtower-status] | ![watchtower-rootless] | ![watchtower-healthchecks] | ![watchtower-checks] | ![watchtower-version] | ![watchtower-commit] |
| [WhoAmI](apps/whoami)                 |                      |                        |                            |                      |                       |                      |
| [Wireguard](apps/wireguard)           |                      |                        |                            |                      |                       |                      |
| [Wishlist](apps/wishlist)             |  ![wishlist-status]  |  ![wishlist-rootless]  |  ![wishlist-healthchecks]  |  ![wishlist-checks]  |  ![wishlist-version]  |  ![wishlist-commit]  |

## How to use it?

You can find instructions on how to use this repository [here](apps/docs/usage.md).

## How to contribute?

If you found a bug or have an idea on how to improve the setup, feel free to send me a pull request or open an issue. Same if you have a question or need help with the setup. And if you would like to support me, you can [buy me a beer](apps/https://www.buymeacoffee.com/raeffs).

</br>
<p align="center">
    <a href="https://www.buymeacoffee.com/raeffs">
        <img width="10%" src="./beer.svg">
    </a>
</p>

## Attributions

Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

<!-- Adminer -->

<!-- Authelia -->

<!-- Baikal -->

<!-- Bonob -->

<!-- Commento -->

<!-- Dozzle -->

[dozzle-status]: https://img.shields.io/badge/active_(in_use)-blue?style=flat-square
[dozzle-rootless]: https://img.shields.io/badge/yes-blue?style=flat-square
[dozzle-healthchecks]: https://img.shields.io/badge/yes-blue?style=flat-square
[dozzle-checks]: https://img.shields.io/github/actions/workflow/status/raeffs/docker-host/apps-dozzle.yml?branch=main&event=push&style=flat-square&label=%20
[dozzle-version]: https://img.shields.io/github/v/release/amir20/dozzle?style=flat-square&label=%20
[dozzle-commit]: https://img.shields.io/github/last-commit/amir20/dozzle?style=flat-square&label=%20

<!-- Etesync -->

<!-- Gitea -->

<!-- Grafana -->

<!-- Grocy -->

<!-- Home Assistant -->

<!-- Iperf -->

<!-- Leantime -->

<!-- Mastodon -->

[mastodon-status]: https://img.shields.io/badge/archived-red?style=flat-square

<!-- Matomo -->

<!-- Mealie -->

<!-- Memos -->

<!-- Miniflux -->

<!-- Navidrome -->

<!-- Ofelia -->

<!-- OpenProject -->

<!-- PiHole -->

<!-- Pocket ID -->

[pocket-id-status]: https://img.shields.io/badge/active_(in_use)-blue?style=flat-square
[pocket-id-rootless]: https://img.shields.io/badge/yes-blue?style=flat-square
[pocket-id-healthchecks]: https://img.shields.io/badge/yes-blue?style=flat-square
[pocket-id-checks]: https://img.shields.io/github/actions/workflow/status/raeffs/docker-host/apps-pocket-id.yml?branch=main&event=push&style=flat-square&label=%20
[pocket-id-version]: https://img.shields.io/github/v/release/pocket-id/pocket-id?style=flat-square&label=%20
[pocket-id-commit]: https://img.shields.io/github/last-commit/pocket-id/pocket-id?style=flat-square&label=%20

<!-- Portainer -->

<!-- Prometheus -->

<!-- Redmine -->

<!-- Seq -->

<!-- Traefik -->

[traefik-status]: https://img.shields.io/badge/active_(in_use)-blue?style=flat-square
[traefik-rootless]: https://img.shields.io/badge/yes-blue?style=flat-square
[traefik-healthchecks]: https://img.shields.io/badge/yes-blue?style=flat-square
[traefik-checks]: https://img.shields.io/github/actions/workflow/status/raeffs/docker-host/apps-traefik.yml?branch=main&event=push&style=flat-square&label=%20
[traefik-version]: https://img.shields.io/github/v/release/traefik/traefik?style=flat-square&label=%20
[traefik-commit]: https://img.shields.io/github/last-commit/traefik/traefik?style=flat-square&label=%20

<!-- Unbound -->

<!-- Verdaccio -->

<!-- Wallabag -->

<!-- Watchtower -->

[watchtower-status]: https://img.shields.io/badge/active_(in_use)-blue?style=flat-square
[watchtower-rootless]: https://img.shields.io/badge/yes-blue?style=flat-square
[watchtower-healthchecks]: https://img.shields.io/badge/yes-blue?style=flat-square
[watchtower-checks]: https://img.shields.io/github/actions/workflow/status/raeffs/docker-host/apps-watchtower.yml?branch=main&event=push&style=flat-square&label=%20
[watchtower-version]: https://img.shields.io/github/v/release/nicholas-fedor/watchtower?style=flat-square&label=%20
[watchtower-commit]: https://img.shields.io/github/last-commit/nicholas-fedor/watchtower?style=flat-square&label=%20

<!-- WhoAmI -->

<!-- Wireguard -->

<!-- Wishlist -->

[wishlist-status]: https://img.shields.io/badge/active_(in_use)-blue?style=flat-square
[wishlist-rootless]: https://img.shields.io/badge/yes-blue?style=flat-square
[wishlist-healthchecks]: https://img.shields.io/badge/no-red?style=flat-square
[wishlist-checks]: https://img.shields.io/github/actions/workflow/status/raeffs/docker-host/apps-wishlist.yml?branch=main&event=push&style=flat-square&label=%20
[wishlist-version]: https://img.shields.io/github/v/release/cmintey/wishlist?style=flat-square&label=%20
[wishlist-commit]: https://img.shields.io/github/last-commit/cmintey/wishlist?style=flat-square&label=%20
