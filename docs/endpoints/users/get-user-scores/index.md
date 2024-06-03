---
outline: deep
---

# Get User Scores <Badge type="info" text="GET"/>

## `getUserScores`

This endpoint returns the scores of specified user.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-user-scores</small>

## Usage

`api.getUserScores(token, user, type, legacy_only, include_fails, mode, limit, offset)`

### Parameters

`token` <small>string</small><br>
Access Token.

`user` <small>number</small><br>
The ID of an user.

`type` <small>[ScoreType](../../types/score-type)</small><br>
Score type. Must be one of these: `Best`, `Dirsts`, `Recent`.

`legacy_only` <small>number</small> <Badge type="tip" text="optional" /><br>
Whether or not to exclude lazer scores. Defaults to 0.

`include_fails` <small>boolean</small> <Badge type="tip" text="optional" /><br>
Only for recent scores, include scores of failed plays. Set to 1 to include them. Defaults to 0.

`mode` <small>[Ruleset](../../types/ruleset)</small> <Badge type="tip" text="optional" /><br>
Ruleset of the scores to be returned. Defaults to the specified user's mode.

`limit` <small>number</small> <Badge type="tip" text="optional" /><br>
Maximum number of results.

`offset` <small>number</small> <Badge type="tip" text="optional" /><br>
Result offset for pagination.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->