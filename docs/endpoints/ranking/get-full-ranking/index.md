---
outline: deep
---

# Get Full Ranking <Badge type="info" text="GET"/> <Badge type="tip" text="CUSTOM"/>

## `getFullRanking`

Returns the full rankings between set pages

::: tip INFO
This is not an official endpoint on the osu!api.
:::

## Usage

`api.getFullRanking(mode, type, country, filter, spotlight, variant, pageStart, pageEnd, token)`

### Parameters

`mode` <small>[Ruleset](../../types/ruleset)</small><br>
The **Ruleset** to get scores for.

`type` <small>[RankingType](../../types/ranking-type)</small><br>
Different ranking types.

`country` <small>String</small> <Badge type="tip" text="optional" /><br>
Filter ranking by country code. Only available for `type` of `Performance`.

`filter` <small>String</small> <Badge type="tip" text="optional" /><br>
Either `all` (default) or `friends`.

`spotlight` <small>String</small> <Badge type="tip" text="optional" /><br>
The `id` of the spotlight if type is `charts`. Ranking for latest spotlight will be returned if not specified.

`variant` <small>String</small> <Badge type="tip" text="optional" /><br>
Filter ranking to specified mode variant. For mode of mania, it's either `4k` or `7k`. Only available for `type` of `Performance`.

`pageStart` <small>Number</small> <Badge type="tip" text="optional" /><br>
Start page. Starts at 1.

`pageEnd` <small>Number</small> <Badge type="tip" text="optional" /><br>
End page. Includes this page in result.

`token` <small>String</small><br>
Access Token.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->