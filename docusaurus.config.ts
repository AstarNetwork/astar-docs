import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'Welcome to Astar',
  tagline: 'Here you will find documentation on how to develop dApps on Astar.',
  favicon: 'img/fav.png',

  future: {
    v4: true,
  },

  url: 'https://docs.astar.network',
  baseUrl: '/',

  organizationName: 'AstarNetwork',
  projectName: 'astar-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: { htmlLang: "en-US" }
    },
  },

  markdown: {
    mermaid: true,
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossOrigin: 'anonymous' as const,
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/AstarNetwork/astar-docs/tree/main/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/AstarNetwork/astar-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/astar-logo-text.svg',
    navbar: {
      logo: {
        alt: 'Astar',
        src: 'img/astar-logo-text.svg',
        srcDark: "img/astar-logo-text-dark.svg"
      },
      items: [
        {
          type: 'doc',
          docId: 'getting-started',
          sidebarId: 'getting-started',
          position: 'left',
          label: 'Docs',
        },
        {
          position: 'left',
          label: 'website',
          to: 'https://astar.network'
        },
        {
          position: 'left',
          label: 'Portal',
          to: 'https://portal.astar.network/'
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Solutions',
          items: [
            {
              label: 'Soneium',
              href: 'https://soneium.org/en/',
            },
            {
              label: 'Astar Network',
              href: 'https://astar.network',
            },
            {
              label: 'Startale Group',
              href: 'https://startale.com/en',
            }
          ],
        },
        {
          title: 'Use',
          items: [
            {
              label: 'Portal',
              href: 'https://portal.astar.network/astar/assets',
            },
            {
              label: 'Ecosystem',
              href: 'https://astar.network/ecosystem',
            },
            {
              label: 'dApp Staking',
              href: 'https://portal.astar.network/astar/dapp-staking/discover',
            }
          ],
        },
        {
          title: 'Developer',
          items: [
            {
              label: 'Integrations',
              to: '/docs/build/integrations/',
            },
            {
              label: 'Start Building',
              to: '/docs/build',
            }
          ],
        },
        {
          title: 'Explore',
          items: [
            {
              label: 'Blog',
              href: 'https://astar.network/blog',
            },
            {
              label: 'Astar Forum',
              href: 'https://forum.astar.network/',
            },
            {
              label: 'Discord Community',
              href: 'https://discord.com/invite/astarnetwork',
            }
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'Careers',
              href: 'https://startale.com/en/career',
            },
            {
              label: 'Contact Us',
              href: 'https://astar.network/contact',
            },
            {
              label: 'Brand Asset Kit',
              href: 'https://astar.network/brand-asset-kit',
            }
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Terms of Use',
              href: 'https://astar.network/term-of-use',
            },
            {
              label: 'Privacy Policy',
              href: 'https://astar.network/privacy-policy',
            }
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Astar Developers Hub.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'S7S4T6Q4KC',

      // Public API key: it is safe to commit it
      apiKey: 'daf10229cac599f39cd3de3e87f85e6d',

      indexName: 'astar',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'astar\\.network',

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: false,

      //... other Algolia params
    }
  } satisfies Preset.ThemeConfig,
  customFields: {
    searchTags: ['dApp Staking', 'smart contracts', 'IDE', 'Soneium', 'API', 'Faucet', 'Oracles'],
    tabs: [
      {
        label: 'About Astar',
        id: 'about',
        iconCssVarName: 'astar-icon',
        content: [
          {
            title: 'About Astar Network',
            caption: "Japan's scalable, decentralized, and interoperable smart contract platform.",
            url: 'https://docs.astar.network/docs/learn/astar',
          },
          {
            title: 'Astar Collective Architecture',
            caption: 'Astar Network, a Polkadot parachain &  Soneium, an Ethereum OP Layer 2.',
            url: 'https://docs.astar.network/docs/learn/architecture/',
          },
          {
            title: 'Networks',
            caption: 'Different networks accessible within the entire Astar Collective ecosystem.',
            url: 'https://docs.astar.network/docs/learn/networks',
          },
          {
            title: 'Astar Token',
            caption: 'The ASTR token. It is the main asset used within the Astar Collective.',
            url: 'https://docs.astar.network/docs/learn/astar-tokens',
          },
          {
            title: 'Tokenomics 2.0',
            caption: 'An updated model that defines inflation rates, fee structures, and more.',
            url: 'https://docs.astar.network/docs/learn/tokenomics2/',
          }
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
            caption: "Unique stacking mechanism to provide financial incentives for developers.",
            url: "https://docs.astar.network/docs/learn/dapp-staking/",
          },
          {
            title: "Technical Overview",
            caption: "Technical overview of how dApp Staking works for users and developers.",
            url: "https://docs.astar.network/docs/learn/dapp-staking/dapp-staking-protocol",
          },
          {
            title: "Parameters",
            caption:
              "Parameters such as time, rewards, slot allocations, tier assignments, and more.",
            url: "https://docs.astar.network/docs/learn/dapp-staking/protocol-parameters",
          },
          {
            title: "For Stakers",
            caption: "How ASTR holders can actively participate and earn in dApp Staking.",
            url: "https://docs.astar.network/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/",
          },
          {
            title: "For Developers",
            caption: "How project owners can participate in and benefit from dApp Staking.",
            url: "https://docs.astar.network/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/",
          },
          {
            title: "Building with dApp Staking",
            caption: "Leveraging and building new solutions on top of dApp Staking.",
            url: "https://docs.astar.network/docs/build/dapp-staking/",
          },
        ],
        highlight: {
          single: {
            title: "dApp Staking",
            caption: "Incentivized program connecting devs to Astar community",
            buttonText: "Build & Earn",
            buttonUrl: "https://portal.astar.network/astar/dapp-staking/discover",
          },
        },
      },
      {
        label: "Users Guides",
        id: "guides",
        iconCssVarName: "guide-icon",
        content: [
          {
            title: "Astar Wallets",
            caption: "Set up your Ethereum or Polkadot wallet for the Astar Collective Ecosystem.",
            url: "https://docs.astar.network/docs/use/get-started/",
          },
          {
            title: "Transfer assets",
            caption: "Transfer assets seamlessly within and outside the Astar Collective ecosystem.",
            url: "https://docs.astar.network/docs/use/how-to-guides/layer-1/astar-portal/transfer-tokens",
          },
          {
            title: "dApp Staking",
            caption: "How ASTR holders or project owners can take part in Astar dApp Staking.",
            url: "https://docs.astar.network/docs/use/how-to-guides/layer-1/dapp-staking/",
          },
          {
            title: "Troubleshooting",
            caption: "For users encountering issues on the Astar, Soneium or dApp Staking.",
            url: "https://docs.astar.network/docs/use/how-to-guides/layer-1/astar-portal/troubleshooting",
          },
          {
            title: "Soneium",
            caption: "Easily transfer between Astar and Soneium, or stake directly on Soneium.",
            url: "https://docs.astar.network/docs/use/how-to-guides/soneium/",
          },
          {
            title: "Astar Governance",
            caption: "Participate in the decentralized governance of Astar Network.",
            url: "https://docs.astar.network/docs/use/how-to-guides/layer-1/governance/subsquare_guide",
          }
        ],
        highlight: {
          single: {
            title: "Astar Portal",
            caption: "Multi-chain platform hub for asset management within Astar Network",
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
            caption: "A Developer's Overview of the Astar Ecosystem.",
            url: "https://docs.astar.network/docs/build/Introduction/",
          },
          {
            title: "Nodes",
            caption: "Set up a permissionless node and become a collator.",
            url: "https://docs.astar.network/docs/build/nodes/",
          },
          {
            title: "Build Environment",
            caption: "Set up a local environment tailored to your development requirements.",
            url: "https://docs.astar.network/docs/build/environment/",
          },
          {
            title: "Integrations",
            caption: "Common services and infrastructure tools integrated on Astar Network.",
            url: "https://docs.astar.network/docs/build/integrations/",
          },
          {
            title: "WASM smart-contracts",
            caption: "Build and deploy a smart contract using the WASM tech stack.",
            url: "https://docs.astar.network/docs/build/wasm/",
          },
          {
            title: "EVM smart-contracts",
            caption: "Build and deploy a smart contract using the EVM tech stack.",
            url: "https://docs.astar.network/docs/build/EVM/",
          },
        ],
        highlight: {
          multi: [
            {
              title: "Faucet",
              subtitle: "Need tokens for testing?",
              icon: null,
              url: "https://docs.astar.network/docs/build/environment/faucet",
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
  }
};

export default config;