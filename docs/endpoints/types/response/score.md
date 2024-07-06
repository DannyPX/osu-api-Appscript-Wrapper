---
outline: deep
---

# Score
The following is the format returned when API v2 version header is 20220705 or higher. Exceptions apply (f.ex. doesn't apply for legacy match score).

| Field                     | Type                                                  | Description                                                                    |
| ------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------ |
| `accuracy`                | <small>number</small>                                 |                                                                                |
| `beatmap_id`              | <small>number</small>                                 |                                                                                |
| `best_id`                 | <small>number?</small>                                |                                                                                |
| `build_id`                | <small>number?</small>                                |                                                                                |
| `ended_at`                | <small>[Timestamp](./timestamp)</small>               |                                                                                |
| `has_replay`              | <small>boolean</small>                                |                                                                                |
| `id`                      | <small>number</small>                                 |                                                                                |
| `is_perfect_combo`        | <small>boolean</small>                                |                                                                                |
| `legacy_perfect`          | <small>boolean</small>                                |                                                                                |
| `legacy_score_id`         | <small>number?</small>                                |                                                                                |
| `legacy_total_score`      | <small>number</small>                                 |                                                                                |
| `max_combo`               | <small>number</small>                                 |                                                                                |
| `maximum_statistics`      | <small>[ScoreStatistics](./score-statistics)?</small> |                                                                                |
| `mods`                    | <small>[Mod](../parameter/mod)</small>[]              |                                                                                |
| `passed`                  | <small>boolean</small>                                |                                                                                |
| `playlist_item_id`        | <small>number</small>                                 | Only for multiplayer score                                                     |
| `pp`                      | <small>number?</small>                                |                                                                                |
| `preserve`                | <small>boolean</small>                                | Whether or not the score may eventually be deleted. Only for `solo_score` type |
| `rank`                    | <small>string</small>                                 |                                                                                |
| `ranked`                  | <small>boolean</small>                                | Whether or not the score can have pp. Only for `solo_score` type               |
| `room_id`                 | <small>number</small>                                 | Only for multiplayer score                                                     |
| `ruleset_id`              | <small>number</small>                                 |                                                                                |
| `started_at`              | <small>[Timestamp](./timestamp)?</small>              |                                                                                |
| `statistics`              | <small>[ScoreStatistics](./score-statistics)</small>  |                                                                                |
| `total_score`             | <small>number</small>                                 |                                                                                |
| `type`                    | <small>string</small>                                 |                                                                                |
| `user_id`                 | <small>number</small>                                 |                                                                                |
| `beatmap`                 | <small>[Beatmap](./beatmap)?</small>                  |                                                                                |
| `beatmapset`              | <small>[Beatmapset](./beatmapset.md)?</small>         |                                                                                |
| `current_user_attributes` | <small>number?</small>                                |                                                                                |
| `match`                   | <small>[Match](./match)?</small>                      | Only for legacy match score                                                    |
| `position`                | <small>number?</small>                                | Only for multiplayer score                                                     |
| `rank_country`            | <small>number?</small>                                |                                                                                |
| `rank_global`             | <small>number?</small>                                |                                                                                |
| `scores_around`           | <small>MultiplayerScoresAround</small>                | Scores around the specified score. Only for multiplayer score                  |
| `user`                    | <small>User</small>                                   |                                                                                |
| `weight`                  | <small>Weight</small>                                 |                                                                                |