---
outline: deep
---

# Get Beatmaps <Badge type="info" text="GET"/>

## `getBeatmaps`

Returns a list of beatmaps.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-beatmaps</small>

## Usage

`api.getBeatmaps(ids, token)`

### Parameters

`ids` <small>String[]</small><br>
Beatmap IDs to be returned. Specify once for each beatmap ID requested. Up to 50 beatmaps can be requested at once.

`token` <small>String</small><br>
Access Token.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->