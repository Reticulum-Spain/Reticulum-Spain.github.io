import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import mdiIconify from './src/remark/mdi-iconify';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Comunidad Reticulum España',
  tagline: 'Sitio web y documentación para la comunidad de Reticulum en España',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: true,
      siteStorageNamespacing: true,
      fasterByDefault: true,
      // Keep MDX v1 compatibility (`<!-- -->` comments, `{#anchor}` heading
      // ids) until the content is written and we decide to drop it.
      mdx1CompatDisabledByDefault: false,
    },
  },

  // Set the production url of your site here
  url: 'https://reticulum.es',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Reticulum-Spain', // Usually your GitHub org/user name.
  projectName: 'Reticulum-Spain.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onDuplicateRoutes: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw'
    }
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  plugins: [
      [
        '@docusaurus/plugin-client-redirects',
        {
          redirects: []
        }
      ],
      'docusaurus-plugin-image-zoom'
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/Reticulum-Spain/Reticulum-Spain.github.io/tree/main/',
          beforeDefaultRemarkPlugins: [mdiIconify],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Reticulum-Spain/Reticulum-Spain.github.io/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          beforeDefaultRemarkPlugins: [mdiIconify],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // TODO: add a social card image (e.g. 'img/reticulum-es-social-card.jpg')
    // image: 'img/reticulum-es-social-card.jpg',
    metadata: [
      { prefix: 'og: https://ogp.me/ns#' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    navbar: {
      title: 'Comunidad Reticulum España',
      logo: {
        alt: 'Logo Reticulum España',
        src: 'img/favicon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentación',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/Reticulum-Spain',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            {
              label: 'Introducción',
              to: '/docs/introduccion',
            },
            {
              label: 'Política de cookies',
              to: '/politica-de-cookies',
            },
            {
              label: 'Tratamiento de datos',
              to: '/tratamiento-de-datos',
            }
          ],
        },
        {
          title: 'Comunidad',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Reticulum-Spain',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },

        {
          title: 'Web oficial',
          items: [
            { label: 'https://reticulum.network/', href: 'https://reticulum.network/' },
          ],
        },

      ],
      copyright: `Sitio web no oficial. Comunidad Reticulum España. Hecho con Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash'],
    },
    zoom: {
      selector: '.markdown img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'var(--ifm-background-color)'
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      }
    }
  }   satisfies Preset.ThemeConfig,

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,

        // For Docs using Chinese, it is recomended to set:
        // language: ["en", "zh"],

        // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
        // forceIgnoreNoIndex: true,
      }),
    ]
  ]
};

export default config;
