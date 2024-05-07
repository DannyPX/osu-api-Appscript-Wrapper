---
outline: deep
---

# Get User Scores <Badge type="info" text="GET"/>

## `getUserScores`

This endpoint returns the scores of specified user.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-user-scores</small>

## Usage

`api.getUserScores(userId, score_type, legacy_only, include_fails, mode, limit, offset, token)`

### Parameters

`userId` <small>String</small><br>
The ID of an user.

`score_type` <small>[ScoreType](../../types/score-type)</small><br>
Score type. Must be one of these: `Best`, `Dirsts`, `Recent`.

`legacy_only` <small>Number</small> <Badge type="tip" text="optional" /><br>
Whether or not to exclude lazer scores. Defaults to 0.

`include_fails` <small>Boolean</small> <Badge type="tip" text="optional" /><br>
Only for recent scores, include scores of failed plays. Set to 1 to include them. Defaults to 0.

`mode` <small>[Ruleest](../../types/ruleset)</small> <Badge type="tip" text="optional" /><br>
Ruleset of the scores to be returned. Defaults to the specified user's mode.

`limit` <small>Number</small> <Badge type="tip" text="optional" /><br>
Maximum number of results.

`offset` <small>String</small> <Badge type="tip" text="optional" /><br>
Result offset for pagination.

`token` <small>String</small><br>
Access Token.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->