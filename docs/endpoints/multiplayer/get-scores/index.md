---
outline: deep
---

# Get Scores <Badge type="info" text="GET"/> <Badge type="warning" text="LAZER" />

## `getScores`

Returns a list of scores for specified playlist item.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-scores</small>

## Usage

`api.getScores(token, room, playlist, limit, sort, cursor_string)`

### Parameters

`token` <small>string</small><br>
Access Token.

`room` <small>number</small><br>
The ID of the room.

`playlist` <small>number</small><br>
The ID of the playlist item.

`limit` <small>number</small> <Badge type="tip" text="optional" /><br>
Maximum number of results.

`sort` <small>[MultiplayerScoresSort](../../types/parameter/multiplayer-scores-sort)</small> <Badge type="tip" text="optional" /><br>
Sort option for multiplayer scores index.

`cursor_string` <small>string</small> <Badge type="tip" text="optional" /><br>
CursorString for pagination.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->