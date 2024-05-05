---
outline: deep
---

# Lookup Beatmap <Badge type="info" text="GET"/>

## `getLookupBeatmap`

Returns beatmap.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#lookup-beatmap</small>

## Usage

`api.getLookupBeatmap(checksum, filename, beatmapId, token)`

### Parameters

`checksum` <small>String</small> <Badge type="tip" text="optional" /><br>
A beatmap checksum.

`filename` <small>String</small> <Badge type="tip" text="optional" /><br>
A filename to lookup.

`beatmapId` <small>String</small> <Badge type="tip" text="optional" /><br>
A beatmap ID to lookup.

`token` <small>String</small><br>
Access Token.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format