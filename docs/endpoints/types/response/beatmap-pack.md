---
outline: deep
---

# BeatmapPack

Represent a beatmap pack.

| Field                  | Type                                                        | Description                                                                                                                                                                    |
| ---------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `author`               | <small>string</small>                                       |                                                                                                                                                                                |
| `beatmapsets`          | <small>[Beatmapset](./beatmapset)[]</small>                 | Represents beatmapsets.                                                                                                                                                        |
| `date`                 | <small>[Timestamp](./timestamp)</small>                     |                                                                                                                                                                                |
| `no_diff_reduction`    | <small>boolean</small>                                      | Whether difficulty reduction mods may be used to clear the pack.                                                                                                               |
| `ruleset_id`           | <small>number</small>                                       |                                                                                                                                                                                |
| `tag`                  | <small>string</small>                                       | The tag of the beatmap pack. Starts with a character representing the type (See the `Tag` column of [BeatmapPackType](../parameter/beatmap-pack-type)) followed by an integer. |
| `url`                  | <small>string</small>                                       | The download url of the beatmap pack.                                                                                                                                          |
| `user_completion_data` | <small>[UserCompletionData](./user-completion-data)</small> |                                                                                                                                                                                |
