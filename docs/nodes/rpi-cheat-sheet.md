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

If advance menu doesn't show up, open it with Ctrl + Shift + X

Set hostname, enable SSH, user and wireless LAN

Write

Plug the USB drive on the Pi and turn it on

## Configure the Raspberry Pi

SSH to the Pi from your computer
- On Linux/Mac: `ssh user@pi_name.local`
- On Windows, you will need a SSH client like PuTTY

Check that partition / uses the full size of the disk: `lsblk`

Update and upgrade the OS with latest packages: `sudo apt update && sudo apt upgrade`

Install package required: `sudo apt install -y adduser libfontconfig1`

To prevent Out Of Memory issues, create a swap file

    sudo fallocate -l 4g /file.swap
    sudo chmod 600 /file.swap
    sudo mkswap /file.swap
    sudo swapon /file.swap

Add swap file to fstab so that swap will be loaded on reboot: `echo '/file.swap none swap sw 0 0' | sudo tee -a /etc/fstab`

## Install Astar node

Download and unarchive ARM binary

    wget $(curl -s https://api.github.com/repos/AstarNetwork/Astar/releases/latest | grep "tag_name" | awk '{print "https://github.com/AstarNetwork/Astar/releases/download/" substr($2, 2, length($2)-3) "/astar-collator-v" substr($2, 3, length($2)-4) "-ubuntu-aarch64.tar.gz"}') && tar -xvf astar-collator*.tar.gz

Create a dedicated user for the node and move the node binary:

    sudo useradd --no-create-home --shell /usr/sbin/nologin astar
    sudo mv ./astar-collator /usr/local/bin
    sudo chmod +x /usr/local/bin/astar-collator

Create a dedicated directory for the chain storage data: `sudo mkdir /var/lib/astar && sudo chown astar:astar /var/lib/astar`

Create the Astar service file changing the name {NODE_NAME}

sudo nano /etc/systemd/system/astar.service

    [Unit]
    Description=Astar Archive node

    [Service]
    User=astar
    Group=astar
    
    ExecStart=/usr/local/bin/astar-collator \
    --pruning archive \
    --rpc-cors all \
    --name {NODE_NAME} \
    --chain astar \
    --base-path /var/lib/astar \
    --rpc-external \
    --ws-external \
    --rpc-methods Safe \
    --rpc-max-request-size 1 \
    --rpc-max-response-size 1 \
    --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \

    Restart=always
    RestartSec=10

    [Install]
    WantedBy=multi-user.target

Save the file: Ctrl+O > Yes

Start the service: `sudo systemctl start astar.service`

Check the node log to ensure proper syncing: `journalctl -f -u astar.service -n100`

Enable the service: `sudo systemctl enable astar.service`