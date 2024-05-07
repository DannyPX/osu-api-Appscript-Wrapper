---
outline: deep
---

# Get Events <Badge type="info" text="GET"/>

## `getEvents`

Returns a collection of Events in order of creation time.

<small>osu!api documentation: https://osu.ppy.sh/docs/function</small>

## Usage

`api.getEvents(sort, token)`

### Parameters

`sort` <small>[Sort](../../types/sort)</small> <Badge type="tip" text="optional" /><br>
`Descending` for newest first; `Ascending` for oldest first. Defaults to `Descending`.

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