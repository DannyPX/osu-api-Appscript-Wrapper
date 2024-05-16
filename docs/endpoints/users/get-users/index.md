---
outline: deep
---

# Get Users <Badge type="info" text="GET"/>

## `getUsers`

Returns list of users.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-users</small>

## Usage

`api.getUsers(token, ids)`

### Parameters

`token` <small>string</small><br>
Access Token.

`ids` <small>number[]</small><br>
User ID to be returned. Up to 50 users can be requested at once.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->