
# Networking Stack

The networking stack consists of the following applications:

- [Pihole](https://hub.docker.com/r/pihole/pihole) is used as an ad blocker and local DNS server.
- [Pihole Sync](https://hub.docker.com/r/shirom/pihole-sync) is used to synchronize the Pihole settings to a second server.
- [Unbound](https://hub.docker.com/r/mvance/unbound) is used as recursive DNS resolver by Pihole.
- [Wireguard](https://hub.docker.com/r/linuxserver/wireguard) is used as a VPN server.

## Configuration

The following configuration options are available and can be set either by providing a `.env` file in the root of the repository or by setting the environment variable directly:

### Pihole

| Variable             | Description                                                                                                               | Default           |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `PIHOLE_PASSWORD`    | The password used for Pihole.                                                                                             | (none / required) |
| `PIHOLE_SYNC_NODE`   | The mode in which the Pihole sync node should operate. Can either be `sender` or `receiver`.                              | `receiver`        |
| `PIHOLE_SYNC_TARGET` | The ip address of the Pihole sync receiver node (in case this node operates as `sender`, otherwise the value is ignored). | (none)            |

### Wireguard

| Variable            | Description                                                                               | Default           |
| ------------------- | ----------------------------------------------------------------------------------------- | ----------------- |
| `WIREGUARD_PEERS`   | One or more comma separated peer names for which Wireguard should create a configuration. | (none / required) |
| `WIREGUARD_PORT`    | The port on which Wireguard will listen for connections.                                  | 51820             |
| `WIREGUARD_PEERDNS` | One or more comma separated dns servers that used for clients.                            | auto              |

### Global Configuration

There are also some global configuration options that affect all containers. Check the [Setup Instructions](../setup) for more details about the global configuration options.
