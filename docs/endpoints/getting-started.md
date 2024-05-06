---
outline: deep
---

# How to enable the library

1. Open an Apps Script project.
2. Click on the ➕ icon of Libraries below your files.
3. Fill in the Script ID of osu!api Wrapper.
   ```
   1nT8zViGGMRg5HaH6laQlfnlNNGnZ2nbp5oihdBjgr-Yii7shk_c1hDTC
   ```
4. Press <b>Look up</b>
5. Choose the latest version (See [Changelog](#))
6. Type in an <b>Identifier</b>. This is used to reference this library within this project. (Defaults to `osuAPILibrary`)

## Quick Example

Get scores of [this](https://osu.ppy.sh/beatmapsets/1#osu/75) beatmap

::: code-group

```js [Code.gs]
const api = osuAPILibrary

// Get Client Credentials. Access Token in clientCredentials.access_token
const clientCredentials = api.ClientCredentialsGrant(client_id, client_secret)

// Parameters
let beatmapId = 75
let legacy_only = 1
let mode = Ruleset.Standard

// Call `getBeatmapScores`
let result = api.getBeatmapScores(
                   beatmapId, 
                   legacy_only, 
                   mode, 
                   clientCredentials.access_token
                 )

console.log(result)
```

```js [Enum.gs]
const Ruleset = {
  Catch: 'fruits',
  Mania: 'mania',
  Standard: 'osu',
  Taiko: 'taiko'
}
```
:::

::: code-group

```json [console]
{
    "scores": [
        {
            "accuracy": 1,
            "best_id": 123456,
            "created_at": "2000-01-01T01:00:00Z",
            "id": 123456,
            "max_combo": 314,
            "mode": "osu",
            "mode_int": 0,
            "mods": [
                "HD",
                "HR",
            ],
            "passed": true,
            "perfect": true,
            "pp": 123.123,
            "rank": "SS",
            "replay": true,
            "score": 123456,
            "statistics": {
                "count_100": 1,
                "count_300": 123,
                "count_50": 1,
                "count_geki": null,
                "count_katu": null,
                "count_miss": 0
            },
            "type": "score_best_osu",
            "user_id": 123456,
            "current_user_attributes": {
                "pin": null
            },
            "user": {
                "avatar_url": "https://a.ppy.sh/123456?123456.jpeg",
                "country_code": "FI",
                "default_group": "default",
                "id": 123456,
                "is_active": true,
                "is_bot": false,
                "is_deleted": false,
                "is_online": true,
                "is_supporter": true,
                "last_visit": "2000-01-01T01:00:00+00:00",
                "pm_friends_only": false,
                "profile_colour": null,
                "username": "username",
                "country": {
                    "code": "AA",
                    "name": "Awesome Area"
                },
                ...
            }
        },
        ...
```
:::