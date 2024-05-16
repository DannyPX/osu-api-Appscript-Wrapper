---
outline: deep
---

# Get a comment <Badge type="info" text="GET"/>

## `getComment`

Gets a comment and its replies up to 2 levels deep.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-a-comment</small>

## Usage

`api.getComment(token, comment)`

### Parameters

`token` <small>string</small><br>
Access Token.

`comment` <small>string</small><br>
The comment.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->