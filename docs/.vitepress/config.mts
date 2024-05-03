import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "osu!api Apps Script",
  description: "Apps Script Wrapper for osu!api V2",
  base: "/osu-api-Appscript-Wrapper/",
  themeConfig: {
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/endpoints/' },
      { text: 'Snippets', link: '/snippets/' }
    ],

    sidebar: {
      '/endpoints/': [
        {
          text: 'Introduction',
          link: '/endpoints/',
        },
        {
          text: 'Getting Started',
          link: '/endpoints/getting-started',
        },
        {
          text: 'Endpoints Overview',
          link: '/endpoints/endpoints',
        },
        {
          text: 'Changelog',
          link: '/endpoints/changelog',
        },
        {
          text: 'Endpoints',
          collapsed: false,
          items: [
            {
              text: 'Authentication',
              collapsed: true,
              items: [
                {
                  text: 'Client Credentials Grant',
                  link: '/endpoints/authentication/client-credentials-grant'
                }
              ]
            },
            {
              text: 'Deprecated',
              collapsed: true,
              items: [
                {
                  text: 'Get Token',
                  link: '/endpoints/deprecated/get-token'
                },
                {
                  text: 'Custom Request',
                  link: '/endpoints/deprecated/custom-request'
                }
              ]
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DannyPX/osu-api-Appscript-Wrapper' }
    ],

    footer: {
      message: '<b>osu!api v2 Wrapper</b> is not affiliated, associated, authorized, endorsed by, or in any way officially connected with <a href="https://osu.ppy.sh/">osu!</a>'
    }
  }
})

