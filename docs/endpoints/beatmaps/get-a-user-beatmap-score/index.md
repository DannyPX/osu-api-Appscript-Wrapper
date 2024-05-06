---
outline: deep
---

# Get a User Beatmap score <Badge type="info" text="GET"/>

## `getUserBeatmapScore`

Return a User's score on a Beatmap

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-a-user-beatmap-score</small>

## Usage

`api.getUserBeatmapScore(userId, beatmapId, legacy_only, mode, token)`

### Parameters

`userId` <small>String</small><br>
The ID of an user.

`beatmapId` <small>String</small><br>
The ID of a beatmap.

`legacy_only` <small>Number</small> <Badge type="tip" text="optional" /><br>
Whether or not to exclude lazer scores. Defaults to 0.

`mode` <small>[Ruleset](../../types/ruleset)</small> <Badge type="tip" text="optional" /><br>
The **Ruleset** to get scores for.

`token` <small>String</small><br>
Access Token.

`mods` <small>String</small> <Badge type="tip" text="optional" /> <Badge type="danger" text="not implemented" /><br>
An array of matching Mods, or none

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->