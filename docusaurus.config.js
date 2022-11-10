// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const math = require("remark-math");
const katex = require("rehype-katex");


/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Astar Docs",
    tagline: "Your one-stop shop for everything Astar",
    url: "https://docs.astar.network",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/fav.png",
    organizationName: "AstarNetwork", // Usually your GitHub org/user name.
    projectName: "astar-docs", // Usually your repo name.
    plugins: ["docusaurus-plugin-sass"],
    stylesheets: [{
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
    }, ],

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
      defaultLocale: 'en',
      locales: ['en', 'pt'],
      localeConfigs: {
        en: {htmlLang: 'en-US',},
        pt: {},
      }
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
                items: [{
                        type: "doc",
                        docId: "getting-started",
                        position: "left",
                        label: "Docs",
                    },
                    {
                        to: "https://medium.com/astar-network",
                        label: "Medium",
                        position: "left",
                    },
                    {
                        to: 'https://www.youtube.com/channel/UC36JgEF6gqatVSK9xlzzrvQ',
                        label: 'Youtube',
                        position: 'left',
                    },
                    {
                      type: 'localeDropdown',
                      position: 'right',
                    },
                    {
                        href: 'https://github.com/AstarNetwork/astar-docs',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: "light",
                links: [{
                        title: "Docs",
                        items: [{
                            label: "Get Started",
                            to: "/docs/getting-started",
                        }, ],
                    },
                    {
                        title: "Community",
                        items: [{
                                label: "Discord",
                                href: "https://discord.gg/mWGt9bH59s",
                            },
                            {
                                label: "Twitter",
                                href: "https://twitter.com/AstarNetwork",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [{
                                label: "Blog",
                                to: "https://medium.com/astar-network",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/AstarNetwork",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Astar Developers Hub.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            algolia: {
                // The application ID provided by Algolia
                appId: "S7S4T6Q4KC",

                // Public API key: it is safe to commit it
                apiKey: "4eacb78946fd33fdd34c5954c4658a7b",

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