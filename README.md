<p align="center">
    <img width="25%" src="./logo.svg">
</p>

# Docker Compose configurations for Self-Hosting

This repository used to contain the configuration of my docker host running in my home network. Nowadays it is more of a collection of different docker compose configurations for services I either run in my home network or on some cloud infrastructure.

The repository uses Nx with a local plugin to manage the different projects. But if you don't want to use Nx or load a ton of Node.js dependencies, you can still use the docker compose configurations without any of it.

## What's included?

You can find a list of services that are included below. I try to create a folder (Nx project) per service / docker compose configuration. Almost all of the services depend on the reverse proxy Traefik. But other than that, they should be mostly self contained.

| Service                                  | Status | Rootless | Healthchecks |      CI Checks       |    Latest Version     |     Last Commit      |
| ---------------------------------------- | :----: | :------: | :----------: | :------------------: | :-------------------: | :------------------: |
| [Adminer](archive/adminer)               |   📦   |          |              |                      |                       |                      |
| [Authelia](archive/authelia)             |   📦   |          |              |                      |                       |                      |
| [Baikal](apps/baikal)                    |   🟢   |    ❌    |      ❌      |   ![baikal-checks]   |   ![baikal-version]   |   ![baikal-commit]   |
| [Bonob](apps/bonob)                      |   🟢   |    ✅    |      ✅      |   ![bonob-checks]    |   ![bonob-version]    |   ![bonob-commit]    |
| [Commento](apps/commento)                |        |          |              |                      |                       |                      |
| [Dozzle](apps/dozzle)                    |   🟢   |    ✅    |      ✅      |   ![dozzle-checks]   |   ![dozzle-version]   |   ![dozzle-commit]   |
| [Etesync](apps/etesync)                  |        |          |              |                      |                       |                      |
| [Forgejo](apps/forgejo)                  |   🟢   |    ❌    |      ❌      |  ![forgejo-checks]   |  ![forgejo-version]   |  ![forgejo-commit]   |
| [Gitea](archive/gitea)                   |   📦   |          |              |                      |                       |                      |
| [Grafana](apps/grafana)                  |        |          |              |                      |                       |                      |
| [Grocy](apps/grocy)                      |        |          |              |                      |                       |                      |
| [Home Assistant](archive/home-assistant) |   📦   |          |              |                      |                       |                      |
| [Homepage](apps/homepage)                |   🟢   |    ✅    |      ✅      |  ![homepage-checks]  |  ![homepage-version]  |  ![homepage-commit]  |
| [Iperf](apps/iperf)                      |        |          |              |                      |                       |                      |
| [Keycloak](apps/keycloak)                |   🟢   |    ❌    |      ❌      |  ![keycloak-checks]  |  ![keycloak-version]  |  ![keycloak-commit]  |
| [Leantime](apps/leantime)                |        |          |              |                      |                       |                      |
| [Mastodon](archive/mastodon)             |   📦   |          |              |                      |                       |                      |
| [Matomo](apps/matomo)                    |        |          |              |                      |                       |                      |
| [Mealie](apps/mealie)                    |        |          |              |                      |                       |                      |
| [Memos](apps/memos)                      |        |          |              |                      |                       |                      |
| [Miniflux](apps/miniflux)                |   🟢   |    ✅    |      ✅      |  ![miniflux-checks]  |  ![miniflux-version]  |  ![miniflux-commit]  |
| [Navidrome](apps/navidrome)              |   🟢   |    ✅    |      ❌      | ![navidrome-checks]  | ![navidrome-version]  | ![navidrome-commit]  |
| [Ofelia](apps/ofelia)                    |        |          |              |                      |                       |                      |
| [OpenProject](apps/openproject)          |        |          |              |                      |                       |                      |
| [PiHole](archive/pihole)                 |   📦   |          |              |                      |                       |                      |
| [Pocket ID](apps/pocket-id)              |   🟢   |    ✅    |      ✅      | ![pocket-id-checks]  | ![pocket-id-version]  | ![pocket-id-commit]  |
| [Portainer](archive/portainer)           |   📦   |          |              |                      |                       |                      |
| [Prometheus](apps/prometheus)            |        |          |              |                      |                       |                      |
| [Redmine](apps/redmine)                  |        |          |              |                      |                       |                      |
| [Seq](apps/seq)                          |        |          |              |                      |                       |                      |
| [Traefik](apps/traefik)                  |   🟢   |    ✅    |      ✅      |  ![traefik-checks]   |  ![traefik-version]   |  ![traefik-commit]   |
| [Unbound](archive/unbound)               |   📦   |          |              |                      |                       |                      |
| [Verdaccio](apps/verdaccio)              |        |          |              |                      |                       |                      |
| [Wallabag](apps/wallabag)                |   🟢   |    ❌    |      ✅      |  ![wallabag-checks]  |  ![wallabag-version]  |  ![wallabag-commit]  |
| [Watchtower](apps/watchtower)            |   🟢   |    ✅    |      ✅      | ![watchtower-checks] | ![watchtower-version] | ![watchtower-commit] |
| [Whoami](apps/whoami)                    |   🟢   |    ✅    |      ❌      |   ![whoami-checks]   |   ![whoami-version]   |   ![whoami-commit]   |
| [WireGuard](archive/wireguard)           |   📦   |          |              |                      |                       |                      |
| [Wishlist](apps/wishlist)                |   🟢   |    ✅    |      ❌      |  ![wishlist-checks]  |  ![wishlist-version]  |  ![wishlist-commit]  |

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

