---
sidebar_position: 2
---

# Collator Requirements

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## How to become a collator

### Permissionless collator

To become a permissionless collator on our networks, you need to meet below requirements.

**Collator staking requirements**

<Tabs>
<TabItem value="astar" label="Astar Network" default>
<p>
<ul>
  <li>Bond: 3,200,000 ASTR tokens (3.2M $ASTR)</li>
  <li>Meet hardware requirements</li>
</ul>
</p>
<p>If your node stops producing blocks for 1 session, your node will be kicked out from the active set. Running a node with low performance can lead to skipping blocks which can lead to being kicked out of the active set.</p>

</TabItem>
<TabItem value="shiden" label="Shiden Network">
<p>
<ul>
  <li>Bond: 32,000 SDN tokens (32k $SDN)</li>
  <li>Meet hardware requirements</li>
</ul>
</p>
<p>If your node stops producing blocks for 1 session, your node will be kicked out from the active set. Running a node with low performance can lead to skipping blocks which can lead to being kicked out of the active set.</p>

</TabItem>
</Tabs>

:::tip
Set your collator with:
**Extrinsics - CollatorSelection - Register as candidate** |
Onboarding takes **n+1** session.
:::

---

### System requirements

A collator usually deploys its nodes on cloud servers. You can choose your preferred operating system, we highly recommend Linux.

**Hardware requirements**

Here you can find the basic configuration for reference, which guarantees that all blocks can process in time. If the hardware is inferior to that, there is a chance it will be malfunctioning and you will be automatically kicked out from the active set.

:::note
Make sure your server is only dedicated to the collator node
:::

<Tabs>
<TabItem value="astar" label="Astar" default>

| Component | Requirement |
|---|---|
| System | Ubuntu 20.04 |
| CPU | 8 cores |
| Memory | 16 GB |
| Hard Disk | 400 GB SSD NVMe |

</TabItem>

<TabItem value="shiden" label="Shiden" default>

| Component | Requirement |
|---|---|
| System | Ubuntu 20.04 |
| CPU | 8 cores |
| Memory | 16 GB |
| Hard Disk | 400 GB SSD NVMe |

</TabItem>

<TabItem value="shibuya" label="Shibuya" default>

| Component | Requirement |
|---|---|
| System | Ubuntu 20.04 |
| CPU | 4 cores |
| Memory | 8 GB |
| Hard Disk | 100 GB SSD NVMe |

</TabItem>
</Tabs>

:::tip
Shibuya is the perfect network to test out your knowledge about running nodes in the Astar ecosystem. To join the collator set on Shibuya you need to apply for a 32k SBY fund.
If you never operated a collator node, we strongly encourage you to spin up a **Shibuya collator** node to start before thinking about mainnet. A perfect start is our [secure setup guide](/docs/nodes/collator/secure_setup_guide/).
:::
