# Navidrome

Website: https://www.navidrome.org
GitHub: https://github.com/navidrome/navidrome

## Mount SMB Share

If you want to mount a SMB share as `navidrome-music` volume, you need to manually create that volume before starting the service:

```bash
# install required packages
sudo apt install cifs-utils

# create volume
docker volume create --driver local --opt type=cifs --opt device=//[smb-server-ip]/[share-path] --opt o=username=[username],password=[password],domain=[workgroup-name] navidrome-music
```
