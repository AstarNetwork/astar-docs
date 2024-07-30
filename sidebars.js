/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
/** const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  tutorialSidebar: [
    {
      type: "category",
      label: "Tutorial",
      items: ["hello"],
    },
  ],
};
*/
const sidebars = {
  learnSidebar: [
    "learn/astar",
    "learn/accounts",
    "learn/astar-tokens",
    {
      type: "category",
      label: "dApp Staking V3",
      link: { type: "doc", id: "learn/dapp-staking/index"},
      items: [
        "learn/dapp-staking/dapp-staking-protocol",
        "learn/dapp-staking/dapp-staking-faq",
        "learn/dapp-staking/protocol-parameters",
      ],
    },
    "learn/glossary",
    "learn/networks",
    {
      type: "category",
      label: "Architecture",
      link: { type: "doc", id: "learn/architecture/index"},
      items: [
        "learn/dapp-staking/astar-parachain",
        "learn/dapp-staking/astar-zkevm",
      ],
    },
    "learn/Proxies",
    "learn/smart-contracts",
    {
      type: "category",
      label: "Tokenomics 2.0",
      link: { type: "doc", id: "learn/tokenomics2/index"},
      items: [
        "learn/tokenomics2/tokenomics2-network-fees",
        "learn/tokenomics2/inflation",
        "learn/tokenomics2/legacy_inflation",
      ],
    },
  ]
  }


module.exports = sidebars;
