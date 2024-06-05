---
outline: deep
---

# Get a User Beatmap scores <Badge type="info" text="GET"/>

## `getUserBeatmapScores`

Return a User's scores on a Beatmap

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-a-user-beatmap-scores</small>

## Usage

`api.getUserBeatmapScores(token, user, beatmap, legacy_only, mode)`

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

## Example

### Code

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->