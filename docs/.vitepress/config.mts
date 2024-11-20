import { defineConfig } from 'vitepress';

export default defineConfig({
  title: "osu!api Apps Script",
  description: "Apps Script Wrapper for osu!api V2",

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/osu-api-Appscript-Wrapper/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/osu-api-Appscript-Wrapper/logo.png' }],
  ],

  base: "/osu-api-Appscript-Wrapper/",
  themeConfig: {
    search: {
      provider: 'local'
    },

    logo: {
      src: '/logo.svg',
      width: 24,
      height: 24
    },

    editLink: {
      pattern: 'https://github.com/DannyPX/osu-api-Appscript-Wrapper/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/endpoints/' },
      { text: 'Snippets', link: '/snippets/' },
      { text: 'V28', items: [{ text: 'Changelog', link: '/endpoints/changelog' }] }
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
          text: 'Comparison osu!api v2',
          link: '/endpoints/comparison',
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
                  link: '/endpoints/authentication/client-credentials-grant/'
                }
              ]
            },
            {
              text: 'Beatmap Packs',
              collapsed: true,
              items: [
                {
                  text: 'Get Beatmap Packs',
                  link: '/endpoints/beatmap-packs/get-beatmap-packs/'
                },
                {
                  text: 'Get Beatmap Pack',
                  link: '/endpoints/beatmap-packs/get-beatmap-pack/'
                }
              ]
            },
            {
              text: 'Beatmaps',
              collapsed: true,
              items: [
                {
                  text: 'Lookup Beatmap',
                  link: '/endpoints/beatmaps/lookup-beatmap/'
                },
                {
                  text: 'Get a User Beatmap score',
                  link: '/endpoints/beatmaps/get-a-user-beatmap-score/'
                },
                {
                  text: 'Get a User Beatmap scores',
                  link: '/endpoints/beatmaps/get-a-user-beatmap-scores/'
                },
                {
                  text: 'Get Beatmap scores',
                  link: '/endpoints/beatmaps/get-beatmap-scores/'
                },
                {
                  text: 'Get Beatmap scores <code>(non-legacy)</code>',
                  link: '/endpoints/beatmaps/get-beatmap-scores-non-legacy/'
                },
                {
                  text: 'Get Beatmaps',
                  link: '/endpoints/beatmaps/get-beatmaps/'
                },
                {
                  text: 'Get Beatmap',
                  link: '/endpoints/beatmaps/get-beatmap/'
                },
                {
                  text: 'Get Beatmap Attributes',
                  link: '/endpoints/beatmaps/get-beatmap-attributes/'
                }
              ]
            },
            {
              text: 'Beatmapset Discussions',
              collapsed: true,
              items: [
                {
                  text: 'Get Beatmapset Discussion Posts',
                  link: '/endpoints/beatmapset-discussions/get-beatmapset-discussion-posts/'
                },
                {
                  text: 'Get Beatmapset Discussion Votes',
                  link: '/endpoints/beatmapset-discussions/get-beatmapset-discussion-votes/'
                },
                {
                  text: 'Get Beatmapset Discussions',
                  link: '/endpoints/beatmapset-discussions/get-beatmapset-discussions/'
                }
              ]
            },
            {
              text: 'Beatmapsets',
              collapsed: true,
              items: [
                {
                  text: 'Search Beatmapsets',
                  link: '/endpoints/beatmapsets/search-beatmapsets/'
                },
                {
                  text: 'Lookup Beatmapsets',
                  link: '/endpoints/beatmapsets/lookup-beatmapsets/'
                },
                {
                  text: 'Get Beatmapset',
                  link: '/endpoints/beatmapsets/get-beatmapset/'
                }
              ]
            },
            {
              text: 'Changelog',
              collapsed: true,
              items: [
                {
                  text: 'Get Changelog Build',
                  link: '/endpoints/changelog/get-changelog-build/'
                },
                {
                  text: 'Get Changelog Listing',
                  link: '/endpoints/changelog/get-changelog-listing/'
                },
                {
                  text: 'Lookup Changelog Build',
                  link: '/endpoints/changelog/lookup-changelog-build/'
                }
              ]
            },
            {
              text: 'Events',
              collapsed: true,
              items: [
                {
                  text: 'Get Events',
                  link: '/endpoints/events/get-events/'
                }
              ]
            },
            {
              text: 'Forum',
              collapsed: true,
              items: [
                {
                  text: 'Get Topic and Posts',
                  link: '/endpoints/forum/get-topic-and-points/'
                }
              ]
            },
            {
              text: 'Home',
              collapsed: true,
              items: [
                {
                  text: 'Search',
                  link: '/endpoints/home/search/'
                }
              ]
            },
            {
              text: 'Multiplayer',
              collapsed: true,
              items: [
                {
                  text: 'Get Match',
                  link: '/endpoints/multiplayer/get-match/'
                },
                {
                  text: 'Get Full Match <code><i>Custom</i></code>',
                  link: '/endpoints/multiplayer/get-full-match/'
                },
                {
                  text: 'Get Room',
                  link: '/endpoints/multiplayer/get-room/'
                },
                {
                  text: 'Get Scores',
                  link: '/endpoints/multiplayer/get-scores/'
                },
              ]
            },
            {
              text: 'News',
              collapsed: true,
              items: [
                {
                  text: 'Get News Listing',
                  link: '/endpoints/news/get-news-listing/'
                },
                {
                  text: 'Get News Post',
                  link: '/endpoints/news/get-news-post/'
                }
              ]
            },
            {
              text: 'Comments',
              collapsed: true,
              items: [
                {
                  text: 'Get Comments',
                  link: '/endpoints/comments/get-comments/'
                },
                {
                  text: 'Get a comment',
                  link: '/endpoints/comments/get-a-comment/'
                }
              ]
            },
            {
              text: 'Ranking',
              collapsed: true,
              items: [
                {
                  text: 'Get Kudosu Ranking',
                  link: '/endpoints/ranking/get-kudosu-ranking/'
                },
                {
                  text: 'Get Ranking',
                  link: '/endpoints/ranking/get-ranking/'
                },
                {
                  text: 'Get Full Ranking <code><i>Custom</i></code>',
                  link: '/endpoints/ranking/get-full-ranking/'
                },
                {
                  text: 'Get Spotlights',
                  link: '/endpoints/ranking/get-spotlights/'
                }
              ]
            },
            {
              text: 'Users',
              collapsed: true,
              items: [
                {
                  text: 'Get User Kudosu',
                  link: '/endpoints/users/get-user-kudosu/'
                },
                {
                  text: 'Get User Scores',
                  link: '/endpoints/users/get-user-scores/'
                },
                {
                  text: 'Get User Beatmaps',
                  link: '/endpoints/users/get-user-beatmaps/'
                },
                {
                  text: 'Get User Recent Activity',
                  link: '/endpoints/users/get-user-recent-activity/'
                },
                {
                  text: 'Get User',
                  link: '/endpoints/users/get-user/'
                },
                {
                  text: 'Get Users',
                  link: '/endpoints/users/get-users/'
                }
              ]
            },
            {
              text: 'Wiki',
              collapsed: true,
              items: [
                {
                  text: 'Get Wiki Page',
                  link: '/endpoints/wiki/get-wiki-page/'
                }
              ]
            },
            {
              text: 'Deprecated',
              collapsed: true,
              items: [
                {
                  text: 'Get Token',
                  link: '/endpoints/deprecated/get-token/'
                },
                {
                  text: 'Custom Request',
                  link: '/endpoints/deprecated/custom-request/'
                }
              ]
            }
          ]
        },
        {
          text: 'Object Structures',
          collapsed: true,
          items: [
            {
              text: 'Parameter Types',
              collapsed: true,
              items: [
                {
                  text: 'BeatmapPackType',
                  link: '/endpoints/types/parameter/beatmap-pack-type'
                },
                {
                  text: 'BeatmapType',
                  link: '/endpoints/types/parameter/beatmap-type'
                },
                {
                  text: 'BeatmapsetStatus',
                  link: '/endpoints/types/parameter/beatmapset-status'
                },
                {
                  text: 'DiscussionScore',
                  link: '/endpoints/types/parameter/discussion-score'
                },
                {
                  text: 'DiscussionTypes',
                  link: '/endpoints/types/parameter/discussion-types'
                },
                {
                  text: 'MessageTypes',
                  link: '/endpoints/types/parameter/message-types'
                },
                {
                  text: 'Mod',
                  link: '/endpoints/types/parameter/mod'
                },
                {
                  text: 'MultiplayerScoresSort',
                  link: '/endpoints/types/parameter/multiplayer-scores-sort'
                },
                {
                  text: 'RankingType',
                  link: '/endpoints/types/parameter/ranking-type'
                },
                {
                  text: 'Ruleset',
                  link: '/endpoints/types/parameter/ruleset'
                },
                {
                  text: 'Scope',
                  link: '/endpoints/types/parameter/scope'
                },
                {
                  text: 'ScoreType',
                  link: '/endpoints/types/parameter/score-type'
                },
                {
                  text: 'SearchMode',
                  link: '/endpoints/types/parameter/search-mode'
                },
                {
                  text: 'Sort',
                  link: '/endpoints/types/parameter/sort'
                },
                {
                  text: 'RankStatus',
                  link: '/endpoints/types/parameter/rank-status'
                }
              ]
            },
            {
              text: 'Reponse Types',
              collapsed: true,
              items: []
            }
          ]
        }
      ],
      '/snippets/': [
        {
          text: 'Recommended Files',
          link: '/snippets/'
        },
        {
          text: 'Snippets',
          collapsed: true,
          items: [
            {
              text: 'Types.gs',
              link: '/snippets/snippets/types'
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DannyPX/osu-api-Appscript-Wrapper' }
    ],

    footer: {
      message: '<b>osu!api v2 Wrapper</b> is not affiliated, associated, authorized, endorsed by, or in any way officially connected with <a href="https://osu.ppy.sh/">osu!</a><br /><i>Made by DannyPX</i>'
    }
  }
});
