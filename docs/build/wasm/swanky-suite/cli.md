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

Swanky CLI is a Node.js based CLI application that abstracts away and extends the functionality of Polkadot.js, `cargo contract`, and other Wasm developer tools.
It aims to ease development of and interaction with Wasm smart contracts and provides simple tools to bootstrap contract environment (project) with contract and integration tests templates, manage local node and accounts, language agnostic compile, deploy contracts to both local and remote networks, compatibility checks between the contract pallet and compiler...

With all of the features mentioned above, even more is in active or planned development. The whole project is public, and everyone is welcome to contribute or suggest features:

- [Swanky CLI repo] (https://github.com/AstarNetwork/swanky-cli)
- [Swanky CLI project] (https://github.com/orgs/AstarNetwork/projects/3)

:::info
Templates provided in the current version of swanky-cli, as well as environment and supported tools target ink! v4, and use `cargo contract` v2
:::

## Installing

The CLI can be installed and used in different ways:

- using a preconfigured environment of a dev-container
- downloading a precompiled binary
- as an npm package

:::caution
Note that using the precompiled binaries, NPM, or compiling it yourself requires you to have the [local environment set up] (/docs/build/environment/ink_environment.md) correctly
:::

### Dev container (Recommended)

Using [dev container] (/docs/build/environment/dev-container) is the recommended method to use `swanky-cli`, it includes all the environment setup and will support auto-updates in the future.

To run your project in the dev container follow the steps on [swanky-dev-container Github] (https://github.com/AstarNetwork/swanky-dev-container).

### Download the precompiled binaries

1. Download the correct archive for your platform from the [releases section of swanky-cli github page] (https://github.com/AstarNetwork/swanky-cli/releases).

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

<Figure caption="Full list of commands" src={require('../img/swanky/help.png').default} width="65%" />

Note that every command and subcommand also supports `-h`/`--help` flags to display their usage instructions.

Likewise, most of the commands support `-v` /`--verbose` flag, which you can use to get more detailed output (useful for debugging and reporting errors).

### Bootstrap a new project

Using the `swanky init` command, you'll be prompted for a series of answers to define your project and the first smart contract within it.

After gathering all the required information, the app will proceed to check your environment, scaffold the project, download and install (optionally) swanky node and the project dependencies.

```
swanky init PROJECT_NAME
```

<Figure caption="Init process" src={require('../img/swanky/init.png').default} width="65%" />

The resulting folder structure should look something like this:

<Figure caption="Folder structure" src={require('../img/swanky/folder-structure.png').default} width="65%" />

_Resources:_

- [_`swanky init` command usage manual_] (https://github.com/AstarNetwork/swanky-cli/tree/master/packages/cli#swanky-init-projectname)
- [_available templates_] (https://github.com/AstarNetwork/swanky-cli/tree/master/packages/templates)

### Check dependencies and compatibility

You can quickly check the presence and versions of required dependencies by running `swanky check` command.

<Figure caption="Verify dependencies" src={require('../img/swanky/check.png').default} width="65%" />

:::info
For now, you will need to be be in a project folder to run this command.

This command will be updated to fix that, and provide more useful information.
:::

_Resources:_

- [_`swanky check` command usage manual_] (https://github.com/AstarNetwork/swanky-cli/tree/master/packages/cli#swanky-check)

### Manage accounts

Create and list accounts used for contract interaction.

These are the accounts stored inside your `swanky.config.json`, so the command needs to be ran from within the project directory.

During account creation you'll have an option of passing your own mnemonic, or have Swanky generate one for you by passing `-g` flag.

You can also mark the account as "production" which will require you to set a password and encrypt the mnemonic.

Be careful not to use a dev account on live networks, as their mnemonic is stored in plain text in the config!

<Figure caption="Creating and listing accounts" src={require('../img/swanky/acc-create.png').default} width="65%" />

:::tip
Newly generated accounts that are not the preconfigured dev accounts (Alice, Bob, Charlie...) will have no funds initially, so you'll have to transfer some manually.
:::

_Resources:_

- [_`swanky account` command usage manual_] (https://github.com/AstarNetwork/swanky-cli/tree/master/packages/cli#swanky-account-create)

### Interact with contracts

`swanky contract` command offers several subcommands for different interactions with your contracts.

<Figure caption="Different `contract` subcommands" src={require('../img/swanky/contract-commands.png').default} width="65%" />

The command names are self explanatory, and to get more detailed information on using a specific command, you can use the help flag with it:

```
swanky contract SUB_COMMAND --help
```

#### Compile

Depending on the contracts definition in `swanky.config.json`, calling `swanky contract compile CONTRACT_NAME` will run either cargo-contract or ask! compiler (via npm script).

If you have multiple contracts and wish to compile them all at once, you can pass the `--all` flag instead of the contract name.

Likewise, if you're compiling for production, you need to pass the `--prod` flag.

<Figure caption="Compile all contracts" src={require('../img/swanky/compile.png').default} width="65%"/>

_Resources:_

- [_`swanky account` command usage manual_] (https://github.com/AstarNetwork/swanky-cli/tree/master/packages/cli#swanky-contract-compile-contractname)

#### Get detailed contract description

Compiling the contract will generate it's metadata too.

Swanky provides `contract explain CONTRACT_NAME` command to get a more human friendly version of that metadata:

<Figure caption="Getting contract metadata information" src={require('../img/swanky/contract-explain.png').default} width="65%"/>

_Resources:_

- [_`contract compile` command usage manual_] (https://github.com/AstarNetwork/swanky-cli/tree/master/packages/cli#swanky-contract-compile-contractname)

#### Run E2E tests

You can test your contracts using [Mocha] (https://mochajs.org/) framework and [Chai] (https://www.chaijs.com/) assertions.

:::note
Please note these tests are not ink! E2E tests, but are written in TypeScript, and require a local node to be running.

You can get more information on ink! E2E test framework in the [ink! documentation] (https://use.ink/basics/contract-testing/#end-to-end-e2e-tests).
:::
A contract template will provide you with a simple test as well, which you can use as a starting point.
The tests utilize [@polkadot/api] (https://polkadot.js.org/docs/api/) library, and contract types generated by [typechain-polkadot] (https://github.com/727-Ventures/typechain-polkadot).
The types are generated during the compile step and copied to `test/*/typedContract/` directory, along with the contract artifacts in the `test/*/artifacts/` directory. If you need only the types generated
(if you for example deleted or edited them), you can do that without going through the whole compilation step by using `swanky contract typegen` command.

Running `swanky contract test CONTRACT_NAME` will detect all `*.test.ts` files in the `test/contract_name/` directory, and run them sequentially, or in all directories inside `test/` if you pass the `-a`/`--all` flag.

<Figure caption="Run tests for a contract" src={require('../img/swanky/test.png').default} width="65%"/>

:::tip
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

<Figure caption="Web based test report" src={require('../img/swanky/test-report.png').default} width="65%"/>

_Resources:_

- [_`swanky contract test` command usage manual_] (https://github.com/AstarNetwork/swanky-cli/tree/master/packages/cli#swanky-contract-test-contractname)

#### Deploy your contract

When your contract is compiled and tested, you can deploy it to a local node or a remote network.

You will need to supply account you wish to deploy the contract from (`-account`), max amount of gas to be used (`-g`), and any arguments required by your contract's constructor (`-a`).

By default, your contract will be deployed to a local node, but you can pass a custom network via `-n`/`--network` flag. Available networks are configured in `swanky.config.json` file.

<Figure caption="Deploying the contract" src={require('../img/swanky/deploy.png').default} width="65%"/>

Successfully running the `deploy` command will print out the address your contract is deployed to, as well as save it into `swanky.config.json`

_Resources:_

- [_`swanky contract deploy` command usage manual_] (https://github.com/AstarNetwork/swanky-cli/tree/master/packages/cli#swanky-contract-deploy-contractname)

#### Run queries and transactions

Once your contract is deployed, you can call it from the CLI using `query` or `tx` commands.

Use `query` for read-only calls, and `tx` for the calls that change the chain state and require signing (and a gas fee).

Both commands require `CONTRACT_NAME` and `MESSAGE_NAME` parameters, and for `tx` a caller account needs to be provided too. (`-a`/`--account`).

If the message you're calling requires arguments to be passed, you can do that using `-p`/`--param` flag.

<Figure caption="Calling a query on a contract" src={require('../img/swanky/contract-query.png').default} width="65%"/>

<Figure caption="Calling a transaction on a contract" src={require('../img/swanky/contract-tx.png').default} width="65%"/>

Result of a `query` is straight forward, `OK` followed by what ever the response is.

The transaction (`tx`) is a bit more raw though. Important to note are the `dispatchError` and `internalError` fields, plus the `status` field.
If the errors are `undefined`, and the status `finalized`, your transaction has been successful.

:::tip
Gas fee for `tx` is calculated and applied automatically, but you can provide a gas limit manually by using the `-g`/`--gas` flag.

Keep in mind that the transaction will fail if you provide too low a value.
:::

_Resources:_

- [_`swanky contract query` command usage manual_] (https://github.com/AstarNetwork/swanky-cli/tree/master/packages/cli#swanky-contract-query-contractname-messagename)
- [_`swanky contract tx` command usage manual_] (https://github.com/AstarNetwork/swanky-cli/tree/master/packages/cli#swanky-contract-tx-contractname-messagename)

#### Add a new contract from template

You can create additional contracts in the same project, using the `contract new` command and selecting from predefined templates.

The contract will be referred by `name` when using the relevant contract commands, and you can check the details in `swanky.config.json`

<Figure caption="Adding a new contract" src={require('../img/swanky/contract-new.png').default} width="65%"/>

_Resources:_

- [_`swanky contract new` command usage manual_] (https://github.com/AstarNetwork/swanky-cli/tree/master/packages/cli#swanky-contract-new-contractname)

### Interact with a local node

If you have chosen to download and use the Swanky Node during init step, you can use `swanky node` commands to start and manage it.

Simply running `swanky node start` will start the node, and the node will preserve the state across restarts.

If you want to reset the node state, use the `swanky node purge` command.

<Figure caption="Starting the swanky node" src={require('../img/swanky/node-start.png').default} width="65%"/>

:::info
Note that node needs to be running if you are using a default local network with `deploy`, `query` and `tx` commands.
:::

:::caution
If you want to use an external UI to interact with the node, you might run into some CORS issues.

This can be solved by passing a custom array of whitelisted urls using the `--rpcCors` flag.
:::

_Resources:_

- [_`swanky node` commands usage manual_] (https://github.com/AstarNetwork/swanky-cli/tree/master/packages/cli#swanky-node-purge)

## Using plugins

Swanky CLI's functionality can be extended by the use of plugins, and it's a way to add new, case specific commands without modifying the core codebase.

One WIP example is the [Phala plugin] (https://github.com/AstarNetwork/swanky-plugin-phala)

:::info
If you are interested in developing a plugin, you can refer to the Phala example, and the [Oclif plugin documentation] (https://oclif.io/docs/plugins), or you can post a request in [swanky-cli repo] (https://github.com/AstarNetwork/swanky-cli/issues)'s issues.
:::

_Resources:_

- [_`swanky plugin` commands usage manual_] (https://github.com/AstarNetwork/swanky-cli/tree/master/packages/cli#swanky-plugins)
