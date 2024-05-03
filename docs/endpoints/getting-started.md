---
outline: deep
---

# Getting Started

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

### `Code.gs`

```js
let api = osuAPILibrary

function getFirstBeatmap() {
  const clientCredentials = api.ClientCredentialsGrant(client_id, client_secret)
  /**
   * {
   *   "access_token": "verylongstring",
   *   "expires_in": 86400,
   *   "token_type": "Bearer"
   * }
   */

  var firstBeatmap = api.getBeatmap(75, clientCredentials.access_token)
}
```

### Output `firstBeatmap`

```js
{
    "beatmapset_id": 1,
    "difficulty_rating": 2.57,
    "id": 75,
    "mode": "osu",
    "status": "ranked",
    "total_length": 142,
    "user_id": 2,
    "version": "Normal",
    "accuracy": 6,
    "ar": 6,
    "bpm": 120,
    "convert": false,
    "count_circles": 160,
    "count_sliders": 30,
    "count_spinners": 4,
    "cs": 4,
    "deleted_at": null,
    "drain": 6,
    "hit_length": 109,
    "is_scoreable": true,
    "last_updated": "2014-05-18T17:16:42Z",
    "mode_int": 0,
    "passcount": 83390,
    "playcount": 685409,
    "ranked": 1,
    "url": "https://osu.ppy.sh/beatmaps/75",
    ...
}
```