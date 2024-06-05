---
outline: deep
---

# Get Beatmapset Discussion Votes <Badge type="info" text="GET"/>

## `getBeatmapsetDiscussionVotes`

Returns the votes given to beatmapset discussions.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-beatmapset-discussion-votes</small>

## Usage

`api.getBeatmapsetDiscussionVotes(token, beatmapset_discussion_id, limit, page, receiver, score, sort, user, with_deleted)`

### Parameters

`token` <small>string</small><br>
Access Token.

`beatmapset_discussion_id` <small>number</small> <Badge type="tip" text="optional" /><br>
The ID of the BeatmapsetDiscussion

`limit` <small>number</small> <Badge type="tip" text="optional" /><br>
Maximum number of results.

`page` <small>number</small> <Badge type="tip" text="optional" /><br>
Search result page.

`receiver` <small>number</small> <Badge type="tip" text="optional" /><br>
The ID of the User receiving the votes.

`score` <small>[DiscussionScore](../../types/parameter/discussion-score)</small> <Badge type="tip" text="optional" /><br>
`Up` for up vote and `Down` for down vote.

`sort` <small>[Sort](../../types/parameter/sort)</small> <Badge type="tip" text="optional" /><br>
`Descending` for newest first; `Ascending` for oldest first. Defaults to `Descending`.

`user` <small>number</small> <Badge type="tip" text="optional" /><br>
The ID of the User.

`with_deleted` <small>string</small> <Badge type="tip" text="optional" /><br>
The ID of the User.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->