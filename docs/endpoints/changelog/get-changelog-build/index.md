---
outline: deep
---

# Get Changelog Build <Badge type="info" text="GET"/>

## `getChangelogBuild`

Returns details of the specified build.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-changelog-build</small>

## Usage

`api.getChangelogBuild(token, stream, build)`

### Parameters

`token` <small>string</small><br>
Access Token.

`stream` <small>string</small><br>
Update stream name.

`build` <small>string</small><br>
Build version.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->