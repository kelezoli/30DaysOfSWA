// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DIGITAL REALITY',
  tagline: 'Introductory handbook for skills trainers and teachers',
  url: 'https://www.kelemenzoltan.com',
  baseUrl: '/drinvet/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // -- Customized for Deployment Configuration
  organizationName: '', // Usually your GitHub org/user name.
  projectName: 'DRinvet', // Usually your repo name.
  trailingSlash: false,
  // deploymentBranch: `gh-pages`, // default = gh-pages

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        
      
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          
        },
      
/*        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Most Recent Posts',
          postsPerPage: 1,
        },
*/       
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
/*        gtag: {
          trackingID: 'G-XQTX19ZF9V',
          anonymizeIP: true,
        }, */
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      navbar: {
        title: 'DIGITAL REALITY',
        logo: {
          alt: 'DRinVET logo',
          src: 'img/svg/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Introduction',
            position: 'left',
            label: 'Handbook',
          },
          {href: '/about', label: 'About', position: 'left'},
          {
            href: 'sthing',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          /*
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
          */
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DrinVET </a> - Built with <a href="https://docusaurus.io"> Docusaurus </a>  - Created by <a href="https://learnvirtual.eu"> Learning Virutal Europe </a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      image: 'img/logo.png',

      metadata: [
        {
          name: 'twitter:url', 
          content: 'https://aka.ms/30DaysOfSWA'
        },
        {
          name: 'twitter:title', 
          content: 'Learn Azure Static Web Apps in #30DaysOfSWA'
        },
        {
          name: 'twitter:description', 
          content: 'Learn @AzureStaticApps from Core Concepts to Best Practices in #30DaysOfSWA at https://aka.ms/30DaysOfSWA'
        },
        {
          name: 'twitter:image', 
          content: 'https://www.azurestaticwebapps.dev/assets/images/series-people-13a2856edd7022e82a252ed05dffbabc.png'
        },
        {
          name: 'twitter:card', 
          content: 'summary_large_image'
        },
        {
          name: 'twitter:creator', 
          content: '@nitya'
        },
        {
          name: 'twitter:site', 
          content: '@AzureStaticApps'
        },

      ],


    }),
  
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. 
        steps: 2, // #images b/w min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
};

module.exports = config;
