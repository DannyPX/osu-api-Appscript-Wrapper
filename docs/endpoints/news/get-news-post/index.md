---
outline: deep
---

# Get News Post <Badge type="info" text="GET"/>

## `getNewsPost`

Returns details of the specified news post.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-news-post</small>

## Usage

`api.getNewsPost(token, news, key)`

### Parameters

`token` <small>string</small><br>
Access Token.

`news` <small>string</small><br>
News post slug or ID.

`key` <small>string</small> <Badge type="tip" text="optional" /><br>
Unset to query by slug, or `id` to query by ID.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->