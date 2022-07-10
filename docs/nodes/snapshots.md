---
sidebar_position: 4
---

# Snapshots

## Shiden

You can download a daily snapshot of Shiden at <https://snapshots.stakecraft.com/>

### Instructions

```sh
# remove your Shiden folder in case you already have one
rm -rf ~/.local/share/astar-collator/chains/shiden/db/full

# in case you haven't started a node yet, you need to make the following dir
mkdir -p ~/.local/share/astar-collator/chains/shiden/db/full

# browse the directory
cd ~/.local/share/astar-collator/chains/shiden/db/full

# download latest snapshot
wget -O - COPYURL_FROM_WEBISTE | tar xf -
```

## Kusama Relaychain

You can download the snapshot from <https://polkashots.io/>

### Instructions

```sh
# navigate to ksmcc3
cd /var/lib/astar/shiden-db/polkadot/chains/ksmcc3

# if folder doesn't excist create and go navigate to the folder
sudo mkdir /var/lib/astar/shiden-db/polkadot/chains/ksmcc3 && cd /var/lib/astar/shiden-db/polkadot/chains/ksmcc3

# download the latest snapshot
wget https://ksm-rocksdb.polkashots.io/snapshot -O kusama.RocksDb.tar.lz4

# extract snapshot (this can take some time) - make sure you have permission in the directory
sudo lz4 -c -d kusama.RocksDb.tar.lz4 | tar -x -C /var/lib/astar/shiden-db/polkadot/chains/ksmcc3

# remove file
rm -v kusama.RocksDb.tar.lz4
```

## Polkadot Relaychain

You can download the snapshot from <https://polkashots.io/>

```sh
# navigate to ksmcc3
cd /var/lib/astar/astar-db/polkadot/chains/polkadot

# if folder doesn't excist create and go navigate to the folder
sudo mkdir /var/lib/astar/astar-db/polkadot/chains/polkadot && cd /var/lib/astar/astar-db/polkadot/chains/polkadot

# download the latest snapshot
wget https://dot-rocksdb.polkashots.io/snapshot -O polkadot.RocksDb.tar.lz4

# extract snapshot (this can take some time) - make sure you have permission in the directory
lz4 -c -d polkadot.RocksDb.tar.lz4 | tar -x -C /var/lib/astar/astar-db/polkadot/chains/polkadot

# remove file
rm -v polkadot.RocksDb.tar.lz4
```
