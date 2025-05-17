import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'MAESTRE Documentation',
  tagline: 'User and Administrator Manuals',
  favicon: 'maestre_logo_white_transparent.webp',

  // Set the production url of your site here
  url: 'https://maestre-docs.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MAESTRE-TFG', // Usually your GitHub org/user name.
  projectName: 'maestre', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MAESTRE-TFG/maestre/tree/main/docs/',
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
            'https://github.com/MAESTRE-TFG/maestre/tree/main/docs/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/maestre-social-card.jpg',
    navbar: {
      title: 'MAESTRE Docs',
      logo: {
        alt: 'MAESTRE Logo',
        src: 'maestre_logo_black_transparent.webp',
        srcDark: 'maestre_logo_white_transparent.webp',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'userManualSidebar',
          position: 'left',
          label: 'User Manual',
        },
        {
          type: 'docSidebar',
          sidebarId: 'adminManualSidebar',
          position: 'left',
          label: 'Admin Manual',
        },
        {
          type: 'docSidebar',
          sidebarId: 'legalSidebar',
          position: 'left',
          label: 'Legal',
        },
        {
          href: 'https://github.com/MAESTRE-TFG/maestre',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'User Manual',
              to: '/docs/user-manual/introduction',
            },
            {
              label: 'Admin Manual',
              to: '/docs/admin-manual/introduction',
            },
          ],
        },
        {
          title: 'MAESTRE',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/MAESTRE-TFG/maestre',
            },
            {
              label: 'Report Issues',
              href: 'https://github.com/MAESTRE-TFG/maestre/issues',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'License',
              to: '/docs/legal/license',
            },
            {
              label: 'Terms of Service',
              to: '/docs/legal/terms',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MAESTRE Project. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        // Options for the plugin
        hashed: true,
        language: ['en','es'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/docs',
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
      },
    ],
  ],
};

export default config;
