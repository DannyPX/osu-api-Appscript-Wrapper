---
outline: deep
---

# Client Credentials Grant <Badge type="tip" text="POST"/>

## `ClientCredentialsGrand`

The client credential flow provides a way for developers to get access tokens that do not have associated user permissions; as such, these tokens are considered as guest users.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#client-credentials-grant</small>

## Usage

`api.ClientCredentialsGrand(client_id, client_secret)`

### Parameters

`client_id` <small>String</small><br>
The Client ID you received when you registered.

`client_secret` <small>String</small><br>
The client secret of your application.

## Example

### Code

::: code-group
```js [code.gs]
// Params
const client_id = ***
const client_secret = ***

// Call Function
var response = api.ClientCredentialsGrand(client_id, client_secret)

// Output
console.log(response)
```
:::

### Output

::: code-group
```json [console]
{
    "access_token": "verylongstring",
    "expires_in": 86400,
    "token_type": "Bearer"
}
```
:::

## Response Format

`token_type` <small>String</small><br>
The type of token, this should always be `Bearer`.

`expires_in` <small>Int</small><br>
The number of seconds the token will be valid for.

`access_token` <small>String</small><br>
The access token.