// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DRinVET HANDBOOK',
  tagline: 'Digital Reality - the basis of skills training',
  url: 'https://www.kelemenzoltan.com',
  baseUrl: '/drinvet/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-32x32.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '', // Usually your GitHub org/user name.
  projectName: '', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
/*  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },*/

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'DRinVET',
        logo: {
          alt: 'DRinVET logo',
          src: 'img/svg/logo.svg',
        },
        items: 
        [
          {
            type: 'doc',
            docId: 'Introduction',
            position: 'left',
            label: 'Handbook',
          },
  
          {to: 'showcase', 
          label: 'Showcase', 
          position: 'left', },

          {to: 'team', 
          label: 'The team', 
          position: 'right',
        AcitveBaseRegex:'Team' },    
                
                    {
                      href: 'https://github.com/facebook/docusaurus',
                      label: 'GitHub',
                      position: 'right',
                    } ,
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
        logo: {
          alt: 'DRinVET Logo',
          src: 'img/png/footer_erasmus_drinvet_logo.png',
          href: 'https://https://drinvet-project.eu/',

        },

        copyright: `Created by <a href="https://learnvirtual.eu/"> Learn Virtual Europe</a> </br>
        Copyright © ${new Date().getFullYear()} </br>The European Commission's support for the production of this publication does not constitute an endorsement of the contents, which reflect the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.</br> ERASMUS + KA2: 2020-1-HR01-KA226-VET-094650.  `,
      }, 
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
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
