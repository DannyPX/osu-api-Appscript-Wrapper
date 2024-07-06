---
outline: deep
---

# Get User Beatmaps <Badge type="info" text="GET"/>

## `getUserBeatmaps`

Returns the beatmaps of specified user.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-user-beatmaps</small>

## Usage

`api.getUserBeatmaps(token, user, type, limit, offset)`

### Parameters

`token` <small>string</small><br>
Access Token.

`user` <small>number</small><br>
The ID of the user.

`type` <small>[BeatmapType](../../types/parameter/beatmap-type)</small><br>
Beatmap type.

`limit` <small>Number</small> <Badge type="tip" text="optional" /><br>
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