---
outline: deep
---

# Get User <Badge type="info" text="GET"/>

## `getUser`

This endpoint returns the detail of specified user.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-user</small>

## Usage

`api.getUser(token, user, mode, key)`

### Parameters

`token` <small>string</small><br>
Access Token.

`user` <small>number</small><br>
Id or @-prefixed username of the user. Previous usernames are also checked in some cases.

`mode` <small>[Ruleset](../../types/parameter/ruleset)</small> <Badge type="tip" text="optional" /><br>
Ruleset. User default mode will be used if not specified.

`key` <small>string</small> <Badge type="tip" text="optional" /><br>
Type of `user` passed in url parameter. Can be either `id` or `username` to limit lookup by their respective type. Passing empty or invalid value will result in id lookup followed by username lookup if not found. This parameter has been deprecated. Prefix `user` parameter with `@` instead to lookup by username.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->