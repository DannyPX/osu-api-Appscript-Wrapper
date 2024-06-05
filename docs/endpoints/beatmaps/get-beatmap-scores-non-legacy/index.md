---
outline: deep
---

# Get Beatmap scores (non-legacy) <Badge type="info" text="GET"/>

## `getBeatmapScoresNonLegacy`

Returns the top scores for a beatmap.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-beatmap-scores-non-legacy</small>

## Usage

`api.getBeatmapScoresNonLegacy(token, beatmap, mode, mods, type)`

### Parameters

`token` <small>string</small> <Badge type="tip" text="optional" /><br>
Access Token.

`beatmap` <small>number</small><br>
The ID of the beatmap.

`mode` <small>[Ruleset](../../types/parameter/ruleset)</small> <Badge type="tip" text="optional" /><br>
The **Ruleset** to get scores for.

`mods` <small>number|string[]|[Mod](../../types/parameter/mod)[]</small> <Badge type="tip" text="optional" /><br>
Mod combination. Can be either a bitset of mods, array of mod acronyms, or array of mods.

`type` <small>string</small> <Badge type="tip" text="optional" /><br>
Beatmap score ranking type.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->