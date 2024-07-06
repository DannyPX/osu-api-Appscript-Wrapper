---
outline: deep
---

# Beatmapset

Represents a beatmapset.

| Field                     | Type                                                       | Description                                                                |
| ------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------- |
| `artist_unicode`          | <small>string</small>                                      |                                                                            |
| `artist`                  | <small>string</small>                                      |                                                                            |
| `availability`            | <small>[Availability](./availability)</small>              |                                                                            |
| `beatmaps`                | <small>[Beatmap](./beatmap)[]?</small>                     |                                                                            |
| `bpm`                     | <small>number</small>                                      |                                                                            |
| `can_be_hyped`            | <small>boolean</small>                                     |                                                                            |
| `converts`                | <small>any?</small>                                        |                                                                            |
| `covers`                  | <small>[Covers](./covers)</small>                          |                                                                            |
| `creator`                 | <small>string</small>                                      |                                                                            |
| `current_nominations`     | <small>[Nomination](./nomination)[]?</small>               |                                                                            |
| `current_user_attributes` | <small>any?</small>                                        |                                                                            |
| `deleted_at`              | <small>[Timestamp](./timestamp)?</small>                   |                                                                            |
| `description`             | <small>any?</small>                                        |                                                                            |
| `discussion_enabled`      | <small>boolean</small>                                     | Deprecated, all beatmapsets now have discussion enabled.                   |
| `discussion_locked`       | <small>boolean</small>                                     |                                                                            |
| `discussions`             | <small>any?</small>                                        |                                                                            |
| `events`                  | <small>any?</small>                                        |                                                                            |
| `favourite_count`         | <small>number</small>                                      |                                                                            |
| `genre`                   | <small>any?</small>                                        |                                                                            |
| `has_favourited`          | <small>boolean?</small>                                    |                                                                            |
| `hype`                    | <small>[Hype](./hype)</small>                              |                                                                            |
| `id`                      | <small>number</small>                                      |                                                                            |
| `is_scoreable`            | <small>boolean</small>                                     |                                                                            |
| `language`                | <small>any?</small>                                        |                                                                            |
| `last_updated`            | <small>[Timestamp](./timestamp)</small>                    |                                                                            |
| `legacy_thread_url`       | <small>string?</small>                                     |                                                                            |
| `nominations_summary`     | <small>[NominationsSummary](./nominations-summary)</small> |                                                                            |
| `nominations`             | <small>any?</small>                                        |                                                                            |
| `nsfw`                    | <small>boolean</small>                                     |                                                                            |
| `offset`                  | <small>number</small>                                      |                                                                            |
| `pack_tags`               | <small>string[]?</small>                                   |                                                                            |
| `play_count`              | <small>number</small>                                      |                                                                            |
| `preview_url`             | <small>string</small>                                      |                                                                            |
| `ranked_date`             | <small>[Timestamp](./timestamp)?</small>                   |                                                                            |
| `ranked`                  | <small>number</small>                                      | See [RankStatus](../parameter/rank-status.md) for list of possible values. |
| `ratings`                 | <small>any?</small>                                        |                                                                            |
| `recent_favourites`       | <small>any?</small>                                        |                                                                            |
| `related_users`           | <small>any?</small>                                        |                                                                            |
| `source`                  | <small>string</small>                                      |                                                                            |
| `source`                  | <small>string</small>                                      |                                                                            |
| `spotlight`               | <small>boolean</small>                                     |                                                                            |
| `status`                  | <small>string</small>                                      | See [RankStatus](../parameter/rank-status.md) for list of possible values. |
| `storyboard`              | <small>boolean</small>                                     |                                                                            |
| `submitted_date`          | <small>[Timestamp](./timestamp)?</small>                   |                                                                            |
| `tags`                    | <small>string</small>                                      |                                                                            |
| `title_unicode`           | <small>string</small>                                      |                                                                            |
| `title`                   | <small>string</small>                                      |                                                                            |
| `track_id`                | <small>number</small>                                      |                                                                            |
| `user_id`                 | <small>number</small>                                      |                                                                            |
| `user`                    | <small>any?</small>                                        |                                                                            |
| `video`                   | <small>boolean</small>                                     |                                                                            |
