---
outline: deep
---

# Beatmap

Represent a beatmap.

| Field               | Type                                           | Description                                                                                               |
| ------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `beatmapset_id`     | <small>number</small>                          |                                                                                                           |
| `difficulty_rating` | <small>number</small>                          |                                                                                                           |
| `id`                | <small>number</small>                          |                                                                                                           |
| `mode`              | <small>[Ruleset](../parameter/ruleset)</small> |                                                                                                           |
| `status`            | <small>string</small>                          | See [RankStatus](../parameter/rank-status.md) for list of possible values.                                |
| `total_length`      | <small>number</small>                          |                                                                                                           |
| `user_id`           | <small>number</small>                          |                                                                                                           |
| `version`           | <small>string</small>                          |                                                                                                           |
| `beatmapset`        | <small>[Beatmapset](./beatmapset.md)?</small>  | `Beatmapset` for Beatmap object. `null` if the beatmap doesn't have associated beatmapset (e.g. deleted). |
| `checksum`          | <small>string?</small>                         |                                                                                                           |
| `failtimes`         | <small>[Failtimes](./failtimes)?</small>       |                                                                                                           |
| `max_combo`         | <small>number?</small>                         |                                                                                                           |
| `accuracy`          | <small>number</small>                          |                                                                                                           |
| `ar`                | <small>number</small>                          |                                                                                                           |
| `beatmapset_id`     | <small>number</small>                          |                                                                                                           |
| `bpm`               | <small>number?</small>                         |                                                                                                           |
| `convert`           | <small>boolean</small>                         |                                                                                                           |
| `count_circles`     | <small>number</small>                          |                                                                                                           |
| `count_sliders`     | <small>number</small>                          |                                                                                                           |
| `count_spinners`    | <small>number</small>                          |                                                                                                           |
| `cs`                | <small>number</small>                          |                                                                                                           |
| `deleted_at`        | <small>[Timestamp]?(./timestamp)</small>       |                                                                                                           |
| `drain`             | <small>number</small>                          |                                                                                                           |
| `hit_length`        | <small>number</small>                          |                                                                                                           |
| `is_scoreable`      | <small>boolean</small>                         |                                                                                                           |
| `last_updated`      | <small>[Timestamp](./timestamp)</small>        |                                                                                                           |
| `mode_int`          | <small>number</small>                          |                                                                                                           |
| `passcount`         | <small>number</small>                          |                                                                                                           |
| `playcount`         | <small>number</small>                          |                                                                                                           |
| `ranked`            | <small>number</small>                          | See [RankStatus](../parameter/rank-status.md) for list of possible values.                                |
| `url`               | <small>string</small>                          |                                                                                                           |
