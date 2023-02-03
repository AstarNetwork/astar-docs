---
sidebar_position: 6
---

# 6. Configuration

:::tip
There is a lot of copy/paste in this section, but it is highly recommended that you try to understand each step. Please use our official discord for support.
:::

### Prometheus

Let’s edit the **Prometheus config file** and add all the modules to it:

```sql
sudo nano /etc/prometheus/prometheus.yml
```

Add the following code to the file and save `ctrl+o` `ctrl+x`:

```sql
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files:
  - 'rules.yml'

alerting:
  alertmanagers:
  - static_configs:
    - targets:
      - localhost:9093

scrape_configs:
  - job_name: "prometheus"
    scrape_interval: 5s
    static_configs:
      - targets: ["localhost:9090"]
  - job_name: "substrate_node"
    scrape_interval: 5s
    static_configs:
      - targets: ["localhost:9615"]
  - job_name: "node_exporter"
    scrape_interval: 5s
    static_configs:
      - targets: ["localhost:9100"]
  - job_name: "process-exporter"
    scrape_interval: 5s
    static_configs:
      - targets: ["localhost:9256"]
```

* `scrape_interval` defines how often Prometheus scrapes targets, while `evaluation_interval` controls how often the software will evaluate the rules.
* `rule_files` sets the location of Alert manager rules that we will add next.
* `alerting` contains the alert manager target.
* `scrape_configs` contain the services Prometheus will monitor.

### Alert rules

Let’s create the `rules.yml` file this will set the **rules for Alert Manager**:

```sql
sudo touch /etc/prometheus/rules.yml
sudo nano /etc/prometheus/rules.yml
```

We are going to create **2 basic rules** that will trigger an alert in case the instance is down or the CPU usage crosses 80%. **Add the following lines and save the file:**

```sql
groups:
  - name: alert_rules
    rules:
      - alert: InstanceDown
        expr: up == 0
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "Instance $labels.instance down"
          description: "[{{ $labels.instance }}] of job [{{ $labels.job }}] has been down for more than 1 minute."

      - alert: HostHighCpuLoad
        expr: 100 - (avg by(instance)(rate(node_cpu_seconds_total{mode="idle"}[2m])) * 100) > 80
        for: 0m
        labels:
          severity: warning
        annotations:
          summary: Host high CPU load (instance Astar Node)
          description: "CPU load is > 80%\n  VALUE = {{ $value }}\n  LABELS: {{ $labels }}"
```

The criteria for **triggering an alert** are set in the `expr:` part. To create your own alerts, you’re going to have to learn and test the different variables provided to Prometheus by the services we are setting up. There is an infinite number of possibilities to **personalize your alerts**.

As this part can be time-consuming to learn and build, you can find a summary [list of alerts we like to use](https://pastebin.com/96wbiQN8).  Feel free to share your Alert file with the community. You should also have a look at [alerts provided by Parity](https://github.com/paritytech/substrate/tree/master/scripts/ci/monitoring/alerting-rules).

Then, check the **rules file**:

```
promtool check rules /etc/prometheus/rules.yml
```

And finally, check the **Prometheus config file**:

```
promtool check config /etc/prometheus/prometheus.yml
```

<center>
<img src="https://i.imgur.com/AQqiXjm.png" border="1"></img>
</center>

### Process exporter

**Process exporter** needs a little **config file** to be told which processes they should take into account:

```
sudo touch /etc/process-exporter/config.yml
sudo nano /etc/process-exporter/config.yml
```

Add the following code to the file and save:

```
process_names: 
  - name: "{{.Comm}}" 
    cmdline: 
    - '.+'
```

### Gmail setup

To allow AlertManager to send an email to you, you will need to generate something called an `app password` in your Gmail account. For details, click [here](https://support.google.com/accounts/answer/185833?hl=en) to follow the whole setup.

You should see something similar to the image below:

<center>
<img src="https://i.imgur.com/YID4WId.png" border="1"></img>
</center>

### Alert Manager

There is a configuration file named `alertmanager.yml` inside the directory that you just extracted in the previous command, but that is not useful yet. We will create our `alertmanager.yml` file under `/etc/alertmanager` with the following config.

Let’s create the file:

```
sudo touch /etc/alertmanager/alertmanager.yml
sudo nano /etc/alertmanager/alertmanager.yml
```

And add the **Gmail configuration** to it and save the file:

```
global:
 resolve_timeout: 1m

route:
 receiver: 'gmail-notifications'

receivers:
- name: 'gmail-notifications'
  email_configs:
  - to: YOUR_EMAIL
    from: YOUR_EMAIL
    smarthost: smtp.gmail.com:587
    auth_username: YOUR_EMAIL
    auth_identity: YOUR_EMAIL
    auth_password: YOUR_APP_PASSWORD
    send_resolved: true
```

With the above configuration, alerts will be sent using the email you set above. Remember to change `YOUR_EMAIL` to your email and paste the app password you just saved earlier to the `YOUR_APP_PASSWORD`. We will test the Alert Manager later in the guide.
