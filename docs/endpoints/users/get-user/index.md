---
outline: deep
---

# Get User <Badge type="info" text="GET"/>

## `getUser`

This endpoint returns the detail of specified user.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-user</small>

## Usage

`api.getUser(userId, mode, key, token)`

### Parameters

`userId` <small>String</small><br>
The ID of the user.

`mode` <small>[Ruleset](../../types/ruleset)</small> <Badge type="tip" text="optional" /><br>
Ruleset. User default mode will be used if not specified.

`key` <small>String</small> <Badge type="tip" text="optional" /><br>
Type of `user` passed in url parameter. Can be either `id` or `username` to limit lookup by their respective type. Passing empty or invalid value will result in id lookup followed by username lookup if not found.

`token` <small>String</small><br>
Access Token.

::: tip INFO
It's highly recommended to pass key parameter to avoid getting unexpected result (mainly when looking up user with numeric username or nonexistent user id).
:::

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->