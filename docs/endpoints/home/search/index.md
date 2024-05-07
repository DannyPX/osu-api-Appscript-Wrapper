---
outline: deep
---

# Search <Badge type="info" text="GET"/>

## `getSearch`

Searches users and wiki pages.

<small>osu!api documentation: https://osu.ppy.sh/docs/function</small>

## Usage

`api.getSearch(mode, query, page, token)`

### Parameters

`mode` <small>[SearchMode](../../types/search-mode)</small> <Badge type="tip" text="optional" /><br>
Either `All`, `User`, or `WikiPage`. Default is `All`.

`query` <small>String</small> <Badge type="tip" text="optional" /><br>
Search keyword.

`page` <small>Number</small> <Badge type="tip" text="optional" /><br>
Search result page. Ignored for mode `All`.

`token` <small>String</small><br>
Access Token.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->