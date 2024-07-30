// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion
const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Astar Docs",
  url: "https://jiwon-lieb.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/fav.png",
  organizationName: "jiwon-lieb", // Usually your GitHub org/user name.
  projectName: "jiwon-lieb.github.io", // Usually your repo name.
  plugins: ["docusaurus-plugin-sass"],
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
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
          sidebarCollapsible: true,
          editUrl: "https://github.com/AstarNetwork/astar-docs/tree/main/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
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
    locales: ["en"],
    localeConfigs: {
      en: { htmlLang: "en-US" }
    },
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Astar Docs",
        logo: {
          alt: "Astar",
          src: "img/astar-logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "learn/index",
            sidebarID: "learnSidebar",
            position: "left",
            label: "Learn",
          },
          {
            type: "doc",
            docId: "use/index",
            sidebarID: "useSidebar",
            position: "left",
            label: "Use",
          },
          {
            type: "doc",
            docId: "build/zkEVM/quickstart",
            position: "left",
            label: "zkEVM",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/AstarNetwork/astar-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Get Started",
                to: "/docs/getting-started",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/astarnetwork",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/AstarNetwork",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "https://astar.network/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/AstarNetwork",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/channel/UC36JgEF6gqatVSK9xlzzrvQ",
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
};

module.exports = config;
