---
outline: deep
---

# Get Users <Badge type="info" text="GET"/>

## `getUsers`

Returns list of users.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-users</small>

## Usage

`api.getUsers(ids, token)`

### Parameters

`ids` <small>Number[]</small><br>
User ID to be returned. Specify once for each user id requested. Up to 50 users can be requested at once. Example `[1, 2]`.

`token` <small>String</small><br>
Access Token.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->