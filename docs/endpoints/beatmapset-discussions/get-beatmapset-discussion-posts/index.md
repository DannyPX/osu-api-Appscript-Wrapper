---
outline: deep
---

# Get Beatmapset Discussion Posts <Badge type="info" text="GET"/>

## `getBeatmapsetDiscussionPosts`

Returns the posts of beatmapset discussions.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-beatmapset-discussion-posts</small>

## Usage

`api.getBeatmapsetDiscussionPosts(beatmapset_discussion_id, limit, page, sort, types, user, with_deleted, token)`

### Parameters

`beatmapset_discussion_id` <small>String</small> <Badge type="tip" text="optional" /><br>
ID of the BeatmapsetDiscussion

`limit` <small>Int</small> <Badge type="tip" text="optional" /><br>
Maximum number of results.

`page` <small>Int</small> <Badge type="tip" text="optional" /><br>
Search result page.

`sort` <small>[DiscussionSort](../types/discussion-sort)</small> <Badge type="tip" text="optional" /><br>
`Descending` for newest first; `Ascending` for oldest first. Defaults to `Descending`.

`types` <small>[DiscussionTypes](../types/discussion-types)</small> <Badge type="tip" text="optional" /><br>
`First`, `Reply`, `System` are the valid values. Defaults to `Reply`.

`user` <small>String</small> <Badge type="tip" text="optional" /><br>
The ID of the User.

`with_deleted` <small>String</small> <Badge type="tip" text="optional" /><br>
This param has no effect as api calls do not currently receive group permissions.

`token` <small>String</small> <Badge type="tip" text="optional" /><br>
Access Token.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format