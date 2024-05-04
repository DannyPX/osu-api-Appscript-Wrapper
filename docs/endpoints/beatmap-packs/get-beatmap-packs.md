---
outline: deep
---

# Get Beatmap Packs <Badge type="info" text="GET"/>

## `getBeatmapPacks`

Returns a list of beatmap packs.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-beatmap-packs</small>

## Usage

`api.getBeatmapPacks(type, token)`

### Parameters

`type` <small>[BeatmapPackType](../types/beatmap-pack-type)</small> <Badge type="tip" text="optional" /><br> 
**BeatmapPackType** of the beatmap packs to be returned. Defaults to `standard`.

`token` <small>String</small><br>
Access Token.

`cursor_string` <small>String</small> <Badge type="danger" text="not implemented" /><br>
CursorString for pagination.

## Example

### Code

::: code-group
```js [code.gs]
function getFunction() {

}
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