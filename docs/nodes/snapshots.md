---
sidebar_position: 4
---

# Snapshots

Generally speaking, using database snapshots is discouraged, it is a best practice to synchronize database from scratch.
In some particular cases, it may be needed to use a parachain snapshot. Stakecraft is providing archive db snapshots for Astar and Shiden at <https://snapshots.stakecraft.com/>.
Note: these are archive snapshots only and they don't work on pruned node.

## Stakecraft snapshots usage

```sh
# remove your Astar database directory in case you already have one
rm -rf {BASE_PATH}/chains/{CHAIN}/db

# in case you haven't started a node yet, you need to make the following dir
mkdir -p {BASE_PATH}/chains/{CHAIN}/db/full

# browse the directory
cd {BASE_PATH}/chains/{CHAIN}/db/full

# download latest snapshot
wget -O - {STAKECRAFT_WEBSITE_SNAPSHOT} | tar xf -

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
