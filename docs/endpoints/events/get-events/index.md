---
outline: deep
---

# Get Events <Badge type="info" text="GET"/>

## `getEvents`

Returns a collection of Events in order of creation time.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#events</small>

## Usage

`api.getEvents(token, sort, cursor_string)`

### Parameters

`token` <small>string</small><br>
Access Token.

`sort` <small>[Sort](../../types/parameter/sort)</small> <Badge type="tip" text="optional" /><br>
`Descending` for newest first; `Ascending` for oldest first. Defaults to `Descending`.

`cursor_string` <small>string</small> <Badge type="tip" text="optional" /><br>
CursorString for pagination.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->