---
outline: deep
---

# Search <Badge type="info" text="GET"/>

## `getSearch`

Searches users and wiki pages.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#search</small>

## Usage

`api.getSearch(token, mode, query, page)`

### Parameters

`token` <small>string</small><br>
Access Token.

`mode` <small>[SearchMode](../../types/parameter/search-mode)</small> <Badge type="tip" text="optional" /><br>
Either `All`, `User`, or `WikiPage`. Default is `All`.

`query` <small>string</small> <Badge type="tip" text="optional" /><br>
Search keyword.

`page` <small>number</small> <Badge type="tip" text="optional" /><br>
Search result page. Ignored for mode `All`.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->