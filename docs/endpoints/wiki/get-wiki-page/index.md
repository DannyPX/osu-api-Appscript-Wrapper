---
outline: deep
---

# Get Wiki Page <Badge type="info" text="GET"/>

## `getWikiPage`

The wiki article or image data.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-wiki-page</small>

## Usage

`api.getWikiPage(token, locale, path)`

### Parameters

`token` <small>string</small><br>
Access Token.

`locale` <small>string</small><br>
Two-letter language code of the wiki page.

`path` <small>string</small><br>
The path name of the wiki page.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->