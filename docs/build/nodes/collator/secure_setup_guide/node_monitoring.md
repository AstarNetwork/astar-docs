---
sidebar_position: 5
---

# 5. Node Monitoring

## Installation of Node Monitoring

In this chapter, we will walk you through the setup of local monitoring for your collator node.

## Installation

Make sure you download the latest releases. Please check [Prometheus](https://prometheus.io/download/), [Process exporter](https://github.com/ncabatoff/process-exporter/releases), and [Grafana](https://grafana.com/grafana/download) download pages. We will continue to update this guide but recommend that you verify that you are installing the latest versions.

There are 7 steps to install these packages:

* Download
* Extract
* Move the files to `/usr/lib/bin`
* Create dedicated users
* Create directories
* Change the ownership of those directories
* Cleanup

### Prometheus

```python
#download files
wget https://github.com/prometheus/prometheus/releases/download/v2.33.4/prometheus-2.33.4.linux-amd64.tar.gz

#extract
tar xvf prometheus-*.tar.gz

#move the files to /usr/lib/bin
sudo cp ./prometheus-2.33.4.linux-amd64/prometheus /usr/local/bin/
sudo cp ./prometheus-2.33.4.linux-amd64/promtool /usr/local/bin/
sudo cp -r ./prometheus-2.33.4.linux-amd64/consoles /etc/prometheus
sudo cp -r ./prometheus-2.33.4.linux-amd64/console_libraries /etc/prometheus

#create dedicated users
sudo useradd --no-create-home --shell /usr/sbin/nologin prometheus

#create directories
sudo mkdir /var/lib/prometheus

#change the ownership
sudo chown prometheus:prometheus /etc/prometheus/ -R
sudo chown prometheus:prometheus /var/lib/prometheus/ -R
sudo chown prometheus:prometheus /usr/local/bin/prometheus
sudo chown prometheus:prometheus /usr/local/bin/promtool

#cleanup
rm -rf ./prometheus*
```

### Node Exporter

```python
#download files
wget https://github.com/prometheus/node_exporter/releases/download/v1.3.1/node_exporter-1.3.1.linux-amd64.tar.gz

#extract
tar xvf node_exporter-*.tar.gz

#move the files to /usr/lib/bin
sudo cp ./node_exporter-1.3.1.linux-amd64/node_exporter /usr/local/bin/

#create dedicated users
sudo useradd --no-create-home --shell /usr/sbin/nologin node_exporter

#change the ownership
sudo chown node_exporter:node_exporter /usr/local/bin/node_exporter

#cleanup
rm -rf ./node_exporter*
```

### Process Exporter

```python
#download files
wget https://github.com/ncabatoff/process-exporter/releases/download/v0.7.10/process-exporter-0.7.10.linux-amd64.tar.gz

#extract
tar xvf process-exporter-*.tar.gz

#move the files to /usr/lib/bin
sudo cp ./process-exporter-0.7.10.linux-amd64/process-exporter /usr/local/bin/

#create dedicated users
sudo useradd --no-create-home --shell /usr/sbin/nologin process-exporter

#create directories
sudo mkdir /etc/process-exporter

#change the ownership
sudo chown process-exporter:process-exporter /etc/process-exporter -R
sudo chown process-exporter:process-exporter /usr/local/bin/process-exporter

#cleanup
rm -rf ./process-exporter*
```

### Alert Manager

```python
#download files
wget https://github.com/prometheus/alertmanager/releases/download/v0.23.0/alertmanager-0.23.0.linux-amd64.tar.gz

#extract
tar xvf alertmanager-*.tar.gz

#move the files to /usr/lib/bin
sudo cp ./alertmanager-0.23.0.linux-amd64/alertmanager /usr/local/bin/
sudo cp ./alertmanager-0.23.0.linux-amd64/amtool /usr/local/bin/

#create dedicated users
sudo useradd --no-create-home --shell /usr/sbin/nologin alertmanager

#create directories
sudo mkdir /etc/alertmanager
sudo mkdir /var/lib/alertmanager

#change the ownership
sudo chown alertmanager:alertmanager /etc/alertmanager/ -R
sudo chown alertmanager:alertmanager /var/lib/alertmanager/ -R
sudo chown alertmanager:alertmanager /usr/local/bin/alertmanager
sudo chown alertmanager:alertmanager /usr/local/bin/amtool

#cleanup
rm -rf ./alertmanager*
```

### Grafana

```python
sudo apt-get install -y adduser libfontconfig1
wget https://dl.grafana.com/oss/release/grafana_8.4.2_amd64.deb
sudo dpkg -i grafana_8.4.2_amd64.deb

sudo grafana-cli plugins install camptocamp-prometheus-alertmanager-datasource
sudo systemctl restart grafana-server

#cleanup
rm -rf ./grafana*
```
