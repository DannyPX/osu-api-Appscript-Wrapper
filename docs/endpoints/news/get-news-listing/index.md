---
outline: deep
---

# Get News Listing <Badge type="info" text="GET"/>

## `getNewsListing`

Returns a list of news posts and related metadata.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-news-listing</small>

## Usage

`api.getNewsListing(token, limit, year, cursor_string)`

### Parameters

`token` <small>string</small><br>
Access Token.

`limit` <small>number</small> <Badge type="tip" text="optional" /><br>
Maximum number of posts (12 default, 1 minimum, 21 maximum).

`year` <small>number</small> <Badge type="tip" text="optional" /><br>
Year to return posts from.

`cursor_string` <small>string</small> <Badge type="tip" text="optional" /><br>
CursorString for pagination.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->