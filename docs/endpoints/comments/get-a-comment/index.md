---
outline: deep
---

# Get a comment <Badge type="info" text="GET"/>

## `getComment`

Gets a comment and its replies up to 2 levels deep.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-a-comment</small>

## Usage

`api.getComment(comment, token)`

### Parameters

`comment` <small>String</small><br>
The comment.

`token` <small>String</small><br>
Access Token.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->