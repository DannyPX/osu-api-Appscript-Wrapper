---
outline: deep
---

# Get Topic and Posts <Badge type="info" text="GET"/>

## `getTopicAndPosts`

Get topic and its posts.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-topic-and-posts</small>

## Usage

`api.getTopicAndPosts(sort, token)`

### Parameters

`sort` <small>[Sort](../../types/sort)</small> <Badge type="tip" text="optional" /><br>
`Descending` for newest first; `Ascending` for oldest first. Defaults to `Descending`.

`token` <small>String</small><br>
Access Token.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->