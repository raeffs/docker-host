<p align="center">
    <img width="25%" src="./logo.svg">
</p>

# Docker Compose configurations for Self-Hosting

This repository used to contain the configuration of my docker host running in my home network. Nowadays it is more of a collection of different docker compose configurations for services I either run in my home network or on some cloud infrastructure.

The repository uses Nx with a local plugin to manage the different projects. But if you don't want to use Nx or load a ton of Node.js dependencies, you can still use the docker compose configurations without any of it.

## What's included?

You can find a list of services that are included below. I try to create a folder (Nx project) per service / docker compose configuration. Almost all of the services depend on the reverse proxy Traefik. But other than that, they should be mostly self contained.

| Service                          | Status               | Rootless               | Healthchecks               | CI Checks            | Latest Version        | Last Commit          |
| -------------------------------- | -------------------- | ---------------------- | -------------------------- | -------------------- | --------------------- | -------------------- |
| [Adminer](adminer)               |                      |                        |                            |                      |                       |                      |
| [Authelia](authelia)             |                      |                        |                            |                      |                       |                      |
| [Baikal](baikal)                 |                      |                        |                            |                      |                       |                      |
| [Bonob](bonob)                   |                      |                        |                            |                      |                       |                      |
| [Commento](commento)             |                      |                        |                            |                      |                       |                      |
| [Dozzle](dozzle)                 | ![dozzle-status]     | ![dozzle-rootless]     | ![dozzle-healthchecks]     | ![dozzle-checks]     | ![dozzle-version]     | ![dozzle-commit]     |
| [Etesync](etesync)               |                      |                        |                            |                      |                       |                      |
| [Gitea](gitea)                   |                      |                        |                            |                      |                       |                      |
| [Grafana](grafana)               |                      |                        |                            |                      |                       |                      |
| [Grocy](grocy)                   |                      |                        |                            |                      |                       |                      |
| [Home Assistant](home-assistant) |                      |                        |                            |                      |                       |                      |
| [Iperf](iperf)                   |                      |                        |                            |                      |                       |                      |
| [Leantime](leantime)             |                      |                        |                            |                      |                       |                      |
| [Mastodon](mastodon)             | ![mastodon-status]   |                        |                            |                      |                       |                      |
| [Matomo](matomo)                 |                      |                        |                            |                      |                       |                      |
| [Mealie](mealie)                 |                      |                        |                            |                      |                       |                      |
| [Memos](memos)                   |                      |                        |                            |                      |                       |                      |
| [Miniflux](miniflux)             |                      |                        |                            |                      |                       |                      |
| [Navidrome](navidrome)           |                      |                        |                            |                      |                       |                      |
| [Ofelia](ofelia)                 |                      |                        |                            |                      |                       |                      |
| [OpenProject](openproject)       |                      |                        |                            |                      |                       |                      |
| [PiHole](pihole)                 |                      |                        |                            |                      |                       |                      |
| [Pocket ID](pocket-id)           | ![pocket-id-status]  | ![pocket-id-rootless]  | ![pocket-id-healthchecks]  | ![pocket-id-checks]  | ![pocket-id-version]  | ![pocket-id-commit]  |
| [Portainer](portainer)           |                      |                        |                            |                      |                       |                      |
| [Prometheus](prometheus)         |                      |                        |                            |                      |                       |                      |
| [Redmine](redmine)               |                      |                        |                            |                      |                       |                      |
| [Seq](seq)                       |                      |                        |                            |                      |                       |                      |
| [Traefik](traefik)               | ![traefik-status]    | ![traefik-rootless]    | ![traefik-healthchecks]    | ![traefik-checks]    | ![traefik-version]    | ![traefik-commit]    |
| [Unbound](unbound)               |                      |                        |                            |                      |                       |                      |
| [Verdaccio](verdaccio)           |                      |                        |                            |                      |                       |                      |
| [Wallabag](wallabag)             |                      |                        |                            |                      |                       |                      |
| [Watchtower](watchtower)         | ![watchtower-status] | ![watchtower-rootless] | ![watchtower-healthchecks] | ![watchtower-checks] | ![watchtower-version] | ![watchtower-commit] |
| [WhoAmI](whoami)                 |                      |                        |                            |                      |                       |                      |
| [Wireguard](wireguard)           |                      |                        |                            |                      |                       |                      |
| [Wishlist](wishlist)             | ![wishlist-status]   | ![wishlist-rootless]   | ![wishlist-healthchecks]   | ![wishlist-checks]   | ![wishlist-version]   | ![wishlist-commit]   |

<!-- Adminer -->

[adminer]: apps/adminer

<!-- Authelia -->

[authelia]: apps/authelia

<!-- Baikal -->

[baikal]: apps/baikal

<!-- Bonob -->

[bonob]: apps/bonob

<!-- Commento -->

[commento]: apps/commento

<!-- Dozzle -->

