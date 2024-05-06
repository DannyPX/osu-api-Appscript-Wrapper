---
outline: deep
---

# Get Changelog Build <Badge type="info" text="GET"/>

## `getChangelogBuild`

Returns details of the specified build.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-changelog-build</small>

## Usage

`api.getChangelogBuild(stream, build, token)`

### Parameters

`stream` <small>String</small><br>
Update stream name.

`build` <small>String</small><br>
Build version.

`token` <small>String</small><br>
Access Token.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->