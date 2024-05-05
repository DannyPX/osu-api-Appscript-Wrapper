---
outline: deep
---

# Get Beatmap <Badge type="info" text="GET"/>

## `getBeatmap`

Gets beatmap data for the specified beatmap ID.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-beatmap</small>

## Usage

`api.getBeatmap(beatmapId, token)`

### Parameters

`beatmapId` <small>String</small><br>
The ID of a beatmap.

`token` <small>String</small><br>
Access Token.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->