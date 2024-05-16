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

`client_id` <small>number</small><br>
The Client ID you received when you [registered](https://osu.ppy.sh/home/account/edit#new-oauth-application).

`client_secret` <small>string</small><br>
The client secret of your application.

`grant_type` <small>string</small><br>
This must always be `client_credentials`.

`scope` <small>[Scope](../../types/scope)</small><br>
Must be `Public`; other scopes have no meaningful effect.

## Response Format

<!--@include: ./response.md-->

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json
