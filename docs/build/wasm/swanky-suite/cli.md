---
sidebar_position: 1
---

import Figure from '/src/components/figure'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

## Swanky CLI

Swanky CLI is a Node.js CLI app that uses Polkadot.js API on the backend, alongside many existing tools, such as the `cargo contract` CLI. In the future, there will be many additional features to support developers, such as Wasm dApp bootstrapping via smart contract and UI scaffolding, integration tests, management of local nodes, account management, connecting and deploying contracts to both local and remote networks, compiling for various languages from a single CLI app, compatibility checks between the contract pallet and compiler, and much more.

### Installing

The CLI can be installed through:

- dev-container
- Binary download
- npm package

:::note
Note that using the precompiled binaries, NPM, or compiling it yourself requires you to have the [local environment set up](../environment/ink_environment.md) correctly
:::

#### Dev container (Recommended)

Using [dev container](docs/build/environment/dev-container) is the recommended method to use `swanky-cli`, it includes all the environment setup and will support auto-updates in the future.

To run your project in the dev container follow the steps on [swanky-dev-container Github](https://github.com/AstarNetwork/swanky-dev-container).

#### Download the Precompiled Binaries

1. Download the correct archive for your platform from the [releases section of swanky-cli github page](https://github.com/AstarNetwork/swanky-cli/releases).

2. Extract the archive to the appropriate location, for example the `software` directory.

3. Add the `swanky` executable to your path variable by creating a symbolic link to it from a common `bin` directory or somewhere similar.

<Tabs>
<TabItem value="MacOS" label="MacOS" default>

```sh
ln -s /Users/my_name/software/swanky-cli/bin/swanky /usr/local/bin
```

</TabItem>
<TabItem value="Debian/Ubuntu" label="Debian/Ubuntu">

```sh
ln -s /home/my_name/swanky-cli/bin/swanky /usr/local/bin
```

</TabItem>
</Tabs>

#### Globally with npm

This approach may seem simpler, but due to the nature of `Node.js` dependency management, may result in version inconsistency or other errors.

```sh-session
$ npm install -g @astar-network/swanky-cli
```

or

```sh-session
$ npx @astar-network/swanky-cli [command]
```

### Swanky-cli Commands

#### `swanky help`

Display help and usage examples for Swanky commands and subcommands.

```
USAGE
  $ swanky help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for swanky.
```

#### `swanky init`

Scaffold a new Wasm project.

```
USAGE
  $ swanky init [PROJECTNAME] [--swanky-node] [--template blank|flipper|psp22] [-v]

ARGUMENTS
  PROJECTNAME  directory name of new project

FLAGS
  -v, --verbose
  --swanky-node
  --template=<option>  <options: blank|flipper|psp22>

DESCRIPTION
  Generate a new smart contract environment
```

<Figure caption="Initiate a project" src={require('./img/01-init.gif').default} />

After responding to the prompts, Swanky will modify the templates, download the node, and run the appropriate installation scripts.
The resulting folder structure should look something like this:

<Figure caption="Folder structure" src={require('./img/01a-folder_structure.png').default} />

#### `swanky check`

Verify the dependencies needed to run the Swanky project.

```
USAGE
  $ swanky check

DESCRIPTION
  Check installed package versions and compatibility
```

<Figure caption="Verify dependencies" src={require('./img/02-check.gif').default} />

:::note
For now, you will need to be be in a project folder to run this command.
:::

#### `swanky account`

Create and manage accounts used for contract interaction.

```
USAGE
  $ swanky account COMMAND

COMMANDS
  account create  Create a new dev account in config
  account list    List dev accounts stored in config
  account ls      List dev accounts stored in config
```

When creating a new account with `swanky account create`, you will be asked if you're creating a dev account.
If you answer YES, the mnemonic seed for that account will not be encrypted, and you will not be asked to create a password, nor input it when interacting with a contract.
Be careful not to use a dev account on live networks.

To generate a new mnemonic seed, use `-g` or `--generate` flag.

<Figure caption="Generate account" src={require('./img/06-account_generate.gif').default} />

#### `swanky contract`

Compile, deploy, call a command on a given contract, or scaffold a new contract inside the project.

```
USAGE
  $ swanky contract COMMAND

COMMANDS
  contract call     Call a method on a smart contract
  contract compile  Compile the smart contract(s) in your contracts directory
  contract deploy   Deploy contract to a running node
  contract new      Generate a new smart contract template inside a project
```

#### `swanky contract compile`

```
Compile the smart contract(s) in your contracts directory

USAGE
  $ swanky contract compile [CONTRACTNAME] [-v]

ARGUMENTS
  CONTRACTNAME  Name of the contract to compile

FLAGS
  -v, --verbose  Display additional compilation output

DESCRIPTION
  Compile the smart contract(s) in your contracts directory
```

<Figure caption="Compile a contract" src={require('./img/03-compile.gif').default} />

#### `swanky contract deploy`

Deploy a compiled contract to a running node.

```
USAGE
  $ swanky contract deploy [CONTRACTNAME] --account <value> -g <value> [-a <value>] [-n <value>]

ARGUMENTS
  CONTRACTNAME  Name of the contract to deploy

FLAGS
  -a, --args=<value>...
  -g, --gas=<value>      (required)
  -n, --network=<value>  Network name to connect to
  --account=<value>      (required) Alias of account to be used

DESCRIPTION
  Deploy contract to a running node
```

<Figure caption="Deploy a contract" src={require('./img/08-deploy.gif').default} />

#### `swanky contract new`

Generate a new smart contract template inside a project.

```
USAGE
  $ swanky contract new [CONTRACTNAME] [--template blank|flipper|psp22] [-v]

ARGUMENTS
  CONTRACTNAME  Name of new contract

FLAGS
  -v, --verbose
  --template=<option>  <options: blank|flipper|psp22>

DESCRIPTION
  Generate a new smart contract template inside a project
```

#### `swanky contract call`

Call a method on a smart contract.

```
USAGE
  $ swanky contract call --address <value> -m <value> [-a <value>] [-d] [-g <value>] [-n <value>]

FLAGS
  -a, --args=<value>
  -d, --dry
  -g, --gas=<value>
  -m, --message=<value>  (required)
  -n, --network=<value>  Network name to connect to
  --address=<value>      (required)

DESCRIPTION
  Call a method on a smart contract
```

#### `swanky node`

Manage a local node.

```
USAGE
  $ swanky node COMMAND

COMMANDS
  node purge  Purge local chain state
  node start  Start a local node
```

<Figure caption="Start a local node" src={require('./img/07-node_start.gif').default} />
