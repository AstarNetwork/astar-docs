---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Spin up a Collator

:::caution
Collators are responsible for the network stability, it is very important to be able to react at any time of the day or night in case of trouble. We strongly encourage collators to set up a monitoring and alerting system, learn more about this from our [secure setup guide] (/docs/nodes/collator/secure_setup_guide/).
:::

### Service Parameters

<Tabs>
<TabItem value="astar" label="Astar" default>

```sh
./astar-collator \
  --collator \
  --name {COLLATOR_NAME} \
  --chain astar \
  --base-path /var/lib/astar \
  --pruning archive \
  --trie-cache-size 0 \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
```

</TabItem>
<TabItem value="shiden" label="Shiden" default>

```sh
./astar-collator \
  --collator \
  --name {COLLATOR_NAME} \
  --chain shiden \
  --base-path /var/lib/astar \
  --pruning archive \
  --trie-cache-size 0 \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
```

</TabItem>
<TabItem value="shibuya" label="Shibuya" default>

```sh
./astar-collator \
  --collator \
  --name {COLLATOR_NAME} \
  --chain shibuya \
  --base-path /var/lib/astar \
  --pruning archive \
  --trie-cache-size 0 \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
```

</TabItem>
</Tabs>

### Verify synchronization

Before jumping to the next steps, you have to wait until your node is **fully synchronized**. This can take a long time depending on the chain height. Please note that syncing to one of our networks requires the node to sync with the network and with the relay chain.

Check the current synchronization:

```
journalctl -f -u shibuya-node -n100
```

### Session Keys

#### Author session keys

Run the following command to author session keys:

```
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933
```

The result will look like this (you just need to copy the key):

```
{"jsonrpc":"2.0","result":"0x600e6cea49bdeaab301e9e03215c0bcebab3cafa608fe3b8fb6b07a820386048","id":1}
```

#### Set session keys

Go to the Polkadot.js portal and connect to respective network (Astar, Shiden or Shibuya).

Go to _**Developper > Extrinsic**_ and select your **collator account** and extrinsic type: _**session / setKeys**_

Enter the **session keys** and set proof to `0x00`:

<center>
<img src="https://i.imgur.com/fXfqGal.png" border="1"></img>
</center>

Submit the transaction.

### Identity

#### Set identity

On the Polkadot.js portal select _**Accounts**_.

Open the 3 dots next to your collators address: **Set on-chain Identity**:

<center>
<img src="https://i.imgur.com/YIIWINt.png" border="1"></img>
</center>

Enter all fields you want to set:

<center>
<img src="https://i.imgur.com/pkC4glq.png" border="1"></img>
</center>

Send the transaction.

#### Request judgment

On the Polkadot.js portal select _**Developer > Extrinsic**_.

Select your **collator account** and extrinsic type: _**identity / requestJudgment**_.

Send the transaction.

### Bond funds

To start collating, you need to have **32 000 SDN** tokens for Shiden or **3 200 000 ASTR** tokens for Astar.

On the Polkadot.js portal select _**Developer > Extrinsic**_.

Select your **collator account** and extrinsic type: _**CollatorSelection / registerAsCandidate**_:

<center>
<img src="https://i.imgur.com/3YvdJbt.png" border="1"></img>
</center>

Submit the transaction.

### Production blocks

:::info
Onboarding takes place at `n+1` session.
:::

Once your collator is active, you will see your name inside **Network** tab every time you produce a block:

<center>
<img src="https://i.imgur.com/e70Tpbq.png" border="1"></img>
</center>
