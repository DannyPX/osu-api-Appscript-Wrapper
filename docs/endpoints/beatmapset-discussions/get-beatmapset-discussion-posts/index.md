---
outline: deep
---

# Get Beatmapset Discussion Posts <Badge type="info" text="GET"/>

## `getBeatmapsetDiscussionPosts`

Returns the posts of beatmapset discussions.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-beatmapset-discussion-posts</small>

## Usage

`api.getBeatmapsetDiscussionPosts(token, beatmapset_discussion_id, limit, page, sort, types, user, with_deleted)`

### Parameters

`token` <small>string</small><br>
Access Token.

`beatmapset_discussion_id` <small>number</small> <Badge type="tip" text="optional" /><br>
The ID of the BeatmapsetDiscussion

`limit` <small>number</small> <Badge type="tip" text="optional" /><br>
Maximum number of results.

`page` <small>number</small> <Badge type="tip" text="optional" /><br>
Search result page.

`sort` <small>[Sort](../../types/parameter/sort)</small> <Badge type="tip" text="optional" /><br>
`Descending` for newest first; `Ascending` for oldest first. Defaults to `Descending`.

`types` <small>[DiscussionTypes](../../types/parameter/discussion-types)[]</small> <Badge type="tip" text="optional" /><br>
`First`, `Reply`, `System` are the valid values. Defaults to `Reply`.

`user` <small>number</small> <Badge type="tip" text="optional" /><br>
The ID of the User.

`with_deleted` <small>string</small> <Badge type="tip" text="optional" /><br>
This param has no effect as api calls do not currently receive group permissions.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->