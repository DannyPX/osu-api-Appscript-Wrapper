---
outline: deep
---

# Comparison osu!api v2

Here is a list of endpoints compared to the official [osu!api v2 documentation](https://osu.ppy.sh/docs/index.html)

|                 |                       |
| --------------- | --------------------- |
| :green_circle:  | Fully Implemented     |
| :yellow_circle: | Missing some features |
| :red_circle:    | Not Implemented       |

## Authentication

| Endpoint                     |   osu!api v2   | osu!api Wrapper | Note                             |
| ---------------------------- | :------------: | :-------------: | -------------------------------- |
| **Authorization Code Grant** | :green_circle: |  :red_circle:   |                                  |
| **Client Credentials Grant** | :green_circle: | :yellow_circle: | Missing `grant_type` and `scope` |

## Beatmap Packs

| Endpoint              |   osu!api v2   | osu!api Wrapper | Note                    |
| --------------------- | :------------: | :-------------: | ----------------------- |
| **Get Beatmap Packs** | :green_circle: | :yellow_circle: | Missing `cursor_string` |
| **Get Beatmap Pack**  | :green_circle: | :green_circle:  |                         |

## Beatmaps

| Endpoint                            |   osu!api v2    | osu!api Wrapper | Note                      |
| ----------------------------------- | :-------------: | :-------------: | ------------------------- |
| **Lookup Beatmap**                  | :green_circle:  | :green_circle:  |                           |
| **Get a User Beatmap score**        | :green_circle:* | :yellow_circle: | Missing `mods`            |
| **Get a User Beatmap scores**       | :green_circle:  | :green_circle:  |                           |
| **Get Beatmap Scores**              | :green_circle:* | :yellow_circle: | Missing `mods` and `type` |
| **Get Beatmap Scores (non-legacy)** | :green_circle:* | :green_circle:  |                           |
| **Get Beatmaps**                    | :green_circle:  | :green_circle:  |                           |
| **Get Beatmap**                     | :green_circle:  | :green_circle:  |                           |
| **Get Beatmap Attributes**          | :green_circle:  | :green_circle:  |                           |

\* Not fully documented

## Beatmapset Discussions

| Endpoint                            |   osu!api v2   | osu!api Wrapper | Note                    |
| ----------------------------------- | :------------: | :-------------: | ----------------------- |
| **Get Beatmapset Discussion Posts** | :green_circle: | :green_circle:  |                         |
| **Get Beatmapset Discussion Votes** | :green_circle: | :green_circle:  |                         |
| **Get Beatmapset Discussions**      | :green_circle: | :yellow_circle: | Missing `cursor_string` |

## Beatmapsets

| Endpoint               |   osu!api v2    | osu!api Wrapper | Note |
| ---------------------- | :-------------: | :-------------: | ---- |
| **Search Beatmapsets** | :green_circle:* |  :red_circle:   |      |
| **Lookup Beatmapsets** | :green_circle:* |  :red_circle:   |      |
| **Get Beatmapset**     | :green_circle:* |  :red_circle:   |      |

\* Not fully documented

## Changelog

| Endpoint                   |   osu!api v2   | osu!api Wrapper | Note |
| -------------------------- | :------------: | :-------------: | ---- |
| **Get Changelog Build**    | :green_circle: | :green_circle:  |      |
| **Get Changelog Listing**  | :green_circle: | :green_circle:  |      |
| **Lookup Changelog Build** | :green_circle: | :green_circle:  |      |

## Events

| Endpoint       |   osu!api v2   | osu!api Wrapper | Note                    |
| -------------- | :------------: | :-------------: | ----------------------- |
| **Get Events** | :green_circle: | :yellow_circle: | Missing `cursor_string` |

## Forum

| Endpoint                 |   osu!api v2   | osu!api Wrapper | Note                                                |
| ------------------------ | :------------: | :-------------: | --------------------------------------------------- |
| **Reply Topic**          | :green_circle: |  :red_circle:   |                                                     |
| **Create Topic**         | :green_circle: |  :red_circle:   |                                                     |
| **Get Topic and Poists** | :green_circle: | :yellow_circle: | Missing `limit`, `start`, `end` and `cursor_string` |
| **Edit Topic**           | :green_circle: |  :red_circle:   |                                                     |
| **Edit Post**            | :green_circle: |  :red_circle:   |                                                     |

## Home

| Endpoint   |   osu!api v2   | osu!api Wrapper | Note |
| ---------- | :------------: | :-------------: | ---- |
| **Search** | :green_circle: | :green_circle:  |      |

## Multiplayer

| Endpoint                  |   osu!api v2    | osu!api Wrapper | Note                          |
| ------------------------- | :-------------: | :-------------: | ----------------------------- |
| **Get User High Score**   | :green_circle:  |  :red_circle:   |                               |
| **Get Scores**            | :green_circle:  | :yellow_circle: | Missing `cursor_string`       |
| **Get a Score**           | :green_circle:  |  :red_circle:   |                               |
| **Get Multiplayer Rooms** | :green_circle:  |  :red_circle:   |                               |
| **Get Match**             | :yellow_circle: | :green_circle:  | Includes `before` and `limit` |
| **Get Full Match**        |  :red_circle:   | :green_circle:  | Custom endpoint               |
| **Get Room**              | :green_circle:* | :green_circle:  |                               |

\* Not fully documented

## News

| Endpoint             |   osu!api v2   | osu!api Wrapper | Note                    |
| -------------------- | :------------: | :-------------: | ----------------------- |
| **Get News Listing** | :green_circle: | :yellow_circle: | Missing `cursor_string` |
| **Get News Post**    | :green_circle: | :green_circle:  |                         |

## Comments

| Endpoint                |   osu!api v2   | osu!api Wrapper | Note             |
| ----------------------- | :------------: | :-------------: | ---------------- |
| **Get Comments**        | :green_circle: | :yellow_circle: | Missing `cursor` |
| **Post a new comment**  | :green_circle: |  :red_circle:   |                  |
| **Get a Comment**       | :green_circle: | :green_circle:  |                  |
| **Edit Comment**        | :green_circle: |  :red_circle:   |                  |
| **Delete Comment**      | :green_circle: |  :red_circle:   |                  |
| **Add Comment vote**    | :green_circle: |  :red_circle:   |                  |
| **Remove Comment vote** | :green_circle: |  :red_circle:   |                  |

## Ranking

| Endpoint               |   osu!api v2   | osu!api Wrapper | Note             |
| ---------------------- | :------------: | :-------------: | ---------------- |
| **Get Kudosu Ranking** | :green_circle: | :green_circle:  |                  |
| **Get Ranking**        | :green_circle: | :yellow_circle: | Missing `cursor` |
| **Get Full Ranking**   |  :red_circle:  | :green_circle:  | Custom endpoint  |
| **Get Spotlights**     | :green_circle: | :green_circle:  |                  |

## Users

| Endpoint                     |   osu!api v2   | osu!api Wrapper | Note |
| ---------------------------- | :------------: | :-------------: | ---- |
| **Get Own Data**             | :green_circle: |  :red_circle:   |      |
| **Get User Kudosu**          | :green_circle: | :green_circle:  |      |
| **Get User Scores**          | :green_circle: | :green_circle:  |      |
| **Get User Beatmaps**        | :green_circle: | :green_circle:  |      |
| **Get User Recent Activity** | :green_circle: | :green_circle:  |      |
| **Get User**                 | :green_circle: | :green_circle:  |      |
| **Get Users**                | :green_circle: | :green_circle:  |      |

## Wiki

| Endpoint          |   osu!api v2   | osu!api Wrapper | Note |
| ----------------- | :------------: | :-------------: | ---- |
| **Get Wiki Page** | :green_circle: | :green_circle:  |      |

## Undocumented (As in osu!api docs)

| Endpoint                                                 |   osu!api v2    | osu!api Wrapper | Note                        |
| -------------------------------------------------------- | :-------------: | :-------------: | --------------------------- |
| `api/v2/session/verify`                                  | :green_circle:* |  :red_circle:   |                             |
| `api/v2/session/verify/reissue`                          | :green_circle:* |  :red_circle:   |                             |
| `api/v2/beatmaps/{beatmap}/solo/scores`                  | :green_circle:* |  :red_circle:   |                             |
| `api/v2/beatmaps/{beatmap}/solo/scores/{token}`          | :green_circle:* |  :red_circle:   |                             |
| `api/v2/beatmapsets/events`                              | :green_circle:* |  :red_circle:   |                             |
| `api/v2/beatmapsets/{beatmapset}/favourites`             | :green_circle:* |  :red_circle:   |                             |
| `api/v2/chat/presence`                                   | :green_circle:* |  :red_circle:   |                             |
| `api/v2/matches`                                         | :green_circle:* |  :red_circle:   |                             |
| `api/v2/matches/{match}`                                 | :yellow_circle: | :green_circle:  | [Multiplayer](#multiplayer) |
| `api/v2/reports`                                         | :green_circle:* |  :red_circle:   |                             |
| `api/v2/rooms/{room}/users/{user}`                       | :green_circle:* |  :red_circle:   |                             |
| `api/v2/rooms/{room}/users/{user}`                       | :green_circle:* |  :red_circle:   |                             |
| `api/v2/rooms/{room}/leaderboard`                        | :green_circle:* |  :red_circle:   |                             |
| `api/v2/rooms/{room}/playlist/{playlist}/scores`         | :green_circle:* |  :red_circle:   |                             |
| `api/v2/rooms/{room}/playlist/{playlist}/scores/{score}` | :green_circle:* |  :red_circle:   |                             |
| `api/v2/rooms`                                           | :green_circle:* |  :red_circle:   |                             |
| `api/v2/rooms/{room}`                                    | :green_circle:* | :green_circle:  | [Multiplayer](#multiplayer) |
| `api/v2/seasonal-backgrounds`                            | :green_circle:* |  :red_circle:   |                             |
| `api/v2/scores/{score}/download`                         | :green_circle:* |  :red_circle:   |                             |
| `api/v2/scores/{rulesetOrScore}/{score}/download`        | :green_circle:* |  :red_circle:   |                             |
| `api/v2/scores/{rulesetOrScore}/{score?}`                | :green_circle:* |  :red_circle:   |                             |
| `api/v2/friends`                                         | :green_circle:* |  :red_circle:   |                             |
| `api/v2/me/download-quota-check`                         | :green_circle:* |  :red_circle:   |                             |

\* Not fully documented