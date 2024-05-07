---
outline: deep
---

# Client Credentials Grant <Badge type="tip" text="POST"/>

## `ClientCredentialsGrant`

The client credential flow provides a way for developers to get access tokens that do not have associated user permissions; as such, these tokens are considered as guest users.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#client-credentials-grant</small>

## Usage

`api.ClientCredentialsGrant(client_id, client_secret)`

### Parameters

`client_id` <small>String</small><br>
The Client ID you received when you [registered](https://osu.ppy.sh/home/account/edit#new-oauth-application).

`client_secret` <small>String</small><br>
The client secret of your application.

`grant_type` <small>String</small> <Badge type="danger" text="not implemented" /><br>
This must always be `client_credentials`.

`scope` <small>String</small> <Badge type="danger" text="not implemented" /><br>
Must be `public`; other scopes have no meaningful effect.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->