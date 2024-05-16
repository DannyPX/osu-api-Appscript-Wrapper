---
outline: deep
---

# Get Beatmap <Badge type="info" text="GET"/>

## `getBeatmap`

Gets beatmap data for the specified beatmap ID.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-beatmap</small>

## Usage

`api.getBeatmap(token, beatmap)`

### Parameters

`token` <small>string</small><br>
Access Token.

`beatmap` <small>number</small><br>
The ID of the beatmap.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->