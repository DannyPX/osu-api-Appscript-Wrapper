---
outline: deep
---

# Beatmapset

Represents a beatmapset.

`artist` <small>string</small><br>

`artist_unicode` <small>string</small><br>

`covers` <small>[Covers](#covers)</small><br>

`creator` <small>string</small><br>

`favourite_count` <small>number</small><br>

`id` <small>number</small><br>

`nsfw` <small>boolean</small><br>

`offset` <small>number</small><br>

`play_count` <small>number</small><br>

`preview_url` <small>string</small><br>

`source` <small>string</small><br>

`status` <small>string</small><br>

`spotlight` <small>boolean</small><br>

`title` <small>string</small><br>

`title_unicode` <small>string</small><br>

`user_id` <small>number</small><br>

`video` <small>boolean</small><br>

### Optional

`beatmaps` <small>[Beatmap](./beatmap)|[BeatmapExtended](./beatmap-extended)[]</small><br>

`converts` <small></small><br>

`current_nominations` <small>[Nomination]()</small><br>

`current_user_attributes` <small></small><br>

`description` <small></small><br>

`discussions` <small></small><br>

`events` <small></small><br>

`genre` <small></small><br>

`has_favourited` <small>boolean</small><br>

`language` <small></small><br>

`nominations` <small></small><br>

`pack_tags` <small>string[]</small><br>

`ratings` <small></small><br>

`recent_favourites` <small></small><br>

`related_users` <small></small><br>

`user` <small></small><br>

`track_id` <small>number</small><br>

### Covers

`cover` <small>string</small><br>

`cover@2x` <small>string</small><br>

`card` <small>string</small><br>

`card@2x` <small>string</small><br>

`list` <small>string</small><br>

`list@2x` <small>string</small><br>

`slimcover` <small>string</small><br>

`slimcover@2x` <small>string</small><br>

### Rank status

The possible values are denoted either as integer or string.

| number | string      |
| ------ | ----------- |
| `-2`   | `graveyard` |
| `-1`   | `wip`       |
| `0`    | `pending`   |
| `1`    | `ranked`    |
| `2`    | `approved`  |
| `3`    | `qualified` |
| `4`    | `loved`     |