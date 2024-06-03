---
outline: deep
---

# Get Match <Badge type="info" text="GET"/> <Badge type="warning" text="undocumented" />

## `getMatch`

Returns the match.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-apiv2matchesmatch</small>

## Usage

`api.getMatch(token, match, after, before, limit)`

### Parameters

`token` <small>string</small><br>
Access Token

`match` <small>number</small><br>
The ID of the match.

`after` <small>number</small> <Badge type="tip" text="optional" /><br>
Result after event `id`.

`before` <small>number</small> <Badge type="tip" text="optional" /><br>
Result before event `id`.

`limit` <small>number</small> <Badge type="tip" text="optional" /><br>
Maximum number of results.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->