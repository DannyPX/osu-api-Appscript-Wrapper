---
outline: deep
---

# Get Changelog Listing <Badge type="info" text="GET"/>

## `getChangelogListing`

Returns a listing of update streams, builds, and changelog entries.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-changelog-listing</small>

## Usage

`api.getChangelogListing(from, max_id, stream, to, message_formats, token)`

### Parameters

`from` <small>String</small> <Badge type="tip" text="optional" /><br>
Minimum build version.

`max_id` <small>String</small> <Badge type="tip" text="optional" /><br>
Maximum build ID.

`stream` <small>String</small> <Badge type="tip" text="optional" /><br>
Stream name to return builds from.

`to` <small>String</small> <Badge type="tip" text="optional" /><br>
Maximum build version.

`message_formats` <small>String</small> <Badge type="tip" text="optional" /><br>
`html`, `markdown`. Default to both.

`token` <small>String</small><br>
Access Token.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->