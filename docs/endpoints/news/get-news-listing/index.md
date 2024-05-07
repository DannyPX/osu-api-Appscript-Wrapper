---
outline: deep
---

# Get News Listing <Badge type="info" text="GET"/>

## `getNewsListing`

Returns a list of news posts and related metadata.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-news-listing</small>

## Usage

`api.getNewsListing(limit, year, token)`

### Parameters

`limit` <small>String</small> <Badge type="tip" text="optional" /><br>
Maximum number of posts (12 default, 1 minimum, 21 maximum).

`year` <small>String</small> <Badge type="tip" text="optional" /><br>
Year to return posts from.

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