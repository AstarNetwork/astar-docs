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
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap",
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
    searchTags: ["zkEvm", "dApp Staking", "node", "wallets", "ledger"],
  },
};

module.exports = config;
