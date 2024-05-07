---
outline: deep
---

# Get Beatmap Attributes <Badge type="tip" text="POST"/>

## `getBeatmapAttributes`

Returns difficulty attributes of beatmap with specific mode and mods combination.

<small>osu!api documentation: https://osu.ppy.sh/docs/function</small>

## Usage

`api.getBeatmapAttributes(beatmapId, mods, ruleset, ruleset_id, token)`

### Parameters

`beatmapId` <small>String</small><br>
The ID of the beatmap.

`mods` <small>Int|String[]|[Mod](../../types/mod)[]</small> <Badge type="tip" text="optional" /><br>
Mod combination. Can be either a bitset of mods, array of mod acronyms, or array of mods.

`ruleset` <small>[Ruleset](../../types/ruleset)</small> <Badge type="tip" text="optional" /><br>
Ruleset of the difficulty attributes. Only valid if it's the beatmap ruleset or the beatmap can be converted to the specified ruleset. Defaults to ruleset of the specified beatmap.

`ruleset_id` <small>Number</small> <Badge type="tip" text="optional" /><br>
The same as `ruleset` but in integer form.

`token` <small>Number</small><br>
Access Token.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->