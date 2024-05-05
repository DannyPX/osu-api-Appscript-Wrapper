---
outline: deep
---

# Get Beatmap scores (non-legacy) <Badge type="info" text="GET"/>

## `getBeatmapScoresNonLegacy`

Returns the top scores for a beatmap.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-beatmap-scores-non-legacy</small>

## Usage

`api.getBeatmapScoresNonLegacy(beatmapId, mode, mods, type, token)`

### Parameters

`beatmapId` <small>String</small><br>
The ID of a beatmap.

`mode` <small>[Ruleset](../../types/ruleset)</small> <Badge type="tip" text="optional" /><br>
The **Ruleset** to get scores for.

`mods` <small>String</small> <Badge type="tip" text="optional" /><br>
An array of matching Mods, or none.

`type` <small>String</small> <Badge type="tip" text="optional" /><br>
Beatmap score ranking type.

`token` <small>String</small> <Badge type="tip" text="optional" /><br>
Parameter 2

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->