<!-- Baikal -->

[baikal-checks]: https://img.shields.io/github/actions/workflow/status/raeffs/docker-host/apps-baikal.yml?branch=main&event=push&style=flat-square&label=%20
[baikal-version]: https://img.shields.io/github/v/release/sabre-io/Baikal?style=flat-square&label=%20
[baikal-commit]: https://img.shields.io/github/last-commit/sabre-io/Baikal?style=flat-square&label=%20

<!-- Bonob -->

[bonob-checks]: https://img.shields.io/github/actions/workflow/status/raeffs/docker-host/apps-bonob.yml?branch=main&event=push&style=flat-square&label=%20
[bonob-version]: https://img.shields.io/github/v/release/simojenki/bonob?style=flat-square&label=%20
[bonob-commit]: https://img.shields.io/github/last-commit/simojenki/bonob?style=flat-square&label=%20

<!-- Dozzle -->

[dozzle-checks]: https://img.shields.io/github/actions/workflow/status/raeffs/docker-host/apps-dozzle.yml?branch=main&event=push&style=flat-square&label=%20
[dozzle-version]: https://img.shields.io/github/v/release/amir20/dozzle?style=flat-square&label=%20
[dozzle-commit]: https://img.shields.io/github/last-commit/amir20/dozzle?style=flat-square&label=%20

<!-- Forgejo -->

[forgejo-checks]: https://img.shields.io/github/actions/workflow/status/raeffs/docker-host/apps-forgejo.yml?branch=main&event=push&style=flat-square&label=%20
[forgejo-version]: https://img.shields.io/gitea/v/release/forgejo/forgejo?gitea_url=https%3A%2F%2Fcodeberg.org&style=flat-square&label=%20
[forgejo-commit]: https://img.shields.io/gitea/last-commit/forgejo/forgejo?gitea_url=https%3A%2F%2Fcodeberg.org&style=flat-square&label=%20

<!-- Homepage -->

[homepage-checks]: https://img.shields.io/github/actions/workflow/status/raeffs/docker-host/apps-homepage.yml?branch=main&event=push&style=flat-square&label=%20
[homepage-version]: https://img.shields.io/github/v/release/gethomepage/homepage?style=flat-square&label=%20
[homepage-commit]: https://img.shields.io/github/last-commit/gethomepage/homepage?style=flat-square&label=%20

<!-- Keycloak -->

