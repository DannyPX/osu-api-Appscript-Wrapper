---
outline: deep
---

# Get Beatmaps <Badge type="info" text="GET"/>

## `getBeatmaps`

Returns a list of beatmaps.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-beatmaps</small>

## Usage

`api.getBeatmaps(token, ids)`

### Parameters

`token` <small>string</small><br>
Access Token.

`ids` <small>number[]</small><br>
Beatmap IDs to be returned. Array of IDs. Up to 50 beatmaps can be requested at once.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->