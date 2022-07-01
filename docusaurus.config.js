// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Astar Docs',
  tagline: 'Your one-stop shop for everything Astar.',
  url: 'https://staging.docs.astar.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/fav.png',
  organizationName: 'AstarNetwork', // Usually your GitHub org/user name.
  projectName: 'astar-docs', // Usually your repo name.
  plugins: ['docusaurus-plugin-sass'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/AstarNetwork/astar-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/AstarNetwork/astar-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Astar Docs',
        logo: {
          alt: 'Astar',
          src: 'img/astar-logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Docs',
          },
          {
            to: 'https://medium.com/astar-network',
            label: 'Medium',
            position: 'left',
          },
          {
            href: 'https://github.com/AstarNetwork/astar-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/docs/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/mWGt9bH59s',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/AstarNetwork',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://medium.com/astar-network',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/AstarNetwork',
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
    }),
};

module.exports = config;