[dozzle]: apps/dozzle/README.md
[dozzle-status]: https://img.shields.io/badge/active_(in_use)-blue?style=flat-square
[dozzle-rootless]: https://img.shields.io/badge/yes-blue?style=flat-square
[dozzle-healthchecks]: https://img.shields.io/badge/yes-blue?style=flat-square
[dozzle-checks]: https://img.shields.io/github/actions/workflow/status/raeffs/docker-host/apps-dozzle.yml?branch=main&event=push&style=flat-square&label=%20
[dozzle-version]: https://img.shields.io/github/v/release/amir20/dozzle?style=flat-square&label=%20
[dozzle-commit]: https://img.shields.io/github/last-commit/amir20/dozzle?style=flat-square&label=%20

<!-- Etesync -->

[etesync]: apps/etesync

<!-- Gitea -->

[gitea]: apps/gitea

<!-- Grafana -->

[grafana]: apps/grafana

<!-- Grocy -->

[grocy]: apps/grocy

<!-- Home Assistant -->

[home-assistant]: apps/home-assistant

<!-- Iperf -->

[iperf]: apps/iperf

<!-- Leantime -->

[leantime]: apps/leantime

<!-- Mastodon -->

[mastodon]: apps/mastodon/README.md
[mastodon-status]: https://img.shields.io/badge/archived-red?style=flat-square

<!-- Matomo -->

[matomo]: apps/matomo

<!-- Mealie -->

[mealie]: apps/mealie

<!-- Memos -->

[memos]: apps/memos

<!-- Miniflux -->

[miniflux]: apps/miniflux

<!-- Navidrome -->

[navidrome]: apps/navidrome

<!-- Ofelia -->

[ofelia]: apps/ofelia

<!-- OpenProject -->

[openproject]: apps/openproject

<!-- PiHole -->

[pihole]: apps/pihole

<!-- Pocket ID -->

[pocket-id]: apps/pocket-id/README.md
[pocket-id-status]: https://img.shields.io/badge/active_(in_use)-blue?style=flat-square
[pocket-id-rootless]: https://img.shields.io/badge/yes-blue?style=flat-square
[pocket-id-healthchecks]: https://img.shields.io/badge/yes-blue?style=flat-square
[pocket-id-checks]: https://img.shields.io/github/actions/workflow/status/raeffs/docker-host/apps-pocket-id.yml?branch=main&event=push&style=flat-square&label=%20
[pocket-id-version]: https://img.shields.io/github/v/release/pocket-id/pocket-id?style=flat-square&label=%20
[pocket-id-commit]: https://img.shields.io/github/last-commit/pocket-id/pocket-id?style=flat-square&label=%20

<!-- Portainer -->

[portainer]: apps/portainer

<!-- Prometheus -->

[prometheus]: apps/prometheus

<!-- Redmine -->

[redmine]: apps/redmine

<!-- Seq -->

[seq]: apps/seq

<!-- Traefik -->

[traefik]: apps/traefik/README.md
[traefik-status]: https://img.shields.io/badge/active_(in_use)-blue?style=flat-square
[traefik-rootless]: https://img.shields.io/badge/yes-blue?style=flat-square
[traefik-healthchecks]: https://img.shields.io/badge/yes-blue?style=flat-square
[traefik-checks]: https://img.shields.io/github/actions/workflow/status/raeffs/docker-host/apps-traefik.yml?branch=main&event=push&style=flat-square&label=%20
[traefik-version]: https://img.shields.io/github/v/release/traefik/traefik?style=flat-square&label=%20
[traefik-commit]: https://img.shields.io/github/last-commit/traefik/traefik?style=flat-square&label=%20

<!-- Unbound -->

[unbound]: apps/unbound

<!-- Verdaccio -->

[verdaccio]: apps/verdaccio

<!-- Wallabag -->

[wallabag]: apps/wallabag

<!-- Watchtower -->

[watchtower]: apps/watchtower/README.md
[watchtower-status]: https://img.shields.io/badge/active_(in_use)-blue?style=flat-square
[watchtower-rootless]: https://img.shields.io/badge/yes-blue?style=flat-square
[watchtower-healthchecks]: https://img.shields.io/badge/yes-blue?style=flat-square
[watchtower-checks]: https://img.shields.io/github/actions/workflow/status/raeffs/docker-host/apps-watchtower.yml?branch=main&event=push&style=flat-square&label=%20
[watchtower-version]: https://img.shields.io/github/v/release/nicholas-fedor/watchtower?style=flat-square&label=%20
[watchtower-commit]: https://img.shields.io/github/last-commit/nicholas-fedor/watchtower?style=flat-square&label=%20

<!-- WhoAmI -->

[whoami]: apps/whoami

<!-- Wireguard -->

[wireguard]: apps/wireguard

<!-- Wishlist -->

[wishlist]: apps/wishlist/README.md
[wishlist-status]: https://img.shields.io/badge/active_(in_use)-blue?style=flat-square
[wishlist-rootless]: https://img.shields.io/badge/yes-blue?style=flat-square
[wishlist-healthchecks]: https://img.shields.io/badge/no-red?style=flat-square
[wishlist-checks]: https://img.shields.io/github/actions/workflow/status/raeffs/docker-host/apps-wishlist.yml?branch=main&event=push&style=flat-square&label=%20
[wishlist-version]: https://img.shields.io/github/v/release/cmintey/wishlist?style=flat-square&label=%20
[wishlist-commit]: https://img.shields.io/github/last-commit/cmintey/wishlist?style=flat-square&label=%20

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
