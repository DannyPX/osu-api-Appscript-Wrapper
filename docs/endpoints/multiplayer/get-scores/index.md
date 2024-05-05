---
outline: deep
---

# Get Scores <Badge type="info" text="GET"/> <Badge type="warning" text="LAZER" />

## `getScores`

Returns a list of scores for specified playlist item.

<small>osu!api documentation: https://osu.ppy.sh/docs/function</small>

## Usage

`api.getScores(roomId, playlistId, limit, sort, token)`

### Parameters

`roomId` <small>String</small><br>
ID of the room.

`playlistId` <small>String</small><br>
ID of the playlist item.

`limit` <small>Number</small> <Badge type="tip" text="optional" /><br>
Maximum number of results.

`sort` <small>[MultiplayerScoresSort](../../types/multiplayer-scores-sort)</small> <Badge type="tip" text="optional" /><br>
Sort option for multiplayer scores index.

`token` <small>String</small><br>
Access Token.

`cursor_string` <small>String</small> <Badge type="tip" text="optional" /> <Badge type="danger" text="not implemented" /><br>
CursorString for pagination.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->