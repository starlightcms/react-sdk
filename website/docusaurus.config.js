/* eslint-disable */
// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const rehypeJargon = require('remark-jargon')
const jargon = require('./src/jargon')
const path = require('path')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Starlight React SDK',
  tagline: 'Documentação oficial do Starlight SDK para React',
  url: 'https://react.sdk.starlight.sh',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  plugins: [
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-typedoc-api',
      {
        projectRoot: path.join(__dirname, '..'),
        packages: ['.'],
        typedocOptions: {
          excludeExternals: false,
        },
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 2000,
        min: 640,
        steps: 4,
      },
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/starlightcms/react-sdk/tree/main/website/',
          remarkPlugins: [[rehypeJargon, { jargon }]],
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   blogSidebarTitle: 'Posts recentes',
        // },
        theme: {
          customCss: [require.resolve('./src/css/custom.scss'), require.resolve('./src/css/markdown.scss')],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'React SDK',
        logo: {
          alt: 'Starlight React SDK logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guia',
          },
          {
            to: 'api',
            label: 'API',
            position: 'left',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/starlightcms/react-sdk',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentação',
            items: [
              {
                label: 'Guia',
                to: '/docs/intro',
              },
              {
                label: 'API',
                to: '/api',
              },
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
            ],
          },
          {
            title: 'Starlight',
            items: [
              {
                label: 'Conheça o Starlight',
                href: 'https://starlight.sh',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/starlightcms',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Starlight`,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
    }),
}

module.exports = config
