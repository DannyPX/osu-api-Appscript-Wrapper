---
outline: deep
---

# Get User Recent Activity <Badge type="info" text="GET"/>

## `getUserRecentActivity`

Returns recent activity.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-user-recent-activity</small>

## Usage

`api.getUserRecentActivity(token, user, limit, offset)`

### Parameters

`token` <small>string</small><br>
Access Token.

`user` <small>number</small><br>
The ID of the user.

`limit` <small>number</small> <Badge type="tip" text="optional" /><br>
Maximum number of results.

`offset` <small>number</small> <Badge type="tip" text="optional" /><br>
Result offset for pagination.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->