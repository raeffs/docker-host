# Overview

- Start: `docker-compose up -d`
- Stop: `docker-compose down -v`

- Prometheus: http://localhost:9090
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
