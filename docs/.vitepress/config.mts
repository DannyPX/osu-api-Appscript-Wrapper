import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "osu!api Apps Script",
  description: "Apps Script Wrapper for osu!api V2",
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
          text: 'Terms of Use',
          link: 'https://osu.ppy.sh/docs/index.html#terms-of-use'
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
              text: 'Beatmap Packs',
              collapsed: true,
              items: [
                {
                  text: 'Get Beatmap Packs',
                  link: '/endpoints/beatmap-packs/get-beatmap-packs'
                },
                {
                  text: 'Get Beatmap Pack',
                  link: '/endpoints/beatmap-packs/get-beatmap-pack'
                }
              ]
            },
            {
              text: 'Beatmaps',
              collapsed: true,
              items: [
                {
                  text: 'Lookup Beatmap',
                  link: '/endpoints/beatmaps/lookup-beatmap'
                },
                {
                  text: 'Get a User Beatmap score',
                  link: '/endpoints/beatmaps/get-a-user-beatmap-score'
                },
                {
                  text: 'Get a User Beatmap scores',
                  link: '/endpoints/beatmaps/get-a-user-beatmap-scores'
                },
                {
                  text: 'Get Beatmap scores',
                  link: '/endpoints/beatmaps/get-beatmap-scores'
                },
                {
                  text: 'Get Beatmap scores <code>(non-legacy)</code>',
                  link: '/endpoints/beatmaps/get-beatmap-scores-non-legacy'
                },
                {
                  text: 'Get Beatmaps',
                  link: '/endpoints/beatmaps/get-beatmaps'
                },
                {
                  text: 'Get Beatmap',
                  link: '/endpoints/beatmaps/get-beatmap'
                },
                {
                  text: 'Get Beatmap Attributes',
                  link: '/endpoints/beatmaps/get-beatmap-attributes'
                }
              ]
            },
            {
              text: 'Beatmapset Discussions',
              collapsed: true,
              items: [
                {
                  text: 'Get Beatmapset Discussion Posts',
                  link: '/endpoints/beatmapset-discussions/get-beatmapset-discussion-posts'
                },
                {
                  text: 'Get Beatmapset Discussion Votes',
                  link: '/endpoints/beatmapset-discussions/get-beatmapset-discussion-votes'
                },
                {
                  text: 'Get Beatmapset Discussions',
                  link: '/endpoints/beatmapset-discussions/get-beatmapset-discussions'
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

