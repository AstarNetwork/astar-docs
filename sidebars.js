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
      link: { type: "doc", id: "learn/dapp-staking/dapp-staking"},
      items: [
        "learn/dapp-staking/dapp-staking-protocol",
        "learn/dapp-staking/dapp-staking-faq",
        "learn/dapp-staking/protocol-parameters",
      ],
    },
  ]
  }


module.exports = sidebars;
