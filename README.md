# Overview

## Dev

- Start: `docker-compose up -d`
- Stop: `docker-compose down -v`

## SystemD

- Place config in `/etc/systemd/system/docker-host.service.d/setup.conf`:

```
[Service]
Environment="IP=127.0.0.1"
Environment="PROJECT_PATH=/path/to/local/clone/of/docker-host"
```

- Add service:

```
sudo systemctl enable /path/to/local/clone/of/docker-host/docker-host.service
sudo systemctl daemon-reload
```

- Control service with SystemD:

```
sudo systemctl start docker-host.service
sudo journalctl -fu docker-host
```

# Services

- Prometheus: http://localhost:9090
- Blackbox Exporter: http://localhost:9115
- Grafana: http://localhost:3000

## Prometheus

Used to monitor several endpoints by pulling data from the endpoints.

- [Documentation](https://prometheus.io/docs/introduction/overview/)
- [Source](https://github.com/prometheus/prometheus)
- [Docker Image](https://hub.docker.com/r/prom/prometheus/)

## Blackbox Exporter

Allows probing of endpoints over HTTP, HTTPS, DNS, TCP and ICMP.

- [Source](https://github.com/prometheus/blackbox_exporter)
- [Docker Image](https://hub.docker.com/r/prom/blackbox-exporter)

## Grafana

Used to visualize the collected data.

- [Source](https://github.com/grafana/grafana)
- [Docker Image](https://hub.docker.com/r/grafana/grafana)
