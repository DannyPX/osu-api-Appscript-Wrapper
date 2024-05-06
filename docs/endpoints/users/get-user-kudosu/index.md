---
outline: deep
---

# Get User Kudosu <Badge type="info" text="GET"/>

## `getUserKudosu`

Returns kudosu history.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-user-kudosu</small>

## Usage

`api.getUserKudosu(userId, limit, offset, token)`

### Parameters

`userId` <small>String</small><br>
The ID of the user.

`limit` <small>String</small> <Badge type="tip" text="optional" /><br>
Maximum number of results.

`offset` <small>String</small> <Badge type="tip" text="optional" /><br>
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