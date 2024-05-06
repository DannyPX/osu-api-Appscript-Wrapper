---
outline: deep
---

# Get User Beatmaps <Badge type="info" text="GET"/>

## `getUserBeatmaps`

Returns the beatmaps of specified user.

<small>osu!api documentation: https://osu.ppy.sh/docs/function</small>

## Usage

`api.getUserBeatmaps(userId, beatmap_type, limit, offset, token)`

### Parameters

`userId` <small>String</small><br>
The ID of the user.

`beatmap_type` <small>[BeatmapType](../../types/beatmap-type)</small><br>
Beatmap type.

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