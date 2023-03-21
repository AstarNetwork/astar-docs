---
sidebar_position: 2
---

# Collator Requirements

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## How to become a collator

### Permissionless collator

To become a permissionless collator on our networks, you need to meet the requirements below.

**Collator staking requirements**

<Tabs>
<TabItem value="astar" label="Astar Network" default>
<p>
<ul>
  <li>Bond: 3,200,000 ASTR tokens (3.2M $ASTR)</li>
  <li>Meet hardware requirements</li>
</ul>
</p>
<p>If your node stops producing blocks for 1 session, your node will be kicked out of the active set and 1% of the bonded funds will be slashed. Running a node with low performance can lead to skipping blocks which may result in being kicked out of the active set.</p>

</TabItem>
<TabItem value="shiden" label="Shiden Network">
<p>
<ul>
  <li>Bond: 32,000 SDN tokens (32k $SDN)</li>
  <li>Meet hardware requirements</li>
</ul>
</p>
<p>If your node stops producing blocks for 1 session, your node will be kicked out of the active set and 1% of the bonded funds will be slashed. Running a node with low performance can lead to skipping blocks which can lead to being kicked out of the active set.</p>

</TabItem>
</Tabs>

:::tip
Set your collator with:
**Extrinsics - CollatorSelection - Register as candidate** |
Onboarding takes **n+1** session.
:::

---

### System requirements

A collator deploys its node on a remote server. You can choose your preferred provider for dedicated servers and operating system. Generally speaking, we recommand you to select a provider/server in your region, this will increase decentralization of the network.
You can choose your preferred operating system, though we highly recommend Linux.

**Hardware requirements**

Use the charts below to find the basic configuration, which guarantees that all blocks can process in time. If the hardware doesn't meet these requirements, there is a high chance it will malfunction and you risk be automatically **kicked out and slashed** from the active set.

:::caution
Make sure your server is a **bare metal only dedicated to the collator node**, any unnecessary other process running on it will significantly decrease the collator performance.
**We strongly discourage using a VPS** to run a collator because of their low performances.

Collators are the nodes which require the most powerful and fast machine, because they only have a very short time frame to assemble a block and collate it to the relay chain.
To run a collator, it is absolutely necessary to use a **CPU of minimum 4 Ghz per core** and a **NVMe SSD disk** (SATA SSD are not suitable for collators because they are too slow).
:::

<Tabs>
<TabItem value="astar" label="Astar" default>

| Component | Requirement |
|---|---|
| System | Ubuntu 20.04 |
| CPU | 8 cores - minimum 4 Ghz per core |
| Memory | 16 GB |
| Hard Disk | 500 GB SSD NVMe |

</TabItem>

<TabItem value="shiden" label="Shiden" default>

| Component | Requirement |
|---|---|
| System | Ubuntu 20.04 |
| CPU | 8 cores - minimum 4 Ghz per core |
| Memory | 16 GB |
| Hard Disk | 500 GB SSD NVMe |

</TabItem>

<TabItem value="shibuya" label="Shibuya" default>

| Component | Requirement |
|---|---|
| System | Ubuntu 20.04 |
| CPU | 4 cores - minimum 3.5 Ghz per core |
| Memory | 8 GB |
| Hard Disk | 200 GB SSD NVMe |

</TabItem>
</Tabs>

:::tip
Shibuya is the perfect network to test out your knowledge about running nodes in the Astar ecosystem. To join the collator set on Shibuya you need to apply for a 32k SBY fund.
If you never operated a collator node, we strongly encourage you to spin up a **Shibuya collator** node to start before thinking about mainnet. A perfect start is our [secure setup guide](/docs/nodes/collator/secure_setup_guide/).
:::
