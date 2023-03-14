---
sidebar_position: 1
# Display h2 to h5 headings
toc_min_heading_level: 2
toc_max_heading_level: 4
---

import Figure from '/src/components/figure'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# Swanky CLI

Swanky CLI is a Node.js based CLI application that abstracts away and extends the functionality of Polkadot.js, `cargo contract`, and other WASM developer tools.
It aims to ease development of and interaction with WASM smart contracts and provides simple tools to bootstrap contract environment (project) with contract and integration tests templates, manage local node and accounts, language agnostic compile, deploy contracts to both local and remote networks, compatibility checks between the contract pallet and compiler...

With all of the features mentioned above, even more is in active or planned development. The whole project is public, and everyone is welcome to contribute or suggest features:

- [Swanky CLI repo](https://github.com/AstarNetwork/swanky-cli)
- [Swanky CLI project](https://github.com/orgs/AstarNetwork/projects/3)

:::note
Templates provided in the current version of swanky-cli, as well as environment and supported tools target ink! v4, and use `cargo contract` v2
:::

## Installing

The CLI can be installed and used in different ways:

- using a preconfigured environment of a dev-container
- downloading a precompiled binary
- as an npm package

:::note
Note that using the precompiled binaries, NPM, or compiling it yourself requires you to have the [local environment set up](../../environment/ink_environment.md) correctly
:::

### Dev container (Recommended)

Using [dev container](docs/build/environment/dev-container) is the recommended method to use `swanky-cli`, it includes all the environment setup and will support auto-updates in the future.

To run your project in the dev container follow the steps on [swanky-dev-container Github](https://github.com/AstarNetwork/swanky-dev-container).

### Download the precompiled binaries

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

### Globally with npm

This approach may seem simpler, but due to the nature of `Node.js` dependency management, may result in version inconsistency or other errors.

```sh-session
$ npm install -g @astar-network/swanky-cli
```

or

```sh-session
$ npx @astar-network/swanky-cli [command]
```

## Using swanky-cli

If you're using a dev container, or have followed the installation instructions, you should have `swanky` command available in your terminal.

Running it without any arguments (or with `-h`/`--help`) will provide you with a list of top-level commands and the app version.

Passing `help` as an argument and providing it `-n`/`--nested-commands` flag will show full list of commands, including nested ones:

```bash
swanky help --nested-commands
```

<Figure caption="Full list of commands" src={require('../img/swanky-help.png').default} width="65%" />

Note that every command and subcommand also supports `-h`/`--help` flags to display their usage instructions.

Likewise, most of the commands support `-v` /`--verbose` flag, which you can use to get more detailed output (useful for debugging and reporting errors).

### Bootstrap a new project

Using the `swanky init` command, you'll be prompted for a series of answers to define your project and the first smart contract within it.

After gathering all the required information, the app will proceed to check your environment, scaffold the project, download and install (optionally) swanky node and the project dependencies.

```
swanky init PROJECT_NAME
```

<Figure caption="Init process" src={require('../img/swanky-init.png').default} width="65%" />

The resulting folder structure should look something like this:

<Figure caption="Folder structure" src={require('../img/swanky-folder-structure.png').default} width="65%" />

### Check dependencies and compatibility

You can quickly check the presence and versions of required dependencies by running `swanky check` command.

<Figure caption="Verify dependencies" src={require('../img/swanky-check.png').default} width="65%" />

:::note
For now, you will need to be be in a project folder to run this command.

This command will be updated to fix that, and provide more useful information.
:::

### Manage accounts

Create and list accounts used for contract interaction.

These are the accounts stored inside your `swanky.config.json`, so the command needs to be ran from within the project directory.

During account creation you'll have an option of passing your own mnemonic, or have Swanky generate one for you by passing `-g` flag.

You can also mark the account as "production" which will require you to set a password and encrypt the mnemonic.

Be careful not to use a dev account on live networks, as their mnemonic is stored in plain text in the config!

<Figure caption="Creating and listing accounts" src={require('../img/swanky-acc-create.png').default} width="65%" />

:::note
Newly generated accounts that are not the preconfigured dev accounts (Alice, Bob, Charlie...) will have no funds initially, so you'll have to transfer some manually.
:::

### Interact with contracts

`swanky contract` command offers several subcommands for different interactions with your contracts.

<Figure caption="Different `contract` subcommands" src={require('../img/swanky-contract-commands.png').default} width="65%" />

The command names are self explanatory, and to get more detailed information on using a specific command, you can use the help flag with it:

```
swanky contract SUB_COMMAND --help
```

#### Compile

Depending on the contracts definition in `swanky.config.json`, calling `swanky contract compile CONTRACT_NAME` will run either cargo-contract or ask! compiler (via npm script).

If you have multiple contracts and wish to compile them all at once, you can pass the `--all` flag instead of the contract name.

Likewise, if you're compiling for production, you need to pass the `--prod` flag.

<Figure caption="Compile all contracts" src={require('../img/swanky-compile.png').default} width="65%"/>

#### Run E2E tests

You can test your contracts using [Mocha](https://mochajs.org/) framework and [Chai](https://www.chaijs.com/) assertions.

A contract template will provide you with a simple test as well, which you can use as a starting point.
The tests utilize [@polkadot/api](https://polkadot.js.org/docs/api/) library, and contract types generated by [typechain-polkadot](https://github.com/727-Ventures/typechain-polkadot).
The types are generated during the compile step and copied to `test/*/typedContract/` directory, along with the contract artifacts in the `test/*/artifacts/` directory.

Running `swanky contract test CONTRACT_NAME` will detect all `*.test.ts` files in the `test/contract_name/` directory, and run them sequentially, or in all directories inside `test/` if you pass the `-a`/`--all` flag.

<Figure caption="Run tests for a contract" src={require('../img/swanky-test.png').default} width="65%"/>

:::note
Running the tests programmatically may throw warnings about duplicate dependencies on `@polkadot/*` libraries.
This occurs because those libraries are included in swanky app itself, as well as in the test files.
Apart from the warning text spamming, no negative consequence of this has been observed.

If you want to avoid the warnings anyway, you can run tests as a yarn/npm command:

`yarn test` or

`npm run test`
:::

Web based report will be generated and stored in `artifacts/` directory. You can copy the path of the reports and use the `serve` app to view them in browser. (`serve` is included in swanky-dev-container)

```
serve PATH_TO_REPORTS
```

<Figure caption="Web based test report" src={require('../img/swanky-test-report.png').default} width="65%"/>

#### Deploy your contract

When your contr

#### Run queries and transactions

#### Add a new contract from template

Generate a new smart contract template inside a project.

### Interact with a local node

Manage a local node.

```
USAGE
  $ swanky node COMMAND

COMMANDS
  node purge  Purge local chain state
  node start  Start a local node
```

<Figure caption="Start a local node" src={require('../img/07-node_start.gif').default} />
