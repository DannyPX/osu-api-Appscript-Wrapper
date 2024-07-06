---
outline: deep
---

# Get Beatmap Pack <Badge type="info" text="GET"/>

## `getBeatmapPack`

Gets the beatmap pack for the specified beatmap pack tag.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-beatmap-pack</small>

## Usage

`api.getBeatmapPack(token, pack, legacy_only)`

### Parameters

`token` <small>string</small><br>
Access Token.

`pack` <small>string</small><br>
The tag of the beatmap pack to be returned.

`legacy_only` <small>number</small> <Badge type="tip" text="optional" /><br>
Whether or not to consider lazer scores for user completion data. Defaults to `0`.

## Response Format

<!--@include: ./response.md-->

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json