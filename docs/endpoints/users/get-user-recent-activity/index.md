---
outline: deep
---

# Get User Recent Activity <Badge type="info" text="GET"/>

## `getUserRecentActivity`

Returns recent activity.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-user-recent-activity</small>

## Usage

`api.getUserRecentActivity(userId, limit, offset, token)`

### Parameters

`userId` <small>String</small><br>
The ID of the user.

`limit` <small>Number</small><br>
Maximum number of results.

`offset` <small>String</small><br>
Result offset for pagination.

`token` <small>String</small><br>
Access Token.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->