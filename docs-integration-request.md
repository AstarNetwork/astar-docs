---
title: Your Project Title
---

import Figure from '/src/components/figure'

# Your Project Name

:::info

***This file can be used as a template for your submission.***

To learn how to set up a local Docusaurus install to view this the way it was intended, in addition to being able to review your own document(s) prior to submitting a PR, see the astar-docs [README](https://github.com/AstarNetwork/astar-docs/blob/main/README.md) file. Once your environment is ready to go:

- Create a new branch of astar-docs for your update/addition. 

- Within the new branch:
    1. **Make a Copy** of this file and **rename** it to something meaningful (ie: *projectname-oracle.md* or *widgetzyx-nft-api.md.* **Do not use spaces**) 
    2. Move the newly renames *yourprojectname.md* to the most appropriate section of Astar docs. If you're unsure about where that might be in the end, please submit a PR anyways; we will find a home for it prior to merging.
    3. If your tutorial includes images or screenshots (**highly encouraged!**) please add them to a new or existing `img` folder located within the same folder as your .md file, and see below.
    4. When your document or tutorial is finished, submit a pull request to the [astar-docs](https://github.com/AstarNetwork/astar-docs) repo on Github and tag it with the `documentation` label. Thank you!

**PS: Please do not use `[!](https://dont.link.images.like.this.com)` or `[!](./some/relative/path/to/image.jpg)` to link images.** Instead, we request you import and use the custom `Figure` function described below, which is i18n-friendly:

    Retain the existing import statement at the top of this file:

    ```r
    import Figure from '/src/components/figure'
    ```

    And in the body, as one example:

    ```r
    <Figure src={require('/docs/build/zkEVM/integrations/img/network.png').default} width="100%" />
    ```

    Here's another example with an image caption:

    ```r
   <Figure caption="Cody's Degen Account" src={require('/docs/build/zkEVM/integrations/img/degen.png').default} width="100%"/>
    ```
:::

## Introduction

Write a short description in just a few paragraphs about your solution and how Astar developers can leverage it. 

#### Example: 
BlockAppleQL is a query language for APPLECHAINS and a runtime for validating those apple transactions within your existing fruit ledger. It offers a cryptographically secure and transparent alternative to traditional fruit databases, and excels when dealing with complex decentralized orchards.

BlockAppleQL allows users to define the ripeness of the apples they transact. Instead of receiving a generic apple from the global orchard, users can request specific ripeness levels, leading to more consistent fruit experiences and a reduction in unripe or overripe transactions.

## Prerequisites

List the prerequisites necessary to work with your solution. Mention all required libraries, SDKs, plugins, etc. and the corresponding versions that should be installed, in list format. Link to external documentation if necessary. 

#### Example:
 - The latest version of `[Node.js](https://link.to.download.com)`.
 - Swanky v1.x.x.x.
 - A local development node.
 - Basic JavaScript knowledge.

## Getting started

Here you should provide a step-by step tutorial about how developers can use your solution on Astar. 

### Step 1
### Step 2
### Step...

## Addresses/Endpoints

Here you can provide a list of Gateways, Endpoints, or any other supporting information, in list form. Feel free to change the name of this heading to something more appropriate, or remove it entirely.

## Troubleshooting
List common implementation issues, causes, and solutions.

#### Example: 
**I receive Error *X* after running *Y***

This occurs due to *Z* which can be resolved by following *ABC.* 

:::note
This *something* is for **advanced users**, only.
:::

:::danger
This *something* you **REALLY** don't want to do!!
:::

## Learn more

Here you can provide links to your own documentation and related resources. 
