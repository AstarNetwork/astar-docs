---
sidebar_position: 8
---

# 8. Launch Services

## Launch Services

Launch a **daemon reload** to take the services into account in `systemd`:

```
sudo systemctl daemon-reload
```

Start the services:

```
sudo systemctl start prometheus.service
sudo systemctl start node_exporter.service
sudo systemctl start process-exporter.service
sudo systemctl start alertmanager.service
sudo systemctl start grafana-server
```

And check that they are working fine, one by one:

```
systemctl status prometheus.service
systemctl status node_exporter.service
systemctl status process-exporter.service
systemctl status alertmanager.service
systemctl status grafana-server
```

A service working fine should look like this:

<center>
<img src="https://i.imgur.com/GtgGvQd.png" border="1"></img>
</center>

When everything is okay, activate the services!

```
sudo systemctl enable prometheus.service
sudo systemctl enable node_exporter.service
sudo systemctl enable process-exporter.service
sudo systemctl enable alertmanager.service
sudo systemctl enable grafana-server
```

## Test Alert manager <a href="#ac61" id="ac61"></a>

Run this command to fire an alert:

```
curl -H "Content-Type: application/json" -d '[{"labels":{"alertname":"Test"}}]' localhost:9093/api/v1/alerts
```

Check your inbox, you have a surprise:

<center>
<img src="https://i.imgur.com/WItIQ8a.png" border="1"></img>
</center>

You will always receive a **Firing** alert first, then a **Resolved** notification to indicate the alert isn’t active anymore.