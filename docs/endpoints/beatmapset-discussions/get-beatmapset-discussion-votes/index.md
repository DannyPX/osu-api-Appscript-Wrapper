---
outline: deep
---

# Get Beatmapset Discussion Votes <Badge type="info" text="GET"/>

## `getBeatmapsetDiscussionVotes`

Returns the votes given to beatmapset discussions.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-beatmapset-discussion-votes</small>

## Usage

`api.getBeatmapsetDiscussionVotes(beatmapset_discussion_id, limit, page, receiver, score, sort, user, with_deleted, token)`

### Parameters

`beatmapset_discussion_id` <small>String</small> <Badge type="tip" text="optional" /><br>
The ID of the BeatmapsetDiscussion

`limit` <small>Number</small> <Badge type="tip" text="optional" /><br>
Maximum number of results.

`page` <small>Number</small> <Badge type="tip" text="optional" /><br>
Search result page.

`receiver` <small>String</small> <Badge type="tip" text="optional" /><br>
The ID of the User receiving the votes.

`score` <small>[DiscussionScore](../../types/discussion-score)</small> <Badge type="tip" text="optional" /><br>
`Up` for up vote and `Down` for down vote.

`sort` <small>[Sort](../../types/sort)</small> <Badge type="tip" text="optional" /><br>
`Descending` for newest first; `Ascending` for oldest first. Defaults to `Descending`.

`user` <small>String</small> <Badge type="tip" text="optional" /><br>
The ID of the User.

`with_deleted` <small>String</small> <Badge type="tip" text="optional" /><br>
This param has no effect as api calls do not currently receive group permissions.

`token` <small>String</small><br>
Access Token.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->