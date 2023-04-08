---
sidebar_position: 3
---

# 3. SSH Tunneling

# SSH Tunneling

**Grafana** runs an **HTTP** server on your local node so basically, we shouldn’t access it directly from the outside.

**SSH tunneling** is considered to be a safe way to make traffic transit from your node to your local computer (or even phone). The principle is to make the SSH client listen to a specific port on your local machine, **encrypt traffic through SSH** protocol, and forward it to the target port on your node.

<center>
<img src="https://i.imgur.com/eImkfgG.png" border="1"></img>
</center>

Of course, you could also configure Grafana to run an HTTPS server but we do not want to expose another open port. Since our data will be encrypted with SSH, **we do not need HTTPS**.

Once we have finished installing Grafana on our node, we will access it through this address on our local machine: `http://localhost:2022`

&#x20;As PuTTy is a very popular client usable on many OS and used in this guide, here is where you can configure local port forwarding. If you want to [use OpenSSL please follow this guide] (https://bldstackingnode.medium.com/monitoring-substrate-node-polkadot-kusama-parachains-validator-guide-922734ea4cdb#3351).

<center>
<img src="https://i.imgur.com/8csCM4y.png" border="1"></img>
</center>

Inside the SSH | Tunnel’s menu, just add the local port and destination then click _Add_.

* `2022` is the local port we arbitrary chose (please use a different unused local port inside the range 1024–49151)
* `3000` is Grafana’s port

:::tip
Don’t forget to save the session.
:::

