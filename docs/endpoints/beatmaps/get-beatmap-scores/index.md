---
outline: deep
---

# Get Beatmap scores <Badge type="info" text="GET"/>

## `getBeatmapScores`

Returns the top scores for a beatmap. Depending on user preferences, this may only show legacy scores.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-beatmap-scores</small>

## Usage

`api.getBeatmapScores(token, beatmap, legacy_only, mode, mods, type)`

### Parameters

`token` <small>string</small><br>
Access Token.

`beatmap` <small>number</small><br>
The ID of the beatmap.

`legacy_only` <small>number</small> <Badge type="tip" text="optional" /><br>
Whether or not to exclude lazer scores. Defaults to `0`.

`mode` <small>[Ruleset](../../types/parameter/ruleset)</small> <Badge type="tip" text="optional" /><br>
The **Ruleset** to get scores for.

`mods` <small>number|string[]|[Mod](../../types/parameter/mod)[]</small> <Badge type="tip" text="optional" /><br>
Mod combination. Can be either a bitset of mods, array of mod acronyms, or array of mods. Defaults to no mods.

`type` <small>string</small> <Badge type="tip" text="optional" /><br>
Beatmap score ranking type

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->