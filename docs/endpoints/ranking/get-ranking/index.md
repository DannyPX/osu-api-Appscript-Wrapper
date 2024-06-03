---
outline: deep
---

# Get Ranking <Badge type="info" text="GET"/>

## `getRanking`

Gets the current ranking for the specified type and game mode.

<small>osu!api documentation: https://osu.ppy.sh/docs/function</small>

## Usage

`api.getRanking(token, mode, type, country, cursor, filter, spotlight, variant)`

### Parameters

`token` <small>string</small><br>
Access Token.

`mode` <small>[Ruleset](../../types/ruleset)</small><br>
The **Ruleset** to get scores for.

`type` <small>[RankingType](../../types/ranking-type)</small><br>
Different ranking types.

`country` <small>string</small> <Badge type="tip" text="optional" /><br>
Filter ranking by country code. Only available for `type` of `Performance`.

`cursor` <small>string</small> <Badge type="tip" text="optional" /><br>
[Cursor](https://osu.ppy.sh/docs/index.html#cursor).

`filter` <small>string</small> <Badge type="tip" text="optional" /><br>
Either `all` (default) or `friends`.

`spotlight` <small>string</small> <Badge type="tip" text="optional" /><br>
The `id` of the spotlight if type is `charts`. Ranking for latest spotlight will be returned if not specified.

`variant` <small>string</small> <Badge type="tip" text="optional" /><br>
Filter ranking to specified mode variant. For mode of mania, it's either `4k` or `7k`. Only available for `type` of `Performance`.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->