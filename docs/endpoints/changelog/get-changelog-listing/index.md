---
outline: deep
---

# Get Changelog Listing <Badge type="info" text="GET"/>

## `getChangelogListing`

Returns a listing of update streams, builds, and changelog entries.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-changelog-listing</small>

## Usage

`api.getChangelogListing(token, from, max_id, stream, to, message_formats)`

### Parameters

`token` <small>string</small><br>
Access Token.

`from` <small>string</small> <Badge type="tip" text="optional" /><br>
Minimum build version.

`max_id` <small>string</small> <Badge type="tip" text="optional" /><br>
Maximum build ID.

`stream` <small>string</small> <Badge type="tip" text="optional" /><br>
Stream name to return builds from.

`to` <small>string</small> <Badge type="tip" text="optional" /><br>
Maximum build version.

`message_formats` <small>string[]</small> <Badge type="tip" text="optional" /><br>
`html`, `markdown`. Default to both.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->