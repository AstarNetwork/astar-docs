---
sidebar_position: 1
---

# Subsquid

[Subsquid](https://subsquid.io) is an indexing framework supporting both [Substrate](https://docs.astar.network/docs/ecosystem/substrate) and [EVM](https://docs.astar.network/docs/build/EVM/)-based chains. It is [extremely flexible and offers high syncing speeds](https://docs.subsquid.io/migrate/subsquid-vs-thegraph/). Subsquid comes with a set of code generation tools that make ready-to-use, customizable indexer projects ("squids") out of contracts' ABIs. WASM/ink! and EVM/Solidity contracts are supported. Once scraped, the contract data can be served over a GraphQL API or stored as a dataset.

Squids can run either locally or in a Subsquid-provided a cloud service called Aquarium. The service has and will always have a free tier. For more demanding applications it offers a premium subscription.

Prerequisites: NodeJS, [Subsquid CLI](https://docs.subsquid.io/squid-cli/installation/). Docker if you want your data in PostgreSQL and/or served via a GraphQL API.

## Generating a WASM/ink! squid

A squid indexing events listed in a contract ABI can be generated with the `@subsquid/squid-gen-ink` tool. Begin by creating a new project with the tool's complementary template and installing dependencies:
```bash
sqd init my-ink-squid -t https://github.com/subsquid-labs/squid-ink-abi-template
cd my-ink-squid
npm i
```
Obtain any contract ABIs and save them to the `./abi` folder. For example, for indexing token contracts you can grab the `erc20` ABI from the `squid-gen-ink` repository:
```bash
curl -o abi/erc20.json https://raw.githubusercontent.com/subsquid/squid-gen/master/tests/ink-erc20/abi/erc20.json
```
Next, make a `squidgen.yaml` configuration file like this one:
```yaml
archive: shibuya
target:
  type: postgres
contracts:
  - name: testToken
    abi: "./abi/erc20.json"
    address: "0x5207202c27b646ceeb294ce516d4334edafbd771f869215cb070ba51dd7e2c72"
    events:
      - Transfer
```
Here,
* **archive** is an alias or an endpoint URL of a chain-specific data lake responsible for the initial ingestion and filtration of the data. Subsquid maintains free archives for all Astar-related networks under aliases `astar`, `shibuya` and `shiden`.
* **target** section describes how the scraped data should be stored. The example above uses a PostgreSQL database that can be presented to users as a GraphQL API or used as-is. Another option is to [store the data to a file-based dataset](https://docs.subsquid.io/basics/squid-gen/#file-store-targets).
* **contracts** is a list of contracts to be indexed. All fields in the example above are required. Set `events: true` to index all events listed in the ABI.

When done, run
```bash
npx squid-gen config squidgen.yaml
```
to generate the squid code.

## Generating an EVM/Solidity squid

There are two primary ways to index EVM contracts deployed to Astar with Subsquid:
1. With a [Substrate processor](https://docs.subsquid.io/substrate-indexing/) utilizing its [support for the Frontier EVM pallet](https://docs.subsquid.io/substrate-indexing/evm-support/). This is useful when both EVM and Substrate data is required. If that is your use case, check out [this tutorial](https://docs.subsquid.io/tutorials/create-an-evm-processing-squid/).
2. With a [native EVM processor](https://docs.subsquid.io/evm-indexing/). This simpler and more performant approach will be the focus of this section.

Generating EVM squids is very similar to generating ink! squids. To create a project, execute
```bash
sqd init my-evm-squid -t abi
cd my-evm-squid
npm i
```
Note that a different template, `abi`, is used.

Next, obtain any contract ABIs and save them to the `./abi` folder. I will be indexing the [PancakeFactory](https://blockscout.com/astar/address/0xA9473608514457b4bF083f9045fA63ae5810A03E) and [PancakeRouter](https://blockscout.com/astar/address/0xE915D2393a08a00c5A463053edD31bAe2199b9e7) contracts of [Arthswap](https://arthswap.org) in this example, taking their ABIs from the Blockscout pages ("Code" tab, "Contract ABI" section) and saving them to `./abi/factory.json` and `./abi/router.json`, correspondingly.

The syntax of `squidgen.yaml` is almost the same as for the ink! tool, with the sole difference being that a `function` field can now be set for contracts. It is used for indexing contract method calls. Here is an example config for generating a squid indexing the two Arthswap contracts:
```yaml
archive: astar
target:
  type: postgres
contracts:
  - name: pancakeFactory
    abi: "./abi/factory.json"
    address: "0xA9473608514457b4bF083f9045fA63ae5810A03E"
    events: true
    functions:
      - feeTo
      - feeToSetter
  - name: pancakeRouter
    abi: "./abi/router.json"
    address: "0xE915D2393a08a00c5A463053edD31bAe2199b9e7"
    events: true
    functions: true
```
Note that the `astar` archive used by the EVM processor is different from the `astar` archive used by the Substrate processor in the ink! example. At the moment, `astar` is the only EVM archive that Subsquid maintains for Astar-related networks. If you happen to need an EVM archive for Shibuya or Shiden, please contact the Subsquid team directly using [this form](https://forms.gle/ioVNFiPjZgvUNunY9).

Generate the squid code with 
```bash
npx squid-gen config squidgen.yaml
```

## Starting the squid

Once you're done generating the code for your squid it is time to give it a local test run. This procedure is the same for both kinds of squids.

If you used a `postgres` target prepare the database and migrations by running
```bash
sqd up # starts a database container
sqd migration:generate
```

Then start a squid *processor* - the process that ingests data from the archive:
```bash
sqd process
```
You should see the processor apply the migrations and start the ingestion, producing messages like
```
05:26:16 INFO  sqd:processor 3483256 / 3483256, rate: 1045307 blocks/sec, mapping: 294 blocks/sec, 261 items/sec, ingest: 10 blocks/sec, eta: 0s
05:26:35 INFO  sqd:processor 3483257 / 3483257, rate: 157368 blocks/sec, mapping: 211 blocks/sec, 169 items/sec, ingest: 10 blocks/sec, eta: 0s
05:26:56 INFO  sqd:processor 3483259 / 3483259, rate: 79846 blocks/sec, mapping: 151 blocks/sec, 101 items/sec, ingest: 9 blocks/sec, eta: 0s
```

If the data is stored to the database, it should appear there almost instantaneously. Check it out with
```bash
PGPASSWORD=postgres psql -U postgres -p 23798 -h localhost squid
```
For file-based targets synchronization [takes longer](https://docs.subsquid.io/basics/store/file-store/overview/#filesystem-syncs-and-dataset-partitioning).

If you want to serve the scraped data over GraphQL you will need to start a separate GraphQL server process. Processor blocks the terminal, so open another one, navigate to the squid project folder and run
```bash
sqd serve
```
The server will listen at localhost:4350, with a [GraphiQL](https://github.com/graphql/graphiql) playground available at [http://localhost:4350/graphql](http://localhost:4350/graphql):

![GraphiQL playground](</subsquidGraphiql.png>)

## Next steps

Squid processes are just regular NodeJS processes that can be extended with regular Typescript code. The processor can [apply arbitrary transformations to the data](https://docs.subsquid.io/basics/squid-processor/#processorrun), query the contract state ([WASM](https://docs.subsquid.io/substrate-indexing/wasm-support/#state-queries)/[EVM](https://docs.subsquid.io/evm-indexing/query-state/)) or [mix in some data from external sources like APIs or IPFS](https://docs.subsquid.io/basics/external-api/). If you are using a GraphQL server, that can be extended too with [custom queries](https://docs.subsquid.io/graphql-api/custom-resolvers/) and simple [access control](https://docs.subsquid.io/graphql-api/authorization/). Check out Subsquid's [extensive documentation](https://docs.subsquid.io) to learn more about its features.

Once you're done customizing your squid, you can run it on your own infrastructure or use the Aquarium cloud service. In the simplest case, the deployment can be done with just
```bash
sqd deploy .
```
after [authenticating with Aquarium](https://docs.subsquid.io/squid-cli/#1-obtain-an-aquarium-deployment-key). For more complex scenarios see the [Deploy a Squid](https://docs.subsquid.io/deploy-squid/) section of the framework documentation.
