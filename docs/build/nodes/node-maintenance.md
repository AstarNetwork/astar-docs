---
sidebar_position: 5
---

# Node Maintenance

## Backup

Maintaining a backup node always sync for a collator is vital to make sure you always produce blocks and avoid being slashed. We highly recommend to have it on a different location and hosted on a different provider.

The collator session keys are stored into `/var/lib/astar/chains/{NETWORK}/keystore`.

:::info

You may need to install rsync package depending on your distro (using `sudo apt-get install rsync` or similar)

:::

:::caution

Make sure you save the content of this directory in a backup directory on your local machine:

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

When an upgrade is necessary, builders are notified with instructions in the [Astar Dev Announcement Telegram] (https://t.me/+cL4tGZiFAsJhMGJk) and in the [Astar Upgrade Elements channel] (https://matrix.to/#/#shiden-runtime-ann:matrix.org).

Download the [latest release] (https://github.com/AstarNetwork/Astar/releases/latest) from Github:

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
Do **never purge chain data of an active collator**, it not produce blocks anymore during all the sync process and harm the chain block production rate.
Instead, switch to your backup node and purge only once the backup is **actively collating**.
:::

To start a node from scratch without any chain data, just wipe the chain data directory:

```sh
sudo systemctl stop {NETWORK}.service
sudo rm -R /var/lib/astar/chains/{NETWORK}/db/*
sudo systemctl start {NETWORK}.service
```

## Snapshot

Please refer to [**snapshot page**] (/docs/nodes/snapshots/).
:::
