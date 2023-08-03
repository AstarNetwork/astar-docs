---
sidebar_position: 6
---

# Node Maintenance

## Backup

Maintaining a backup node that is in sync with a collator is vital to ensuring continuous and uninterrupted block production, and avoiding the possibility of being slashed. We highly recommend locating a backup node in a different physical location, with a different provider.

Note: The collator session keys are stored in `/var/lib/astar/chains/{NETWORK}/keystore`.

:::info

You may need to install the rsync package depending on your distro (using `sudo apt-get install rsync` or similar)

:::

:::caution

Ensure you create a backup of the keystore folder on your local machine using the following command:

`rsync --rsync-path="sudo rsync" -r {MAIN_SERVER_IP}:/var/lib/astar/chains/{NETWORK}/keystore .`

:::caution

### In case of an incident on the main collator

On the **backup collator server**, stop the collator service and remove keys:

```sh
sudo systemctl stop {NETWORK}.service
sudo rm -rf /var/lib/astar/chains/{NETWORK}/keystore/*
```

On your **local machine**, from your **backup directory**, copy the keys into the keystore folder of the backup server:

```sh
rsync --rsync-path="sudo rsync" -r ./keystore {BACKUP_SERVER_IP}:/var/lib/astar/chains/{NETWORK}
```

On the **backup collator server**, update permission of the ``astar`` directory and restart the collator service:

```sh
sudo chown -R astar:astar /var/lib/astar/
sudo systemctl start {NETWORK}.service
```

## Get node logs

To get the last 100 lines from the node logs, use the following command:

```sh
journalctl -fu astar-collator -n100
```

## Upgrade node

When a node upgrade is necessary, node operators are notified with instructions in the [Astar Dev Announcement Telegram](https://t.me/+cL4tGZiFAsJhMGJk), Astar Discord (INSERT_LINK), and [The Astar Node Upgrade Element channel](https://matrix.to/#/#shiden-runtime-ann:matrix.org). Join and follow any of these channels to receive news about node updates and node upgrades.

Download the [latest release](https://github.com/AstarNetwork/Astar/releases/latest) from Github:

```sh
wget $(curl -s https://api.github.com/repos/AstarNetwork/Astar/releases/latest | grep "tag_name" | awk '{print "https://github.com/AstarNetwork/Astar/releases/download/" substr($2, 2, length($2)-3) "/astar-collator-v" substr($2, 3, length($2)-4) "-ubuntu-x86_64.tar.gz"}')
tar -xvf astar-collator*.tar.gz
```

Move the new release binary and restart the service:

```sh
sudo mv ./astar-collator /usr/local/bin
sudo chmod +x /usr/local/bin/astar-collator
sudo systemctl restart {NETWORK}.service
```

## Purge node

:::danger
**Never purge the chain data on an active collator** or it will not produce blocks during the sync process, and therefore reduce the block production rate of the chain.
Instead, switch to your backup node and *only* purge the chain data after it is **actively collating**.
:::

To start a node from scratch without any existing chain data, simply wipe the chain data directory:

```sh
sudo systemctl stop {NETWORK}.service
sudo rm -R /var/lib/astar/chains/{NETWORK}/db/*
sudo systemctl start {NETWORK}.service
```

## Snapshot

Please refer to **snapshot page** (INSERT_LINK).
:::
