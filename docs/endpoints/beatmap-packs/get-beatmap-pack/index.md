---
outline: deep
---

# Get Beatmap Pack <Badge type="info" text="GET"/>

## `getBeatmapPack`

Gets the beatmap pack for the specified beatmap pack tag.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-beatmap-pack</small>

## Usage

`api.getBeatmapPack(pack, legacy_only, token)`

### Parameters

`pack` <small>String</small><br>
The tag of the beatmap pack to be returned.

`legacy_only` <small>Number</small> <Badge type="tip" text="optional" /><br>
Whether or not to consider lazer scores for user completion data. Defaults to `0`.

`token` <small>String</small><br>
Access Token.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->