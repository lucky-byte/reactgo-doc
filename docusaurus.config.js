// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'React + Go',
  tagline: '面向快速交付，提高生产效率',
  url: 'https://reactgo.kross.work',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'lucky-byte',
  projectName: 'reactgo-doc',
  trailingSlash: false,

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/lucky-byte/reactgo/tree/main/doc/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/lucky-byte/reactgo/tree/main/doc/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-GZ1K4E8B03',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig: ({
    navbar: {
      title: 'ReactGO',
      logo: { alt: 'Logo', src: 'img/logo.png' },
      items: [
        { type: 'doc', docId: 'intro', position: 'left', label: '快速上手', },
        { to: '/blog', label: '博客', position: 'left' },
        {
          href: 'https://github.com/lucky-byte/reactgo',
          label: 'GITHUB',
          position: 'right',
        },
        {
          href: 'https://gitee.com/lucky-byte/reactgo',
          label: 'GITEE',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '快速上手', to: '/docs/intro',
            },
            {
              label: '博客', to: '/blog',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: 'GITHUB', href: 'https://github.com/lucky-byte/reactgo',
            },
            {
              label: 'GITEE', href: 'https://gitee.com/lucky-byte/reactgo',
            },
          ],
        },
      ],
      copyright: `版权所有 &copy; ${new Date().getFullYear()} ReactGO 项目.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  }),
};

module.exports = config;
