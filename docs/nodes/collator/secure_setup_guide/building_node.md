---
sidebar_position: 4
---

# 4. Building Your Collator

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Let's get started

Let's start with updating our server. Connect to your server and update:

```
sudo apt-get update
sudo apt-get upgrade
sudo apt install -y adduser libfontconfig1
```

## Build the node

To build a collator node, you have 3 different options

* **From source**: experience with using Linux
* **From binary**: easiest way to start and update node with new releases
* **Run a Docker container**: Docker background requires

### Build from source

Building a node from source code is the most complicated path, but will also provide the best optimized node version for your server.

Make sure your server is ready to build a collator:

```
## Install Rust
##
curl https://sh.rustup.rs -sSf | sh
source $HOME/.cargo/env
rustup update nightly
rustup target add wasm32-unknown-unknown --toolchain nightly

## Compilation required software
##
bash -c "$(wget -O - https://apt.llvm.org/llvm.sh)"
sudo apt install cmake 
sudo apt install git 
sudo apt install build-essential
sudo apt update
sudo apt install clang
```

Clone the Astar repository:

```
git clone https://github.com/AstarNetwork/Astar.git
cd Astar
```

Make sure you have the latest commit in place:

```
git checkout
git pull
```

Compile the node binary:

```
CARGO_PROFILE_RELEASE_LTO=true RUSTFLAGS="-C codegen-units=1" cargo build --release
```

### Build from binaries

The easiest way to install an Astar node is to download the binaries. You can find them here: [Astar releases](https://github.com/AstarNetwork/Astar)

Get the file and extract:

```
wget $(curl -s https://api.github.com/repos/AstarNetwork/Astar/releases/latest | grep "tag_name" | awk '{print "https://github.com/AstarNetwork/Astar/releases/download/" substr($2, 2, length($2)-3) "/astar-collator-" substr($2, 3, length($2)-4) "-ubuntu-x86_64.tar.gz"}')
```

```
tar -xvf astar-collator*.tar.gz
```

### Run a Docker container

You can find here the [Astar Docker hub](https://hub.docker.com/r/staketechnologies/astar-collator).

Pull the latest Docker version

```
docker pull staketechnologies/astar-collator:latest
```

---

## Launch Your Collator

:::caution
The following steps are suitable for **binary** usage (built from source or downloaded).
In case you want to run a Docker container, you will have to adapt those.
:::

Create a dedicated user for the node and move the **node binary**:

```
sudo useradd --no-create-home --shell /usr/sbin/nologin astar
sudo cp ./astar-collator /usr/local/bin
chmod +x astar-collator*.tar.gz
```

Create a dedicated directory for the **chain storage data**:

```
sudo mkdir /var/lib/astar
sudo chown astar:astar /var/lib/astar
```

Let's first go to our binary directory and start the collator manually:

<Tabs>
<TabItem value="astar" label="Astar" default>

```
cd /usr/local/bin

./astar-collator --collator --chain astar --name COLLATOR_NAME --rpc-cors all --base-path /var/lib/astar --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' --execution wasm --state-cache-size 1
```

</TabItem>
<TabItem value="shiden" label="Shiden" default>

```
cd /usr/local/bin

./astar-collator --collator --chain shiden --name COLLATOR_NAME --rpc-cors all --base-path /var/lib/astar --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' --execution wasm --state-cache-size 1
```

</TabItem>
<TabItem value="shibuya" label="Shibuya" default>

```
cd /usr/local/bin

./astar-collator --collator --chain shibuya --name COLLATOR_NAME --rpc-cors all --base-path /var/lib/astar --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' --execution wasm --state-cache-size 1
```

</TabItem>
</Tabs>

:::tip
Type in the place of **${COLLATOR\_NAME}**, how you would like to call your node.
:::

Check on [https://telemetry.polkadot.io/](https://telemetry.polkadot.io/#list/0x9eb76c5184c4ab8679d2d5d819fdf90b9c001403e9e17da2e14b6d8aec4029c6) to see your node syncing.

Useful commands to be used in screen:
_`ctrl+a+d` (detach actual session)_
_`screen ls` (this will list all running screens)_
_`screen -r` (restore a screen session)_

Stop the manual node and kill the screen session:

```
ctrl+c
ctrl+a+k
```

## Set systemd service

To run a stable collator node, a **systemd service** has to be set and activated. This will ensure that the node is restarting even after a server reboot.

Create a service file

```
sudo nano /etc/systemd/system/astar.service
```

Add service parameters (this example is for Astar Network):
<Tabs>
<TabItem value="astar" label="Astar" default>

```
[Unit]
Description=Astar Collator

[Service]
User=astar
Group=astar
  
ExecStart=/usr/local/bin/astar-collator \
  --collator \
  --rpc-cors all \
  --name ${COLLATOR_NAME} \
  --chain astar \
  --base-path /var/lib/astar \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
  --execution wasm \
  --state-cache-size 1
  
Restart=always
RestartSec=120

[Install]
WantedBy=multi-user.target
```

</TabItem>
<TabItem value="shiden" label="Shiden" default>

```
[Unit]
Description=Astar Collator

[Service]
User=astar
Group=astar
  
ExecStart=/usr/local/bin/astar-collator \
  --collator \
  --rpc-cors all \
  --name ${COLLATOR_NAME} \
  --chain shiden \
  --base-path /var/lib/astar \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
  --execution wasm \
  --state-cache-size 1
  
Restart=always
RestartSec=120

[Install]
WantedBy=multi-user.target
```

</TabItem>
<TabItem value="shibuya" label="Shibuya" default>

```
[Unit]
Description=Astar Collator

[Service]
User=astar
Group=astar
  
ExecStart=/usr/local/bin/astar-collator \
  --collator \
  --rpc-cors all \
  --name ${COLLATOR_NAME} \
  --chain shibuya \
  --base-path /var/lib/astar \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
  --execution wasm \
  --state-cache-size 1
  
Restart=always
RestartSec=120

[Install]
WantedBy=multi-user.target
```

</TabItem>
</Tabs>

Start the service:

```
sudo systemctl start astar.service
```

Check the node log and that everything is syncing fine:

```
journalctl -f -u astar.service -n100
```

Enable the service:

```
sudo systemctl enable astar.service
```

## Relay Chain snapshot

If you run your collator it not only needs to sync the **mainnet** chain but also the complete relay chain from **Kusama / Polkadot**. This can take up to 3-4 days. You can also use a snapshot of Kusama/Polkadot. You can download this [here](https://polkashots.io) and will save a lot of time.

:::caution
**NOTE**: know what you are doing when using snapshots!
:::

## Finalizing

To finalize your collator you need to:

* Setup an account
* Author your session key
* Set up your session key
* Verify your identity
* Bond tokens

