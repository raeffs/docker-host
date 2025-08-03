<div align="center">

<img height="100px" width="100px" src="../../docs/assets/navidrome.png" />

# Navidrome

> Navidrome is an open source web-based music collection server and streamer. It gives you freedom to listen to your music collection from any browser or mobile device. It's like your personal Spotify!

<br/>

![navidrome-status]
![navidrome-rootless]
![navidrome-healthchecks]
![navidrome-checks]
![navidrome-version]
![navidrome-commit]
<br/><br/>

</div>

- Source: https://github.com/navidrome/navidrome
- Documentation: https://www.navidrome.org/docs/

## Mount SMB Share

If you want to mount a SMB share as `navidrome-music` volume, you need to manually create that volume before starting the service:

```bash
# install required packages
sudo apt install cifs-utils

# create volume
docker volume create --driver local --opt type=cifs --opt device=//[smb-server-ip]/[share-path] --opt o=username=[username],password=[password],domain=[workgroup-name] navidrome-music
```

Alternatively, you can declare the options for the volume directly in the compose file. An example can be found in `docker-compose.smb-example.yml`.

<!-- Navidrome -->

[navidrome-status]: https://img.shields.io/badge/active_(in_use)-blue?style=for-the-badge&label=status
[navidrome-rootless]: https://img.shields.io/badge/yes-blue?style=for-the-badge&label=rootless
[navidrome-healthchecks]: https://img.shields.io/badge/no-red?style=for-the-badge&label=healtchecks
[navidrome-checks]: https://img.shields.io/github/actions/workflow/status/raeffs/docker-host/apps-navidrome.yml?branch=main&event=push&style=for-the-badge&label=ci%20checks
[navidrome-version]: https://img.shields.io/github/v/release/navidrome/navidrome?style=for-the-badge
[navidrome-commit]: https://img.shields.io/github/last-commit/navidrome/navidrome?style=for-the-badge
