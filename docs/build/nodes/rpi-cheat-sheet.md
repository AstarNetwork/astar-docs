---
title: Raspberry Pi Node
sidebar_position: 8
---

# Raspberry Pi configuration for Astar node

This is a simple readme containing main steps to setup a Raspberry Pi running an Astar node.

Requirements:
- Raspberry Pi 4 with 2 Gb RAM minimum, recomended 4 Gb
- A USD hard drive (preferably SSD) of 1 Tb
- Internet connection (Wifi is fine)
- A SD Card

## Setup Raspberry Pi to boot from USB disk

Raspberry Pi natively loads OS from MicroSD card.
As we need a hard drive to store the blockchain database, we start by configuring the Raspberry to boot OS from USB disk.

Download Raspberry Pi Imager: https://www.raspberrypi.com/software/

Insert the SD card

Start RPi imager

Choose OS > Misc Utility Images > Bootloader > USB Boot

Choose storage > select the SD card

Write

Insert the SD card into the Raspberry Pi

Plug the Pi and wait for 10-20 seconds after the green light blinks constantly

Turn off the Pi and remove the SD card

## Install OS

Plug the USD hard drive

Start RPi imager

Choose OS > Other general-purpose OS > Ubuntu > Ubuntu Server 22.04.2 LTS (64-bit)

Choose storage > select the USB disk

If advance menu doesn't show up, open it with `Ctrl + Shift + X`

Set hostname, enable SSH, user and wireless LAN

Write

Plug the USB drive on the Pi and turn it on

## Configure the Raspberry Pi

SSH to the Pi from your computer
- On Linux/Mac: `ssh user@pi_name.local`
- On Windows, you will need a SSH client like PuTTY

Check that partition `/` uses the full size of the disk: `lsblk`

Update and upgrade the OS with latest packages: `sudo apt update && sudo apt upgrade`

Install package required: `sudo apt install -y adduser libfontconfig1`

To prevent Out Of Memory issues, create a swap file

```bash
sudo fallocate -l 4g /file.swap
sudo chmod 600 /file.swap
sudo mkswap /file.swap
sudo swapon /file.swap
```

Add swap file to fstab so that swap will be loaded on reboot: `echo '/file.swap none swap sw 0 0' | sudo tee -a /etc/fstab`

## Install Astar node

Get the `aarch64` binary link from Astar release page: https://github.com/AstarNetwork/Astar/releases

Download and unarchive ARM binary (example here with v5.21.0)

```bash
wget https://github.com/AstarNetwork/Astar/releases/download/v5.21.0/astar-collator-v5.21.0-ubuntu-aarch64.tar.gz && tar -xf astar-collator*.tar.gz
```

Create a dedicated user for the node and move the node binary:

```bash
sudo useradd --no-create-home --shell /usr/sbin/nologin astar
sudo mv ./astar-collator /usr/local/bin
sudo chmod +x /usr/local/bin/astar-collator
```

Create a dedicated directory for the chain storage data: 

```bash
sudo mkdir /var/lib/astar && sudo chown astar:astar /var/lib/astar
```

Create the Astar service file changing the name \{NODE_NAME\}

```bash
sudo nano /etc/systemd/system/astar.service

    [Unit]
    Description=Astar Archive node

    [Service]
    User=astar
    Group=astar
    
    ExecStart=/usr/local/bin/astar-collator \
    --state-pruning archive \
    --blocks-pruning archive \
    --name {NODE_NAME} \
    --chain astar \
    --base-path /var/lib/astar \
    --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
    -- \
    --state-pruning 100 \
    --blocks-pruning 100 \
    --sync warp

    Restart=always
    RestartSec=10

    [Install]
    WantedBy=multi-user.target
```

Save the file: Ctrl+O > Yes

Start the service: `sudo systemctl start astar.service`

Check the node log to ensure proper syncing: `journalctl -f -u astar.service -n100`

Enable the service: `sudo systemctl enable astar.service`

## Extra 

### Polkadot node management

The Astar client embeeds an Astar node and a Polkadot node.

To pass commands to the Polkadot node, you need to add `--` in between, just like we did in the service file above where we are passing a different pruning mode for the Polkadot node (this node doesn't need to be an archive as we only use its current state) and a warp sync mode (only possible on a full node, doesn't apply to an archive node).

### Database location

In case you want to change the database mode, you need to stop the node, delete the database, then restart the node.

Astar db is located in `/var/lib/astar/chains/astar/db`.

Polkadot db is located in `/var/lib/astar/polkadot/chains/polkadot/db`.

Example: delete the Polkadot db after stopping the node:

```bash
sudo rm -rf /var/lib/astar/chains/astar/db
```
