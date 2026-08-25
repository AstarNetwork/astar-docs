---
sidebar_position: 4
---

# Snapshots

Generally speaking, using database snapshots is discouraged, it is a best practice to synchronize database from scratch.
In some particular cases, it may be needed to use a parachain snapshot.

:::warning[No snapshot provider is currently available]

StakeCraft discontinued its Astar and Shiden archive snapshot service in August 2026, and no replacement provider has been appointed. Synchronize your node from scratch, or restore from a snapshot you produced yourself.

:::

## Restore from a snapshot

If you maintain your own archive backups, or another operator you trust shares one with you, you can restore it into the node database directory. Replace `{SNAPSHOT_URL}` with the location of your archive.

Note: these are archive snapshots only and they don't work on pruned node.

Stop your node before you replace its database.

```sh
# remove your Astar database directory in case you already have one
rm -rf {BASE_PATH}/chains/{CHAIN}/db

# in case you haven't started a node yet, you need to make the following dir
mkdir -p {BASE_PATH}/chains/{CHAIN}/db/full

# browse the directory
cd {BASE_PATH}/chains/{CHAIN}/db/full

# download and extract the snapshot
wget -O - {SNAPSHOT_URL} | tar xf -

# pay attention to file ownership if needed
chown -R astar:astar {BASE_PATH}/chains/{CHAIN}/db/full
```

Note: `{BASE_PATH}` is the path specified for chain data in the node command
* The best practice is to set it to `/var/lib/astar`
* The default path if you don't specify any is `~/.local/share/astar-collator`

## Relay chain

Since the introduction of warp sync, it is not necessary and discouraged to use a relay chain snapshot.
This method downloads finality proofs and state in priority, it allows the relay node to be up with data necessary to the parachain node in less that 15 minutes.

To sync the relay chain in warp mode, just add this at the end of the node command:

```sh
-- --sync warp
```
