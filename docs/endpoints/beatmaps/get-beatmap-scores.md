---
outline: deep
---

# Get Beatmap scores <Badge type="info" text="GET"/>

## `getBeatmapScores`

Returns the top scores for a beatmap. Depending on user preferences, this may only show legacy scores.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-beatmap-scores</small>

## Usage

`api.getBeatmapScores(beatmapId, legacy_only, mode, token)`

### Parameters

`beatmapId` <small>String</small><br>
The ID of a beatmap.

`legacy_only` <small>Int</small> <Badge type="tip" text="optional" /><br>
Whether or not to exclude lazer scores. Defaults to `0`.

`mode` <small>[Ruleset](../types/ruleset)</small> <Badge type="tip" text="optional" /><br>
The **Ruleset** to get scores for.

`token` <small>String</small><br>
Access Token.

`mods` <small>String</small> <Badge type="tip" text="optional" /> <Badge type="danger" text="not implemented" /><br>
An array of matching Mods, or none

`type` <small>String</small> <Badge type="tip" text="optional" /> <Badge type="danger" text="not implemented" /><br>
Beatmap score ranking type

## Example

### Code

::: code-group
```js [code.gs]

```
:::

### Output

::: code-group
```json [console]
{

}
```
:::

## Response Format