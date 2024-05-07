---
outline: deep
---

# Get Topic and Posts <Badge type="info" text="GET"/>

## `getTopicAndPosts`

Get topic and its posts.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-topic-and-posts</small>

## Usage

`api.getTopicAndPosts(sort, limit, start, end, token)`

### Parameters

`sort` <small>[Sort](../../types/sort)</small> <Badge type="tip" text="optional" /><br>
`Descending` for newest first; `Ascending` for oldest first. Defaults to `Ascending`.

`token` <small>String</small><br>
Access Token.

`limit` <small>String</small> <Badge type="tip" text="optional" /> <Badge type="danger" text="not implemented" /><br>
Maximum number of posts to be returned (20 default, 50 at most).

`start` <small>String</small> <Badge type="tip" text="optional" /> <Badge type="danger" text="not implemented" /><br>
First post id to be returned with `sort` set to `Ascending`. This parameter is ignored if `cursor_string` is specified.

`end` <small>String</small> <Badge type="tip" text="optional" /> <Badge type="danger" text="not implemented" /><br>
First post id to be returned with `sort` set to `Descending`. This parameter is ignored if `cursor_string` is specified.

`cursor_string` <small>String</small> <Badge type="tip" text="optional" /> <Badge type="danger" text="not implemented" /><br>
CursorString for pagination.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->