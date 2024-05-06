---
outline: deep
---

# Lookup Changelog Build <Badge type="info" text="GET"/>

## `getLookupChangelogBuild`

Returns details of the specified build.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#lookup-changelog-build</small>

## Usage

`api.getLookupChangelogBuild(changelog, key, message_formats, token)`

### Parameters

`changelog` <small>String</small><br>
Build version, update stream name, or build ID.

`key` <small>String</small> <Badge type="tip" text="optional" /><br>
Unset to query by build version or stream name, or `id` to query by build ID.

`message_formats` <small>String</small> <Badge type="tip" text="optional" /><br>
html, markdown. Default to both.

`token` <small>String</small><br>
Access Token.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->