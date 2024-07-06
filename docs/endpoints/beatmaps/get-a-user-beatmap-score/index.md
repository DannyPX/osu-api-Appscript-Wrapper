---
outline: deep
---

# Get a User Beatmap score <Badge type="info" text="GET"/>

## `getUserBeatmapScore`

Return a User's score on a Beatmap

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-a-user-beatmap-score</small>

## Usage

`api.getUserBeatmapScore(token, user, beatmap, legacy_only, mode, mods)`

### Parameters

`token` <small>string</small><br>
Access Token.

`user` <small>number</small><br>
The ID of the user.

`beatmap` <small>number</small><br>
The ID of the beatmap.

`legacy_only` <small>number</small> <Badge type="tip" text="optional" /><br>
Whether or not to exclude lazer scores. Defaults to 0.

`mode` <small>[Ruleset](../../types/parameter/ruleset)</small> <Badge type="tip" text="optional" /><br>
The **Ruleset** to get scores for.

`mods` <small>number|string[]|[Mod](../../types/parameter/mod)[]</small> <Badge type="tip" text="optional" /><br>
Mod combination. Can be either a bitset of mods, array of mod acronyms, or array of mods. Defaults to no mods.

## Response Format

<!--@include: ./response.md-->

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json