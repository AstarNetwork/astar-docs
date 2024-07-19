// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion
const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Welcome to Astar",
  tagline: "Here you will find documentation on how to develop dApps on Astar.",
  url: "https://docs.astar.network",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/fav.png",
  organizationName: "AstarNetwork", // Usually your GitHub org/user name.
  projectName: "astar-docs", // Usually your repo name.
  plugins: ["docusaurus-plugin-sass"],
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity: "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap",
      type: "text/css",
    },
  ],
  clientModules: [require.resolve("./static/astarAi.js")],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/AstarNetwork/astar-docs/tree/main/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/AstarNetwork/astar-docs/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  //Enable multilanguage support. Portuguese added as first language
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja", "es"],
    localeConfigs: {
      en: { htmlLang: "en-US" },
      ja: {},
    },
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Astar",
          src: "img/astar-logo-text.svg",
          srcDark: "img/astar-logo-text-dark.svg",
        },
        items: [
          {
            type: "doc",
            docId: "getting-started",
            position: "left",
            label: "Docs",
          },
          {
            position: "left",
            label: "Website",
            to: "https://astar.network",
          },
          {
            position: "left",
            label: "Portal",
            to: "https://portal.astar.network/",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Solutions",
            items: [
              {
                label: "Solutions",
                href: "https://astar.network",
              },
              {
                label: "Startale Labs",
                href: "https://astar.network",
              },
              {
                label: "Astar Japan Lab",
                href: "https://astar.network",
              },
              {
                label: "Astar 2.0",
                href: "https://astar.network",
              },
            ],
          },
          {
            title: "Use",
            items: [
              {
                label: "Portal",
                href: "https://astar.network",
              },
              {
                label: "dApp Staking",
                href: "https://astar.network",
              },
              {
                label: "Ecosystem",
                href: "https://astar.network",
              },
            ],
          },
          {
            title: "Developer",
            items: [
              {
                label: "Start Building",
                href: "https://astar.network",
              },
              {
                label: "Docs",
                to: "https://astar.network",
              },
            ],
          },
          {
            title: "Explore",
            items: [
              {
                label: "Community",
                href: "https://astar.network",
              },
              {
                label: "Blog",
                href: "https://astar.network",
              },
              {
                label: "Become our Agent",
                href: "https://astar.network",
              },
              {
                label: "Discord Community",
                href: "https://astar.network",
              },
              {
                label: "Astar Forum",
                href: "https://astar.network",
              },
            ],
          },
          {
            title: "About",
            items: [
              {
                label: "Brand Asset Kit",
                href: "https://astar.network",
              },
              {
                label: "Careers",
                href: "https://astar.network",
              },
              {
                label: "Contact Us",
                href: "https://astar.network",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Privacy Policy",
                href: "https://astar.network",
              },
              {
                label: "Terms of Use",
                href: "https://astar.network",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Astar Developers Hub.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["rust", "toml", "solidity"],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "S7S4T6Q4KC",

        // Public API key: it is safe to commit it
        apiKey: "daf10229cac599f39cd3de3e87f85e6d",

        indexName: "astar",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "astar\\.network",

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        //... other Algolia params
      },
    }),
  customFields: {
    searchTags: ["dApp Staking", "smart contracts", "IDE", "zkEVM", "API", "Faucet", "Oracles"],
    tabs: [
      {
        label: "About Astar",
        id: "about",
        iconCssVarName: "astar-icon",
        content: [
          {
            title: "About Astar Network",
            caption: "Japan's Scalable, Interoperable Smart Contract Platform",
            url: "https://docs.astar.network/docs/learn/astar",
          },
          {
            title: "Architecture",
            caption: "Ecosystem Architecture: Ethereum zkEVM Layer 2 & Polkadot Parachain",
            url: "https://docs.astar.network/docs/learn/architecture/",
          },
          {
            title: "Networks",
            caption: "Networks accessible within the Astar Ecosystem",
            url: "https://docs.astar.network/docs/learn/networks",
          },
          {
            title: "Astar Token",
            caption: "ASTR token: utilities, allocation, and values",
            url: "https://docs.astar.network/docs/learn/astar-tokens",
          },
          {
            title: "Tokenomics 2.0",
            caption: "Astar Tokenomics: Inflation and Fees Model",
            url: "https://docs.astar.network/docs/learn/tokenomics2/",
          },
          {
            title: "Astar zkEVM",
            caption: "Layer 2 scaling solution connected to AggLayer",
            url: "https://docs.astar.network/docs/learn/zkEVM/",
          },
        ],
        highlight: {
          single: {
            title: "Connecting you to web3",
            caption: "Creating opportunities for individuals to use web3 technology",
            buttonText: "Astar website",
            buttonUrl: "https://astar.network",
          },
        },
      },
      {
        label: "dApp Staking",
        id: "staking",
        iconCssVarName: "staking-icon",
        content: [
          {
            title: "What is dApp Staking",
            caption: "Unique stacking mechanism to provide financial incentives for developers",
            url: "https://docs.astar.network/docs/learn/dapp-staking/",
          },
          {
            title: "Technical Overview",
            caption: "Technical and detailed presentation of dApp Staking",
            url: "https://docs.astar.network/docs/learn/dapp-staking/dapp-staking-protocol",
          },
          {
            title: "Parameters",
            caption:
              "Parameters such as time, rewards, slot allocations, tier assignments, and thresholds.",
            url: "https://docs.astar.network/docs/learn/dapp-staking/protocol-parameters",
          },
          {
            title: "For Users",
            caption: "How ASTR holders can take part in dApp Staking",
            url: "https://docs.astar.network/docs/use/dapp-staking/for-stakers/",
          },
          {
            title: "For Developers",
            caption: "How project owners can participate in dApp Staking",
            url: "https://docs.astar.network/docs/use/dapp-staking/for-devs/",
          },
          {
            title: "Building with dApp Staking",
            caption: "Leveraging and building on top of dApp Staking",
            url: "https://docs.astar.network/docs/build/dapp-staking/",
          },
        ],
        highlight: {
          single: {
            title: "dApp Staking",
            caption: "Incentivized program connecting devs to Astar community",
            buttonText: "Build & Earn",
            buttonUrl: "https://docs.astar.network/docs/learn/dapp-staking/",
          },
        },
      },
      {
        label: "Users Guides",
        id: "guides",
        iconCssVarName: "guide-icon",
        content: [
          {
            title: "Astar Wallet",
            caption: "Set up your Ethereum or Polkadot wallet for the Astar Ecosystem",
            url: "https://docs.astar.network/docs/use/manage-wallets/create-wallet",
          },
          {
            title: "Transfer assets",
            caption: "Transfer assets within and outside the Astar Ecosystem",
            url: "https://docs.astar.network/docs/use/manage-assets/transfer-tokens",
          },
          {
            title: "Astar zkEVM",
            caption: "Explore and utilize the Layer 2 Astar zkEVM",
            url: "https://docs.astar.network/docs/use/zkevm-guides/",
          },
          {
            title: "dApp Staking",
            caption: "How ASTR holders or project owners can take part in dApp Staking",
            url: "https://docs.astar.network/docs/use/dapp-staking/",
          },
          {
            title: "Troubleshooting",
            caption: "For users encountering issues on the Astar network",
            url: "https://docs.astar.network/docs/use/troubleshooting",
          },
        ],
        highlight: {
          single: {
            title: "Astar Portal",
            caption: "Multi-chain platform hub for asset management",
            buttonText: "Try it out!",
            buttonUrl: "https://portal.astar.network/",
          },
        },
      },
      {
        label: "Builders",
        id: "builders",
        iconCssVarName: "builders-icon",
        content: [
          {
            title: "Introduction",
            caption: "A Developer's Overview of the Astar Ecosystem",
            url: "https://docs.astar.network/docs/build/Introduction/",
          },
          {
            title: "Nodes",
            caption: "Set up a permissionless node and become a collator",
            url: "https://docs.astar.network/docs/build/nodes/",
          },
          {
            title: "Build Environment",
            caption: "Set up a local environment tailored to your development requirements",
            url: "https://docs.astar.network/docs/build/environment/",
          },
          {
            title: "Astar zkEVM",
            caption: "Everything you need to build on Astar zkEVM Layer 2",
            url: "https://docs.astar.network/docs/build/zkEVM/",
          },
          {
            title: "Integrations",
            caption: "Common services and infrastructure tools integrated on Astar Network",
            url: "https://docs.astar.network/docs/build/integrations/",
          },
          {
            title: "WASM smart-contracts",
            caption: "Build and deploy a smart contract using the WASM tech stack",
            url: "https://docs.astar.network/docs/build/wasm/",
          },
          {
            title: "EVM smart-contracts",
            caption: "Build and deploy a smart contract using the EVM tech stack",
            url: "https://docs.astar.network/docs/build/EVM/",
          },
        ],
        highlight: {
          multi: [
            {
              title: "Faucet",
              subtitle: "Need tokens for testing?",
              icon: null,
              url: "https://astar.network/faucet",
            },
            {
              title: "Support",
              subtitle: "Encountering issues?",
              icon: "/img/socials/discord-color.svg",
              url: "https://discord.gg/astarnetwork",
            },
            {
              title: "Check our Ecosystem",
              subtitle: "Developer toolings",
              icon: null,
              url: "https://astar.network/ecosystem",
            },
          ],
        },
      },
    ],
  },
};

module.exports = config;
