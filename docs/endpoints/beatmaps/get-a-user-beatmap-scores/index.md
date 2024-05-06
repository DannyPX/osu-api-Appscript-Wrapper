---
outline: deep
---

# Get a User Beatmap scores <Badge type="info" text="GET"/>

## `getUserBeatmapScores`

Description

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-a-user-beatmap-scores</small>

## Usage

`api.getUserBeatmapScores(userId, beatmapId, legacy_only, mode, token)`

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

## Example

### Code

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->