[keycloak-checks]: https://img.shields.io/github/actions/workflow/status/raeffs/docker-host/apps-keycloak.yml?branch=main&event=push&style=flat-square&label=%20
[keycloak-version]: https://img.shields.io/github/v/release/keycloak/keycloak?style=flat-square&label=%20
[keycloak-commit]: https://img.shields.io/github/last-commit/keycloak/keycloak?style=flat-square&label=%20

<!-- Miniflux -->

[miniflux-checks]: https://img.shields.io/github/actions/workflow/status/raeffs/docker-host/apps-miniflux.yml?branch=main&event=push&style=flat-square&label=%20
[miniflux-version]: https://img.shields.io/github/v/release/miniflux/v2?style=flat-square&label=%20
[miniflux-commit]: https://img.shields.io/github/last-commit/miniflux/v2?style=flat-square&label=%20

<!-- Navidrome -->

[navidrome-checks]: https://img.shields.io/github/actions/workflow/status/raeffs/docker-host/apps-navidrome.yml?branch=main&event=push&style=flat-square&label=%20
[navidrome-version]: https://img.shields.io/github/v/release/navidrome/navidrome?style=flat-square&label=%20
[navidrome-commit]: https://img.shields.io/github/last-commit/navidrome/navidrome?style=flat-square&label=%20

<!-- Pocket ID -->

[pocket-id-checks]: https://img.shields.io/github/actions/workflow/status/raeffs/docker-host/apps-pocket-id.yml?branch=main&event=push&style=flat-square&label=%20
[pocket-id-version]: https://img.shields.io/github/v/release/pocket-id/pocket-id?style=flat-square&label=%20
[pocket-id-commit]: https://img.shields.io/github/last-commit/pocket-id/pocket-id?style=flat-square&label=%20

<!-- Traefik -->

[traefik-checks]: https://img.shields.io/github/actions/workflow/status/raeffs/docker-host/apps-traefik.yml?branch=main&event=push&style=flat-square&label=%20
[traefik-version]: https://img.shields.io/github/v/release/traefik/traefik?style=flat-square&label=%20
[traefik-commit]: https://img.shields.io/github/last-commit/traefik/traefik?style=flat-square&label=%20

<!-- Wallabag -->

[wallabag-checks]: https://img.shields.io/github/actions/workflow/status/raeffs/docker-host/apps-wallabag.yml?branch=main&event=push&style=flat-square&label=%20
[wallabag-version]: https://img.shields.io/github/v/release/wallabag/wallabag?style=flat-square&label=%20
[wallabag-commit]: https://img.shields.io/github/last-commit/wallabag/wallabag?style=flat-square&label=%20

<!-- Watchtower -->

[watchtower-checks]: https://img.shields.io/github/actions/workflow/status/raeffs/docker-host/apps-watchtower.yml?branch=main&event=push&style=flat-square&label=%20
[watchtower-version]: https://img.shields.io/github/v/release/nicholas-fedor/watchtower?style=flat-square&label=%20
[watchtower-commit]: https://img.shields.io/github/last-commit/nicholas-fedor/watchtower?style=flat-square&label=%20

<!-- Whoami -->

[whoami-checks]: https://img.shields.io/github/actions/workflow/status/raeffs/docker-host/apps-whoami.yml?branch=main&event=push&style=flat-square&label=%20
[whoami-version]: https://img.shields.io/github/v/release/traefik/whoami?style=flat-square&label=%20
[whoami-commit]: https://img.shields.io/github/last-commit/traefik/whoami?style=flat-square&label=%20

<!-- Wishlist -->

[wishlist-checks]: https://img.shields.io/github/actions/workflow/status/raeffs/docker-host/apps-wishlist.yml?branch=main&event=push&style=flat-square&label=%20
[wishlist-version]: https://img.shields.io/github/v/release/cmintey/wishlist?style=flat-square&label=%20
[wishlist-commit]: https://img.shields.io/github/last-commit/cmintey/wishlist?style=flat-square&label=%20
