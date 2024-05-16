---
outline: deep
---

# Get Beatmap Packs <Badge type="info" text="GET"/>

## `getBeatmapPacks`

Returns a list of beatmap packs.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-beatmap-packs</small>

## Usage

`api.getBeatmapPacks(token, type, cursor_string)`

### Parameters

`token` <small>string</small><br>
Access Token.

`type` <small>[BeatmapPackType](../../types/beatmap-pack-type)</small> <Badge type="tip" text="optional" /><br> 
**BeatmapPackType** of the beatmap packs to be returned. Defaults to `standard`.

`cursor_string` <small>string</small> <Badge type="tip" text="optional" /><br>
[CursorString](https://osu.ppy.sh/docs/index.html#cursorstring) for pagination.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->