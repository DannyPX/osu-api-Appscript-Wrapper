---
outline: deep
---

# Lookup Beatmap <Badge type="info" text="GET"/>

## `lookupBeatmap`

Returns beatmap.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#lookup-beatmap</small>

## Usage

`api.lookupBeatmap(token, checksum, filename, beatmap)`

### Parameters

`token` <small>string</small><br>
Access Token.

`checksum` <small>string</small> <Badge type="tip" text="optional" /><br>
A beatmap checksum.

`filename` <small>string</small> <Badge type="tip" text="optional" /><br>
A filename to lookup.

`beatmap` <small>number</small> <Badge type="tip" text="optional" /><br>
A beatmap ID to lookup.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->