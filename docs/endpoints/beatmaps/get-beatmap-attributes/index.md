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
The ID of a beatmap.

`mods` <small>Int|String[]|[Mod](../../types/mod)[]</small> <Badge type="tip" text="optional" /><br>
Mod combination. Can be either a bitset of mods, array of mod acronyms, or array of mods.

`ruleset` <small>[Ruleset](../../types/ruleset)</small> <Badge type="tip" text="optional" /><br>
The **Ruleset** to get scores for.

`ruleset_id` <small>Int</small> <Badge type="tip" text="optional" /><br>
The same as `ruleset` but in integer form.

`token` <small>Int</small><br>
Access Token.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->