---
sidebar_position: 7
---

# 7. Services

## Systemd

Starting all programs manually is such a pain. So we are going to use this section to create the `systemd` services.

Creating those services will setup a fully **automated process** that you will never have to do again **if your node reboots**.

:::tip
Please set all the services provided here.
:::

### Prometheus

```
sudo touch /etc/systemd/system/prometheus.service
sudo nano /etc/systemd/system/prometheus.service
```

```
[Unit]
  Description=Prometheus Monitoring
  Wants=network-online.target
  After=network-online.target

[Service]
  User=prometheus
  Group=prometheus
  Type=simple
  ExecStart=/usr/local/bin/prometheus \
  --config.file /etc/prometheus/prometheus.yml \
  --storage.tsdb.path /var/lib/prometheus/ \
  --web.console.templates=/etc/prometheus/consoles \
  --web.console.libraries=/etc/prometheus/console_libraries
  ExecReload=/bin/kill -HUP $MAINPID

[Install]
  WantedBy=multi-user.target
```

### Node exporter

```
sudo touch /etc/systemd/system/node_exporter.service
sudo nano /etc/systemd/system/node_exporter.service
```

```
[Unit]
  Description=Node Exporter
  Wants=network-online.target
  After=network-online.target

[Service] 
  User=node_exporter
  Group=node_exporter
  Type=simple
  ExecStart=/usr/local/bin/node_exporter

[Install]
  WantedBy=multi-user.target
```

### Process exporter

```
sudo touch /etc/systemd/system/process-exporter.service
sudo nano /etc/systemd/system/process-exporter.service
```

```
[Unit]
  Description=Process Exporter
  Wants=network-online.target
  After=network-online.target

[Service]
  User=process-exporter
  Group=process-exporter
  Type=simple
  ExecStart=/usr/local/bin/process-exporter \
  --config.path /etc/process-exporter/config.yml

[Install]
WantedBy=multi-user.target
```

### Alert manager

```
sudo touch /etc/systemd/system/alertmanager.service
sudo nano /etc/systemd/system/alertmanager.service
```

```
[Unit]
  Description=AlertManager Server Service
  Wants=network-online.target
  After=network-online.target

[Service]
  User=alertmanager
  Group=alertmanager
  Type=simple
  ExecStart=/usr/local/bin/alertmanager \
  --config.file /etc/alertmanager/alertmanager.yml \
  --storage.path /var/lib/alertmanager \
  --web.external-url=http://localhost:9093 \
  --cluster.advertise-address='0.0.0.0:9093'

[Install]
WantedBy=multi-user.target
```

### Grafana

**Grafana’s service** is automatically created during the extraction of the `deb` package, you do not need to create it manually.


Now it's getting exciting! We are going to fire up everything. If you encounter errors in a file, go back to previous sections steps and check if you missed anything.
If cannot identify the issues then join our Discord. We will provide you with support there.
