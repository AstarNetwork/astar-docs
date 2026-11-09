---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Spin up a Collator

:::caution
Collators are responsible for the network stability, it is very important to be able to react at any time of the day or night in case of trouble. We strongly encourage collators to set up a monitoring and alerting system, learn more about this from our [secure setup guide](/docs/build/nodes/collator/secure_setup_guide/).
:::

### Service Parameters

<Tabs>
<TabItem value="astar" label="Astar" default>

```sh
./astar-collator \
  --state-pruning 1000 \
  --blocks-pruning 1000 \
  --collator \
  --name {COLLATOR_NAME} \
  --chain astar \
  --base-path /var/lib/astar \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/0' \
  -- \
  --sync warp
```

</TabItem>
<TabItem value="shiden" label="Shiden" default>

```sh
./astar-collator \
  --state-pruning 1000 \
  --blocks-pruning 1000 \
  --collator \
  --name {COLLATOR_NAME} \
  --chain shiden \
  --base-path /var/lib/astar \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/0' \
  -- \
  --sync warp
```

</TabItem>
<TabItem value="shibuya" label="Shibuya" default>

```sh
./astar-collator \
  --state-pruning 1000 \
  --blocks-pruning 1000 \
  --collator \
  --name {COLLATOR_NAME} \
  --chain shibuya \
  --base-path /var/lib/astar \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
  -- \
  --sync warp
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

:::important
Since runtime `2600`, `session.setKeys` checks that the account submitting it owns the session keys. You need the [`v5.51.0`](https://github.com/AstarNetwork/Astar/releases/tag/v5.51.0) client or newer to generate the keys together with their ownership proof. Keys that are already registered stay valid, so this applies to new collators and to key rotations.
:::

#### Author session keys

Get the public key of your **collator account** in hex (32 bytes). It's shown as `Public key (hex)` by `subkey inspect <YOUR_SS58_ADDRESS>`, and on the account page of Subscan.

Run the following command on the collator node, passing that public key as the owner:

```
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeysWithOwner", "params":["<COLLATOR_ACCOUNT_PUBLIC_KEY_HEX>"]}' http://localhost:9944
```

The result contains the session keys and the proof that your account owns them. Copy both values:

```
{"jsonrpc":"2.0","result":{"keys":"0x600e6cea49bdeaab301e9e03215c0bcebab3cafa608fe3b8fb6b07a820386048","proof":"0x..."},"id":1}
```

:::caution
`author_rotateKeys` (without owner) no longer works for registering keys: it returns no proof, so `setKeys` fails with `session.InvalidProof`.
:::

#### Set session keys

Go to the Polkadot.js portal and connect to respective network (Astar, Shiden or Shibuya).

Go to _**Developer > Extrinsics**_, select the **same collator account** you used as owner, and the extrinsic _**session / setKeys**_.

Enter the `keys` value as **keys** and the `proof` value as **proof**, then submit the transaction.

:::tip
The proof is only valid for the account passed as owner. If `setKeys` fails with `session.InvalidProof`, check that you are signing with that account and that you copied the full `proof` value.
:::

### Identity

#### Set identity

On the Polkadot.js portal select _**Accounts**_.

Open the 3 dots next to your collators address: **Set onchain Identity**:

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

### Bond funds and apply for candidacy

To apply collator candidacy, you need to have **32 000 SDN** tokens for Shiden or **3 200 000 ASTR** tokens for Astar.

On the Polkadot.js portal select _**Developer > Extrinsic**_.

Select your **collator account** and extrinsic type: _**CollatorSelection / applyForCandidacy()**_:

<center>
<img src="/img/tutorial/apply_for_collator.png" border="1"></img>
</center>

Submit the transaction.

### Request for approval from governance

Once your node is synchronized, session keys are set, identity is verified, and your **collator candidacy** has been submitted onchain using the `apply_for_candidacy` extrinsic, you must request approval from **Astar Governance** to officially join the active collator pool.

#### Step 1 – Create your governance application

All collator applications must now be reviewed and approved by governance before activation.

1. Go to the [**Astar Forum**](https://forum.astar.network/).  
2. Create a new topic under **Governance → [Collator & Node Operators](https://forum.astar.network/c/astar-governance/collator-node-operators/39)**.  
3. Title your post following this format:  `[Collator Application] {Your Collator Name}`
4. In your post, include the following information:
- **Collator name**  
- **Collator address** (account used for locking)  
- **Node details** (hardware specs, hosting provider, uptime/monitoring setup)  
- **Technical experience / background**  
- **Motivation to join the Astar collator set**  
- **Session keys** (the `keys` value from `author_rotateKeysWithOwner`)  
- **Proof of bond** (3,200,000 ASTR reserved onchain)  
- Any **additional details** that demonstrate reliability and contribution to the network  

#### Step 2 – Choose your governance approval path

After posting your forum application, you have **two possible approval paths**:

##### Option 1: Main Council review  
Within your forum post, you can directly **request a review and evaluation by the Astar Main Council**.  
If approved by a two-thirds majority vote, the Council will execute the onchain `approve_application` call to officially add your node to the collator candidates pool.  
Council discussions typically take place within the official [Astar Governance](https://forum.astar.network/c/astar-governance/29) forum threads or during Council meetings.

##### Option 2: Community Referendum  
Alternatively, you can submit your application directly to the **Astar community** via referendum.  
To do this:
- Create an **external proposal** that calls the `approve_application` extrinsic.  
- Once submitted, it will progress to a **referendum** where token holders can vote to approve or reject your candidacy.  
- Refer to the [Submitting an Onchain Proposal](/docs/use/how-to-guides/layer-1/governance/subsquare_guide.md#311-submitting-an-onchain-proposal) for detailed steps on how to submit an onchain proposal through Subsquare.

> ⏳ The approval timeline depends on the chosen path — Council votes are typically faster, while referendums follow standard onchain voting durations.

#### Step 3 – Onboarding confirmation

After approval:
- Your collator will appear in the **Network → Collators** tab on the [Polkadot\{.js\} portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.astar.network#/collators).  
- Block production will start automatically at the next session (`n + 1`).  
- You can monitor your block authorship and performance directly from the **Network** dashboard or telemetry.

### Production blocks

:::info
Onboarding takes place at `n+1` session.
:::

Once your collator is active, you will see your name inside **Network** tab every time you produce a block:

<center>
<img src="https://i.imgur.com/e70Tpbq.png" border="1"></img>
</center>

### Leave candidacy

Once you become a collator and enter a session, you are required to produce blocks for that session. To avoid slashing, candidates must first initiate the leave process.

On the Polkadot.js portal select _**Developer > Extrinsic**_.

Select your **collator account** and extrinsic type: _**CollatorSelection / leaveIntent**_:

<center>
<img src="/img/tutorial/collator-selection-leave-intent.png" border="1"></img>
</center>

The collator has now removed themselves from the next session. After the current session has ended, candidates can withdraw their bond.

On the Polkadot.js portal select _**Developer > Extrinsic**_.

Select your **collator account** and extrinsic type: _**CollatorSelection / withdrawBond**_:

<center>
<img src="/img/tutorial/collator-selection-withdraw-bond.png" border="1"></img>
</center>
