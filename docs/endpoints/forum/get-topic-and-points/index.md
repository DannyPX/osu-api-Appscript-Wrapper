---
outline: deep
---

# Get Topic and Posts <Badge type="info" text="GET"/>

## `getTopicAndPosts`

Get topic and its posts.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-topic-and-posts</small>

## Usage

`api.getTopicAndPosts(token, topic, sort, limit, start, end, cursor_string)`

### Parameters

`token` <small>string</small><br>
Access Token.

`topic` <small>number</small>
The ID of the topic.

`sort` <small>[Sort](../../types/parameter/sort)</small> <Badge type="tip" text="optional" /><br>
`Descending` for newest first; `Ascending` for oldest first. Defaults to `Ascending`.

`limit` <small>number</small> <Badge type="tip" text="optional" /><br>
Maximum number of posts to be returned (20 default, 50 at most).

`start` <small>number</small> <Badge type="tip" text="optional" /><br>
First post id to be returned with `sort` set to `Ascending`. This parameter is ignored if `cursor_string` is specified.

`end` <small>number</small> <Badge type="tip" text="optional" /><br>
First post id to be returned with `sort` set to `Descending`. This parameter is ignored if `cursor_string` is specified.

`cursor_string` <small>string</small> <Badge type="tip" text="optional" /><br>
CursorString for pagination.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->