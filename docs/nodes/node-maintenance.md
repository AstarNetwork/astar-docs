---
sidebar_position: 5
---

# Node Maintenance

## Backup

Maintaining a backup node always sync for a collator is vital to make sure you always produce blocks and avoid being slashed. We highly recommend to have it on a different location and hosted on a different provider.

The collator session keys are stored into `/var/lib/astar/chains/${NETWORK}/keystore`.

:::info

You may need to install rsync package depending on your distro (using `sudo apt-get install rsync` or similar)

:::

:::caution

Make sure you save the content of this directory in  a backup directory on your local machine:

`rsync --rsync-path="sudo rsync" -r ${MAIN_SERVER_IP}:/var/lib/astar/chains/${NETWORK}/keystore .`

:::caution

### In case of an incident on the main collator

On the **main collator server**, stop and disable the collator service, and delete session keys:

```sh
sudo systemctl stop ${NETWORK}.service
sudo systemctl disable ${NETWORK}.service
sudo rm -R /var/lib/astar/chains/${NETWORK}/keystore/*
```

On your **local machine**, from your **backup directory**, copy the keys into the keystore folder of the backup server:

```sh
rsync --rsync-path="sudo rsync" -r ./keystore ${BACKUP_SERVER_IP}:/var/lib/astar/chains/${NETWORK}
```

On the backup collator server, update permission of the ``keystore`` folder and restart the collator service:

```sh
sudo chown -R astar:astar /var/lib/astar/
sudo systemctl restart ${NETWORK}.service
```

## Get node logs

To get the last 100 lines from the node logs, use the following command:

```sh
journalctl -fu astar-collator -n100
```

## Upgrade node

When an upgrade is necessary, node operators are be notified in our [Discord](https://discord.gg/Z3nC9U4) and Element group.

Download the [latest release](https://github.com/AstarNetwork/Astar/releases/latest) from Github:

```sh
wget $(curl -s https://api.github.com/repos/AstarNetwork/Astar/releases/latest | grep "tag_name" | awk '{print "https://github.com/PlasmNetwork/Plasm/releases/download/" substr($2, 2, length($2)-3) "/astar-collator-" substr($2, 3, length($2)-4) "-ubuntu-x86_64.tar.gz"}')
tar -xvf astar-collator*.tar.gz
```

Move the new release binary and restart the service:

```sh
sudo mv ./astar-collator /usr/local/bin
sudo chmod +x /usr/local/bin/astar-collator
sudo systemctl restart ${NETWORK}.service
```

## Purge node

:::danger
Do **never purge chain data of an active collator**, it not produce blocks anymore during all the sync process and harm the chain block production rate.
Instead, switch to your backup node and purge only once the backup is **actively collating**.
:::

To start a node from scratch without any chain data, just wipe the chain data directory:

```sh
sudo systemctl stop ${NETWORK}.service
sudo rm -R /var/lib/astar/chains/${NETWORK}/db/*
sudo systemctl start ${NETWORK}.service
```

## Relay Chain snapshot

:::caution
NOTE: know what you are doing when using snapshots!
:::

If you run your collator it not only needs to sync the **mainnet** chain but also the complete relay chain from **Kusama / Polkadot**. This can take up to 3-4 days. You can also use a snapshot of Kusama/Polkadot. You can download this [here](https://polkashots.io/) and will save a lot of time.