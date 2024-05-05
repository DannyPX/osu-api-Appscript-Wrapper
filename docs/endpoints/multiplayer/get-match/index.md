---
outline: deep
---

# Get Match <Badge type="info" text="GET"/>

## `getMatch`

Returns the match.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-apiv2matchesmatch</small>

## Usage

`api.getMatch(matchId, before, limit, token)`

### Parameters

`matchId` <small>String</small><br>
The ID of the match.

`before` <small>Number</small> <Badge type="tip" text="optional" /><br>
Result before event id.

`limit` <small>Number</small> <Badge type="tip" text="optional" /><br>
Maximum number of results.

`token` <small>String</small><br>
Access Token

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->