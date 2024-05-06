---
outline: deep
---

# Get Wiki Page <Badge type="info" text="GET"/>

## `getWikiPage`

The wiki article or image data.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-wiki-page</small>

## Usage

`api.getWikiPage(locale, path, token)`

### Parameters

`locale` <small>String</small><br>
Two-letter language code of the wiki page.

`path` <small>String</small><br>
The path name of the wiki page.

`token` <small>String</small><br>
Access Token.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->