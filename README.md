<p align="center">
    <img width="25%" src="./logo.svg">
</p>

# Docker Compose configurations for Self-Hosting

This repository used to contain the configuration of my docker host running in my home network. Nowadays it is more of a collection of different docker compose configurations for services I either run in my home network or on some cloud infrastructure.

The repository uses Nx with a local plugin to manage the different projects. But if you don't want to use Nx or load a ton of Node.js dependencies, you can still use the docker compose configurations without any of it.

## What's included?

You can find a list of services that are included below. I try to create a folder (Nx project) per service / docker compose configuration. Almost all of the services depend on the reverse proxy Traefik. But other than that, they should be mostly self contained.

| Service                                  | Status | Rootless | Healthchecks | CI Checks |
| ---------------------------------------- | :----: | :------: | :----------: | :-------: |
| [Adminer](archive/adminer)               |   📦   |          |              |           |
| [Authelia](archive/authelia)             |   📦   |          |              |           |
| [Baikal](apps/baikal)                    |   🟢   |    ❌    |      ❌      |     ✅     |
| [Bonob](apps/bonob)                      |   🟢   |    ✅    |      ✅      |     ✅     |
| [Cloudflared](apps/cloudflared)          |        |          |              |           |
| [Commento](apps/commento)                |        |          |              |           |
| [Dozzle](apps/dozzle)                    |   🟢   |    ✅    |      ✅      |     ✅     |
| [Etesync](apps/etesync)                  |        |          |              |           |
| [Forgejo](apps/forgejo)                  |   🟢   |    ❌    |      ❌      |     ✅     |
| [Forgejo Runner](apps/forgejo-runner)    |   🟢   |    ❌    |      ❌      |     ❌     |
| [Gitea](archive/gitea)                   |   📦   |          |              |           |
| [Grafana](apps/grafana)                  |        |          |              |           |
| [Grocy](apps/grocy)                      |        |          |              |           |
| [Home Assistant](archive/home-assistant) |   📦   |          |              |           |
| [Homepage](apps/homepage)                |   🟢   |    ✅    |      ✅      |     ✅     |
| [Iperf](apps/iperf)                      |        |          |              |           |
| [Keycloak](apps/keycloak)                |   🟢   |    ❌    |      ❌      |     ✅     |
| [Leantime](apps/leantime)                |        |          |              |           |
| [Mastodon](archive/mastodon)             |   📦   |          |              |           |
| [Matomo](apps/matomo)                    |        |          |              |           |
| [Mealie](apps/mealie)                    |        |          |              |           |
| [Memos](apps/memos)                      |        |          |              |           |
| [Miniflux](apps/miniflux)                |   🟢   |    ✅    |      ✅      |     ✅     |
| [n8n](apps/n8n)                          |        |          |              |           |
| [Navidrome](apps/navidrome)              |   🟢   |    ✅    |      ❌      |     ✅     |
| [Ofelia](apps/ofelia)                    |        |          |              |           |
| [Open WebUI](apps/open-webui)            |        |          |              |           |
| [OpenProject](apps/openproject)          |        |          |              |           |
| [PiHole](archive/pihole)                 |   📦   |          |              |           |
| [Pocket ID](apps/pocket-id)              |   🟢   |    ✅    |      ✅      |     ✅     |
| [Portainer](archive/portainer)           |   📦   |          |              |           |
| [Prometheus](apps/prometheus)            |        |          |              |           |
| [Qdrant](apps/qdrant)                    |        |          |              |           |
| [Redmine](apps/redmine)                  |        |          |              |           |
| [Seq](apps/seq)                          |        |          |              |           |
| [Traefik](apps/traefik)                  |   🟢   |    ✅    |      ✅      |     ✅     |
| [Unbound](archive/unbound)               |   📦   |          |              |           |
| [Verdaccio](apps/verdaccio)              |        |          |              |           |
| [Wallabag](apps/wallabag)                |   🟢   |    ❌    |      ✅      |     ✅     |
| [Watchtower](apps/watchtower)            |   🟢   |    ✅    |      ✅      |     ✅     |
| [Whoami](apps/whoami)                    |   🟢   |    ✅    |      ❌      |     ✅     |
| [WireGuard](archive/wireguard)           |   📦   |          |              |           |
| [Wishlist](apps/wishlist)                |   🟢   |    ✅    |      ❌      |     ✅     |

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
