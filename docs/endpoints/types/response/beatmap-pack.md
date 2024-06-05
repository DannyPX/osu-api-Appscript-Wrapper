---
outline: deep
---

# BeatmapPack

Represent a beatmap pack.

`author` <small>string</small><br>


`date` <small>[Timestamp](./timestamp)</small><br>

`name` <small>string</small><br>

`no_diff_reduction` <small>boolean</small><br>
Whether difficulty reduction mods may be used to clear the pack.

`ruleset_id` <small>number</small><br>


`tag` <small>string</small><br>
The tag of the beatmap pack. Starts with a character representing the type (See the `Tag` column of [BeatmapPackType](../parameter/beatmap-pack-type)) followed by an integer.

`url` <small>string</small><br>
The download url of the beatmap pack.

### Optional

`beatmapsets` <small>[Beatmapset](./beatmapset)[]</small><br>
Represents beatmapsets.

`user_completion_data.beatmapset_ids` <small>number[]</small><br>
IDs of beatmapsets completed by the user (according to the requirements of the pack)

`user_completion_data.completed` <small>boolean</small><br>
Whether all beatmapsets are completed or not