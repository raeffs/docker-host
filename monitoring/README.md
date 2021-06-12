# Monitoring Stack

- [Prometheus](https://hub.docker.com/r/prom/prometheus) is used for monitoring of services and the network.
- [Blackbox-Exporter](https://hub.docker.com/r/prom/blackbox-exporter) is an exporter for Prometheus that is used to ping network targets.
- [Speedtext-Exporter](https://hub.docker.com/r/raeffs/speedtest-exporter) is an exporter for Prometheus that is used to execute network speed tests.
- [Pihole-Exporter](https://hub.docker.com/r/ekofr/pihole-exporter) is an exporter for Prometheus that is used to collect data from Pihole.
- [Grafana](https://hub.docker.com/r/grafana/grafana) is used to visualize the data collected by Prometheus.
- [Seq](https://hub.docker.com/r/datalust/seq) is used to collect application logs.
